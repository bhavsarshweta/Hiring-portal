<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <div>
        <div class="grid   w-full md:w-1/2  text-center md:ml-64 ml- md:mb-10 mt-11 md:mt-6 shadow-md ">
            <div class="  w-full ml-2   mr-2   py-6  px-1">
                <!-- <div v-for="job in filteredJobs" :key="job.id" class="job-listing shadow-md rounded-2xl"> -->

                <p class="text-left font-bold ml-3">{{ $route.query.jobTitle }}</p>
                <p class="text-left font-semibold ml-3 text-sm">{{ $route.query.companyName }}</p>

                <div class="job-details md:flex ">
                    <div class="detail flex mx-4 my-2">
                        <i class=" fa fa-calendar " aria-hidden="true"></i>
                        <p class="detail-text ml-2 text-sm">{{ $route.query.experiencefrom }}-{{ $route.query.experienceTo
                        }}Yrs</p>
                    </div>

                    <div class="detail flex mx-4 my-2">
                        <i class="fa fa-money" aria-hidden="true"></i>
                        <p class="detail-text ml-2 text-sm">{{ $route.query.salaryfrom }}-{{ $route.query.salaryTo }}Lacs PA
                        </p>
                    </div>
                    <div class="detail flex mx-4 my-2">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        <p class="detail-text ml-2 text-sm">{{ $route.query.location }}</p>
                    </div>
                </div>
                <div class="detail-icon mt-5">
                    <h1 class="text-left text-sm font-semibold mx-2">Job Description</h1>
                    <div class="text-sm text-left ml-2" v-html="formattedContent"></div>
                </div>

                <!-- <div>{{$route.query.keyskills }}</div> -->
                <h1 class="text-left text-sm font-semibold mx-2 mt-2">Role:{{ $route.query.role }}</h1>
                <h1 class="text-left text-sm font-semibold mx-2 mt-2">Industry Type:{{ $route.query.industry }}</h1>
                <h1 class="text-left text-sm font-semibold mx-2 mt-2">Department:{{ $route.query.department }} </h1>
                <h1 class="text-left text-sm font-semibold mx-2 mt-2">Employment Type:{{ $route.query.employmentType }}</h1>
                <h1 class="text-left text-sm font-semibold mx-2 mt-2">Role Category:</h1>


                <div class="text-left">
                    <h1 class="text-left text-sm font-semibold mx-2 my-3">Education</h1>
                    <span v-for="option in formData.selectedOptions" :key="option"
                        class="inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        {{ option }}
                    </span>
                </div>
                <NuxtLink to="/Employer/DisplayJobsPostByEmployer">
                    <div class=" md:flex pb-6 item-center md:ml-52">
                        <button
                            class=" s mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 border border-blue-700 rounded"
                            @click="submitForm">
                            Post a Job
                        </button>
                    </div>
                </NuxtLink>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                selectedOptions: [],
                jobTitle: this.$route.query.jobTitle,
                companyName: this.$route.query.companyName,
                experiencefrom: this.$route.query.experiencefrom,
                experienceTo: this.$route.query.experienceTo,
                salaryfrom: this.$route.query.salaryfrom,
                salaryTo: this.$route.query.salaryTo,
                location: this.$route.query.location,
                role: this.$route.query.role,
                industry: this.$route.query.industry,
                department: this.$route.query.department,
                employmentType: this.$route.query.employmentType,
                companyProfile: this.$route.query.companyProfile,

            }
        }
    },
    methods: {
        submitForm() {
            localStorage.setItem('JobPostformData', JSON.stringify(this.formData));
            localStorage.setItem('jobDescription', JSON.stringify(this.formattedContent))
        }
    },
    computed: {
        // content() {
        //   return this.$root.content || '';
        // }
        formattedContent() {
            return this.$root.content;
        },
    },
    mounted() {
        this.formData.selectedOptions = this.$route.query.education
    }
}
</script>

<style></style>