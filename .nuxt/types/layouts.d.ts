import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "admin-layout" | "custome" | "default"
declare module "D:/recruitment-portal-updated/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}