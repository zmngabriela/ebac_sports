import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProdutoType } from '../../App'

type favoritosState = {
  favoritos: ProdutoType[]
}

const initialState: favoritosState = {
  favoritos: []
}

const favoritoSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<ProdutoType>) => {
      if (state.favoritos.find((item) => item.id === action.payload.id)) {
        const removidoFavoritos = state.favoritos.filter(
          (item) => item.id !== action.payload.id
        )
        state.favoritos = removidoFavoritos
      } else {
        state.favoritos.push(action.payload)
      }
    }
  }
})

export const { favoritar } = favoritoSlice.actions
export default favoritoSlice.reducer
