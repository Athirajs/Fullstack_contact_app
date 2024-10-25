import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import AddContact from './components/AddContact.vue'
import EditContact from "./components/EditContact.vue"


const routes = [

    { 
        path: '/',
        name: 'Home',
        component: Home
    },
    { 
        path: '/add-contact',
        name: 'AddContact',
        component: AddContact
    },
    { 
        path: '/edit/:id',
        name: 'EditContact',
        component: EditContact
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  
  export default router