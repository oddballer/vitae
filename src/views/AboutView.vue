<template lang="">
    <div id="about">
        <p class="heading">About</p>
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
#about{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: center;
}
</style>