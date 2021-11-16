import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import {Button, Alert, Row, Col} from "react-bootstrap";
import Leftside from './components/Leftside';
import Rigthside from './components/Rigthside';


function App() {
  return (
    <div className="App">
      <Row className="landing">
        
        <Col> <Leftside className=""/></Col>
        <Col> <Rigthside className=""/></Col>

      </Row>
    </div>

  );
}

export default App;
