<template>
    <div class="flex justify-center my-10">
        <div class="shadow-md  sm:w-9/12 w-full">
            <h1 class="font-semibold text-center text-lg  mt-2 ml-6">Share about Yourself</h1>
            <div class="flex">
                <div class="w-96 h-32 md:w-64 lg:w-44 bg-gray-300 relative m-4 flex">
                    <div
                        class="top-1/3  left-1/3 sm:left-1/3  transform -translate-x-1/4 flex-row -translate-y-1/2  absolute">
                        Profile Photo
                    </div>
                    <label for="upload-button"
                        class="cursor-pointer text-xs mt-24 w-14 bg-white border border-black rounded-full absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2 py-1">
                        Upload
                        <input type="file" id="upload-button" class="hidden" accept=".jpg, .jpeg, .png, .gif"
                            @change="handleFileUpload">
                    </label>
                    <img :src="uploadedPhoto" alt="Uploaded Photo" v-if="uploadedPhoto" class="w-full h-full object-cover">
                </div>
                <div class="flex-col px-4 text-sm mt-3">
                    <p>Jobs and mail with photograph will get <b>40% more relevant responses</b></p>
                </div>
            </div>

            <div class="w-full md:w-1/2 px-4 mb-6  ">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Enter Full Name
                </label>
                <input
                    class="appearance-none block w-full text-gray-700 border  border-black rounded py-3 px-3 mb-3  leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name" type="text" required maxlength="15" minlength="4" placeholder=" Enter Full Name"
                    v-model="ename">
            </div>
            <div class="w-full md:w-1/2 px-4 mb-6 ">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Enter your current Company Name
                </label>
                <input
                    class="appearance-none block w-full border-black text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name" type="text" placeholder="Enter your current Company Name" v-model="cname">
            </div>
            <div class="w-full md:w-1/2 px-4 mb-6 ">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Enter your current Designation
                </label>
                <input
                    class="appearance-none block w-full border-black  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name" type="text" placeholder="Enter your current Designation" v-model="designation">
            </div>
            <div class="flex px-4 ">
                <div class="w-full md:w-1/3 lg:w-1/4  flex-col">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 whitespace-nowrap"
                        for="grid-first-name">
                        Enter your country
                    </label>
                    <input
                        class="appearance-none block w-full border-black  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name" type="text" placeholder="Enter Country" v-model="country">
                </div>
                <div class="w-96 md:w-1/2 px-4 lg:w-1/2 flex-col">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        Enter your location
                    </label>
                    <input
                        class="appearance-none block w-full border-black text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name" type="text" placeholder="Enter location" v-model="location">
                </div>
            </div>
            <div class="w-full md:w-1/2 px-4  mt-4 mb-6 ">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Enter Alternative Email id
                </label>
                <input
                    class="appearance-none block w-full  text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name" type="text" placeholder="Enter Alternative Email id" v-model="email">
            </div>
            <div class="w-full md:w-1/2 px-4 mb-6 ">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Enter Mobile Number
                </label>
                <input
                    class="appearance-none block w-full  text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name" type="text" placeholder="Enter Mobile Number" v-model="mobile">
            </div>
            <div class="text-center">
                <button
                    class="ml-5 mb-6 bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 border border-blue-700 rounded"
                    @click="submitForm">
                    Done
                </button>
            </div>

        </div>
    </div>
</template>
  

<script>

export default {
    data() {
        return {
            uploadedPhoto: null
        }
    },

    methods: {
        handleFileUpload(event) {
            const file = event.target.files[0];
            const maxSize = 5 * 1024 * 1024; // 5MB

            if (file && file.size <= maxSize) {
                const reader = new FileReader();

                reader.onload = () => {
                    this.uploadedPhoto = reader.result;
                };

                reader.readAsDataURL(file);
            } else {
                console.error('Invalid file. Please select a JPG, PNG, or GIF file less than 5MB.');
            }
        }
    }

}
</script>

<style  scoped></style>