import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import {useNavigate} from "react-router-dom"

function Product() {
  const navigate=useNavigate();
  const [values, setValues] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "http://localhost:8000/v1/admin/category"
      ); 
      setValues(response.data.data);
    };
    getData();
  }, []);

  return (
    <Container>
      <button onClick={()=>{navigate("/form")}}>Add Category</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .category {
    display: flex;
    background-color:red;
    margin:20px;
  }
`;

export default Product;
