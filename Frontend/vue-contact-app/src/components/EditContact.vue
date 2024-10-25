<template>
    <div>
     <ContactFrom :initialContact="contact" :isEditMode="true" @submit="handleUpdate" />
    </div>  
   </template>
   
 
 <script setup>
 import ContactFrom from "./ContactForm.vue"
 import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { computed } from 'vue';
 
 const store = useStore();
 const route = useRoute()
 const contactId = route.params.id

 const contact = computed(()=>{
    return store.state.contacts.find((c) => c._id === contactId) || {};
 })

 const handleUpdate = (updatedContact)=>{
    store.dispatch('updateContact', { id: contactId, contact: updatedContact });
 }
 </script>