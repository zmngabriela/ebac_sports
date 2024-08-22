import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ProdutoType } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app'
  }),
  endpoints: (builder) => ({
    getSports: builder.query<ProdutoType[], void>({
      query: () => 'api/ebac_sports'
    })
  })
})

export const { useGetSportsQuery } = api
export default api
