<template>
  <NuxtLayout name="custome">
    <div class="bg-gray-50">
      <div class="flex shadow-md bg-white sticky top-0 left-0">
        <div class="flex-col hidden md:block">
          <p class="text-xl font-semibold m-7"> Recommended Jobs</p>
        </div>
      </div>
      <div class="...job-recommendation ">

        <!-- <h2 class="job-recommendation__title">Recommended Jobs</h2> -->

        <div class="job-recommendation__filters md:ml-14 ml-5 mt-5">
          <div>
            <label class="job-recommendation__filter-label font-semibold">Filter by Category:</label>
            <select v-model="filterCategory" @change="recommendJobs" class="job-recommendation__filter-select">
              <option value="">All Categories</option>
              <option value="IT">IT</option>
              <option value="Marketing">Marketing</option>
              <!-- Add more options for different categories -->
            </select>
          </div>

          <div>
            <label class="job-recommendation__filter-label font-semibold ml-5">Sort by:</label>
            <select v-model="sortCriteria" @change="recommendJobs" class="job-recommendation__filter-select">
              <option value="similarity">Similarity Score</option>
              <option value="location">Location</option>
              <option value="experience">Experience</option>
              <!-- Add more options for different sorting criteria -->
            </select>
          </div>
        </div>
      </div>
      <div class="text-right md:hidden mr-10">
        <button class="btn1 border rounded-full p-2 bg-blue-400 font-semibold text-sm"
          @click="deleteModalData = true">Manage
          jobs</button>
      </div>



      <!-- here Middle section----- -->
      <!-- the below section inclues the middle content of the page  -->
      <div class="grid md:grid-cols-3  text-center">
        <div class="... md:col-span-2 lg:ml-12 md:ml-4 md:mx-0 ml-5 py-8 px-1 lg:mr-6 w-auto">
          <!-- search result display starts here -->

          <div v-if="displayedJobs.length > 0">
            <!-- <NuxtLink to="/jobDetails" no-rel> -->
            <div v-for="job in displayedJobs" :key="job.id" class="job-listing shadow-md rounded-2xl p-4 bg-white "
              @click="storeId(job.id)">
              <!--  -->
              <p class="text-left font-bold ml-3">{{ job.title }}</p>
              <p class="text-left font-semibold ml-3 text-sm">{{ job.company }}</p>

              <div class="job-details sm:flex">
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
                <p class="text-sm md:mx-4 text-left ml-4"><b>Roles & Responsibilities :</b><br> {{ job.responsibilities }}
                </p>
              </div>
              <ul class="skills-list text-left">
                <li v-for="skill in job.skills" :key="skill" class="ml-3 my-2 text-xs mt-4">{{ skill }}</li>
              </ul>
              <div class=" col-auto button-container bg-white text-right hover:text-blue-500">
                <button class="mr-4 text-sm btn1 " @click="saveJob(job)"><i class="fas fa-save mr-2"></i>Save</button>
              </div>
            </div>

          </div>
          <!-- -->
        </div>
        <div class="...shadow-md rounded-xl hidden md:ml-2 md:block md:mt-8 mx-6 p-4 bg-white md:w-auto h-fit">
          <div class="">
            <p class="font-semibold text-xl text-left">Add preferences to get matching jobs</p>
            <div class="text-left mt-2">
              <p class="text-sm">Preferred job role</p>
              <button class="btn1 border border-blue-500 rounded-full p-1 mr-5 w-16 font-semibold text-sm text-blue-500"
                @click="Add(job)">Add</button>
            </div>
            <div class="text-left mt-2">
              <div class="flex">
                <p class="text-sm">Preferred work location</p>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-pencil text-blue-500 ml-4" viewBox="0 0 16 16">
                    <path
                      d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                  </svg>
                </button>
              </div>
              <p class="rounded-full bg-gray-100 w-20 text-center p-2">pune</p>
            </div>
            <div class="text-left mt-2">
              <div class="flex">
                <p class="text-sm">Preferred salary</p>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-pencil text-blue-500 ml-4" viewBox="0 0 16 16">
                    <path
                      d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                  </svg>
                </button>
              </div>
              <p class="rounded-full bg-gray-100 text-center w-20 p-2">30000</p>
            </div>
          </div>
        </div>

        <!--prefferences for mobile  -->
        <div v-if="deleteModalData" class="modal1">
          <div class="modal-box">
            <div class="...shadow-md rounded-xl md:ml-2 md:hidden md:mt-8 mx-6 p-4 bg-white md:w-auto h-fit">
              <div class="">

               <div class="text-right"> <button class="btn ml-4" @click="deleteModalData = false">X</button></div>
                <p class="font-semibold text-xl text-left">Add preferences to get matching jobs</p>
                <div class="text-left mt-2">
                  <p class="text-sm">Preferred job role</p>
                  <button
                    class="btn1 border border-blue-500 rounded-full p-1 mr-5 w-16 font-semibold text-sm text-blue-500"
                    @click="Add(job)">Add</button>
                </div>
                <div class="text-left mt-2">
                  <div class="flex">
                    <p class="text-sm">Preferred work location</p>
                    <button>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-pencil text-blue-500 ml-4" viewBox="0 0 16 16">
                        <path
                          d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                      </svg>
                    </button>
                  </div>
                  <p class="rounded-full bg-gray-100 w-20 text-center p-2">pune</p>
                </div>
                <div class="text-left mt-2">
                  <div class="flex">
                    <p class="text-sm">Preferred salary</p>
                    <button>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-pencil text-blue-500 ml-4" viewBox="0 0 16 16">
                        <path
                          d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                      </svg>
                    </button>
                  </div>
                  <p class="rounded-full bg-gray-100 text-center w-20 p-2">30000</p>
                </div>
              </div>
            </div>
            </div>
            </div>

          </div>

          <!-- 2nd main div ends here  -->

        </div>
  </NuxtLayout>
