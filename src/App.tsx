import './App.css'
import ColorList from './ExerciseSet2/ColorList';
import ContactItem from './ExerciseSet2/ContactItem';

function getGreeting() {
  return "Welcome to the world of React";
}

function Header() {
  return <h1>Welcome to My App!</h1>
}

function App() {
  
  let a = 5;
  let b = 7;
  let c = a + b;

  const colors = [<p>red</p>, <p>green</p>, <p>blue</p>, <p>yellow</p>];

  const numbers = [1, 2, 3, 4, 5];

  const squaredJSXOutput = [];
  for (let i = 0; i < numbers.length; i++) {
    squaredJSXOutput.push(<p>{ numbers[i] } squared is { numbers[i] * numbers[i] }</p>);
  }

  const names = ["Alice", "Bob", "Charlie"];

  return (
    <>
      <h2>Exercise set 2, exercise 3 - contact item</h2>
      <ContactItem name="Goofy" address="Disney road 1"/>
      <ContactItem name="Bob" address="Golf way 45"/>
      <ContactItem name="Charlie" address="Hobo road 87"/>

      {/* <h1>Hello World</h1>
      <ColorList />
      <p>Any kind of html elements are valid</p>
      <p>Value of c is {c + 10 + 100}</p>
      <p>{ getGreeting() }</p>
      <h2>List of Colors</h2>
      <p>{ colors }</p>
      <h2>Numbers squared</h2>
      <p>Here is an example format</p>
      <p>X squared is Y</p>
      <p>{ squaredJSXOutput }</p>
      <h2>Our own component below</h2>
      { Header() }
      <Header />
      <ColorList /> */}
    </>
  )
}

export default App
