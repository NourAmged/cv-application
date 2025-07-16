import GeneralInformation from "./components/generalInformation";
import SaveResume from "./components/saveCV";
import EducationExperience from "./components/educationExperience";
import ProfessionalExperience from "./components/professionalExperience";
import CV from "./components/cv";

function Header() {
  return <h1>CV Generator</h1>;
}

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="container">
          <SaveResume />
          <GeneralInformation />
          <EducationExperience />
          <ProfessionalExperience />
        </div>
        <CV />
      </div>
    </>
  );
}

export default App;
