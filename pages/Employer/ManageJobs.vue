<template>
    <div>

        <body class="bg-gray-100 ">
            <div class="container hidden md:block mx-auto my-4">
                <form class="border border-gray-300 rounded-lg p-4 w-full">
                    <h1 class="mb-2 text-center font-semibold">Jobs & Responses</h1>
                    <hr>
                    <div class="flex  items-center justify-between mb-4 mt-4">
                        <div class="flex items-center">
                            <button
                                class="mr-2 p-1 text-xs font-semibold rounded-md border border-gray-500">Refresh</button>
                            <button class="mr-2 p-1 text-xs font-semibold rounded-md border border-gray-500">Share</button>
                            <button
                                class="mr-2 p-1 text-xs font-semibold rounded-md border border-gray-500">Unshare</button>
                            <button class="mr-2 p-1 text-xs font-semibold rounded-md border border-gray-500">Remove</button>
                            <button class="mr-2   p-1 text-xs font-semibold rounded-md border border-gray-500">Invite
                                Referrals</button>
                        </div>
                        <div class="flex  flex-row">
                            <div class="flex items-center mr-2 text-xs">
                                <label for="postedBy" class="mr-4 text-xs font-bold">Posted By:</label>
                                <select id="postedBy" class="mr-2 text-xs">
                                    <option value="posted">Posted By</option>
                                    <option value="author">Author</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>

                            <div class="flex items-center mr-2 text-xs">
                                <label for="postedBy" class="mr-2 text-xs font-bold">Status:</label>
                                <select class="mr-2">
                                    <option value="open">Open</option>
                                    <option value="closed">Closed</option>
                                    <option value="pending">Pending</option>
                                </select>
                            </div>
                            <div class="flex items-center mr-2 text-xs">
                                <label for="postedBy" class="mr-2 text-xs font-bold">Show:</label>
                                <select>
                                    <option value="all">Show All</option>
                                    <option value="recent">Recent</option>
                                    <option value="archived">Archived</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <table class="mt-2 w-full overflow-auto ">
                        <thead>
                            <tr>
                                <th class="py-2 text-sm">Job Title</th>
                                <th class="py-2 text-sm">Responses</th>
                                <th class="py-2 text-sm">Posted By</th>
                                <th class="py-2 text-sm">Posted Date</th>
                            </tr>
                        </thead>
                        <hr>
                        <tbody>
                            <!-- Add table rows with data here -->
                            <tr>
                                <td class="text-sm py-2 text-center"><input type="checkbox" class="mr-2" />Job|Linux
                                    Administrator+Azure</td>
                                <td class="text-sm py-2 text-center">353</td>
                                <td class="text-sm py-2 text-center">hr@gmail.com</td>
                                <td class="text-sm py-2 text-center">13/04/2022</td>
                            </tr>
                            <tr>
                                <td class="text-sm py-2 text-center"><input type="checkbox" class="mr-2" />Job|Linux
                                    Administrator+Azure</td>
                                <td class="text-sm py-2 text-center">353</td>
                                <td class="text-sm py-2 text-center">hr@gmail.com</td>
                                <td class="text-sm py-2 text-center">13/04/2022</td>
                            </tr>
                            <tr>
                                <td class="text-sm py-2 text-center"><input type="checkbox" class="mr-2" />Job|Linux
                                    Administrator+Azure</td>
                                <td class="text-sm py-2 text-center">353</td>
                                <td class="text-sm py-2 text-center">hr@gmail.com</td>
                                <td class="text-sm py-2 text-center">13/04/2022</td>
                            </tr>
                            <tr>
                                <td class="text-sm py-2 text-center"><input type="checkbox" class="mr-2" />Job|Linux
                                    Administrator+Azure</td>
                                <td class="text-sm py-2 text-center">353</td>
                                <td class="text-sm py-2 text-center">hr@gmail.com</td>
                                <td class="text-sm py-2 text-center">13/04/2022</td>
                            </tr>
                            <tr>
                                <td class="text-sm py-2 text-center"><input type="checkbox" class="mr-2" />Job|Linux
                                    Administrator+Azure</td>
                                <td class="text-sm py-2 text-center">353</td>
                                <td class="text-sm py-2 text-center">hr@gmail.com</td>
                                <td class="text-sm py-2 text-center">13/04/2022</td>
                            </tr>


                        </tbody>
                    </table>
                    <!-- <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button> -->
                </form>


            </div>
            <!-- <This is  Mobile Screeen Code Mobile Responsive Screen  It Start Form Here -->

            <div class="container block md:hidden  my-4">
                <form class="border border-gray-300 rounded-lg p-4 ml-4 w-11/12">
                    <h1 class="mb-2 text-center font-semibold">Jobs & Responses</h1>
                    <hr>
                    <div class="flex  items-center justify-between mb-4 mt-4">
                        <div class="flex items-center">
                            <button
                                class="mr-2 p-1 text-xs font-semibold rounded-md border border-gray-500">Refresh</button>
                            <button class="mr-2 p-1 text-xs font-semibold rounded-md border border-gray-500">Share</button>
                            <button
                                class="mr-2 p-1 text-xs font-semibold rounded-md border border-gray-500">Unshare</button>
                            <button class="mr-2 p-1 text-xs font-semibold rounded-md border border-gray-500">Remove</button>
                            <button class="mr-2 p-1 text-xs font-semibold rounded-md border border-gray-500">Invite
                                Referrals</button>
                        </div>
                    </div>
                    <div>
                        <div class="flex  button-container  whitespace-nowrap ">
                            <div class="flex mr-2">
                                <label for="postedBy" class="mr-2 text-xs font-bold">Posted By:</label>
                                <select id="postedBy" class="mr-2 text-xs">
                                    <option value="posted">Posted By</option>
                                    <option value="author">Author</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>

                            <div class="flex items-center mr-2 text-xs">
                                <label for="postedBy" class="mr-2 text-xs font-bold">Status:</label>
                                <select class="mr-2">
                                    <option value="open">Open</option>
                                    <option value="closed">Closed</option>
                                    <option value="pending">Pending</option>
                                </select>
                            </div>
                            <div class="flex items-center mr-2 text-xs">
                                <label for="postedBy" class="mr-2 text-xs font-bold">Show:</label>
                                <select>
                                    <option value="all">Show All</option>
                                    <option value="recent">Recent</option>
                                    <option value="archived">Archived</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="overflow-auto">
                        <table class="mt-2  table-auto w-full">
                            <thead>
                                <tr>
                                    <th class="py-2 text-sm">Job Title</th>
                                    <th class="py-2 text-sm">Responses</th>
                                    <th class="py-2 text-sm">Posted By</th>
                                    <th class="py-2 text-sm">Posted Date</th>
                                </tr>
                            </thead>
                            <hr>
                            <tbody>
                                <!-- Add table rows with data here -->
                                <tr>
                                    <td class="text-sm py-2 text-center"><input type="checkbox" class="mr-2" />Job|Linux
                                        Administrator+Azure</td>
                                    <td class="text-sm py-2 px-6 text-center">353</td>
                                    <td class="text-sm py-2 px-6 text-center">hr@gmail.com</td>
                                    <td class="text-sm py-2 px-6 text-center">13/04/2022</td>
                                </tr>
                                <tr>
                                    <td class="text-sm py-2 text-center"><input type="checkbox" class="mr-2" />Job|Linux
                                        Administrator+Azure</td>
                                    <td class="text-sm py-2 text-center">353</td>
                                    <td class="text-sm py-2 text-center">hr@gmail.com</td>
                                    <td class="text-sm py-2 text-center">13/04/2022</td>
                                </tr>
                                <tr>
                                    <td class="text-sm py-2 text-center"><input type="checkbox" class="mr-2" />Job|Linux
                                        Administrator+Azure</td>
                                    <td class="text-sm py-2 text-center">353</td>
                                    <td class="text-sm py-2 text-center">hr@gmail.com</td>
                                    <td class="text-sm py-2 text-center">13/04/2022</td>
                                </tr>
                                <tr>
                                    <td class="text-sm py-2 text-center"><input type="checkbox" class="mr-2" />Job|Linux
                                        Administrator+Azure</td>
                                    <td class="text-sm py-2 text-center">353</td>
                                    <td class="text-sm py-2 text-center">hr@gmail.com</td>
                                    <td class="text-sm py-2 text-center">13/04/2022</td>
                                </tr>
                                <tr>
                                    <td class="text-sm py-2 text-center"><input type="checkbox" class="mr-2" />Job|Linux
                                        Administrator+Azure</td>
                                    <td class="text-sm py-2 text-center">353</td>
                                    <td class="text-sm py-2 text-center">hr@gmail.com</td>
                                    <td class="text-sm py-2 text-center">13/04/2022</td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                    <!-- <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button> -->
                </form>
            </div>
        </body>
    </div>
</template>

<script>

export default {
    data() {
        return {

        }
    },
    created() {

    }
}

</script>

<style scoped>
.button-container {
    display: flex;
    overflow-x: auto;
    scrollbar-width: none;
    /* Firefox */
    -ms-overflow-style: none;
    /* IE and Edge */
}

.button-container::-webkit-scrollbar {
    width: 0;
    /* Chrome, Safari, and Opera */
}
</style>