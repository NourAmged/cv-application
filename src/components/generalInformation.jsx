import { useState } from "react";
import downArrow from "../assets/down-arrow-backup-2-svgrepo-com.svg";
import upArrow from '../assets/up-arrow-backup-3-svgrepo-com.svg';
import person from "../assets/person-svgrepo-com.svg";
import GiForm from "./generalInformationForm";

function GeneralInformation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="general-information-container">
      <div className="general-information">
        <div>
          <div>
            <img src={person} width={32} />
            <p>General Information</p>
          </div>
          <img src={!isOpen ? downArrow : upArrow} width={28} style={{ cursor: "pointer" }} onClick={() => setIsOpen(!isOpen)}/>
        </div>
        {isOpen && <GiForm />}
      </div>
    </div>
  );
}

export default GeneralInformation;
