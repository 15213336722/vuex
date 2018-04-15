import moduleA from './modules/moduleA';
import controlA from './controls/controlA';

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
    //数据
    state: {
        name: 'test'
    }
    //业务
    , actions: {
        submitA({commit, state}) {
            return new Promise(function (resolve, reject) {
                commit('loadName');
                console.log(state.name);
                resolve();
            });

        }
        , submitB({dispatch, commit}) {
            return dispatch('submitA').then(function () {
                console.log(2);
                commit('loadName', 'JimB');
            });
        }
    }
    //写入
    , mutations: {
        loadName(state, res = 'Tom') {
            state.name = res;
        }
    }
    //读取
    , getters: {
        get(state) {
            return state.name
        }
        , anotherGet(state, getters) {
            return getters.get
        }
    }
    //模块
    , modules: {
        moduleA
        , controlA
    }
});

export default store;