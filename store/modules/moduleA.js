const moduleB = {
    //数据
    state: {
        user: {
            name: 'testName'
        }
    }
    //业务
    , actions: {
        ['submit']({state, commit}, config = {}) {
            commit('load', config);
        }
    }
    //写入
    , mutations: {
        ['load'](state, res = {}) {
            state.user = res;
        }
    }
    //读取
    , getters: {
        ['get'](state, getters) {
            return state.user.name
        }
    }
    , namespaced: true
};
export default moduleB