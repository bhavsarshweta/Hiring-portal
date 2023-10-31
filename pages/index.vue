<template>
  <div class="">
    <div class="mt-5">
      <!--  -->
      <div class=" lg:mx-10 ml-7 md:mx-14 py-4 px-3 bg-white md:h-100 main-content1 lg:ml-20 lg:mr-20 rounded-lg">
        <div class="grid grid-cols-1 md:grid-cols-6">
          <!-- first div below  -->
          <div class="md:col-span-1">
            <div class="indicator">
              <!-- <span class="indicator-item badge badge-secondary"></span>  -->
              <div class="w-20 h-20 bg-base-300 place-items-center z-0 rounded-full mx-2 my-3"></div>
            </div>
          </div>
          <!-- middle div  -->
          <div class="md:col-span-3">
            <p class="my-3 text-lg">Shweta Bhavsar</p>
            <hr>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-2">
              <div class="md:mr-2">
                <span class="text-sm"><i class="fa fa-map-marker mr-2"></i>Pune, INDIA</span><br>
                <span class="text-sm"><i class="fa fa-suitcase mt-5 mr-2"></i>Fresher</span><br>
                <span class="text-sm"><i class="fa fa-calendar mt-5 mr-2"></i>Calender</span>
              </div>
              <div class="mt-2 md:mt-0">
                <span class="text-sm"><i class="fa fa-phone mr-2"></i>8999150141</span><br>
                <span class="text-sm"><i class="fa fa-envelope mr-2"></i>bhavsarshweta@gmail.com</span>
              </div>
            </div>
          </div>
          <!-- middle div ends here  -->
          <div class="md:col-span-2 mt-3 md:mt-0">
            <div class="bg-amber-100 px-5 py-6 rounded-lg">
              <p class="text-lg font-bold">3 Pending Action(s)</p>
              <br>
              <p><small>Verify Mobile Number</small></p>
              <p><small>Add Department</small></p>
              <p><small>Add Project Summary</small></p>
              <p class="text-end text-sm">VIEW ALL</p>
            </div>
          </div>
        </div>
      </div>

      <!-- menubar starts here -->

      <div class="flex ">
        <nav class="px-12 shadow-md ml-20 mt-5 text-left sticky top-10 lg:block hidden" style="height: 500px;">
          <ul class="text-sm sidebar-list">
            <li class="font-bold my-3 text-left text-base">Quick Links</li>
            <hr>
            <li><a href="#section-1">Resume</a></li>
            <li><a href="#section-2">Resume Headline</a></li>
            <li><a href="#section-3">Key Skills</a></li>
            <li><a href="#section-4">Education</a></li>
            <li><a href="#section-5">IT Skills</a></li>
            <li><a href="#section-6">Projects</a></li>
            <li><a href="#section-7">Profile Summary</a></li>
            <li><a href="#section-8">Accomplishments</a></li>
            <li><a href="#section-9">Career Profile</a></li>
          </ul>
        </nav>
        <!-- </div>   -->

        <main class="ml-7 mr-20 md:mx-14 lg:ml-8 lg:mr-16 pb-0 main-content md:w-auto">
          <!--  -->

          <section id="section-1" class="ml-10 shadow-md mt-5 mr-10 bg-white ">
            <h1 class="font-bold md:text-base text-sm">Resume</h1>
            <p class="text-sm md:text-base">Resume is the most important document recruiters look for. Recruiters
              generally do not look at profiles without resumes.</p>
            <!-- <div class="flex justify-end">
              <i class="fa fa-pencil text-blue-500 " style="font-size:15px"></i>
            </div> -->
            <div class="flex justify-between">
              <div v-if="selectedFile">
                <p class="font-semibold"> {{ selectedFile.name }}</p>
              </div>
              <button class="text-blue-500 mt-5">Delete resume</button>
            </div>
            <div class="text-center h-100 border border-gray-400 border-dashed rounded-lg mt-2 pb-2">

              <input type="file" ref="fileInput" @change="handleFileSelection" style="display: none;">
              <button type="button"
                class="rounded-full active:rounded-lg border border-black text-blue-500 py-2 mt-5  md:w-1/4 w-1/2 h-10 item-center whitespace-nowrap"
                @click="browseFiles">Update resume</button>
              <!--  -->
              <small class="block mb:mt-5">Supported Formats: doc, docx, rtf, pdf, upto 2 MB</small>
            </div>
          </section>

          <section id="section-2" class="ml-10 shadow-md mt-5 mr-10 bg-white">
            <div class="flex items-center">
              <h1 class="font-bold">Resume Headline</h1>
              <!-- Edit button -->
              <label for="my-modal-3" class="btn bg-white border-none hover:bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-pencil text-blue-500 ml-4" viewBox="0 0 16 16">
                  <path
                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                </svg>
              </label>
            </div>
            <!-- <p class="text-sm md:text-base">Ratione nulla nam, ipsa dignissimos corrupti veniam nostrum, laudantium
              asperiores sequi numquam placeat
              velit voluptate in praesentium non labore unde incidunt laborum maxime quae magni.</p> -->
          </section>

          <section id="section-3" class="ml-10 shadow-md mt-5 mr-10 bg-white">
            <div class="flex items-center">
              <h1 class="font-bold">Key skills</h1>
              <!-- Edit button -->
              <label for="my-modal-4" class="btn bg-white border-none hover:bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-pencil text-blue-500 ml-4" viewBox="0 0 16 16">
                  <path
                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                </svg>
              </label>
            </div>
            <div class="widgetCont text-sm md:text-base">
              <div class="selected-options-container">
                <div v-for="(option, index) in selectedOptions" :key="index" class="selected-option mb-2 rounded-md">
                  <span>{{ option }}</span>
                  <button class="remove-button">X</button>
                </div>
              </div>

            </div>
          </section>

          <!-- employment section starts here -->
          <section id="section-10" class="ml-10 shadow-md mt-5 mr-10 bg-white">

            <div class="flex justify-between">
              <h1 class="font-bold">Employment</h1>
              <label for="my-modal-6" class="font-medium text-blue-500">Add employment</label>
            </div>
            <br>
            <p class="text-sm md:text-base">Soluta quibusdam ad nostrum vel voluptate delectus sequi dolores quia quaerat
              officia corrupti, aperiam
              fugit facere debitis repudiandae praesentium sapiente inventore repellendus, nemo commodi alias!</p>
          </section>


          <!-- education section starts here -->
          <section id="section-4" class="ml-10 shadow-md mt-5 mr-10 bg-white">
            <div class="flex justify-between">
              <h1 class="font-bold">Education</h1>
              <label for="my-modal-5" class="font-medium text-blue-500">Add education</label>
            </div>
            <br>
            <div>
              <div class="flex justify-between">
                <p class="font-semibold text-sm md:text-base">MS/M.Sc(Science)Computer Science</p>
                <!-- edit pencil -->
                <label for="my-modal-3" class="btn bg-white border-none hover:bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-pencil text-blue-500 ml-4" viewBox="0 0 16 16">
                    <path
                      d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                  </svg>
                </label>
              </div>
              <P class=" font-light text-sm md:text-base">Pune University</P>
              <p class="font-light text-sm md:text-base">2020-2022 • Full Time</p>
            </div><br>
          </section>
          <!-- education section ends here -->

          <section id="section-5" class="ml-10 shadow-md mt-5 mr-10 bg-white">
            <div class="flex justify-between">
              <h1 class="font-bold">IT Skills</h1>
              <label for="my-modal-5" class="font-medium text-blue-500">Add details</label>
            </div>

            <div class="overflow-x-auto">
              <table class="mt-4 text-sm md:text-base">
                <thead>
                  <tr class="mb-4">
                    <th class="px-2 md:px-4 py-2">Skills</th>
                    <th class="px-2 md:px-4 py-2">Version</th>
                    <th class="px-2 md:px-4 py-2 whitespace-nowrap">Last Used</th>
                    <th class="px-2 md:px-4 py-2">Experience</th>
                  </tr>
                </thead>
                <tbody class="text-xs">
                  <tr class="">
                    <td class="px-2 md:px-4 py-2">Java</td>
                    <td class="px-2 md:px-4 py-2">6.0</td>
                    <td class="px-2 md:px-4 py-2">2022</td>
                    <td class="px-2 md:px-4 py-2">1 Year</td>
                  </tr>
                  <tr class="">
                    <td class="px-2 md:px-4 py-2">Java</td>
                    <td class="px-2 md:px-4 py-2">6.0</td>
                    <td class="px-2 md:px-4 py-2">2022</td>
                    <td class="px-2 md:px-4 py-2">1 Year</td>
                  </tr>
                  <tr class="">
                    <td class="px-2 md:px-4 py-2">Java</td>
                    <td class="px-2 md:px-4 py-2">6.0</td>
                    <td class="px-2 md:px-4 py-2">2022</td>
                    <td class="px-2 md:px-4 py-2">1 Year</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </section>

          <section id="section-6" class="ml-10 shadow-md mt-5 mr-10 bg-white rounded-6">
            <div class="flex justify-between">
              <h1 class="font-bold ">Projects</h1>
              <label for="my-modal-5" class="font-medium text-blue-500">Add projects</label>
            </div>
            <!-- <div class="flex justify-between"> -->
            <div class="flex items-center">
              <h1 class="font-semibold text-sm md:text-base">Event Decoration website</h1>
              <!-- edit pencil -->
              <label for="my-modal-3" class="btn bg-white border-none hover:bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-pencil text-blue-500 ml-4" viewBox="0 0 16 16">
                  <path
                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                </svg>
              </label>
            </div>
            <!-- <button class="font-medium text-blue-500">Add projects</button> -->
            <!-- </div> -->
            <p class="mt-5 text-sm md:text-base">Jul 2021 to Dec 2021 (Full Time)
              Project Title: Event Decoration Website Description: To book decorations for events such as Birthday,
              Anniversary, etc Developed Using: HTML, CSS, PHP, JavaScript, and Database as MYSQL Responsibilities: To
              prepare the design of the system Making use of SQL at the front end and back</p>
          </section>

          <section id="section-7" class="ml-10 shadow-md mt-5 mr-10 bg-white">
            <div class="flex items-center">
              <h1 class="font-bold">Profile Summary</h1>
              <label for="my-modal-3" class="btn bg-white border-none hover:bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-pencil text-blue-500 ml-4" viewBox="0 0 16 16">
                  <path
                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                </svg>
              </label>
            </div>
            <p class="mt-3 text-sm md:text-base">Cum asperiores temporibus itaque consequatur quod inventore, quia quis
              explicabo dicta esse
              minus voluptatem reiciendis eveniet animi, necessitatibus illum dolorem doloremque repellat placeat, dolores
              eaque.</p>
          </section>

          <section id="section-8" class="ml-10 shadow-md mt-5 mr-10 bg-white">
            <h1 class="font-bold">Accomplishments</h1>
            <div class="flex justify-between mt-3 text-sm md:text-base">
              <h1 class="font-semibold ">Online profile</h1>
              <label for="my-modal-5" class="font-medium text-blue-500">Add</label>
            </div>
            <p class="text-sm">Add link to Online profiles (e.g. Linkedin, Facebook etc.).</p><br>
            <hr>

            <div class="flex justify-between mt-5 text-sm md:text-base">
              <h1 class="font-semibold ">Work Sample</h1>
              <label for="my-modal-5" class="font-medium text-blue-500">Add</label>
            </div>
            <p class="text-sm">Add link to your Projects (e.g. Github links etc.)..</p><br>
            <hr>

            <div class="flex justify-between  mt-5 text-sm md:text-base">
              <h1 class="font-semibold">White Paper / Research Publication / Journal Entry</h1>
              <label for="my-modal-5" class="font-medium text-blue-500">Add</label>
            </div>
            <p class="text-sm">Add links to your Online publications.</p><br>
            <hr>

            <div class="flex justify-between  mt-5 text-sm md:text-base">
              <h1 class="font-semibold">Presentation</h1>
              <label for="my-modal-5" class="font-medium text-blue-500">Add</label>
            </div>
            <p class="text-sm">Add links to your Online presentations (e.g. Slideshare presentation links etc.)</p><br>
            <hr>

            <div class="flex justify-between  mt-5 text-sm md:text-base">
              <h1 class="font-semibold">Certification</h1>
              <label for="my-modal-5" class="font-medium text-blue-500">Add</label>
            </div>
            <p class="text-sm">Add details of Certifications you have achieved/completed</p><br>
          </section>

          <section id="section-9" class="ml-10 shadow-md mt-5 mr-10 bg-white text-sm md:text-base">
            <div class="flex items-center">
              <h1 class="font-bold">Career profile</h1>
              <label for="my-modal-3" class="btn bg-white border-none hover:bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-pencil text-blue-500 ml-4" viewBox="0 0 16 16">
                  <path
                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                </svg>
              </label>
            </div><br>

            <div class="overflow-x-auto">
              <table class="table-fixed">
                <tbody>
                  <tr>
                    <td class="w-1/2 py font-light text-sm">Current Industry</td>
                    <td class="w-1/2  pl-6 md:px-14 font-light text-sm">Department</td>
                  </tr>
                  <tr>
                    <td class="w-1/2 font-semibold text-sm">IT Services & Consulting Department</td>
                    <td class="w-1/2  pl-6 md:px-14 font-semibold text-sm">Engineering - Software</td>
                  </tr>

                  <tr>
                    <td class="w-1/2 py font-light text-sm">Role category</td>
                    <td class="w-1/2  pl-6 md:px-14 font-light text-sm">Job role</td>
                  </tr>
                  <tr>
                    <td class="w-1/2 font-semibold text-sm">Software Development</td>
                    <td class="w-1/2 pl-6 md:px-14 font-semibold text-sm">Full Stack Developer</td>
                  </tr>

                  <tr>
                    <td class="w-1/2 py font-light text-sm">Desired job type</td>
                    <td class="w-1/2  pl-6 md:px-14 font-light text-sm">Desired employment type</td>
                  </tr>
                  <tr>
                    <td class="w-1/2 font-semibold text-sm">contractual, permanent</td>
                    <td class="w-1/2  pl-6 md:px-14 font-semibold text-sm">Full Time</td>
                  </tr>

                  <tr>
                    <td class="w-1/2 py font-light text-sm">Preferred shift</td>
                    <td class="w-1/2  pl-6 md:px-14 font-light text-sm">Preferred work location</td>
                  </tr>
                  <tr>
                    <td class="w-1/2 font-semibold text-sm">Day</td>
                    <td class="w-1/2 pl-6 md:px-14 font-semibold text-sm">Pune</td>
                  </tr>

                  <tr>
                    <td class="w-1/2 py font-light text-sm">Expected salary</td>
                    <td class="w-1/2 pl-6 md:px-14 font-light text-sm"></td>
                  </tr>

                  <tr>
                    <td class="w-1/2 py font-semibold text-sm">30000</td>
                    <td class="w-1/2 pl-6 md:px-14 font-semibold text-sm"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>


          <section id="section-11" class="ml-10 shadow-md mt-5 mr-10 bg-white">
            <div class="flex items-center">
              <h1 class="font-bold">Personal details</h1>
              <label for="my-modal-3" class="btn bg-white border-none hover:bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-pencil text-blue-500 ml-4" viewBox="0 0 16 16">
                  <path
                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                </svg>
              </label>
            </div>
            <br>
            <table class="table-fixed">
              <tr>
                <td class="w-1/2 py font-light text-sm">Personal</td>
                <td class="w-1/2 pl-6 md:px-14 font-light text-sm">Career break</td>
              </tr>
              <tr>
                <td class="w-1/2 font-semibold text-sm">female, Single / unmarried,</td>
                <td class="w-1/2 pl-6 md:px-14 font-semibold text-sm">No</td>
              </tr>

              <tr>
                <td class="w-1/2 py font-light text-sm">Date of birth</td>
                <td class="w-1/2 pl-6 md:px-14font-light text-sm">Work permit</td>
              </tr>
              <tr>
                <td class="w-1/2 font-semibold text-sm">04 Dec 2002</td>
                <td class="w-1/2 pl-6 md:px-14 font-semibold text-sm">Add Work permit</td>
              </tr>

              <tr>
                <td class="w-1/2 py font-light text-sm">Category</td>
                <td class="w-1/2 pl-6 md:px-14 font-light text-sm">Address</td>
              </tr>
              <tr>
                <td class="w-1/2 font-semibold text-sm">General</td>
                <td class="w-1/2 pl-6 md:px-14 font-semibold text-sm">pune, 411002</td>
              </tr>

              <tr>
                <td class="w-1/2 py font-light text-sm">Differently abled</td>
              </tr>
              <tr>
                <td class="w-1/2 font-semibold text-sm">No</td>
              </tr>

            </table>
            <hr>
            <div class="flex justify-between  mt-5">
              <h1 class="font-semibold">Languages</h1>
              <button class="font-medium text-blue-500">Add languages</button>
            </div><br>
            <table class="table-fixed text-sm md:text-base">
              <tr>
                <td class="w-1/12 font-light text-sm">Languages</td>
                <td class="w-1/12 pl-2 md:px-10 font-light text-sm">Proficiency</td>
                <td class="w-1/12 pl-2 md:px-10 font-light text-sm">Read</td>
                <td class="w-1/12 pl-2 md:px-10 font-light text-sm">Write</td>
                <td class="w-1/12 pl-2 md:px-10 font-light text-sm">Speak</td>
              </tr>
              <!-- <tr><br></tr> -->
              <tr>
                <td class="w-1/12 pl-1">English</td>
                <td class="w-1/12 pl-3 md:px-10">Proficient</td>
                <td class="w-1/12  pl-4 md:px-10">
                  <div class="w-6 h-6  flex items-center justify-center  rounded-full border border-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      class="h-4 w-4 text-gray-500">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </td>
                <td class="w-1/5  pl-4 md:px-10">
                  <div class="w-6 h-6  flex items-center justify-center  rounded-full border border-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      class="h-4 w-4 text-gray-500">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </td>
                <td class="w-1/5  pl-4 md:px-10">
                  <div class="w-6 h-6  flex items-center justify-center  rounded-full border border-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      class="h-4 w-4 text-gray-500">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </td>
              </tr>
            </table>
          </section>
        </main>

        <!-- Form for resume headline -->

        <input type="checkbox" id="my-modal-3" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box relative w-11/12 max-w-3xl">
            <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h1 class="text-lg font-bold py-2 px-6">Resume Headline</h1>
            <p class="py-1 px-6 text-sm">It is the first thing recruiters notice in your profile. Write concisely what
              makes you unique and right person for the job you are looking for.</p>
            <div class="px-6 mt-3">
              <textarea rel="required:resumeHeadline" data-length="250" maxlength="250" id="resumeHeadlineTxt"
                class="mt-2 resize-none w-full p-2 border-2 active:border-blue-600"
                placeholder="Minimum 5 words. Sample headlines: Sales Manager well versed in Excel and Dynamics CRM. Senior-level Interior Designer with expertise in 3D modeling."
                style="height: 100px;"></textarea>
            </div>
            <div class="flex justify-end mr-6">
              <label for="my-modal-3" class="mr-4 btn bg-white text-blue-600 border-none hover:bg-white">CANCEL</label>
              <button class="btn btn-active bg-blue-600 hover:bg-blue-400">SAVE</button>
            </div>
          </div>
        </div>

        <!-- form ends here -->

        <!-- Form for Key skills -->
        <input type="checkbox" id="my-modal-4" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box relative w-11/12 max-w-3xl">
            <label for="my-modal-4" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h1 class="text-lg font-bold py-2 px-6">Key Skills</h1>
            <p class="py-1 px-6 text-sm">Tell recruiters what you know or what you are known for e.g. Direct Marketing,
              Oracle, Java etc. We will send you job recommendations based on these skills. Each skill is separated by a
              comma.</p>
            <div class="px-6 mt-3">
              <p class="text-sm font-light">Skills</p>
              <textarea rel="required:resumeHeadline" data-length="250" maxlength="250" id="resumeHeadlineTxt"
                class="mt-2 resize-none w-full p-2 border-2 active:border-blue-600"
                placeholder="Minimum 5 words. Sample headlines: Sales Manager well versed in Excel and Dynamics CRM. Senior-level Interior Designer with expertise in 3D modeling."
                style="height: 100px;"></textarea>
            </div>
            <div class="flex justify-end mr-6">
              <label for="my-modal-4" class="mr-4 btn bg-white text-blue-600 border-none hover:bg-white">CANCEL</label>
              <button class="btn btn-active bg-blue-600 hover:bg-blue-400">SAVE</button>
            </div>
          </div>
        </div>

        <!-- form ends here -->

        <!-- Form for add employment -->
        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
        <div class="modal">
          <div class="lg:mt-20 mt-10 relative w-11/12 max-w-2xl">
            <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <div class="modal-content">
              <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 class="text-lg font-bold py-2 px-5">Add employment</h1>

                <div class="mb-4 mx-6">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="education">
                    Is this your current employment?
                  </label>
                  <div class="inline-flex mt-2 flex-wrap">
                    <label for="option1" class="inline-flex items-center w-full md:w-auto mb-2 md:mb-0 md:mr-2">
                      <input type="radio" id="option1" name="radio" class="mr-2">
                      Yes
                    </label>

                    <label for="option2" class="inline-flex items-center w-full md:w-auto">
                      <input type="radio" id="option2" name="radio" class="mr-2">
                      No
                    </label>
                  </div>
                </div>

                <div class="mb-4 mx-6">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="employment-type">
                    Employment type
                  </label>
                  <div class="inline-flex mt-2 flex-wrap">
                    <label for="option1" class="inline-flex items-center w-full md:w-auto mb-2 md:mb-0 md:mr-2">
                      <input type="radio" id="option1" name="employment-type" class="mr-2">
                      Full-time
                    </label>

                    <label for="option2" class="inline-flex items-center w-full md:w-auto">
                      <input type="radio" id="option2" name="employment-type" class="mr-2">
                      Internship
                    </label>
                  </div>
                </div>

                <div class="mb-6 mx-6">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="total-experience">
                    <span class="text-red-500">*</span>
                    Total experience
                  </label>
                  <div class="flex">
                  <select class="select select-bordered w-1/2 max-w-xs mr-2">
                    <option disabled selected>min</option>
                    <option value="0">0 year</option>
                    <option value="1">1 Year</option>
                    <option value="2">2 Year</option>
                    <option value="3">3 Year</option>
                    <option value="4">4 Year</option>
                    <option value="5">5 Year</option>
                  </select>
                 
                  <select class="select select-bordered focus:border-blue-400  w-1/2 max-w-xs" >
                    <option disabled selected>max</option>
                    <option value="0">0 year</option>
                    <option value="1">1 Year</option>
                    <option value="2">2 Year</option>
                    <option value="3">3 Year</option>
                    <option value="4">4 Year</option>
                    <option value="5">5 Year</option>
                  </select>
                </div>

                </div>


                <div class="mb-6 mx-6 relative">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="course">
                    <span class="text-red-500">*</span> Course
                  </label>
                  <div class="relative inline-block w-full">
                    <select
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="course" name="course" onchange="updateInput(this.value)">
                      <option value="" selected disabled>Select University/Institute</option>
                      <option value="course1">Course 1</option>
                      <option value="course2">Course 2</option>
                      <option value="course3">Course 3</option>
                      <!-- Add more options as needed -->
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M9 12l4-4 4 4H9z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div class="mb-6 mx-6">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="specialization">
                    <span class="text-red-500">*</span> Specialization
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="specialization" type="text" placeholder="Enter specialization">
                </div>

                <div class="flex justify-end mr-6">
                  <label for="my-modal-6"
                    class="mr-4 btn bg-white text-blue-600 border-none hover:bg-white">CANCEL</label>
                  <button class="btn btn-active bg-blue-600 hover:bg-blue-400">SAVE</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- form ends here -->



        <!-- form for Add Education -->
        <input type="checkbox" id="my-modal-5" class="modal-toggle" />
        <div class="modal">
          <div class=" relative w-11/12 max-w-2xl lg:mt-36 mt-20">

            <label for="my-modal-5" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <div class="">
              <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 class="text-lg font-bold py-2 px-5">Add Education</h1>

                <div class="mb-4 mx-6">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="education">
                    Education<span class="text-red-500">*</span>
                  </label>
                  <div class="relative inline-block w-full">
                    <select
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="course" name="course" onchange="updateInput(this.value)">
                      <option value="" selected disabled>Select University/Institute</option>
                      <option value="course1">Course 1</option>
                      <option value="course2">Course 2</option>
                      <option value="course3">Course 3</option>
                      <!-- Add more options as needed -->
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M9 12l4-4 4 4H9z" />
                      </svg>
                    </div>
                    <!-- <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="education" type="text" placeholder="select education"> -->
                  </div>
                </div>

                <div class="mb-6 mx-6">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="password"><span
                      class="text-red-500">*</span>
                    University/Institute
                  </label>
                  <input
                    class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password" type="text" placeholder="select University/Institute">
                </div>

                <div class="mb-6 mx-6 relative">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="course">
                    <span class="text-red-500">*</span> Course
                  </label>
                  <div class="relative inline-block w-full">
                    <select
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="course" name="course" onchange="updateInput(this.value)">
                      <option value="" selected disabled>Select University/Institute</option>
                      <option value="course1">Course 1</option>
                      <option value="course2">Course 2</option>
                      <option value="course3">Course 3</option>
                      <!-- Add more options as needed -->
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M9 12l4-4 4 4H9z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="mb-6 mx-6">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="course"><span
                      class="text-red-500">*</span>
                    specilization
                  </label>
                  <input
                    class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="course" type="text" placeholder="select University/Institute">
                </div>


                <div class="flex justify-end mr-6">
                  <label for="my-modal-5"
                    class="mr-4 btn bg-white text-blue-600 border-none hover:bg-white">CANCEL</label>
                  <button class="btn btn-active bg-blue-600 hover:bg-blue-400">SAVE</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- form ends here -->

      </div>
    </div>
  </div>
