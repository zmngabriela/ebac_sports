import { RootReducer } from '../store'
import { useSelector } from 'react-redux'
import { ProdutoType } from '../App'
import { useGetSportsQuery } from '../services/api'
import Produto from '../components/Produto'
import * as S from './styles'

const ProdutosComponent = () => {
  const { data: sports } = useGetSportsQuery()
  const { favoritos } = useSelector((state: RootReducer) => state.favoritos)

  const estaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((item) => item.id)
    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <>
      <S.Produtos>
        {sports?.map((item) => (
          <Produto
            estaNosFavoritos={estaNosFavoritos(item)}
            key={item.id}
            produto={item}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
