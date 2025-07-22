import Education from "./educationSection";
import Professional from "./professionalSection";

function CV({ generalInfo, educationInfo, profInfo, ref }) {
  return (
    <div className="cv-container" ref={ref}>
      <div className="cv-main-info">
        {generalInfo ? (
          <>
            <h2>{generalInfo.name}</h2>
            <div>
              <span>{generalInfo.email}</span>
              <span>{generalInfo.phone}</span>
              <span>{generalInfo.cityProvince}</span>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      <div className="cv-education-info-container">
        <div className="cv-education-info">
          {educationInfo.length === 0 ? "" : <h5>Education</h5>}
          {educationInfo.map((edu, index) => {
            return <Education key={index} educationInfo={edu} />;
          })}
        </div>
      </div>
      <div className="cv-pro-info">
        {profInfo.length === 0 ? "" : <h5>Professional Experience</h5>}
        {profInfo.map((prof, index) => {
          return <Professional key={index} profInfo={prof} />;
        })}
      </div>
    </div>
  );
}

export default CV;
