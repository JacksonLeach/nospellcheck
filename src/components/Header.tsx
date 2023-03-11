import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { Outlet } from 'react-router'

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">NoSpellcheck</Navbar.Brand>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
}
export default Header
