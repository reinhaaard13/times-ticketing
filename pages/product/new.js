import React from 'react';
import Head from 'next/head';

import SideBarLayout from '../../components/UI/SideBarLayout';
import NewProductForm from '../../components/product/NewProductForm';

const NewProductPage = () => {
  return (
    <>
		<Head>
			<title>Create New Product</title>
		</Head>
    <SideBarLayout>
      {/* <Header /> */}
      <div className="px-4 w-full flex flex-col items-center">
        <h1 className="my-4 font-semibold text-xl text-lime-500">Create new product</h1>
        <NewProductForm />
      </div>
    </SideBarLayout>
    </>
  );
}
 
export default NewProductPage;