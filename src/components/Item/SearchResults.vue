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
           
           <div class="level" v-for="result in results" :key="result.id">
                <div class="level-left">
                    <div class="level-item">
                        <figure class="image is-128x128">
                            <div class="image is-2by3">
                                <img :src='getImageURL(result.poster_path)'>   
                            </div>
                        </figure>
                    </div>
                </div>
                <div class="level-item">
                    <div class="content">
                        <p class="title">{{result.title}}</p>
                        <p class="subtitle">{{result.release_date}}</p>
                        <p>{{result.overview}}</p>
                    </div>
                </div>
           </div>

           <!-- FUCK IT I GIVE UP
            <div class="columns">
                <div class="column is-one-fifth" v-for="result in results" :key="result.id">
                    <div class="card">
                        <div class="card-image"><figure class="image">
                            <img :src='getImageURL(result.poster_path)'>
                            </figure></div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title">{{result.title}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            -->

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
            <div class="content">
                <vue-json-pretty :data="configuration"></vue-json-pretty>
            </div>
            <div class="content">
                <vue-json-pretty
                    :data="results">
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


            api_key: 'e3e800db7df66c32a4b17d8d4f27964c',
            results: null,
            configuration: '',
            poster_size: 'w500',
        };
    },

    computed: {

    },

    methods: {
        getData() {
            axios
                .get('https://api.themoviedb.org/3/configuration', {
                    params: {
                        api_key: this.api_key,
                    }
                })
                .then((response) => { this.configuration=response; })

            axios
                .get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        api_key: this.api_key,
                        query: 'How to Train Your Dragon',
                        page: 1,
                    },
                })
                .then((response) => { this.results = response.data.results; });
        },

        getImageURL(path) {
            return this.configuration.data.images.base_url + this.poster_size + path;
        },
    },
};

</script>
