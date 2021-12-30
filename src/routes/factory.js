export default (components) => {
    return [
        {
            path: "/home",
            component: components.HomePage,
        },
        {
            path: "/about",
            component: components.AboutPage,
        },
        {
            path: "/contact",
            component: components.ContactPage,
        },
        // @TODO: drop this page when you get the thing
        {
            path: "/demo",
            component: components.Demo,
        }
    ];
}