import React, { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    password: "",
    email: "",
    age: 18,
    phone: "",
    website: "",
    dob: "",
    time: "",
    dateTime: "",
    month: "",
    week: "",
    gender: "",
    skills: [],
    color: "#174ea6",
    level: 50,
    search: "",
    hidden: "Student"
  });

  const [message, setMessage] = useState("");

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "skills") {
      setForm(prev => ({
        ...prev,
        skills: checked
          ? [...prev.skills, value]
          : prev.skills.filter(skill => skill !== value)
      }));
    } else {
      setForm(prev => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value
      }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setMessage("Registration submitted successfully!");
  }

  function handleReset() {
    setForm({
      name: "",
      password: "",
      email: "",
      age: 18,
      phone: "",
      website: "",
      dob: "",
      time: "",
      dateTime: "",
      month: "",
      week: "",
      gender: "",
      skills: [],
      color: "#174ea6",
      level: 50,
      search: "",
      hidden: "Student"
    });
    setMessage("");
  }

  return (
    <div style={{ fontFamily: "Arial", maxWidth: "600px",
      margin: "20px auto", padding: "20px" }}>

      <h1>Student Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input name="name" type="text" value={form.name}
          onChange={handleChange} required />

        <label>Password:</label>
        <input name="password" type="password"
          value={form.password} onChange={handleChange}
          required />

        <label>Email:</label>
        <input name="email" type="email" value={form.email}
          onChange={handleChange} required />

        <label>Age:</label>
        <input name="age" type="number" min="18" max="60"
          value={form.age} onChange={handleChange} />

        <label>Phone:</label>
        <input name="phone" type="tel" value={form.phone}
          onChange={handleChange} />

        <label>Website:</label>
        <input name="website" type="url" value={form.website}
          onChange={handleChange} />

        <label>Date of Birth:</label>
        <input name="dob" type="date" value={form.dob}
          onChange={handleChange} />

        <label>Preferred Time:</label>
        <input name="time" type="time" value={form.time}
          onChange={handleChange} />

        <label>Date and Time:</label>
        <input name="dateTime" type="datetime-local"
          value={form.dateTime} onChange={handleChange} />

        <label>Month:</label>
        <input name="month" type="month" value={form.month}
          onChange={handleChange} />

        <label>Week:</label>
        <input name="week" type="week" value={form.week}
          onChange={handleChange} />

        <label>Gender:</label>
        <div>
          <label>
            <input type="radio" name="gender" value="Male"
              checked={form.gender === "Male"}
              onChange={handleChange} /> Male
          </label>
          <label>
            <input type="radio" name="gender" value="Female"
              checked={form.gender === "Female"}
              onChange={handleChange} /> Female
          </label>
          <label>
            <input type="radio" name="gender" value="Other"
              checked={form.gender === "Other"}
              onChange={handleChange} /> Other
          </label>
        </div>

        <label>Skills:</label>
        <div>
          <label>
            <input type="checkbox" name="skills" value="HTML"
              checked={form.skills.includes("HTML")}
              onChange={handleChange} /> HTML
          </label>
          <label>
            <input type="checkbox" name="skills" value="CSS"
              checked={form.skills.includes("CSS")}
              onChange={handleChange} /> CSS
          </label>
          <label>
            <input type="checkbox" name="skills" value="React"
              checked={form.skills.includes("React")}
              onChange={handleChange} /> React
          </label>
        </div>

        <label>Upload File:</label>
        <input type="file" name="file" />

        <label>Favorite Color:</label>
        <input name="color" type="color" value={form.color}
          onChange={handleChange} />

        <label>Skill Level: {form.level}</label>
        <input name="level" type="range" min="0" max="100"
          value={form.level} onChange={handleChange} />

        <label>Search:</label>
        <input name="search" type="search"
          value={form.search} onChange={handleChange} />

        <input type="hidden" name="hidden"
          value={form.hidden} readOnly />

        <label>Comments:</label>
        <textarea rows="3" placeholder="Enter comments..." />

        <label>Course:</label>
        <select defaultValue="ReactJS">
          <option>ReactJS</option>
          <option>JavaScript</option>
          <option>Python</option>
        </select>

        <div style={{ marginTop: "20px" }}>
          <button type="submit">Submit</button>
          {" "}
          <button type="reset" onClick={handleReset}>
            Reset
          </button>
          {" "}
          <button type="button"
            onClick={() => setMessage("Button clicked!")}>
            Click Me
          </button>
        </div>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default App;

