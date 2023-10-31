<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <div class="bg-white">
    <div class="flex justify-between items-center">
      <!-- first div  -->
      <div class="flex ml-6">
        <img src="../assets/image 2.png" alt="" class="h-16 w-16">
      </div>

      <!-- etc div -->
      <div class="md:hidden flex"></div>
      <div class="md:hidden flex"></div>
      <div class="md:hidden flex"></div>

      <div class="md:hidden flex"></div>



      <!-- second div  -->
      <div class=" space-x-2 items-center text-center text-black md:flex hidden">
        <div class="flex flex-col hover:bg-gray-300 p-2 rounded">
          <a href="#">
            <i class="fa fa-home md:scale-100 scale-150" />
            <span class="md:flex hidden">Home</span>

          </a>
        </div>

        <!-- Jobs -->
    <div class="flex flex-col hover:bg-gray-300 p-2 rounded">
    <a href="#" @click="toggleList">
      <i class="fa fa-suitcase md:scale-100 scale-125"></i>
      <span class="md:flex hidden">Jobs & Responses</span>
    </a>
    <div class="fixed w-11/12 sm:w-3/4 md:w-3/5 lg:w-1/6 top-16 bg-white shadow-md rounded-lg p-1" v-if="showList">
    <ul>
      <li class="space-y-1 ">
        <nuxt-link to="/Employer/JobPostPrivate">
          <div class=" text-left font-bold">Post a job</div>
        </nuxt-link>
      </li>
      <li class="space-y-1 flex flex-col">
        <nuxt-link to="/Employer/ManageJobs">
            <div class="text-left font-bold">Manage jobs</div>
        </nuxt-link>
      </li>
      <li class="space-y-1 flex flex-col">
        <nuxt-link to="/Employer/ApplicationTracking">
            <div class="text-left font-bold">Track Application</div>
        </nuxt-link>
      </li>
      <li class="space-y-1 flex flex-col">
        <nuxt-link to="/Employer/JobAdvertisement">
            <div class="text-left font-bold">Job Advertisment</div>
        </nuxt-link>
      </li>
    </ul>
    </div>
  </div>
        <!-- <div class="flex flex-col hover:bg-gray-300 p-2 rounded">
          <a href="#">
            <i class="fa fa-search md:scale-100 scale-125" />
            <span class="md:flex hidden">Rexdex</span>
          </a>
        </div> -->
        <!-- <div class="flex flex-col hover:bg-gray-300 p-2 rounded">
          <a href="#">
            <i class="fa fa-bar-chart md:scale-100 scale-125" />
            <span class="md:flex hidden">Reports</span>
          </a>
        </div>
        <div class="flex flex-col hover:bg-gray-300 p-2 rounded">
          <a href="#">
            <i class="fa fa-users md:scale-100 scale-125" />
            <span class="md:flex hidden">Refferel/IPJ</span>
          </a>
        </div> -->

      </div>
      <div class="flex">
        <!-- The search bar logic stars here  -->
        <div class="flex my-auto ">
          <button class="flex border-2 rounded-full">
            <input type="text" @click="toggleSearchModal" placeholder="keyword/CTC"
              class="p-2 rounded-full bg-white lg:flex hidden">

            <div class="flex bg-blue-600  lg:hover:scale-110 duration-300 rounded-full lg:p-2 p-2 items-center ml-auto">
              <div class="lg:hidden flex hover:bg-blue-500 pr-4 pl-2 py-2 rounded-l-full" @click="toggleSearchModal">
                <a class="fa fa-search text-white" />
              </div>
              <div class="dropdown dropdown-bottom flex">
                <label class="lg:flex hidden">
                  <div>
                    <i class="fa fa-search text-white mr-6" />
                  </div>
                  <!-- <div class="px-2 text-white">Ez-search</div> -->

                  <i class="text-white fa fa-sort-down" tabindex="0" @mousedown="drpd = true"
                    @mouseleave="drpd = false" />
                </label>
                <label class="lg:hidden flex hover:bg-blue-500 pl-4 pr-2 py-2 rounded-r-full active:scale-110">
                  <a href="#">
                    <img src="../assets/icons8-down-arrow-50.png" class="h-3 w-3" alt="">
                  </a>
                </label>

              </div>
            </div>
          </button>
        </div>
      </div>

      <!-- notification -->

      <div class="hover:scale-110 duration-150 md:mr-6">
        <img src="../assets/icons8-notification.svg" alt="" @mousedown="mouseisonForTabb3" @mouseleave="mouseisoff3"
          class="lg:scale-75 scale-50">
      </div>




      <!--  -->


    </div>
    <!-- Search bar modal -->

    <div class="search-modal w-full bg-white justify-around fixed top-0 left-0 shadow-md"
      :class="{ 'show': showSearchModal }">
      <img src="../assets/image 2.png" alt="" class="w-20">
      <div class="bg-white shadow-md rounded-full px-4 py-4 my-auto">

        <form @submit.prevent="navigateToSearchResults" class="flex space-x-2">
          <input class="md:w-10/12 w-3/4 md:scale-100 scale-75 bg-white" type="text" v-model="keywords"
            @input="handleInputChange" placeholder="Keywords/Company/Skills">
          <input class="md:w-10/12 w-3/4 md:scale-100 scale-75 bg-white" type="text" v-model="location"
            @input="handleLocationChange" placeholder="Location">
          <input class="md:w-10/12 w-3/4 md:scale-100 scale-75 bg-white" type="number" v-model="experience"
            placeholder="Experience (in years)">
          <button class=" bg-white text-black" type="submit"><a class="fa fa-search" /></button>
        </form>
      </div>

      <img src="../assets/icons8-close-32.png" class="h-6 m-4 hover:scale-110" @click="closeSearchModal" alt="">
      <!-- Suggestions for keywords -->
      <ul class="suggestions shadow-md rounded-md" v-if="showSuggestions">
        <li v-for="suggestion in filteredSuggestions" :key="suggestion" @click="selectSuggestion(suggestion)">
          {{ suggestion }}
        </li>
      </ul>

      <!-- Suggestions for location -->
      <ul class="location-suggestions" v-if="showLocationSuggestions">
        <li v-for="location in filteredLocationSuggestions" :key="location" @click="selectLocation(location)">
          {{ location }}
        </li>
      </ul>

    </div>
    <div v-show="drpd" class="fixed right-48 top-12 shadow-lg rounded text-black bg-white" @mouseover="drpd = true"
      @mouseleave="drpd = false">
      <ul tabindex="0" v-show="drpd" class="dropdown-content rounded menu w-48">
        <li><a href="#">Item 1</a></li>
        <li><a href="#">Item 2</a></li>
        <li><a href="#">Item 3</a></li>
        <li><a href="#">Item 4</a></li>
      </ul>
    </div>
    <!-- table3 for hover on notification-->

    <div class="fixed right-4 w-11/12 sm:w-3/4 md:w-3/5 lg:w-1/3 top-12 bg-white shadow-md rounded-lg p-4" v-show="tabb3"
      @mouseover="mouseisonForTabb3" @mouseleave="mouseisoff3">

      <ul class="">

        <div class="text-black">
          <div>

            <li class="">
              <NuxtLink to="/jobfinal" no-rel>
                <div class="font-bold">
                  <div class="" title="Recommended jobs">Recommended jobs
                  </div>
                </div>

                <span class="">
                  <div class="" title="Java and J2Ee Developer Java Programmer">
                  </div>
                </span>
              </NuxtLink>
            </li>
            <hr>
            <li class="space-y-2 flex flex-col">
              <NuxtLink to="/ApplicationStatus" no-rel>
                <div class="flex justify-between">
                  <div class="text-left font-bold" title="Application Status">Application
                    Status
                  </div>
                  <div class="border text-red-500 font-bold rounded-full px-2" title="110 Updates">
                    110 Updates
                  </div>
                </div>
                <span>
                  <div class="text-gray-500" title="urgent opening For &quot; java Developer &quot; with MNC.">
                    Urgent opening For "Java Developer" with MNC.</div>
                  <!-- <span class="" title="Application Sent">Application Sent</span> -->
                </span>
              </NuxtLink>
            </li>
            <hr>
            <li>
              <a href="https://www.naukri.com/mnjuser/pendingAction" data-type="criticalActions">
                <div class="flex justify-between">
                  <div class="font-bold" title="Pending Actions">
                    Pending Actions
                  </div>
                  <div class="border text-red-500 font-bold rounded-full px-2" title="1 Action">
                    1 Action
                  </div>
                </div>
                <span>
                  <div class="text-gray-500" title="Upload Photo">
                    Upload Photo
                  </div>
                </span>
              </a>
            </li>
            <hr>
            <li>
              <NuxtLink to="/imageCarousel">
                <div class="flex justify-between">
                  <div class="font-bold" title="Jobs from recruiters">
                    Build your resume
                  </div>
                  <div class="border text-red-500 font-bold rounded-full px-2" title="6 New">
                    6 New
                  </div>
                </div>
                <span>
                  <div class="text-gray-500" title="Job | Opening for Business Development Executive...!!!!!!">
                    Job | Opening for Business Development Executive...!!!!!!
                  </div>
                </span>
              </NuxtLink>
            </li>
            <hr>
            <li>
              <a href="https://resume.naukri.com/resume-display?fftid=notf_nauk_promo_rd" target="_blank" data-type="FF">
                <div class="flex justify-between">
                  <div class="font-bold" title="Promotional Offer">
                    Promotional Offer
                  </div>
                  <div class="border text-red-500 font-bold rounded-full px-2" title="1 Offer">
                    1 Offer
                  </div>
                </div>
                <span>
                  <div class="text-gray-500" title="FAST JOB 20% off on services to help get more callbacks">
                    FASTJOB20 20% off on services to help get more callbacks
                  </div>
                </span>
              </a>
            </li>
            <hr>
            <li>
              <a href="https://www.naukri.com/mnjuser/performance" data-type="recruiterSearch">
                <div class="flex flex-col">
                  <div class="font-bold" title="Recruiter Searches">
                    Recruiter Searches
                  </div>
                  <div class="text-gray-500" title="437">
                    437
                  </div>
                </div>
              </a>
            </li>

          </div>
        </div>
      </ul>

    </div>

    <!-- tabele3 end here -->


  </div>
