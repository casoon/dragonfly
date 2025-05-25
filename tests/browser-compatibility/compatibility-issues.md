# Browser-Kompatibilitätsprobleme in @casoon/ui-lib

Dieses Dokument enthält bekannte Browser-Kompatibilitätsprobleme und deren Lösungen für die UI-Bibliothek.

## Dokumentationsformat

Jedes Kompatibilitätsproblem wird nach folgendem Schema dokumentiert:

```
### Problem-ID: [YYYY-MM-DD-NN]

**Betroffene Feature:** [Feature-Name]
**Betroffene Browser:** [Browser-Liste mit Versionen]
**Entdeckt in Version:** [UI-Lib Version]
**Status:** [Offen/Gelöst]

**Beschreibung:**
Detaillierte Beschreibung des Problems

**Auswirkungen:**
Wie sich das Problem auf die Nutzung der UI-Bibliothek auswirkt

**Workaround/Lösung:**
Implementierte Fallback-Lösung oder Workaround für Benutzer

**Screenshots/Beispiele:**
[Link zu Screenshots oder Beispielcode]

**Hinweise für Entwickler:**
Zusätzliche Informationen für Entwickler, die die Bibliothek nutzen
```

## Bekannte Probleme

### 2023-09-15-01

**Betroffene Feature:** Neue Viewport-Units (sv, lv, dv)
**Betroffene Browser:** Safari < 15.4, Chrome < 108, Firefox < 101
**Entdeckt in Version:** 0.60
**Status:** Gelöst

**Beschreibung:**
Die in Version 0.60 implementierten neuen Viewport-Units (svw/svh, lvw/lvh, dvw/dvh) werden in älteren Browsern nicht unterstützt.

**Auswirkungen:**
Layouts, die diese Units verwenden, könnten in älteren Browsern nicht wie erwartet dargestellt werden.

**Workaround/Lösung:**
Die Bibliothek implementiert automatische Fallbacks zu den klassischen vw/vh-Units mittels @supports-Abfragen:

```css
@supports not (width: 50svw) {
  .w-50sv { width: 50vw; }
}
```

**Hinweise für Entwickler:**
Beim Einsatz der neuen Viewport-Units sollte berücksichtigt werden, dass Benutzer mit älteren Browsern ein leicht abweichendes Layout sehen könnten. Die Fallback-Lösung sorgt für grundlegende Funktionalität, kann aber nicht das exakte Verhalten der neuen Units nachbilden, insbesondere auf mobilen Geräten mit dynamischen UI-Elementen.

---

_Diese Datei wird kontinuierlich aktualisiert, wenn neue Kompatibilitätsprobleme entdeckt werden._ 