import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Row, Col, Container} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Row className="mx-0">
        <Col><Button variant="primary">Button #1</Button></Col>
        <Col><Button variant="secondary" className="mx-2">Button #2</Button></Col>
        <Col><Button variant="success">Button #3</Button></Col>
      </Row>
      <Container>
        <Row>
          <Col>1 of 3</Col>
          <Col xs={6}>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col xs={5}>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
