<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <div>
        <div class="">
            <div class=" grid grid-cols-4 text-center">
                <!-- <div v-for="job in filteredJobs" :key="job.id" class="job-listing shadow-md rounded-2xl"> -->

                <p class="text-left font-bold ml-3">{{ JobPostformData.jobTitle }}</p>
                <p class="text-left font-semibold ml-3 text-sm">{{ JobPostformData.companyName }}</p>

                <div class="job-details flex">
                    <div class="detail flex mx-4 my-2">
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        <p class="detail-text ml-2 text-sm">{{ JobPostformData.experiencefrom }}-{{
                            JobPostformData.experienceTo }}Yrs</p>
                    </div>

                    <div class="detail flex mx-4 my-2">
                        <i class="fa fa-money" aria-hidden="true"></i>
                        <p class="detail-text ml-2 text-sm">{{ JobPostformData.salaryfrom
                        }}-{{ JobPostformData.salaryTo }}Lacs PA</p>
                    </div>
                    <div class="detail flex mx-4 my-2">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        <p class="detail-text ml-2 text-sm">{{ JobPostformData.location }}</p>
                    </div>
                </div>
                <div class="detail-icon mt-5">
                    <h1 class="text-left text-sm font-semibold mx-2">Job Description</h1>
                    <div class="text-sm text-left ml-2" v-html="formData1"></div>
                </div>

                <!-- <div>{{$route.query.keyskills }}</div> -->
                <h1 class="text-left text-sm font-semibold mx-2 mt-2">Role: {{ JobPostformData.role }}</h1>
                <h1 class="text-left text-sm font-semibold mx-2 mt-2">Industry Type: {{ JobPostformData.industry }}</h1>
                <h1 class="text-left text-sm font-semibold mx-2 mt-2">Department: {{ JobPostformData.department }} </h1>
                <h1 class="text-left text-sm font-semibold mx-2 mt-2">Employment Type: {{ JobPostformData.employmentType }}
                </h1>
                <h1 class="text-left text-sm font-semibold mx-2 mt-2">Role Category: </h1>


                <div class="text-left">
                    <h1 class="text-left text-sm font-semibold mx-2 my-3">Education</h1>
                    <span v-for="option in JobPostformData.selectedOptions" :key="option"
                        class="inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        {{ option }}
                    </span>
                </div>
                <button
                    class=" mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                    @click="submitForm">
                    Apply
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            JobPostformData: {},
            uploadedImages: [],
            formData1: ''
        };
    },
    created() {
        // Retrieve and parse the stored formData from localStorage
        if (process.client) {
            const storedData = localStorage.getItem('JobPostformData');
            this.JobPostformData = JSON.parse(storedData);
            const storedData1 = localStorage.getItem('jobDescription');
            this.formData1 = JSON.parse(storedData1);
            console.log(this.formData1)
        }
    },
}
</script>

<style scoped></style>