<template>
    <div>
      <form @submit.prevent="registerUser">
        <div>
          <label for="name">Name:</label>
          <input v-model="name" type="text" id="name" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input v-model="email" type="email" id="email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input v-model="password" type="password" id="password" required />
        </div>
        <button type="submit">Register</button>
        <div v-if="errorMessage">{{ errorMessage }}</div>
        <div v-if="successMessage">{{ successMessage }}</div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  
  const name = ref('');
  const email = ref('');
  const password = ref('');
  const errorMessage = ref('');
  const successMessage = ref('');
  
  const registerUser = async () => {
    try {
      // Enviar a requisição para a API diretamente, sem necessidade de proxy
      const response = await axios.post('/api/users/create', {
        name: name.value,
        email: email.value,
        password: password.value,
      });
      successMessage.value = 'User registered successfully!';
      errorMessage.value = '';
    } catch (error) {
      console.error('Error registering user:', error);
      errorMessage.value = 'Error registering user: ' + (error.response?.data?.message || error.message);
      successMessage.value = '';
    }
  };
  </script>
  