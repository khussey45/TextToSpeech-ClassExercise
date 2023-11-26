// Creating a random generated story based on the prompt the user creates at the bottom

require('dotenv').config();  //imports the .env module 
const axios = require('axios'); // imports axios module to enable http requests for openai api


// Story generate function that uses openai trained models to create a story based on a prompt
async function generateStory(prompt) {
    const headers = {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
    };

    const data = {
        model: "text-davinci-003", 
        prompt: prompt,
        max_tokens: 500
    };

    try {
        const response = await axios.post('https://api.openai.com/v1/completions', data, { headers: headers });
        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Error generating story:', error);
        return null;
    }
}


const prompt = "Write a story about a programmer that discovered aliens.";
generateStory(prompt).then(story => console.log(story));
