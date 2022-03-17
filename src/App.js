import logo from './logo.svg';
import './App.css';
import Badge from './styledDemo/Badge';
import Button from './styledDemo/Button';
import { PRIMARY_COLOR } from './styledDemo/styles';
import Container from './styledDemo/Container';

function App() {
  return (
    <div className='App'>
    <div className="border" style={{border:`5 px solid ${PRIMARY_COLOR}`}}>

      <h1>Styled Components Section</h1>
      <Container>
     <Badge>badge</Badge>
     <Badge rounded>round badge</Badge>
     <Badge secondary>secondary badge</Badge>
     <Button> button</Button>
     <Button outline>outline button</Button>
    <Badge success>success</Badge>
    </Container>
    </div>
    </div>
    
  );
}

export default App;
