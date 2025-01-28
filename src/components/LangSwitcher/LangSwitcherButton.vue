<template>
  <button
    class="inline-flex w-8 h-8 items-center gap-2 px-1 py-1 rounded-[4px] bg-stone-70 cursor-pointer transition-colors duration-200 hover:bg-stone-800 focus:outline-none"
    :class="active ? 'bg-stone-500' : ''"
  >
    <img v-if="icon" :src="icon" alt="Icon" class="w-6 h-6 object-contain" />
    <span class="text-base font-medium"><slot /></span>
  </button>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps<{
  icon?: string
  active: boolean
}>()
</script>

<style scoped></style>
