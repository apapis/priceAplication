import React, { useContext } from 'react';
import { useState } from 'react';

import FormField from 'components/FormField/FormField';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductContext } from 'components/providers/ProductProvider';
import { ReactComponent as CloseIcon } from 'assets/icons/x-circle.svg';
import {
  PopupStyle,
  PopupForm,
  CloseBtn,
  Heading,
  StatusMessage,
  SubmitBtn,
} from 'assets/styles/Form.style';

const initialFormState = {
  weight: '',
  price: '',
};
const initialStatusMessage = {
  message: 'Enter data',
};

function EditProduct() {
  const navigate = useNavigate();
  const { productID } = useParams();
  const [formValues, setFormValues] = useState(initialFormState);
  const [statusMessage, setStatusMessage] = useState(initialStatusMessage);
  const { edditProduct } = useContext(ProductContext);

  const checkInput = () => {
    if (formValues.weight > 0 && formValues.price > 0) {
      return true;
    } else {
      return false;
    }
  };

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmitProduct = (e) => {
    e.preventDefault();
    if (checkInput()) {
      edditProduct(formValues.weight, formValues.price, productID);
      setFormValues(initialFormState);
      navigate('/productList');
    } else setStatusMessage({ message: 'You have not entered all the data' });
  };

  return (
    <PopupStyle>
      <PopupForm as="form" onSubmit={handleSubmitProduct}>
        <CloseBtn to="/productList">
          <CloseIcon />
        </CloseBtn>

        <Heading>Edit product</Heading>
        <StatusMessage>{statusMessage.message}</StatusMessage>
        <FormField
          label="weight"
          name="weight"
          value={formValues.weight}
          onChange={handleInputChange}
          type="number"
        />
        <FormField
          label="price"
          name="price"
          value={formValues.price}
          onChange={handleInputChange}
          type="number"
        />
        <SubmitBtn as="button" to="/productList" type="submit">
          Save changes
        </SubmitBtn>
      </PopupForm>
    </PopupStyle>
  );
}

export default EditProduct;
