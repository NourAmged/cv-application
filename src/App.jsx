import GeneralInformation from "./components/generalInformation";
import SaveResume from "./components/saveCV";
import EducationExperience from "./components/educationExperience";
import ProfessionalExperience from "./components/professionalExperience";

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
        <ProfessionalExperience />
      </div>
    </>
  );
}

export default App;
