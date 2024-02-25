import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'

function School() {
    const [values,setValues]=useState({
        aboutUs: "",
        address: "",
        banner: "",
        board: "",
        city: "",
        contactNumber: "",
        email: "",
        image: "",
        logo: "",
        mission: "",
        name: "",
        ourInspiration: "",
        pincode: "",
        productsId: "",
        schoolId: "",
        state: "",
        website: ""
  });

  const handleSubmit = (event) => {
    alert("form submitted")
    event.preventDefault();
    const saving_data=async()=>{
        try{
            await axios.post("http://localhost:8000/v1/admin/school",values)
        }catch(error){
            console.log(error);
        }
    };
    saving_data();
  };
  const handleChange=(event)=>{
    const {name,value}=event.target
    setValues({...values,[name]:value})
    }
  return (

        <form onSubmit={handleSubmit}>
        <label>
            About Us:
            <input type="text" name="aboutUs" onChange={handleChange} />
        </label>
        <label>
            address:
            <input type="text" name="address" onChange={handleChange} />
        </label>
        <label>
            banner:
            <input type="text" name="banner" onChange={handleChange} />
        </label>
        <label>
            board:
            <input type="text" name="board" onChange={handleChange} />
        </label>
        <label>
            city:
            <input type="text" name="city" onChange={handleChange} />
        </label>
        <label>
            contactNumber:
            <input type="text" name="contactNumber" onChange={handleChange} />
        </label>
        <label>
            Email:
            <input type="text" name="email" onChange={handleChange} />
        </label>
        <label>
            Image:
            <input type="text" name="image" onChange={handleChange} />
        </label>
        <label>
            Logo:
            <input type="text" name="logo" onChange={handleChange} />
        </label>
        <label>
            Mission:
            <input type="text" name="mission" onChange={handleChange} />
        </label>
        <label>
            Name:
            <input type="text" name="name" onChange={handleChange} />
        </label>
        <label>
            Our Inspiration:
            <input type="text" name="ourInspiration" onChange={handleChange} />
        </label>
        <label>
            Pincode:
            <input type="text" name="pincode" onChange={handleChange} />
        </label>
        <label>
            Product ID:
            <input type="text" name="productsId" onChange={handleChange} />
        </label>
        <label>
            School ID:
            <input type="text" name="schoolId" onChange={handleChange} />
        </label>
        <label>
            State:
            <input type="text" name="state" onChange={handleChange} />
        </label>
        <label>
            Website:
            <input type="text" name="website" onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
        </form>
  );
}

const FormContainer=styled.div`
display:flex;
flex-direction:column;
`

export default School;
