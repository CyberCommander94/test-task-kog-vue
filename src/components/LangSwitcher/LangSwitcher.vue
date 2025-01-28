<template>
  <section
    class="absolute right-0 top-[100px] flex flex-col gap-1 px-1 py-1 bg-stone-700 rounded-tl-[4px] rounded-bl-[4px]"
  >
    <LangSwitcherButton
      :active="locale === 'ua'"
      :icon="ukraineFlagIcon"
      @click="changeLocale('ua')"
    />
    <LangSwitcherButton :active="locale === 'en'" :icon="usaFlagIcon" @click="changeLocale('en')" />
  </section>
</template>

<script lang="ts" setup>
import LangSwitcherButton from './LangSwitcherButton.vue'
import ukraineFlagIcon from '../../assets/images/ukraine.png'
import usaFlagIcon from '../../assets/images/united-states.png'
import useLocalStorage from '@/composables/useLocalStorage'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const savedLocale = useLocalStorage('locale', locale)

function changeLocale(newLocale: string) {
  locale.value = newLocale
  savedLocale.value = newLocale
}

changeLocale(savedLocale.value ?? locale.value)
</script>

<style scoped></style>
