function EducationItems({ educationInfo }) {
  return (
    <div className="education-item">
      <p>{educationInfo.degree}</p>
      <p>{educationInfo.school}</p>
      <p>
        {educationInfo.city}, {educationInfo.country}
      </p>
      <p>
        {educationInfo.start} - {educationInfo.end}
      </p>
    </div>
  );
}

function EdForm({ onSubmitData, educationInfo }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const result = {
      degree: formData.get("degree"),
      school: formData.get("school"),
      city: formData.get("city"),
      country: formData.get("country"),
      start: formData.get("start"),
      end: formData.get("end"),
    };

    const checkDuplicates = educationInfo.some(obj => JSON.stringify(obj) === JSON.stringify(result));

    if (!checkDuplicates) onSubmitData([...educationInfo, result]);
  };

  return (
    <>
      <form className="ed-form" onSubmit={handleSubmit}>
        <label htmlFor="degree">Degree</label>
        <input
          id="degree"
          name="degree"
          placeholder="Enter Degree / Field of Study"
          required
        />
        <br />
        <label htmlFor="school">School</label>
        <input
          id="school"
          name="school"
          placeholder="Enter school / university"
          required
        />
        <br />
        <label htmlFor="city">City</label>
        <input id="city" name="city" placeholder="Enter City" required />
        <br />
        <label htmlFor="country">Country</label>
        <input id="country" name="country" placeholder="Country" required />
        <br />
        <div className="date-edu">
          <label htmlFor="start">
            Start Date
            <br />
            <input id="start" name="start" type="date" />
          </label>
          <label htmlFor="end">
            End Date
            <br />
            <input id="end" name="end" type="date" />
          </label>
        </div>
        <button type="submit">Save</button>
      </form>
      {educationInfo.length === 0
        ? ""
        : educationInfo.map((edu, index) => {
            return <EducationItems key={index} educationInfo={edu} />;
          })}
    </>
  );
}

export default EdForm;
