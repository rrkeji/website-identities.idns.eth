import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';

import Nav3 from '../Home/Nav3';
import Footer1 from '../Home/Footer1';
import '../Home/less/antMotionStyle.less';

import 'antd/dist/antd.css';

import styles from './index.less';

export default (props: { children: any }) => {
  if (!props.children) {
    return (
      <div className="templates-wrapper">
        <Nav3 />
        <div className={styles.block}>
          <Spin></Spin>
        </div>
        <Footer1 />,
      </div>
    );
  }
  return (
    <div className="templates-wrapper">
      <Nav3 />
      {props.children}
      <Footer1 />,
    </div>
  );
};
