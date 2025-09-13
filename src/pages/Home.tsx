import {AvatarList, CardComponent, Header } from "@/components"
import { Container } from "@mui/material"
import { currencyConvert } from "@/utils"


function Home() {
  const mockListData = [
    {
      avatar: '/dnc-avatar.svg',
      name: 'Willan Ferreira de Souza',
      subtitle: currencyConvert(18000),
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 2',
      subtitle: currencyConvert(1000),
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 3',
      subtitle: currencyConvert(1000),
    },
  ]

  return (
    <>
      <Header/>
      <Container maxWidth="lg">
        <CardComponent>CARD</CardComponent>
        <CardComponent>
          <AvatarList listData={mockListData}/>
        </CardComponent>
      </Container>
    </>
  )
}

export default Home
