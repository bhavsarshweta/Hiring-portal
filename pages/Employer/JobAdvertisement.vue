<template>
    <div class="m-5 md:w-1/2  py-3 mb-3 md:py-3 lg:ml-72 md:ml-52 shadow-md md:shadow-md bg-white">
        <h1 class="font-semibold text-center m-10">Job Advertisement</h1>
        <!-- Title input field -->
        <div class="w-full md:w-full  px-3 mb-6">
            <label class="block  tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-first-name">
                Enter Title <span class="text-red-500 ml-2">*</span>
            </label>
            <input
                class="appearance-none block w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name" type="text" placeholder="Enter title" v-model="formData.title">
        </div>
        <!-- Image upload section -->
        <h2 class=" tracking-wide text-gray-700 text-sm font-bold mb-2 ml-3">Add Images</h2>
        <div>
            <button @click="addImageInput"
                class="ml-3 mb-6 whitespace-nowrap bg-blue-500 rounded-md p-2 text-white w-1/4 font-bold">Add files
            </button>
            <input type="file" ref="fileInput" style="display: none" accept="image/jpeg, image/png"
                @change="handleFileUpload" multiple>
            <div class="flex justify-evenly">
                <div v-for="(image, index) in formData.uploadedImages" :key="index">
                    <img :src="image.url" :alt="image.name">
                </div>
            </div>
            <div v-if="errorMessage" style="color: red;">{{ errorMessage }}</div>
        </div>
        <!-- Description input field -->
        <div class="w-full md:w-full px-3 mb-6">
            <label class="block  tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-first-name">
                Enter Advertising description<span class="text-red-500 ml-2">*</span>
            </label>
            <input
                class="appearance-none block w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name" type="text" placeholder="Mention the designation code" v-model="formData.description">
        </div>
        <!-- text on image -->
        <div class="w-full md:w-full px-3 mb-6">
            <label class="block tracking-wide text-gray-700 text-sm font-bold mb-2" for="caption">
                Enter text to write on image(optional)
            </label>
            <input
                class="appearance-none block w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="caption" type="text" placeholder="Mention the designation code" v-model="formData.caption">
        </div>
        <!-- Submit button -->
        <div class="text-center">
            <button
                class="ml-5 mt-6 w-1/4 bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 border border-blue-700 rounded-md"
                @click="submitForm">
                Submit
            </button>
        </div>

        <!-- Navigation link to another page -->
        <NuxtLink class="block ml-3 mt-4 text-center "
            :to="{ path: '/Employer/ShowImages', query: { formData: JSON.stringify(formData) } }">Preview Advertisement
        </NuxtLink>
        <hr>
    </div>
</template>
  
<script>

export default {
    data() {
        return {
            formData: {
                title: '',
                uploadedImages: [],
                description: '',
                caption: ''
            },
            errorMessage: '',
        };
    },
    methods: {
        submitForm() {
            if (this.formData.title && this.formData.description && this.formData.uploadedImages.length > 0) {
                localStorage.setItem('formData', JSON.stringify(this.formData));
                alert('Details submitted successfully');
            } else {
                alert('Please enter all the values');
            }
        },
        handleFileUpload(event) {
            const files = event.target.files;
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                if (this.isValidImageFile(file) && file.size <= 200 * 1024) {
                    const reader = new FileReader();
                    reader.onload = () => {
                        const uploadedImage = {
                            name: file.name,
                            url: reader.result
                        };
                        this.resizeImage(file, (resizedImage) => {
                            uploadedImage.url = resizedImage;
                            this.formData.uploadedImages.push(uploadedImage); // Corrected line
                            this.saveImagesToLocalStorage(); // Save images to localStorage
                        });
                    };
                    reader.readAsDataURL(file);
                }
                else {
                    this.errorMessage = `Image "${file.name}" exceeds the maximum allowed size of 200KB.`;
                }
            }
        },
        saveImagesToLocalStorage() {
            localStorage.setItem('uploadedImages', JSON.stringify(this.uploadedImages));
        },
        isValidImageFile(file) {
            const allowedExtensions = ['jpg', 'jpeg', 'png'];
            const fileExtension = file.name.split('.').pop().toLowerCase();
            return allowedExtensions.includes(fileExtension);
        },
        addImageInput() {
            this.$refs.fileInput.click();
        },
        resizeImage(file, callback) {
            const MAX_WIDTH = 300;
            const MAX_HEIGHT = 500;

            const img = new Image();
            img.src = URL.createObjectURL(file);

            img.onload = () => {
                let width = img.width;
                let height = img.height;

                if (width > MAX_WIDTH || height > MAX_HEIGHT) {
                    if (width > height) {
                        height = Math.round((height * MAX_WIDTH) / width);
                        width = MAX_WIDTH;
                    } else {
                        width = Math.round((width * MAX_HEIGHT) / height);
                        height = MAX_HEIGHT;
                    }
                }

                const canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;

                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);

                const resizedImage = canvas.toDataURL('image/jpeg', 0.8);
                callback(resizedImage);
            };
        }
    }
};
</script>
  