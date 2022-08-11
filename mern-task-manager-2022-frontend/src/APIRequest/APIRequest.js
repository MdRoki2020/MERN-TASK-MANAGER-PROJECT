import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/FormHelper";
import { HideLoader, ShowLoader } from "../redux/state-slice/SettingSlice";
import Store from "../redux/store/Store";
import {getToken, setEmail, setOTP, setToken, setUserDetails} from "../helper/SessionHelper";
import { SetCanceledTask, SetCompletedTask, SetNewTask, SetProgressTask } from "../redux/state-slice/TaskSlice";
import { SetSummary } from "../redux/state-slice/SummarySlice";
import { SetProfile } from "../redux/state-slice/ProfileSlice";

const AxiosHeader={headers:{"token":getToken()}}

const BaseUrl="https://mern-task-manager-apk-v1.herokuapp.com/api/v1"

export function RegistrationRequest(email,firstName,lastName,mobile,password,photo){

    Store.dispatch(ShowLoader())
    let URL=BaseUrl+"/registration";

    let postBody={email:email,firstName:firstName,lastName:lastName,mobile:mobile,password:password,photo:photo}

    return axios.post(URL,postBody).then((res)=>{
        Store.dispatch(HideLoader())
        if(res.status===200){
            if(res.data['status']==="fail"){
                if(res.data['data']['keyPattern']['email']===1){
                    ErrorToast("Email Already Exist")
                    return false;
                }
                else{
                    ErrorToast("Something Went Wrong")
                    return false;
                }
            }
            else {
                SuccessToast("Registration Success")
                return true;
            }
        }
        else{
            ErrorToast("Something Went Wrong")
            return  false;
        }

    }).catch((err)=>{
        Store.dispatch(HideLoader())
        ErrorToast("Something Went Wrong");
        return false;
    })
}


