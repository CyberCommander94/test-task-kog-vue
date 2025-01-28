<template>
  <section class="px-1 pb-5 w-full">
    <div
      class="p-[30px] gap-[50px] flex w-full rounded-[8px] bg-white shadow-[0px_4px_15px_0px_rgba(0,0,0,0.05)] dark:bg-gray-600"
    >
      <Transition name="fade" mode="out-in">
        <div v-if="isLoading && !isDataLoaded" class="w-full text-center dark:text-white">
          {{ $t('loading') }}...
        </div>
        <div
          v-else-if="isDataLoaded"
          class="flex w-full gap-5 justify-between flex-col sm:flex-row"
        >
          <div
            class="flex lg:gap-[60px] md:gap-[50px] flex-col sm:flex-column md:flex-row items-start md:items-center"
          >
            <div class="flex items-center gap-5 text-primary dark:text-white">
              <img src="../../assets/images/google.png" alt="Google logo" class="w-10 h-10" />
              <p
                class="text-body-medium-tablet leading-body-medium-tablet--line-height md:text-body-medium-desktop md:leading-body-medium-desktop--line-height font-formular-medium dark:text-white"
              >
                {{ $t('reviewsTitle') }}
              </p>
            </div>
            <div
              class="flex gap-[6px] sm:gap-5 flex-col mt-5 md:mt-0 sm:mt-[11px] sm:flex-row items-start sm:items-center"
            >
              <div class="flex items-center gap-5 text-primary dark:text-white">
                <p
                  v-if="feedback"
                  class="text-[24px]/[32px] md:text-[36px]/[44px] font-greenwich-medium"
                >
                  {{ feedback.mark }}
                </p>
                <StarsRating v-if="feedback" :rating="feedback.mark" />
              </div>
              <div class="text-secondary dark:text-white text-small leading-small--line-height">
                <p v-if="feedback">
                  {{ feedback.count }} {{ uaRewiewsWordNormalize(feedback.count) }}
                </p>
              </div>
            </div>
          </div>
          <div
            class="flex items-center gap-[10px] flex-col sm:min-w-[150px] sm-transitional:flex-row sm-transitional:min-w-auto"
          >
            <BaseButton
              class="w-full sm-transitional:w-auto"
              variant="secondary"
              @click="
                openLink(
                  'https://uk.wikipedia.org/wiki/%D0%9C%D1%96%D0%BB%D0%B0%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80',
                  '_blank',
                )
              "
              >{{ $t('lookOver') }}</BaseButton
            >
            <BaseButton class="w-full sm:w-auto" variant="primary" @click="switchTheme">{{
              $t('changeTheme')
            }}</BaseButton>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { defineProps } from 'vue'
import StarsRating from './StarsRating.vue'
import BaseButton from '../common/BaseButton.vue'
import useLocalStorage from '@/composables/useLocalStorage'
import { useTheme } from '@/composables/useTheme'
import { useI18n } from 'vue-i18n'

interface Feedback {
  mark: string
  count: string
}

const props = defineProps<{
  feedback: Feedback | null
  isLoading: boolean
}>()

const savedTheme = useLocalStorage<'light' | 'dark'>('theme', 'light')
const { theme, applyTheme, toggleTheme } = useTheme()
const { t, locale } = useI18n()

const isDataLoaded = ref<boolean>(false)

watch(
  () => props.isLoading,
  (newValue) => {
    console.log(newValue)
    console.log(isDataLoaded.value)

    if (!newValue) {
      isDataLoaded.value = true
    }
    console.log(isDataLoaded.value)
  },
)

const openLink = (link: string, target: string) => {
  window.open(link, target)
}

function uaRewiewsWordNormalize(count: string) {
  let result = t('reviews')
  const countNumber = Number(count)
  const countString = String(Math.trunc(countNumber))
  const lastCharacter = countString[countString.length - 1]
  if (countNumber === 1) {
    result = t('review')
  } else if (countNumber !== 11 && lastCharacter === '1' && locale.value === 'ua') {
    result = t('review')
  } else if (lastCharacter === '2' || lastCharacter === '3' || lastCharacter === '4') {
    result = t('reviews')
  } else {
    result = t('reviewsVariant2')
  }
  return result
}

function switchTheme() {
  toggleTheme()
  savedTheme.value = theme.value
}

applyTheme(savedTheme.value)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
