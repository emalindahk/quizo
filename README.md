# Quizo App

This is a web application that generates trivia questions using the OpenAI ChatGPT API. It allows users to select a category and difficulty level to generate a set of trivia questions with multiple-choice options.

## How to Run

To run the Trivia App locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/emalindahk/quizo.git
   ```

2. Navigate to the project directory:
   ```
   cd trivia-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Set up the environment variables:
   - Create a `.env` file in the project root directory.
   - Add the following environment variable with your Api url:
     ```
     REACT_APP_PUBLIC_API=<chat_gpt_api_url>
     ```

5. Start the server:
   ```
   npm start
   ```

6. The Trivia App will be accessible at `http://localhost:3000` in your browser.

## Usage

1. Select a category and difficulty level from the provided options.
2. Click the "Generate Questions" button.
3. The Trivia App will send a request to the ChatGPT API (`https://gpt-questions.onrender.com/questions`) with the selected category and difficulty level. Link to repo (`https://github.com/emalindahk/gpt-api`)
4. The API will generate a set of trivia questions using the ChatGPT model.
5. The generated questions will be displayed on the Trivia App's interface, along with multiple-choice options.
6. Answer the questions and check your responses.

**Note:** The Trivia App uses the ChatGPT API provided by OpenAI. Make sure you have a stable internet connection to successfully generate and display the trivia questions.
