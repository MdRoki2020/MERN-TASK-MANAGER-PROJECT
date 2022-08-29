import React, {lazy, Suspense} from 'react';
import LazyLoader from "../../components/master-layout/LazyLoader";
const SendOTP =lazy(() => import('../../AccountRecover/Send_OTP'));
const Send_OTP = () => {
    return (
        <Suspense fallback={<LazyLoader/>}>
            <SendOTP/>
        </Suspense>
    );
};

export default Send_OTP;