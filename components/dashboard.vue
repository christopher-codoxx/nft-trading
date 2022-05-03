<template>
    <section >

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Trending NFT Collections by Sales</h1>
                    <h2>See what's selling. Prices updated in real time.</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-4">
                      <NuxtLink to="/">Home page</NuxtLink>
                      <NuxtLink to="/discover">Home page</NuxtLink>
                </div>

                <div class="col-12 dol-md-8">
                    <div class="date-filters">
                        <img src="https://via.placeholder.com/30" alt="">
                        <button>7d</button>
                        <button>15d</button>
                        <button>30d</button>
                    </div>
                </div>
            </div>

            <div class="table">
                <div class="table-header">
                    <div class="table-cell">Collection</div>
                    <div class="table-cell">Sales floor</div>
                    <div class="table-cell">Sales</div>
                    <div class="table-cell">Aerage</div>
                    <div class="table-cell">Volumne</div>
                    <div class="table-cell">MKT CAP</div>
                    <div class="table-cell">7D VOL</div>
                </div>
                <div class="table-content">
                    <div class="table-cell primary">
                        <img src="https://icy.tools/image-url-resizer/?image=https://lh3.googleusercontent.com/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI=s120&format=webp&metadata=none&onerror=redirect&width=40&height=40&quality=60" alt="">
                        <div>
                            <p>Coin Name</p>
                            <small class="text-label">
                                Circulating supply: <b>95,850</b>
                            </small>
                        </div>
                    </div>
                    <div class="table-cell">
                        <p class="text bold white">4.18</p>
                        <small class="text-label">
                            <span class="table-value-icon">X</span>
                            0.48%
                        </small>
                    </div>
                    <div class="table-cell">
                        <p class="text bold white">4.18</p>
                        <small class="text-label">
                            <span class="table-value-icon">X</span>
                            0.48%
                        </small>
                    </div>
                    <div class="table-cell">
                        <p class="text bold white">4.18</p>
                        <small class="text-label">
                            <span class="table-value-icon">X</span>
                            0.48%
                        </small>
                    </div>
                    <div class="table-cell">
                        <p class="text bold white">4.18</p>
                        <small class="text-label">
                            <span class="table-value-icon">X</span>
                            0.48%
                        </small>
                    </div>
                    <div class="table-cell">
                        <p class="text bold white">4.18</p>
                        <small class="text-label">
                            <span class="table-value-icon">X</span>
                            0.48%
                        </small>
                    </div>

                    <div class="table-cell">
                        <div class="graph"></div>
                    </div>
                </div>
            </div>
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