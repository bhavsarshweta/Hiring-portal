<template>
    <div>
        <!-- header  -->
        <div>
         <HKCLheader></HKCLheader>
        </div>
      <div class="mx-10">  
        <div class="flex my-3">
            <i class="fa fa-angle-left mx-3 pt-1 "></i>
            <span> <NuxtLink to="/HKCLhome">Back to Homepage</NuxtLink> </span>
          </div>
        <!-- middle content  -->
          <div class="flex" >
            <div><button class="py-1 px-4 border-2 mx-3 my-2 " v-bind:class="tab1?'activ': ''" @click="getclass('tab1')">Photos</button> </div>
            <div><button class="py-1 px-4 border-2 mx-3 my-2" v-bind:class="tab2?'activ': ''" @click="getclass('tab2')">Presentations</button> </div>
            <div><button class="py-1 px-4 border-2 mx-3 my-2" v-bind:class="tab3?'activ': ''" @click="getclass('tab3')">Video URL</button> </div>
          </div>

          <!-- below 1 main div and 2 chidld div  -->
           
           <div class="grid grid-cols-3 my-3 " >
           
            <!-- first div  -->
            <div class="col-span-2">
                <div class="flex justify-between px-2 py-4 border-2 mx-2 my-2">
                    <div class="inline-flex">               
                    <input type="checkbox" class="mt-1">
                    <span class="pt-1 px-2">You have not uploaded any photo.</span>
                    </div>
                    <div><button class="px-4 border-2 mx-3 ">Delete</button></div>
                </div>
            </div>

            <!-- second div  -->
            <div class="my-2 mx-2 border-2 ">
                <div>
                 <div class="bg-slate-200 px-2 py-3"><span>Upload Photos</span></div>
                <br>
                <div class="px-3">
                    Max uploads allowed: 20
                    Currently uploaded: 0 
                    File size limit: 500kB each
                    File Formats: jpg,png,gif
                    <br>
                    <br>
                    Uploaded photos of your facility
                    and people (building, employee 
                    work space, cafeteria, Office
                    personnel etc.) that you would like 
                    to be displayed to jobseekers on the
                    Job Details page.
                     <br>
                     <br>
                     <input type="file" >
                </div>
                <br>
               </div>
               <hr>
               <br>
               <span class="inline-flex mb-4">
                <button class="px-4 border-2 mx-3 ">Delete</button>
                <p>(20 Left)</p>
               </span>
            </div>
               

           </div>
        </div>
        <!-- footer  -->
        <div>
          <HKCLfooter></HKCLfooter>
        </div>

    </div>
</template>

<script setup lang="ts">
 
 import { Ref } from 'nuxt/dist/app/compat/capi';

const tab1 :Ref<boolean> = ref(true)
const tab2 :Ref<boolean> = ref(false)
const tab3 :Ref<boolean> = ref(false)

const getclass = (value:String) => {
   
    if(value == "tab2")
    {   
        tab1.value = false
        tab2.value = true
        tab3.value = false
    }else if(value == "tab3")
    {
        tab1.value = false
        tab2.value = false
        tab3.value = true
    }else{
        tab1.value = true
        tab2.value = false
        tab3.value = false
    }
}

</script>


<style scoped>

.activ{
    color: white;
    background-color: skyblue;
    border: none;
}

</style>