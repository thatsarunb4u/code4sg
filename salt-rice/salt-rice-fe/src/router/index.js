import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
    "path": "/",
    "name": "Index",
    "component": () => import("../views/Index.vue")
}, {
    "path": "/post",
    "name": "CreatePost",
    "component": () => import("../views/CreatePost.vue")
}, {
    "path": "/post/:id",
    "name": "Post",
    "component": () => import("../views/Post.vue")
}];

const router = new VueRouter({
    "mode": "history",
    "base": process.env.BASE_URL,
    routes
});

export default router;
