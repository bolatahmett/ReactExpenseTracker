import logo from './logo.svg';
import './App.css';
import { Header } from './Component/Header';
import { Form } from './Component/Form';
import { List } from './Component/List';
import { ExpenseContextProvider } from './GlobalState';
import { Container } from "reactstrap";

function App() {
  return (
    <ExpenseContextProvider>
      <Container className={"text-center"}>
        <Header></Header>
        <Form></Form>
        <List></List>
      </Container>
    </ExpenseContextProvider>
  );
}

export default App;
