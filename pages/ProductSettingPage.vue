<template>
    <div>
        <!-- header  -->
        <div>
         <HKCLheader></HKCLheader>
        </div>

        <!-- middle content  -->
        <div class="my-10 mx-10">
           
          <div class="flex my-3">
            <i class="fa fa-angle-left mx-3 pt-1 "></i>
            <span> <NuxtLink to="/HKCLhome">Back to Homepage</NuxtLink> </span>
          </div>

          <div class="grid grid-cols-2">
               <div class="mx-3">
                <div class="bg-slate-200 py-2 pl-3"><p>Resdex</p></div>
                <div><span class="pl-3">Smart interpretor: Currently ON | Turn Off <i class="fa fa-question-circle px-2" style="font-size:30px;color:lightgreen"></i></span></div>
               </div> 

               <div class="mx-3"> 
                <div class="bg-slate-200 py-2 pl-3"><p>RMS</p></div>
                <div class="pl-3">
                    <span>Configure Account Settings for</span> <br>
                    <span>Response Manager | RMS Account Settings</span> 
                </div>
               </div>

          </div>
          <br>
          <div class="grid grid-cols-2">
            <div class="mx-3 "> 
                <div class="bg-slate-200 py-2 my-2 pl-3"><p>Job Posting</p></div>
                <div class="pl-3">
                    <span>Add Photos</span> <br>
                    <span>Add Presentations</span> <br>
                    <span>Add Video URL</span> <p></p>
                </div>
            </div>
            <div>

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

</script>

<style scoped>

</style>