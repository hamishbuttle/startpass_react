import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//assets
import google from "../images/google.svg";
import apple from "../images/apple.svg";
import comingSoon from "../images/coming_soon.svg";

const Form = ({ setShowModal, showModal }) => {
  const [email, setEmail] = useState("");
  const [orientation, setOrientation] = useState("");
  const [status, setStatus] = useState("");

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onOrientationChange = (e) => {
    setOrientation(e.target.value);
    console.log(e.target.value);
  };

  const canSave = [email, orientation].every(Boolean);

  const url =
    "https://script.google.com/macros/s/AKfycbx6JqdBkl903BG9ouXfj2K3y_oCRy9ay_SKaNci0gLLtHAoC-g/exec";

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    if (canSave) {
      const data = new FormData();
      data.append("email", email);
      data.append("description", orientation);
      fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        mode: "no-cors",
        body: data
      })
        .then((response) => {
          setStatus("sent");
          setEmail("");
          setOrientation("");
          setTimeout(() => {
            setShowModal(!showModal);
          }, 1400);
        })
        .catch((error) => {
          setStatus("error");
          setEmail("");
          setOrientation("");
          setTimeout(() => {
            setStatus("");
          }, 1000);
        });
    }
  };

  const buttonText = () => {
    let text;
    if (status === "") {
      text = "Apply";
    } else if (status === "sent") {
      text = "sent";
    } else {
      text = "error";
    }
    return text;
  };

  const roles = [
    { name: "Physical Trainer" },
    { name: "Wellness Coach" },
    { name: "Nutritionist" },
    { name: "Mindset Coach" },
    { name: "Councellor" },
    { name: "Keen Exerciser" },
    { name: "Other" }
  ];

  const roleOptions = roles.map((role, index) => (
    <option key={role.name} value={role.name}>
      {role.name}
    </option>
  ));

  return (
    <div className="early-access">
      <section>
        <h1>
          Startpass <br />
          <span>Challenge</span>
        </h1>
        <h3>
          Complete real world challenges and build{" "}
          <span>team stories</span> with friends or family!
        </h3>
      </section>
      <section>
        <StyledForm>
          <input
            onChange={onEmailChange}
            type="email"
            name="email"
            value={email}
            placeholder="Your email"
          />
          <select
            onChange={onOrientationChange}
            value={orientation}
          >
            <option value="">Pick one</option>
            {roleOptions}
          </select>
          <motion.button
            onClick={onFormSubmitHandler}
            whileHover={{ opacity: 0.6 }}
            className="btn-primary"
            disabled={!canSave}
          >
            {buttonText()}
          </motion.button>
        </StyledForm>
      </section>
      <BadgesSection>
        <div className="badges-section">
          <img src={apple} alt="apple" />
          <img src={google} alt="google" />
        </div>
        <img
          className="coming-soon"
          src={comingSoon}
          alt="coming soong"
        />
      </BadgesSection>
    </div>
  );
};

export default Form;

const StyledForm = styled.form`
  margin: 2rem auto;
  max-width: 320px;
  margin: 1rem auto;
  input,
  select,
  button {
    margin-bottom: 0.8rem;
  }
`;

const BadgesSection = styled.div`
  .badges-section {
    img {
      display: inline-block;
      width: 68px;
    }
  }
  .coming-soon {
    margin: auto;
    max-height: 19px;
  }
`;
