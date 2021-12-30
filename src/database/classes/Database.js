import Dexie from "dexie";
import DexieRelationships from "dexie-relationships";

class Database {

    constructor(id) {
        this.databaseID = id;
        this.$noop = () => ({});
    }

    async initialize() {
        try {
            console.log(`Initializing database: ${this.databaseID}`);
            this.dexie = Dexie;
            this.dexieDB = undefined;
            this.dexieDB = new Dexie(this.databaseID, {
                addons: [DexieRelationships]
            });
            // @INFO: define versions, tables and indexes here:
            this.dexieDB.version(1).stores({
                
            });
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

}

export default Database;