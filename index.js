import venom from 'venom-bot';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import context from './systemContext.js';

dotenv.config();

venom.create({
    session: 'chatbot-ai',
    browserArgs: ['--headless=new']
})
    .then(
        (client) => startBot(client)
    )
    .catch(
        (error) => console.error('Erro ao iniciar o bot:', error)
    );

async function startBot (client) {
    client.onMessage(async (message) => {
        const user = message.from;
        
        if (message.type !== 'chat') {
            return;
        }

        const answer = await getAnswerForQuestion(message.body);
        if (answer) {
            await client.sendText(user, answer);
        }
    });
}

async function getAnswerForQuestion (question) {
    try {
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'mistralai/mistral-small-3.2-24b-instruct:free',
                messages: [
                    {
                        role: 'system',
                        content: context
                    },
                    {
                        role: 'user',
                        content: question
                    }
                ]
            })
        });

        const data = await response.json();

        if (data?.choices?.[0]?.message?.content) {
            return data.choices[0].message.content.trim();
        } else {
            console.warn('Resposta inesperada da API', data);
            return 'Desculpe, não consegui entender sua pergunta.';
        }

    } catch (error) {
        console.error('Erro a o consulta a AI', error);
        return 'Houve um erro ao gerar a resposta.';      
    }
}