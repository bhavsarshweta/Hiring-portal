<template>
  <div class="bg-gray-50">
    <div class="flex shadow-md bg-white sticky top-0 left-0">
      <div class="flex-col">
        <p class="text-xl font-semibold m-7 hidden md:block">Job application status</p>
        <p></p>
      </div>
    </div>
    <div class="md:flex shadow-md rounded-xl mx-3 md:mx-16 my-7 bg-white w-auto md:w-auto">
      <div class="border-r-2 p-5 md:flex-col flex-row ">
        <div v-if="appliedJobs.length > 0" class="space-y-4">
          <div v-for="job in appliedJobs" :key="job.id" class="applied-job space-y-4" @click="displayStatus(job)">
            <div class="space-y-4">
              <div>
                <h6 class="font-bold">{{ job.title }}</h6>
                <div class="text-sm font-semibold">{{ job.company }}</div>
              </div>
              <div class="border px-2 py-1 inline-flex text-sm rounded-full">
                <img src="../assets/accept-icon.png" class="w-4 h-4" alt="" />
                {{ job.status }}
              </div>
            </div>
            <hr>
          </div>
        </div>
        <p v-else class="no-applications-message">You have not applied to any jobs yet.</p>
      </div>

      <!-- Displayed status information -->

      <div v-if="!selectedJob || isMobile" class="p-4 text-xl font-semibold text-center md:block hidden">
        Select a job application to see details
      </div>

      <div v-if="selectedJob && !isMobile" class="p-4 md:flex-col flex-row md:block hidden">
        <h3 class="font-bold text-lg">{{ selectedJob.title }}</h3>
        <div class="text-sm font-semibold">{{ selectedJob.company }}</div>
        <hr class="my-6">
        <div class="mt-4 px-2 py-1 rounded">
          <p class="font-semibold mb-4">Application status</p>
          <div class="stepper-wrapper">
            <div class="stepper-item completed">
              <div class="step-counter">1</div>
              <div class="step-name font-bold">Applied</div>
            </div>
            <div class="stepper-item completed">
              <div class="step-counter">2</div>
              <div class="step-name font-bold">Application sent</div>
            </div>
            <div class="stepper-item active">
              <div class="step-counter">3</div>
              <div class="step-name font-bold">Resume <br> viewed</div>
            </div>
            <div class="stepper-item">
              <div class="step-counter">4</div>
              <div class="step-name font-bold">Awaiting for recruiters</div>
            </div>
          </div>
        </div>

        <!--  -->
        <div class="flex border-t-2 pt-4 mx-2">
          <p class="font-bold">Activity On this job</p>
        </div>
        <div class="flex flex-col sm:flex-row m-4 bg-blue-50 rounded-md p-4 items-center">
          <div class="flex border-b-2 sm:border-b-0 sm:border-r-2 pr-2">
            <p class="font-bold text-xl text-center">442</p>
            <p class="text-sm mx-2">Total applications</p>
          </div>
          <div class="flex pl-2">
            <p class="font-bold text-xl text-center">36</p>
            <p class="text-sm mx-2">Application viewed by recruiter</p>
          </div>
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
      appliedJobs: [],
      selectedJob: null,
      statusStages: ['Applied', 'Application Sent', 'Application Viewed', 'Resume Viewed'],
      isMobile: false
    };
  },
  mounted() {
    this.loadAppliedJobs();
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
  methods: {
    displayStatus(job) {
      if (this.isMobile) {
        // Navigate to next page with selected job details (using Vue Router)
        location.href = `ApplicationStatusInfo/?id=${job.id}`
      } else {
        this.selectedJob = { ...job, statusIndex: 0 };
      }
    },
    loadAppliedJobs() {
      const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
      this.appliedJobs = appliedJobs;
    },
    calculateProgress(statusIndex) {
      return (statusIndex / (this.statusStages.length - 1)) * 100 + '%';
    },
    checkScreenSize() {
      this.isMobile = window.innerWidth <= 768;
    }
  }
};
</script>

<style>
/* css for progress 2nd bar */
.stepper-wrapper {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.stepper-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

.stepper-item::before {
  position: absolute;
  content: "";
  border-bottom: 2px solid #ccc;
  width: 100%;
  top: 20px;
  left: -50%;
  z-index: 2;
}

.stepper-item::after {
  position: absolute;
  content: "";
  border-bottom: 2px solid #ccc;
  width: 100%;
  top: 20px;
  left: 50%;
  z-index: 2;
}

.stepper-item .step-counter {
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ccc;
  margin-bottom: 6px;
}

.stepper-item.active {
  font-weight: bold;
}

.stepper-item.completed .step-counter {
  background-color: #4bb543;
}

.stepper-item.completed::after {
  position: absolute;
  content: "";
  border-bottom: 2px solid #4bb543;
  width: 100%;
  top: 20px;
  left: 50%;
  z-index: 3;
}

.stepper-item:first-child::before {
  content: none;
}

.stepper-item:last-child::after {
  content: none;
}

.no-applications-message {
  margin-top: 1rem;
}

</style>
