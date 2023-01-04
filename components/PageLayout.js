
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';

export default function PageLayout({children}) {
  return (
    <Container>
      <Row>
        {children}
      </Row>
    </Container>
  )
}