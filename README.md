# OpenAI Speech Generation Project

## Description
This project is a JavaScript application that uses OpenAI's API to generate speech from text. It's designed for educational purposes at Georgian College by Team Open AI. The application reads a specified text input and generates an MP3 file with the spoken version of that text using OpenAI's text-to-speech capabilities. 
- Running text.js


Also an option to insert a pdf file in replace of text input
- Running pdf.js

Create a randomly generated story based on your own prompt
- Running story.js

## Prerequisites
Before running this project, you will need:
- Node.js installed on your machine.
- An OpenAI API key. (API Key will be given to you)

## Installation
To run this project, follow these steps:

1. **Clone the Repository:**
   ```sh
   git clone [repository-url]
   cd [repository-directory] 

2. **Install Dependencies:**
    ```sh
    npm install dotenv axios openai pdf-parse

3. **Create a .env file:**
    ```sh
   In the  .env enter the api key  provided or generate your own at openai website 

4. **Run APP:**
    ```sh
    node [filename].js

5. **Listen to MP3:**
    ```sh
    play the speech.mp3 file 