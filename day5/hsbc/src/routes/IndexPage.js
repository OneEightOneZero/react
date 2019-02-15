import React from 'react';
import { connect } from 'dva';
// import styles from './IndexPage.css';
// import Layout from '../layout/Layout'
import Xheader from '../components/Xheader'
function IndexPage() {
  return (
    <div>
      <Xheader menu='1' />
    </div>
  );
}
IndexPage.propTypes = {
};

export default connect()(IndexPage);
