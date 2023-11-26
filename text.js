// text to speech from user input


const fs = require('fs'); // imports file system module
const path = require('path'); // provides utilities working with files & directories
const OpenAI = require('openai'); // imports openai module

require('dotenv').config(); //imports the .env module 

const openai = new OpenAI(process.env.OPENAI_API_KEY); // where the api key is initialized 

const speechFile = path.resolve('./speech.mp3'); // creates the path for  the mp3 file 


// created main function that converts the text input into an mp3 file of a speech version 
async function main() {
  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: "alloy",
    input: "This is our Javascript Project for Georgian College. We are team Open AI, with the search for AGI",
  });
  console.log(speechFile);
  const buffer = Buffer.from(await mp3.arrayBuffer());
  await fs.promises.writeFile(speechFile, buffer);
}

main();
