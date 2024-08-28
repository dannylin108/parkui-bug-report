import { Center, Container } from 'styled-system/jsx';
import MyDrawer from './components/Drawer';

export const App = () => {
  return (
    <Container py={{ base: '16', md: '24' }}>
      <Center>
        <MyDrawer/>
      </Center>
    </Container>
  )
}
