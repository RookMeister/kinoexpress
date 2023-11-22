<script setup lang="ts">
import { CardMovie } from '~/shared/ui/components/card-movie'
import { Carousel } from '~/shared/ui/components/carousel'

const props = defineProps<{ title: string; type: string }>()

const { data, pending } = await useLazyFetch('/api/films/collections', {
  method: 'GET', server: false, query: { type: props.type },
})
</script>

<template>
  <div flex py3 px10 items-center mt5>
    <div text-2xl>
      {{ title }}
    </div>
    <div flex-auto />
    <NuxtLink to="/" n-link>
      Показать ещё
    </NuxtLink>
  </div>
  <div v-if="pending">
    Loading ...
  </div>
  <Carousel v-if="data && !pending">
    <CardMovie
      v-for="i of data"
      :key="i.kinopoiskId"
      :item="i"
      flex-1 w-40 md:w-60
    />
  </Carousel>
</template>
