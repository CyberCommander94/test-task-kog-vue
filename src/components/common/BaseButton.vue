<template>
  <button
    class="block px-5 items-center rounded-[8px] cursor-pointer transition-colors duration-200 font-formular-medium"
    :class="props.variant === 'primary' ? primaryBtnStyles : secondaryBtnStyles"
  >
    <img v-if="props.icon" :src="props.icon" alt="Icon" class="w-6 h-6 object-contain" />
    <span class="text-base font-medium"><slot /></span>
  </button>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue'

interface Props {
  icon?: string
  variant?: 'primary' | 'secondary'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
})

const primaryBtnStyles = 'primary-btn-bg text-white h-11'
const secondaryBtnStyles = 'secondary-btn-bg text-primary h-[42px]'
</script>

<style scoped>
.primary-btn-bg {
  background: linear-gradient(to right, #3cb9a0, #1786ac);
  transition: background 0.4s ease;
  will-change: background;
}

.secondary-btn-bg {
  background: linear-gradient(to right, #e6f7f5, #f8fcfc);
  border: 1px solid #aacedb;
  transition: background 0.4s ease;
  will-change: background;
}

.secondary-btn-bg:hover,
.primary-btn-bg:hover {
  background: linear-gradient(to right, #36a8a0, #36a8a0);
}

.secondary-btn-bg:hover {
  border: 1px solid #36a8a0;
  color: #ffffff;
}
</style>
