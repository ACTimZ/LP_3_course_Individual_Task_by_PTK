<template>
    <section class="mt-12 2xl:mb-41.25 xl:mb-25 sm:mb-15 mb-9.5 bg-stone-100">
        <article class="container mx-auto">
            <article
                class="mx-8 flex flex-col items-center md:gap-15 sm:gap-8 gap-1.5 md:pb-17 pb-12.5 md:pt-12.25 pt-8">
                <article class="flex flex-col items-center gap-2.25">
                    <p class="text-center text-slate-700/50">This is not for everyone!</p>
                    <h2 class="text-center lg:text-5xl text-3xl text-indigo-950 font-bold lg:w-122 sm:w-75">This program
                        is perfect for you if...</h2>
                </article>
                <article class="flex sm:flex-row flex-col md:gap-5 sm:gap-0 gap-5 md:justify-normal justify-between">
                    <article
                        class="flex flex-col lg:gap-18.5 gap-7 md:px-14 sm:px-7 px-9 lg:pt-14.5 pt-8.5 lg:pb-26.5 md:pb-15 pb-9 items-center">
                        <h4 class="lg:text-2xl text-xl text-center font-bold text-indigo-950">This is <span
                                class="underline">NOT</span> for you if...</h4>
                        <ul class="flex flex-col gap-7">
                            <li v-for="el in 4" class="flex flex-row items-start gap-3">
                                <img src="../svg/icon.svg" alt="">
                                <p class="text-gray-600 lg:w-75 md:text-base text-sm">Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit</p>
                            </li>
                        </ul>
                    </article>
                    <article
                        class="bg-white flex flex-col lg:gap-18.5 gap-7 md:px-14 sm:px-7 px-9 lg:pt-14.5 pt-8.5 lg:pb-26.5 md:pb-15 sm:pb-9 pb-12 items-center">
                        <h4 class="lg:text-2xl text-xl text-center font-bold text-indigo-950">This is for you if...</h4>
                        <ul class="flex flex-col gap-7">
                            <li v-for="el in 4" class="flex flex-row items-start gap-3">
                                <img src="../svg/Check icon.svg" alt="">
                                <p class="text-gray-600 lg:w-75 md:text-base text-sm">Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit</p>
                            </li>
                        </ul>
                    </article>
                </article>
            </article>
        </article>
    </section>
</template>