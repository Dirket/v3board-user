import React from 'react';
import { useRequest } from '@umijs/hooks';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography, Row, Col } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import styles from './Welcome.less';

const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

export default (): React.ReactNode => {
  const intl = useIntl();
	var style = {}
  const { data } = useRequest({
    url: '/api/v1/user/getStat'
  })

  return (
    <PageContainer>
      <div className={styles.alert+' '+ styles["alert-danger"]} role="alert">
          {intl.formatMessage({
            id: '绑定Telegram获取更多服务',
            defaultMessage: '绑定Telegram获取更多服务',
          })}
          &nbsp;<a className={styles['alert-link']} href="#">
            {intl.formatMessage({
              id: '点击这里进行绑定',
              defaultMessage: '点击这里进行绑定',
            })}</a></div>
        <h2 className="font-w300 mt-4 mb-3">总览</h2>
    <Row gutter={24}>
      <Col className="gutter-row" span={8}>
      <div className='block block-rounded text-center'><div className='block-content block-content-full d-flex justify-content-center align-items-center'>
        <div><a href='/order' className="link-fx text-danger font-size-h1 font-w700">{data&&data.data[0]}</a><div className="font-size-sm font-w700 text-uppercase text-muted mt-1">{intl.formatMessage({
            id: '待付订单',
            defaultMessage: '待付订单',
          })}</div></div>
        </div></div>
      </Col>
      <Col className="gutter-row" span={8}>
      <div className='block block-rounded text-center'><div className='block-content block-content-full d-flex justify-content-center align-items-center'>
        <div><a href='/ticket' className="link-fx text-warning font-size-h1 font-w700">{data&&data.data[1]}</a><div className="font-size-sm font-w700 text-uppercase text-muted mt-1">{intl.formatMessage({
            id: '待办工单',
            defaultMessage: '待办工单',
          })}</div></div>
        </div></div>
      </Col>
      <Col className="gutter-row" span={8}>
        <div className='block block-rounded text-center'><div className='block-content block-content-full d-flex justify-content-center align-items-center'>
        <div><a href='/invite' className="link-fx text-success font-size-h1 font-w700">{data&&data.data[2]} </a><div className="font-size-sm font-w700 text-uppercase text-muted mt-1">{intl.formatMessage({
            id: '我的邀请',
            defaultMessage: '我的邀请',
          })}</div></div>
        </div></div>
      </Col>
    </Row>
        <h2 className="font-w300 mt-4 mb-3">我的订阅
</h2>
<a className="block block-rounded mb-2 block-link-pop"><div className="block-content block-content-full">
    <div className="text-center align-items-md-center py-5">
      <div><i className="fa fa-plus fa-2x" /></div>
      <div className="font-size-sm font-w700 text-uppercase text-muted pt-2">
        添加订阅
      </div>
    </div>
  </div></a>
    </PageContainer>
  );
};
