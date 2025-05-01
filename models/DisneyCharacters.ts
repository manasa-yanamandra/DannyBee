export interface DisneyCollection {
  _id?: number
  name?: string
  imageUrl?: string
}

export interface DataCollection {
  info: Info
  data: Data
}

export interface Data {
  _id: number
  films: string[]
  shortFilms: string[]
  tvShows: string[]
  videoGames: string[]
  parkAttractions: string[]
  allies: string[]
  enemies: string[]
  sourceUrl: string
  name: string
  imageUrl?: string
  createdAt: Date
  updatedAt: Date
  url: string
  __v: number
}

export interface Info {
  count: number
  totalPages: number
  previousPage: null
  nextPage: string
}
