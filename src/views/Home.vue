<template>
  <div class="page-wrapper">
    <HeroSection />
    <div class="divider"></div>
    <IntroSection />
    <div class="divider"></div>
    <CertsSection :certs="certs" />
    <div class="divider"></div>
    <ProcessSection :steps="steps" />
    <div class="divider"></div>
    <TeamSection :team="team" />
    <AppFooter />
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import IntroSection from '../components/IntroSection.vue'
import CertsSection from '../components/CertsSection.vue'
import ProcessSection from '../components/ProcessSection.vue'
import TeamSection from '../components/TeamSection.vue'
import AppFooter from '../components/AppFooter.vue'
import { certs, steps, team } from '../data/content'
</script>

<style>
@import '../styles/home.css';

.page-wrapper { position: relative; z-index: 1; }
</style>
