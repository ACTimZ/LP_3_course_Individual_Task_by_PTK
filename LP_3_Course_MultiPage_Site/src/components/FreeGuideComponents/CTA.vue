<template>
    <section
        class="container mx-auto flex flex-row justify-center sm:pb-10 pb-7.5 xl:pt-7.5 lg:pt-3.5 md:pt-0 sm:pt-10 pt-5 relative">
        <article class="flex flex-col items-center mx-8 md:w-195 lg:gap-17.5 md:gap-12.5 gap-7.5">
            <article class="flex flex-col items-center lg:gap-10 gap-7.5">
                <article class="flex flex-col items-center md:gap-4 gap-7.5">
                    <h2 class="text-center lg:text-5xl text-3xl font-bold text-indigo-950">Don’t miss out on my <b
                            class="text-teal-500">‘Live life at the full potential’</b> free guide</h2>
                    <p class="text-center text-gray-800/80 md:w-135 lg:text-base text-sm">Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua minim veniam.
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium.
                    </p>
                </article>
                <a href="/"
                    class="font-medium text-white py-2.5 sm:px-8 px-4.5 rounded-lg bg-teal-500 text-center sm:text-base text-sm">Download
                    my free guide</a>
            </article>
            <article class="flex flex-col items-center sm:gap-1.75 gap-1">
                <p class="text-slate-800/50 text-center md:text-base text-sm">More than 100+ 5 star reviews</p>
                <article class="flex flex-row items-center gap-1">
                    <img src="../svg/Shape.svg" alt="" v-for="star in 5">
                </article>
            </article>
        </article>
        <article class="hidden xl:block">
            <img src="../images/Image.jpg" alt="" class="absolute w-10.5 top-1/3 right-3.5">
            <img src="../images/image 72.jpg" alt="" class="absolute bottom-32 left-5">
            <img src="../images/image 73.jpg" alt="" class="absolute top-0 right-35">
            <img src="../images/image 74.jpg" alt="" class="absolute top-23 left-25">
            <img src="../images/image 75.jpg" alt="" class="absolute bottom-32 right-24">
        </article>
    </section>
</template>