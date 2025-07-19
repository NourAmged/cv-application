function CV({ generalInfo }) {
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
      <div className="cv-education-info"></div>
      <div className="cv-pro-info"></div>
    </div>
  );
}

export default CV;
