import axios from 'axios'
import { router } from '../router'

const state = {

    id: null,
    name: null,
    role: null,

}

const getters = {
    'id': state => state.id,
}

const mutations = {
    login (state, item) {
        state.id = item.data['id']
    },
    logout (state) {

        state.id = null
    }
}

const actions = {
    login ({commit}, {id, password}) {
        const params = {
            "id": id,
            "password": password
        }
        axios.post("http://localhost:8080/", JSON.stringify(params), {
            headers: { 'content-type': 'application/json' }
        }).then(res => {
            commit('login', res)
            router.push("/home")
        }).catch(e => {
            console.log(e)
            alert("로그인 요청에 문제가 발생했습니다.")
        })

    },
    logout ({commit}) {
        commit('logout')
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}