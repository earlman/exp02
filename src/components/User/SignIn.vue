<template>
    <section>
        <div class="tile is-ancestor">
            <div class="tile"></div>
            <div class="tile is-parent">
                <div class="tile is-child">
                    <b-field>
                        <b-input
                            type="email"
                            placeholder="Email"
                            icon="email">
                            </b-input>
                    </b-field>
                    <b-field>
                        <b-input
                            type="password"
                            placeholder="Password"
                            icon="textbox-password"></b-input>
                    </b-field>
                    <b-field position="is-right"> <!-- Bug? position prop doesn't work for button-only fields -->
                        <p class="control">
                            <button
                                class="button is-primary"
                                type="submit">
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

</script>
