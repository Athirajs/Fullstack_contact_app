
import { createStore } from 'vuex'
import axios from 'axios'
import Noty from 'noty'; // Import Noty

export default createStore({
    state: {
        contacts: []
    },
    mutations: {
        SET_CONTACTS(state, contacts) {
          state.contacts = contacts
        },
        ADD_CONTACTS(state, contact){
            state.contacts.push(contact)
        },
        EDIT_CONTACT(state, { id, contact }) {
            const existingContact = state.contacts.find((c) => c._id === id);
            if (existingContact) {
                Object.assign(existingContact, contact);
              }
          },
        DELETE_CONTACT(state, index){
            state.contacts.splice(index, 1);
        }
    },
    actions:{
        async getAllContacts({ commit}) {
            try {
                const response = await axios.get("http://localhost:3000/api/contacts")
                commit("SET_CONTACTS", response.data)
                console.log(response.data, "jhg");
            } catch (error) {
                console.log(error);
            }
        },
        async createContact({ commit}, contact){
            try {
                const response = await axios.post("http://localhost:3000/api/contacts", contact)
                commit("ADD_CONTACTS", response.data)
            } catch (error) {
                console.log(error);
            }
        },
        async updateContact({ commit}, {index, contact}){
            try {
                // Simulate an update by sending a PUT request
                await axios.put(`http://localhost:3000/api/contacts/${contact._id}`, contact)
                commit('EDIT_CONTACT', { index, contact })
              } catch (error) {
                console.error('Error editing contact:', error)
              }
        },
        async deleteContact({ commit}, index){
            
            try {
                const response = await axios.delete(`http://localhost:3000/api/contacts/${index}`)
                commit('DELETE_CONTACT', index); 
            } catch (error) {
                console.log(error);
            }
        }
    },
    getters:{
        getContacts: (state) => state.contacts
    }
})