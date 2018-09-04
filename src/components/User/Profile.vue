<template>
    <div>
        <add-item></add-item>
        <section class="section">
            <b-field grouped>
                <b-field><b-input placeholder="Name" v-model="newItem.name"></b-input></b-field>
                <b-field><b-select placeholder="Type" v-model="newItem.type">
                    <option value='movies'>Movie</option>
                    <option value='shows'>Show</option>
                    <option value='books'>Book</option>
                </b-select></b-field>
                <b-field><b-select placeholder="Progress" v-model="newItem.progress">
                    <option value='completed'>Completed</option>   
                    <option value='inprogress'>In Progress</option>
                    <option value='onhold'>On-Hold</option>
                    <option value='dropped'>Dropped</option>
                    <option value='future'>Future</option>
                </b-select></b-field>
            </b-field>
            <b-field grouped>
                <b-field><b-datepicker
                            placeholder="Date Started"
                            v-model="newItem.dateStarted"></b-datepicker></b-field>
                <b-field><b-datepicker placeholder="Date Completed" v-model="newItem.dateCompleted"></b-datepicker></b-field>
            </b-field>
            <b-field>
                <button class="button" @click="onAddItem">
                    <b-icon icon="plus"></b-icon>
                    <span>Add Item</span>
                </button>
            </b-field>
        </section>
        
        <section class="section content">
            <h3>Completed</h3>
            <table class="table">
                <thead></thead>
                <tbody>
                    <tr v-for="citem in userItems.completed" v-bind:key="citem.key">
                        <td>{{ citem.name }}</td>
                        <td>{{ citem.type }}</td>
                        <td>{{ citem.progress }}</td>
                        <td>{{ citem.dateStarted }}</td>
                        <td>{{ citem.dateCompleted }}</td>
                    </tr>
                </tbody>
            </table>
            <h3>In Progress</h3>
            <table class="table">
                <thead></thead>
                <tbody>
                    <tr v-for="iitem in userItems.inprogress" v-bind:key="iitem.key">
                        <td>{{ iitem.name }}</td>
                        <td>{{ iitem.type }}</td>
                        <td>{{ iitem.progress }}</td>
                        <td>{{ iitem.dateStarted }}</td>
                        <td>{{ iitem.dateCompleted }}</td>
                    </tr>
                </tbody>
            </table>
            <h3>On Hold</h3>
            <table class="table">
                <thead></thead>
                <tbody>
                    <tr v-for="oitem in userItems.onhold" v-bind:key="oitem.key">
                        <td>{{ oitem.name }}</td>
                        <td>{{ oitem.type }}</td>
                        <td>{{ oitem.progress }}</td>
                        <td>{{ oitem.dateStarted }}</td>
                        <td>{{ oitem.dateCompleted }}</td>
                    </tr>
                </tbody>
            </table>
            <h3>Dropped</h3>
            <table class="table">
                <thead></thead>
                <tbody>
                    <tr v-for="ditem in userItems.dropped" v-bind:key="ditem.key">
                        <td>{{ ditem.name }}</td>
                        <td>{{ ditem.type }}</td>
                        <td>{{ ditem.progress }}</td>
                        <td>{{ ditem.dateStarted }}</td>
                        <td>{{ ditem.dateCompleted }}</td>
                    </tr>
                </tbody>
            </table>
            <h3>Future</h3>
            <table class="table">
                <thead></thead>
                <tbody>
                    <tr v-for="fitem in userItems.future" v-bind:key="fitem.key">
                        <td>{{ fitem.name }}</td>
                        <td>{{ fitem.type }}</td>
                        <td>{{ fitem.progress }}</td>
                        <td>{{ fitem.dateStarted }}</td>
                        <td>{{ fitem.dateCompleted }}</td>
                    </tr>
                </tbody>
            </table>
        </section>
        <section class="section">
            <div>
                User Profile
            </div>
            <div>
                Completed
            </div>
            <div>
                In Progress
            </div>
            <div>
                On-Hold
            </div>
            <div>
                Future
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                name: 'The Book of Mormon',
                type: 'Book',
                progress: 'Completed',
                dateStarted: new Date(),
                dateCompleted: new Date(),
                },
            ],
            newItem: {
                name: '',
                type: null,
                progress: null,
                dateStarted: new Date(),
                dateCompleted: new Date(),
            },
        };
    },

    computed: {
        userItems() {
            return this.$store.getters.userItems;
        },
        user() {
            return this.$store.getters.user;
        },
    },

    methods: {
        onAddItem() {
            if (this.user) {
            console.log('check out my button');
            this.items.push({ ...this.newItem }); // wooooooah object literals... i'm so cool dude
            const sendItem = {
                items: { ...this.newItem },
                list: this.newItem.progress,
            };
            console.dir(sendItem);
            this.$store.dispatch('createItem', sendItem);
            /*
            this.newItem.name = '';
            this.newItem.type = '';
            this.newItem.progress = '';
            this.newItem.dateStarted = new Date();
            this.newItem.dateCompleted = new Date();
            */
            console.table(this.items);
            } else {
                this.$store.dispatch('logError', 'Please "Log In" to add an item.');
            }
        },
    },
};
</script>
