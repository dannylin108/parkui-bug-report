import { Center, Container } from 'styled-system/jsx'
import Combo from './examples/Combo'

export const App = () => {
  return (
    <Container py={{ base: '16', md: '24' }}>
      <Center>
        <Combo/>
      </Center>
    </Container>
  )
}
