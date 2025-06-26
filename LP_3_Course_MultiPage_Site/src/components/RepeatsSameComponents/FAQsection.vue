<script setup>
import { ref } from 'vue';

let faq = ref([
    {
        id: 1,
        quastion: "How long does the coaching process take?",
        answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
        isOpen: true
    },
    {
        id: 2,
        quastion: "What if I wanted to end my coaching engagement?",
        answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
        isOpen: false
    },
    {
        id: 3,
        quastion: "Can I change through coaching?",
        answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
        isOpen: false
    },
    {
        id: 4,
        quastion: "How often do we meet?",
        answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
        isOpen: false
    }
])
</script>

<template>
    <section class="container mx-auto lg:py-24 md:py-15 py-12">
        <article class="sm:mx-8 mx-5 flex flex-col lg:gap-16 sm:gap-12 gap-6 items-center">
            <article class="flex flex-col items-center lg:gap-5 gap-2.5">
                <h2 class="text-indigo-950 font-bold text-center lg:text-5xl text-3xl">Good to know.</h2>
                <p class="text-slate-700 text-center">Everything you need to know about the my services.</p>
            </article>
            <article class="flex flex-col gap-8 xl:w-fit w-full">
                <article v-for="el in faq" class="flex flex-row gap-6 items-start justify-between pt-6.25"
                    :class="[el.id != 1 ? 'border-t border-gray-200' : '']" @click="el.isOpen = !el.isOpen">
                    <article class="flex flex-col gap-2 xl:w-180 w-full">
                        <h5 class="md:text-lg text-base font-medium text-gray-900">{{ el.quastion }}</h5>
                        <p :class="[el.isOpen ? 'block' : 'hidden']" class="text-slate-700 md:text-base text-sm">{{
                            el.answer }}
                        </p>
                    </article>
                    <img src="../svg/minus-circle.svg" alt="" :class="[el.isOpen ? 'block' : 'hidden']"
                        class="relative top-0.5">
                    <img src="../svg/plus-circle.svg" alt="" :class="[el.isOpen ? 'hidden' : 'block']"
                        class="relative top-0.5">
                </article>
            </article>
            <article class="bg-stone-50 w-full sm:p-8 p-5 flex flex-col items-center rounded-xl md:gap-8 gap-5">
                <article class="flex flex-col items-center sm:gap-2 gap-3.5">
                    <h3 class="font-bold text-indigo-950 md:text-xl text-lg text-center">Still have questions?</h3>
                    <p class="text-slate-700 md:text-lg sm:text-base text-sm text-center">Can’t find the answer you’re
                        looking for? Please chat to our friendly team.</p>
                </article>
                <a href="/"
                    class="bg-teal-500 rounded-2xl py-2.5 md:px-19 sm:px-15 px-9.5 font-medium text-white text-center">Get
                    in touch</a>
            </article>
        </article>
    </section>
</template>