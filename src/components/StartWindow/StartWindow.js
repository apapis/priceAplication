import React from 'react';
import { ReactComponent as ProductListIcon } from 'assets/icons/shopping-cart.svg';
import { ReactComponent as MealsListIcon } from 'assets/icons/book-open.svg';
import { StatrButton, Wrapper } from './StartWindow.style';

const StartWindow = () => {
  return (
    <Wrapper>
      <StatrButton
        to="/"
        onClick={() =>
          alert('This part of the application will work in the future')
        }
      >
        <MealsListIcon />
        <h2>Meals list</h2>
      </StatrButton>
      <StatrButton to="/productList">
        <ProductListIcon />
        <h2>Product list</h2>
      </StatrButton>
    </Wrapper>
  );
};

export default StartWindow;
