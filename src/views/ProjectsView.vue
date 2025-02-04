<template lang="">
    <div id="projects">
        <p class="heading">Projects</p>
        <img @click="()=> {store.load(); $router.go(-1)}" class="icon" src="/back.svg"/>
    </div>
</template>
<script>
import { useCounterStore } from '../store/index.js'
export default {
    data() {
        return {
            store: useCounterStore()
        }
    },
}
</script>
<style scoped>
#projects{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: center;
}
    
</style>