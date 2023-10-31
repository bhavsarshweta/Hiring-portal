<template>
    <div>
        <div class="button-container mt-5">
            <button class="btn-sm bg-slate-200 rounded-full " @click="deleteModalData = true">Work mode</button>
            <button class="btn-sm bg-slate-200 rounded-full" @click="deleteModalData = true">Department</button>
            <button class="btn-sm bg-slate-200 rounded-full" @click="deleteModalData = true">Location</button>
            <button class="btn-sm bg-slate-200 rounded-full" @click="deleteModalData = true">Experience</button>
            <button class="btn-sm bg-slate-200 rounded-full" @click="deleteModalData = true">Salary</button>
            <button class="btn-sm bg-slate-200 rounded-full" @click="deleteModalData = true">Top companies</button>
            <button class="btn-sm bg-slate-200 rounded-full" @click="deleteModalData = true">Industry</button>
            <button class="btn-sm bg-slate-200 rounded-full" @click="deleteModalData = true">Role</button>
            <button class="btn-sm bg-slate-200 rounded-full" @click="deleteModalData = true">Eduaction</button>
            <button class="btn-sm bg-slate-200 rounded-full" @click="deleteModalData = true">Freshness</button>
            <button class="btn-sm bg-slate-200 rounded-full" @click="deleteModalData = true">Sort By</button>
        </div>
        <div v-if="deleteModalData" class="modal1">
            <div class="modal-box">
                <h1 class="font-semibold ml-2 mt-5 mb-5">Filter Jobs</h1>
                <div class="selected-options-scroll-container">
                    <div class="selected-options-container">
                        <div v-for="(option, index) in selectedOptions" :key="index"
                            class="selected-option mb-5 rounded-md">
                            <span>{{ option }}</span>
                            <button @click="removeOption(index)" class="remove-button">X</button>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="flex">
                    <nav class="mt-5 text-left" style="height:500px;">
                        <ul class="text-sm sidebar-list">
                            <li :class="{ 'font-bold': activeSection === 'section-1' }">
                                <a @click="selectSection('section-1')">Work mode</a>
                            </li>
                            <hr>
                            <li :class="{ 'font-bold': activeSection === 'section-2' }">
                                <a @click="selectSection('section-2')">Department</a>
                            </li>
                            <hr>
                            <li :class="{ 'font-bold': activeSection === 'section-3' }">
                                <a @click="selectSection('section-3')">Location</a>
                            </li>
                            <hr>
                            <li :class="{ 'font-bold': activeSection === 'section-4' }">
                                <a @click="selectSection('section-4')">Experience</a>
                            </li>
                            <hr>
                            <li :class="{ 'font-bold': activeSection === 'section-5' }">
                                <a @click="selectSection('section-5')">Salary</a>
                            </li>
                            <hr>
                            <li :class="{ 'font-bold': activeSection === 'section-6' }">
                                <a @click="selectSection('section-6')">Top companies</a>
                            </li>
                            <hr>
                            <li :class="{ 'font-bold': activeSection === 'section-7' }">
                                <a @click="selectSection('section-7')">Industry</a>
                            </li>
                            <hr>
                            <li :class="{ 'font-bold': activeSection === 'section-8' }">
                                <a @click="selectSection('section-8')">Role</a>
                            </li>
                            <hr>
                            <li :class="{ 'font-bold': activeSection === 'section-9' }">
                                <a @click="selectSection('section-9')">Education</a>
                            </li>
                            <hr>
                            <li :class="{ 'font-bold': activeSection === 'section-10' }">
                                <a @click="selectSection('section-10')">Freshness</a>
                            </li>
                            <hr>
                            <li :class="{ 'font-bold': activeSection === 'section-11' }">
                                <a @click="selectSection('section-11')">Sort by</a>
                            </li>
                            <hr>
                        </ul>
                    </nav>
                    <main class="main-content">
                        <section id="section-1" v-show="activeSection === 'section-1'" class="ml-10 mr-10 bg-white">
                            <h1 class="font-bold mb-2">Work mode</h1>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Work from office"
                                @change="handleCheckboxChange">
                            <label for="vehicle1">Work from office</label><br>
                            <input type="checkbox" id="vehicle2" name="vehicle2" value="Remote"
                                @change="handleCheckboxChange">
                            <label for="vehicle2">Remote</label><br>
                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Hybrid"
                                @change="handleCheckboxChange">
                            <label for="vehicle3">Hybrid</label><br>
                            <input type="checkbox" id="vehicle4" name="vehicle4" value="Temp. WFH due to covid"
                                @change="handleCheckboxChange">
                            <label for="vehicle4">Temp. WFH due to covid</label><br>
                        </section>

                        <section id="section-2" v-show="activeSection === 'section-2'" class="ml-10 mr-10 bg-white">
                            <h1 class="font-bold mb-2">Department</h1>
                            <input type="checkbox" id="vehicle9" name="vehicle10" value="Engineering-Software & QA"
                                @change="handleCheckboxChange">
                            <label for="vehicle10">Engineering-Software & QA</label><br>
                            <input type="checkbox" id="vehicle11" name="vehicle11" value="Teaching & Training"
                                @change="handleCheckboxChange">
                            <label for="vehicle11">Teaching & Training</label><br>
                            <input type="checkbox" id="vehicle12" name="vehicle7" value="Data science & Analytics"
                                @change="handleCheckboxChange">
                            <label for="vehicle12">Data science & Analytics</label><br>
                            <input type="checkbox" id="vehicle13" name="vehicle8" value="IT & Information security"
                                @change="handleCheckboxChange">
                            <label for="vehicle13">IT & Information security</label><br>
                            <input type="checkbox" id="vehicle14" name="vehicle8" value="Sales & Business Development"
                                @change="handleCheckboxChange">
                            <label for="vehicle14">Sales & Business Development</label><br>
                            <input type="checkbox" id="vehicle15" name="vehicle8" value="Research & Development"
                                @change="handleCheckboxChange">
                            <label for="vehicle15">Research & Development</label><br>
                            <input type="checkbox" id="vehicle16" name="vehicle8" value="UX, Design & Architecture"
                                @change="handleCheckboxChange">
                            <label for="vehicle16">UX, Design & Architecture</label><br>
                        </section>

                        <section id="section-3" v-show="activeSection === 'section-3'" class="ml-10 mt-5 mr-10 bg-white">
                            <h1 class="font-bold mb-2">Location</h1>
                            <input type="checkbox" id="vehicle5" name="vehicle10" value="Pune"
                                @change="handleCheckboxChange">
                            <label for="vehicle5">Pune</label><br>
                            <input type="checkbox" id="vehicle6" name="vehicle11" value="Mumbai"
                                @change="handleCheckboxChange">
                            <label for="vehicle6">Mumbai</label><br>
                            <input type="checkbox" id="vehicle7" name="vehicle7" value="Chennai"
                                @change="handleCheckboxChange">
                            <label for="vehicle7">Chennai</label><br>
                            <input type="checkbox" id="vehicle8" name="vehicle8" value="New Delhi"
                                @change="handleCheckboxChange">
                            <label for="vehicle8">New Delhi</label><br>
                            <input type="checkbox" id="vehicle9" name="vehicle8" value="Bangalore"
                                @change="handleCheckboxChange">
                            <label for="vehicle9">Bangalore</label><br>
                        </section>
                    </main>
                </div>
                <div class="modal-action">
                    <button class="btn" @click="updateUser()">Apply</button>
                    <button class="btn" @click="deleteModalData = false">close</button>
                </div>
            </div>

        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            activeSection: 'section-1',
            selectedOptions: [],
            deleteModalData: false
        }
    },
    methods: {
        selectSection(section) {
            this.activeSection = section;
        },
        handleCheckboxChange(event) {
            const value = event.target.value;
            if (event.target.checked) {
                this.selectedOptions.push(value);
            } else {
                const index = this.selectedOptions.indexOf(value);
                if (index !== -1) {
                    this.selectedOptions.splice(index, 1);
                }
            }
        },
        removeOption(index) {
            const option = this.selectedOptions[index];
            const checkboxes = document.querySelectorAll(`input[value="${option}"]`);
            checkboxes.forEach((checkbox) => {
                checkbox.checked = false;
            });
            this.selectedOptions.splice(index, 1);
        },

    }
}
</script>
  
