import React from "react";
import PropTypes from "prop-types";
import ProductInfo from '../components/incoming/ProductInfo';
import IncomingInfo from '../components/incoming/IncomingInfo';
import ButtonGroup from '../components/incoming/ButtonGroup';

const Income = () => {
  return (
    <div className='overflow-y-auto'>
      <ProductInfo/>
      <IncomingInfo/>
      <ButtonGroup/>
    </div>
  );
};

Income.propTypes = {};

export default Income;
