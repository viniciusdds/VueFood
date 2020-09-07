import axios from 'axios'
import { API_VERSION } from '../../../configs/api'

const RESOURCE = '/tenants'

const actions = {
    getCompanies ({ commit }){
        commit('SET_PRELOADER', true)
        commit('SET_TEXT_PRELOADER', 'Carregando as Empresas')

        return axios.get(`${API_VERSION}${RESOURCE}`)
                        .then(response => commit('SET_COMPANIES', response.data))
                        .finally(() => commit('SET_PRELOADER', false))
    },

    getCompanyByToken({commit}, token_company){
        commit('SET_PRELOADER', true)
        commit('SET_TEXT_PRELOADER', 'Carregando as Empresas')

        //console.log(`${API_VERSION}${RESOURCE}/${token_company}`)

        return axios.get(`${API_VERSION}${RESOURCE}/${token_company}`)
                        .then(response => commit('SET_COMPANY_SELECTED', response.data.data))
                        .finally(() => commit('SET_PRELOADER', false))
    },

    getCategoriesByCompany({ commit }, token_company){
        commit('SET_PRELOADER', true)
        commit('SET_TEXT_PRELOADER', 'Carregando as Categorias')

        return axios.get(`${API_VERSION}/categories`, { params: { token_company } })
                    .then(response => commit('SET_CATEGORIES_COMPANY', response.data))
                    .finally(() => commit('SET_PRELOADER', false))
    },

    getProductsByCompany({ commit }, params){
        commit('SET_PRELOADER', true)
        commit('SET_TEXT_PRELOADER', 'Carregando as Produtos')
        commit('SET_PRODUCTS_COMPANY', {data: []})

        return axios.get(`${API_VERSION}/products`, { params })
                    .then(response => commit('SET_PRODUCTS_COMPANY', response.data))
                    .finally(() => commit('SET_PRELOADER', false))
    },

    getTableFromCompany({commit}, params){
        commit('SET_PRELOADER', true)
        commit('SET_TEXT_PRELOADER', 'Carregando a mesa')

        return axios.get(`${API_VERSION}/tables/${params.table}`, { params })
                        .then(response => commit('SET_TABLE_COMPANY', response.data.data))
                        .finally(() => commit('SET_PRELOADER', false))
    },
}

export default actions