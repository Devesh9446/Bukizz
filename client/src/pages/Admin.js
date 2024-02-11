import React, { useState } from 'react';
import styled from 'styled-components';
import Sections from '../components/Sections/Sections.js';
import Navbar from '../components/Navbar/Navbar.js';
import Table from '../components/Table/Table.js';

function Admin() {
  const [current, setCurrent] = useState('');
  const handleOnClick = (event) => {
    setCurrent(event);
  };
  return (
    <Container>
      <div>
        <Sections handleOnClick={handleOnClick} />
      </div>
      <div>
        <Navbar/>
        <Container2>
          <Table current={current} />
        </Container2>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Container2= styled.div`
  margin-top:-10vh;
  margin-left:10vw;
`;

export default Admin;
