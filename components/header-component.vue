<template>
    <header class="header">

        <div class="container py-2">
<nuxt-link to="#" class="logo">
            <img src="https://via.placeholder.com/200x40" alt="">
        </nuxt-link>
        </div>

    </header>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data () {
        return {
            message: "Hello World"
        }
    },
    methods:{
        example() : void  {
            this.message = "Hello New World"
        }
    }
})
</script>


<style lang="scss" scoped>
   .header{
       padding: 0 24px;
       background-color: #1d2732;
   }
</style>