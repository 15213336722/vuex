<template>
    <div>
        <dl>
            <dt>
                <h1>State</h1>
            </dt>
            <dd>
                <div class="m-tit">
                    <h2>在 Vue 组件中获得 Vuex 状态</h2>
                </div>
                <div class="m-con">
                    <ul>
                        <li>
                            <p class="u-text">
                                //...
                                <br/>
                                state: {
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;name:'test'
                                <br/>
                                }
                                <br/>
                                //...
                            </p>
                        </li>
                        <li>
                            <h3>在组件中使用</h3>
                        </li>
                        <li>
                            <p class="u-text">
                                this.$store.state.name
                            </p>
                        </li>
                        <li>
                            <h3>使用mapState 辅助函数</h3>
                        </li>
                        <li>
                            <p class="u-text">
                                import {mapState} from 'vuex'
                                <br/>
                                //...
                                <br/>
                                export default {
                                <br/>
                                //...
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;, computed: {
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...mapState(['name'])
                                <br/>
                                // 映射 this.name 为 store.state.name
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;,text() {
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return this.name;
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;}
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
    import {mapState} from 'vuex'

    export default {
        methods: {}
        , computed: {
            ...mapState(['name'])
            ,test() {
                return this.name;
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