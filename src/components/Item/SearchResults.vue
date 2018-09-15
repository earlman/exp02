<template>
    <div class="section">
        <div class="section">
            <b-field grouped group-multiline>
                <b-field label="Total">
                    <b-input type="number" v-model="total"></b-input>
                </b-field>
                <b-field label="Items per page">
                    <b-input type="number" v-model="perPage"></b-input>
                </b-field>
                <b-field label="Order">
                    <b-select v-model="order">
                        <option value="">default</option>
                        <option value="is-centered">is-centered</option>
                        <option value="is-right">is-right</option>
                    </b-select>
                </b-field>
                <b-field label="Size">
                    <b-select v-model="size">
                        <option value="">default</option>
                        <option value="is-small">is-small</option>
                        <option value="is-medium">is-medium</option>
                        <option value="is-large">is-large</option>
                    </b-select>
                </b-field>
            </b-field>
            <div class="block">
                <b-switch v-model="isSimple">Simple</b-switch>
                <b-switch v-model="isRounded">Rounded</b-switch>
            </div>

            <hr>
            <b-pagination
                :total="total"
                :current.sync="current"
                :order="order"
                :size="size"
                :simple="isSimple"
                :rounded="isRounded"
                :per-page="perPage">

            <!-- data goes here i think -->

            </b-pagination>
        </div>

        <div id="api_response" class="section">
            <button class="button" @click="getData">Get Data</button>
            <div>
                <vue-json-pretty
                    :data="info">
                 </vue-json-pretty>
            </div>
        </div>

    </div>
</template>

<script>
import VueJsonPretty from 'vue-json-pretty';
import axios from 'axios';

export default {
    components: {
        VueJsonPretty,
    },
    
    data() {
        return {
            total: 200,
            current: 1,
            perPage: 20,
            order: '',
            size: '',
            isSimple: false,
            isRounded: false,
            sample_data: '',

            info: 'sup',
        };
    },

    computed: {

    },

    methods: {
        getData() {
            axios
                .get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        api_key: 'e3e800db7df66c32a4b17d8d4f27964c',
                        query: 'poop',
                        page: 1,
                    },
                })
                .then((response) => { this.info = response; });
        },
    },
};

</script>
