<script setup lang="ts">
import { ListMovies } from '~/widgets/list-movies'

const movieCategories = [
  { name: 'Популярные фильмы', link: '/serials', type: ' TOP_POPULAR_MOVIES' },
  { name: 'Топ 250 фильмов', link: '/multfilms', type: ' TOP_250_MOVIES' },
  { name: 'Топ 250 сериалов', link: '/multfilms', type: ' TOP_250_TV_SHOWS' },
  { name: 'Комиксы', link: '/multfilms', type: ' COMICS_THEME' },
  { name: 'Катастрофы', link: '/multfilms', type: ' CATASTROPHE_THEME' },
  { name: 'Для детей', link: '/multfilms', type: ' KIDS_ANIMATION_THEME' },
  { name: 'Для всей семьи', link: '/multfilms', type: ' FAMILY' },
  { name: 'Зомби', link: '/multfilms', type: ' ZOMBIE_THEME' },
  { name: 'Любовь', link: '/multfilms', type: ' LOVE_THEME' },
  { name: 'Вампиры', link: '/multfilms', type: ' VAMPIRE_THEME' },
]
</script>

<template>
  <ListMovies v-for="i of movieCategories" :key="i.type" :type="i.type" :title="i.name" />
</template>
