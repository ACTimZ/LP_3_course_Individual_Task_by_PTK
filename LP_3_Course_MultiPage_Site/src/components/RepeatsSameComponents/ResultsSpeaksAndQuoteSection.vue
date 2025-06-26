<!-- <script setup>
import { ref } from 'vue';

let quoteSection = ref([
    {
        text: "",
        imgUrl: "",
        namePerson: "",
        surnamePerson: "",
        countStars: 5
    },
])
</script> -->

<template>
    <section class="container mx-auto lg:mb-15 md:mb-9.5 mb-5">
        <article
            class="px-8 flex sm:flex-row flex-col items-center justify-between lg:py-17 md:py-9.5 py-3.5 sm:gap-0 gap-3.5">
            <article class="flex flex-col sm:items-start items-center md:gap-3 lg:w-fit sm:w-100 w-fit">
                <p class="text-slate-700/50 lg:text-base sm:text-left text-center text-sm">Testimonials</p>
                <h2
                    class="lg:text-5xl sm:text-left text-center md:text-3xl text-lg text-indigo-950 font-bold xl:w-full lg:w-150">
                    Results that speak for themselves</h2>
            </article>
            <a href="/about"
                class="font-medium bg-teal-500 py-3 lg:px-17 sm:px-8 px-5 text-center md:text-base text-sm text-white rounded-xl">Get
                started</a>
        </article>
        <article class="flex flex-row justify-center">
            <article class="grid lg:grid-cols-2 grid-cols-1 md:gap-y-10.5 gap-y-5 gap-x-8 mx-8 md:my-7 my-3.5">
                <article v-for="i in 4" class="flex flex-col items-center gap-8 py-5 border border-gray-200 sm:w-112.5">
                    <p class="text-slate-600 text-center mx-6 lg:text-base text-sm"><span
                            :class="[i == 1 || i == 3 ? 'font-bold text-indigo-950' : '']">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit</span>, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit.</p>
                    <article class="flex flex-col gap-4 items-center">
                        <article class="flex flex-col gap-4 items-center">
                            <img src="../images/Avatar.png" alt="">
                            <article class="flex flex-col gap-1 items-center">
                                <h5 class="text-indigo-950 font-bold text-xl">Naam</h5>
                                <p class="text-slate-700/50">Bedrijf</p>
                            </article>
                        </article>
                        <article class="flex flex-row items-center gap-1">
                            <img src="../svg/Star (1).svg" alt="" v-for="i in 5">
                        </article>
                    </article>
                </article>
            </article>
        </article>
    </section>
</template>