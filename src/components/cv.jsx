function CV({ generalInfo }) {
  return (
    <div className="cv-container">
      <div className="cv-main-info">
        {generalInfo ? (
          <>
            <h2>{generalInfo.name}</h2>
            <p>Email: {generalInfo.email}</p>
            <p>Phone: {generalInfo.phone}</p>
            <p>Location: {generalInfo.cityProvince}</p>
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
