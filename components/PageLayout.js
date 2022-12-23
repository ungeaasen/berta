
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';


export default function PageLayout({children}) {
  return (
    <Container>
      <Row>
        {children}
      </Row>
      <footer className="page-footer">
        <div>
          <a href="#">courses</a>{' | '}
          <a href="#">github</a>{' | '}
          <a href="#">facebook</a>
        </div>
      </footer>
    </Container>
  )
}