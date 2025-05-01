import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import { DataCollection } from '../models/DisneyCharacters'

// //fetching disney characters data from https://api.disneyapi.dev/character
export function useDisneyCharacters() {
  return useQuery({
    queryKey: ['_id'],
    queryFn: async () => {
      const res = await request.get('https://api.disneyapi.dev/character')

      //Only getting _id, name, imageUrl by using interface
      return res.body as DataCollection
    },
  })
}

//fetching disney character data from https://api.disneyapi.dev/character using id(currently hardcoded)
export function useDisneyCharacter(id: number) {
  return useQuery({
    queryKey: ['id', id],
    queryFn: async () => {
      const res = await request.get(`https://api.disneyapi.dev/character/${id}`)

      //Only getting _id, name, imageUrl by using interface
      return res.body as DataCollection
    },
  })
}
