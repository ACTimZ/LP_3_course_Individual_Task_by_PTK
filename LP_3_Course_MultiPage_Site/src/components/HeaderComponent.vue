<script setup>
import { ref } from 'vue';

let openBurgerMenu = ref(false)
function toggleHeaderMenu() {
  openBurgerMenu.value = !openBurgerMenu.value
}
</script>

<template>
    <header
    class="flex sm:flex-row flex-row-reverse items-center justify-between lg:py-2.5 py-3 lg:ps-21 sm:ps-7 ps-5 lg:pe-19 pe-5">
    <svg @click="toggleHeaderMenu" width="40" height="27" viewBox="0 0 40 27" fill="none"
      xmlns="http://www.w3.org/2000/svg" class="block md:hidden">
      <rect width="40" height="5" rx="2.5" fill="gray" />
      <rect y="11" width="40" height="5" rx="2.5" fill="gray" />
      <rect y="22" width="40" height="5" rx="2.5" fill="gray" />
    </svg>
    <a href="/"><img src="../assets/logo.svg" alt="logo"></a>
    <article class="sm:flex flex-row items-center 2xl:gap-15 gap-7 hidden">
      <nav class="text-slate-800 text-sm flex-row lg:gap-8 gap-5 hidden md:flex">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/about">About us</a>
        <a href="/extra-sales">Extra Salespage</a>
      </nav>
      <a href="/free-guide" class="bg-teal-500 text-sm font-semibold py-3 px-4 rounded-lg text-white hidden sm:block">Get
        your free guide
        now</a>
    </article>
  </header>
  <article class="bg-white py-5 md:hidden" :class="[openBurgerMenu ? 'block' : 'hidden']">
    <article class="container mx-auto flex flex-col md:justify-center">
      <nav class="sm:ms-25 ms-15 flex flex-col text-base text-slate-800 gap-3">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/about">About us</a>
        <a href="/extra-sales">Extra Salespage</a>
      </nav>
      <a href="/free-guide"
        class="sm:hidden block self-center mt-5 border-1 border-teal-500 text-sm font-semibold py-3 px-4 rounded-lg text-teal-500">Get
        your free guide
        now</a>
    </article>
  </article>
</template>