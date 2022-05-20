import { useContext } from 'react';
import ProductListItem from 'components/ProductListItem/ProductListItem';
import {
  Table,
  TabeleHeadings,
  TabeleHeading,
} from 'assets/styles/Tabel.style';
import { Wrapper, Heading, BtnAdd, GoBackMain } from './ProductList.style';
import { ProductContext } from 'components/providers/ProductProvider';
import { ReactComponent as GoBack } from 'assets/icons/goBack.svg';
function ProductList() {
  const { products } = useContext(ProductContext);

  return (
    <Wrapper>
      <GoBackMain to="/">
        <GoBack />
      </GoBackMain>

      <Heading>Product List</Heading>
      <Table>
        <tbody>
          <TabeleHeadings>
            <TabeleHeading>Name</TabeleHeading>
            <TabeleHeading>Where</TabeleHeading>
            <TabeleHeading>Weight (g)</TabeleHeading>
            <TabeleHeading>Price (£)</TabeleHeading>
            <TabeleHeading>Price per gram (£)</TabeleHeading>
            <TabeleHeading>Action</TabeleHeading>
          </TabeleHeadings>

          {products.map((product) => (
            <ProductListItem productData={product} key={product.id} />
          ))}
        </tbody>
      </Table>
      <BtnAdd to="/addProduct">+ Add new product</BtnAdd>
    </Wrapper>
  );
}

export default ProductList;
