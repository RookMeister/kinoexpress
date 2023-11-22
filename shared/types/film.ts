export interface IGenre {
  genre: string
}
export interface ICountry {
  country: string
}

enum Type { FILM, TV_SHOW, VIDEO, MINI_SERIES, TV_SERIES, UNKNOWN }

export interface IFilm {
  kinopoiskId: number
  nameRu: string
  nameEn: string
  nameOriginal: string
  countries: ICountry[]
  genres: IGenre[]
  ratingKinopoisk: number
  ratingImbd: number
  year: string
  type: Type
  posterUrl: string
  posterUrlPreview: string
}
