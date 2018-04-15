<template>
    <div>
        <dl>
            <dt>
                <h1>Mutation</h1>
            </dt>
            <dd>
                <div class="m-con">
                    <ul>
                        <li>
                            <p>更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的 事件类型
                                (type) 和 一个 回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数：
                                {{test}}
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
                                &nbsp;&nbsp;&nbsp;&nbsp;//回调函数 (handler)
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
                                &nbsp;&nbsp;&nbsp;&nbsp;}
                                <br/>
                                //...
                                <br/>
                                })
                            </p>
                        </li>
                        <li>
                            <h3>在组件中使用</h3>
                            <p>你不能直接调用一个 mutation handler。这个选项更像是事件注册：“当触发一个类型为 load 的 mutation 时，调用此函数。”要唤醒一个
                                mutation handler，你需要以相应的 type 调用 store.commit 方法：</p>
                        </li>
                        <li>
                            <p class="u-text">
                                store.commit('load')
                            </p>
                        </li>
                        <li>
                            <h3>你可以向 store.commit 传入额外的参数，即 mutation 的 载荷（payload）：</h3>
                        </li>
                        <li>
                            <p class="u-text">
                                //...
                                <br/>
                                mutations: {
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;load (state, res = 'Tom') {
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state.name = res
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;}
                                <br/>
                                }
                                <br/>
                                store.commit('load', 'Jim')
                            </p>
                        </li>
                        <li>
                            <h3>使用mapMutations 辅助函数</h3>
                        </li>
                        <li>
                            <p class="u-text">
                                import { mapMutations } from 'vuex'
                                <br/>
                                export default {
                                <br/>
                                // ...
                                <br/>
                                methods: {
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;...mapMutations([
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// 将 'this.load()' 映射为
                                `this.$store.commit('load')
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'load'
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
    import {mapMutations} from 'vuex'

    export default {
        methods: {
            ...mapMutations(['loadName'])
            , load() {
                this.loadName();
            }
        }
        , computed: {
            test() {
                this.load();
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