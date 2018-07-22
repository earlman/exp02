<template>
    <section>
        <div class="tile is-ancestor">
            <div class="tile"></div>
            <div class="tile is-parent">
                <div class="tile is-child" @keyup.enter="onSignUp">
                    <b-field>
                        <b-input
                            type="email"
                            placeholder="Email"
                            icon="email"
                            v-model="email"> <!-- two-way sync with data -->
                            </b-input>
                    </b-field>
                    <b-field>
                        <b-input
                            type="password"
                            placeholder="Password"
                            icon="textbox-password"
                            v-model="password"></b-input>
                    </b-field>
                    <b-field>
                        <b-input
                            type="password"
                            placeholder="Confirm Password"
                            icon="textbox-password"
                            v-model="confirmPassword"></b-input>
                    </b-field>
                    <b-field position="is-right"> <!-- Bug? position prop doesn't work for button-only fields -->
                        <p class="control">
                            <button
                                class="button is-primary"
                                type="submit"
                                v-on:click="onSignUp"
                                >
                                <b-icon icon="account-plus"></b-icon>
                                <span>Create Account</span>
                            </button>
                        </p>
                    </b-field>
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
            confirmPassword: '',
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
        onSignUp() {
            this.$store.dispatch('signUserUp', { email: this.email, password: this.password });
            this.email = '';
            this.password = '';
            this.confirmPassword = '';
        },
    },
};


</script>
