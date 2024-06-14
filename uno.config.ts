import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetUno,
    transformerVariantGroup,
} from 'unocss';

export default defineConfig({
    presets: [
        presetUno({
            dark: 'media',
        }),
        presetAttributify(),
        presetIcons({
            extraProperties: {
                'display': 'inline-block',
                'vertical-align': 'middle',
            },
        }),
    ],
    transformers: [
        transformerVariantGroup(),
    ]
});