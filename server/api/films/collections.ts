import { KINOPOISK_API, KINOPOISK_URL } from '~/shared/const/kinopoisk'
import type { IFilm } from '~/shared/types/film'

interface IResponse {
  items: IFilm[]
  total: number
  totalPages: number
}

const headers = {
  'X-API-KEY': KINOPOISK_API,
  'Content-Type': 'application/json',
}

export default defineEventHandler(async (event) => {
  try {
    const { type, page = 1 } = getQuery(event)

    const url = `${KINOPOISK_URL}/api/v2.2/films/collections?type=${type}&${page}=1`
    const { items } = await $fetch<IResponse>(url, { method: 'GET', headers })

    return items
  }
  catch (error) {
    console.log(error)
  }
})
