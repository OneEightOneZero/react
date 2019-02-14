export default {
  namespace: 'products',
  // state: {
  //   author: "wscats"
  // },
  state:{},//如果这里为空可以在index.js的dva()方法中初始化值
  reducers: {
    'delete'(state, {
      payload
    }) {
      // state是Model里面存放的state数据
      // payload是获取来自于Product.jsx组件的dispatch传过来的payload参数
      console.log("触发了redux", state, payload)
      // 这里是返回新的state数据
      return {
        ...state,
        ...payload
      }
    },
    // 可以存放多个action的方法
    add(state, {
      payload
    }) {

    }
  },
};
