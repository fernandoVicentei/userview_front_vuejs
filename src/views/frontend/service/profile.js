
import { urlLocal } from '../../../config/rutas';

class ProfileService {
    constructor() {
        this.token = localStorage.getItem('token')
        this.myHeaders = new Headers();
        this.myHeaders.append("Authorization", `Bearer ${this.token}`);
        this.requestOptions = {
            method: 'GET',
            headers: this.myHeaders,
            redirect: 'follow'
        };
    }

    async getProfileData(IdUser) {
        try {
            const resp = await fetch(`${urlLocal}/personal-information/${IdUser}`, this.requestOptions)
            const data = await resp.json();
            console.log(data.datos_personales)
            return data.datos_personales
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    
}

export default new ProfileService()