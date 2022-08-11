import React, { lazy, Suspense} from 'react';
import LazyLoader from "../../components/master-layout/LazyLoader";
const CreatePassword =lazy(() => import('../../AccountRecover/Create_Password'));
const Create_Password = () => {
    return (
        <Suspense fallback={<LazyLoader/>}>
            <CreatePassword/>
        </Suspense>
    );
};
export default Create_Password;