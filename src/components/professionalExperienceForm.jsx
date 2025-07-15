function PeForm() {
  return (
    <form className="pe-form">
      <label htmlFor="job">Job Title</label>
      <input id="job" required placeholder="Enter Job Title" />
      <br />
      <label htmlFor="company">Company</label>
      <input id="compony" placeholder="Enter Company" required />
      <br />
      <div className="date-job">
        <label htmlFor="start">
          Start Date
          <br />
          <input id="start" type="date" />
        </label>
        <label htmlFor="end">
          End Date
          <br />
          <input id="end" type="date" />
        </label>
      </div>
      <label htmlFor="description">Description</label>
      <textarea id = "description" placeholder="Main tasks"></textarea>
      <button type="submit">Save</button>
    </form>
  );
}

export default PeForm;
