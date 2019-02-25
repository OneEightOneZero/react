import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import fetch from '../utils/request.js';
fetch("/bank/list/?tag=__all__&ac=wap&count=20&format=json_raw&as=A1456CE6AA617BA&cp=5C6A21A71B3A2E1&min_behot_time=0&_signature=3lmSigAAgjutr5jlcPKShN5Zkp&i=",{
  mode: "no-cors",
}).then((data)=>{
  console.log(data)
})

function IndexPage() {
  // axios.get('/api/v1/topics')
  // .then((data)=>{
  //   console.log(data)
  // })

  
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
