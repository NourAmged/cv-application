import { useEffect, useState } from "react";

function ProfessionalItem({ profInfo, onEdit }) {
  return (
    <div className="professional-item">
      <div>
        <p>{profInfo.job}</p>
        <p>{profInfo.company}</p>
        <p>
          {profInfo.start} - {profInfo.end}
        </p>
      </div>
      <button className="professional-edit" onClick={onEdit}>
        Edit
      </button>
    </div>
  );
}

function PeForm({ onSubmitData, profInfo, onEdit, editIndex }) {
  const [formData, setFormData] = useState({
    job: "",
    company: "",
    start: "",
    end: "",
    description: "",
  });

  useEffect(() => {
    if (editIndex !== null && profInfo[editIndex]) {
      setFormData(profInfo[editIndex]);
    }
  }, [editIndex]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = { ...formData };

    let updatedList = [...profInfo];

    if (editIndex !== null && profInfo[editIndex]) {
      updatedList[editIndex] = newEntry;
    } else {
      const isDuplicate = profInfo.some(
        (obj) => JSON.stringify(obj) === JSON.stringify(newEntry)
      );
      if (isDuplicate) return;
      updatedList.push(newEntry);
    }

    onSubmitData(updatedList);
    setFormData({
      job: "",
      company: "",
      start: "",
      end: "",
      description: "",
    });
  };

  return (
    <>
      <form className="pe-form" onSubmit={handleSubmit}>
        <label htmlFor="job">Job Title</label>
        <input
          id="job"
          required
          placeholder="Enter Job Title"
          value={formData.job}
          onChange={(e) => setFormData({ ...formData, job: e.target.value })}
        />
        <br />
        <label htmlFor="company">Company</label>
        <input
          id="company"
          placeholder="Enter Company"
          value={formData.company}
          onChange={(e) =>
            setFormData({ ...formData, company: e.target.value })
          }
          required
        />
        <br />
        <div className="date-job">
          <label htmlFor="start">
            Start Date
            <br />
            <input
              id="start"
              type="date"
              value={formData.start}
              onChange={(e) =>
                setFormData({ ...formData, start: e.target.value })
              }
              required
            />
          </label>
          <label htmlFor="end">
            End Date
            <br />
            <input
              id="end"
              type="date"
              value={formData.end}
              onChange={(e) =>
                setFormData({ ...formData, end: e.target.value })
              }
              required
            />
          </label>
        </div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          placeholder="Main tasks"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          required
        ></textarea>
        <button type="submit">Save</button>
      </form>
      {profInfo.length === 0
        ? ""
        : profInfo.map((prof, index) => {
            return (
              <ProfessionalItem
                key={index}
                profInfo={prof}
                onEdit={() => onEdit(index)}
              />
            );
          })}
    </>
  );
}

export default PeForm;
