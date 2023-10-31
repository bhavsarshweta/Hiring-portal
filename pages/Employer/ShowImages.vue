<template>
  <div>
    <!-- Display the stored data -->
    <h2>Title: {{ formData.title }}</h2>
    <div v-for="(image, index) in formData.uploadedImages" :key="index" class="relative">
      <img :src="image.url" :alt="image.name">
      <p class="caption">{{ formData.caption }}</p>
    </div>
    <p>Description: {{ formData.description }}</p>
    <button @mouseover="showbutton" >click me</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData:{},
    };
  },
  created() {
    // Retrieve and parse the stored formData from localStorage
    if(process.client){
    const storedData = localStorage.getItem('formData');
    this.formData = JSON.parse(storedData);
    }
  },
  methods:{
    showbutton(){
      alert("hello")
    }
  }
};
</script>

<style scoped>
.caption {
  position: absolute;
  color: white;
  font-weight: bold;
  opacity: 0.8;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
