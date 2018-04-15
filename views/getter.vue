<template>
    <div>
        <dl>
            <dt>
                <h1>Getter</h1>
            </dt>
            <dd>
                <div class="m-con">
                    <ul>
                        <li>
                            <h3>Getter 接受 state 作为其第一个参数：</h3>
                        </li>
                        <li>
                            <p class="u-text">
                                getters: {
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;get(state) {
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return state.name
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;}
                                <br/>
                                }
                            </p>
                        </li>
                        <li>
                            <h3>在组件中使用</h3>
                        </li>
                        <li>
                            <p class="u-text">
                                this.$store.getters.get&nbsp;&nbsp;&nbsp;&nbsp;//test
                            </p>
                        </li>
                        <li>
                            <h3>Getter 也可以接受其他 getter 作为第二个参数：</h3>
                        </li>
                        <li>
                            <p class="u-text">
                                //...
                                <br/>
                                ,anotherGet(state,getters){
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;return getters.get
                                <br/>
                                }
                            </p>
                        </li>
                        <li>
                            <h3>使用mapGetters 辅助函数</h3>
                        </li>
                        <li>
                            <p class="u-text">
                                import { mapGetters } from 'vuex'
                                <br/>
                                export default {
                                <br/>
                                // ...
                                <br/>
                                computed: {
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;// 使用对象展开运算符将 getter 混入 computed 对象中
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;...mapGetters([
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// 映射 'this.get' 为 'store.getters.get'
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'get'
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;,'anotherGet'
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
    import {mapGetters} from 'vuex'

    export default {
        methods: {}
        , computed: {
            ...mapGetters(['get'])
            , test() {
                return this.get;
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