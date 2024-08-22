import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProdutoType } from '../../App'

type CarrinhoState = {
  itens: ProdutoType[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<ProdutoType>) => {
      if (state.itens.find((item) => item.id === action.payload.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
