/* eslint-disable */
/* prettier-ignore */
// Generated by elegant-router
// Read more: https://github.com/soybeanjs/elegant-router


import type { RouteComponent } from "vue-router";
import type { LastLevelRoute } from "@elegant-router/types";

import _403 from "@/views/403/index.vue";
import demoA_child1 from "@/views/demo-a/child1/index.vue";
import demoA_child2_child3 from "@/views/demo-a/child2/child3/index.vue";
import demoA_child3 from "@/views/demo-a/child3/index.vue";
import demo3 from "@/views/demo3/[id].vue";

export const views: Record<LastLevelRoute, RouteComponent | (() => Promise<{ default: RouteComponent }>)> = {
  403: _403,
  "demo-a_child1": demoA_child1,
  "demo-a_child2_child3": demoA_child2_child3,
  "demo-a_child3": demoA_child3,
  demo3,
};