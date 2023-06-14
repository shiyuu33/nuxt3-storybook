import { StorybookConfig } from "@storybook/vue3-vite";
import AutoImport from "unplugin-auto-import/vite";
import AutoImportComponent from "unplugin-vue-components/vite";
import { mergeConfig } from "vite"

const config: StorybookConfig = {
    stories: ["../pages/**/*.stories.ts"],
    staticDirs: ["../public"],
    framework: {
        name: "@storybook/vue3-vite",
        options: {}
    },
    viteFinal(config) {
        return mergeConfig(config, {
            plugins: [
                AutoImport({
                    include: [/\.vue$/, /\.vue\?vue/, /\.[tj]x?$/],
                    imports: [
                        "vue",
                        "vue-router",
                        {
                            ofetch: ["$fetch"],
                        }
                    ],
                    dts: "./.storybook/imports.d.ts",
                    vueTemplate: true
                }),
                AutoImportComponent({
                    dirs: ["components"],
                    directoryAsNamespace: false,
                    dts: "./.storybook/components.d.ts"
                })
            ]
        })
    }
}

export default config