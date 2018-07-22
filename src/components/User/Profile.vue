<template>
    <div>
        <section class="section">
            <b-field grouped>
                <b-field><b-input placeholder="Name" v-model="newItem.name"></b-input></b-field>
                <b-field><b-select placeholder="Type" v-model="newItem.type">
                    <option>Movie</option>
                    <option>Show</option>
                    <option>Book</option>
                </b-select></b-field>
                <b-field><b-select placeholder="Progress" v-model="newItem.progress">
                    <option>Completed</option>   
                    <option>In Progress</option>
                    <option>On-Hold</option>
                    <option>Future</option>
                </b-select></b-field>
            </b-field>
            <b-field grouped>
                <b-field><b-datepicker
                            placeholder="Date Started"
                            v-model="newItem.dateStarted"></b-datepicker></b-field>
                <b-field><b-datepicker placeholder="Date Completed" v-model="newItem.dateCompleted"></b-datepicker></b-field>
                <b-field><b-input placeholder="Progress"></b-input></b-field>
            </b-field>
            <b-field>
                <button class="button" @click="onAddItem">
                    <b-icon icon="plus"></b-icon>
                    <span>Add Item</span>
                </button>
            </b-field>
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
                }
            ],
            newItem: {
                name: '',
                type: '',
                progress: '',
                dateStarted: new Date(),
                dateCompleted: new Date(),
            },
        };
    },

    methods: {
        onAddItem() {
            console.log('check out my button');
            this.items.push({...this.newItem}); // wooooooah object literals... i'm so cool dude
            /*
            this.newItem.name = '';
            this.newItem.type = '';
            this.newItem.progress = '';
            this.newItem.dateStarted = new Date();
            this.newItem.dateCompleted = new Date();
            */
            console.table(this.items);
        }
    },
};
</script>
