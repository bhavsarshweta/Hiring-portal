<template>
  <div>

    <!-- 1st main div  -->
    <div class="cols-start-1 shadow-lg mx-5 mt-8 py-8  text-left items-center bg-white mb-5">

      <div class="flex justify-between px-4 py-2 my-2  shadow-md text-blue-600">
        <p>Filter by</p>
        <p v-if="checkedCound">Applied ( {{ checkedCound }} )
          <span @click="closeOptions = !closeOptions"><i class="fa fa-sort-up ml-2"
              v-bind:class="closeOptions ? 'UpAtonce' : 'DAtonce'" @click="closeAllop()"></i></span>
          <!-- closeAllop() method will close all the options that are displyed  -->
          <!-- classoptions is a vaiable used to toggle classes UpAtonce and DAtonce that will move the arrow up and down   -->
        </p>
      </div>

      <!-- 1st div  -->
      <div class="">
        <div class="flex justify-between items-center px-4 py-1  shadow-md">
          <div>Experience</div>
          <label class="swap swap-rotate text-2xl font-thin" >
            <input type="checkbox" @click="drpd1 = !drpd1"/>
            <div class="swap-on">-</div>
            <div class="swap-off">+</div>
          </label>

        </div>

        <ul v-show="drpd1" class="mx-0">

          <li class="m-0 p-0">
            <select name="" id="var1" class="w-full py-2 px-2  border-dashed border-2" style="outline: none;">
              <option value="0-1 years">0-1 years</option>
              <option value="1-3 years">1-3 years</option>
              <option value="3+ years">3+ years</option>
            </select>
          </li>

        </ul>

      </div>

      <!-- 2nd div  -->
      <div>
        <div class="flex justify-between px-4  my-1  shadow-md">
          <p class="pb-2">Work mode </p>
            <label class="swap swap-rotate text-2xl font-thin" >
            <input type="checkbox" @click="drpd2 = !drpd2"/>
            <div class="swap-on">-</div>
            <div class="swap-off">+</div>
          </label>
        </div>

          <div v-if="drpd2" class="outer">
            <div class="inner">

              <ul>
                <li><input type="checkbox" name="" class="mx-2" v-model="data.var2" @change="updateCont">Work from
                  Office(56)</li>
                <li><input type="checkbox" name="" class="mx-2" v-model="data.var3" @change="updateCont">Hybrid(28)</li>

                <li>
                  <input type="checkbox" class="mx-2" v-model="data.var4" @change="updateCont">
                  <span @click="RPwork = !RPwork">Permanent Remote </span>
                  <span v-if="RPwork ? '' : 'display'">...</span>
                  <span v-show="RPwork">from home</span>
                  (7)
                </li>
              </ul>

            </div>
          </div>


      </div>

      <!-- 3rd div  -->
      <div>
        <div class="flex justify-between px-3 py-2 my-2 mx-1 shadow-md">
          <p>Department</p>
          <label class="swap swap-rotate text-2xl font-thin" >
            <input type="checkbox" @click="drpd3 = !drpd3"/>
            <div class="swap-on">-</div>
            <div class="swap-off">+</div>
          </label>
        </div>
        <ul v-show="drpd3">
          <li>
            <input type="checkbox" class="mx-2" v-model="data.var5" @change="updateCont">
            <span @click="depCon = !depCon">UX, Design &</span>
            <span v-if="depCon ? '' : 'display'">...</span>
            <span v-show="depCon">Architecture Experience</span> (134)
          </li>

          <li>
            <input type="checkbox" class="mx-2" name="Engineering - Software Development Experiance" v-model="data.var6"
              @change="updateCont">
            <span @click="depCon2 = !depCon2">Engineering - Software </span>
            <span v-if="depCon2 ? '' : 'display'">...</span>
            <span v-show="depCon2">development Experience</span>
            (92)
          </li>
          <li>
            <!-- The below code contains 3 parts - 
                    1. onclick hide and show.
                    2. v-show to show extra content
                    3. v-if to show (...)dots on the basis of hide and show -->
            <input type="checkbox" class="mx-2" name="Marketing & comunication" v-model="data.var7" @change="updateCont">
            <span @click="depCon3 = !depCon3">Marketing & </span>
            <span v-if="depCon3 ? '' : 'display'">...</span>
            <span v-show="depCon3">Communication</span>
            (15)
          </li>
          <li>
            <input type="checkbox" class="mx-2" name="Marketing & comunication" v-model="data.var8" @change="updateCont">
            <span>Other </span>
            <span>...</span>
            (7)
          </li>
          <!-- What the below method does are two things --
                1.  it sends a parameter to identify which perticular content it is, in below method and hide and show it. also
                2. the method takes the button text using it id and changes it according to the hide and show state -->
          <li> <button @click="showmore('dep')" id="textButton" class="ml-6 text-blue-600">View More</button></li>
          <li v-show="depCon4">
            <input type="checkbox" class="mx-2" name="Marketing & comunication">
            <span @click="depCon3 = !depCon3">Marketing & </span>
            <span v-if="depCon3 ? '' : 'display'">...</span>
            <span v-show="depCon3">Communication</span>
            (15)
          </li>
        </ul>
      </div>

      <!-- 4th div  -->
      <div>
        <div class="flex justify-between px-3 py-2 my-2 mx-1 shadow-md">
          <p>Salary</p>
          <label class="swap swap-rotate text-2xl font-thin" >
            <input type="checkbox" @click="salary = !salary"/>
            <div class="swap-on">-</div>
            <div class="swap-off">+</div>
          </label>
        </div>
        <ul v-show="salary">
          <li>
            <input type="checkbox" class="mx-2" v-model="data.var9" @change="updateCont">
            <span>0-3 Lakhs (21)</span>
          </li>
          <li>
            <input type="checkbox" class="mx-2" v-model="data.var10" @change="updateCont">
            <span>3-6 Lakhs (135)</span>
          </li>
          <li>
            <input type="checkbox" class="mx-2" v-model="data.var11" @change="updateCont">
            <span>6-10 Lakhs (221)</span>
          </li>
          <li>
            <input type="checkbox" class="mx-2" v-model="data.var12" @change="updateCont">
            <span>10-15 Lakhs (221)</span>
          </li>

          <!-- What the below method does are two things --
                1.  it sends a parameter to identify which perticular content it is, in below method and hide and show it. also
                2. the method takes the button text using it id and changes it according to the hide and show state -->
          <li> <button @click="showmore('sal')" id="textButton2" class="ml-6 text-blue-600">View More</button></li>
          <li v-show="salary1">
            <input type="checkbox" class="mx-2" name="Marketing & comunication">
            <span>15 Lakhs +</span>
            (15)
          </li>

        </ul>
      </div>

      <!-- 5th div  -->
      <div>
        <div class="flex justify-between px-3 py-2 my-2 mx-1 shadow-md">
          <p>Company Type</p>
          <label class="swap swap-rotate text-2xl font-thin" >
            <input type="checkbox" @click="compT1 = !compT1"/>
            <div class="swap-on">-</div>
            <div class="swap-off">+</div>
          </label>
        </div>
        <ul v-show="compT1">
          <li>
            <input type="checkbox" class="mx-2" v-model="data.var13" @change="updateCont">
            Corporate
            <span>35</span>
          </li>
          <li>
            <input type="checkbox" class="mx-2" v-model="data.var14" @change="updateCont">
            Foreign MNC
            <span>(34)</span>
          </li>
          <li>
            <input type="checkbox" class="mx-2" v-model="data.var15" @change="updateCont">
            Startup
            <span>(9)</span>
          </li>
          <li>
            <input type="checkbox" class="mx-2" v-model="data.var16" @change="updateCont">
            Indian MNC
            <span>(7)</span>
            <!-- i am adding span because we need to dynamically inter polate data from backend later.. -->
          </li>
          <li> <button @click="showmore('compT')" id="textButton3" class="ml-6 text-blue-600">View More</button></li>
          <li v-show="compT2">
            <input type="checkbox" class="mx-2" name="Marketing & comunication">
            <span>15 Lakhs +</span>
            (15)
          </li>
        </ul>
      </div>

      <!-- 6th div  -->
      <div>
        <div class="flex justify-between px-3 py-2 my-2 mx-1 shadow-md">
          <p>Role Category</p>
          <label class="swap swap-rotate text-2xl font-thin" >
            <input type="checkbox" @click="roleC1 = !roleC1"/>
            <div class="swap-on">-</div>
            <div class="swap-off">+</div>
          </label>
        </div>
        <ul v-show="roleC1">
          <li>
            <input type="checkbox" class="mx-2" v-model="data.var17" @change="updateCont">
            <span>Software Development</span>
            <span>(93)</span>
          </li>
          <li>
            <input type="checkbox" class="mx-2" name="" v-model="data.var18" @change="updateCont">
            <span>Other design</span>
            <span>(75)</span>
          </li>
          <li>
            <!-- The below code contains 3 parts - 
                    1. onclick hide and show.
                    2. v-show to show extra content
                    3. v-if to show (...)dots on the basis of hide and show -->
            <input type="checkbox" class="mx-2" name="" v-model="data.var19" @change="updateCont">
            <span>UI / UX </span>
            <span>(34)</span>
          </li>
          <li>
            <input type="checkbox" class="mx-2" name="Engineering - Software Development Experiance" v-model="data.var20"
              @change="updateCont">
            <span @click="roleC2 = !roleC2">Architecture & Interior </span>
            <span v-if="roleC2 ? '' : 'display'">...</span>
            <span v-show="roleC2">designing</span>
            <span>(22)</span>
          </li>
          <!-- What the below method does are two things --
                1.  it sends a parameter to identify which perticular content it is, in below method and hide and show it. also
                2. the method takes the button text using it id and changes it according to the hide and show state -->
          <li> <button @click="showmore('roleC')" id="textButton4" class="ml-6 text-blue-600">View More</button></li>
          <li v-show="roleC3">
            <input type="checkbox" class="mx-2" name="Marketing & comunication">
            <span @click="roleC3 = !roleC3">Marketing & </span>
            <span v-if="roleC3 ? '' : 'display'">...</span>
            <span v-show="roleC3">Communication</span>
            (15)
          </li>
        </ul>
      </div>

      <!-- 7th div  -->
      <div>
        <div class="flex justify-between px-3 py-2 my-2 mx-1 shadow-md">
          <p>Education</p>
          <label class="swap swap-rotate text-2xl font-thin" >
            <input type="checkbox" @click="edu1 = !edu1"/>
            <div class="swap-on">-</div>
            <div class="swap-off">+</div>
          </label>
        </div>
        <ul v-show="edu1">
          <li>
            <input type="checkbox" class="mx-2" v-model="data.var21" @change="updateCont">
            <span>Any Postgraduate</span>
            <span>(148)</span>
          </li>
          <li>
            <input type="checkbox" class="mx-2" name="" v-model="data.var22" @change="updateCont">
            <span>Post Graduation</span>
            <span>(52)</span>
          </li>
          <li>
            <!-- The below code contains 3 parts - 
                    1. onclick hide and show.
                    2. v-show to show extra content
                    3. v-if to show (...)dots on the basis of hide and show -->
            <input type="checkbox" class="mx-2" name="" v-model="data.var23" @change="updateCont">
            <span>Any Graduate </span>
            <span>(136)</span>
          </li>
          <li>
            <input type="checkbox" class="mx-2" name="" v-model="data.var24" @change="updateCont">
            <span>B.Sc </span>
            <span>(6)</span>
          </li>
          <!-- What the below method does are two things --
                1.  it sends a parameter to identify which perticular content it is, in below method and hide and show it. also
                2. the method takes the button text using it id and changes it according to the hide and show state -->
          <li> <button @click="showmore('edu2')" id="textButton5" class="ml-6 text-blue-600">View More</button></li>
          <li v-show="edu2">
            <input type="checkbox" class="mx-2" name="Marketing & comunication">
            <span @click="edu2 = !edu2">Marketing & </span>
            <span v-if="edu2 ? '' : 'display'">...</span>
            <span v-show="edu2">Communication</span>
            (15)
          </li>
        </ul>

      </div>

      <!-- 8th div  -->
      <div>
        <div class="flex justify-between px-3 py-2 my-2 mx-1 shadow-md">
          <p>Posted by</p>
          <label class="swap swap-rotate text-2xl font-thin" >
            <input type="checkbox" @click="postB = !postB"/>
            <div class="swap-on">-</div>
            <div class="swap-off">+</div>
          </label>
        </div>
        <!-- class="transition duration-1000 -translate-y-4 scale-110 ease-in-out" -->
        <ul v-show="postB" class="transition-all duration-1000 transform scale-y-110 ease-in-out">
          <li>
            <input type="checkbox" class="mx-2" v-model="data.var25" @change="updateCont">
            <span>Any Postgraduate</span>
            <span>(148)</span>
          </li>
          <li>
            <input type="checkbox" class="mx-2" name="" v-model="data.var26" @change="updateCont">
            <span>Post Graduation</span>
            <span>(52)</span>
          </li>
        </ul>

      </div>

      <!-- 9th div  -->
      <div>
        <div class="flex justify-between px-3 py-2 my-2 mx-1 shadow-md">
          <p>Industry</p>
          <label class="swap swap-rotate text-2xl font-thin" >
            <input type="checkbox" @click="indus1 = !indus1"/>
            <div class="swap-on">-</div>
            <div class="swap-off">+</div>
          </label>
        </div>
        <ul v-show="indus1">
          <li>
            <input type="checkbox" class="mx-2" v-model="data.var27" @change="updateCont">
            <span>IT Services & Consulting</span>
            <span>(2)</span>
          </li>
          <li>
            <input type="checkbox" class="mx-2" name="" v-model="data.var28" @change="updateCont">
            <span>BPO / Call Center</span>
            <span>(4)</span>
          </li>
          <li>
            <!-- The below code contains 3 parts - 
                    1. onclick hide and show.
                    2. v-show to show extra content
                    3. v-if to show (...)dots on the basis of hide and show -->
            <input type="checkbox" class="mx-2" name="" v-model="data.var29" @change="updateCont">
            <span>Software Product</span>
            <span>(15)</span>
          </li>
          <li>
            <input type="checkbox" class="mx-2" name="" v-model="data.var30" @change="updateCont">
            <span>Recruitment/ Staffing </span>
            <span>(40)</span>
          </li>
          <!-- What the below method does are two things --
                1.  it sends a parameter to identify which perticular content it is, in below method and hide and show it. also
                2. the method takes the button text using it id and changes it according to the hide and show state -->
          <li> <button @click="showmore('indus')" id="textButton6" class="ml-6 text-blue-600">View More</button></li>
          <li v-show="indus2">
            <input type="checkbox" class="mx-2" name="Marketing & comunication">
            <span @click="indus2 = !indus2">Marketing & </span>
            <span v-if="indus2 ? '' : 'display'">...</span>
            <span v-show="indus2">Communication</span>
            (15)
          </li>
        </ul>

      </div>

      <!-- 10th div  -->
      <div>
        <div class="flex justify-between px-3 py-2 my-2 mx-1 shadow-md">
          <p>Top Companies</p>
          <label class="swap swap-rotate text-2xl font-thin" >
            <input type="checkbox" @click="topCom1 = !topCom1"/>
            <div class="swap-on">-</div>
            <div class="swap-off">+</div>
          </label>
        </div>
        <ul v-show="topCom1">
          <li>
            <input type="checkbox" class="mx-2" v-model="data.var31" @change="updateCont">
            <span>Cyient</span>
            <span>(2)</span>
          </li>
          <li>
            <input type="checkbox" class="mx-2" name="" v-model="data.var32" @change="updateCont">
            <span>Accenture</span>
            <span>(4)</span>
          </li>
          <li>
            <!-- The below code contains 3 parts - 
                    1. onclick hide and show.
                    2. v-show to show extra content
                    3. v-if to show (...)dots on the basis of hide and show -->
            <input type="checkbox" class="mx-2" name="" v-model="data.var33" @change="updateCont">
            <span>Tech Mahindra</span>
            <span>(2)</span>
          </li>
          <li>
            <input type="checkbox" class="mx-2" name="" v-model="data.var34" @change="updateCont">
            <span>Ubisoft</span>
            <span>(2)</span>
          </li>
          <!-- What the below method does are two things --
                1.  it sends a parameter to identify which perticular content it is, in below method and hide and show it. also
                2. the method takes the button text using it id and changes it according to the hide and show state -->
          <li> <button @click="showmore('topCom')" id="textButton7" class="ml-6 text-blue-600">View More</button></li>
          <li v-show="topCom2">
            <input type="checkbox" class="mx-2" name="Marketing & comunication">
            <span @click="topCom2 = !topCom2">Marketing & </span>
            <span v-if="topCom2 ? '' : 'display'">...</span>
            <span v-show="topCom2">Communication</span>
            (15)
          </li>
        </ul>

      </div>

      <!-- 11th div -->
      <div>
        <div class="flex justify-between px-3 py-2 my-2 mx-1 shadow-md">
          <p>Freshness</p>
          <i class="ml-2"></i>
        </div>
      </div>

      <!-- 12th div  -->
      <div>
        <div class="flex justify-between px-3 py-2 my-2 mx-1 shadow-md">
          <p>Location</p>
          <label class="swap swap-rotate text-2xl font-thin" >
            <input type="checkbox" @click="loca1 = !loca1"/>
            <div class="swap-on">-</div>
            <div class="swap-off">+</div>
          </label>
        </div>
        <ul v-show="loca1">
          <li>
            <input type="checkbox" class="mx-2" v-model="data.var35" @change="updateCont">
            <span>Pune</span>
            <span>(284)</span>
          </li>
          <li>
            <input type="checkbox" class="mx-2" name="" v-model="data.var36" @change="updateCont">
            <span>Bangalore/Bangaluru</span>
            <span>(44)</span>
          </li>
          <li>
            <!-- The below code contains 3 parts - 
                    1. onclick hide and show.
                    2. v-show to show extra content
                    3. v-if to show (...)dots on the basis of hide and show -->
            <input type="checkbox" class="mx-2" name="" v-model="data.var37" @change="updateCont">
            <span>Channai</span>
            <span>(36)</span>
          </li>
          <li>
            <input type="checkbox" class="mx-2" name="" v-model="data.var38" @change="updateCont">
            <span>Hyderabad/Secund</span>
            <span>(34)</span>
          </li>
          <!-- What the below method does are two things --
                1.  it sends a parameter to identify which perticular content it is, in below method and hide and show it. also
                2. the method takes the button text using it id and changes it according to the hide and show state -->
          <li> <button @click="showmore('loca')" id="textButton8" class="ml-6 text-blue-600">View More</button></li>
          <li v-show="loca2">
            <input type="checkbox" class="mx-2" name="Marketing & comunication">
            <span @click="loca2 = !loca2">Marketing & </span>
            <span v-if="loca2 ? '' : 'display'">...</span>
            <span v-show="loca2">Communication</span>
            (15)
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: false
});
import { Ref } from 'nuxt/dist/app/compat/capi';


