import React, { useState, useEffect } from 'react';
import { db } from 'data/firebase.config';
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  addDoc,
  updateDoc,
} from 'firebase/firestore';
export const ProductContext = React.createContext({
  products: [],
  deletProduct: () => {},
  addProduct: () => {},
});

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, 'products');

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await getDocs(productsCollectionRef);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const deletProduct = async (id) => {
    const userDoc = doc(db, 'products', id);
    await deleteDoc(userDoc);
    const filteredProduct = products.filter((product) => product.id !== id);
    setProducts(filteredProduct);
  };

  const addProduct = async (name, where, weight, price) => {
    await addDoc(productsCollectionRef, {
      name: name,
      where: where,
      weight: Number(weight),
      price: Number(price),
      pricePerP: Number((Number(price) / Number(weight)).toFixed(2)),
    });
    getUsers();
  };

  const edditProduct = async (weight, price, id) => {
    const productDoc = doc(db, 'products', id);
    const updateProduct = {
      weight: Number(weight),
      price: Number(price),
      pricePerP: Number((Number(price) / Number(weight)).toFixed(2)),
    };
    await updateDoc(productDoc, updateProduct);
    getUsers();
  };

  const findProduct = (id) => {
    const lookProduct = products.filter((product) => product.id === id);
    return lookProduct;
  };

  return (
    <ProductContext.Provider
      value={{ products, deletProduct, addProduct, edditProduct, findProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
