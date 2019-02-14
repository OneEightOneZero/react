import React from 'react';
// 是帮你连接组件和redux
import { connect } from 'dva';
// import ProductList from '../components/ProductList.js'
import NormalLoginForm from '../components/NormalLoginForm.jsx'
const Products = ({dispatch,products}) => {
    function handleDelete(id) {
        dispatch({
          type: 'products/delete',
          payload: id,
        });
      }

      return (<div>
        <h2>List of Products</h2>
        {/* <ProductList onDelete={
            ()=>{}
        } products={
            ['a','b','c']
        } /> */}
        <NormalLoginForm />
        <button onClick={handleDelete}>OK</button>
    </div>)
};

export default connect(({ products }) => ({
    products,
}))(Products);