<template>

    <header class="sub-header">
        <div class="container">
            <div class="current-block-info">
                <span class="current-block-info-item">
                    <img src="/block.svg" alt="">

                    <p class="mb-0">14699702</p>

                </span>
                <span class="current-block-info-item">
                    <img src="/block.svg" alt="">

                    <p class="mb-0">14699702</p>

                </span>
                <span class="current-block-info-item">
                    <img src="/block.svg" alt="">

                    <p class="mb-0">14699702</p>

                </span>
            </div>
        </div>
    </header>
    
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'CurrentBlockHeader',
    data(){
        return{}
    },
    methods:{

    }
})
</script>


<style lang="scss" scoped>
    .sub-header{
        background-color: #141c25;
        padding: 12px 0;
    }

    .current-block-info {
        display: flex;
        color: #fff;
        column-gap: 16px;
        font-size: 16px;
    }

    .current-block-info-item{
        display: inline-flex;
        border-right: 1px solid rgba(255,255,255,0.2);
        padding-right: 16px;
        &:last-child{
            border-right: none;
        }

    }
</style>