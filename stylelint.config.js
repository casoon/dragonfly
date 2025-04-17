module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-use-logical'],
  rules: {
    // 🔠 Namenskonventionen (z. B. --color-primary-base, --space-sm)
    'custom-property-pattern': null,

    // ⚙️ LightningCSS-spezifisch
    'media-query-no-invalid': null,

    // ✅ Eigene Properties und Funktionen erlauben
    'property-no-unknown': [true, {
      ignoreProperties: ['scroll-timeline-view-offset'],
    }],
    'function-no-unknown': [true, {
      ignoreFunctions: ['-var'],
    }],

    // 🚫 Spacing nur via var() erlauben
    'declaration-property-value-disallowed-list': {
      '/^(margin|padding|gap)$/': ['/var\\(--spacing-'],
    },

    // 📐 Logische Properties bevorzugen (deaktiviert)
    'csstools/use-logical': null,

    // ❌ Deaktivierte Regeln (Design-System-Ausnahmen)
    'no-empty-source': null,
    'no-descending-specificity': null,
    'no-duplicate-selectors': null,
    'selector-class-pattern': null,
    'keyframes-name-pattern': null,
    'declaration-block-no-duplicate-custom-properties': null,
    'declaration-block-single-line-max-declarations': null,
    'custom-property-no-missing-var-function': null,
  }
};
