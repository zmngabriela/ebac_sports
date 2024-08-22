import { useSelector } from 'react-redux'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import * as S from './styles'
import { RootReducer } from '../../store'

const Header = () => {
  const { itens } = useSelector((state: RootReducer) => state.carrinho)
  const { favoritos } = useSelector((state: RootReducer) => state.favoritos)

  const valorTotal = itens.reduce((acumulador, valorItemAtual) => {
    acumulador += valorItemAtual.preco
    return acumulador
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} />
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
