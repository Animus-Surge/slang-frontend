import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/home/surge/projects/slang/slang_frontend/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}