<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <div class="bg-white">
    <div class="flex py-2 justify-between items-center">
      <!-- first div  -->
      <div class="flex ml-6 md:ml-16">
        <img src="../assets/image2.png" alt="" class="h-16 w-16 lg:block hidden">
      </div>

      <!-- etc div -->
      <div class="md:hidden flex"></div>
      <div class="md:hidden flex"></div>
      <div class="md:hidden flex"></div>
      <div class="md:hidden flex"></div>


      <!-- second div  -->
      <div class=" space-x-1 p-2 items-center text-center text-black md:flex hidden">
        <div class="flex flex-col hover:bg-gray-300 p-2 rounded md:mr-16">
          <NuxtLink to="/Employer/EmployerHome">

            <span class="lg:flex hidden text-lg">Home</span>
          </NuxtLink>
        </div>

        <div class="flex flex-col hover:bg-gray-300 p-2 rounded" @mousedown="mouseisonForTabb7" @mouseleave="mouseisoff7">
          <a href="#">

            <span class="lg:flex hidden text-lg">Jobs</span>
          </a>
        </div>

      </div>
      <div class="flex">
        <!-- The search bar logic stars here  -->
        <div class="flex my-auto border-2 px-1 border-black rounded-full lg:ml-60 ">

          <input type="text" @click="toggleSearchModal" placeholder="Search jobs here"
            class=" rounded-full bg-white  lg:flex hidden">

          <div class="flex bg-white duration-300 rounded-full p-2 items-center ml-auto">
            <div class=" flex w-12 rounded-l-full" @click="toggleSearchModal">
              <i class="fa fa-search text-black" />
            </div>

          </div>

        </div>
      </div>

      <!-- notification -->

      <div class="hover:scale-110 duration-150 md:mr-6">
        <img src="../assets/bell.png" alt="" @mousedown="mouseisonForTabb3" @mouseleave="mouseisoff3"
          class="lg:scale-75 scale-50 w-10 h-10">
      </div>

      <!-- menubar -->

      <div class="relative md:mt-0 hidden lg:flex mt-1">

        <button @click="toggleDrawer" class=" bg-blue-500 lg:pb-2 lg:h-8 text-white px-6 py-1 rounded-full md:mr-10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <!-- <img src="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-vector-260nw-1725655669.jpg" class="w-6 h-6" alt=""> -->
        </button>
        <button v-if="isDrawerOpen" @click="closeDrawer"
          class="fixed inset-0 z-50 bg-black bg-opacity-50 cursor-pointer"></button>
        <div v-if="isDrawerOpen" class="fixed inset-y-0 right-0 z-50 flex items-start w-96 bg-white">
          <div class="flex flex-col items-start p-4 space-y-4" style="transition:right 0.3s ease-in-out">
            <!-- Close button -->
            <button @click="closeDrawer" class="text-black cursor-pointer text-right">X</button>

            <!-- Drawer content -->
            <div class="flex justify-around">
              <div class="flex-col">
                <img
                  src="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-vector-260nw-1725655669.jpg"
                  class="w-20 rounded-full" alt="Avatar" />
              </div>
              <div class="flex-col ml-8 text-sm">
                <h1 class="text-xl font-bold">xyz</h1>
                <p>Recruiter at xyz company</p>
                <div class="mt-2">
                  <a class="text-blue-600 font-semibold" href="/Employer/companyProfile">view & update profile
                  </a>
                </div>
              </div>
            </div>
            <hr>
            <button class="btn" @click="signout()">Logout</button>

          </div>
        </div>
      </div>
      <!--  -->
    </div>


    <!-- Search bar modal -->

    <div class="search-modal w-full h-28 z-20 bg-white justify-around fixed top-0 left-0 shadow-md"
      :class="{ 'show': showSearchModal }">
      <img src="../assets/image2.png" alt="" class="w-20 h-20 hidden md:block">
      <div class="bg-white shadow-md rounded-full lg:w-3/4 md:w-2/3 px-4 py-4 my-auto">

        <form @submit.prevent="navigateToSearchResults" class="flex space-x-2">
          <input class="md:w-10/12 lg:w-full w-3/4 md:scale-100 scale-75 bg-white outline-none" type="text"
            v-model="keywords" @input="handleInputChange" placeholder="Enter Keywords / Designation / Skills">
          <input class="md:w-1/2 w-3/4 md:scale-100 scale-75 ml-4 bg-white outline-none" type="text" v-model="location"
            @input="handleLocationChange" placeholder="Location">
          <!-- <input class="md:w-10/12 w-3/4 md:scale-100 scale-75 bg-white outline-none" type="number" v-model="experience"
            placeholder="Experience (in years)"> -->
          <select class="select select-ghost w-1/4 h-9 " v-model="experience">
            <option disabled selected>Experience</option>
            <option value="0">Fresher</option>
            <option value="1">1 Year</option>
            <option value="2">2 Year</option>
            <option value="3">3 Year</option>
            <option value="4">4 Year</option>
            <option value="5">5 Year</option>
          </select>
          <button class=" bg-white text-black" type="submit"><a class="fa fa-search" /></button>
        </form>
      </div>



      <img src="../assets/icons8-close-32.png" class="h-6 m-4 hover:scale-110" @click="closeSearchModal" alt="">
      <!-- Suggestions for keywords -->
      <!-- <ul class="suggestions shadow-md rounded-md" v-if="showSuggestions">
        <li v-for="suggestion in filteredSuggestions" :key="suggestion" @click="selectSuggestion(suggestion)">
          {{ suggestion }}
        </li>
      </ul> -->

      <!-- Suggestions for location -->
      <!-- <ul class="location-suggestions" v-if="showLocationSuggestions">
        <li v-for="location in filteredLocationSuggestions" :key="location" @click="selectLocation(location)">
          {{ location }}
        </li>
      </ul> -->

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

    <div class="fixed z-20 right-9 w-11/12 sm:w-3/4 md:w-3/5 lg:w-1/5 top-14 bg-white shadow-md rounded-lg p-4"
      v-show="tabb3" @mouseover="mouseisonForTabb3" @mouseleave="mouseisoff3">

      <ul class="">

        <div class="text-black">
          <div>

            <li class="space-y-2 flex flex-col">
              <a href="/Employer/CandidateProfileSearch" no-rel>
                <div class="text-left font-bold" title="Candidate profile Search">Candidate profile Search
                </div>
              </a>
            </li>
            <li class="space-y-2 flex flex-col">
              <a href="/Employer/JobAdvertisement" no-rel>
                <div class="text-left font-bold" title="Job advertisement">Job advertisement
                </div>
              </a>
            </li>
            <li class="space-y-2 flex flex-col">
              <a href="/Employer/ApplicationTracking" no-rel>
                <div class="text-left font-bold" title="Application tracking">Application tracking
                </div>
              </a>
            </li>

          </div>
        </div>
      </ul>

    </div>

    <!-- tabele3 end here -->

    <!-- table for Jobs -->

    <div class="fixed z-20 left-52 w-10/12 sm:w-3/4 md:w-3/5 lg:w-1/5 top-14 bg-white shadow-md rounded-lg p-4"
      v-show="tabb7" @mouseover="mouseisonForTabb7" @mouseleave="mouseisoff7">

      <ul class="">
        <div class="text-black">
          <li class="">
            <a href="/Employer/JobPostPrivate" no-rel>
              <div class="font-bold">
                <div class="" title="Post a job">Post a job
                </div>
              </div>
            </a>
          </li>
          <hr>
          <li class="space-y-2 flex flex-col">
            <a href="/Employer/ManageJobs" no-rel>
              <div class="text-left font-bold" title="Manage Jobs">Manage Jobs
              </div>
            </a>
          </li>
        </div>
      </ul>
    </div>
    <!--  -->
  </div>
