import {createStore} from 'vuex'

// export default createStore({
//   state() {
//     return {
//       formData: {} // Empty object to store form data
//     },
//   },
//   mutations: {
//     setFormData(state, data) {
//       state.formData = data
//     },
//   },
//   actions: {
//     submitForm({ commit }, formData) {
//       // Perform any necessary validation or API calls here
//       // Once the form data is validated and ready to be submitted,
//       // call the mutation to set the form data in the state
//       commit('setFormData', formData)
//     },
//   },
//   getters: {
//     getFormData(state) {
//       return state.formData
//     },
//   },
// })

const store= createStore({
state() {
  return {
    formData: {} // Empty object to store form data
  }
},
mutations: {
  setFormData(state, data) {
          state.formData = data
        },
  
},
actions: {
  submitForm({ commit }, formData) {
    // Perform any necessary validation or API calls here
    // Once the form data is validated and ready to be submitted,
    // call the mutation to set the form data in the state
    commit('setFormData', formData)
  },
},
getters: {
  getFormData(state) {
          return state.formData
            },
  },

})

export default defineNuxtPlugin((nuxtApp)=>{
nuxtApp.vueApp.use(store);
}
);