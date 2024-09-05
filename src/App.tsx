import { Center, Container } from 'styled-system/jsx';
import MySelect from './components/Select';

export const App = () => {
  return (
    <Container py={{ base: '16', md: '24' }}>
      <Center>
        <MySelect/>
      </Center>
    </Container>
  )
}
