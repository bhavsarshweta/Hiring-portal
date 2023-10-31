<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  
  <div class="container mx-auto shadow-lg print:grid print:grid-cols-2">
    <div class="grid grid-cols-1 md:grid-cols-3">
      <!-- Left Column -->
      <div class="md:col-span-1 bg-white shadow-md border-r-4 border-blue-500">
        <div class="p-8">
          <div class="text-center">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Avatar" class="w-32 h-32 mx-auto rounded-full">
            <h2 class="text-2xl font-bold mt-4">Jane Doe</h2>
          </div>
          <hr class="my-6"/>
          <div>
            <p class="text-blue-500 text-lg"><i class="fa fa-briefcase fa-fw mr-2"></i>Designer</p>
            <p class="text-blue-500 text-lg"><i class="fa fa-home fa-fw mr-2"></i>London, UK</p>
            <p class="text-blue-500 text-lg"><i class="fa fa-envelope fa-fw mr-2"></i>ex@mail.com</p>
            <p class="text-blue-500 text-lg"><i class="fa fa-phone fa-fw mr-2"></i>1224435534</p>
          </div>
          <hr class="my-6 bg-blue-500" />
          <div>
            <h3 class="text-lg font-bold text-blue-500 mb-2">Skills</h3>
            <p>Adobe Photoshop</p>
            <div class="bg-blue-200 h-2 rounded-full">
              <div class="bg-blue-500 h-2 rounded-full" style="width: 90%"></div>
            </div>
            <p>Photography</p>
            <div class="bg-blue-200 h-2 rounded-full">
              <div class="bg-blue-500 h-2 rounded-full" style="width: 80%"></div>
            </div>
            <p>Illustrator</p>
            <div class="bg-blue-200 h-2 rounded-full">
              <div class="bg-blue-500 h-2 rounded-full" style="width: 75%"></div>
            </div>
            <p>Media</p>
            <div class="bg-blue-200 h-2 rounded-full">
              <div class="bg-blue-500 h-2 rounded-full" style="width: 50%"></div>
            </div>
          </div>
          <hr class="my-6" />
          <div>
            <h3 class="text-lg font-bold text-blue-500 mb-2">Languages</h3>
            <p>English</p>
            <div class="bg-blue-200 h-2 rounded-full">
              <div class="bg-blue-500 h-2 rounded-full" style="width: 100%"></div>
            </div>
            <p>Spanish</p>
            <div class="bg-blue-200 h-2 rounded-full">
              <div class="bg-blue-500 h-2 rounded-full" style="width: 55%"></div>
            </div>
            <p>German</p>
            <div class="bg-blue-200 h-2 rounded-full">
              <div class="bg-blue-500 h-2 rounded-full" style="width: 25%"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- Right Column -->
      <div class="md:col-span-2 bg-white shadow-md">
        <div class="p-8">
          <div>
            <h2 class="text-2xl font-bold text-blue-500 mb-6"><i class="fa fa-suitcase fa-fw mr-2"></i>Work Experience</h2>
            <div class="mb-6">
              <h3 class="text-lg font-bold">Front End Developer /</h3>
              <p class="text-blue-500"><i class="fa fa-calendar fa-fw mr-2"></i>Jan 2015 - <span class="bg-blue-500 text-white py-1 px-2 rounded">Current</span></p>
              <p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
            </div>
            <div class="mb-6">
              <h3 class="text-lg font-bold">Web Developer / something.com</h3>
              <p class="text-blue-500"><i class="fa fa-calendar fa-fw mr-2"></i>Mar 2012 - Dec 2014</p>
              <p>Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
            </div>
            <div class="mb-6">
              <h3 class="text-lg font-bold">Graphic Designer / designsomething.com</h3>
              <p class="text-blue-500"><i class="fa fa-calendar fa-fw mr-2"></i>Jun 2010 - Mar 2012</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <hr class="my-6" />
          <div>
            <h2 class="text-2xl font-bold text-blue-500 mb-6"><i class="fa fa-certificate fa-fw mr-2"></i>Education</h2>
            <div class="mb-6">
              <h3 class="text-lg font-bold">Msc computer science</h3>
              <p class="text-blue-500"><i class="fa fa-calendar fa-fw mr-2"></i>Forever</p>
              <p>Web Development! All I need to know in one place</p>
            </div>
            <div class="mb-6">
              <h3 class="text-lg font-bold">London Business School</h3>
              <p class="text-blue-500"><i class="fa fa-calendar fa-fw mr-2"></i>2013 - 2015</p>
              <p>Master Degree</p>
            </div>
            <div class="mb-6">
              <h3 class="text-lg font-bold">School of Coding</h3>
              <p class="text-blue-500"><i class="fa fa-calendar fa-fw mr-2"></i>2010 - 2013</p>
              <p>Bachelor Degree</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>
</template>

<script>
definePageMeta({
  layout: false
});

export default {
  name: 'Resume',
};
</script>

<style scoped>
/* Add your custom styles here */
.container {
  width: 70%;
  display: grid;
  grid-template-columns: 1/2fr 1fr;
  
}


@media print {
.container {
display: flex;
width: 100%;
}

.md\:col-span-1 {
flex: 0 0 50%; /* Adjust the width of the left column as needed */
}

.md\:col-span-2 {
flex: 0 0 50%; /* Adjust the width of the right column as needed */
}

  .bg-gray-100 {
    display: none; /* Optional: Hides the gray background color when printing */
  }
}


</style>
