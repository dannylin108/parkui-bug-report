import { Center, Container } from 'styled-system/jsx'
import Selecto from './examples/Selecto'

export const App = () => {
  return (
    <Container py={{ base: '16', md: '24' }}>
      <Center>
        <Selecto/>
      </Center>
    </Container>
  )
}