const drpd1: Ref<Boolean> = ref(false)
const drpd2: Ref<Boolean> = ref(false)
const drpd3: Ref<Boolean> = ref(false)
const drpd4: Ref<Boolean> = ref(false)
const depCon: Ref<Boolean> = ref(false)
const RPwork: Ref<Boolean> = ref(false)
const depCon2: Ref<Boolean> = ref(false)
const depCon3: Ref<Boolean> = ref(false)
const depCon4: Ref<Boolean> = ref(false)
const salary: Ref<Boolean> = ref(false)  //salary
const salary1: Ref<Boolean> = ref(false) //salary
const compT1: Ref<Boolean> = ref(false) //company type
const compT2: Ref<Boolean> = ref(false) //company type
const roleC1: Ref<Boolean> = ref(false) //company type
const roleC2: Ref<Boolean> = ref(false) //company type
const roleC3: Ref<Boolean> = ref(false) //company type 
const edu1: Ref<Boolean> = ref(false)
const edu2: Ref<Boolean> = ref(false)
const postB: Ref<Boolean> = ref(false)
const indus1: Ref<Boolean> = ref(false)
const indus2: Ref<Boolean> = ref(false)
const topCom1: Ref<Boolean> = ref(false)
const topCom2: Ref<Boolean> = ref(false)
const loca1: Ref<Boolean> = ref(false) //locatoin
const loca2: Ref<Boolean> = ref(false)

