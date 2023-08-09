import Image from 'next/image'
import {
  Container,
  LoginContainer,
  LoginOption,
  LoginOptionsContainer,
} from './styles'
import Logo from '../../assets/loginLogo.png'
import GoogleIcon from '../../assets/google.svg'
import GithubIcon from '../../assets/github.svg'
import { RocketLaunch } from 'phosphor-react'

export default function Login() {
  return (
    <Container>
      <Image alt="logo" src={Logo} quality={100} />
      <LoginContainer>
        <div>
          <h2>Boas Vindas!</h2>
          <p>Faça seu login ou acesse como visitante</p>

          <LoginOptionsContainer>
            <LoginOption>
              <Image alt="Google logo" src={GoogleIcon} quality={100} />
              <span>Entrar com Google</span>
            </LoginOption>
            <LoginOption>
              <Image alt="Github logo" src={GithubIcon} quality={100} />
              <span>Entrar com GitHub</span>
            </LoginOption>
            <LoginOption>
              <RocketLaunch size={32} />
              <span>Entrar como visitante</span>
            </LoginOption>
          </LoginOptionsContainer>
        </div>
      </LoginContainer>
    </Container>
  )
}