</template>


<script>

export default {
  data() {
    return {
      showList: false,
      isDrawerOpen: false,
      drpd: false,
      searchResults: [], // Initialize the search results array
      keywords: '',
      location: '',
      suggestions: ['Software Engineer', 'SAP', 'SKILLS', 'Web Developer', 'Data Analyst', 'Data scientist', 'UX Designer', 'Marketing Manager'],
      locations: ['New York', 'Seattle', 'Los Angeles', 'Pune', 'San Francisco'],
      showSuggestions: false,
      showLocationSuggestions: false,
      skills: '',
      experience: null,
      showSearchModal: false,
      description: '',
      jobListings: [
        // Your job listings data
        {
          id: 1,
          title: 'Software Engineer',
          company: 'ABC Inc.',
          location: 'New York',
          skills: ['JavaScript', 'React'],
          experience: 2
        },
        {
          id: 2,
          title: 'Web Developer',
          company: 'XYZ Corp.',
          location: 'pune',
          skills: ['HTML', 'CSS', 'Java'],
          experience: 1
        },
        {
          id: 3,
          title: 'Data Analyst',
          company: 'DataTech Solutions',
          location: 'Seattle',
          skills: ['SQL', 'Python', 'Data Analysis', 'Java'],
          experience: 3
        },
        {
          id: 4,
          title: 'UX Designer',
          company: 'Creative Innovations',
          location: 'Los Angeles',
          skills: [' user ', 'Wireframing', 'Prototyping', 'UI/UX Design'],
          experience: 2
        },
        {
          id: 5,
          title: 'Marketing Manager',
          company: 'Growth Marketing Co.',
          location: 'New York',
          skills: ['Digital Marketing', 'SEO', 'Social Media Advertising'],
          experience: 4
        },
        {
          id: 6,
          title: 'Web Developer',
          company: 'XYZ Corpooo.',
          location: 'Pune',
          skills: ['Java', 'CSS', 'JavaScript'],
          experience: 1
        },
      ],
      searchInput: '',
      savedJobs: [], // Declare the saved jobs array
      appliedJobs: [], // Declare the applied jobs array
      tabb3: false,

    };
  },

  computed: {
    filteredSuggestions() {
      return this.suggestions.filter(suggestion =>
        suggestion.toLowerCase().startsWith(this.keywords.toLowerCase()) && suggestion.toLowerCase().includes(this.keywords.toLowerCase())
      );
    },
    filteredLocationSuggestions() {
      return this.locations.filter(location =>
        location.toLowerCase().startsWith(this.location.toLowerCase())
      );
    }
  },
  methods: {
    mouseisonForTabb3: function () {
      this.tabb3 = true
    },
    mouseisoff3: function () {
      this.tabb3 = false
    },
    toggleList() {
      this.showList = !this.showList;
    },
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
    },
    closeDrawer() {
      this.isDrawerOpen = false;
    },
    handleInputChange() {
      this.showSuggestions = this.keywords.length > 0;
    },
    handleLocationChange() {
      this.showLocationSuggestions = this.location.length > 0;
    },
    selectSuggestion(suggestion) {
      this.keywords = suggestion;
      this.showSuggestions = false;
    },
    selectLocation(location) {
      this.location = location;
      this.showLocationSuggestions = false;
    },

    saveJob(job) {
      if (!this.isJobSaved(job)) {
        this.savedJobs.push(job);
        console.log('Saved job:', job);
      }
    },
    applyForJob(job) {
      if (!this.hasJobApplied(job)) {
        job.status = 'Pending';
        this.appliedJobs.push(job);
        console.log('Applied for job:', job);
      }
    },
    isJobSaved(job) {
      return this.savedJobs.some((savedJob) => savedJob.id === job.id);
    },
    hasJobApplied(job) {
      return this.appliedJobs.some((appliedJob) => appliedJob.id === job.id);
    },
    toggleSearchModal() {
      this.showSearchModal = !this.showSearchModal;
    },
    closeSearchModal() {
      this.showSearchModal = false;
    },

    navigateToSearchResults() {
      const query = {
        keywords: this.keywords,
        location: this.location,
        experience: this.experience
      };
      if (query.keywords || query.location || query.experience) {
        this.$router.push({
          path: '/HKCLHomecopy',
          query
        });
      } else {
        alert("Enter all the fields");
      }
    }


  }
}


