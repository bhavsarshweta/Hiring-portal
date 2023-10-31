<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      integrity="sha384-... " crossorigin="anonymous">
    <div class="login-page text-black">
      <div class="w-full sm:w-1/3 shadow-xl px-10 rounded-lg bg-gray-100">
        <div class="flex items-center justify-between">
          <h1 class="font-bold text-xl mb-5 mt-5">Login</h1>
         
        </div>
        <FormKit type="text" validation="required" name="name" id="name" label="Enter email"
          v-model="userData.Email" validation-label="Username"/>
        <FormKit type="password" validation="required" name="password" id="password" label="Enter password"
          v-model="userData.Password" validation-label="Password"/>
        <div class="mt-5 login-button" :class="{ 'focused': focused }">
          <FormKit type="submit" label="Login" @click="checkForm" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  definePageMeta({
    layout: false
  })
  
  
  import axios from 'axios';
  
  export default {
    data() {
      return {
        
        focused: false,
        userData: {
          Email: '',
          Password: ''
        }
      }
    },
   
  
  
    methods: {
    async  checkForm() {
       
        console.log(this.userData);
        const response = await $fetch('/api/auth/login', {
          method: 'POST',
          body: this.userData
  
        }).then(async (res) => {
          const user = await axios.post('/api/auth/testToken').then((res1) => {
  
            const data = res1;
            console.log(data);
            let str1=res.user.student
            let str2=res.user.employer
            let status = res.user.Status
            console.log(str1);
            if(status == 'Active') {

             if(str1 == 'True'){
                window.location.href ='/';
            }else if(str2 == 'True'){
                window.location.href ='/Employer/EmployerHome';
            }else{
                window.location.href = '/Admin/AdminHome';
            }
          }else{
              alert("Your Accout has been disabled.")
          }
            // if (data.users) {
            //   const role = data.users;
            //   if (role === 'https://www.google.com') {
            //     window.location.href = role;
            //   } else if (role === '/UserData') {
            //     useRouter().push(role); // Redirect to '/UserData' page
            //   }
  
            // }
            // else {
            //   alert(this.data.alert4); // Display alert for incorrect username or password
            // }
            // return true;
  
            // let role = res.users
            // useRouter().push(role)
          })
  
        }).catch((err) => {
  
          console.log(err);
          
        })
  
      }
    },
  
  }
  
  </script>
  <style scoped>
  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  
  @media (max-width: 640px) {
  
    .login-page {
      margin: 30px;
      min-height: 80vh;
    }
  }
  
  /* Define the button styles */
  .login-button {
    border: none;
    color: white;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    transition-duration: 0.4s;
    background: rgb(243 244 246 / var(--tw-bg-opacity));
  }
  
  /* Add the button click effect */
  .login-button:hover {
    background-color: rgb(243 244 246 / var(--tw-bg-opacity));
  }
  
  .login-button:active {
    transform: translateY(5px);
  }
  
  .login-button:focus {
    transform: translateX(5px);
  }
  </style>