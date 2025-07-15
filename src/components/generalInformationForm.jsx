function GiForm() {
  return (
    <form className="gi-form">
      <label htmlFor="full-name">Full Name</label>
      <input id="full-name" required placeholder="Enter your full name" />
      <br />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" placeholder="example@gmail.com" required />
      <br />
      <label htmlFor="phone-number">Phone Number</label>
      <input type="tel" id="phone-number" placeholder="123-456-789" required />
      <br />
      <label htmlFor="city-province">City and province</label>
      <input id="city-province" placeholder="City, Province" required />
      <br />
      <button type="submit">Save</button>
    </form>
  );
}

export default GiForm;
