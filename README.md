# Chatbot de WhatsApp com Inteligência Artificial – Grátis e Fácil!

Este projeto é um chatbot que conecta o WhatsApp a um modelo de Inteligência Artificial (IA), utilizando a API da **OpenRouter** para gerar respostas e a biblioteca **Venom** para integrar ao WhatsApp Web de forma local e gratuita.

Ideal para projetos pessoais, testes, protótipos ou atendimento automatizado com linguagem natural.

---

## Funcionalidades

- Conecta-se ao seu número de WhatsApp via Venom
- Escuta e responde mensagens automaticamente
- IA ativada por padrão (usuário pode desligar ou ligar)
- Integração com modelos gratuitos da OpenRouter
- Pronto para ser expandido ou personalizado

---

## Stack Utilizada

- `Node.js`
- [`venom-bot`](https://github.com/orkestral/venom) – biblioteca para integração local com o WhatsApp Web
- [`OpenRouter`](https://openrouter.ai/docs) – API gratuita e compatível com diversos modelos de IA
- `dotenv` – para configurar sua chave de API
- `node-fetch` – para consumir a API HTTP da OpenRouter

---

## Sobre o OpenRouter

[OpenRouter.ai](https://openrouter.ai/) é uma plataforma que funciona como um gateway gratuito e unificado para vários modelos de linguagem, como:

- Mistral
- Meta (LLaMA)
- OpenChat
- Anthropic (Claude)
- Google (Gemini)
- e outros

Você pode usar modelos pagos ou gratuitos — inclusive sem cartão de crédito — e a API é compatível com o formato da OpenAI (ChatGPT).

**Documentação oficial:**  
https://openrouter.ai/docs

Para usar, basta criar uma conta, copiar sua `API Key` e colar no arquivo `.env`.

---

## Sobre o Venom

[Venom](https://github.com/orkestral/venom) é uma biblioteca Node.js que permite controlar o WhatsApp Web de forma automatizada usando Puppeteer.

Com o Venom, você consegue:

- Conectar seu número de WhatsApp no navegador (modo local, sem API oficial)
- Receber e enviar mensagens
- Criar bots, automações e sistemas de atendimento
- Tudo **sem custo** e com instalação simples

**Documentação oficial:**  
https://github.com/orkestral/venom

---

## Como Usar

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/chatbot-whatsapp-ia.git
cd chatbot-whatsapp-ia

2. **Instale as dependências**

```bash
    npm install
```

3. **Crie o arquivo .env**

```bash
    OPENROUTER_API_KEY=sua_chave_aqui
```

4. **Inicie o projeto**

```bash
    node index.js
```

5. **Escaneie o QR Code com seu WhatsApp**

```bash
    Aparecerá no terminal ou em um pop-up. Após isso, o bot estará ativo.
```

----

## Licença

Este projeto é livre para uso e modificação. Sinta-se à vontade para adaptar à sua necessidade.

## Criado por

Cervo Digital
https://cervodigital.com.br
Desenvolvimento de soluções inteligentes com foco em automação, scraping, APIs e IA para empresas.