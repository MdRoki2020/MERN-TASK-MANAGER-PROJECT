
import React, {lazy, Suspense} from 'react';
import LazyLoader from "../../components/master-layout/LazyLoader";
const VerifyOTP =lazy(() => import('../../AccountRecover/Verify_OTP'));
const Verify_OTP = () => {
    return (
        <Suspense fallback={<LazyLoader/>}>
            <VerifyOTP/>
        </Suspense>
    );
};

export default Verify_OTP;