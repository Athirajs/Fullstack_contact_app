<template>
    <div class="contact-list">
      <h2>Contact List</h2>
      <div class="contact-grid">
        <div v-for="(contact, index) in contacts" :key="index" class="contact-card">
          <p><strong>Name:</strong> {{ contact.name }}</p>
          <p><strong>Email:</strong> {{ contact.email }}</p>
          <p><strong>Phone:</strong> {{ contact.phone }}</p>
          <p><strong>Designation:</strong> {{ contact.designation }}</p>
          <div class="card-actions">
            <button @click="editContact(contact._id)">Edit</button>
            <button @click="deleteContact(contact._id)">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useStore } from 'vuex'
  import { reactive ,onMounted, computed} from 'vue'
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const store = useStore()
  // Sample data
  const contacts = computed(() => store.state.contacts);
  onMounted(() => {
  store.dispatch('getAllContacts')
})
  // Methods to handle actions
  const editContact = async(id)=> {
    console.log(id, "id");
    router.push({ name: 'EditContact', params: { id } });
  }
  
  const deleteContact = async (index) => {
  await store.dispatch('deleteContact', index);
  store.dispatch('getAllContacts')
};
  
  </script>
  
  <style scoped>
  .contact-list {
    padding: 20px;
    text-align: center;
  }
  
  .contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }
  
  .contact-card {
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
  }
  
  .contact-card p {
    margin: 8px 0;
    color: #333;
  }
  
  .card-actions {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  
  button {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:first-of-type {
    background-color: #4CAF50; /* Green for edit */
    color: white;
  }
  
  button:last-of-type {
    background-color: #f44336; /* Red for delete */
    color: white;
  }
  
  button:hover {
    opacity: 0.8;
  }
  </style>
  