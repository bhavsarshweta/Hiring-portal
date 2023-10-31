<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  <div class="">
    <div>
      <div class="flex m-3 button-container">
        <!-- <i class="fa fa-filter mt-5 mx-3 filter-icon lg:hidden inline-block" aria-hidden="true"></i> -->
        <submenu class="block lg:hidden" />
      </div>

      <div class="grid grid-cols-2 sm:grid sm:grid-cols-4 text-center">
        <HomeSubmenu class="... hidden lg:block" />

        <!-- Middle section -->
        <div class="... ml-4 mr-8 py-8 px-1 lg:col-span-2 md:col-span-3 col-span-2">
          <div>
            <!-- Search logic starts here -->
            <div v-if="searchResults.length > 0">
              <div v-for="job in searchResults" :key="job.id" class="job-listing shadow-md rounded-2xl bg-white"
                @click="storeId(job.id)">
                <p class="text-left font-bold ml-3">{{ job.title }}</p>
                <p class="text-left font-semibold ml-3 text-sm">{{ job.company }}</p>

                <div class="job-details md:flex">
                  <div class="detail flex mx-4 my-2">
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                    <p class="detail-text ml-2 text-sm">{{ job.experience }} Yrs</p>
                  </div>

                  <div class="detail flex mx-4 my-2">
                    <i class="fa fa-money" aria-hidden="true"></i>
                    <p class="detail-text ml-2 text-sm">{{ job.salary }} Lacs PA</p>
                  </div>
                  <div class="detail flex mx-4 my-2">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <p class="detail-text ml-2 text-sm">{{ job.location }}</p>
                  </div>
                </div>
                <div class="detail-icon">
                  <p class="text-sm mx-4 text-left"><b>Roles & Responsibilities :</b><br> {{ job.responsibilities }}</p>
                </div>

                <ul class="skills-list text-left">
                  <li v-for="skill in job.skills" :key="skill" class="ml-3 my-2 text-xs mt-4">{{ skill }}</li>
                </ul>

                <div class=" col-auto button-container bg-white text-right hover:text-blue-500">
                  <!-- <button class="apply-button" @click="applyForJob(job)">Apply</button> -->
                  <button class="mr-4 text-sm" @click="saveJob(job)"><i class="fas fa-save mr-2"></i>Save</button>
                </div>
              </div>
              <!-- </NuxtLink> -->
            </div>
            <template v-else>
              <p>No search results found.</p>
            </template>
            <!-- search logic ends here -->
          </div>
        </div>
        <!-- 2nd main div ends here  -->
        <!-- ---3rd part of main div section ends here The third section begins here------ -->
        <div class="... md:mt-8">
          <!-- This is thrid column that includes a carousel  -->
          <div class=" mb-5 sm:ml-0 ml-5 bg-white shadow-md border-2 w-full lg:w-64 md:w-44 text-center">
            <div class=" carousel md:w-44 lg:w-62 w-full">
              <div class="carousel-item w-full">
                <img src="../assets/1678113799537.jpeg" class="w-full" alt="Tailwind CSS Carousel component" />
              </div>
              <div class="carousel-item w-full">
                <img src="../assets/image2.png" class="w-full" alt="Tailwind CSS Carousel component" />
              </div>
              <div class="carousel-item w-full">
                <img src="../assets/image2.png" class="w-full" alt="Tailwind CSS Carousel component" />
              </div>
            </div>
            <br>
            <hr>
          </div>
          <!-- carousel code ends here  -->
        </div>
        <!-- Third colums ends here  -->
      </div>
    </div>
    <!-- The main div section ends here  -->

  </div>
</template>

<script >

definePageMeta({
  layout: 'custome'
});

// import { Ref } from 'nuxt/dist/app/compat/capi';

// const drpd :Ref<boolean> = ref(false)

