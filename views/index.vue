<template>
    <div>
        <dl>
            <dt>
                <h1>Vuex</h1>
            </dt>
            <dd>
                <div class="m-tit">
                    <p>
                        每一个 Vuex 应用的核心就是 store（仓库）。“store”基本上就是一个容器，它包含着你的应用中大部分的状态 (state)。
                        Vuex 和单纯的全局对象有以下两点不同：
                    </p>
                </div>
                <div class="m-con">
                    <ol>
                        <li>
                            <p>1.Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。</p>
                        </li>
                        <li>
                            <p>2.你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit)
                                mutation。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。</p>
                        </li>
                    </ol>
                </div>
            </dd>
            <dd>
                <div class="m-tit">
                    <h2>单一状态树</h2>
                </div>
                <div class="m-con">
                    <p>
                        Vuex 使用单一状态树，用一个对象就包含了全部的应用层级状态。至此它便作为一个“唯一数据源 (SSOT)”而存在。这也意味着，每个应用将仅仅包含一个 store
                        实例。单一状态树让我们能够直接地定位任一特定的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照。
                        <br>
                        单状态树和模块化并不冲突——在后面的Module里我们会讨论如何将状态和状态变更事件分布到各个子模块中。
                    </p>
                </div>
            </dd>
            <dd>
                <div class="m-tit">
                    <h2>安装</h2>
                </div>
                <div class="m-con">
                    <ol>
                        <li>
                            <h3>NPM</h3>
                        </li>
                        <li>
                            <p class="u-text">
                                npm install vuex --save
                            </p>
                        </li>
                        <li>
                            <h3>在一个模块化的打包系统中，您必须显式地通过 Vue.use() 来安装 Vuex：</h3>
                        </li>
                        <li>
                            <p class="u-text">
                                import Vue from 'vue'
                                <br/>
                                import Vuex from 'vuex'
                                <br/>
                                <br/>
                                Vue.use(Vuex)
                            </p>
                        </li>
                    </ol>
                </div>
            </dd>
            <dd>
                <div class="m-con">
                    <ol>
                        <li>
                            <h3>全局加载</h3>
                        </li>
                        <li>
                            <p class="u-text">
                                main.js
                                <br/>
                                import Vue from 'vue';
                                <br/>
                                import Vuex from 'vuex';
                                <br/>
                                <br/>
                                Vue.use(Vuex);
                                <br/>
                                const store = new Vuex.Store({
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;state: {...}
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;, actions: {...}
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;, mutations: {...}
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;, getters: {...}
                                <br/>
                                });
                                <br/>
                                new Vue({
                                <br/>
                                // ...
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;store: store,
                                <br/>
                                // ...
                                <br/>
                                });
                            </p>
                        </li>
                        <li>
                            <h3>组件局部加载</h3>
                        </li>
                        <li>
                            <p class="u-text">
                                import store from '../store/store.js'
                            </p>
                        </li>
                        <li>
                            <h3>组件局部使用</h3>
                        </li>
                        <li>
                            <p class="u-text">
                                store.state.name
                                <br/>
                                store.commit(...)
                                <br/>
                                store.getters...
                                <br/>
                                store.dispatch(...)
                            </p>
                        </li>
                    </ol>
                </div>
            </dd>
        </dl>
    </div>
</template>
<script>
    export default {}
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
    .u-text{
        width: 1200px;
        height: auto;
        overflow: hidden;
        box-sizing: border-box;
        padding: 15px;
        background-color: #f8f8f8;
    }
</style>
