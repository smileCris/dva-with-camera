import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Camera from '../components/Camera'

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.block}>
        <button onClick={Camera}>点击拍照</button>
      </div>
      <div className={styles.block}>
        <img id="myImage" className={styles.welcome} alt="img" />
      </div>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
