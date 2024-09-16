import { Titulo as TituloEstilo } from './styles' //esse as é pq estamos importando de styles o estilo chamado Titulo e como aqui ja tinha uma const de msm nome a gente coloca Titulo as TituloEstilo pra difernciar

export type Props = {
  children: string
  fontSize?: number
}

const Titulo = (props: Props) => <TituloEstilo>{props.children}</TituloEstilo>

export default Titulo
