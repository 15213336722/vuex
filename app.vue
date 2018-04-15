<template>
    <div class="g-container">
        <div class="g-sidebar">
            <ul>
                <li>
                    <router-link to="/index">
                        <span>开始</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/state">
                        <span>State</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/getter">
                        <span>Getter</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/mutation">
                        <span>Mutation</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/action">
                        <span>Action</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/module">
                        <span>Module</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="g-main">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style scoped>
    .g-container{
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        justify-content: space-around;
    }
    .g-container .g-sidebar{
        width: 300px;
        height: 100%;
        overflow: hidden;
        padding: 15px;
        border-right: 1px solid #eee;
        flex: 1;
    }
    .g-container .g-sidebar span{
        width: 300px;
        height: 25px;
        overflow: hidden;
        display: inline-block;
        color: #333;
        text-decoration: none;
        font-size: 12px;
    }
    .g-container .g-main{
        flex: 9;
        width: 100%;
        height: auto;
        overflow: auto;
        padding: 15px;
    }
</style>