function GiForm({ onSubmitData }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const result = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      cityProvince: formData.get("city-province"),
    };

    onSubmitData(result);
  };

  return (
    <>
      <form className="gi-form" onSubmit={handleSubmit}>
        <label htmlFor="full-name">Full Name</label>
        <input
          id="full-name"
          name="name"
          required
          placeholder="Enter your full name"
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@gmail.com"
          required
        />
        <br />
        <label htmlFor="phone-number">Phone Number</label>
        <input
          type="tel"
          id="phone-number"
          name="phone"
          placeholder="123-456-789"
          required
        />
        <br />
        <label htmlFor="city-province">City and province</label>
        <input
          id="city-province"
          name="city-province"
          placeholder="City, Province"
          required
        />
        <br />
        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default GiForm;
