import {AvatarList, CardComponent, CustomChart, CustomTable, Header } from "@/components"
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
  const mockTableData = {
  headers: ['Name', 'Email', 'Actions'],
  rows: [
    [
      <span>Nome 1</span>,
      <span>nome1@email.com</span>,
      <button>ACTION</button>,
    ],
    [
      <span>Nome 2</span>,
      <span>nome2@email.com</span>,
      <button>ACTION</button>,
    ],
    [
      <span>Nome 3</span>,
      <span>nome3@email.com</span>,
      <button>ACTION</button>,
    ],
  ],
}
  return (
    <>
      <Header/>
      <Container maxWidth="lg">
        <CardComponent>CARD</CardComponent>
        <CardComponent>
          <AvatarList listData={mockListData}/>
        </CardComponent>
        <CardComponent>
          <CustomTable 
            headers={mockTableData.headers} 
            rows={mockTableData.rows}/>
        </CardComponent>
        
        <CardComponent>
          <CustomChart
            labels={['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']}
            data={[1000.12, 2456.54, 986.32, 654.89, 1000.12, 2456.54, 986.32, 654.89,2456.54, 986.32, 654.89]}
            type="line"
          />
        </CardComponent>
      
      </Container>
    </>
  )
}

export default Home
