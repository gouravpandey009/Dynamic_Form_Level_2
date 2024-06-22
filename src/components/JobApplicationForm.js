import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MultiSelect } from "react-multi-select-component";

const JobApplicationForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [position, setPosition] = useState("");
  const [relevantExperience, setRelevantExperience] = useState("");
  const [portfolioURL, setPortfolioURL] = useState("");
  const [managementExperience, setManagementExperience] = useState("");
  const [additionalSkills, setAdditionalSkills] = useState([]);
  const [preferredInterviewTime, setPreferredInterviewTime] = useState(
    new Date()
  );

  const skillsOptions = [
    { label: "JavaScript", value: "JavaScript" },
    { label: "CSS", value: "CSS" },
    { label: "Python", value: "Python" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      fullName,
      email,
      phoneNumber,
      position,
      relevantExperience,
      portfolioURL,
      managementExperience,
      additionalSkills,
      preferredInterviewTime,
    };
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Full Name: </label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Phone Number: </label>
        <input
          type="number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Applying for Position: </label>
        <select
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required
        >
          <option value="">Select</option>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
          <option value="Manager">Manager</option>
        </select>
      </div>
      {(position === "Developer" || position === "Designer") && (
        <div>
          <label>Relevant Experience (years): </label>
          <input
            type="number"
            value={relevantExperience}
            onChange={(e) => setRelevantExperience(e.target.value)}
            required
            min="0"
          />
        </div>
      )}
      {position === "Designer" && (
        <div>
          <label>Portfolio URL: </label>
          <input
            type="url"
            value={portfolioURL}
            onChange={(e) => setPortfolioURL(e.target.value)}
            required
          />
        </div>
      )}
      {position === "Manager" && (
        <div>
          <label>Management Experience: </label>
          <input
            type="text"
            value={managementExperience}
            onChange={(e) => setManagementExperience(e.target.value)}
            required
          />
        </div>
      )}
      <div>
        <label>Additional Skills: </label>
        <MultiSelect
          options={skillsOptions}
          value={additionalSkills}
          onChange={setAdditionalSkills}
          labelledBy="Select"
        />
      </div>
      <div>
        <label>Preferred Interview Time: </label>
        <DatePicker
          selected={preferredInterviewTime}
          onChange={(date) => setPreferredInterviewTime(date)}
          showTimeSelect
          dateFormat="Pp"
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default JobApplicationForm;
