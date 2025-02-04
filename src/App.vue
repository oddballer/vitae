<template>
  <div id="shadow">
    <div v-if="this.store.$state.isLoading" id="loadCover"></div>
    <div v-if="this.store.$state.isLoading" id="loadWindow" class="loading"></div>
      <div id="vitae">
          <div id="headline">
              <p class="tinos-bold signature">AJ Page<br>Software Person</p>
          </div>
          <div id="content">
              <router-view/>
          </div>
      </div>
  </div>
</template>
<script>
import { useCounterStore } from './store/index.js'

export default {
data() {
      return {
        store: useCounterStore()
      }
  },
}
</script>
<style scoped>
#shadow {
position: fixed;
left: calc(30% + 16px);
top: calc(5% + 16px);
height: calc(90% - 16px);
width: calc(30% - 16px);
background-color: #1a1a1a;
border: #1a1a1a 8px solid; 
border-radius: 2px;
z-index: 1;
}
#vitae {
position: fixed;
height: calc(90%);
width: calc(30%);
left: calc(30%);
top: calc(5%);
border: #1a1a1a 4px solid;
border-radius: 2px;
background-color: rgb(255, 238, 246);
z-index: 2;
}
#loadWindow{
position: fixed;
height: calc(90%);
width: calc(30%);
left: calc(30%);
top: calc(5%);
background-color: rgb(255, 238, 246);
border: #1a1a1a 4px solid;
border-radius: 2px;
z-index: 3;
}
#loadCover{
position: fixed;
height: calc(90%);
width: calc(30%);
left: calc(30%);
top: calc(5%);
background-color: rgb(255, 238, 246);
border: #1a1a1a 4px solid;
border-radius: 2px;
z-index: 3;
}
#content{
grid-area: content;
display: flex;
align-items: center;
justify-content: center;
height: 100%;
width: 100%;
}
#headline {
position: fixed;
grid-area: headline;
width: 30%;
}
#about{
grid-area: about;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}
#work {
grid-area: work;
display: flex;
align-items: flex-start;
justify-content: center;
}

#selectedJob {
grid-area: selectedJob;
text-align: center;
}

/* @keyframes rainbow {
0% { color: red; transform: translateY(0)}
14% { color: orange; transform: translateY(-2px);}
28% { color: yellow; transform: translateY(-4px);}
42% { color: green; transform: translateY(-6px);}
57% { color: blue; transform: translateY(-8px);}
71% { color: indigo; transform: translateY(-6px)}
85% { color: violet; transform: translateY(-4px);}
100% { color: red; transform: translateY(-2px);}
} */

</style>