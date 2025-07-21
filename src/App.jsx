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

  const [educationInfoIdx, setEducationIdx] = useState(null);
  const [educationInfo, setEducationInfo] = useState([]);

  const [profInfoIdx, setProfInfoIdx] = useState(null);
  const [profInfo, setProfInfo] = useState([]);

  return (
    <>
      <Header />
      <div className="main-container">
        <div className="container">
          <SaveResume />
          <GeneralInformation
            onSubmitData={setGeneralInfo}
            info={generalInfo}
          />
          <EducationExperience
            onSubmitData={setEducationInfo}
            educationInfo={educationInfo}
            onEdit={(index) => setEducationIdx(index)}
            editIndex={educationInfoIdx}
          />
          <ProfessionalExperience
            onSubmitData={setProfInfo}
            profInfo={profInfo}
            onEdit={(index) => setProfInfoIdx(index)}
            editIndex={profInfoIdx}
          />
        </div>
        <CV generalInfo={generalInfo} educationInfo={educationInfo} />
      </div>
    </>
  );
}

export default App;
