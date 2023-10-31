<template>
  <div>
      <div>
        <div class="flex m-3 button-container ">
        <!-- <i class="fa fa-filter mt-5 mx-3 filter-icon lg:hidden block" aria-hidden="true"></i> -->
        <submenu class="block lg:hidden"/>
      </div>

    <div class="grid grid-cols-2 sm:grid sm:grid-cols-4 text-center">

        <HomeSubmenu class="... hidden lg:block"/>
          <!-- end of 1st main div  -->
          <!-- the above section includes left side bar  -->

          <!-- here Middle section -->
          <!-- the below section inclues the middle content of the page  -->
          
          <div class="... ml-4 mr-8 py-8 px-1 lg:col-span-2 md:col-span-3 col-span-2">

            <div class="">

              <div class="bg-yellow-100 border-yellow-300 h-14">
                <p class=" p-3 text-left">HKCL's new Referral Hiring tools - <NuxtLink>Know more | Request a Demo
                  </NuxtLink>
                </p>
              </div>

              <div class="h-70 mt-6 mb-4" style="background-color: #FFF6E4; border-color: #FFE4AA;">
                <div class="text-left pl-5 pt-5 ">
                  <button class="px-2" style="background-color: #FFE4AA; color: #A24D02;"><small>New</small></button>
                </div>
                <p class="font-Poppins text-left pl-5 pt-2 text-lg font-bold">Improve your calling efficiency</p>
                <p class="px-2 ml-3 pt-2 text-left">Now, call candidates with a single click without typing the phone
                  numbers using the new HKCL Recruiter App. </p>

                <div class=" mt-5 h-52 mb-1" style="background-color: #FFF6E4;">

                  <div class="mt-4 border-dashed border-4 mx-3 py-3">
                    <p class="text-xl text-blue-800">See how it works <br> Watch Video</p>
                    <br>
                    <i class="fa fa-play-circle-o" style="color: #0078DB; font-size:x-large;"></i>
                  </div>
                  <div class="text-left ml-3 mt-3">
                    <button class="text-white py-2 px-3" style="background-color: #0078DB;">Get App link now</button>
                  </div>
                </div>

              </div>

              <div class="mt-2 sm:h-36 md:h-auto ">
                <p style="color: #58585A; font-size: larger;" class="text-left py-2 font-semibold">Welcome to HKCL's
                  Recruiter</p>
                <div style="border-color: #A0D01E; background-color: #F9FEEF;" class="h-36 px-2 my-2">

                  <div class="flex mt-5 mb-5 pt-4 justify-start ml-14">
                    <i class="fa fa-phone mx-1 mt-2" style="font-size: 19px;"></i>
                    <p class="font-semibold">Contact Us</p>
                  </div>

                  <div class="grid lg:grid-cols-2 md:grid-col-1 grid-col-1">
                    <div class="... text-sm">
                      <p>Landline: <b>0120-4868900</b></p>
                      <p>Toll Free: <b>1800 102 5558</b></p>
                    </div>
                    <div class="... text-sm">
                      <p>Mail at <NuxtLink to="" class="text-blue-500">support@HKCL.com</NuxtLink> with your</p>
                      <p>username (vaijnath.taware@saapttrini.com)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 2nd main div ends here  -->
          <div class="... ml-4 mr-8 py-8 px-1 lg:col-span-2 md:col-span-3 col-span-2" >
          <div class="">
            <!-- search logic starts here -->

            <div v-if="searchResults.length > 0">
              <!-- <NuxtLink to="/jobDetails" no-rel> -->
              <div v-for="job in searchResults" :key="job.id" class="job-listing shadow-md rounded-2xl"
                @click="storeId(job.id)">
                <!--  -->
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
            <!-- search logic ends here -->
          </div>
        </div>

          <!-- ---3rd part of main div section ends here The third section begins here------ -->
          <div class="... mt-5  ">
            <!-- This is thrid column that includes a carousel  -->
            <div class="px-1 pt-1 pb-10 ml-5 mb-5 sm:mx-1 sm:my-1 w-72 sm:w-auto shadow-md border-2">
              <h2>Title: {{ formData.title }}</h2>
              <div class=" carousel w-72"  v-for="(image, index) in formData.uploadedImages" :key="index">
                <div class="carousel-item w-full relative" >
                  <img :src="image.url" :alt="image.name" class="w-full">
                  <p class="block caption justify-center"> {{ formData.caption}}</p>
                </div>

              </div>
              <p class="block">Description: {{ formData.description }}</p>
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

export default {
  data() {
    return {
      formData: {},
      uploadedImages:[],
      passId: null,
      searchResults: [], // Initialize the search results array
      keywords: '',
      location: '',
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
    };
  },
  methods:{
    navigateToSearchResults() {
      const searchTerms = this.$route.query.keywords
        ? this.$route.query.keywords.split(',').map(term => term.trim().toLowerCase())
        : [];
      const location = this.$route.query.location ? this.$route.query.location.toLowerCase() : '';
      const experience = this.$route.query.experience ? parseInt(this.$route.query.experience) : null;

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

  },

  watch: {
    '$route.query': {
      immediate: true,
      handler() {
        this.navigateToSearchResults(); // Fetch search results whenever query parameters change
      }
    }
  },
 
  created() {
    // Retrieve and parse the stored formData from localStorage
    if(process.client){
    const storedData = localStorage.getItem('formData');
    this.formData = JSON.parse(storedData);
    console.log(this.formData)
    }
  },
}

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
job-listing {
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