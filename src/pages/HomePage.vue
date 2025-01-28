<template>
  <main class="home-page-content w-screen h-screen overflow-y-auto flex flex-col justify-between">
    <div
      class="w-full pt-10 sm:pt-12 md:pt-18 pl-8 sm:pl-12 md:pl-16 pr-14 md:pr-18 pb-40 text-wrapper"
    >
      <h1 class="text-white text-[28px] sm:text-[36px] md:text-[50px] mb-10">
        {{ $t('mainTitle') }}
      </h1>
      <p
        class="text-white text-[18px] sm:text-[24px] md:text-[28px] leading-[36px] sm:leading-[46px] md:leading-[54px]"
      >
        {{ $t('mainText') }}
      </p>
    </div>
    <LangSwitcher class=""></LangSwitcher>
    <FeedbackSection :feedback="feedback[0] || null" :isLoading="isLoading"></FeedbackSection>
  </main>
</template>

<script setup lang="ts">
import LangSwitcher from '@/components/LangSwitcher/LangSwitcher.vue'
import FeedbackSection from '@/components/feedback/FeedbackSection.vue'

import { ref, onMounted } from 'vue'
import { useApi } from '@/composables/useApi'

const { get, isLoading } = useApi()

const feedback = ref<{ mark: string; count: string }[]>([])

const fetchFeedback = async () => {
  const data = await get<{ mark: string; count: string }[]>('/feedback')
  if (data) {
    feedback.value = data
  }
}

onMounted(fetchFeedback)
</script>

<style scoped>
.home-page-content {
  background: url('../assets/images/home-bg.jpg') no-repeat center center fixed;
  background-size: cover;
  box-shadow: inset -4px -150px 300px 0px rgba(0, 0, 0, 1);
}

.text-wrapper {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.6) 80%,
    rgba(0, 0, 0, 0) 100%
  );
}
</style>
