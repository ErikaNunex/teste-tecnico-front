import { Router } from "vue-router";

export function redirect(router: Router, routeName: string) {
  router.push({ name: routeName });
}
