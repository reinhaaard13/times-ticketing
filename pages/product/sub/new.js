import React from 'react';
import axios from 'axios';

import Header from '../../../components/UI/Header';
import SideBarLayout from '../../../components/UI/SideBarLayout';
import NewSubProductForm from '../../../components/product/NewSubProductForm';

const NewSubProductPage = (props) => {
  return (
    <SideBarLayout>
      <Header />
      <div className="px-4 w-full flex flex-col items-center">
        <h1 className="my-4 font-bold text-xl">Create new sub product</h1>
        <NewSubProductForm products={props.products} />
      </div>
    </SideBarLayout>
  );
}

export async function getStaticProps() {
  const response = await axios.get('http://localhost:3000/api/products');
  const products = response.data
  
  return {
    props: {
      products
    },
    revalidate: 1
  }
}
 
export default NewSubProductPage;