</script>

<style scoped>
.search-modal {
  display: none;
}

.search-modal.show {
  display: flex;
  /* align-items: flex-start;
  justify-content: center; */
}



.suggestions {
  position: absolute;
  top: 90px;
  /* Adjust the top position as needed */
  left: 20%;
  width: 25%;
  background-color: #fff;
  list-style: none;
  padding: 0;
  margin: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.suggestions li {
  padding: 10px;
  cursor: pointer;
}

.location-suggestions {
  position: absolute;
  top: 85px;
  /* Adjust the top position as needed */
  left: 35%;
  width: 25%;
  background-color: #fff;
  list-style: none;
  padding: 0;
  margin: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.location-suggestions li {
  padding: 10px;
  cursor: pointer;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.apply-button,
.save-button {
  padding: 10px 20px;
  margin-right: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
}

.save-button {
  background-color: #28a745;
}


.application-management {
  @apply max-w-2xl mx-auto p-4;
}

.application-management h2 {
  @apply text-2xl text-center mb-4;
}

.applied-job {
  @apply bg-gray-100 border border-gray-300 rounded p-4 mb-4;
}

.applied-job h3 {
  @apply text-xl mb-2;
}

.applied-job p.company {
  @apply text-gray-600 mb-2;
}

.applied-job p.status {
  @apply italic text-gray-500;
}


/* css for table3 start here -------------------------------------------------------------------------------------------*/

.tb3 {
  margin-top: 0px;

  width: fit-content;
  margin-left: 65%;

  position: absolute;
  background-color: white;
  z-index: 2;
}


/* .leftBD{
  border-left: 1px solid black;
 } */
.tb3 th,
td {
  border-left: 1px solid #ddd;
  text-align: left;

}

.tb3 th {
  padding-inline: 20px;
  padding-top: 10px;
  padding-bottom: 15px;
}

.tb3 td {
  padding-inline: 20px;
}

/* css for table3 ends here --------------------------------------------------------------------------------------------*/

ul:not(.browser-default) li {
  list-style-type: none;
}

li {
  list-style-type: none;
  /* margin-top: 10px;
    margin-bottom: 10px; */

  padding: 10px;
}

li:hover {
  background: lightgray;
}
</style>