const line: Ref<Boolean> = ref(false)




// The below object aim is to have a count of all the selected options 
const data: Ref<any> = ref({
  var1: true,
  var2: false,
  var3: false,
  var4: false,
  var5: false,
  var6: false,
  var7: false,
  var8: false,
  var9: false,
  var10: false,
  var11: false,
  var12: false,
  var13: false,
  var14: false,
  var15: false,
  var16: false,
  var17: false,
  var18: false,
  var19: false,
  var20: false,
  var21: false,
  var22: false,
  var23: false,
  var24: false,
  var25: false,
  var26: false,
  var27: false,
  var28: false,
  var29: false,
  var30: false,
  var31: false,
  var32: false,
  var33: false,
  var34: false,
  var35: false,
  var36: false,
  var37: false,
  var38: false,
})

// -----------------------
// The below code is to have a count of all selected options 
let checkedCound = ref();
const updateCont = () => {
  checkedCound.value = Object.values(data.value).filter((value) => value).length;
}
// -----------------------



// below code is for the button beside filter that will colse all the option in sidebar at once 

const closeOptions: Ref<boolean> = ref(false)

const closeAllop = () => {


  drpd1.value = false
  drpd2.value = false
  drpd3.value = false
  drpd4.value = false
  depCon.value = false
  RPwork.value = false
  depCon2.value = false
  depCon3.value = false
  depCon4.value = false
  salary.value = false
  salary1.value = false
  compT1.value = false
  compT2.value = false
  roleC1.value = false
  roleC2.value = false
  roleC3.value = false
  edu1.value = false
  edu2.value = false
  postB.value = false
  indus1.value = false
  indus2.value = false
  topCom1.value = false
  topCom2.value = false
  loca1.value = false
  loca2.value = false
}

