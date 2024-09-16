import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Hibernon Neto</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        hiberNT
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Estudante Front-end
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
//SidebarContainer foi feito para ser um div do sidebar para podermo estlizar para quem o sidebar acompanhe a pagina na rolagem do site se n tivesse essa "div" q é o SidebarContainer n teriamos como pois o aside acompanha a alltura do site
