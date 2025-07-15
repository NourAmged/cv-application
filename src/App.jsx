import GeneralInformation from "./components/generalInformation";
import SaveResume from "./components/saveCV";
import EducationExperience from "./components/educationExperience";

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
        <EducationExperience />
      </div>
    </>
  );
}

export default App;
