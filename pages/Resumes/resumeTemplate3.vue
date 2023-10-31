<template>
  <div class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
      <!-- Left Column -->
      <div class="md:col-span-4">
        <div class="bg-white shadow-md rounded-lg p-6">
          <div class="text-center mb-4">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" class="w-32 h-32 rounded-full mx-auto" alt="Avatar">
            <h2 class="text-xl font-bold mt-4">Jane Doe</h2>
            <p class="text-gray-600">Designer</p>
          </div>
          <hr class="my-6">
          <div>
            <h3 class="text-lg font-bold">Contact</h3>
            <ul class="mt-4 text-gray-600">
              <li class="flex items-center mb-2">
                <i class="fa fa-home fa-fw mr-2"></i>
                <span>London, UK</span>
              </li>
              <li class="flex items-center mb-2">
                <i class="fa fa-envelope fa-fw mr-2"></i>
                <span>ex@mail.com</span>
              </li>
              <li class="flex items-center">
                <i class="fa fa-phone fa-fw mr-2"></i>
                <span>1224435534</span>
              </li>
            </ul>
          </div>
          <hr class="my-6">
          <div>
            <h3 class="text-lg font-bold">Skills</h3>
            <div class="mt-4">
              <div class="flex items-center mb-2">
                <span class="w-1/3">Adobe Photoshop</span>
                <div class="bg-teal-500 h-2 rounded-full w-2/3"></div>
              </div>
              <div class="flex items-center mb-2">
                <span class="w-1/3">Photography</span>
                <div class="bg-teal-500 h-2 rounded-full w-2/3">
                  <div class="bg-white h-full w-4/5 rounded-full"></div>
                </div>
              </div>
              <div class="flex items-center mb-2">
                <span class="w-1/3">Illustrator</span>
                <div class="bg-teal-500 h-2 rounded-full w-2/3"></div>
              </div>
              <div class="flex items-center">
                <span class="w-1/3">Media</span>
                <div class="bg-teal-500 h-2 rounded-full w-2/3">
                  <div class="bg-white h-full w-1/2 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          <hr class="my-6">
          <div>
            <h3 class="text-lg font-bold">Languages</h3>
            <div class="mt-4">
              <div class="flex items-center mb-2">
                <span class="w-1/3">English</span>
                <div class="bg-teal-500 h-2 rounded-full w-full"></div>
              </div>
              <div class="flex items-center mb-2">
                <span class="w-1/3">Spanish</span>
                <div class="bg-teal-500 h-2 rounded-full w-3/5"></div>
              </div>
              <div class="flex items-center">
                <span class="w-1/3">German</span>
                <div class="bg-teal-500 h-2 rounded-full w-1/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column -->
      <div class="md:col-span-8 mt-8 md:mt-0">
        <div class="bg-white shadow-md rounded-lg p-6">
          <h3 class="text-2xl font-bold mb-6">Work Experience</h3>
          <div class="mb-6">
            <h4 class="text-lg font-bold">Front End Developer / w3schools.com</h4>
            <p class="text-gray-600 mb-2">Jan 2015 - Present</p>
            <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
          </div>
          <div class="mb-6">
            <h4 class="text-lg font-bold">Web Developer / something.com</h4>
            <p class="text-gray-600 mb-2">Mar 2012 - Dec 2014</p>
            <p class="text-gray-600">Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
          </div>
          <div>
            <h4 class="text-lg font-bold">Graphic Designer / designsomething.com</h4>
            <p class="text-gray-600 mb-2">Jun 2010 - Mar 2012</p>
            <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>

        <div class="bg-white shadow-md rounded-lg p-6 mt-8">
          <h3 class="text-2xl font-bold mb-6">Education</h3>
          <div class="mb-6">
            <h4 class="text-lg font-bold">W3Schools.com</h4>
            <p class="text-gray-600 mb-2">Forever</p>
            <p class="text-gray-600">Web Development! All I need to know in one place</p>
          </div>
          <div class="mb-6">
            <h4 class="text-lg font-bold">London Business School</h4>
            <p class="text-gray-600 mb-2">2013 - 2015</p>
            <p class="text-gray-600">Master Degree</p>
          </div>
          <div>
            <h4 class="text-lg font-bold">School of Coding</h4>
            <p class="text-gray-600 mb-2">2010 - 2013</p>
            <p class="text-gray-600">Bachelor Degree</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}

definePageMeta({
  layout: false
});

</script>

<style>
/* Add your custom styles here */
</style>
