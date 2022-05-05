<template>
    <section >

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="title mb-2">Trending NFT Collections by <span class="blue">Sales</span> </h1>
                    <h2 class="subtitle">See what's selling. Prices updated in real time.</h2>
                </div>
            </div>
            <div class="row pb-0">
                <div class="col-12 col-md-4">
                      <NuxtLink to="/" class="btn pill active">Home page</NuxtLink>
                      <NuxtLink to="/discover" class="btn pill">Home page</NuxtLink>
                </div>

                <div class="col-12 col-md-8 text-right">
                    <div class="date-filters">
                        <span class="material-icons icon blue mr-2">
                            whatshot
                        </span>
                        <button class="dashboard-filter-btn">7d</button>
                        <button class="dashboard-filter-btn">15d</button>
                        <button class="dashboard-filter-btn">30d</button>
                    </div>
                </div>
            </div>

            <table class="table">
                <tr class="table-header">
                    <td class="table-cell primary">Collection</td>
                    <td class="table-cell">Sales floor</td>
                    <td class="table-cell">Sales</td>
                    <td class="table-cell">Aerage</td>
                    <td class="table-cell">Volumne</td>
                    <td class="table-cell">MKT CAP</td>
                    <td class="table-cell">7D VOL</td>
                </tr>
                <tbody>

 <template v-if="collections.length > 0">
                <tr class="table-row" :key="index" v-for="( collection, index) in collections">
                    <td class="table-cell primary">
                        <img :src="collection.node.unsafeOpenseaImageUrl" alt="">
                        <div class="d-flex align-items-start flex-column ml-3">
                            <p class="mb-1 text bold white">{{collection.node.name}}</p>
                            <small class="text-label mb-0">
                                Circulating supply: <b>{{sumAttributesArray(collection.node.attributes)}}</b>
                            </small>
                        </div>
                    </td>
                    <td class="table-cell">
                        <p class="text bold white mb-1">{{collection.node.stats.floor.toFixed(2)}}</p>
                        <small class="text-label up d-flex align-items-center">
                            <span class="material-icons table-value-icon ">
                                north_east
                            </span>
                            0.48%
                        </small>
                    </td>
                    <td class="table-cell">
                        <p class="text bold white mb-1">{{collection.node.stats.totalSales.toFixed(2)}}</p>
                        <small class="text-label up d-flex align-items-center">
                            <span class="material-icons table-value-icon ">
                                north_east
                            </span>
                            
                            0.48%
                        </small>
                    </td>
                    <td class="table-cell">
                        <p class="text bold white mb-1">{{collection.node.stats.average.toFixed(2)}}</p>
                        <small class="text-label down d-flex align-items-center">
                            <span class="material-icons table-value-icon ">
                                south_east
                            </span>
                            0.48%
                        </small>
                    </td>
                    <td class="table-cell">
                        <p class="text bold white mb-1">{{collection.node.stats.volume.toFixed(2)}}</p>
                        <small class="text-label down d-flex align-items-center">
                            <span class="material-icons table-value-icon ">
                                south_east
                            </span>
                            0.48%
                        </small>
                    </td>
                    <td class="table-cell">
                        <p class="text bold white mb-1">{{(collection.node.stats.floor * collection.node.stats.totalSales).toFixed(2)}}</p>
                        <small class="text-label down d-flex align-items-center">
                            <span class="material-icons table-value-icon ">
                                south_east
                            </span>
                            0.48%
                        </small>
                    </td>
                   

                    <td class="table-cell">
                        <div class="graph"></div>
                    </td>
                </tr>


 </template>
                </tbody>

            </table>



        </div>
        
    </section>
</template>

<script lang="ts">
import Vue from 'vue';
import gql from 'graphql-tag';
import TRENDING from '@/graphql/Trending.gql';


export default Vue.extend({

    data(){
        return {
            collections : []
        }
    },
    apollo:{
        collections : {
            query: TRENDING,
            update : data => data.contracts.edges,
            prefetch: true,
        }
    },
    methods:{
        sumAttributesArray( arr : {valueCount : number}[]) : number {

            let total_count = 0;

            arr.map(item => ( total_count += item.valueCount) )

            return total_count;

        }
    }
})
</script>


<style lang="scss" scoped>
    .table-header{
        background-color: #1d2732;
        justify-content: space-between;
        color: #616c7f;
        text-transform: uppercase;
        font-size: 14px;

        .table-cell{
            padding: 12px 20px;
            font-size: 12px;
            letter-spacing: -0.1px;
        }
    }

    .table-row{
        border-bottom: 1px solid #1d2732;
    }

    .table-cell{
            padding: 12px 20px;
            min-width: 120px;
            line-height: normal;
        }

    .table-cell.primary {
        display: inline-flex;
        min-width: 256px;
        align-items: center;
        img{
            height: 32px;
            border-radius: 32px;
            
        }
    }


    .table tbody{
        background-color: #141c25;
    }
    

    .table-value-icon{
        font-size: 14px;
        line-height: 1;
        margin-right: 2px;


        
    }

    .down{
            color: #f45b69;
        }
        .up{
            color: #78ffd6;
        }
</style>