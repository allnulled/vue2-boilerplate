class Database {

    constructor(id) {
        this.databaseID = id;
        this.$noop = () => ({});
    }

    async initialize() {
        try {
            console.log(`Initializing database: ${this.databaseID}`);
        } catch (error) {
            console.error(error);
            alert("Database could not be loaded!");
            throw error;
        }
    }

    select(table, reducer) {
        console.log("Not available yet");
        this.$noop(table, reducer);
    }

    insert(table, item) {
        console.log("Not available yet");
        this.$noop(table, item);
    }

    update(table, id, value) {
        console.log("Not available yet");
        this.$noop(table, id, value);
    }

    delete(table, id) {
        console.log("Not available yet");
        this.$noop(table, id);
    }

    insertIntoList(table, id, subitem) {
        console.log("Not available yet");
        this.$noop(table, id, subitem);
    }
    
    updateFromList(table, id, subitemId, value) {
        console.log("Not available yet");
        this.$noop(table, id, subitemId, value);
    }
    
    deleteFromList(table, id) {
        console.log("Not available yet");
        this.$noop(table, id);
    }

}

export default Database;