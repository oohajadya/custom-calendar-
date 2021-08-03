import React from "react"
import { Navbar, Container,Nav } from "react-bootstrap"

const Navigation = ({ selectedViews }) => {
    const [view, setView] = React.useState("day")
    React.useEffect(() => {
        selectedViews(view)
    }, [view, selectedViews])
    return (
        <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand onClick ={() => setView('month')}>Today</Navbar.Brand>
    <Nav className="me-left">
      <Nav.Link onClick ={() => setView('day')}>Day</Nav.Link>
      <Nav.Link onClick ={() => setView('week')}>Week</Nav.Link>
      <Nav.Link onClick ={() => setView('month')}>Month</Nav.Link>
      <Nav.Link onClick ={() => setView('year')}>Year</Nav.Link>
     
    </Nav>
    </Container>
  </Navbar>
    )
}

export default Navigation
