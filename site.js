
// import the utility functions "decodeHtml" and "shuffle"
import { decodeHtml, shuffle } from './utils.js' 

// get the elements from the DOM
const questionElement = document.querySelector('#question')
const answersElement = document.querySelector('#answers')
const nextQuestionElement = document.querySelector('#nextQuestion')

// IIFE (so we can use async/await)
;(async () => {

	// todo: create your "getNextQuestion" function

	const getNextQuestion = async () => {
		try {
			const url = 'https://opentdb.com/api.php?amount=1&category=21&difficulty=easy&type=multiple'
			const response = await fetch(url)
			const json = await response.json()
			const { question, correct_answer: correct, incorrect_answers: incorrect } = json.results[0]
			const answers = shuffle([ ...incorrect, correct ])
			return { question, answers, correct }

		}catch (err) {
			console.error('Error fetching question: ', err)
			alert('Nope, something went wrong')
		}
	}
	// console.log(await getNextQuestion())
	// todo: create your "renderQuestion" function
	const renderQuestion = ({ question, answers, correct }) => {
		answersElement.innerHTML = ''
		questionElement.innerHTML = decodeHtml(question)
		questionElement.classList.add('glitch')
		answers.forEach(answer => {
			const btn = document.createElement('button')
			btn.innerHTML = decodeHtml(answer)
			btn.addEventListener('click', () => {
				if (answer === correct) {
					btn.classList.add('correct')
					answersElement.querySelectorAll('button').forEach(b => b.disabled = true)
					alert('Correct!')
					return
				}
				btn.disabled = true
				btn.classList.add('incorrect')
				alert('Incorrect!')
			})
			answersElement.appendChild(btn)
		})
	}
	// console.log(await renderQuestion(await getNextQuestion()))
	// todo: add the event listener to the "nextQuestion" button

	nextQuestionElement.addEventListener('click', async () => {
		renderQuestion(await getNextQuestion())
		nextQuestionElement.disabled = true
		setTimeout(() => nextQuestionElement.disabled = false, 10000)
	})
})()

// mimic a click on the "nextQuestion" button to show the first question
nextQuestionElement.click()
