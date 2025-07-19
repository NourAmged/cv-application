import { useState, useEffect } from "react";

function GiForm({ onSubmitData, info }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cityProvince: "",
  });

  useEffect(() => {
    if (info) {
      setFormData(info);
    }
  }, [info]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name === "city-province" ? "cityProvince" : name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitData(formData);
  };

  return (
    <form className="gi-form" onSubmit={handleSubmit}>
      <label htmlFor="full-name">Full Name</label>
      <input
        id="full-name"
        name="name"
        required
        placeholder="Enter your full name"
        value={formData.name}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        placeholder="example@gmail.com"
        value={formData.email}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="phone-number">Phone Number</label>
      <input
        type="tel"
        id="phone-number"
        name="phone"
        required
        placeholder="123-456-789"
        value={formData.phone}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="city-province">City and province</label>
      <input
        id="city-province"
        name="city-province"
        required
        placeholder="City, Province"
        value={formData.cityProvince}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Save</button>
    </form>
  );
}

export default GiForm;
