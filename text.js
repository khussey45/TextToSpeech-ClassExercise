// text to speech from user input


const fs = require('fs');
const path = require('path');
const OpenAI = require('openai');

require('dotenv').config();

const openai = new OpenAI(process.env.OPENAI_API_KEY);

const speechFile = path.resolve('./speech.mp3');

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
