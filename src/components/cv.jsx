import Education from "./educationSection";

function CV({ generalInfo, educationInfo }) {
  return (
    <div className="cv-container">
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
      <div className="cv-pro-info"></div>
    </div>
  );
}

export default CV;
