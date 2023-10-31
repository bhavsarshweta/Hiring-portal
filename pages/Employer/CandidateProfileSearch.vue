<template>
    <div class="flex justify-center">

        <div class=" w-full md:w-2/3 lg:w-2/3 xl:w-1/3 p-10 shadow-md my-10 mx-5">
            <h1 class="font-semibold text-3xl mb-3 ml-5">Search candidates</h1>
            <div class="w-full px-3 mb-6 mx-3">
                <label class="block  tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-first-name">
                    Keywords
                </label>
                <input
                    class="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name" type="text" placeholder="Enter keywords/Skills" v-model="searchCriteria.skills">
            </div>
            <!-- experience starts -->
            <div class="w-full md:w-full px-3 mb-6 relative mx-3 my-3">
                        <label class="block  tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-state">
                            Experience
                        </label>
                        <div class="flex">

                            <select  class=" text-gray-700 border md:w-1/2  w-full rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                v-model="searchCriteria.experienceFrom">
                                <option disabled>Min</option>
                                <option >1</option>
                                <option value="2">2</option>
                                <option>3</option>
                                <option >4</option>
                                <option >5</option>
                                <option >6</option>
                                <option >7</option>
                                <option>8</option>
                            </select> <span class="m-4">to</span>

                            <select data-te-select-init
                                class=" text-gray-700 border w-full md:w-1/2 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                v-model="searchCriteria.experienceTo">
                                <option disabled>Max</option>
                               <option v-for="i in 8-searchCriteria.experienceFrom" :key="i">{{ i+parseInt(searchCriteria.experienceFrom) }}</option>
                            </select>
                        </div>
                    </div>
                    <!-- experience ends -->
           

            <div class="w-full mx-3 px-3 mb-6">
                <label class="block tracking-wide text-gray-700 text-sm font-bold mb-2" for="browser">
                    Location
                </label>
                <input list="browsers" name="browser" id="browser" placeholder="Add location"
                    class="appearance-none block w-full text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    v-model="searchCriteria.location">
                <datalist id="browsers">
                    <option value="pune"></option>
                    <option value="mumbai"></option>
                    <option value="Banglore"></option>
                    <option value="satara"></option>
                    <option value="delhi"></option>
                </datalist>
            </div>

            <div class="w-full px-3 mb-6 mx-3">
                <label class="block tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-first-name">
                    Designation
                </label>
                <input
                    class="appearance-none block w-full text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name" type="text" placeholder="Enter designation" v-model="searchCriteria.designation">
            </div>
            <button
                class="ml-5 mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                @click="searchCandidates">
                Search Candidate
            </button>

        </div>
    </div>
</template>

  
<script>

export default {
    data() {
        return {
            searchCriteria: {
                skills: '',
                experienceFrom: '',
                experienceTo: '',
                location: '',
                designation: ''
            },
            candidates: [
                { id: 1, name: 'John Doe', companyName: 'infosys', designation: 'software Engineer', skills: 'JavaScript, HTML, CSS,sql', experienceLevel: 'Senior', location: 'Pune', experienceFrom: 2, experienceTo: 3, salary: 2.5 },
                { id: 2, name: 'Jane Smith', companyName: 'infosys', designation: 'full stack developer', skills: 'Python, SQL, Data Analysis', experienceLevel: 'Mid-level', location: 'Pune', experienceFrom: 2, experienceTo: 3, salary: 3.5 },
                { id: 3, name: 'Alex Johnson', companyName: 'infosys', designation: 'cloud Engineer', skills: 'Java, Spring, Hibernate', experienceLevel: 'Senior', location: 'London', experienceFrom: 7, experienceTo: 12, salary: 5.0 },
                // Add more candidate objects as needed
            ],
            filteredCandidates: [], // Array to store the filtered candidates
        };
    },
    methods: {
        searchCandidates() {
            
            const { skills, experienceFrom, experienceTo, location, designation } = this.searchCriteria;
            console.log(this.searchCriteria);
            // Check if any field is empty
            if (skills === '' || experienceFrom === '' || experienceTo === '' || location === '') {
                alert('Please enter values for all fields');
                return;
            }

            const searchKeywords = skills.toLowerCase().split(',').map(keyword => keyword.trim());

            const filteredCandidates = this.candidates.filter(candidate => {
                const candidateSkills = candidate.skills.toLowerCase().split(',').map(skill => skill.trim());
                const matchesSkills = searchKeywords.some(keyword => candidateSkills.includes(keyword));

                const withinExperienceRange =
                    candidate.experienceFrom >= parseInt(experienceFrom) &&
                    candidate.experienceTo <= parseInt(experienceTo);

                const matchesLocation = candidate.location.toLowerCase().includes(location.toLowerCase());
                const matchesDesignation = candidate.designation.toLowerCase().includes(designation.toLowerCase());

                return matchesSkills && withinExperienceRange && matchesLocation && matchesDesignation;
            });

            // Navigate to the DisplayCandidateProfile page with the filteredCandidates as query parameters
            this.$router.push({
                path: '/Employer/DisplayCandidateProfile',
                query: { candidates: JSON.stringify(filteredCandidates) },


            });
        },

    },
};
</script>
  
<style scoped></style>
  