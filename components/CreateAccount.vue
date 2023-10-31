<template>
    <div class="mt-10 flex justify-center  login-page1 mb-5 text-black">
        <div class="w-full sm:w-1/2 shadow-md px-10 rounded-lg bg-white ">

            <h1 class="font-bold text-xl  mt-5">Createuser</h1>
            <h1 class="font-bold text-sm my-2">Role</h1>
            <div class="flex space-x-4 mb-4">
                <div class="flex space-x-2" @click="selectRole('Student')">
                    <input name="role" type="radio" id="admin">
                    <span>Student/Employee</span>
                </div>
                <div class="flex space-x-2" @click="selectRole('Employer')">
                    <input name="role" type="radio" id="user">
                    <span>Employer</span>
                </div>
            </div>
            <FormKit type="text"  name="fname" id="fname" label="Enter fullname"
                v-model="Userdata.Fullname" />
            <FormKit type="text" validation="required|length:5,10" name="name" id="name" label="Enter username"
                v-model="Userdata.Username" />
            <FormKit type="password" validation="required|length:5,10" name="password" id="password" label="Enter password"
                v-model="Userdata.Password" />
        g    <FormKit type="number"  name="mobile" id="mobile" label="Enter mobile number"
                v-model="Userdata.Mobile" />
            <FormKit type="date" validation="required" name="fname" id="fname" label="Enter date of birth"
                v-model="Userdata.dob" />
            <FormKit type="text" validation="required" name="fname" id="fname" label="Enter email id"
                v-model="Userdata.email" />
            <FormKit type="number" validation="required" name="fname" id="fname" label="Enter Your age"
                v-model="Userdata.age" />
            <div class="mt-5 flex justify-start login-button">
                <FormKit type="submit" label="Submit" @click.prevent="CreateUser" />
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
definePageMeta({
    layout: "custome"
})
export default {
    data() {
        return {

            Userdata: {
                Username: '',
                Student: '',
                Employer: '',
                Password: '',
                Fullname: '',
                Mobile: '',
                dob: '',
                email: '',
                age: ''
            }
        }
    },
    mounted() {

    },
    methods: {
        // method to create vendor 
        selectRole(role) {
            this.Userdata.Student = role === 'Student' ? 'True' : 'False'
            this.Userdata.Employer = role === 'Employer' ? 'True' : 'False'
        },
     async CreateUser  ()  {
       
        const body = this.Userdata
         console.log(body);       
                const response = await $fetch('/api/auth/signup',{
                    method: 'POST',
                    body: this.Userdata
                }).then((res) => {
                    console.log(res);
                }).catch((err) => {
                    console.log(err);
                })
             
                // .then((res) => {
                //        console.log(res);
                       
                //         // alert(JSON.stringify(res))
                //         // window.location.href = "/Admin/AdminHome"

                //     }).catch((err) => {
                //         alert(err)
                //     })
        }
    },
};

</script>
<style scoped>
.login-page1 {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
}

@media (max-width: 640px) {
    .login-page1 {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 20vh;
    }

    .login-page1 {
        margin: 30px;
    }
}

.login-button {

    border: none;
    color: white;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    transition-duration: 0.4s;
}

/* Add the button click effect */
.login-button:hover {
    background-color: white;
}

.login-button:active {

    transform: translateY(5px);
}
</style>