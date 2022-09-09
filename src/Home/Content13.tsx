import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { getChildrenToRender as getChildrenToRenderFunc } from './utils';

export const Content130DataSource = {
  OverPack: {
    className: 'home-page-wrapper content13-wrapper',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      {
        name: 'title',
        children: (
          <span>
            <p>基于身份的社交</p>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        children: (
          <span>
            <span>
              <p>在IDNS.ETH身份的基础之上构建各种基于身份的应用（UDI应用）</p>
            </span>
          </span>
        ),
        className: 'title-content',
      },
      {
        name: 'content2',
        children: (
          <span>
            <p>UDI应用提供给用户各种基于身份的社交需求</p>
          </span>
        ),
        className: 'title-content',
      },
    ],
  },
};
const Content13 = (props: any) => {
  const dataSource = Content130DataSource;

  return (
    <OverPack {...props} {...dataSource.OverPack}>
      <QueueAnim
        type="bottom"
        leaveReverse
        key="page"
        delay={[0, 100]}
        {...dataSource.titleWrapper}
      >
        {dataSource.titleWrapper.children.map(getChildrenToRenderFunc)}
      </QueueAnim>
    </OverPack>
  );
};

export default Content13;