</template>

<script>
definePageMeta({
  layout: false
});
export default {
  data() {
    return {
      deleteModalData: false,
      jobData: [

        {
          id: 1,
          title: 'Software Engineer',
          skills: ['HTML', 'CSS', 'JavaScript', 'Java', 'Python', 'HTML'],
          location: 'New York',
          experience: 'Intermediate',
          salary: '50000-70000',
          category: 'IT',
          responsibilities: ' We are looking for 3+ experiences Java Developers,spring boot,micro services,who have proficient experience in Sprint Boot,Hibernate,microservices',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nulla hic optio obcaecati. Optio, a adipisci. Mollitia provident rem vero sed eius natus, fuga accusantium odit facere autem aliquid dolorem?',
        },
        {
          id: 2,
          title: 'Web Developer',
          skills: ['Java', 'Python', 'SQL'],
          location: 'San Francisco',
          experience: 'Senior',
          salary: '80000-100000',
          category: 'IT',
          responsibilities: ' We are looking for 3+ experiences Java Developers,spring boot,micro services,who have proficient experience in Sprint Boot,Hibernate,microservices',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nulla hic optio obcaecati. Optio, a adipisci. Mollitia provident rem vero sed eius natus, fuga accusantium odit facere autem aliquid dolorem?',
        },
        {
          id: 3,
          title: 'Digital Marketing Specialist',
          skills: ['SEO', 'SEM', 'Google Analytics', 'Social Media Marketing'],
          location: 'Chicago',
          experience: 'Senior',
          salary: '60000-80000',
          category: 'Marketing',
          responsibilities: ' We are looking for 3+ experiences Java Developers,spring boot,micro services,who have proficient experience in Sprint Boot,Hibernate,microservices',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nulla hic optio obcaecati. Optio, a adipisci. Mollitia provident rem vero sed eius natus, fuga accusantium odit facere autem aliquid dolorem?',
        },
        {
          id: 4,
          title: 'Data Analyst',
          skills: ['SQL', 'Python', 'Tableau', 'Statistics'],
          location: 'Boston',
          experience: 'Intermediate',
          salary: '55000-75000',
          category: 'IT',
          responsibilities: ' We are looking for 3+ experiences Java Developers,spring boot,micro services,who have proficient experience in Sprint Boot,Hibernate,microservices',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nulla hic optio obcaecati. Optio, a adipisci. Mollitia provident rem vero sed eius natus, fuga accusantium odit facere autem aliquid dolorem?',
        },
        {
          id: 5,
          title: 'Graphic Designer',
          skills: ['Adobe Photoshop', 'Adobe Illustrator', 'UI/UX Design'],
          location: 'Los Angeles',
          experience: 'Junior',
          salary: '40000-60000',
          category: 'Design',
          responsibilities: ' We are looking for 3+ experiences Java Developers,spring boot,micro services,who have proficient experience in Sprint Boot,Hibernate,microservices',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nulla hic optio obcaecati. Optio, a adipisci. Mollitia provident rem vero sed eius natus, fuga accusantium odit facere autem aliquid dolorem?',
        },
        {
          id: 6,
          title: 'Financial Analyst',
          skills: ['Financial Modeling', 'Excel', 'Investment Analysis'],
          location: 'New York',
          experience: 'Senior',
          salary: '70000-90000',
          category: 'Finance',
          responsibilities: ' We are looking for 3+ experiences Java Developers,spring boot,micro services,who have proficient experience in Sprint Boot,Hibernate,microservices',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nulla hic optio obcaecati. Optio, a adipisci. Mollitia provident rem vero sed eius natus, fuga accusantium odit facere autem aliquid dolorem?',
        },
      ],
      userData: {
        id: 1,
        skills: ['Java', 'Python', 'Financial Modeling'],
        location: 'New York',
        experience: 'Junior',
        salaryRange: '30000-50000',
        category: 'IT',

      },
      recommendedJobs: [],
      filterCategory: '',
      sortCriteria: 'experience',
      currentPage: 1,
      pageSize: 5,
      savedJobs: [],
      appliedJobs: [],
      isModalOpen: false,
      selectedJob: null,
      appliedJobIds: []
    };
  },

  computed: {

    displayedJobs() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.recommendedJobs.slice(startIndex, endIndex);
    },
  },

  methods: {
    storeId(passId) {
      location.href = `/jobDetails?passId=${passId}`
    },
    calculateSimilarity(user, job) {
      // Similarity calculation remains the same
      let score = 0;
      let matchingSkills = job.skills.filter((skill) => user.skills.includes(skill));


      if (matchingSkills.length >= 1) {
        score += 1;
      }

      if (user.location === job.location) {
        score += 1;
      }

      if (user.experience === job.experience) {
        score += 1;
      }

      if (user.category === job.category) {
        score += 1;
      }

      return score;
    },
    recommendJobs() {
      // Recommendation logic remains the same
      this.recommendedJobs = this.jobData
        .map((job) => ({
          ...job,
          similarityScore: this.calculateSimilarity(this.userData, job),
        }))
        .filter((job) => {
          const categoryFilter = this.filterCategory;
          return (
            (!categoryFilter || job.category === categoryFilter) &&
            job.similarityScore >= 2
          );
        })
        .sort((a, b) => {
          const sortCriteria = this.sortCriteria;
          if (sortCriteria === 'location') {
            return a.location.localeCompare(b.location);
          } else if (sortCriteria === 'experience') {
            return a.experience.localeCompare(b.experience);
          } else {
            // Sort by similarity score as the default
            return b.similarityScore - a.similarityScore;
          }
        });
    },

    closeModal() {
      this.isModalOpen = false;
      this.selectedJob = null;
    },

    saveJob(job) {
      if (!this.isJobSaved(job)) {
        this.savedJobs.push(job);
        console.log('Saved job:', job);
      }
    },

    applyForJob(job) {
      if (!this.hasJobApplied(job)) {
        // Retrieve the applied jobs from local storage
        const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];

        // Check if a job with the same ID exists in localStorage
        const existingJob = appliedJobs.find(appliedJob => appliedJob.id === job.id);
        if (existingJob) {
          console.log('Job already applied:', existingJob);
          return; // Exit the method if the job already exists
        }

        job.status = 'resume viewed 12 weeks ago';
        this.appliedJobs.push(job);
        this.appliedJobIds.push(job.id);
        console.log('Applied for job:', job);

        appliedJobs.push(job);
        localStorage.setItem('appliedJobs', JSON.stringify(appliedJobs));
      }
    },

    isJobSaved(job) {
      return this.savedJobs.some((savedJob) => savedJob.id === job.id);
    },
    // hasJobApplied(job) {
    //   return this.appliedJobs.some((appliedJob) => appliedJob.id === job.id);
    // },

    hasJobApplied(job) {
      return this.appliedJobIds.includes(job.id);
    },
  },

  mounted() {
    this.appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
    this.appliedJobIds = this.appliedJobs.map(job => job.id);

    this.recommendJobs();
    // this.recommendJobs();
  },
};
</script>

<style scoped>
.job-recommendation__filters {
  display: flex;
  /* align-items: center; */
  margin-bottom: 20px;
}

.job-recommendation__filter-label {
  margin-right: 10px;
}

.job-recommendation__filter-select {
  padding: 5px;
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

.job-listing {
  /* border: 1px solid #ccc; */
  padding: 10px;
  margin-bottom: 20px;
  margin-right: 20px;
}

.job-listing h3 {
  font-size: 20px;
  margin-bottom: 5px;
}

.btn1:active {
  transform: scale(0.98);
  /* Scaling button to 0.98 to its original size */
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  /* Lowering the shadow */
}

.modal1 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-box {
  background-color: #fff;
  padding: 5px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.modal-action {
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
}</style>
