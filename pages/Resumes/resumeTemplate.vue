<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="bg-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <!-- Left Column -->
          <div class="lg:col-span-1">
            <div class="bg-white text-gray-600 rounded-lg shadow-md p-8">
              <div class="relative">
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Avatar" class="w-full rounded-lg mb-4" />
                <div class="absolute bottom-0 left-0 bg-black text-white p-4">
                  <h2 class="text-2xl">Jane Doe</h2>
                </div>
              </div>
              <div class="py-4">
                <p><i class="fa fa-briefcase fa-fw mr-2 text-teal-500"></i>Designer</p>
                <p><i class="fa fa-home fa-fw mr-2 text-teal-500"></i>London, UK</p>
                <p><i class="fa fa-envelope fa-fw mr-2 text-teal-500"></i>ex@mail.com</p>
                <p><i class="fa fa-phone fa-fw mr-2 text-teal-500"></i>1224435534</p>
                <hr class="my-4">
                <p class="text-lg font-semibold"><i class="fa fa-asterisk fa-fw mr-2 text-teal-500"></i>Skills</p>
                <p>Adobe Photoshop</p>
                <div class="w-full bg-gray-300 rounded-lg h-4 mb-2">
                  <div class="bg-teal-500 h-full rounded-lg" style="width: 90%"></div>
                </div>
                <p>Photography</p>
                <div class="w-full bg-gray-300 rounded-lg h-4 mb-2">
                  <div class="bg-teal-500 h-full rounded-lg" style="width: 80%"></div>
                </div>
                <p>Illustrator</p>
                <div class="w-full bg-gray-300 rounded-lg h-4 mb-2">
                  <div class="bg-teal-500 h-full rounded-lg" style="width: 75%"></div>
                </div>
                <p>Media</p>
                <div class="w-full bg-gray-300 rounded-lg h-4 mb-2">
                  <div class="bg-teal-500 h-full rounded-lg" style="width: 50%"></div>
                </div>
                <br>
                <p class="text-lg font-semibold text-teal-500"><i class="fa fa-globe fa-fw mr-2 text-teal-500"></i>Languages</p>
                <p>English</p>
                <div class="w-full bg-gray-300 rounded-lg">
                  <div class="bg-teal-500 h-2 rounded-lg"></div>
                </div>
                <p>Spanish</p>
                <div class="w-full bg-gray-300 rounded-lg">
                  <div class="bg-teal-500 h-2 rounded-lg" style="width: 55%"></div>
                </div>
                <p>German</p>
                <div class="w-full bg-gray-300 rounded-lg">
                  <div class="bg-teal-500 h-2 rounded-lg" style="width: 25%"></div>
              </div>
              <br>
            </div>
          </div>
          <br>
        </div>

        <!-- Right Column -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-lg shadow-md p-8">
            <h2 class="text-2xl text-gray-600 mb-8"><i class="fa fa-suitcase fa-fw mr-2 text-teal-500"></i>Work Experience</h2>
            <div class="mb-8">
              <h5 class="font-semibold text-teal-500 mb-2"><b>Front End Developer / </b></h5>
              <h6 class="text-teal-500"><i class="fa fa-calendar fa-fw mr-2"></i>Jan 2015 - <span class="inline-block bg-teal-500 text-white rounded-full px-2 py-1">Current</span></h6>
              <p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
              <hr class="my-4">
            </div>
            <div class="mb-8">
              <h5 class="font-semibold text-teal-500 mb-2"><b>Web Developer / something.com</b></h5>
              <h6 class="text-teal-500"><i class="fa fa-calendar fa-fw mr-2"></i>Mar 2012 - Dec 2014</h6>
              <p>Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
              <hr class="my-4">
            </div>
            <div class="mb-8">
              <h5 class="font-semibold text-teal-500 mb-2"><b>Graphic Designer / designsomething.com</b></h5>
              <h6 class="text-teal-500"><i class="fa fa-calendar fa-fw mr-2"></i>Jun 2010 - Mar 2012</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <br>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-md p-8 mt-8">
            <h2 class="text-2xl text-gray-600 mb-8"><i class="fa fa-certificate fa-fw mr-2 text-teal-500"></i>Education</h2>
            <div class="mb-8">
              <h5 class="font-semibold text-teal-500 mb-2"><b>Msc computer science</b></h5>
              <h6 class="text-teal-500"><i class="fa fa-calendar fa-fw mr-2"></i>Forever</h6>
              <p>Web Development! All I need to know in one place</p>
              <hr class="my-4">
            </div>
            <div class="mb-8">
              <h5 class="font-semibold text-teal-500 mb-2"><b>London Business School</b></h5>
              <h6 class="text-teal-500"><i class="fa fa-calendar fa-fw mr-2"></i>2013 - 2015</h6>
              <p>Master Degree</p>
              <hr class="my-4">
            </div>
            <div class="mb-8">
              <h5 class="font-semibold text-teal-500 mb-2"><b>School of Coding</b></h5>
              <h6 class="text-teal-500"><i class="fa fa-calendar fa-fw mr-2"></i>2010 - 2013</h6>
              <p>Bachelor Degree</p>
              <br>
            </div>
          </div>
        </div>
      </div>
    </div>
  

  <!-- Footer -->
  <footer class="bg-teal-500 py-8 text-center">
    <p class="text-white">Find me on social media.</p>
    <i class="fa fa-facebook-official fa-lg text-white hover:opacity-75 mx-2"></i>
    <i class="fa fa-instagram fa-lg text-white hover:opacity-75 mx-2"></i>
    <i class="fa fa-snapchat fa-lg text-white hover:opacity-75 mx-2"></i>
    <i class="fa fa-pinterest-p fa-lg text-white hover:opacity-75 mx-2"></i>
    <i class="fa fa-twitter fa-lg text-white hover:opacity-75 mx-2"></i>
    <i class="fa fa-linkedin fa-lg text-white hover:opacity-75 mx-2"></i>
    <p class="text-white mt-4">Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" class="text-white"></a></p>
  </footer>
</div>
</template>
<script>
  
definePageMeta({
  layout: false
});
</script>

  