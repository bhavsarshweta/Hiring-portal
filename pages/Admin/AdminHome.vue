
<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <div class="grid md:grid-cols-4 grid-cols-2 text-center ">
        <div class="lg:block hidden">

            <div class="sidebar lg:left-0 ml-10 p-2 w-10/12 overflow-y-auto text-center mt-8 mb-8 bg-gray-200">

                <div class="p-1 mt-3 flex items-center rounded-md  duration-300 cursor-pointer text-white bg-gray-500"
                    @click="toggleDropdown1">
                    <div class="flex justify-between w-full items-center">
                        <span class=" ml-1 text-white font-bold">Accounts</span>
                        <span class="text-sm" :class="{ 'rotate-180': isDropdownOpen1 }">
                            <i class="fa fa-caret-down" style="font-size: 20px;" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>
                <div class="text-left text-blue-500" :class="{ 'hidden': !isDropdownOpen1 }">
                    <h1 class="cursor-pointer px-1 block hover:bg-white mt-1" v-on:click="activetab = 1"
                        v-bind:class="[activetab === 1 ? 'active' : '']">Create account</h1>
                    <h1 class="cursor-pointer px-1 block hover:bg-white mt-1" v-on:click="activetab = 2"
                        v-bind:class="[activetab === 2 ? 'active' : '']">Modify account</h1>
                    <a class="cursor-pointer px-1 block hover:bg-white mt-1" href="#">Deactivate
                        account</a>
                    <div class=" bg-gray-300 h-[1px]"></div>

                </div>
                <!--  -->
                <div class="p-1 mt-3 flex items-center rounded-md  duration-300 cursor-pointer text-white bg-gray-500"
                    @click="toggleDropdown3">
                    <div class="flex justify-between w-full items-center">
                        <span class="ml-1 text-white font-bold">Content Management</span>
                        <span class="text-sm" :class="{ 'rotate-180': isDropdownOpen3 }">
                            <i class="fa fa-caret-down" style="font-size: 20px;" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>
                <div class="text-left text-blue-500" :class="{ 'hidden': !isDropdownOpen3 }">
                    <a class="cursor-pointer px-1 block hover:bg-white mt-1" href="#">View job
                        categories</a>
                    <a class="cursor-pointer px-1 block hover:bg-white mt-1" href="#">Add job
                        categories</a>
                    <a class="cursor-pointer px-1 block hover:bg-white mt-1" href="#">View industries</a>
                    <a class="cursor-pointer px-1 block hover:bg-white mt-1" href="#">Add industries</a>
                    <div class=" bg-gray-300 h-[1px]"></div>
                </div>
                <!--  -->

                <div class="p-1 mt-3 flex items-center rounded-md  duration-300 cursor-pointer  text-white bg-gray-500"
                    @click="toggleDropdown4">
                    <div class="flex justify-between w-full items-center">
                        <span class=" ml-1 text-white font-bold">Job Listing Management</span>
                        <span class="text-sm" :class="{ 'rotate-180': isDropdownOpen4 }">
                            <i class="fa fa-caret-down" style="font-size: 20px;" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>
                <div class="text-left text-blue-500" :class="{ 'hidden': !isDropdownOpen4 }">
                    <a class="cursor-pointer px-1 hover:bg-white mt-1" href="#">Review job
                        postings</a>
                    <div class=" bg-gray-300 h-[1px]"></div>
                </div>
                <!--  -->
            </div>
        </div>
        <div class="... col-span-3">
            <div v-if="activetab === 1" class="tabcontent">
                <create-account />
            </div>
            <div v-if="activetab === 2" class="tabcontent">
                <display-account/>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    methods: {
        toggleDropdown1() {
            this.isDropdownOpen1 = !this.isDropdownOpen1;
        },
        toggleDropdown2() {
            this.isDropdownOpen2 = !this.isDropdownOpen2;
        },
        toggleDropdown3() {
            this.isDropdownOpen3 = !this.isDropdownOpen3;
        },
        toggleDropdown4() {
            this.isDropdownOpen4 = !this.isDropdownOpen4;
        },
        openSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
        },
    },
    data() {
        return {
            isDropdownOpen1: false,
            isDropdownOpen2: false,
            isDropdownOpen3: false,
            isDropdownOpen4: false,
            isSidebarOpen: false,
            activetab:1
        };
    },
    mounted() {
        this.toggleDropdown1();
        this.toggleDropdown2();
        this.toggleDropdown3();
        this.toggleDropdown4();
        this.openSidebar();
    },
};
</script>
  
<style scoped></style>
  







