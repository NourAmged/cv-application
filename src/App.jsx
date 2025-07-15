import GeneralInformation from "./components/generalInformation";
import SaveResume from "./components/saveCV";

function Header() {
  return <h1>CV Generator</h1>;
}

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <SaveResume />
        <GeneralInformation />
      </div>
    </>
  );
}

export default App;
