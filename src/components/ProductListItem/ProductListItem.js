import React from 'react';
import PropTypes from 'prop-types';
import { Row, Cell } from 'assets/styles/Tabel.style';
import { FunctionBtn } from './ProductListItem.style';
import { ReactComponent as EditIcon } from 'assets/icons/edit.svg';
import { ReactComponent as DeleteIcon } from 'assets/icons/x-square.svg';

const ProductListItem = ({
  productData: { name, where, weight, price, id, pricePerP },
}) => {
  return (
    <Row>
      <Cell> {name} </Cell>
      <Cell> {where} </Cell>
      <Cell> {weight} </Cell>
      <Cell> {price} </Cell>
      <Cell> {pricePerP} </Cell>
      <Cell>
        <FunctionBtn to={`/editProduct/${id}`}>
          <EditIcon />
        </FunctionBtn>
        <FunctionBtn to={`/confirmDelete/${id}`}>
          <DeleteIcon />
        </FunctionBtn>
      </Cell>
    </Row>
  );
};

ProductListItem.prototype = {
  productData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    where: PropTypes.string.isRequired,
    weight: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    pricePerP: PropTypes.number.isRequired,
  }),
};

export default ProductListItem;
