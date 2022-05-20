import React, { useContext } from 'react';
import { useState } from 'react';
import {
  PopupStyle,
  PopupForm,
  CloseBtn,
  Heading,
  StatusMessage,
  SubmitBtn,
} from 'assets/styles/Form.style';
import FormField from 'components/FormField/FormField';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from 'components/providers/ProductProvider';
import { ReactComponent as CloseIcon } from 'assets/icons/x-circle.svg';

const initialFormState = {
  name: '',
  where: '',
  weight: '',
  price: '',
};

const initialStatusMessage = {
  message: 'Enter data',
};

function AddProduct() {
  const [formValues, setFormValues] = useState(initialFormState);
  const { addProduct } = useContext(ProductContext);
  const [statusMessage, setStatusMessage] = useState(initialStatusMessage);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const checkInput = (input) => {
    if (input.match(/^ *$/)) {
      return false;
    } else {
      return true;
    }
  };

  const handleSubmitProduct = (e) => {
    e.preventDefault();
    if (
      checkInput(formValues.name) &&
      checkInput(formValues.where) &&
      formValues.weight > 0 &&
      formValues.price > 0
    ) {
      addProduct(
        formValues.name,
        formValues.where,
        formValues.weight,
        formValues.price
      );
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
        <Heading>Add new product</Heading>
        <StatusMessage>{statusMessage.message}</StatusMessage>
        <FormField
          label="name"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
        />
        <FormField
          label="where"
          name="where"
          value={formValues.where}
          onChange={handleInputChange}
        />
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
          Add product
        </SubmitBtn>
      </PopupForm>
    </PopupStyle>
  );
}

export default AddProduct;
