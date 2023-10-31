<template>
    <div class="bg-gray-100">
        <div><p class="font-semibold md:text-xl text-sm text-center my-5">Pick up a professional resume template and create for free</p></div>
        
            <div class="flex flex-row justify-between button-container mx-5">
                <img class="w-72 h-72 rounded-xl" src="../assets/screenshot(1).png" alt="" @click="openCarousel(1)" />
                <img class="w-72 h-72 rounded-xl" src="../assets/screenshot(2).png" @click="openCarousel(2)" />
                <img class="w-72 h-72 rounded-xl" src="../assets/screenshot(3).png" @click="openCarousel(3)" />
                <img class="w-72 h-72 rounded-xl" src="../assets/screenshot(4).png" alt="" @click="openCarousel(4)" />
            </div>
            <div class="flex justify-center items-center h-screen mx-5" v-if="showCarousel">
                <div class="carousel w-96 ">
                    <div id="slide1" class="carousel-item relative w-full">
                        <img src="../assets/screenshot(1).png" class="w-full" />
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" class="btn btn-circle">❮</a>
                            <a href="#slide2" class="btn btn-circle">❯</a> 
                        </div>
                    </div>
                    <div id="slide2" class="carousel-item relative w-full">
                        <img src="../assets/screenshot(2).png" class="w-full" />
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" class="btn btn-circle">❮</a>
                            <a href="#slide3" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" class="carousel-item relative w-full">
                        <img src="../assets/screenshot(3).png" class="w-full" />
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" class="btn btn-circle">❮</a>
                            <a href="#slide4" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" class="carousel-item relative w-full">
                        <img src="../assets/screenshot(4).png" class="w-full" />
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" class="btn btn-circle">❮</a>
                            <a href="#slide1" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
definePageMeta({
    layout: 'custome'
});
export default {
    data() {
        return {
            showCarousel: false,
            activeImage: 0
        };
    },
    methods: {
        openCarousel(imageIndex) {
            this.activeImage = imageIndex;
            this.showCarousel = true;
        }
    }
};

</script>

<style scoped>

.button-container {
    display: flex;
    overflow-x: auto;
    scrollbar-width: none;/* Firefox */
    -ms-overflow-style: none;/* IE and Edge */
}
.button-container::-webkit-scrollbar {
    width: 0;/* Chrome, Safari, and Opera */
}

</style>