</template>


<script>
import axios from 'axios';
export default {
  data() {
    return {
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
      tabb7: false

    };
  },

  // computed: {
  //   filteredSuggestions() {
  //     return this.suggestions.filter(suggestion =>
  //       suggestion.toLowerCase().startsWith(this.keywords.toLowerCase()) && suggestion.toLowerCase().includes(this.keywords.toLowerCase())
  //     );
  //   },
  //   filteredLocationSuggestions() {
  //     return this.locations.filter(location =>
  //       location.toLowerCase().startsWith(this.location.toLowerCase())
  //     );
  //   }
  // },
  methods: {
    mouseisonForTabb3: function () {
      this.tabb3 = true
    },
    mouseisoff3: function () {
      this.tabb3 = false
    },

    mouseisonForTabb7: function () {
      this.tabb7 = true
    },
    mouseisoff7: function () {
      this.tabb7 = false
    },

    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
    },
    closeDrawer() {
      this.isDrawerOpen = false;
    },
    // handleInputChange() {
    //   this.showSuggestions = this.keywords.length > 0;
    // },
    // handleLocationChange() {
    //   this.showLocationSuggestions = this.location.length > 0;
    // },
    // selectSuggestion(suggestion) {
    //   this.keywords = suggestion;
    //   this.showSuggestions = false;
    // },
    // selectLocation(location) {
    //   this.location = location;
    //   this.showLocationSuggestions = false;
    // },

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
    },
    async signout(){
      const response= await axios.post('/api/signoutapi/signout').then((res)=>{
        window.location.href ='/Login'
        console.log(res);
      }).catch((err)=>{
        console.log(err);
        alert(err)
      })
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