<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="drawer">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content bg-gray-100">
            <div class="flex w-full bg-white shadow-md px-2">
                <div>
                    <div class="p-2 flex md:hidden items">
                        <label for="my-drawer-3" class="py-2 hover:scale-110 duration-300">
                            <img class="h-6 w-8 drawer-content" src="../assets/icons8-menu-90.png" alt="">
                        </label>
                    </div>
                </div>
                <div class="w-full">
                    <HKCLHeaderNew class="sticky top-0"/>
                </div>
            </div>

             <slot></slot>
             <HKCLfooter class="hidden md:block"/>
        </div>
        <div class="drawer-side">
            <label for="my-drawer-3" class="drawer-overlay flex flex-col"></label>
            <div class="p-4 menu bg-white rounded w-3/4">
                <div
                    class="flex text-black font-semibold text-lg flex-col  space-y-8 md:text-2xl pt-14 font-sans">
                    <div class="flex flex-col hover:bg-gray-300 p-2 rounded">
                        <a href="/" class="space-x-3">
                            <i class="fa fa-home scale-110" />
                            <span>Home</span>
                        </a>
                    </div>
                    <div class="flex flex-col hover:bg-gray-300 p-2 rounded">
                        <a href="#" class="space-x-3 flex items-center">
                            <i class="fa fa-suitcase scale-110" />
                            <span>Jobs</span>
                        </a>
                    </div>
                    <div class="flex flex-col hover:bg-gray-300 p-2 rounded">
                        <a href="/" class="space-x-3 flex items-center">
                            <i class="fa fa-suitcase scale-110" />
                            <span>View Profile</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
