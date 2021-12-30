const factories = {
    // @INFO: add your dialog factories here:
    "Loading dialog": (options, DialogViewer, close) => {
        DialogViewer.$noop(options, close);
        return {};
    },
    "Hello dialogs!": (options, DialogViewer, close) => {
        DialogViewer.$noop(options);
        return {
            onOkay: close,
            onCancel: close,
        };
    }
};

export default (name, options, DialogViewer) => {
    const onClose = () => {
        delete DialogViewer.current_active_dialogs[name];
        DialogViewer.$forceUpdate(true);
    };
    const customDialogData = name in factories ? factories[name](options, DialogViewer, onClose) : {};
    return Object.assign({
        name,
        options,
        close: onClose,
    }, typeof customDialogData === 'object' ? customDialogData : {});
};