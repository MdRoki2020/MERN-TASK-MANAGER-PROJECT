import React, { Fragment } from 'react'
import ReactCodeInput from 'react-code-input-2'
import { useState } from 'react';
import { ErrorToast } from '../helper/FormHelper';
import { RecoverVerifyOTPRequest } from '../APIRequest/APIRequest';
import { getEmail } from '../helper/SessionHelper';
import {useNavigate} from "react-router-dom";

const Verify_OTP = () => {

    let navigate=useNavigate();
    let [OTP,SetOTP]=useState("")

    const SubmitOTP = () => {
        if(OTP.length===6){
            RecoverVerifyOTPRequest(getEmail(),OTP).then((result)=>{
                if(result===true){
                    navigate("/CreatePassword");
                }
            })
        }
        else {
            ErrorToast("Enter 6 Digit Code")
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
                            <ReactCodeInput type='number' onChange={(value)=>SetOTP(value)} fields={6} />
                            {/* <PinCode onChange={(value)=>SetOTP(value)} autoFocus value={['', '', '', '', '', '']}/> */}
                            <br/>  <br/>
                            <button onClick={SubmitOTP} className="btn w-100 animated fadeInUp float-end btn-primary">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
  )
}

export default Verify_OTP
