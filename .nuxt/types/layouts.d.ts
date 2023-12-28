import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "channel-view-layout" | "default" | "group-view-layout"
declare module "/home/surge/projects/slang/slang_frontend/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}