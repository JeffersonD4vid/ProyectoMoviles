import Snackbar from "react-native-snackbar";
import { User } from "../navigator/StackNavigator";
import { LoginForm } from "../screem/Login";
import { RegisterForm } from "../screem/Registro";



export const hasErrorFormLogin = (form: LoginForm) => {
    return form.email == '' || form.password == ''
}

export const hasErrorFormRegister = (form: RegisterForm) => {
    return form.username == '' || form.phone == '' || form.email == '' || form.password == '' 
}

export const verifyExistUser =(users:User[], form:LoginForm)=>{
    return users.filter(user=>user.email == form.email)[0];
}

export const showSnackBar=(message:string, background:string)=>{
    Snackbar.show({
        text:message,
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor:background,
        textColor:'white'
    });

}

export const getIdNewUser=(users:User[])=>{
    const getIdUser=users.map(user=>user.id)
    return Math.max(...getIdUser)+1;
}   
