<script setup>
import HeroBlock from '@/components/ExtraSalesPageComponents/HeroBlock.vue';
import FeaturesSection from '@/components/RepeatsSameComponents/FeaturesSection.vue';
import FeaturesSectionTheNext from '@/components/RepeatsSameComponents/FeaturesSectionTheNext.vue';
import ResultsSpeaksAndQuoteSection from '@/components/RepeatsSameComponents/ResultsSpeaksAndQuoteSection.vue';
import Qualification from '@/components/ExtraSalesPageComponents/Qualification.vue';
import CTA from '@/components/RepeatsSameComponents/CTA.vue';
import Guarantee from '@/components/ExtraSalesPageComponents/Guarantee.vue';
import FAQsection from '@/components/RepeatsSameComponents/FAQsection.vue';
</script>

<template>
    <HeroBlock />
    <FeaturesSectionTheNext />
    <article class="my-7"></article>
    <FeaturesSection />
    <ResultsSpeaksAndQuoteSection />
    <Qualification />
    <CTA />
    <Guarantee />
    <FAQsection />
</template>