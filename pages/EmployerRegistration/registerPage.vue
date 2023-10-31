<template>
  <div>
    <div class="d-flex row">
  <div style="margin-top: 50px;">
    <p style="text-align:center;">Welcome</p>
    <h5 style="text-align:center">Get started with Naukri<br> Recruitment Solutions</h5><br>
  <img src="../../assets/registration_Page.png" alt="" style="width:450px;margin-left: 70px;">
  </div>
  <div class="container col">
    <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors" :key="error"><p :style="{color: 'red'}">{{ error }}</p></li>
    </ul>
  </p>
    <form action=""  @submit="checkForm" novalidate>
        <h5 style="text-align:left;"><b>Create Account</b></h5>
      <p>or already registred?<a href="#">Login Now</a></p>

      
      <p style="text-align:left;"><small>You want to register</small></p>
      
      <div class="custom-control custom-radio">
  <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" required>
  <label class="custom-control-label" for="customRadio1"><small>behalf of your company/business</small></label>
</div>

<div class="custom-control custom-radio">
  <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" required>
  <label class="custom-control-label" for="customRadio2"><small>as an individual/proprietor</small> </label>
 </div> <br>


      <div class="form-group">
        <label for=""> <small>Your name (as per AADHAAR card)</small></label>
        <br>
        <input type="text" name="name"  required class="form-control" v-model="name"/>
        <div class="invalid-tooltip">
        Please choose a unique and valid username.
      </div>
        </div>
        <br>
        <div class="form-group">
        <label for=""> <small>Your official email</small></label>
        <br>
        <input type="email" name="email"   class="form-control" v-model="email"/>
        </div>
        <br>
        <div class="form-group">
        <label for=""> <small>Your mobile number</small></label>
        <br>
        <input type="tel" name="mobile"  required class="form-control" v-model="mobile"/>
        </div>
        <br>
      <button  class="btn btn-primary form-control"> <router-link to="/CompanyInfo" style="color: white;">Continue</router-link> </button>
      </form>
    </div>
  </div>
  <br><br><br>

  <div><footerPage/></div>
  </div>

  
</template>
<script>
import footerPage from './footerPage.vue';
export default{
data(){
    return{
           name:'',
            email:'',
            mobile:'',
            errors: [],
    }
},
components:{
  footerPage
},
  methods:{
    checkForm: function (e) {
      this.errors = [];

      if (!this.name) {
        this.errors.push("Name required.");
      }
      if (!this.mobile) {
        this.errors.push("Contact required.");
      }
      if (!this.email) {
        this.errors.push('Email required.');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Valid email required.');
      }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
}
}
    
</script>
<style>
form {
  width: 400px; 
  margin-right:150px;
  margin-top: 50px;
  margin-left: 70px;
}
</style>