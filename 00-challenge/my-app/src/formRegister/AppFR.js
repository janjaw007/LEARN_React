import { useState } from "react";
import "./index.css";

export default function App() {
  const [value, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [submit, setSubmit] = useState(false);
  const [valid, setValid] = useState(false);

  function handleFirstNameInputChange(e) {
    return setValues({ ...value, firstName: e.target.value });
  }
  function handleLastNameInputChange(e) {
    return setValues({ ...value, lastName: e.target.value });
  }
  function handleEmailInputChange(e) {
    return setValues({ ...value, email: e.target.value });
  }
  function onSubmit(e) {
    e.preventDefault();
    if (value.firstName && value.lastName && value.email) {
      setValid(true);
    }
    setSubmit(true);
  }

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={onSubmit}>
        {submit && valid ? (
          <div className="success-message">
            Success! Thank you for registering
          </div>
        ) : null}
        <input
          id="first-name"
          name="first-name"
          type="text"
          className="form-field"
          placeholder="First Name"
          value={value.firstName}
          onChange={handleFirstNameInputChange}
        />
        {submit && !value.firstName ? (
          <span>Please enter a first name</span>
        ) : null}
        <input
          id="last-name"
          name="last-name"
          type="text"
          className="form-field"
          placeholder="Last Name"
          value={value.lastName}
          onChange={handleLastNameInputChange}
        />
        {submit && !value.lastName ? (
          <span>Please enter a last name</span>
        ) : null}
        <input
          id="email"
          name="email"
          type="email"
          className="form-field"
          placeholder="Email"
          value={value.email}
          onChange={handleEmailInputChange}
        />
        {submit && !value.email ? <span>Please enter a email</span> : null}
        <button type="submit" className="form-field">
          Register
        </button>
      </form>
    </div>
  );
}
