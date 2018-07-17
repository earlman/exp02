<template>
    <div id="app">
        <SuiSidebar animation="push" :visible="sidebar">
            <SuiSidebarPusher>test</SuiSidebarPusher>
        </SuiSidebar>
        <section class="section">
            <div class="container">
                <nav class="level">
                    <div class="level-left">
                        <div class="level-item">
                            <router-link to="/profile" >
                            <a class = "button">
                                <b-icon icon="account"></b-icon>
                                <span> Profile </span>
                            </a>
                            </router-link>
                        </div>
                        <div class="level-item">
                            <router-link to="/signin" >
                            <a class = "button">
                                <span> Sign In </span>
                            </a>
                            </router-link>
                        </div>
                        <div class="level-item">
                            <router-link to="/signup" >
                            <a class = "button">
                                <span> Sign Out </span>
                            </a>
                            </router-link>
                        </div>
                
                    </div>
                    <div class="level-right">
                        <div class="field has-addons">
                            <p class="control">
                                <input class="input" type="text" placeholder="Find a post">
                            </p>
                            <p class="control">
                            <button class="button">
                                Search
                            </button>
                            </p>
                        </div>
                    </div>

                </nav>
            </div>
        </section>
        <section class = "section">
            <div class = "container">
                <SuiButton primary v-on:click="sidebar=!sidebar">Primary</SuiButton>
                <sui-button secondary>Secondary</sui-button>
                <router-view> main application content </router-view>
            </div>
        </section>


    </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
        sidebar: false,
    };
  }
};
</script>

