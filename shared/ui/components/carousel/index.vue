<script setup lang="ts">
import { ref } from 'vue'

const scrollEl = ref<HTMLDivElement>()

function scrollLeft() {
  scrollEl.value?.scrollBy({
    left: -window.innerWidth,
    behavior: 'smooth',
  })
}

function scrollRight() {
  scrollEl.value?.scrollBy({
    left: window.innerWidth,
    behavior: 'smooth',
  })
}
</script>

<template>
  <div relative>
    <div ref="scrollEl" overflow-y-auto>
      <div flex gap-4 w-max p-4 px-10>
        <slot />
      </div>
    </div>
    <button
      flex="~ col" absolute top-0 left-0 bottom-0 bg-black:50 p3 items-center justify-center op0 z-10 hover:op100 transition
      title="Scroll left"
      @click="scrollLeft()"
    >
      <div i-ph-caret-left-light text-3xl text-white />
    </button>
    <button
      flex="~ col" absolute top-0 right-0 bottom-0 bg-black:50 p3 items-center justify-center op0 z-10 hover:op100 transition
      title="Scroll right"
      @click="scrollRight()"
    >
      <div i-ph-caret-right-light text-3xl text-white />
    </button>
  </div>
</template>
