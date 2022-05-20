import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme.js';
import { Wrapper } from './App.style';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartWindow from 'components/StartWindow/StartWindow';
import ProductList from 'components/ProductList/ProductList';
import AddProduct from 'components/AddProduct/AddProduct';
import EditProduct from 'components/EditProduct/EditProduct';
import ProductProvider from 'components/providers/ProductProvider';
import ConfirmDelete from 'components/ConfirmDelete/ConfirmDelete';
const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ProductProvider>
        <Wrapper>
          <Routes>
            <Route path="/productList" element={<ProductList />} />
            <Route path="/addProduct" element={<AddProduct />} />
            <Route path="/editProduct/:productID" element={<EditProduct />} />
            <Route
              path="/confirmDelete/:productID"
              element={<ConfirmDelete />}
            />
            <Route path="/" element={<StartWindow />} />
          </Routes>
        </Wrapper>
      </ProductProvider>
    </ThemeProvider>
  </Router>
);

export default App;
