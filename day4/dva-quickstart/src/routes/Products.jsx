import React from 'react';
// 是帮你连接组件和redux
import { connect } from 'dva';
// 这是dispatch和products是来自于props的方法，是connect后提供的
// {dispatch, products}等价于props.dispatch和props.products
const Products = ({ dispatch, products }) => {
  function handleDelete(id, e) {
    // 获取按钮传递的数据
    console.log(id, e)
    // 获取Model的state的数据
    console.log(products)
    dispatch({
      // 触发Model中的action方法
      type: 'products/delete',
      // 这里是传过去Model的数据
      payload: {
        name: "lemon",
        age: 18,
        skill: ['ps', 'css', 'js']
      },
    });
  }
  return (<div>
    <h2>Dva连接Redux的示例</h2>
    <button onClick={handleDelete.bind(this, 1)}>连接Model</button>
  </div>)
};

export default connect(({ products }) => ({
  products,
}))(Products);