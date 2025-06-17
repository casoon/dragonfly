/**
 * Stylelint Configuration für Design Tokens
 * 
 * Spezielle Regeln für /tokens Verzeichnis:
 * - Strenge Validierung von CSS Custom Properties
 * - Namenskonventionen für Design Tokens
 * - Wert-Konsistenz
 */
module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: [
    'stylelint-order',
  ],
  rules: {
    // 📏 Sortierung von CSS-Eigenschaften
    'order/properties-alphabetical-order': true,

    // 🚫 Keine doppelten Properties (besonders wichtig für Tokens)
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-duplicate-custom-properties': true,

    // 🔠 Strenge Namenskonventionen für Design Tokens
    'custom-property-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Design Token Namen sollten kebab-case verwenden (z.B. --color-primary-500)',
      },
    ],

    // 📏 Leerzeile vor Custom Properties
    'custom-property-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'after-comment', 'after-custom-property'],
        ignore: ['inside-single-line-block'],
      },
    ],

    // ✅ Konsistente Werte-Notation
    'color-function-notation': 'modern',
    'color-hex-length': 'short',
    'number-max-precision': 3,
    
    // 🔤 Erlaubte Keyword-Cases für Font-Namen
    'value-keyword-case': [
      'lower',
      {
        ignoreKeywords: ['BlinkMacSystemFont', 'Roboto', 'Arial', 'Georgia', 'Cambria', 'Times', 'SFMono-Regular', 'Consolas', 'Menlo'],
        ignoreProperties: ['/^--/'],
      },
    ],

    // 🎯 Token-spezifische Regeln für Spacing
    'declaration-property-value-allowed-list': {
      // Spacing sollte rem/em/px/0 verwenden
      '/^--space/': ['/^(0|\\d*\\.?\\d+(rem|em|px)|var\\().*$/'],
    },

    // 🔄 At-rule Validierung für @property
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['property'],
      },
    ],

    // 📝 Leerzeilen-Regeln für bessere Lesbarkeit
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],

    // 🎨 Farbkonsistenz
    'color-no-invalid-hex': true,
    'color-named': 'never',

    // 📊 Unit-Konsistenz
    'unit-allowed-list': ['rem', 'em', 'px', '%', 'deg', 'ms', 's', 'vh', 'vw', 'ch'],

    // ❌ Deaktivierte Regeln für Token-Flexibilität
    'no-empty-source': null,
    'declaration-empty-line-before': null,
    'selector-class-pattern': null,
    'keyframes-name-pattern': null,
    'layer-name-pattern': null,
    'no-invalid-position-at-import-rule': null,
    'block-no-empty': null,
    'length-zero-no-unit': true,

    // 🎭 Erlaubte Properties für Design Tokens
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['syntax', 'inherits', 'initial-value'],
      },
    ],

    // 📦 Werte-Validierung
    'declaration-property-value-no-unknown': null,
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['var', 'rgb', 'hsl', 'calc', 'min', 'max', 'clamp'],
      },
    ],

    // 📝 Kommentar-Stil für Token-Dokumentation
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['stylelint-commands'],
      },
    ],
  },
  overrides: [
    {
      // Spezielle Regeln für @property shadow syntax
      files: ['**/shadows.css'],
      rules: {
        // @property <shadow> syntax ist valide, auch wenn stylelint das nicht erkennt
        'declaration-property-value-no-unknown': null,
        'string-no-newline': null,
      },
    },
  ],
}; 