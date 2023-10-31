<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="drawer">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            <div class="flex w-full bg-white shadow-md px-2">
                <div>
                    <div class="p-2 flex lg:hidden items-center">
                        <label for="my-drawer-3" class="py-2 md:pt-4 hover:scale-110 duration-300">
                            <img class="h-6 w-8 drawer-content" src="../assets/icons8-menu-90.png" alt="">
                        </label>
                    </div>
                </div>
                <div class="w-full">
                    <HKCLheader />

                </div>

            </div>

            <slot></slot>
            <HKCLfooter class="hidden md:block" />
        </div>
        <div class="drawer-side">
            <label for="my-drawer-3" class="drawer-overlay flex flex-col"></label>
            <div class="p-4 menu bg-white rounded w-3/4">
                <div class="flex text-black font-semibold text-lg flex-col  space-y-6 md:text-2xl pt-10 font-sans">
                    <div class="flex flex-col lg:hidden hover:bg-gray-300  rounded">
                        <a href="/" class="space-x-3 ml-1">
                            <span>Home</span>
                        </a>
                    </div>
                    <div class="flex flex-col lg:hidden hover:bg-gray-300 rounded">
                        <a href="/Employer/companyProfile" class="space-x-3 ml-1 flex items-center">
                            <span>View Profile</span>
                        </a>
                    </div>
                    <!-- <div class="flex flex-col md:hidden hover:bg-gray-300 rounded">
                        <a href="#" class="space-x-3 ml-1 flex items-center">
                            <span>Jobs</span>
                        </a>
                    </div> -->

                    <div class=" flex items-center rounded-md  duration-300 cursor-pointer" @click="toggleDropdown5">
                        <div class="flex justify-between w-full items-center">
                            <span class=" ml-1  font-bold">Account</span>
                            <span class="text-sm" :class="{ 'rotate-180': isDropdownOpen5 }">
                                <i class="fa fa-caret-down" style="font-size: 20px;" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                    <div class="text-left text-blue-500" :class="{ 'hidden': !isDropdownOpen5 }">
                        <a class="cursor-pointer px-1 hover:bg-white mt-1" href="/Employer/JobPostPrivate">Add account</a>
                        <div class=" bg-gray-300 h-[1px]"></div>
                        <a class="cursor-pointer px-1 hover:bg-white mt-1" href="/Employer/ManageJobs"></a>
                        <div class=" bg-gray-300 h-[1px]"></div>
                    </div>


                    <div class=" flex items-center rounded-md  duration-300 cursor-pointer " @click="toggleDropdown1">
                        <div class="flex justify-between w-full items-center">
                            <span class=" ml-1  font-bold">Search Resumes</span>
                            <span class="text-sm" :class="{ 'rotate-180': isDropdownOpen1 }">
                                <i class="fa fa-caret-down" style="font-size: 20px;" aria-hidden="true"></i>
                            </span>
                        </div>  
                    </div>
                    <div class="text-left text-blue-500" :class="{ 'hidden': !isDropdownOpen1 }">
                        <h1 class="cursor-pointer px-1 hover:bg-white  mt-1">Featured Resumes</h1>
                        <div class=" bg-gray-300 h-[1px]"></div>
                        <!-- <h1 class="cursor-pointer p-1 hover:bg-white  mt-1">Personal</h1>
            <h1 class="cursor-pointer p-1 hover:bg-white  mt-1">Friends</h1> -->
                    </div>


                    <div class=" flex items-center rounded-md  duration-300 cursor-pointer" @click="toggleDropdown3">
                        <div class="flex justify-between w-full items-center">
                            <span class="ml-1 font-bold">Reports & MIS</span>
                            <span class="text-sm" :class="{ 'rotate-180': isDropdownOpen3 }">
                                <i class="fa fa-caret-down" style="font-size: 20px;" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                    <div class="text-left text-blue-500" :class="{ 'hidden': !isDropdownOpen3 }">
                        <h1 class="cursor-pointer px-1 hover:bg-white  mt-1">Database Usage Reports</h1>
                        <div class=" bg-gray-300 h-[1px]"></div>
                        <h1 class="cursor-pointer px-1 hover:bg-white  mt-1">Login Reports</h1>
                        <div class=" bg-gray-300 h-[1px]"></div>
                    </div>

                    <div class=" flex items-center rounded-md  duration-300 cursor-pointer" @click="toggleDropdown4">
                        <div class="flex justify-between w-full items-center">
                            <span class=" ml-1  font-bold">Administration</span>
                            <span class="text-sm" :class="{ 'rotate-180': isDropdownOpen4 }">
                                <i class="fa fa-caret-down" style="font-size: 20px;" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                    <div class="text-left text-blue-500" :class="{ 'hidden': !isDropdownOpen4 }">
                        <h1 class="cursor-pointer px-1 hover:bg-white mt-1">Product Setting</h1>
                        <div class=" bg-gray-300 h-[1px]"></div>
                        <h1 class="cursor-pointer px-1 hover:bg-white mt-1">Change Password</h1>
                        <div class=" bg-gray-300 h-[1px]"></div>
                        <h1 class="cursor-pointer px-1 hover:bg-white mt-1">Usage Guidlines</h1>
                        <div class=" bg-gray-300 h-[1px]"></div>
                    </div>

                </div>
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
        toggleDropdown5() {
            this.isDropdownOpen5 = !this.isDropdownOpen5;
        },
        openSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
        },
    },
    data() {
        return {
            isDropdownOpen1: true,
            isDropdownOpen2: true,
            isDropdownOpen3: true,
            isDropdownOpen4: true,
            isDropdownOpen5: true,
            isSidebarOpen: false,
        };
    },
    mounted() {
        this.toggleDropdown1();
        this.toggleDropdown2();
        this.toggleDropdown3();
        this.toggleDropdown4();
        this.toggleDropdown5();
        this.openSidebar();
    },
};
</script>
