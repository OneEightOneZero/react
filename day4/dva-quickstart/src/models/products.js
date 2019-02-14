export default {
  namespace: 'products',
  state: ['a','b','c'],
  reducers: {
    'delete'(state, {
      payload: id
    }) {
      console.log("触发了redux",state)
      return state.filter(item => item.id !== id);
    },
  },
};
