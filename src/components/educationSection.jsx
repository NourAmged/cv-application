function Education({ educationInfo }) {
  return (
    <div>
      <span>
        {educationInfo.degree}, {educationInfo.school}
      </span>
      <div className="cv-education-data-country">
        <p>
          {educationInfo.start}, {educationInfo.end}
        </p>
        <p>
          {educationInfo.city}, {educationInfo.country}
        </p>
      </div>
    </div>
  );
}

export default Education;
