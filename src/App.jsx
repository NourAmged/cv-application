import GeneralInformation from "./components/generalInformation";
import SaveResume from "./components/saveCV";
import EducationExperience from "./components/educationExperience";
import ProfessionalExperience from "./components/professionalExperience";
import { useState } from "react";
import CV from "./components/cv";

function Header() {
  return <h1>CV Generator</h1>;
}

function App() {
  const [generalInfo, setGeneralInfo] = useState(null);
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="container">
          <SaveResume />
          <GeneralInformation onSubmitData={setGeneralInfo} />
          <EducationExperience />
          <ProfessionalExperience />
        </div>
        <CV generalInfo={generalInfo} />
      </div>
    </>
  );
}

export default App;
