<template>    
    <nav id="nav">
        <router-link :to="{name: 'work'}" @click="store.load"><p class="tinos-bold headline clickable">Work</p></router-link>
        <router-link :to="{name: 'projects'}" @click="store.load"><p class="tinos-bold headline clickable">Projects</p></router-link>
        <router-link :to="{name: 'contact'}" @click="store.load"><p class="tinos-bold headline clickable">Contact</p></router-link>
        <router-link :to="{name: 'about'}" @click="store.load"><p class="tinos-bold headline clickable">About</p></router-link>
    </nav>
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
    #nav{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        height: 25%;
    }
</style>