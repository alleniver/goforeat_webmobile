import React, { PureComponent } from 'react'
import { Tabs, WhiteSpace } from 'antd-mobile'
import './MyOrderPage.less';
//api
import { myOrder } from '@/api/request';
//components
import CommonHeader from '@/components/CommonHeader';

const tabs = [
  { title: '待配送' },
  { title: '已完成' },
  { title: '已取消' },
  { title: '全部' },
];

export default class MyOrderPage extends PureComponent {

  _myOrder(offset, status) {
    myOrder(offset, status).then( data => {
      if(data.ro.ok) {
        console.log(data)
      }
    })
  }

  componentDidMount() {
    this._myOrder();
  }

  render() {
    return (
      <div className="myorder-container">
        <CommonHeader canBack>
          <span>我的訂單</span>
        </CommonHeader>
        <Tabs tabs={tabs}
          initialPage={1}
          tabBarActiveTextColor='#000000'
          tabBarUnderlineStyle={{backgroundColor:'#000000'}}
          >
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          </Tabs>
      </div>
    )
  }
}