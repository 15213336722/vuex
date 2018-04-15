<template>
    <div>
        <dl>
            <dt>
                <h1>Action</h1>
            </dt>
            <dd>
                <div class="m-con">
                    <ul>
                        <li>
                            <p>
                                Action 类似于 mutation，不同在于：
                                <br/>
                                ·Action 提交的是 mutation，而不是直接变更状态。
                                <br/>
                                ·Action 可以包含任意异步操作。
                                <br/>
                            </p>
                        </li>
                        <li>
                            <p class="u-text">
                                const store = new Vuex.Store({
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;state: {
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name:'test'
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;},
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;mutations: {
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;load(state, res = 'Tom') {
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state.name
                                = res;
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;},
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;actions: {
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;submit ({commit}) {
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;commit('load');
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;},
                                <br/>
                                //...
                                <br/>
                                })
                            </p>
                        </li>
                        <li>
                            <h3>在组件中使用</h3>
                        </li>
                        <li>
                            <p class="u-text">
                                store.dispatch('load')
                            </p>
                        </li>
                        <li>
                            <h3>使用mapActions 辅助函数</h3>
                        </li>
                        <li>
                            <p class="u-text">
                                import { mapActions } from 'vuex'
                                <br/>
                                export default {
                                <br/>
                                // ...
                                <br/>
                                methods: {
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;...mapActions([
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// 将 'this.submitA()' 映射为 `this.$store.dispatch('submitA')
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'submitA'
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;])
                                <br/>
                                // ...
                                <br/>
                                }
                            </p>
                        </li>
                    </ul>
                </div>
            </dd>
        </dl>
    </div>
</template>
<script>
    import {mapActions} from 'vuex'

    export default {
        methods: {
            ...mapActions(['submitA'])
            , load() {
                this.$store.dispatch('submitB');
            }
        }
        , computed: {
            test() {
                return this.$store.getters.get;
            }
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