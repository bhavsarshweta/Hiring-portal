<template>
    <div>

        <!-- header starts here -->

        <!-- <div style="display: flex;">

           <img src="../../assets/naukri_Logo.png" alt="">
            <button>Home</button>
            <button  @mouseover="mouseison" @mouseleave="mouseisoff">Buy Online <i class="fa fa-angle-down"></i></button>
            <div class="dropDn1" v-show="DropDD"  >
                <p>Products on Offer (Buy Online)</p>
                <p>Resume Database Access (RESDEX)</p>
                <p>job posting</p> 
                </div>
        </div> -->
             
        <!-- header ends here -->


      <div>

  <!-- <div style="margin-top: 50px;" >
    <p style="text-align:center;">Welcome</p>
    <h5 style="text-align:center">Get started with Naukri<br> Recruitment Solutions</h5><br>
  <img src="../../assets/registration_Page.png" alt="" style="width:350px;margin-left: 60px;">
       </div> -->

      <!-- Form Starts here -->
      <div style="width: 400px; margin-left: 400px;" class="Container_For_Sales_Employer_Forms" >  

        <div class="m-4">

            <div class="firstEmplyLogin_For_partOne text-left">
                 <button @click="Form_One()" class="top_button">Sales Enquiry</button>
                 <button @click="Form_Two()" class="top_button">Login/Register</button>
            </div>
             <hr style="margin-bottom: 0px;">
            <!-- sales Enquiry form -->
            <div class="Sales_Enquiry_form" v-show="FormOne">

                <form action="" class="p-3">
                    <p style="text-align: left;"><small>I am Looking for</small></p>
                    <span class="Css_For_input_radio_button">
                        <input type="radio" @click="formOne_firstside()"><span class="mr-2 ml-1">Recruitment Solution</span>
                        <input type="radio" @click="formOne_secondside()"><span class="ml-1">Job Opportunities</span>
                    </span>
                    <br>
                    <br>
         
                <div v-show="FormOne_FirstSide">
                    <input type="text" placeholder="Name" class="form-control">
                    <br>
                    <input type="number" placeholder="Contact Number" class="form-control">
                    <br>
                    <input type="text" placeholder="Company Name" class="form-control">
                    <br>
                    <input type="text" placeholder="Disignation Name" class="form-control">
                    <br>
                    <input type="email" placeholder="Email ID" class="form-control">
                    <br>
                    <input type="text" placeholder="City" class="form-control">
                    <div class="form-group text-left" style="">
                        <input type="radio"><span>I'm not a root</span>
                    </div>
                    <button class="btn btn-primary form-control">Get a CallBack</button>
             </div>
             <div v-show="FormOne_SecondSide">
                <button class="btn btn-primary form-control pt-0 pb-5" @click="To_home_page()"> Search Jobs on Naukri <i class="	fa fa-external-link"></i> </button>
             </div>

                </form>


            </div>
            <!-- slaes enquiry form end here -->

            <!-- Login/Registerform starts here -->

            <div class="m-3 FormTwo_EmployerLogin" v-show="FormTwo">
                <br>
                <input type="text" class="form-control" placeholder="Registration Email ID">

                <input type="password" class="form-control" placeholder="Password">
                <br>
                <button class="form-control btn btn-primary">Login</button><br>
                <p><small>Forget Password ?</small></p>
                
                <span style="text-align: left;">
                    <p class="m-0"><small>Keep your account safe. Learn How</small></p><br>
                    <span style="display: flex; justify-content: space-between; margin-top: -20px;">
                        <p class="m-0"><small>Have a Query? Contact Us</small> </p><p class="m-0"><small>Fraud Alert!</small></p>
                    </span>
                </span>
                <hr>
              
                <p><small>Are you a new Client ?</small></p>
                
                <button
                class="btn btn-primary form-control"><router-link to="/registerPage" style="color: white;">Register Now</router-link> </button>
            </div>

        </div>

            <!-- Login/Registerform ends here -->
      </div>


    </div>

      <br>
      <br>
      <br>
      <div>
        <footerPage />
      </div>



    </div>
</template>

<script>

import footerPage from './footerPage.vue'

export default{
    name:'employLogin',
    components:{
        footerPage
    },
    data(){
        return{
            FormOne : true,
            FormTwo : false,
            FormOne_FirstSide : true,
            FormOne_SecondSide :false,
            DropDD : false
        }
    },
    methods:{
        Form_One(){
            this.FormOne = true
            this.FormTwo = false
        },
        Form_Two(){
            this.FormOne = false
            this.FormTwo = true
        },
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
       }

    }

}
 
</script>

<style>

/* Header css Starts here */

/* .dropDn1{
    display: none;
} */

/* Form css starts here */

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

.Sales_Enquiry_form {
    margin-left: -90px;
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