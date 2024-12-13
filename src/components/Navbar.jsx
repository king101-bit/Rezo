import { Nav, Navbar, Button, Container } from "react-bootstrap"
import LogoIcon from "../assets/Logo.svg"
const navbar = () => {
  return (
<>
 <Navbar expand="lg" className=" py-3">
      <Container>
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img src={LogoIcon} alt="Rezo Logo" />
          <span className="ms-2 fw-bold">Rezo</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#" className="mx-2">Home</Nav.Link>
            <Nav.Link href="#" className="mx-2">Movies</Nav.Link>
            <Nav.Link href="#" className="mx-2">Series</Nav.Link>
            <Nav.Link href="#" className="mx-2">Categories</Nav.Link>
            <Nav.Link href="#" className="mx-2">Contact</Nav.Link>
          </Nav>
          <div className="d-flex gap-2">
            <Button style={{backgroundColor: '#2C8C99',
                  borderColor: '#2C8C99',
            }}>Get Started</Button>
<Button
  style={{
    backgroundColor: 'transparent',
    color: '#2C8C99',
    borderColor: '#2C8C99',
  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = '#2C8C99';
    e.target.style.color = '#fff';
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = 'transparent';
    e.target.style.color = '#2C8C99';
  }}
>
  Login
</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</>  )
}

export default navbar;