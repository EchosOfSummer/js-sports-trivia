# js-sports-trivia

`js-sports-trivia` is a browser-based sports trivia game built with HTML, CSS, and modern JavaScript modules.

The game retrieves easy multiple-choice sports questions from the Open Trivia Database, shuffles the answer choices, and lets the player select an answer before moving to the next question.

## Features

- Fetches sports trivia questions from the Open Trivia Database API.
- Displays one multiple-choice question at a time.
- Randomizes answer order.
- Provides immediate correct or incorrect feedback.
- Disables answer buttons after a correct answer.
- Includes a button to load the next question.
- Decodes HTML entities returned by the trivia API.
- Uses a simple browser-based interface with no backend server.

## Built With

- HTML5
- CSS3
- JavaScript ES modules
- Fetch API
- Open Trivia Database API

## How It Works

When the page loads, the application requests an easy sports question from the Open Trivia Database. The question's correct and incorrect answers are combined and shuffled before being rendered as buttons.

Selecting an answer provides feedback through the interface and an alert message. The **Next Question** button requests another question and is temporarily disabled after use to reduce accidental repeated requests.

## Project Structure

```text
js-sports-trivia/
├── index.htm     # Main trivia game page
├── site.css      # Game styling
├── site.js       # API requests, rendering, and answer handling
└── utils.js      # HTML decoding and answer shuffling helpers
```

## Running Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/EchosOfSummer/js-sports-trivia.git
   cd js-sports-trivia
   ```

2. Open `index.htm` in a modern web browser, or serve the directory with a local web server.

For example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/index.htm`.

## External Service

The game uses the Open Trivia Database endpoint configured in `site.js`:

```text
https://opentdb.com/api.php?amount=1&category=21&difficulty=easy&type=multiple
```

An internet connection is required to load new questions.

## Current Limitations

- Questions depend on the availability of the external trivia API.
- There is no score tracking or question history.
- The game does not currently save player progress.
- API and network errors are handled with a basic alert message.

## License

No license has been specified for this repository yet.
