<template>
    <div>
        <div class="flex justify-center">
            <form class="w-full max-w-3xl my-10 p-5 shadow-md" @submit.prevent>
                <h1 class="text-left mx-5 text-2xl font-semibold">Post a Job</h1>
                <div class="md:flex  my-6">
                    <div class="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                        <label class="block tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-first-name">
                            Job title/Designation
                        </label>
                        <input
                            class="appearance-none block w-full text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name" type="text" placeholder="Mention the designation code" v-model="jobTitle">
                        <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6">
                        <label class="block tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-state">
                            Employment Type
                        </label>
                        <div class="relative">
                            <select
                                class="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-state" v-model="employmentType">
                                <option>Full Time,permanent</option>
                                <option>part-time</option>
                            </select>
                            <div
                                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-1/2 px-3  mb-6">
                    <label class="block  tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-state">
                        Work mode
                    </label>
                    <div class="relative">
                        <select v-model="workMode"
                            class="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-state">
                            <option>In office</option>
                            <option>Work from Home</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>




                <!-- Job description  -->
                <label class="block tracking-wide text-gray-700 text-sm font-bold mb-2 ml-4" for="grid-state">
                    Job description
                </label>

                <div class="w-auto max-w-6xl rounded-xl bg-white p-1 mx-3 text-black" ref="wysiwygContainer">
                    <div class="border border-gray-300 overflow-hidden rounded-md">
                        <div class="w-full flex border-b px-2 border-gray-300 text-xl text-gray-600">
                            <button
                                class="outline-none focus:outline-none border-r border-gray-200 w-10 h-10 hover:text-indigo-500 active:bg-gray-50"
                                @click="format('bold')">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                                    viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                    <path
                                        d="M0 64C0 46.3 14.3 32 32 32H80 96 224c70.7 0 128 57.3 128 128c0 31.3-11.3 60.1-30 82.3c37.1 22.4 62 63.1 62 109.7c0 70.7-57.3 128-128 128H96 80 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48V256 96H32C14.3 96 0 81.7 0 64zM224 224c35.3 0 64-28.7 64-64s-28.7-64-64-64H112V224H224zM112 288V416H256c35.3 0 64-28.7 64-64s-28.7-64-64-64H224 112z" />
                                </svg>
                            </button>
                            <!-- Add more formatting buttons here -->
                            <button
                                class="outline-none focus:outline-none border-r border-gray-200 w-10 h-10 hover:text-indigo-500 active:bg-gray-50"
                                @click="format('italic')">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                                    viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                    <path
                                        d="M320 48v32a16 16 0 0 1-16 16h-62.76l-80 320H208a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h62.76l80-320H112a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16z" />
                                </svg>
                            </button>
                            <button
                                class="outline-none focus:outline-none border-r border-gray-200 w-10 h-10 mr-1 hover:text-indigo-500 active:bg-gray-50"
                                @click="format('underline')">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                                    viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                    <path
                                        d="M16 64c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H128V224c0 53 43 96 96 96s96-43 96-96V96H304c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H384V224c0 88.4-71.6 160-160 160s-160-71.6-160-160V96H48C30.3 96 16 81.7 16 64zM0 448c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z" />
                                </svg>
                            </button>
                            <button
                                class="outline-none focus:outline-none border-l border-r border-gray-200 w-10 h-10 hover:text-indigo-500 active:bg-gray-50"
                                @click="format('formatBlock', 'P')">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                                    viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                    <path
                                        d="M192 32h64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384l0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-352H288V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H192c-88.4 0-160-71.6-160-160s71.6-160 160-160z" />
                                </svg>
                            </button>

                            <button
                                class="outline-none focus:outline-none border-l border-r border-gray-200 w-10 h-10 hover:text-indigo-500 active:bg-gray-50"
                                @click="format('insertUnorderedList')">
                                <i class="mdi mdi-format-list-bulleted"></i>
                            </button>
                            <button
                                class="outline-none focus:outline-none border-r border-gray-200 w-10 h-10 mr-1 hover:text-indigo-500 active:bg-gray-50"
                                @click="format('insertOrderedList')">
                                <i class="mdi mdi-format-list-numbered"></i>
                            </button>
                            <button
                                class="outline-none dd  border-l border-r border-gray-200 w-10 h-10 hover:text-indigo-500 active:bg-gray-50"
                                @click="format('justifyLeft')">
                                <i class="mdi mdi-format-align-left"></i>
                            </button>
                            <button
                                class="outline-none focus:outline-none border-r border-gray-200 w-10 h-10 hover:text-indigo-500 active:bg-gray-50"
                                @click="format('justifyCenter')">
                                <i class="mdi mdi-format-align-center"></i>
                            </button>
                            <button
                                class="outline-none focus:outline-none border-r border-gray-200 w-10 h-10 hover:text-indigo-500 active:bg-gray-50"
                                @click="format('justifyRight')">
                                <i class="mdi mdi-format-align-right"></i>
                            </button>
                        </div>
                        <div class="w-full">
                            <div class="content-editable w-full h-80 p-3 overflow-y-auto" ref="wysiwyg"
                                contenteditable="true" @input="updateHtmlContent"></div>
                        </div>
                    </div>
                </div>
                <!-- Job description ends here -->

                <div class="w-full md:w-1/2 px-3 mt-5 mb-6">
                    <label class="block  tracking-wide text-gray-700 text-sm ml-1 font-bold mb-2" for="grid-first-name2">
                        Key skills
                    </label>
                    <input
                        class="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        v-model="keySkill" id="grid-first-name2" type="text" placeholder="please add keyskills">
                    <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
                </div>

                <!-- experience starts -->
                <div class="w-full md:w-10/12 px-3 mb-6 relative my-3">
                    <label class="block  tracking-wide text-gray-700 text-sm font-bold ml-1  mb-2" for="grid-state">
                        Experience
                    </label>
                    <div class="flex">

                        <select data-te-select-init
                            class=" text-gray-700 border md:w-1/4  w-full rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            v-model="experiencefrom">
                            <option disabled>Min</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select> <span class="m-4">to</span>

                        <select data-te-select-init
                            class=" text-gray-700 border w-full md:w-1/4 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            v-model="experienceTo">
                            <option disabled>Max</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>
                    </div>
                </div>
                <!-- experience ends -->

                <!-- annual salary -->
                <div class="w-full md:w-10/12 px-3 mb-6 relative  my-3">
                    <label class="block tracking-wide text-gray-700 text-sm ml-1 font-bold mb-2">
                        Annual Salary Range
                    </label>
                    <div class="flex">
                        <select data-te-select-init
                            class=" text-gray-700 border md:w-1/4  w-full rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            v-model="salaryfrom">
                            <option disabled>Min</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select> <span class="m-4">to</span>
                        <select data-te-select-init
                            class=" text-gray-700 border md:w-1/4 w-full rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            v-model="salaryTo">
                            <option disabled>Max</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>
                    </div>
                </div>

                <!-- annual sal ends here -->

                <!--  -->
                <div class="w-full md:w-1/2 px-3 mb-6">
                    <label class="block tracking-wide text-gray-700 text-sm font-bold ml-1  mb-2" for="browser">
                        Location
                    </label>
                    <input list="browsers" name="browser" id="browser" placeholder="Add location"
                        class="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        v-model="location">
                    <datalist id="browsers">
                        <option value="pune"></option>
                        <option value="mumbai"></option>
                        <option value="Banglore"></option>
                        <option value="satara"></option>
                        <option value="delhi"></option>
                    </datalist>

                </div>
                <!-- industry -->

                <div class="w-full md:w-1/2 px-3 mb-6">
                    <label class="block tracking-wide text-gray-700 text-sm font-bold ml-1 mb-2" for="grid-state">
                        Industry
                    </label>
                    <div class="relative">
                        <select
                            class="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-state" v-model="industry">

                            <option>Accounting</option>
                            <option>Banking/Mortgage</option>
                            <option>Biotechnology/Greentech</option>
                            <option>Civic/Social Organization</option>
                            <option>Civil Engineering</option>
                            <option>Computer Software/Engineering</option>
                            <option>Electrical/Electronic Manufacturing</option>
                            <option>Executive Office</option>
                            <option>Financial Services</option>
                            <option>Information Technology/IT</option>
                            <option>Law Enforcement</option>
                            <option>Marketing/Advertising/Sales</option>
                            <option>Mechanical or Industrial Engineering</option>
                            <option>Pharmaceuticals</option>
                            <option>Primary/Secondary Education</option>
                            <option>Staffing/Recruiting</option>

                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <!-- preffered industry -->
                <div class="md:flex md:flex-row">
                    <div class="w-full md:w-1/2 px-3  mb-6 flex-col">
                        <label class="block tracking-wide text-gray-700 text-sm ml-1 font-bold mb-2" for="grid-state1">
                            Functional Area
                        </label>
                        <div class="relative">
                            <select
                                class="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-state1">
                                <option readonly>Add prefered industry</option>
                                <option>Accounting</option>
                                <option>Banking/Mortgage</option>
                                <option>Biotechnology/Greentech</option>
                                <option>Civic/Social Organization</option>
                                <option>Civil Engineering</option>
                                <option>Computer Software/Engineering</option>
                                <option>Electrical/Electronic Manufacturing</option>
                                <option>Executive Office</option>
                                <option>Financial Services</option>
                                <option>Information Technology/IT</option>
                                <option>Law Enforcement</option>
                                <option>Marketing/Advertising/Sales</option>
                                <option>Mechanical or Industrial Engineering</option>
                                <option>Pharmaceuticals</option>
                                <option>Primary/Secondary Education</option>
                                <option>Staffing/Recruiting</option>
                            </select>
                            <div
                                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                    </div>


                    <!-- Role -->
                    <div class="w-full md:w-1/3 px-3 mb-6">
                        <label class="block tracking-wide text-gray-700 text-sm font-bold ml-1 mb-2" for="grid-state">
                            Role
                        </label>
                        <div class="relative">
                            <select
                                class="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-state" v-model="role">
                                <option readonly>Add Department</option>
                                <option>Account</option>
                                <option>Sales</option>
                                <option>IT</option>
                                <option>Civil</option>
                                <option>HR</option>

                            </select>
                            <div
                                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Department -->
                <div class="w-full md:w-1/2 px-3 mb-6">
                    <label class="block tracking-wide text-gray-700 text-sm font-bold ml-1  mb-2" for="grid-state2">
                        Department
                    </label>
                    <div class="relative">
                        <select
                            class="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-state2" v-model="department">
                            <option readonly>Add Department</option>
                            <option>Account</option>
                            <option>Sales</option>
                            <option>IT</option>
                            <option>Civil</option>
                            <option>HR</option>

                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <!-- EDUCATION  -->

                <div class="relative w-full md:w-1/2  px-3 ">
                    <label class="block  tracking-wide text-gray-700 text-sm font-bold ml-1 mb-2" for="grid-state">
                        Education
                    </label>
                    <div class="flex">
                        <button @click="isOpen = !isOpen"
                            class="w-full text-left  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            Select Education
                        </button>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 py-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                    <div v-if="isOpen" class="absolute mt-2 bg-white shadow-lg rounded">
                        <div v-for="(group, index) in groups" v-bind:key="index">
                            <div class="py-2 px-4">
                                <div class="font-semibold">{{ group.label }}</div>
                                <div class="">
                                    <label v-for="option in group.options" :key="option.value" class="flex items-center">
                                        <input type="checkbox" v-model="selectedOptions" :value="option.value" class="mr-2">
                                        <span>{{ option.label }}</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="my-4 mx-5">
                    <span v-for="option in selectedOptions" :key="option"
                        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        {{ option }}
                        <button @click="removeOption(option)" class="ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                class="w-4 h-4 inline-block align-text-bottom">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </span>
                </div>



                <!-- walk in details -->
                <div class="">
                    <input type="checkbox" class="mx-6 mr-2" v-model="includeWalkInDetails" id="include-walk-in-details"
                        @select="toggleWalkInDetails">
                    <label for="include-walk-in-details text-sm">Include walk-in details</label>


                    <div class="walk-in-details-container" v-if="includeWalkInDetails">
                        <div class="md:flex md:flex-wrap w-full  my-6">
                            <div class="w-full md:w-1/3 px-3 mb-6 ">
                                <label class="block tracking-wide text-gray-700 text-xs font-bold  ml-1 mb-2"
                                    for="grid-first-name3">
                                    Walk-in start Date
                                </label>
                                <input
                                    class="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="grid-first-name3" type="date" placeholder="Choose star">
                            </div>
                            <!-- duration -->
                            <div class="w-full md:w-1/4 px-3 mb-6">
                                <label class="block tracking-wide text-gray-700 text-xs font-bold  ml-1 mb-2"
                                    for="grid-state7">
                                    Duration(Days)
                                </label>
                                <div class="relative">
                                    <select data-te-select-init
                                        class=" text-gray-700 border w-full rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        v-model="salaryfrom" id="grid-state7">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>

                                </div>
                            </div>


                            <div class="w-full md:w-1/3 px-3 mb-6">
                                <label class="block tracking-wide text-gray-700 text-xs font-bold ml-1 mb-2"
                                    for="grid-first-name4">
                                    Walk-in timings
                                </label>
                                <input
                                    class="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="grid-first-name4" type="time" placeholder="Mention the designation code">
                            </div>

                            <div class="w-full md:w-2/3 px-3 mb-6 venue">
                                <label class="block tracking-wide text-gray-700 text-sm ml-1 font-bold mb-2"
                                    for="grid-first-name5">
                                    Contact Person
                                </label>
                                <input
                                    class="appearance-none block w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="grid-first-name5" type="text" placeholder="Recriter name(if available)">
                            </div>
                            <div class="w-full md:w-1/3 px-3 mb-6">
                                <label class="block tracking-wide text-gray-700 text-sm font-bold ml-1 mb-2"
                                    for="grid-first-name6">
                                    Contact Number
                                </label>
                                <input
                                    class="appearance-none block w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="grid-first-name6" type="tel" placeholder="Add Mobile Number">
                            </div>

                            <div class=" venue px-3">
                                <label class="block tracking-wide text-gray-700 text-sm ml-1 font-bold mb-2"
                                    for="grid-first-name7">
                                    Venue
                                </label>
                                <textarea
                                    class="appearance-none block w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="grid-first-name7" type="text" placeholder=""></textarea>
                            </div>
                            <div class="w-full md:w-1/3 px-3">
                                <label class="block tracking-wide text-gray-700 text-sm font-bold ml-1 mb-2"
                                    for="grid-first-name8">
                                    Google map url
                                </label>
                                <input
                                    class="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="grid-first-name8" type="url" placeholder="Add url">
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <!-- walk in details ends here-->


                <!-- company name -->

                <div class="w-full md:w-1/2 px-3 mb-6  mt-4">
                    <label class="block tracking-wide text-gray-700 text-sm font-bold ml-1 mb-2" for="grid-first-name1">
                        Company Name
                    </label>
                    <input
                        class="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name1" type="text" placeholder="Add company name" v-model="companyName">
                </div>

                <!-- company details -->

                <label class="block tracking-wide text-gray-700 text-sm font-bold mb-2 ml-4" for="grid-state">
                    Company Details
                </label>

                <div class="w-auto max-w-6xl rounded-xl bg-white p-1 mx-3 text-black" ref="wysiwygContainer">
                    <div class="border border-gray-300 overflow-hidden rounded-md">
                        <div class="w-full flex border-b px-2 border-gray-300 text-xl text-gray-600">
                            <button
                                class="outline-none focus:outline-none border-r border-gray-200 w-10 h-10 hover:text-indigo-500 active:bg-gray-50"
                                @click="format('bold')">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                                    viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                    <path
                                        d="M0 64C0 46.3 14.3 32 32 32H80 96 224c70.7 0 128 57.3 128 128c0 31.3-11.3 60.1-30 82.3c37.1 22.4 62 63.1 62 109.7c0 70.7-57.3 128-128 128H96 80 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48V256 96H32C14.3 96 0 81.7 0 64zM224 224c35.3 0 64-28.7 64-64s-28.7-64-64-64H112V224H224zM112 288V416H256c35.3 0 64-28.7 64-64s-28.7-64-64-64H224 112z" />
                                </svg>
                            </button>
                            <!-- Add more formatting buttons here -->
                            <button
                                class="outline-none focus:outline-none border-r border-gray-200 w-10 h-10 hover:text-indigo-500 active:bg-gray-50"
                                @click="format('italic')">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                                    viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                    <path
                                        d="M320 48v32a16 16 0 0 1-16 16h-62.76l-80 320H208a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h62.76l80-320H112a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16z" />
                                </svg>
                            </button>
                            <button
                                class="outline-none focus:outline-none border-r border-gray-200 w-10 h-10 mr-1 hover:text-indigo-500 active:bg-gray-50"
                                @click="format('underline')">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                                    viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                    <path
                                        d="M16 64c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H128V224c0 53 43 96 96 96s96-43 96-96V96H304c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H384V224c0 88.4-71.6 160-160 160s-160-71.6-160-160V96H48C30.3 96 16 81.7 16 64zM0 448c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z" />
                                </svg>
                            </button>
                            <button
                                class="outline-none focus:outline-none border-l border-r border-gray-200 w-10 h-10 hover:text-indigo-500 active:bg-gray-50"
                                @click="format('formatBlock', 'P')">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                                    viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                    <path
                                        d="M192 32h64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384l0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-352H288V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H192c-88.4 0-160-71.6-160-160s71.6-160 160-160z" />
                                </svg>
                            </button>

                            <button
                                class="outline-none focus:outline-none border-l border-r border-gray-200 w-10 h-10 hover:text-indigo-500 active:bg-gray-50"
                                @click="format('insertUnorderedList')">
                                <i class="mdi mdi-format-list-bulleted"></i>
                            </button>
                            <button
                                class="outline-none focus:outline-none border-r border-gray-200 w-10 h-10 mr-1 hover:text-indigo-500 active:bg-gray-50"
                                @click="format('insertOrderedList')">
                                <i class="mdi mdi-format-list-numbered"></i>
                            </button>
                            <button
                                class="outline-none dd  border-l border-r border-gray-200 w-10 h-10 hover:text-indigo-500 active:bg-gray-50"
                                @click="format('justifyLeft')">
                                <i class="mdi mdi-format-align-left"></i>
                            </button>
                            <button
                                class="outline-none focus:outline-none border-r border-gray-200 w-10 h-10 hover:text-indigo-500 active:bg-gray-50"
                                @click="format('justifyCenter')">
                                <i class="mdi mdi-format-align-center"></i>
                            </button>
                            <button
                                class="outline-none focus:outline-none border-r border-gray-200 w-10 h-10 hover:text-indigo-500 active:bg-gray-50"
                                @click="format('justifyRight')">
                                <i class="mdi mdi-format-align-right"></i>
                            </button>
                        </div>
                        <div class="w-full">
                            <div class="content-editable w-full h-80 p-3 overflow-y-auto" ref="wysiwyg1"
                                contenteditable="true" @input="updateHtmlContent1"></div>
                        </div>
                    </div>
                </div>

                <!-- company details ends here -->

                <div class="flex justify-between ml-4 mt-6">
                    <p class=" font-bold">Recruiter Details </p>
                    <div class="flex">
                        <input type="checkbox" class="mr-2">
                        <span class="mr-3">Show Recruiter Details</span>
                    </div>
                </div>
                <p class="ml-4 text-xs mt-4">This details will not be visible to candidates</p>
                <div>
                    <p class="ml-4">Jonn abc</p>
                    <p class="ml-4">Company Recruiter,xyz pvt ltd</p>
                </div>
                <!--  -->
                <!-- Candidate Questions -->
                <h3 class="question-heading ml-4 text-sm font-semibold">Add questions for candidates</h3>
                <div v-for="(question, questionIndex) in questions" :key="questionIndex"
                    class="question-container mx-3 mt-2">
                    <div class="form-field">
                        <label class="form-label text-sm">Question:</label>
                        <input class="form-input" type="text" v-model="question.text">
                    </div>

                    <div class="form-field">
                        <label class="form-label text-sm">Question Type:</label>
                        <select class="form-select" v-model="question.type">
                            <option value="text">Text</option>
                            <option value="multiple_choice">Multiple Choice</option>
                        </select>
                    </div>

                    <!-- Additional options for multiple choice questions -->
                    <div v-if="question.type === 'multiple_choice'" class="choices-container">
                        <label class="form-label">Answer Choices:</label>
                        <input class="form-input" type="text" v-for="(choice, choiceIndex) in question.choices"
                            :key="choiceIndex" v-model="question.choices[choiceIndex]">
                        <button class="add-choice-btn text-sm" @click="addChoice(questionIndex)">Add
                            Choice</button>
                    </div>

                    <div class="flex justify-center">
                        <button class="remove-question-btn text-sm" @click="removeQuestion(questionIndex)">Remove
                            Question</button>
                    </div>
                </div>

                <div class="flex justify-center">
                    <button class="bg-blue-500 text-white mt-2 rounded-md px-4 mr-5 p-1" @click="addQuestion">Add
                        Question</button>
                    <button class="bg-blue-500 text-white mt-2 rounded-md px-4 " @click="submitForm">Submit</button>
                </div>

                <div class="flex justify-center">
                    <button
                        class="mt-6 bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 border border-blue-700 rounded-md"
                        @click="submitForm">
                        Previw & Post a Job
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            htmlContent: ' <b> Welcome Hello World!Welcome to the pure AlpineJS and Tailwind WYSIWYG.</b>',
            htmlContent1: 'Welcome Hello World!Welcome to the pure AlpineJS and Tailwind WYSIWYG.',
            isOpen: false,
            includeWalkInDetails: false,
            questions: [],
            jobTitle: '',
            employmentType: '',
            workMode: '',
            jobDetail: '',
            keySkill: '',
            experiencefrom: '',
            experienceTo: '',
            salaryfrom: null,
            salaryTo: null,
            location: '',
            industry: '',
            functionalArea: '',
            role: '',
            department: '',
            companyName: '',
            companyDetails: '',
            education: '',

            groups: [
                {
                    label: 'Graduation Not Required',
                    options: [
                        { label: 'Graduation Not Required', value: 'Graduation Not Required' },
                    ]
                },
                {
                    label: 'Graduation',
                    showOptions: false,
                    options: [
                        { label: 'Any Graduate', value: 'Any Graduate' },
                        { label: 'B.A', value: 'B.A' },
                        { label: 'B.C.A', value: 'B.C.A' },
                        { label: 'B.E', value: 'B.E' }

                    ]
                },
                {
                    label: 'Postgraduate',
                    showOptions: false,
                    options: [
                        { label: 'Any Postgraduate', value: 'Any Postgraduate' },
                        { label: 'M.com', value: 'M.com' },
                        { label: 'MCA', value: 'MCA' }
                    ]
                },
                {
                    label: 'Doctoral/Ph.d',
                    showOptions: false,
                    options: [
                        { label: 'Option 4', value: 'option4' },
                        { label: 'Option 5', value: 'option5' },
                        { label: 'Option 6', value: 'option6' }
                    ]
                },

            ],
            selectedOptions: []
        };
    },
    mounted() {
        const wysiwyg = this.$refs.wysiwyg;
        wysiwyg.innerHTML = this.htmlContent;
        const wysiwyg1 = this.$refs.wysiwyg1;
        wysiwyg1.innerHTML = this.htmlContent1;
    },
    methods: {
        format(cmd, param = null) {
            document.execCommand(cmd, false, param);
        },
        updateHtmlContent() {
            this.htmlContent = this.$refs.wysiwyg.innerHTML;
            this.$root.content = this.htmlContent;
        },
        updateHtmlContent1() {
            this.htmlContent1 = this.$refs.wysiwyg1.innerHTML;
            this.$root.content1 = this.htmlContent1;
        },

        removeOption(option) {
            this.selectedOptions = this.selectedOptions.filter((item) => item !== option);
            this.checkboxesUncheck(option);
        },
        checkboxesUncheck(option) {
            const checkboxes = document.querySelectorAll('.dropdown-content input[type="checkbox"]');
            checkboxes.forEach((checkbox) => {
                if (checkbox.value === option) {
                    checkbox.checked = false;
                }
            });
        },
        addQuestion() {
            this.questions.push({
                text: '',
                type: 'text',
                choices: []
            });
        },
        removeQuestion(index) {
            this.questions.splice(index, 1);
        },
        addChoice(questionIndex) {
            this.questions[questionIndex].choices.push('');
        },
        toggleWalkInDetails() {
            this.includeWalkInDetails = !this.includeWalkInDetails;
        },
        submitForm() {
            // Get the form data
            const jobTitle = this.jobTitle;
            const employmentType = this.employmentType;
            const workMode = this.workMode;
            const companyName = this.companyName;
            const companyDetails = this.companyDetails;
            const experiencefrom = this.experiencefrom;
            const experienceTo = this.experienceTo;
            const salaryfrom = this.salaryfrom;
            const salaryTo = this.salaryTo;
            const location = this.location;
            const education = this.selectedOptions;
            const keyskills = this.keySkill;
            const industry = this.industry;
            const department = this.department;
            const role = this.role;

            // Navigate to another page and pass the form data as route query parameters
            this.$router.push({
                path: '/Employer/PostJobdetails',
                query: {
                    jobTitle,
                    employmentType,
                    workMode,
                    companyName,
                    companyDetails,
                    experiencefrom,
                    experienceTo,
                    salaryfrom,
                    salaryTo,
                    location,
                    education,
                    keyskills,
                    industry,
                    department,
                    role
                }
            });
        },

    },
};
</script>

<style  scoped>
@media screen and (min-width: 480px) {
    .venue {
        width: 100%;
    }
}

@media screen and (min-width: 768px) {
    .venue {
        width: 59%;
    }
}

.dd:focus {
    outline: none;
}

.job-posting-form {
    max-width: 500px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
}

.form-field {
    margin-bottom: 10px;
}

.form-label {
    font-weight: bold;
}

.form-input,
.form-textarea,
.form-select {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.question-heading {
    margin-top: 20px;
}

.question-container {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 10px;
}

.choices-container {
    margin-top: 10px;
}

.add-choice-btn {
    margin-top: 5px;
    padding: 3px 8px;
}

.remove-question-btn,
.add-question-btn,
.submit-btn {
    margin-top: 10px;
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.remove-question-btn {
    background-color: #dc3545;
}

.add-question-btn:hover,
.submit-btn:hover {
    background-color: #0056b3;
}
</style>
