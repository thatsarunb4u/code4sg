import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
    "path": "/",
    "name": "Index",
    "component": () => import(/* webpackChunkName: "connected" */ "@/views/Index.vue")
}, {
    "path": "/post",
    "name": "CreatePost",
    "component": () => import(/* webpackChunkName: "connected" */ "@/views/CreatePost.vue")
}, {
    "path": "/userauth",
    "name": "UserAuthentication",
    "component": () => import(/* webpackChunkName: "connected" */ "@/views/UserAuth.vue")
}, {
    "path": "/post/:id",
    "name": "Post",
    "component": () => import(/* webpackChunkName: "connected" */ "@/views/Post.vue")
}];

const router = new VueRouter({
    "mode": "history",
    "base": process.env.BASE_URL,
    routes
});

export default router;
