import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";
import { renderList } from "vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },

  // các route khác...

  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },

  {
    path: "/",
    name: "contactbook",
    component: ContactBook,
  },

  {
    path: "/contacts/add",
    name: "contact.add",
    component: () => import("@/views/ContactCreate.vue"),
  },

  {
    path: "/contacts/:id",
    name: "contact.edit",
    component: () => import("@/views/ContactEdit.vue"),
    props: true,
  },

  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
// router.beforeEach((to) => {
//   const isLogin = localStorage.getItem("isLogin");

//   if (to.name != "login" && !isLogin) {
//     return {
//       name: "login",
//     };
//   }
// });

export default router;