export default {

  data() {
    return {
      passId: null,
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
          experience: 2,
          responsibilities: ' We are looking for 3+ experiences Java Developers,spring boot,micro services,who have proficient experience in Sprint Boot,Hibernate,microservices'
        },
        {
          id: 2,
          title: 'Web Developer',
          company: 'XYZ Corp.',
          location: 'pune',
          skills: ['HTML', 'CSS', 'Java'],
          experience: 1,
          responsibilities: ' We are looking for 3+ experiences Java Developers,spring boot,micro services,who have proficient experience in Sprint Boot,Hibernate,microservices'
        },
        {
          id: 3,
          title: 'Data Analyst',
          company: 'DataTech Solutions',
          location: 'Seattle',
          skills: ['SQL', 'Python', 'Data Analysis', 'Java'],
          experience: 3,
          responsibilities: ' We are looking for 3+ experiences Java Developers,spring boot,micro services,who have proficient experience in Sprint Boot,Hibernate,microservices'
        },
        {
          id: 4,
          title: 'UX Designer',
          company: 'Creative Innovations',
          location: 'Los Angeles',
          skills: [' user ', 'Wireframing', 'Prototyping', 'UI/UX Design'],
          experience: 2,
          responsibilities: ' We are looking for 3+ experiences Java Developers,spring boot,micro services,who have proficient experience in Sprint Boot,Hibernate,microservices'
        },
        {
          id: 5,
          title: 'Marketing Manager',
          company: 'Growth Marketing Co.',
          location: 'New York',
          skills: ['Digital Marketing', 'SEO', 'Social Media Advertising'],
          experience: 4,
          responsibilities: 'We are looking for 3+ experiences Java Developers,spring boot,micro services,who have proficient experience in Sprint Boot,Hibernate,microservices'
        },
        {
          id: 6,
          title: 'Web Developer',
          company: 'XYZ Corpooo.',
          location: 'Pune',
          skills: ['Java', 'CSS', 'JavaScript'],
          experience: 1,
          responsibilities: ' We are looking for 3+ experiences Java Developers,spring boot,micro services,who have proficient experience in Sprint Boot,Hibernate,microservices'
        },

      ],
      savedJobs: [], // Declare the saved jobs array
      appliedJobs: [], // Declare the applied jobs array

    };
  },
  mounted() {
    this.navigateToSearchResults();
  },

  watch: {
    '$route.query': {
      immediate: true,
      handler() {
        this.navigateToSearchResults(); // Fetch search results whenever query parameters change
      }
    }
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

    storeId(passId) {
      location.href = `/jobDetails?passId=${passId}`
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

    //method for search job logic
    navigateToSearchResults() {
      const searchTerms = this.$route.query.keywords
        ? this.$route.query.keywords.split(',').map(term => term.trim().toLowerCase())
        : [];
      const location = this.$route.query.location ? this.$route.query.location.toLowerCase() : '';
      const experience = this.$route.query.experience ? parseInt(this.$route.query.experience) : null;

      this.searchResults = [];
      this.searchResults = this.jobListings.filter(job => {
        const jobTitle = job.title ? job.title.toLowerCase() : '';
        const jobCompany = job.company ? job.company.toLowerCase() : '';
        const jobSkills = job.skills ? job.skills.map(skill => skill.toLowerCase()) : [];

        const matchesKeywords = searchTerms.some(term => {
          if (term != '')
            return (
              jobTitle.includes(term) ||
              jobCompany.includes(term) ||
              jobSkills.includes(term)
            );
        });

        const matchesLocation = location === '' || location === job.location.toLowerCase();
        const matchesExperience = experience === null || job.experience === experience;

        return matchesKeywords && matchesLocation && matchesExperience;
      });
    }


  }
}

</script>
<style scoped>
.job-listing {
  /* border: 1px solid #ccc; */
  padding: 10px;
  margin-bottom: 20px;
}

.job-listing h3 {
  font-size: 20px;
  margin-bottom: 5px;
}

.skills-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
}

.skills-list li {
  display: inline-block;
  background-color: #f1f1f1;
  padding: 5px 10px;
  border-radius: 3px;
  margin-right: 5px;
}


.button-container {
  display: flex;
  overflow-x: auto;
  scrollbar-width: none;
  /* Firefox */
  -ms-overflow-style: none;
  /* IE and Edge */
}

.button-container::-webkit-scrollbar {
  width: 0;
  /* Chrome, Safari, and Opera */
}
</style>

