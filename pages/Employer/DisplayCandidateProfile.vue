<template>
  <div>
    <h2 class="text-xl  md:ml-72 font-bold mb-4 ml-4 mt-6">Search Results:</h2>
    <ul class="space-y-4">
      <li v-for="candidate in filteredCandidates" :key="candidate.id"
        class="bg-white p-4 mb-3 md:w-1/2 md:ml-64 w-full shadow-md">
        <h3 class="text-lg font-semibold">{{ candidate.name }}</h3>
        <p class="text-sm">Skills: {{ candidate.skills }}</p>
        <p class="text-sm">Experience Level: {{ candidate.experienceLevel }}</p>
        <p class="text-sm">Location: {{ candidate.location }}</p>
        <div class="text-center md:text-center">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded mt-2"
            @click="contactCandidate(candidate)">
            <a href="mailto:name1@yellow.com?cc=name2@yellow.com&amp;bcc=name3@yellow.com
            &amp;subject=The%20subject%20of%20the%20email
            &amp;body=The%20body%20of%20the%20email"> Send email</a>
          </button>
        </div>
      </li>
    </ul>

  </div>
</template>
  
<script>

export default {
  data() {
    return {
      filteredCandidates: [],
    };
  },
  created() {
    if (this.$route.query.candidates) {
      this.filteredCandidates = JSON.parse(this.$route.query.candidates);
    }
  },
  methods: {
    contactCandidate(candidate) {
      // Handle contacting the candidate
    },
  },
};
</script>
  
<style scoped></style>
  