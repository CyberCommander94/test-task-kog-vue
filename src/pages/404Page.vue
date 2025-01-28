<template>
  <main
    class="relative w-screen h-screen overflow-hidden flex items-center text-primary dark:text-white dark:bg-gray-700"
  >
    <router-link
      to="/"
      class="absolute top-4 sm:top-6 md:top-8 lg:top-8 xl:top-8 left-5 sm:left-8 md:left-10 lg:left-10 xl:left-10 text-small sm:text-body-medium-tablet md:text-body-medium-tablet lg:text-body-medium-tablet xl:text-body-medium-desktop hover:underline text-secondary dark:text-white"
    >
      <span class="relative top-[1px]">&#8617;</span> {{ $t('backToTheHomePage') }}
    </router-link>
    <div class="w-full text-center">
      <h1 class="text-[30px] md:text-[36px] lg:text-[40px] xl:text-[46px] text-center">
        <b
          class="text-[80px] md:text-[86px] lg:text-[92px] xl:text-[100px] block leading-[90px] md:leading-[96px] lg:leading-[102px] xl:leading-[110px]"
          >404</b
        >
        {{ $t('pageNotFound') }}
      </h1>
    </div>
  </main>
</template>

<script setup lang="ts"></script>
