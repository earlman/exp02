<template>
    <div class="tile is-parent">
        <div class="tile is-child box">
            <b-field grouped>
                <b-input expanded placeholder="Name" v-model="newItem.name" ></b-input>
                <b-select placeholder="Type" v-model="newItem.type">
                    <option value='movies'>Movie</option>
                    <option value='shows'>Show</option>
                    <option value='books'>Book</option>
                </b-select>
                <b-select placeholder="Progress" v-model="newItem.progress">
                    <option value='completed'>Completed</option>   
                    <option value='inprogress'>In Progress</option>
                    <option value='onhold'>On-Hold</option>
                    <option value='dropped'>Dropped</option>
                    <option value='future'>Future</option>
                </b-select>
                <b-datepicker
                            placeholder="Date Started"
                            v-model="newItem.dateStarted"></b-datepicker>
                <b-datepicker placeholder="Date Completed" v-model="newItem.dateCompleted"></b-datepicker>
                
                <button class="button" @click="onAddItem">
                    <b-icon icon="plus"></b-icon>
                    <span>Add Item</span>
                </button>
            </b-field>
        </div>
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
                if (this.user &&
                    this.newItem.name &&
                    this.newItem.type &&
                    this.newItem.progress
                ) {
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
                    this.$store.dispatch('clearError');
                
                } else {
                    this.$store.dispatch('logError', 'Item name, type, and progress is required')
                }
            },
        },
    };
</script>

<style scoped>

.box {
    background-color: #167df0;
}

</style>