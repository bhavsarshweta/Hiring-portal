<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        integrity="sha384-... " crossorigin="anonymous">
    <div class="table-container bg-white text-black">
        <div class="w-full flex flex-col mt-10">
            <div class="py-6 flex w-full text-center font-semibold border-b-2">
                <div class=" w-2/12 md:w-1/12 border-r border-gray-400">Sr.No</div>
                <div class=" w-2/12 md:w-1/12 border-r border-gray-400">Role</div>
                <div class=" w-4/12">Name</div>
                <div class=" w-4/12 border-l border-gray-400">Email</div>
                <div class=" w-2/12 border-l border-gray-400 md:block hidden">Actions</div>
            </div>
            <div v-for="(data, index) in resDataSuccess" :key="data.id"
                class="w-full text-center flex flex-col space-y-8 md:border-b-0 border-b border-gray-400 py-8">
                <div class="flex w-full">
                    <div class="w-2/12 md:w-1/12">{{ index + 1 }}</div>
                    <div class=" w-2/12 md:w-1/12">
                        <span v-if="data.admin == 'True'" >Admin</span>
                        <span v-if="data.student == 'True'" >Student</span>
                        <span v-if="data.employer == 'True'" >Employer</span>
                    </div>
                    <div class="w-4/12">{{ data.fullName }}</div>
                    <div class="w-4/12">{{ data.email }}</div>
                    <div class="w-2/12 md:flex hidden justify-around">
                        <div>
                            <button class=" bg-blue-500 hover:bg-blue-600 rounded-md btn-sm text-white" title="edit"
                                @click="openEditModal(data)">
                                <i class="fas fa-edit "></i>
                            </button>
                        </div>
                        <div>
                            <button class=" bg-blue-500 hover:bg-blue-600 btn-sm rounded-md text-white" title="delete"
                                @click="openDeleteModal(data)">
                                <i class="fa fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="md:hidden flex w-full">
                    <div class="w-2/12"></div>
                    <div class="w-2/12"></div>
                    <div class="w-4/12">
                        <div class="flex justify-between">
                            <div></div>
                            <div>
                                <button class=" bg-blue-500 hover:bg-blue-600 shadow-error  rounded-md btn-md text-white"
                                    :title="data.edit" @click="openEditModal(data)">
                                    <i class="fas fa-edit "></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="w-4/12">
                        <div class="flex justify-around">
                            <button class=" bg-blue-500 hover:bg-blue-600 btn-md rounded-md text-white" :title="data.delete"
                                @click="openDeleteModal(data)">
                                <i class="fa fa-trash"></i>
                            </button>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Edit Modal -->
        <div v-show="show">
            <div v-if="editModalData" class="modal1">
                <div class="modal-box">
                    <h3 class="font-bold text-lg mb-2">Edit</h3>
                    <div class="sm:col-span-4">
                        <label for="username" class="block text-left text-sm font-medium leading-6 text-gray-900">Email</label>
                        <div class="mt-2">
                            <div
                                class="flex rounded-md shadow-sm ring-1 ring-black focus-within:ring-2 focus-within:ring-black sm:max-w-md">
                                <input type="text" name="username" id="username"
                                    class="appearance-none rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-black"
                                    v-model="editModalData.email" />
                            </div>
                        </div>
                    </div>
                    <div class="sm:col-span-4">
                        <label for="password"
                            class="block text-left text-sm font-medium leading-6 text-gray-900 mt-5">Fullname</label>
                        <div class="mt-2">
                            <div
                                class="flex rounded-md shadow-sm ring-1 ring-black focus-within:ring-2 focus-within:ring-black sm:max-w-md">
                                <input type="text" name="username" id="username"
                                    class="appearance-none rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-black"
                                    v-model="editModalData.fullName" />
                            </div>
                        </div>
                    </div>
                    <div class="modal-action">
                        <button class="btn" @click="updateUser()">Update</button>
                        <button class="btn" @click="closeEditModal()">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Delete Modal -->
        <div v-if="deleteModalData" class="modal1">
            <div class="modal-box">
                <h3 class="font-bold text-lg mb-2">Are you sure you want to delete</h3>
                <h1></h1>
                <div class="modal-action">
                    <button class="btn" @click="deleteUser()">Delete</button>
                    <button class="btn" @click="closeDeleteModal()">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
definePageMeta({
    layout: "custom"
})


export default {
    data() {
        return {
            resDataSuccess: [],
            editModalData: null,
            deleteModalData: null,
            show: false,
        }
    },
    mounted() {
        this.displayUser()
    },
    methods: {
        async displayUser() {
            try {
                const response = await axios.post('/api/User_API/getuser');
                console.log(response);
                this.resDataSuccess = response.data;
            } catch (error) {
                console.log(error);
            }
        },

        openEditModal(data) {
            this.editModalData = {
                id: data.id,
                email: data.email,
                fullName: data.fullName
            };
            this.show = !this.show
        },

        closeEditModal() {
            this.editModalData = null;
        },

        async updateUser() {
            try {
                const { id, email,fullName} = this.editModalData;
                const response = await axios.put('/api/User_API/Update', {
                    id: id,
                    email: email,
                    fullName: fullName
                });
                // handle the response as needed
                this.closeEditModal();
                this.displayUser(); // Refresh the user data after deletion
                // Show the alert message after a slight delay
                setTimeout(() => {
                    alert("Data updated successfully");
                }, 100);
            } catch (error) {
                console.log(error);
            }
        },
        openDeleteModal(data) {
            this.deleteModalData = {
                id: data.id
            };
        },
        closeDeleteModal() {
            this.deleteModalData = null;
        },
        async deleteUser() {
            try {

                const { id } = this.deleteModalData;
                const response = await $fetch('/api/User_API/Delete_User', {
                    method: 'DELETE',
                    body: { id: id },
                });

                if (response) {
                    const responseData = await response;
                    // handle the response as needed
                    this.closeDeleteModal();
                    this.displayUser(); // Refresh the user data after deletion
                    // Show the alert message after a slight delay
                    setTimeout(() => {
                        alert("Deleted successfully");
                    }, 100);
                } else {
                    // Handle error response
                    throw new Error('Failed to delete user');
                }
            } catch (error) {
                console.log(error);
            }
        }

    }
}
</script>

<style scoped>
/* Enhanced styles */
/* Enhanced styles */


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
    padding: 2rem;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.modal-action {
    margin-top: 1rem;
    display: flex;
    justify-content: flex-end;
}

/* Responsive styles */
@media (max-width: 640px) {
    .table-container {
        overflow-x: auto;
        /* Enable horizontal scrolling for small screens */
    }

    .table-cell {
        font-size: 18px;
    }

    .table-header {
        font-size: 16px;
        /* position:sticky;
    top:0px; */
    }

    .modal-box {
        width: 90%;
        max-width: 400px;
    }


    .table thead,
    .table tbody,
    .table tr,
    .table td:nth-child(5) {
        display: block;
    }

    .table tr {
        border-bottom: 2px solid #edf2f7;
    }

    /* .table td {
    text-align: center;
    padding-right: 55px;
  } */

    .table-cell {
        padding: 2rem;
        text-align: center;
    }

    .table-cell-buttons {
        text-align: center !important;
    }

    .table-cell {
        border-bottom: none;
    }
}
</style>







