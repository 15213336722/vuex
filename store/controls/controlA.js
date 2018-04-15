const moduleB = {
    //数据
    state: {
        user: {
            name: 'testName'
        }
    }
    //业务
    , actions: {
        ['submit']({state, commit, dispatch}, config = {}) {
            dispatch('moduleA/submit', config, {root: true});
        }
    }
    //读取
    , getters: {
        ['get'](state, getters, rootState, rootGetters) {
            return rootGetters['moduleA/get']
        }
    }
    //写入
    , mutations: {
        ['load'](state, res = {}) {
            state.user = res;
        }
    }
    , namespaced: true
};
export default moduleB