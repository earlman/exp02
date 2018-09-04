<template>
    <div class="is-ancestor">
        <div class="tile is-vertical">
            <div class="tile">
                <div class="tile is-parent is-8">
                    <div class="tile is-child box content">
                        <h1>Your Profile</h1>
                        <h6>Current: </h6>
                        <h6>Future: </h6>
                        <h6>Completed: </h6>
                        <h6>On Hold: </h6>
                    </div>
                </div>
                <div class="tile is-parent">
                    <div class="tile is-child box"><p class="title">Recent Updates</p>
                    <p>Create 'update card' component</p>
                    </div>
                </div>
            </div>
            
            <div class="tile is-parent">
                <div class="tile is-child box">
                    <p class="title">Statistics</p>
                    <div class="tile is-vertical">
                        <div class="tile">
                            <div class="tile is-parent">
                                <div class="tile is-child box has-text-centered">
                                    <p class="title is-1">73</p>
                                    <p class="subtitle is-5">books</p>
                                </div>
                            </div>
                            <div class="tile is-parent">
                                <div class="tile is-child box has-text-centered">
                                    <p class="title is-1">21</p>
                                    <p class="subtitle is-5">seasons</p>
                                </div>
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile is-parent">
                                <div class="tile is-child box has-text-centered">
                                    <p class="title is-1">212</p>
                                    <p class="subtitle is-5">movies</p>
                                </div>
                            </div>                         
                            <div class="tile is-parent">
                                <div class="tile is-child box has-text-centered">
                                    <p class="title is-1">16</p>
                                    <p class="subtitle is-5">countries</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div class="tile">
                <div class="tile is-parent">
                    <div class="tile is-child box">
                        <p class="title">Favorites</p>
                        <div class="tile is-parent">
                            <div class="tile is-child">
                                <figure class="image is-3by4">
                                    <img src="https://bulma.io/images/placeholders/480x640.png">
                                </figure>                  
                            </div>
                            &nbsp; <!-- lmfao jank as fuck -->
                            <div class="tile is-child">
                                <figure class="image is-3by4">
                                    <img src="https://bulma.io/images/placeholders/480x640.png">
                                </figure>                  
                            </div>  
                            &nbsp;
                            <div class="tile is-child">
                                <figure class="image is-3by4">
                                    <img src="https://bulma.io/images/placeholders/480x640.png">
                                </figure>                  
                            </div>  
                            &nbsp;
                            <div class="tile is-child">
                                <figure class="image is-3by4">
                                    <img src="https://bulma.io/images/placeholders/480x640.png">
                                </figure>                  
                            </div>         
                        </div>       
                    </div>
                </div>
                <div class="tile is-parent">
                    <div class="tile is-child box">
                        <p class="title">Collections</p>
                        <div class="tile is-parent">
                            <div class="tile is-child">
                                <figure class="image is-square">
                                    <img src="https://bulma.io/images/placeholders/128x128.png">
                                </figure>                  
                            </div>  
                            &nbsp;
                            <div class="tile is-child">
                                <figure class="image is-square">
                                    <img src="https://bulma.io/images/placeholders/128x128.png">
                                </figure>                  
                            </div>
                            &nbsp; 
                            <div class="tile is-child">
                                <figure class="image is-square">
                                    <img src="https://bulma.io/images/placeholders/128x128.png">
                                </figure>                  
                            </div>         
                        </div>       
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
