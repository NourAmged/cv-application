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
        {
          educationInfo ? (
            <div className="cv-education-info">
              <h5>Education</h5>
              <div>
                <span>{educationInfo.degree}, {educationInfo.school}</span>
                <div className="cv-education-data-country">
                  <p>{educationInfo.start}, {educationInfo.end}</p>
                  <p>{educationInfo.city}, {educationInfo.country}</p>
                </div>
              </div>
            </div>
          )
          : ""
        }
      </div>
      <div className="cv-pro-info"></div>
    </div>
  );
}

export default CV;
