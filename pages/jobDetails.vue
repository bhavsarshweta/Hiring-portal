<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  <div class="container mx-auto bg-white">
   

    <div class="grid md:grid-cols-3 grid-col-1 text-center">
      <div class="... md:mr-4 mt-10 py-8 px-1 mx-8 md:col-span-2">
        <div v-for="job in filteredJobs" :key="job.id" class="job-listing shadow-md rounded-2xl">

          <p class="text-left font-bold ml-3">{{ job.title }}</p>
          <p class="text-left font-semibold ml-3 text-sm">{{ job.company }}</p>

          <div class="job-details flex">
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

          <div class=" button-container bg-white text-right ">
            <button class="btn1 border border-blue-500 rounded-full px-2 py-1 mr-5 w-20 hover:text-blue-500 "
              @click="saveJob(job)" v-if="!isJobSaved(job)">Save</button>
            <button class="btn1 mr-4 text-sm bg-blue-500 rounded-full px-2 py-2 w-20 hover:bg-blue-300"
              :class="{ 'bg-gray-400': hasJobApplied(job) }" :disabled="hasJobApplied(job)" @click="applyForJob(job)"> {{
                hasJobApplied(job) ? 'Applied' : 'Apply' }}</button>
          </div>
        </div>

        <div v-for="job in filteredJobs" :key="job.id" class="job-listing shadow-md hover:bg-gray-50 rounded-2xl">

          <div class="bg-gray-100 rounded-2xl px-2 py-2 m-5">
            <div class="text-sm mx-4 ">
              <p class=" mt-5 text-left"><b>Job highlights </b><br>{{ job.responsibilities }}</p>
            </div>
          </div>
          <div class="px-3">
            <p class="font-semibold text-left ml-3 text-sm">Job description</p>
            <p class="text-sm text-left ml-3">{{ job.description }}</p>
          </div>
        </div>
      </div>
      <div class="... md:mx-4 md:mt-10 mx-8 shadow-md rounded-2xl job-listing">
        <p class="font-bold">Jobs you might be interested in</p>
        <!-- Job application management section -->
        <div class="application-management">
          <h2 class="text-lg mb-4">My Applications</h2>
          <div v-if="appliedJobs.length > 0">
            <div v-for="job in appliedJobs" :key="job.id" class="applied-job">
              <h3 class="text-xl">{{ job.title }}</h3>
              <p class="company">{{ job.company }}</p>
              <p class="status">Status: {{ job.status }}</p>
            </div>
          </div>
          <p v-else class="no-applications-message">You have not applied to any jobs yet.</p>
        </div>
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
      appliedJobIds: [],
      selectedJobId: null,
      savedJobs: [], // Declare the saved jobs array
      appliedJobs: [], // Declare the applied jobs array
      jobListings: [
        // Your job listings data
        {
          id: 1,
          title: 'Software Engineer',
          company: 'ABC Inc.',
          location: 'New York',
          skills: ['JavaScript', 'React'],
          experience: 2,
          description: 'Candidate must have good hands on experience in EJB, MQ, ESB Architecture , and Microservices. Well-versed with java design patterns. Good to have knowledge of basic devops operations.',
          responsibilities: ' We are looking for 3+ experiences Java Developers,spring boot,micro services,who have proficient experience in Sprint Boot,Hibernate,microservices'
        },
        {
          id: 2,
          title: 'Web Developer',
          company: 'XYZ Corp.',
          location: 'pune',
          skills: ['HTML', 'CSS', 'Java'],
          experience: 1,
          description: 'Candidate must have good hands on experience in EJB, MQ, ESB Architecture , and Microservices. Well-versed with java design patterns. Good to have knowledge of basic devops operations.',
          responsibilities: ' We are looking for 3+ experiences Java Developers,spring boot,micro services,who have proficient experience in Sprint Boot,Hibernate,microservices'
        },
        {
          id: 3,
          title: 'Data Analyst',
          company: 'DataTech Solutions',
          location: 'Seattle',
          skills: ['SQL', 'Python', 'Data Analysis', 'Java'],
          experience: 3,
          description: 'Candidate must have good hands on experience in EJB, MQ, ESB Architecture , and Microservices. Well-versed with java design patterns. Good to have knowledge of basic devops operations.',
          responsibilities: ' We are looking for 3+ experiences Java Developers,spring boot,micro services,who have proficient experience in Sprint Boot,Hibernate,microservices'

        },
        {
          id: 4,
          title: 'UX Designer',
          company: 'Creative Innovations',
          location: 'Los Angeles',
          skills: [' user ', 'Wireframing', 'Prototyping', 'UI/UX Design'],
          experience: 2,
          description: 'Candidate must have good hands on experience in EJB, MQ, ESB Architecture , and Microservices. Well-versed with java design patterns. Good to have knowledge of basic devops operations.',
          responsibilities: ' We are looking for 3+ experiences Java Developers,spring boot,micro services,who have proficient experience in Sprint Boot,Hibernate,microservices'
        },
        {
          id: 5,
          title: 'Marketing Manager',
          company: 'Growth Marketing Co.',
          location: 'New York',
          skills: ['Digital Marketing', 'SEO', 'Social Media Advertising'],
          experience: 4,
          description: 'Candidate must have good hands on experience in EJB, MQ, ESB Architecture , and Microservices. Well-versed with java design patterns. Good to have knowledge of basic devops operations.',
          responsibilities: ' We are looking for 3+ experiences Java Developers,spring boot,micro services,who have proficient experience in Sprint Boot,Hibernate,microservices'
        },
        {
          id: 6,
          title: 'Web Developer',
          company: 'XYZ Corpooo.',
          location: 'Pune',
          skills: ['Java', 'CSS', 'JavaScript'],
          experience: 1,
          description: 'Candidate must have good hands on experience in EJB, MQ, ESB Architecture , and Microservices. Well-versed with java design patterns. Good to have knowledge of basic devops operations.',
          responsibilities: ' We are looking for 3+ experiences Java Developers,spring boot,micro services,who have proficient experience in Sprint Boot,Hibernate,microservices'
        },
      ],
    }
  },
  mounted() {
    // Assuming you pass the job ID through a query parameter named "jobId"
    this.selectedJobId = this.$route.query.passId;
    console.log(this.selectedJobId)
  },
  computed: {
    filteredJobs() {
      return this.jobListings.filter(job => job.id === parseInt(this.selectedJobId));
    }
  },
  methods: {

    saveJob(job) {
      if (!this.isJobSaved(job)) {
        this.savedJobs.push(job);
        console.log('Saved job:', job);
      }
    },

    // applyForJob(job) {
    //   if (!this.hasJobApplied(job)) {
    //     job.status = 'resume viewed 12 weeks ago';
    //     this.appliedJobs.push(job);
    //     this.appliedJobIds.push(job.id);
    //     console.log('Applied for job:', job);
    //     var appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];  
    //     appliedJobs.push(job);
    //     localStorage.setItem('appliedJobs', JSON.stringify(appliedJobs));

    //   }
    // },

    applyForJob(job) {
      if (!this.hasJobApplied(job)) {
        const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
        // alert('Job applied successfully:');
        // Check if a job with the same ID exists in localStorage
        const existingJob = appliedJobs.find(appliedJob => appliedJob.id === job.id);
        if (existingJob) {
          alert('Job already applied:', existingJob);
          return; // Exit the method if the job already exists
        }
        else{
          alert('Job applied successfully:');
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
    hasJobApplied(job) {
      return this.appliedJobIds.includes(job.id);
    },
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
  margin-top: 10px;
}
/* css for button */
/* Adding transformation when the button is active */
.btn1:active {
  transform: scale(0.98);
  /* Scaling button to 0.98 to its original size */
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  /* Lowering the shadow */
}
</style>