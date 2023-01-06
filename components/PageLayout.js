
//import { Container } from "react-bootstrap";
//import Row from 'react-bootstrap/Row';

export default function PageLayout({children}) {
  return (
    <div className="container">
      <div className="wrapper">
        {children}
      </div>
    </div>
  )
}