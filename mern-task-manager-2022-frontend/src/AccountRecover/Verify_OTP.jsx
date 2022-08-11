import React, { Fragment } from 'react'
import PinCode from '@uiw/react-pin-code';
import { useState } from 'react';
import { ErrorToast } from '../helper/FormHelper';
import { RecoverVerifyOTPRequest } from '../APIRequest/APIRequest';

const Verify_OTP = () => {

    const [OTP,setOTP]=useState("")

    const submitOTP=()=>{
        if(OTP.length===6){
            RecoverVerifyOTPRequest().then((res)=>{
                
            })
        }else{
            ErrorToast('OTP Must 6 Digit');
        }
    }
  return (
    <Fragment>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-7 col-lg-6 center-screen">
                    <div className="card w-90  p-4">
                        <div className="card-body">
                            <h4>OTP VERIFICATION </h4>
                            <p>A 6 Digit verification code has been sent to your email address. </p>
                            {/* <PinCode  fields={6}/> */}
                            <PinCode onChange={(value)=>setOTP(value)} autoFocus value={['', '', '', '', '', '']} />
                            <br/>  <br/>
                            <button onClick={submitOTP} className="btn w-100 animated fadeInUp float-end btn-primary">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
  )
}

export default Verify_OTP
