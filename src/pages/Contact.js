import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: 'Bryce W.',
    email: 'brycewheelss22@gmail.com',
    message: 'Happy coding'
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic here
    console.log(formData); // Now using formData to see the data being submitted
  };

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;