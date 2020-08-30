import axios from 'axios'
import { API_VERSION } from '../../../configs/api'

const RESOURCE = '/tenants'

const actions = {
    getCompanies ({ commit }){
        commit('SET_PRELOADER', true)
        commit('SET_TEXT_PRELOADER', 'Carregando as Empresas')

        return axios.get(`${API_VERSION}${RESOURCE}`)
                        .then(response => commit('SET_COMPANY', response.data))
                        .finally(() => commit('SET_PRELOADER', false))
    }
}

export default actions