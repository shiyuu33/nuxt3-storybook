import { setup } from "@storybook/vue3"
import type { App } from "vue"
import * as VueRouter from "vue-router" 

import { initialize, mswLoader } from 'msw-storybook-addon';

initialize({
    onUnhandledRequest: 'bypass'
})

setup((app: App) => {
    app.use(VueRouter.createRouter({history: VueRouter.createWebHistory(), routes: []}))
})

const preview = {
    // Provide the MSW addon loader globally
    loaders: [mswLoader],
}

export default preview