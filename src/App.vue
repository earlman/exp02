<template>
    <div id="app">
        <SuiSidebar animation="push" :visible="sidebar" class="container">
            <SuiSidebarPusher>
                <button class="button" v-on:click="sidebar=!sidebar">
                    <b-icon icon="close"></b-icon>
                </button>
            </SuiSidebarPusher>
        </SuiSidebar>
        <section class="section">
            <div class="container">
                <nav class="level">
                    <div class="level-left">
                        <div class="level-item">
                            <a class = "button" v-on:click="sidebar=!sidebar">
                                <b-icon icon="menu"></b-icon>
                            </a>
                        </div>
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
                                <span> Sign Up </span>
                            </a>
                            </router-link>
                        </div>
                        <div class="level-item">
                            <a class = "button" @click="signUserOut">
                                <span> Sign Out </span>
                            </a>
                        </div>
                        <div class="level-item" v-if="user !== null">
                            <p>{{user.email}}</p>
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
    },

    computed: {
        user() {
            return this.$store.getters.user;
        },
    },

    methods: {
        signUserOut() {
            this.$store.commit('clearUser');
        },
    },
};
</script>

