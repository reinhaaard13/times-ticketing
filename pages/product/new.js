import React from 'react';

import Header from '../../components/UI/Header';
import SideBarLayout from '../../components/UI/SideBarLayout';
import NewProductForm from '../../components/product/NewProductForm';

const NewProductPage = () => {
  return (
    <SideBarLayout>
      <Header />
      <div className="px-4 w-full flex flex-col items-center">
        <h1 className="my-4 font-bold text-xl">Create new product</h1>
        <NewProductForm />
      </div>
    </SideBarLayout>
  );
}
 
export default NewProductPage;