<template>
    <header>
      <nav class="navbar">
        <router-link to="/">Home</router-link>
        <router-link to="/add-contact">Add Contact</router-link>
      </nav>
      <h1>Contact APP</h1>
    </header>
  </template>
  
  <script setup>
  // Script setup is not required for this basic setup, but could be used for props or events
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    gap: 20px;
    background-color: #333;
    padding: 10px 20px;
  }
  
  .navbar a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
  
  .navbar a:hover {
    color: #ddd;
  }
  
  h1 {
    text-align: center;
    margin: 20px 0;
    color: #333;
  }
  </style>
  