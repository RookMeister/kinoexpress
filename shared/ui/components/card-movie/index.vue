<script setup lang="ts">
import type { IFilm } from '~/shared/types/film'

defineProps<{ item: IFilm }>()
</script>

<template>
  <NuxtLink
    :to="`/film/${item.kinopoiskId}`" pb2
    border-2 border-white
    transition duration-400
    rounded-lg
    hover="scale-105 z10"
  >
    <div
      block bg-gray4:10
      relative
      class="aspect-10/16 "
    >
      <div
        flex
        flex-col
        transition duration-400
        absolute
        hover="opacity-100"
        opacity-0
        style="
        visibility: visible;
        background-color: rgba(0,0,0,.85);
        z-index: 2;
        right: 0;
        bottom: 0;
        align-items: flex-start;
        padding: 23px 20px;
        justify-content: space-between;
        top: 0;
        left: 0;"
      >
        <span
          px-1
          style="background-color: hsla(258,4%,55%,.32);
    border-radius: 5px;"
        >  {{ item.ratingKinopoisk }}  </span>
        <div>
          <div>{{ item.nameRu }}</div>
          <div mt-1>
            {{ item.year }}
          </div>
        </div>
      </div>
      <NuxtImg
        v-if="item.posterUrlPreview"
        width="400"
        height="600"
        format="webp"
        :src="item.posterUrlPreview"
        :alt="item.nameRu"
        w-full h-full object-cover rounded-lg
        :style="{ 'view-transition-name': `item-${item.kinopoiskId}` }"
      />
      <div v-else h-full op10 flex>
        <div i-ph:question ma text-4xl />
      </div>
    </div>
    <!-- <div mt-2>
      {{ item.nameRu }}
    </div> -->
    <!-- <div flex text-sm gap-2 items-center>
      <StarsRate w-20 :value="item.vote_average" />
      <div op60>
        {{ item.ratingKinopoisk }}
      </div>
    </div> -->
  </NuxtLink>
</template>
