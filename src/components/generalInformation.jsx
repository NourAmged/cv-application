import downArrow from "../assets/down-arrow-5-svgrepo-com.svg";
import person from "../assets/person-svgrepo-com.svg";
import GiForm from "./generalInformationForm";


function GeneralInformation() {
  return (
    <div className="general-information-container">
      <div className="general-information">
        <div>
          <div>
            <img src={person} width={32} />
            <p>General Information</p>
          </div>
          <img src={downArrow} width={32} />
        </div>
        <GiForm />
      </div>
    </div>
  );
}

export default GeneralInformation;
