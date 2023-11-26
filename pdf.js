// Converting a pdf (under 4096 characters) to speech mp3 file


const fs = require('fs');
const path = require('path');
const OpenAI = require('openai');
const pdfParse = require('pdf-parse');

require('dotenv').config();

const openai = new OpenAI(process.env.OPENAI_API_KEY);

const pdfFilePath = path.resolve('./altman.pdf');
const speechFile = path.resolve('./speech2.mp3');

async function readPdf(filePath) {
  const dataBuffer = fs.readFileSync(filePath);
  const data = await pdfParse(dataBuffer);
  return data.text;
}

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
