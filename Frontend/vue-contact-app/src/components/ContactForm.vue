<template>
    <div>
        <h2 class="heading">{{ isEditMode ? 'Edit Contact' : 'Add Contact' }}</h2>
        <form class="contact-form" @submit.prevent="handleSubmit">
        <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="contact.name" required />
      </div>
  
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="contact.email" required />
      </div>
  
      <div class="form-group">
        <label for="phone">Phone</label>
        <input type="tel" id="phone" v-model="contact.phone" required />
      </div>
  
      <div class="form-group">
        <label for="designation">Designation</label>
        <input type="text" id="designation" v-model="contact.designation" required />
      </div>
      <button type="submit">{{ isEditMode ? 'Update' : 'Add' }} Contact</button>
        </form>
        
    </div>
</template>
<script setup>
import { ref } from 'vue'


const props = defineProps({
  initialContact: {
    type: Object,
    default: () => ({
      name: '',
      email: '',
      phone: '',
      designation: '',
    }),
  },
  isEditMode: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['submit']);
const contact = ref({ ...props.initialContact });
const handleSubmit = () => {
  emit('submit', { ...contact.value });

};

</script>


<style scoped>
.heading{
    text-align: center;
}
  .contact-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .contact-form h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .form-group input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }
  
  .form-group input:focus {
    border-color: #5b9bd5;
    outline: none;
  }
  
  button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: #5b9bd5;
    color: white;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #4a89c7;
  }
  </style>
  