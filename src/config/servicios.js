import { urlLocal } from './rutas';

class RedSocialService {
    constructor() {
        this.token = localStorage.getItem('token')
        this.myHeaders = new Headers();
        this.myHeaders.append("Authorization", `Bearer ${this.token}`);
       
        this.requestOptions = {
            method: 'GET',
            headers: this.myHeaders,
            redirect: 'follow'
        };
        this.requestOptionsPostData = {
            method: 'POST',
            body:'',
            headers: {
                "Authorization":`Bearer ${this.token}`
            },
            redirect: 'follow'
        };
        this.myHeaders.append("Content-Type", "application/json");
        this.requestOptionsPost = {
            method: 'POST',
            body:'',
            headers: this.myHeaders,
            redirect: 'follow'
        };
    }
    async getAllSocialMedia(IdUser) {
        try {
             
            const resp = await fetch(`${urlLocal}/get-social-networks/${IdUser}`, this.requestOptions)
            const data = await resp.json();             
            return data 
        } catch (error) {
            console.log(error)
            throw error;
        }
    }   
    async addRedSocialUser(IdUser,idRed, enlace, nombre) {
        try {
            console.log(nombre)
            var raw = JSON.stringify({
                "cliente_id":IdUser,
                "red_social_id":idRed,
                "url_tarjeta_red_social":enlace,
                "nombre":nombre
            });
            this.requestOptionsPost.method = 'POST';
            this.requestOptionsPost.body = raw
            const resp = await fetch(`${urlLocal}/redes_sociales/addSocialMediaCliente`, this.requestOptionsPost)
            const data = await resp.json();             
            return data 
        } catch (error) {
            console.log(error)
            throw error;
        }
    }
    async getAllDataProfileAdvance(IdUser) {
        try {
           
            const resp = await fetch(`${urlLocal}/personal-information/${IdUser}`, this.requestOptions)
            const data = await resp.json();             
            return data 
        } catch (error) {
            console.log(error)
            throw error;
        }
    }    
    async updateDataProfileAdvance(idUser,nombreClient,cargoCliente,descCliente,colorProfileCliente) {
        try {
            var raw = JSON.stringify({
                "cliente_id": idUser,
                "cliente_nombre": nombreClient,
                "ocupacion_cliente": cargoCliente  ,
                "descripcion_cliente": descCliente,
                "color_perfil_cliente": colorProfileCliente
              });
            this.requestOptionsPost.body = raw
            this.requestOptionsPost.method = 'POST';
            const resp = await fetch(`${urlLocal}/clientes/updateProfileCliente`, this.requestOptionsPost)
            const data = await resp.json();             
            return data 
        } catch (error) {
            console.log(error)
            throw error;
        }
    }    

    async updatePhotoProfileCliente(IdUser,dataImage) {
        try {
            var formdata = new FormData();
            formdata.append("foto_perfil",dataImage);
            this.requestOptionsPostData.body = formdata;
            this.requestOptionsPostData.method = 'POST';
            const resp = await fetch(`${urlLocal}/update-photo-profile/${IdUser}?_method=PUT`, this.requestOptionsPostData)
            const data = await resp.text();            
            return data 
        } catch (error) {
            console.log(error)
            throw error;
        }
    }    
    async updatePhotoPortadaCliente(IdUser,dataImage) {
        try {
            var formdata = new FormData();
            formdata.append("foto_fondo_tarjeta",dataImage);
            this.requestOptionsPostData.body = formdata;
            this.requestOptionsPost.method = 'POST';           
            const resp = await fetch(`${urlLocal}/update-photo-fondo/${IdUser}?_method=PUT`, this.requestOptionsPostData)
            const data = await resp.text();            
            return data 
        } catch (error) {
            console.log(error)
            throw error;
        }
    }    
    async updateDataProfileBasic(idUser,enlace,telefono) {
        try {           
            var raw = JSON.stringify({
                "cliente_id": idUser,
                "telefono_cliente": telefono,
                "enlace_tarjeta_cliente": enlace
            });
            this.requestOptionsPost.body = raw
            this.requestOptionsPost.method = 'POST';           
            const resp = await fetch(`${urlLocal}/clientes/updateClientBasicInfo`, this.requestOptionsPost)
            const data = await resp.json();             
            return data 
        } catch (error) {
            console.log(error)
            throw error;
        }
    }   

    async updateNetworkUser(idUser,enlace,idRed, nombre) 
    {
        try {           
            console.log(nombre)
            var raw = JSON.stringify({
                "nombre":nombre, 
                "cliente_id": idUser,
                "red_social_id": idRed,
                "url_tarjeta_red_social": enlace
            });
            this.requestOptionsPost.body = raw
            this.requestOptionsPost.method = 'POST';           
            const resp = await fetch(`${urlLocal}/redes_sociales/updateSocialMediaCliente`, this.requestOptionsPost)
            const data = await resp.json();             
            return data 
        } catch (error) {
            console.log(error)
            throw error;
        }
    }    
    async updateViewRedSocialClientState(idUser,estado,idRed) 
    {
        try {           
            var raw = JSON.stringify({
                "cliente_id": idUser,
                "red_id": idRed,
                "estado": estado
            });
            this.requestOptionsPost.method = 'POST';           
            this.requestOptionsPost.body = raw
            const resp = await fetch(`${urlLocal}/clientes/updateClientBasicInfo`, this.requestOptionsPost)
            const data = await resp.json();             
            return data 
        } catch (error) {
            console.log(error)
            throw error;
        }
    }    
    async deleteNetworkRedSocialUser(idUser,idRed) 
    {
        try {           
            var raw = JSON.stringify({
                'red_social_id':idRed
            });
            this.requestOptionsPost.body = raw;
            this.requestOptionsPost.method = 'DELETE';             
            const resp = await fetch(`${urlLocal}/redes_sociales/deleteSocialMediaCliente/${idUser}`, this.requestOptionsPost)
            const data = await resp.json();             
            return data 
        } catch (error) {
            console.log(error)
            throw error;
        }
    }    

}

export default new RedSocialService()
