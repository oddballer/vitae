<template lang="">
    <div id="container">
        <div id="jobs">
            <div id="job" v-for="(job, index) in jobs" :key="index">
            <router-link :to="{name: 'workDetails', params: {id: job.id}}" @click="store.load">
                <p class="tinos-bold heading clickable">{{job.company}}</p>
            </router-link>
                <p class="heading">{{job.date}}</p>
            </div>
        </div>
        <div id="back">
            <img @click="()=> {store.load(); $router.go(-1)}" class="icon" src="/back.svg"/>
        </div>
    </div>
</template>
<script>
import { useCounterStore } from '../store/index.js'
export default {
    data() {
        return {
            store: useCounterStore(),
            jobs: []
        }
    },
    created(){
        this.jobs = this.store.$state.jobs
    }
}
</script>
<style scoped>
    #container{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 25%;
    }
    #back{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #jobs{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        height: 100%;
    }
</style>