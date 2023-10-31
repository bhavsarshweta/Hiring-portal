<template>
    <div>
        <div class="p-4">
            <!-- <div v-for="job in selectedJob" :key="job.id"> -->
                <h3 class="font-bold text-lg">{{ selectedJob.title }}</h3>
                <div class="text-sm font-semibold">{{ selectedJob.company }}</div>
            <!-- </div> -->
            <hr class="my-6">
            <div class="mt-4 px-2 py-1 rounded text-xs">
                <p class="font-semibold mb-4 text-sm">Application status</p>
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
                <p class="font-bold text-xs">Activity On this job</p>
            </div>
            <div class="flex flex-col sm:flex-row m-4 bg-blue-50 rounded-md p-4 items-center">
                <div class="flex border-b-2 sm:border-b-0 sm:border-r-2 pr-2">
                    <p class="font-bold text-lg text-center">442</p>
                    <p class="text-xs mx-2">Total applications</p>
                </div>
                <div class="flex pl-2 mt-4">
                    <p class="font-bold text-lg ml-10 text-center">36</p>
                    <p class="text-xs mx-3">Application viewed by recruiter</p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
definePageMeta({
    layout:'custome'
})
export default {
    data() {
        return {
            selectedJob: {},
            appliedJobs: [],
            id: ''
        };
    },
    mounted() {
        this.loadAppliedJobs();
        this.id = this.$route.query.id;
        this.getSelectedJob();
    },
    methods: {
        loadAppliedJobs() {
            this.appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
        },
        getSelectedJob() {
            const selectedJob = this.appliedJobs.find(job => job.id === parseInt(this.id));
            if (selectedJob) {
                this.selectedJob = selectedJob;
            } else {
                // Handle case when the job with the specified ID is not found
                console.log("error");
            }

        }
    }
};
</script>
  
<style scoped>
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
  