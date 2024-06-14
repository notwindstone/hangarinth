import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetUno,
    transformerVariantGroup,
} from 'unocss';

export default defineConfig({
    rules: [
        ['text-soft-blue', { color: "#7489ed" }],
        ['bg-soft-blue', { background: "#7489ed" }],
    ],
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