import './App.css'
import ColorList from './ExerciseSet2/ColorList';
import ContactItem from './ExerciseSet2/ContactItem';
import Greeter from './ExerciseSet3/1Greeter';
import ContactList from './ExerciseSet3/4ContactList';
import UserNameDisplay from './Lesson5Typescript/UserNameDisplay';
import UserDataDisplay from './Lesson5Typescript/UserDataDisplay';
import ConsoleButton from './ExerciseSet4/1ConsoleButton';
import ClickCounter from './ExerciseSet5/ClickCounter';
import StateExample from './ExerciseSet5/StateExample';
import ColorChange from './ExerciseSet5/ColorChange';
import TextToggler from './ExerciseSet5/TextToggler';


function App() {

  const names = ["Alice", "Bob", "Charlie"];

  const contactData = [
    { name: "Alice", address: "Wonderland 1" },
    { name: "Bob", address: "Builder street 2" },
    { name: "Charlie", address: "Chocolate factory 3" }
  ];

  const user = {
    firstName: "John",
    lastName: "Doe",
    age: 30
  }

  return (
    <>
      <TextToggler />
      <ColorChange defaultColor='black' hoverColor='red'/>
      <ColorChange defaultColor='blue' hoverColor='green'/>
      <ClickCounter />
      <StateExample />

      <ConsoleButton consoleText="Jippikay yei!"/>
      <ConsoleButton consoleText="Hello World!"/>
      
      <UserNameDisplay firstName={user.firstName} lastName={user.lastName} age={user.age}/>
      <UserNameDisplay {...user}/>
      <UserDataDisplay userData={user}/>

      <ContactList contactData={contactData}/>

      <Greeter name="Lasse"/>
      <Greeter name="Jonas"/>
      <Greeter name="Max"/>
      {/* 
      Lesson 3 things below*/}
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
