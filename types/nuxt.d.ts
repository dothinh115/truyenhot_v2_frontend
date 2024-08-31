import { $Fetch } from "ofetch";

declare module "nuxt/app" {
  interface NuxtApp {
    $apiFetch: $Fetch;
  }
}
