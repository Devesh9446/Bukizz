import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Category() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    Image: "",
    description: "",
    offer: "",
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    if (name === "image") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: files[0]
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }));
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      axios.post("http://localhost:8000/v1/api/category", formData);
    } catch (error) {
      console.log(error);
    }
    navigate("/");
    console.log("Form submitted:", formData);
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Image:
          <input
            type="file"
            name="image"
            value={formData.Image}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <label>
          Offer:
          <input
            type="text"
            name="offer"
            value={formData.offer}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </StyledForm>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledForm = styled.form`
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;

  label {
    display: block;
    margin-bottom: 10px;
  }

  input[type="text"],
  textarea {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }

  textarea {
    height: 100px;
  }

  button {
    width: 100%;
    margin-top: 10px;
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #0056b3;
  }
`;

export default Category;
