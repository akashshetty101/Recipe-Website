<template>
    <div class="chatbot">
      <div class="chat-window">
        <div v-for="(message, index) in messages" :key="index" class="message">
          <strong>{{ message.sender }}:</strong> {{ message.text }}
        </div>
      </div>
      <input v-model="userInput" @keyup.enter="sendMessage" placeholder="Enter ingredients..." />
      <button @click="sendMessage">Send</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userInput: '',
        messages: [],
      };
    },
    methods: {
      async sendMessage() {
        if (this.userInput.trim() === '') return;
  
        this.messages.push({ sender: 'You', text: this.userInput });
  
        const response = await this.getAIResponse(this.userInput);
        this.messages.push({ sender: 'AI', text: response });
  
        this.userInput = '';
      },
      async getAIResponse(input) {
        try {
          const res = await fetch('http://localhost:3000/api/chatbot', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ input }),
          });
          const data = await res.json();
          return data.response || 'Sorry, I couldn’t find a recipe for that.';
        } catch (error) {
          console.error(error);
          return 'Error connecting to the server. Please try again later.';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .chatbot {
    border: 1px solid #ccc;
    padding: 20px;
    width: 400px;
  }
  .chat-window {
    height: 300px;
    overflow-y: auto;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    padding: 10px;
  }
  .message {
    margin-bottom: 5px;
  }
  </style>
  