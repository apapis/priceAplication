import React, { useContext } from 'react';
import { ProductContext } from 'components/providers/ProductProvider';
import { useParams, useNavigate } from 'react-router-dom';
import { Wrapper, Btn } from './ConfirmDelete.style';
const ConfirmDelete = () => {
  const { deletProduct, findProduct } = useContext(ProductContext);
  const { productID } = useParams();
  const navigate = useNavigate();
  const item = findProduct(productID);

  return (
    <Wrapper>
      <h1>Are you sure you want to delete "{item[0].name}"?</h1>
      <Btn
        onClick={() => {
          deletProduct(productID);
          navigate('/productList');
        }}
      >
        Yes
      </Btn>
      <Btn
        onClick={() => {
          navigate('/productList');
        }}
      >
        No
      </Btn>
    </Wrapper>
  );
};

export default ConfirmDelete;
