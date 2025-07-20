import { useEffect, useState } from "react";

function EducationItems({ educationInfo, onEdit }) {
  return (
    <div className="education-item">
      <div>
        <p>{educationInfo.degree}</p>
        <p>{educationInfo.school}</p>
        <p>
          {educationInfo.city}, {educationInfo.country}
        </p>
        <p>
          {educationInfo.start} - {educationInfo.end}
        </p>
      </div>
      <button className="education-edit" onClick={onEdit}>
        Edit
      </button>
    </div>
  );
}

function EdForm({ onSubmitData, educationInfo, onEdit, editIndex }) {
  const [formData, setFormData] = useState({
    degree: "",
    school: "",
    city: "",
    country: "",
    start: "",
    end: "",
  });

  useEffect(() => {
    if (editIndex !== null && educationInfo[editIndex]) {
      setFormData(educationInfo[editIndex]);
    }
  }, [editIndex]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = { ...formData };

    let updatedList = [...educationInfo];

    if (editIndex !== null && educationInfo[editIndex]) {
      updatedList[editIndex] = newEntry; // Edit
    } else {
      const isDuplicate = educationInfo.some(
        (obj) => JSON.stringify(obj) === JSON.stringify(newEntry)
      );
      if (isDuplicate) return;
      updatedList.push(newEntry);
    }

    onSubmitData(updatedList);
  };

  return (
    <>
      <form className="ed-form" onSubmit={handleSubmit}>
        <label htmlFor="degree">Degree</label>
        <input
          id="degree"
          name="degree"
          placeholder="Enter Degree / Field of Study"
          value={formData.degree}
          onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
          required
        />
        <br />
        <label htmlFor="school">School</label>
        <input
          id="school"
          name="school"
          placeholder="Enter school / university"
          value={formData.school}
          onChange={(e) => setFormData({ ...formData, school: e.target.value })}
          required
        />
        <br />
        <label htmlFor="city">City</label>
        <input
          id="city"
          name="city"
          placeholder="Enter City"
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          required
        />
        <br />
        <label htmlFor="country">Country</label>
        <input
          id="country"
          name="country"
          placeholder="Country"
          required
          value={formData.country}
          onChange={(e) =>
            setFormData({ ...formData, country: e.target.value })
          }
        />
        <br />
        <div className="date-edu">
          <label htmlFor="start">
            Start Date
            <br />
            <input
              id="start"
              name="start"
              type="date"
              value={formData.start}
              onChange={(e) =>
                setFormData({ ...formData, start: e.target.value })
              }
            />
          </label>
          <label htmlFor="end">
            End Date
            <br />
            <input
              id="end"
              name="end"
              type="date"
              value={formData.end}
              onChange={(e) =>
                setFormData({ ...formData, end: e.target.value })
              }
            />
          </label>
        </div>
        <button type="submit">Save</button>
      </form>
      {educationInfo.length === 0
        ? ""
        : educationInfo.map((edu, index) => {
            return (
              <EducationItems
                key={index}
                educationInfo={edu}
                onEdit={() => onEdit(index)}
              />
            );
          })}
    </>
  );
}

export default EdForm;
