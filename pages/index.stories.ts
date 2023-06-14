import { StoryObj, Meta } from "@storybook/vue3";
import { rest } from "msw"

import Page from "./index.vue";

export default {
    title: "Pages/top",
    component: Page,
} as Meta<typeof Page>;

type Story = StoryObj<typeof Page>

export const StoryTemplate: Story = {
    name: "api requestをモックしたい場合",
    render: () => ({
        components: { Page },
        template: `<Page />`
    }),
    parameters: {
        msw: {
            handlers: [rest.get("/api/hello", (_, res, ctx) => {
                return res(ctx.json("api hello mocked"))
            })]
        }
    }
}