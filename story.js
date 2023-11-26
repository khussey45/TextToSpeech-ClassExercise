require('dotenv').config();
const axios = require('axios');

async function generateStory(prompt) {
    const headers = {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
    };

    const data = {
        model: "text-davinci-003", // or "gpt-4" depending on availability
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
