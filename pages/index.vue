<script setup lang="ts">
import { ListMovies } from '~/shared/ui/components/list-movies'

const { data } = await useFetch(() => '/api/films/collections', { method: 'GET' })
</script>

<template>
  <ListMovies v-if="data" :items="data" />
</template>
