<template>
    <section >

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="title mb-2">Trending NFT Collections by <span class="blue">Sales</span> </h1>
                    <h2 class="subtitle">See what's selling. Prices updated in real time.</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-4">
                      <NuxtLink to="/" class="btn pill active">Home page</NuxtLink>
                      <NuxtLink to="/discover" class="btn pill">Home page</NuxtLink>
                </div>

                <div class="col-12 col-md-8 text-right">
                    <div class="date-filters">
                        <img src="https://via.placeholder.com/30" alt="">
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
                <tr class="table-row">
                    <td class="table-cell primary">
                        <img src="https://icy.tools/image-url-resizer/?image=https://lh3.googleusercontent.com/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI=s120&format=webp&metadata=none&onerror=redirect&width=40&height=40&quality=60" alt="">
                        <div class="d-flex align-items-start flex-column ml-2">
                            <p class="mb-0 text bold white">Coin Name</p>
                            <small class="text-label mb-0">
                                Circulating supply: <b>95,850</b>
                            </small>
                        </div>
                    </td>
                    <td class="table-cell">
                        <p class="text bold white mb-0">4.18</p>
                        <small class="text-label">
                            <span class="table-value-icon">X</span>
                            0.48%
                        </small>
                    </td>
                    <td class="table-cell">
                        <p class="text bold white mb-0">4.18</p>
                        <small class="text-label">
                            <span class="table-value-icon">X</span>
                            0.48%
                        </small>
                    </td>
                    <td class="table-cell">
                        <p class="text bold white mb-0">4.18</p>
                        <small class="text-label">
                            <span class="table-value-icon">X</span>
                            0.48%
                        </small>
                    </td>
                    <td class="table-cell">
                        <p class="text bold white mb-0">4.18</p>
                        <small class="text-label">
                            <span class="table-value-icon">X</span>
                            0.48%
                        </small>
                    </td>
                    <td class="table-cell">
                        <p class="text bold white mb-0">4.18</p>
                        <small class="text-label">
                            <span class="table-value-icon">X</span>
                            0.48%
                        </small>
                    </td>

                    <td class="table-cell">
                        <div class="graph"></div>
                    </td>
                </tr>
            </table>
        </div>
        
    </section>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    data(){
        return {

        }
    },
    methods:{

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
            padding: 8px 20px;
        }
    }

    .table-row{
        border-bottom: 1px solid #1d2732;
    }

    .table-cell{
            padding: 12px 20px;
        }

    .table-cell.primary {
        display: inline-flex;
        min-width: 256px;
        img{
            height: 32px;
            
        }
    }

    
</style>