import { Navbar, Container, Nav } from "react-bootstrap"


const Navbar1 = () => {


    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div>
            <Navbar expand="lg" bg="dark" variant="dark" fixed="top" >
                <Container>
                    <Navbar.Brand >
                        <b style={{ color: "#fc7f03", fontFamily: "Roboto, sans-serif", letterSpacing: "5px", fontSize: "30px", }}>SIMPLEPOST</b>
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link onClick={scrollTop}  >Create a new post</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbar1