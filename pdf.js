// Converting a pdf (under 4096 characters) to speech mp3 file


const fs = require('fs'); // imports file system module
const path = require('path'); // provides utilities working with files & directories
const OpenAI = require('openai'); // imports openai module
const pdfParse = require('pdf-parse');

require('dotenv').config(); //imports the .env module 

const openai = new OpenAI(process.env.OPENAI_API_KEY);  // where the api key is initialized 

const pdfFilePath = path.resolve('./altman.pdf'); // reads the pdf the user inputs

const speechFile = path.resolve('./speech2.mp3'); // creates the path for  the mp3 file 

// Created this function to read the pdf file 
async function readPdf(filePath) {
  const dataBuffer = fs.readFileSync(filePath);
  const data = await pdfParse(dataBuffer);
  return data.text;
}

// main function that converts the pdf to mp3
async function main() {
  try {
    const pdfText = await readPdf(pdfFilePath);

    const mp3 = await openai.audio.speech.create({
      model: "tts-1",
      voice: "alloy",
      input: pdfText,
    });

    const buffer = Buffer.from(await mp3.arrayBuffer());
    await fs.promises.writeFile(speechFile, buffer);
    console.log(`MP3 file saved to ${speechFile}`);
  } catch (error) {
    console.error('Error occurred:', error);
  }
}

main();
