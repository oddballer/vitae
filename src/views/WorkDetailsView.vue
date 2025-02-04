<template lang="">
    <div id="company">
        <p v-if="!roleSelected" class="heading">{{job.company}}</p>
        <div id="role" v-if="!roleSelected" v-for="(role, index) in job.roles" :key="index">
            <p @click="selectRole(role)" class="tinos-bold heading clickable">{{role.title}}</p>
            <p class="date tinos-regular">{{role.date}}</p>
        </div>
        
        <p class="text">{{job.description}}</p>
        <div id="job" v-if="roleSelected">
            <p class="heading">{{job.company}}</p>
            <p class="heading">{{roleSelected.title}}</p>
            <p class="heading">{{roleSelected.date}}</p>
            <p class="text">{{roleSelected.description}}</p>
        </div>
        <img v-if="!roleSelected" @click="() => {store.load(); $router.go(-1)}" class="icon" src="/back.svg"/>
        <img v-if="roleSelected" @click="() => {store.load(); this.roleSelected = null}" class="icon" src="/back.svg"/>
    </div>
</template>
<script>
import { useCounterStore } from '../store/index.js'
export default {
    data() {
        return {
            store: useCounterStore(),
            job: {},
            roleSelected: null,
        }
    },
    methods: {
        selectRole(role){
            this.store.load();
            this.roleSelected = role
        }
    },
    created(){
        this.job = this.store.$state.jobs.find(job => job.id == this.$route.params.id)
}
}
</script>
<style scoped>
    #company{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
    }
    #job{
    }
</style>