import {
  AsideContainer,
  AsideNavContainer,
  AsideNavItem,
  AvaliationsContainer,
  BooksContainer,
  BooksTitle,
  Container,
  TrendingBooksContainer,
} from './styles'
import Logo from '../../assets/logo.png'
import Image from 'next/image'
import { Binoculars, ChartLineUp } from 'phosphor-react'

export default function Home() {
  return (
    <Container>
      <AsideContainer>
        <Image alt="Book Wise logo" src={Logo} quality={100} />

        <AsideNavContainer>
          <AsideNavItem>
            <ChartLineUp size={24} />
            <h2>Início</h2>
          </AsideNavItem>
          <AsideNavItem>
            <Binoculars size={24} />
            <h2>Explorar</h2>
          </AsideNavItem>
        </AsideNavContainer>
      </AsideContainer>

      <BooksContainer>
        <BooksTitle>
          <ChartLineUp size={32} />
          <h1>Início</h1>
        </BooksTitle>
        <AvaliationsContainer>
          <span>Avaliações mais recentes</span>
        </AvaliationsContainer>
      </BooksContainer>

      <TrendingBooksContainer></TrendingBooksContainer>
    </Container>
  )
}
