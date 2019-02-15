import React from 'react';
import { connect } from 'dva';
// import styles from './IndexPage.css';
// import Layout from '../layout/Layout'
import Xheader from '../components/Xheader'
import Xcontent from '../components/Xcontent'
function HomePage() {
  return (
    <div>
      <Xheader menu='2' />
      <Xcontent />
    </div>
  );
}
HomePage.propTypes = {
};

export default connect()(HomePage);
