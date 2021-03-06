import {Alert} from 'react-native';

const URL_DATA = "http://10.0.0.10/iot/data";

class API {
    async validarLog(user, pass){
        const query = await fetch(`${URL_DATA}login.php?user=${user}&pass=${pass}`);
        const data = await query.json();
        return data;
    }

    registerData(email, user, pass){
        fetch(`${URL_DATA}registrar.php`,{
            method: 'POST',
            body: JSON.stringify({
                pEmail : email,
                pUser : user,
                pPass : pass
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            }
        }).then(response => {
            if(response.status == 1){
                Alert.alert('Registro exitoso');
            }
            else{
                Alert.alert('Ocurrio un error');
            }
        });
    }//end registrerData
}

export default new API()