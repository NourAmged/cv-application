import { useState } from "react";
import downArrow from "../assets/down-arrow-backup-2-svgrepo-com.svg";
import upArrow from "../assets/up-arrow-backup-3-svgrepo-com.svg";
import suitcase from "../assets/suitcase1-svgrepo-com.svg";
import PeForm from "./professionalExperienceForm";

function ProfessionalExperience({ onSubmitData, profInfo, onEdit, editIndex }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="professional-experience-container">
      <div className="professional-experience">
        <div>
          <div>
            <img src={suitcase} width={32} />
            <p>Professional Experience</p>
          </div>
          <img
            src={!isOpen ? downArrow : upArrow}
            width={28}
            style={{ cursor: "pointer" }}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        {isOpen && (
          <PeForm
            onSubmitData={onSubmitData}
            profInfo={profInfo}
            onEdit={onEdit}
            editIndex={editIndex}
          />
        )}
      </div>
    </div>
  );
}

export default ProfessionalExperience;
