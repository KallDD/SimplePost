import { Navbar, Container, Nav, } from "react-bootstrap"


const Footer = () => {

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    return (
        <div>
            <Navbar expand="lg" bg="dark" variant="dark" style={{position: "relative", bottom: "0", right: "0", left: "0"}}>
                <Container>
                    <Navbar.Brand style={{color:"#fc7f03"}}>
                        Footer
                    </Navbar.Brand>
                    <Nav >
                        <Nav.Link onClick = {scrollTop} >Create a new post</Nav.Link>
                        <Nav.Link href="https://commons.wikimedia.org/wiki/File:Malsata_monstro.svg" target="_blank">Logo creator</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Footer