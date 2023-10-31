<template>
    <div class="flex items-center bg-gray-100 min-h-screen">
        <div class="mt-5 lg:ml-80 md:mx-10 mx-2">
            <div class="job-application p-4 m-4 lg:w-2/3 md:w-auto w-auto bg-white shadow-md"
                v-for="application in jobApplications" :key="application.id">
                <!-- Job application details -->
                <h3 class="font-bold">{{ application.title }} at {{ application.company }}</h3>
                <p class="status">Status: {{ application.status }}</p>
                <p class="description">Description: {{ application.description }}</p>
                <p class="responsibilities">Location: {{ application.location }}</p>
                <div class="text-left">
                    <h1 class="text-left font-semibold my-3">Skills</h1>
                    <span v-for="skill in application.skills" :key="skill"
                        class="inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-4">
                        {{ skill }}
                    </span>
                </div>
                <div class="button-container">
                    <button class="button shortlist" @click="updateApplicationStatus(application.id, 'Shortlisted')">
                        Shortlist
                    </button>
                    <button class="button reject"
                        @click="updateApplicationStatus(application.id, 'Rejected')">Reject</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            jobApplications: []
        };
    },
    methods: {
        updateApplicationStatus(applicationId, newStatus) {
            const application = this.jobApplications.find(app => app.id === applicationId);
            if (application) {
                application.status = newStatus;
                // Save the updated job applications to localStorage
                localStorage.setItem('appliedJobs', JSON.stringify(this.jobApplications));
            }
        }
    },
    mounted() {
        // Retrieve job applications from localStorage
        const storedApplications = localStorage.getItem('appliedJobs');
        if (storedApplications) {
            this.jobApplications = JSON.parse(storedApplications);
            console.log(this.jobApplications);
        }
    }
};
</script>
  
<style scoped>
/* .job-application {
    width: 600px;
    margin: 20px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
} */

h3 {
    font-weight: bold;
}

.status {
    margin-top: 10px;
    font-weight: bold;
}

.description {
    margin-top: 10px;
}

.responsibilities {
    margin-top: 10px;
}

.text-left {
    margin-top: 10px;
}

.button-container {
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
}

.button {
    border: none;
    border-radius: 4px;
    color: #fff;
    padding: 8px 16px;
    cursor: pointer;
}

.shortlist {
    background-color: #1abc68;
    margin-right: 5px;
}

.reject {
    background-color: #e74c3c;
}
</style>
  