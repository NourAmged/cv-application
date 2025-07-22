import GeneralInformation from "./components/generalInformation";
import SaveResume from "./components/saveCV";
import EducationExperience from "./components/educationExperience";
import ProfessionalExperience from "./components/professionalExperience";
import { useState, useRef } from "react";
import CV from "./components/cv";

function Header() {
  return <h1>CV Generator</h1>;
}

function App() {
  const cvRef = useRef();

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
          <SaveResume cvRef={cvRef} />
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
        <CV
          generalInfo={generalInfo}
          educationInfo={educationInfo}
          profInfo={profInfo}
          ref={cvRef}
        />
      </div>
    </>
  );
}

export default App;
