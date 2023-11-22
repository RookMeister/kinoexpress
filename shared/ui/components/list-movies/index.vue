<script setup lang="ts">
import type { IFilm } from '~/shared/types/film'
import { CardMovie } from '~/shared/ui/components/card-movie'
import { Carousel } from '~/shared/ui/components/carousel'

defineProps<{ items: IFilm[] }>()
</script>

<template>
  <div flex py3 px10 items-center mt5>
    <div text-2xl>
      Популярные фильмы
    </div>
    <div flex-auto />
    <NuxtLink to="/" n-link>
      Показать ещё
    </NuxtLink>
  </div>
  <Carousel>
    <CardMovie
      v-for="i of items || []"
      :key="i.kinopoiskId"
      :item="i"
      flex-1 w-40 md:w-60
    />
  </Carousel>
</template>
