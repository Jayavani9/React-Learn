
import './App.css';


function MyButton() {
  return (
    <button> I am a Button !!</button>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}


function App() {
  return (
    <div className='App'>
      <h1> Welcome to MyApp !!!</h1>
      <MyButton />
      <AboutPage />
    </div>
  );
}

export default App;
