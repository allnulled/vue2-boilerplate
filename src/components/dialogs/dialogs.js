class DialogsManager {

    constructor() {
        
    }

    async initialize(app) {
        try {
            this.app = app;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    open(...args) {
        return this.app.$refs.DialogViewer.open(...args);
    }

    close(...args) {
        return this.app.$refs.DialogViewer.close(...args);
    }

    closeAll(...args) {
        return this.app.$refs.DialogViewer.closeAll(...args);
    }

}

const dialogs = new DialogsManager();

export default dialogs;