// above code is for the button beside filter that will colse all the option in sidebar at once 
// ------------------------
// below code is for a specific function -
// 1. When click on + icon the arrow that is pointing upwords will be applied a class that will show it downwards.
// 2. Here If all the options are hidden the arrow will retuen to its original form upwords, in other case if any one
//    of option section is open the arrwo will point downwords only untill all the options are undisplayed

// --------------------

// ----------------------------------------------------------------------------------------------
// In the below method two perticular action are performed - 
// 1. hide and show more content 
// 2. Change the content inside a button by using their id's
// I have used if and else if to let the method know which perticuler content and button need changes (each else if perform these two common actions inside) 
// ---------------------------------------------------------------------------------------------- 
//  start 
const allfalse = computed(() => {
  return (
    !drpd1.value &&
    !drpd2.value &&
    !drpd3.value &&
    !drpd4.value &&
    !depCon.value &&
    !RPwork.value &&
    !depCon2.value &&
    !depCon3.value &&
    !depCon4.value &&
    !salary.value &&
    !salary1.value &&
    !compT1.value &&
    !compT2.value &&
    !roleC1.value &&
    !roleC2.value &&
    !roleC3.value &&
    !edu1.value &&
    !edu2.value &&
    !postB.value &&
    !indus1.value &&
    !indus2.value &&
    !topCom1.value &&
    !topCom2.value &&
    !loca1.value &&
    !loca2.value
  );
})



watch(allfalse, (newValue) => {
  closeOptions.value = newValue ? false : closeOptions.value;
});
// end 
//-----------------------------------------------------------------------




</script>