export function LoginRequest(email,password){

    Store.dispatch(ShowLoader())

    let URL=BaseUrl+"/login";
    let PostBody={"email":email,"password":password}
    return axios.post(URL,PostBody).then((res)=>{
        Store.dispatch(HideLoader())

        if(res.status===200){

            setToken(res.data['token']);
            setUserDetails(res.data['data']);
            SuccessToast("Login Success")
            return true;
        }
        else{
            ErrorToast("Invalid Email or Password")
            return  false;
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        Store.dispatch(HideLoader())
        return false;
    });
}


export function NewTaskRequest(title,description){

    Store.dispatch(ShowLoader())

    let URL=BaseUrl+"/createTask";
    let PostBody={title:title,description:description,status:"New"}

    return axios.post(URL,PostBody,AxiosHeader).then((res)=>{
        Store.dispatch(HideLoader())

        if(res.status===200){
            SuccessToast("New Task Created")
            return true;
        }else{
            ErrorToast("Something Went Wrong")
            return false;
        }
        
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        Store.dispatch(HideLoader())
        return false;
    })

}



export function TaskListByStatus(Status){
    Store.dispatch(ShowLoader())
    let URL=BaseUrl+"/listTaskByStatus/"+Status;
    axios.get(URL,AxiosHeader).then((res)=>{
        Store.dispatch(HideLoader())
        if(res.status===200){
            if(Status==="New"){
                Store.dispatch(SetNewTask(res.data['data']))
            }
            else if(Status==="Completed"){
                Store.dispatch(SetCompletedTask(res.data['data']))
            }
            else if(Status==="Canceled"){
                Store.dispatch(SetCanceledTask(res.data['data']))
            }
            else if(Status==="Progress"){
                Store.dispatch(SetProgressTask(res.data['data']))
            }
        }
        else{
            ErrorToast("Something Went Wrong")
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        Store.dispatch(HideLoader())
    });
}



export function SummaryRequest(){
    Store.dispatch(ShowLoader())
    let URL=BaseUrl+"/taskStatusCount";
    axios.get(URL,AxiosHeader).then((res)=>{
        Store.dispatch(HideLoader())
        if(res.status===200){
            Store.dispatch(SetSummary(res.data['data']))
        }
        else{
            ErrorToast("Something Went Wrong")
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        Store.dispatch(HideLoader())
    });
}



export function DeleteRequest(id){
    Store.dispatch(ShowLoader())
    let URL=BaseUrl+"/deleteTask/"+id;
    return axios.get(URL,AxiosHeader).then((res)=>{
        Store.dispatch(HideLoader())
        if(res.status===200){
            SuccessToast("Delete Successful")
            return true;
        }
        else{
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        Store.dispatch(HideLoader())
        return false;
    });
}



export function UpdateStatusRequest(id,status){
    Store.dispatch(ShowLoader())
    let URL=BaseUrl+"/updateTaskStatus/"+id+"/"+status;
    return axios.get(URL,AxiosHeader).then((res)=>{
        Store.dispatch(HideLoader())
        if(res.status===200){
            SuccessToast("Status Updated")
            return true;
        }
        else{
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        Store.dispatch(HideLoader())
        return false;
    });
}


export function GetProfileDetails(){
    Store.dispatch(ShowLoader())
    let URL=BaseUrl+"/profileDetails";
    axios.get(URL,AxiosHeader).then((res)=>{
        Store.dispatch(HideLoader())
        if(res.status===200){
            Store.dispatch(SetProfile(res.data['data'][0]))
        }
        else{
            ErrorToast("Something Went Wrong")
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        Store.dispatch(HideLoader())
    });
}



export function ProfileUpdateRequest(email,firstName,lastName,mobile,password,photo){

    Store.dispatch(ShowLoader())

    let URL=BaseUrl+"/profileUpdate";

    let PostBody={email:email,firstName:firstName,lastName:lastName,mobile:mobile,password:password,photo:photo}
    let UserDetails={email:email,firstName:firstName,lastName:lastName,mobile:mobile,photo:photo}

    return axios.post(URL,PostBody,AxiosHeader).then((res)=>{
        Store.dispatch(HideLoader())
        if(res.status===200){

            SuccessToast("Profile Update Success")
            setUserDetails(UserDetails)

            return true;
        }
        else{
            ErrorToast("Something Went Wrong")
            return  false;
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        Store.dispatch(HideLoader())
        return false;
    });
}


export function RecoverVerifyEmailRequest(email){
    Store.dispatch(ShowLoader())
    let URL=BaseUrl+"/RecoverVerifyEmail/"+email;

    return axios.get(URL).then((res)=>{
        Store.dispatch(HideLoader())
        if(res.status===200){
            if(res.data['status']==='fail'){
                ErrorToast("No User Found");
                return false;
            }else{
                setEmail(email);
                SuccessToast("A 6 Digit Verification code has been sent to your email address")
                return true;
            }
        }
        else{
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        Store.dispatch(HideLoader())
        return false;
    });

}


export function RecoverVerifyOTPRequest(email,OTP){
    Store.dispatch(ShowLoader())
    let URL=BaseUrl+"/RecoverVerifyOTP/"+email+"/"+OTP;
    return axios.get(URL).then((res)=>{
        Store.dispatch(HideLoader())
        if(res.status===200){
            if(res.data['status']==="fail"){
                ErrorToast(res.data['data']);
                return false;
            }
            else{
                setOTP(OTP)
                SuccessToast("Code Verification Success");
                return true;
            }
        }
        else{
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        Store.dispatch(HideLoader())
        return false;
    });
}

export function RecoverResetPassRequest(email,OTP,password){
    Store.dispatch(ShowLoader())
    let URL=BaseUrl+"/RecoverResetPass/";

    let postBody={email:email,OTP:OTP,password:password}

    return axios.post(URL,postBody).then((res)=>{
        Store.dispatch(HideLoader())
        if(res.status===200){
            return true;
        }
        else{
            ErrorToast("Something Went Wrong")
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        Store.dispatch(HideLoader())
    });

}