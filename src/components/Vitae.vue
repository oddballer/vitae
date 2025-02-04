<template>
    <div id="shadow">
      <div v-if="isLoading" id="loadCover"></div>
      <div v-if="isLoading" id="loadWindow" class="loading"></div>
        <div id="vitae">
            <div id="headline">
                <p class="tinos-bold heading">AJ Page</p>
                <p class="tinos-bold heading">Software Person</p>
            </div>
            <div id="content">
              <router-view />
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
        return {
          isLoading: false
        }
    },
    methods: {
      loadContent() {
        this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
        
        back() {
          this.loadContent();
          this.selectedJob = '';
        },
    }
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
}
#headline {
  position: fixed;
  grid-area: headline;
  padding-left: 8px;
  padding-top: 8px;
}
#about{
  grid-area: about;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
nav{
  grid-area: nav;
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

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(-360deg); }
}

@keyframes loading {
  0% {
    background: linear-gradient(45deg, rgba(0, 0, 0, 1) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1)),
                linear-gradient(45deg, rgba(0, 0, 0, 1) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1));
    background-size: 40px 40px;
    background-position: 0 0, 20px 20px;
  }
  100% {
    background: linear-gradient(45deg, rgba(0, 0, 0, 1) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1)),
                linear-gradient(45deg, rgba(0, 0, 0, 1) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1));
    background-size: 40px 40px;
    background-position: 40px 40px, 60px 60px;
  }
}
</style>