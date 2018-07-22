<template>
    <section>
        <div class="tile is-ancestor">
            <div class="tile"></div>
            <div class="tile is-parent">
                <div class="tile is-child" @keyup.enter="onSignIn"> <!-- the keyup thing lets you press enter to sign in -->
                    <b-field>
                        <b-input
                            type="email"
                            placeholder="Email"
                            icon="email"
                            v-model="email">
                            </b-input>
                    </b-field>
                    <b-field>
                        <b-input
                            type="password"
                            placeholder="Password"
                            icon="textbox-password"
                            v-model="password"></b-input>
                    </b-field>
                    <b-field position="is-right"> <!-- Bug? position prop doesn't work for button-only fields -->
                        <p class="control">
                            <button
                                class="button is-primary"
                                type="submit"
                                @click="onSignIn">
                                <b-icon icon="arrow-right"></b-icon>
                                <span>Log In</span>
                            </button>
                        </p>
                    </b-field>
                    <div class="control">
                    </div>
                </div>
            </div>
            <div class="tile"></div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    computed: {
        /*
        user() {
            return this.$store.getters.user;
        },
        error() {
            return this.$store.getters.error;
        },
        isLoading() {
            return this.$store.getters.loading;
        },
        */
    },

    methods: {
        onSignIn() {
            this.$store.dispatch('signUserIn', { email: this.email, password: this.password });
            this.email = '';
            this.password = '';
        },
    },
};

</script>
