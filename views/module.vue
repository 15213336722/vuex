<template>
    <div>
        <dl>
            <dt>
                <h1>Module</h1>
            </dt>
            <dd>
                <div class="m-con">
                    <ul>
                        <li>
                            <p>
                                由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。
                                <br/>
                                为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的
                                state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割：
                            </p>
                        </li>
                        <li>
                            <p class="u-text">
                                //模块A
                                <br/>
                                const moduleA = {
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;state: { ... },
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;mutations: { ... },
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;actions: { ... },
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;getters: { ... }
                                <br/>
                                }
                                <br/>
                                export default moduleA
                                <br/>
                                //模块B
                                <br/>
                                const moduleB = {
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;state: { ... },
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;mutations: { ... },
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;actions: { ... },
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;getters: { ... }
                                <br/>
                                }
                                <br/>
                                export default moduleB
                                <br/>
                                <br/>
                                store.js
                                <br/>
                                import moduleA from './moduleA';
                                <br/>
                                import moduleB from './moduleB';
                                <br/>
                                const store = new Vuex.Store({
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;modules: {
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;moduleA,
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;moduleB
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
                                <br/>
                                })
                            </p>
                        </li>
                        <li>
                            <h3>模块的局部状态</h3>
                            <p>
                                对于模块内部的 mutation 和 getter，接收的第一个参数是模块的局部状态对象。
                            </p>
                        </li>
                        <li>
                            <p class="u-text">
                                const moduleA = {
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;state: {
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;user: {
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name:
                                'testName'
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;}
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;, mutations: {
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;['load'](state, res = {}) {
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state.user
                                = res;
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;}
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;, getters: {
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;['get']: state => {
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return
                                state.user.name
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;}
                                <br/>
                                };
                            </p>
                        </li>
                        <li>
                            <p>同样，对于模块内部的 action，局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState：</p>
                        </li>
                        <li>
                            <p class="u-text">
                                const moduleA = {
                                <br/>
                                // ...
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;, actions: {
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;['submit']({state, commit, rootState},
                                config = {}) {
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;commit('load',
                                config);
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;}
                                <br/>
                                };
                            </p>
                        </li>
                        <li>
                            <p>对于模块内部的 getter，根节点状态会作为第三个参数暴露出来：</p>
                        </li>
                        <li>
                            <p class="u-text">
                                const moduleA = {
                                <br/>
                                // ...
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;, getters: {
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;['get'](state, getters, rootState) {
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return
                                state.user.name
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;}
                                <br/>
                                };
                            </p>
                        </li>
                        <li>
                            <h3>组件中使用ModuleA</h3>
                        </li>
                        <li>
                            <p class="u-text">
                                //state
                                <br/>
                                this.$store.state.moduleA.user.name
                                <br/>
                                //getters
                                <br/>
                                this.$store.getters.getModuleA
                                <br/>
                                //mutations
                                <br/>
                                this.$store.commit('loadModuleA',{name:'Tom'}) //Tom
                                <br/>
                                //actions
                                <br/>
                                this.$store.dispatch('submitModuleA',{name:'Jim'}) //Jim
                                <br/>
                            </p>
                        </li>
                        <li>
                            <h3>命名空间</h3>
                            <p>
                                默认情况下，模块内部的 action、mutation 和 getter 是注册在全局命名空间的——这样使得多个模块能够对同一 mutation 或 action 作出响应。
                                <br/>
                                如果希望你的模块具有更高的封装度和复用性，你可以通过添加 namespaced: true 的方式使其成为带命名空间的模块。当模块被注册后，它的所有 getter、action
                                及 mutation 都会自动根据模块注册的路径调整命名
                            </p>
                        </li>
                        <li>
                            <p class="u-text">
                                const moduleA = {
                                <br/>
                                // ...
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;,namespaced: true
                                <br/>
                                };
                            </p>
                        </li>
                        <li>
                            <h3>组件中使用开启命名空间的模块moduleA</h3>
                        </li>
                        <li>
                            <p class="u-text">
                                //state
                                <br/>
                                this.$store.state.moduleA.user.name
                                <br/>
                                //getters
                                <br/>
                                this.$store.getters['moduleA/get']
                                <br/>
                                //mutations
                                <br/>
                                this.$store.commit('moduleA/load',{name:'Tom'}) //Tom
                                <br/>
                                //actions
                                <br/>
                                this.$store.dispatch('moduleA/submit',{name:'Jim'}) //Jim
                                <br/>
                            </p>
                        </li>
                        <li>
                            <h3>辅助函数使用</h3>
                        </li>
                        <li>
                            <p class="u-text">
                                import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
                                <br/>
                                export default {
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;methods: {
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...mapActions('moduleA', ['submit'])
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;, ...mapMutations('moduleA', ['load'])
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;, commitLoad() {
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.load({name:'Tom'});
                                //Tom
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;, dispatchLoad() {
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.submit({name:'Jim'});
                                //Jim
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;}
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;, computed: {
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...mapState('moduleA', ['user'])
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;, ...mapGetters('moduleA', ['get'])
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;, stateName() {
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return
                                this.user.name;
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;, gettersName() {
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return
                                this.get;
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;}
                                <br/>
                                // ...
                                <br/>
                                }
                            </p>
                        </li>
                        <li>
                            <h3>store 模块间的调用</h3>
                        </li>
                        <li>
                            <p class="u-text">
                                const moduleB = {
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;// ...
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;, actions: {
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;['submit']({state, commit, dispatch}, config = {}) {
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dispatch('moduleA/submit', config, {root: true});
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;}
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;, getters: {
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;['get'](state, getters, rootState, rootGetters) {
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return rootGetters['moduleA/get']
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;}
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;//...
                                <br/>
                                };
                            </p>
                        </li>
                    </ul>
                </div>
            </dd>
        </dl>
    </div>
</template>
<script>
    import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

    export default {
        methods: {
            ...mapActions('controlA', ['submit'])
            // ...mapActions('moduleA', ['submit'])
            // , ...mapMutations('moduleA', ['load'])
            // , commitLoad() {
            //     this.load({name: 'Tom'});
            // }
            // , dispatchLoad() {
            //     this.submit({name: 'Jim'})
            // }
            , rootDispatchSubmit() {
                this.submit({name: 'Jim'});
            }
        }
        , computed: {
            ...mapGetters('controlA', ['get'])
            // ...mapState('moduleA', ['user'])
            // , ...mapGetters('moduleA', ['get'])
            // , stateName() {
            //     return this.user.name;
            // }
            // , gettersName() {
            //     return this.get;
            // }
            , rootGet() {
                return this.get;
            }
        }
        ,
        mounted() {
            // this.commitLoad()
            // this.dispatchLoad();
            this.rootDispatchSubmit();
        }
    }
</script>
<style scoped>
    dt {
        width: 100%;
        height: 60px;
        overflow: hidden;
    }

    dt h1 {
        width: 100%;
        height: 100%;
        overflow: hidden;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: #4b8;
        line-height: 60px;
    }

    dd p {
        font-size: 12px;
        line-height: 25px;
        color: #333;
    }

    .u-text {
        width: 1200px;
        height: auto;
        overflow: hidden;
        box-sizing: border-box;
        padding: 15px;
        background-color: #f8f8f8;
    }
</style>