import metadata from "../metadata.js";
import Database from "./classes/Database.js";

const database = new Database(metadata.settings.database.id);

export default database;