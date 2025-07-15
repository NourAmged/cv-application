function EdForm() {
  return (
    <form className="ed-form">
      <label htmlFor="degree">Degree</label>
      <input id="degree" required placeholder="Enter Degree / Field of Study" />
      <br />
      <label htmlFor="school">School</label>
      <input id="school" placeholder="Enter school / university" required />
      <br />
      <label htmlFor="city">City</label>
      <input id="city" placeholder="Enter City" required />
      <br />
      <label htmlFor="country">Country</label>
      <input id="country" placeholder="Country" required />
      <br />
      <div className="date-edu">
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
      <button type="submit">Save</button>
    </form>
  );
}

export default EdForm;
