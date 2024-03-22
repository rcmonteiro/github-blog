import logo from '../../assets/logo.png'
import { HeaderContainer } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="" width={148} height={98} />
    </HeaderContainer>
  )
}
