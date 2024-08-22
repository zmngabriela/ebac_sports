import { useDispatch } from 'react-redux'
import { ProdutoType } from '../../App'
import { favoritar } from '../../store/reducers/favoritos'
import { adicionar } from '../../store/reducers/carrinho'
import * as S from './styles'

type Props = {
  produto: ProdutoType
  estaNosFavoritos: boolean
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto, estaNosFavoritos }: Props) => {
  const dispatch = useDispatch()

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.Btn onClick={() => dispatch(favoritar(produto))} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.Btn>
      <S.Btn onClick={() => dispatch(adicionar(produto))} type="button">
        Adicionar ao carrinho
      </S.Btn>
    </S.Produto>
  )
}

export default ProdutoComponent
