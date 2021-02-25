import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
	{
		path: "/",
		name: "	Home",
		component: Home,
		props: true,
	},
	{
		path: "/search/:param",
		name: "search",
		props: true,
		component: Home,
	},
	{
		path: "/:pathMatch(.*)*",
		name: "NotFound",
		component: NotFound,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
