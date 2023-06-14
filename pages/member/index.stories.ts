import { StoryObj, Meta } from "@storybook/vue3";

import Page from "./index.vue";
import Member from "../../layouts/member.vue"

export default {
    title: "Pages/member",
    component: Page,
} as Meta<typeof Page>;

type Story = StoryObj<typeof Page>

export const StoryTemplateWithLayout: Story = {
    name: "layoutsを表示する場合",
    render: () => ({
        components: { Page, Member },
        template: `
        <Member>
            <Page />
        </Member>
        `
    })
}
