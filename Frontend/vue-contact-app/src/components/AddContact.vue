<template>
   <div>
    <ContactFrom :isEditMode="false" @submit="handleCreate" />
   </div>  
  </template>
  

<script setup>
import ContactFrom from "./ContactForm.vue"
import { useStore } from 'vuex';

const store = useStore();

function handleCreate(form) {
  store.dispatch("createContact", form )
 
  form.name = ''
  form.email = ''
  form.phone = ''
  form.designation = ''
}
</script>