<style scoped>
h1 {
    font: bold;
}
nav {
    white-space: nowrap;
    background: white;
    margin-bottom: 10px;
    border-radius: 20px;
}
nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
nav ul li a {
    display: block;
    padding: 0.5rem 1rem;
    color: rgb(5, 0, 0);
    text-decoration: none;
}
section {
    padding: 1rem;
    margin: 0 0 2rem 0;
    border-radius: 20px;
}
.main-content {
    transition: margin-top 0.3s;
    /* Add transition for smooth animation */
}
.main-content {
    padding-top: 24px;
    /* Add padding to create space between header and content */
}
input {
    margin-right: 10px;
}
.selected-options-container {
    margin-top: 1rem;
}
.selected-option {
    display: inline-flex;
    align-items: center;
    background-color: #e2e8f0;
    padding: 0.25rem 0.5rem;
    margin-right: 1rem;
    border-radius: 0.375rem;
}
.remove-button {
    margin-left: 0.25rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #718096;
}
.selected-options-scroll-container {
    overflow-x: auto;
    white-space:nowrap;
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
}
.button-container {
    display: flex;
    overflow-x: auto;
    scrollbar-width: none;/* Firefox */
    -ms-overflow-style: none;/* IE and Edge */
}
.button-container::-webkit-scrollbar {
    width: 0;/* Chrome, Safari, and Opera */
}
.button-container button {
    flex-shrink: 0;/* Prevent buttons from shrinking */
    white-space: nowrap;/* Prevent buttons from wrapping to next line */
    margin-right: 10px;
}

.button-container button:last-child {
    margin-right: 0;
}</style>