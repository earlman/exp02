<template>
    <div id="app">
        <SuiSidebar animation="push" :visible="sidebar" class="container">
            <SuiSidebarPusher>
                <button class="button" v-on:click="sidebar=!sidebar">
                    <b-icon icon="close"></b-icon>
                </button>
            </SuiSidebarPusher>
        </SuiSidebar>

        <nav class="navbar is-info is-boxed">
            <div class="navbar-start">
                    <a class = "navbar-item" v-on:click="sidebar=!sidebar">
                        <b-icon icon="menu"></b-icon>
                    </a>

                    <router-link to="/" class = "navbar-item">
                            <b-icon icon="home"></b-icon>
                    </router-link>

                    <router-link to="/profile" class="navbar-item">
                        <b-icon icon="account"></b-icon>
                        <span> {{user.email}} </span>
                    </router-link>
                    
                    <router-link to="/signin" class="navbar-item">
                        <span> Sign In </span>
                    </router-link>
                    
                    <router-link to="/signup" class="navbar-item">
                        <span> Sign Up </span>
                    </router-link>

                    <a @click="signUserOut" class="navbar-item">
                        <span> Sign Out </span>
                    </a>

                    <a @click="loginDefault" class="navbar-item">
                        <span> Default User </span>
                    </a>

            </div>

            <div class="navbar-end">
                <div class="navbar-item field has-addons">
                    <p class="control">
                        <input class="input" type="text" placeholder="Find a post">
                    </p>
                    <p class="control">
                    <router-link to="/search" class="button">
                        <span> Search </span>
                    </router-link>
                    </p>
                </div>
            </div>

        </nav>

        <section class = "section container notif" v-if="error">
            <b-message title="Error" type="is-danger"  v-on:close="clearError" has-icon closable>{{error}}</b-message>
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

        error() {
            return this.$store.getters.error;
        }
    },

    methods: {
        signUserOut() {
            this.$store.commit('clearUser');
        },
        clearError() {
            this.$store.commit('clearError');
        },
        loginDefault() {
            const defaultUser = {
                email: 'default@default.com',
                password: 'password',
            };
            this.$store.dispatch('signUserIn', defaultUser);
        }
    },
};
</script>

<style>
    .notif {
        padding: 1rem 1.5rem;
    }
</style>
