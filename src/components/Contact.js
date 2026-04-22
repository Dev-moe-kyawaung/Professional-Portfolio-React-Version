import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("သင့်စာကိုအောင်မြင်စွာပို့ပြီးပါပြီ။");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section bg-light">
      <div className="container">
        <h2>ဆက်သွယ်ရန်</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="သင့်နာမည်"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="သင့်အီးမေးလ်"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="သင့် message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn">ပို့မည်</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

