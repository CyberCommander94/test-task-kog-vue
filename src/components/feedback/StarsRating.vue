<template>
  <div class="flex items-center gap-1.5">
    <span
      v-for="(star, index) in stars"
      :key="index"
      class="w-6 h-6 flex items-center justify-center"
      :class="{ filled: star === 1, half: star === 0.5 }"
    >
      <svg
        v-if="star === 1"
        xmlns="http://www.w3.org/2000/svg"
        fill="#FCC141"
        stroke="#FCC141"
        stroke-width="2"
        viewBox="0 0 24 24"
        class="text-yellow-400 w-full h-full"
      >
        <path
          d="M12 .587l3.668 7.431 8.213 1.192-5.941 5.789 1.401 8.167L12 18.896l-7.341 3.87 1.401-8.167-5.941-5.789 8.213-1.192z"
        />
      </svg>

      <svg
        v-else-if="star === 0.5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="#FCC141"
        stroke-width="2"
        viewBox="0 0 24 24"
        class="text-yellow-400 w-full h-full"
      >
        <defs>
          <clipPath id="halfClip">
            <rect x="0" y="0" width="12" height="24" />
          </clipPath>
        </defs>
        <path
          d="M12 .587l3.668 7.431 8.213 1.192-5.941 5.789 1.401 8.167L12 18.896l-7.341 3.87 1.401-8.167-5.941-5.789 8.213-1.192z"
          fill="#FCC141"
          clip-path="url(#halfClip)"
        />
        <path
          d="M12 .587l3.668 7.431 8.213 1.192-5.941 5.789 1.401 8.167L12 18.896l-7.341 3.87 1.401-8.167-5.941-5.789 8.213-1.192z"
        />
      </svg>

      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="#FCC141"
        stroke-width="2"
        viewBox="0 0 24 24"
        class="text-gray-300 w-full h-full"
      >
        <path
          d="M12 .587l3.668 7.431 8.213 1.192-5.941 5.789 1.401 8.167L12 18.896l-7.341 3.87 1.401-8.167-5.941-5.789 8.213-1.192z"
        />
      </svg>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { defineProps } from 'vue'

const props = defineProps({
  rating: {
    type: String,
    required: true,
    validator: (value: string) =>
      !isNaN(parseFloat(value)) && parseFloat(value) >= 0 && parseFloat(value) <= 5,
  },
})

const stars = computed(() => {
  const parsedRating = parseFloat(props.rating)
  const fullStars = Math.floor(parsedRating)
  const halfStar = parsedRating % 1 >= 0.5 ? 0.5 : 0
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)

  return [...Array(fullStars).fill(1), ...(halfStar ? [0.5] : []), ...Array(emptyStars).fill(0)]
})
</script>
