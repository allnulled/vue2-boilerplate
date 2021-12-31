export default (components) => {
    return [
        {
            path: "/horas",
            component: components.HorasPage,
        },
        {
            path: "/tareas",
            component: components.TareasPage,
        },
    ];
}