<template lang="">
    <div id="contact">
        <p class="heading">Contact</p>
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
#contact{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: center;
}
    
</style>