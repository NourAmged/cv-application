import { useState } from "react";
import downArrow from "../assets/down-arrow-5-svgrepo-com.svg";
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
          <img id="open-form" src={downArrow} width={32} style={{ cursor: "pointer" }} onClick={() => setIsOpen(!isOpen)}/>
        </div>
        {isOpen && <GiForm />}
      </div>
    </div>
  );
}

export default GeneralInformation;
