const postcssImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');
const cssnano = require('cssnano');

const combineSelectors = () => {
    return {
        postcssPlugin: 'postcss-combine-selectors',
        Once(root) {
            const seen = new Map();

            root.walkRules((rule) => {
                if (!rule.selector || rule.parent.type !== 'root') return;

                const key = rule.selector;
                if (!seen.has(key)) {
                    seen.set(key, rule);
                } else {
                    const existing = seen.get(key);
                    rule.walkDecls((decl) => {
                        if (!existing.some(d => d.prop === decl.prop)) {
                            existing.append(decl.clone());
                        }
                    });
                    rule.remove();
                }
            });
        }
    };
};
combineSelectors.postcss = true;

module.exports = {
    plugins: [
        postcssImport(),
        postcssPresetEnv({
            stage: 0,
            features: {
                'custom-properties': false,
                'custom-media-queries': true
            }
        }),
        combineSelectors(), // 👈 Hier direkt verwendet
        cssnano({ preset: 'default' })
    ]
};
