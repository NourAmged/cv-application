import { useState } from "react";
import downArrow from "../assets/down-arrow-backup-2-svgrepo-com.svg";
import upArrow from "../assets/up-arrow-backup-3-svgrepo-com.svg";
import cap from "../assets/graduation-cap-svgrepo-com.svg";
import EdForm from "./educationExperienceForm";

function EducationExperience({
  onSubmitData,
  educationInfo,
  onEdit,
  editIndex,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="education-experience-container">
      <div className="education-experience">
        <div>
          <div>
            <img src={cap} width={32} />
            <p>Education Experience</p>
          </div>
          <img
            src={!isOpen ? downArrow : upArrow}
            width={28}
            style={{ cursor: "pointer" }}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        {isOpen && (
          <EdForm
            onSubmitData={onSubmitData}
            educationInfo={educationInfo}
            onEdit={onEdit}
            editIndex={editIndex}
          />
        )}
      </div>
    </div>
  );
}

export default EducationExperience;
