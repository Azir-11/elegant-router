/* eslint-disable */
/* prettier-ignore */
// Generated by elegant-router
// Read more: https://github.com/soybeanjs/elegant-router
import type { RouteComponent } from "vue-router";
import type { LastLevelRouteKey, RouteLayout } from "@elegant-router/types";

import DefaultLayout from "@/layouts/default-layout/index.vue";

import _403 from "@/views/403/index.vue";
import _404 from "@/views/404/index.vue";
import demoA_child1 from "@/views/demo-a/child1/index.vue";
import demoA_child2_child3 from "@/views/demo-a/child2/child3/index.vue";
import demoA_child3 from "@/views/demo-a/child3/index.vue";
import demo3 from "@/views/demo3/[id].vue";

export const layouts: Record<RouteLayout, RouteComponent | (() => Promise<RouteComponent>)> = {
  default: DefaultLayout,
};

export const views: Record<LastLevelRouteKey, RouteComponent | (() => Promise<RouteComponent>)> = {
  403: _403,
  404: _404,
  "demo-a_child1": demoA_child1,
  "demo-a_child2_child3": demoA_child2_child3,
  "demo-a_child3": demoA_child3,
  demo3,
};