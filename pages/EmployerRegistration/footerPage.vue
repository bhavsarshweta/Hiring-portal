<template>


<div class="2">

    <footer class="mainfooter" role="contentinfo">  
  <div class="footer-middle">  
  <div class="container">  
    <div class="row">  
      <div class="col-md-3 col-sm-6">  
        <div class="footer-pad">  
            <p style="text-align: left;"><small> Recruiter Services</small></p> <br><br>
          <ul class="list-unstyled" style="text-align: left;">  
            <li> <a href="#">job posting and responses</a></li>  
            <li> <a href="#">Resdex </a></li>  
            <li> <a href="#">RMS</a></li>  
            <li> <a href="#">Referral</a></li>  
            <li> <a href="#">Transition Service</a></li>   
          </ul>  
        <br>
          <p style="text-align: left;"><small>Information </small></p><br> <br> 
          <ul class="list-unstyled" style="text-align: left;" >  
            <li> <a href="#">About Us </a> </li>  
            <li> <a href="#">Clients</a></li>  
            <li> <a href="#">Careers </a></li>  
            <li> <a href="#">Terms and Conditions</a></li>  
            <li> <a href="#">Privacy Policy</a></li>  
            <li> <a href="#">Jobseeker Home</a></li> 
            <li> <a href="#">FAQs</a></li> 
            <li> <a href="#">Site Map</a></li>  
          </ul>  
        </div>  
      </div>  
      <div class="col-md-3 col-sm-6">  
        <div class="footer-pad">  
            <p><small style="text-align:left;">Sales Enquiry </small></p><br> <br> 
            <ul class="list-unstyled" style="text-align:left">  
            <li>India:</li>  
            <li>Toll Free: 1800 - 102 -2558 (9:30 AM to 6:30PM)</li>  
            <li>+91 - 9818882211</li>  
            <li> sales@naukri.com</li>  
           
          </ul>  
          <br>
          <ul class="list-unstyled" style="text-align:left">  
            <li>USA:</li>  
            <li>Toll Free: +1 866 557 3340</li>  
            <li>usa@naukri.com</li>
             
          </ul>  <br>
          <ul class="list-unstyled" style="text-align:left">  
            <li> Europe/UK:</li>  
            <li>Toll Free: +44 808 120 2323</li>  
            <li>europe@naukri.com</li>  
          </ul>  
         
           
        </div>  
      </div>  



      <div class="col-md-3 col-sm-6">  
        <div class="footer-pad">  
 <!-- sales Enquiry form -->

   

    <form action="" style="background-color:white;margin-bottom: 10px;box-shadow: rgba(0, 0, 0, 0.2)0px 0px 24px;">
        <p style="text-align: left;color: grey;"><small>I am Looking for</small></p>
                    <span class="Css_For_input_radio_button">
                        <input type="radio" @click="formOne_firstside()"><span class="mr-2 ml-1" style="color: grey;">Recruitment Solution</span>
                        <input type="radio" @click="formOne_secondside()"><span class="ml-1" style="color: grey;">Job Opportunities</span>
                    </span>
                    <br>
                    <br>
    <div v-show="formOne_firstside">
    <input type="text" placeholder="Name" class="form-control" v-model="name">
    <br>
    <input type="number" placeholder="Contact Number" class="form-control" v-model="contact">
    <br>
    <input type="text" placeholder="Company Name" class="form-control">
    <br>
    <input type="text" placeholder="Disignation Name" class="form-control">
    <br>
    <input type="email" placeholder="Email ID" class="form-control" v-model="email">
    <br>
    <input type="text" placeholder="City" class="form-control">
    <div class="form-group text-left" style="">
        <input type="radio"><span>I'm not a root</span>
    </div>
    <button class="btn btn-primary form-control">Get a CallBack</button>
    </div>
    <div v-show="formOne_SecondSide">
                <button class="btn btn-primary form-control pt-0 pb-5" @click="To_home_page()"> Search Jobs on Naukri <i class="	fa fa-external-link"></i> </button>
             </div>
</form>
</div>
<!-- slaes enquiry form end here -->
          
        </div>  
      </div>  
      <div class="row">  
    <div class="col-md-12 copy">  
    <p class="text-center"> © Copyright 2021 - Company Name.  All rights reserved. </p>  
    </div>  
    </div>  
  </div>  
  </div>  
  
</footer>

</div>


</template>
<script>
export default{
    name:'footerPage',
methods:{
    
        formOne_firstside(){
            this.FormOne_FirstSide = true
            this.FormOne_SecondSide = false
        },
        formOne_secondside(){
            this.FormOne_FirstSide = false
            this.FormOne_SecondSide = true
        },
        To_home_page(){
        this.$router.push({name:'HomeComponent'})
       },
    }
}
</script>
<style>
footer {  
 background: rgb(5, 28, 66);  
  color: white;  
  margin-top:100px;  
}  
footer a {  
  color: #fff;  
  font-size: 14px;  
  transition-duration: 0.2s;  
}  
footer a:hover {  
  color: #FA944B;  
  text-decoration: none;  
}  
.copy {  
  font-size: 12px;  
  padding: 10px;  
  border-top: 1px solid #FFFFFF;  
}  
.footer-middle {  
  padding-top: 2em;  
  color: white;  
}  
p{
    text-align: left;
}

.Container_For_Sales_Employer_Forms{
    border: 1px solid black;
    margin-right: 30px;
    padding-block: 20px;
    width: 800px;
}

/* .Container_For_Sales_Employer_Forms button */
.top_button{
    background-color: white;
    font-family: Allerta Stencil;
    font-size: larger;
}

.Css_For_input_radio_button{
    margin-left: 0px;

}

.Sales_Enquiry_form input{
    border: none;
    border-bottom: 1px solid black;
    
}

.firstEmplyLogin_For_partOne button{
    border: none;
    margin-inline: 10px;
}
.FormTwo_EmployerLogin input{
   margin-block: 10px;
}
</style>