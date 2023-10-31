<template>
  <div>
    <div class="d-flex row">
  <div style="margin-top: 50px;" class="col">
    <p style="text-align:center;color: darkblue;">Welcome</p>
    <h5 style="text-align:center">Get started with Naukri<br> Recruitment Solutions</h5><br>
  <img src="../../assets/registration_Page.png" alt="" style="width:450px;margin-left: 70px;">
  </div>
  <div class="container col">
<form action="" novalidate="true" @submit="checkForm">
  <div class="container">
    <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors" :key="error"><p :style="{color: 'red'}">{{ error }}</p></li>
    </ul>
  </p>
      <h5 style="text-align:left;"><b>Create Account</b></h5>
      <p>or already registred?<a href="#">Login Now</a></p>
      <p style="text-align:left;"><small>I am here</small></p>
      <div class="custom-control custom-radio">
  <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
  <label class="custom-control-label" for="customRadio1"><small>to fulfill own hiring needs</small></label>
</div>
<div class="custom-control custom-radio">
  <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
  <label class="custom-control-label" for="customRadio2"><small>as a recruitment consultant</small> </label>
 </div> <br>
 
      <div class="form-group">
        <label for=""> <small>Company name</small></label>
        <br>
        <input type="text" name="name"  required class="form-control" v-model="name"/>
        </div>
        <br>
        <div class="form-group">
        <label for=""> <small>Your designation</small></label>
        <br>
        <input type="text" name="designation"  required class="form-control" />
        </div>
        <br>
        <div class="form-group">
        <label for=""> <small>Pincode</small></label>
        <br>
        <input type="text" name="pin"  required class="form-control" v-model="pin"/>
        </div>
        <br>
        <div class="form-group">
    <label for="exampleFormControlTextarea1"><small>Street address</small></label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="address"></textarea>
  </div>



  <div class="form-check">
  <input type="checkbox" style="float: left;" class="mr-2">
  <label for="" style="font-size: x-small;">I agree to receive Promotional Communication from Naukri</label>
  </div>


<br>

 <div class="form-check">
  <input type="checkbox" style="float: left;" class="mr-2">
  <label for="" style="font-size: x-small;">I agree to terms & conditions and privacy policy</label>
 </div>



<br>
  <button class="btn btn-primary form-control"><router-link to="/" style="text-decoration: none; color: white;">Create account</router-link></button>
     </div> 
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
  name:'CompanyInfo',
  components:{
    footerPage
  },
  data(){
    return{
           name:'',
            pin:'',
            address:'',
            errors: [],
    }
  },
  methods:{
    checkForm: function (e) {
      this.errors = [];

      if (!this.name) {
        this.errors.push("Name required.");
      }
      if (!this.pin) {
        this.errors.push("Please select a pin code");
      }
      if (!this.address) {
        this.errors.push("Please enter a street address.");
      }

      

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },
    
  }
  }

</script>
<style>
form {
  width: 400px;
  
  margin-right:150px;
  margin-top: 50px;
}
</style>