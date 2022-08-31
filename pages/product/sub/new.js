import React from 'react';
import Head from 'next/head';
import axios from 'axios';

import SideBarLayout from '../../../components/UI/SideBarLayout';
import NewSubProductForm from '../../../components/product/NewSubProductForm';

const NewSubProductPage = (props) => {
  return (
    <>
		<Head>
			<title>Create New Subproduct</title>
		</Head>
    <SideBarLayout>
      {/* <Header /> */}
      <div className="px-4 w-full flex flex-col items-center">
        <h1 className="my-4 font-semibold text-xl text-lime-500">Create new sub product</h1>
        <NewSubProductForm products={props.products} />
      </div>
    </SideBarLayout>
    </>
  );
}

// export async function getStaticProps() {
//   const response = await axios.get('/api/products');
//   const products = response.data
  
//   return {
//     props: {
//       products
//     },
//     revalidate: 1
//   }
// }
 
export default NewSubProductPage;