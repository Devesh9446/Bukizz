import React from 'react';
import styled from 'styled-components';
import Order from '../Order/Order.js';
import Product from '../Product/Product.js';
import Vendor from '../Vendor/Vendor.js';
import Welcome from '../Welcome/Welcome.js';
import Query from '../Query/Query.js';

function Table(props) {
  const renderComponent = () => {
    if (props.current === 'Order') {
      return <Order />;
    } else if (props.current === 'Product') {
      return <Product />;
    } else if (props.current === 'Vendor') {
      return <Vendor />;
    } else if (props.current === 'Query') {
      return <Query />;
    } else {
      return <Welcome />;
    }
  };

  return <Container>{renderComponent()}</Container>;
}

const Container = styled.div`
  width: 60vw;
  height: 75vh;
  background-color: #f0f0f0; /* Grey shade background color */
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2); /* Black shadow */
`;

export default Table;