</template>

<script>

definePageMeta({
  layout: 'custome'
});
export default {
  data() {
    return {
      selectedFile: null,
      rrr: false,
      selectedOptions: ['C++', 'Java', 'PHP', 'DBMS', 'HTML', 'CSS', 'Vuejs', 'Dotnet', 'abc', 'mysql', 'python', 'ruby', 'angular', 'react js', 'mssql', 'postgresql']
    };

  },
  methods: {
    browseFiles() {
      this.$refs.fileInput.click();
    },
    handleFileSelection(event) {
      this.selectedFile = event.target.files[0];
    },
    handleSubmit() {
      const formData = {
        name: this.name,
        email: this.email,
      }
      this.$store.dispatch('submitForm', formData)
      // Redirect to the destination page
      this.$router.push('/secondPage')

    },

  },
};

</script>

<style scoped>
.btn:hover svg {
  transform: scale(1.2);
}

.table-fixed tr:nth-child(even) td {
  padding-bottom: 20px;
}

.body {
  scroll-behavior: smooth;
}

nav {
  white-space: nowrap;
  background: white;
  margin-bottom: 10px;
  border-radius: 20px;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

nav ul li a {
  display: block;
  padding: 0.5rem 1rem;
  color: rgb(5, 0, 0);
  text-decoration: none;
}

section {
  padding: 2rem;
  margin: 0 0 2rem 0;
  border-radius: 20px;

}

@media (max-width: 768px) {
  section {
    padding: 1rem;
    margin: 0;
    justify-content: center;
    margin-bottom: 20px;
  }

  .main-content {
    width: 86%;
  }

  .main-content1 {
    width: 85%;
  }

}

tr:first-child {
  margin-bottom: 40px;
  /* border-bottom: 1px solid lightgray;*/
}

.modal-content {
  max-height: 500px;
  /* Set the desired maximum height of the modal content */
  overflow-y: scroll;
  /* Enable vertical scrolling */
  scrollbar-width: thin;
  /* Set the width of the scrollbar */
  scrollbar-color: transparent transparent;
  /* Set the color of the scrollbar */
}

.modal-content::-webkit-scrollbar {
  width: 5px;
  /* Set the width of the scrollbar */
}

.modal-content::-webkit-scrollbar-thumb {
  background-color: transparent;
  /* Set the color of the scrollbar thumb */
}

.main-content {
  transition: margin-top 0.1s;
  /* Add transition for smooth animation */
}

.main-content {
  padding-top: 24px;
  /* Add padding to create space between header and content */
}

.selected-options-container {
  margin-top: 1rem;
}

.selected-option {
  display: inline-flex;
  align-items: center;
  background-color: #e2e8f0;
  padding: 0.25rem 0.5rem;
  margin-right: 1rem;
  border-radius: 0.375rem;
}

.remove-button {
  margin-left: 0.25rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #718096;
}

.textarea-responsive {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}
</style>

