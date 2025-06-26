<template>
    <section
        class="container mx-auto flex flex-col items-center lg:gap-34 md:gap-25 sm:gap-7.5 gap-5 lg:mt-26 md:mt-15 sm:mt-10 mt-9 sm:mb-10 mb-9">
        <h2 class="text-indigo-950 font-bold lg:text-5xl text-3xl text-center lg:w-6/12 md:w-8/12 w-10/12">I can help
            you in these particular areas.</h2>
        <article class="flex sm:flex-row flex-col justify-center gap-5 mx-8">
            <article class="flex flex-col gap-5 relative md:top-[-60px]">
                <article
                    class="lg:py-14 md:py-8 py-7 lg:px-19 md:px-9.5 px-7 flex flex-col lg:gap-8 gap-4 sm:items-start items-center lg:w-112.5 border border-gray-200 card_services">
                    <img src="../svg/browser-internet-web-network-diagram-1 1 (1).svg" alt="" class="lg:w-18 w-15">
                    <article class="flex flex-col lg:gap-4 gap-2.5 lg:text-base text-sm sm:items-start items-center">
                        <h4 class="lg:text-2xl text-xl font-bold text-stone-950 sm:text-left text-center">Group Coaching
                            Sessions</h4>
                        <p class="text-gray-700 sm:text-left text-center">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua minim veniam.
                        </p>
                    </article>
                </article>
                <article
                    class="lg:py-14 md:py-8 py-7 lg:px-19 md:px-9.5 px-7 flex flex-col lg:gap-8 gap-4 sm:items-start items-center lg:w-112.5 border border-gray-200 card_services">
                    <img src="../svg/browser-internet-web-network-diagram-1 1.svg" alt="" class="lg:w-18 w-15">
                    <article class="flex flex-col lg:gap-4 gap-2.5 lg:text-base text-sm sm:items-start items-center">
                        <h4 class="lg:text-2xl text-xl font-bold text-stone-950 sm:text-left text-center">Consultation
                        </h4>
                        <p class="text-gray-700 sm:text-left text-center">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua minim veniam.
                        </p>
                    </article>
                </article>
            </article>
            <article class="flex flex-col gap-5">
                <article
                    class="lg:py-14 md:py-8 py-7 lg:px-19 md:px-9.5 px-7 flex flex-col lg:gap-8 gap-4 sm:items-start items-center lg:w-112.5 border border-gray-200 card_services">
                    <img src="../svg/Frame.svg" alt="" class="lg:w-18 w-15">
                    <article class="flex flex-col lg:gap-4 gap-2.5 lg:text-base text-sm sm:items-start items-center">
                        <h4 class="lg:text-2xl text-xl font-bold text-stone-950 sm:text-left text-center">Online course
                        </h4>
                        <p class="text-gray-700 sm:text-left text-center">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua minim veniam.
                        </p>
                    </article>
                </article>
                <article
                    class="lg:py-14 md:py-8 py-7 lg:px-19 md:px-9.5 px-7 flex flex-col lg:gap-8 gap-4 sm:items-start items-center lg:w-112.5 border border-gray-200 card_services">
                    <img src="../svg/Frame.svg" alt="" class="lg:w-18 w-15">
                    <article class="flex flex-col lg:gap-4 gap-2.5 lg:text-base text-sm sm:items-start items-center">
                        <h4 class="lg:text-2xl text-xl font-bold text-stone-950 sm:text-left text-center">1:1 Coaching
                        </h4>
                        <p class="text-gray-700 sm:text-left text-center">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua minim veniam.
                        </p>
                    </article>
                </article>
            </article>
        </article>
    </section>
</template>

<style scoped>
.card_services {
    &>article>h4 {
        transition: .3s;
    }
}

.card_services:hover {
    cursor: pointer;

    &>article>h4 {
        color: #20AD96;
    }
}
</style>