import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Profile from "./components/Profile";
import Counter from "./components/Counter";
import Counter_binding from "./components/Counter_binding";
import Resume from "./components/Resume";
import FunctionEvent from "./components/FunctionEvent";
import ClassEvent from "./components/ClassEvent";
import FunctionalCounter from "./components/FunctionalCounter";
import ConditionalComponent from "./components/ConditionalComponent";
import Product from "./components/Product";

const name = "Lilly";

function App() {
  return (
    <div className="App">
      {/* <FunctionEvent></FunctionEvent>
      <ClassEvent></ClassEvent>
      <Resume name="Xavier"></Resume>
      <Counter></Counter>
      <Profile name={name} lastname="Gladwin" />
      <Profile name="Leanne" lastname="Gladwin" />
      <Message messagecode={404} messagecontent="Nada found"></Message>
      <Counter_binding></Counter_binding>
      <FunctionalCounter></FunctionalCounter>
      <ConditionalComponent></ConditionalComponent> */}
      <Product></Product>
    </div>
  );
}

export default App;
