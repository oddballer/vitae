<template lang="">
    <div>
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
    
</style>