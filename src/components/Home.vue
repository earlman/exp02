<template>
    <div class="is-ancestor">
        <div class="tile is-vertical">
            <div class="tile">
                <div class="tile is-parent">
                    <div class="tile is-child box"><p class="title">Profile</p></div>
                </div>
                <div class="tile is-parent">
                    <div class="tile is-child box"><p class="title">Overview</p></div>
                </div>
                <div class="tile is-parent">
                    <div class="tile is-child box"><p class="title">Recent Updates</p></div>
                </div>
            </div>
            
            <div class="tile is-parent">
                <div class="tile is-child box"><p class="title">Statistics</p></div>
            </div>

            <div class="tile">
                <div class="tile is-parent">
                    <div class="tile is-child box">
                        <p class="title">Favorites</p>
                    </div>
                </div>
                <div class="tile is-parent">
                    <div class="tile is-child box">
                        <p class="title">Collections</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
