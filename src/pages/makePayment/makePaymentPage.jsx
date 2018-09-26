import React, { PureComponent } from 'react'
import CommonHeader from '@/components/CommonHeader';


export default class MakePaymentPage extends PureComponent {
   render() {
     return(
        <div className='wrap'>
            <CommonHeader canBack>
                <span>支付方式</span>
            </CommonHeader>
            <p>makePayment</p>
        </div>
        
     )
   }
}