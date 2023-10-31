<template>
  <div>
    <h2>Job Listings</h2>
    <ul>
      <li v-for="job in matchedJobs" :key="job.id">
        <h3>{{ job.title }}</h3>
        <p>{{ job.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userPreferences: {
        location: 'New York',
        industry: 'IT',
        jobTitle: 'Software Engineer',
        keywords: ['JavaScript', 'Vue.js']
      },
      jobs: [
        {
          id: 1,
          title: 'Software Engineer',
          description: 'We are looking for a skilled software engineer...',
          location: 'New York',
          industry: 'IT',
          keywords: ['JavaScript', 'Vue.js', 'Node.js']
        },
        {
          id: 2,
          title: 'Web Developer',
          description: 'Join our web development team...',
          location: 'San Francisco',
          industry: 'IT',
          keywords: ['HTML', 'CSS', 'JavaScript']
        },
        // Add more job objects here...
      ],
      matchedJobs: []
    };
  },
  methods: {
    matchJobWithPreferences() {
      this.matchedJobs = this.jobs.filter(job => {
        // Perform matching based on preferences
        return (
          job.location === this.userPreferences.location &&
          job.industry === this.userPreferences.industry &&
          job.title === this.userPreferences.jobTitle &&
          this.userPreferences.keywords.some(keyword => job.keywords.includes(keyword))
        );
      });
    }
  },
  mounted() {
    this.matchJobWithPreferences(); // Call matchJobWithPreferences method when component is mounted
  }
};
</script>
