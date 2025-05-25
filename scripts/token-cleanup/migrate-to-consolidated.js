/**
 * Migrationsskript für konsolidierte Tokens
 * 
 * Dieses Skript führt die konsolidierten Tokens ein und aktualisiert alle 
 * erforderlichen Dateien, um auf die neue tokens/consolidated-tokens.css zu verweisen.
 */

const fs = require('fs');
const path = require('path');

// Pfade zu den relevanten Dateien
const tokensDir = path.join(__dirname, '../../tokens');
const coreDir = path.join(__dirname, '../../core');
const consolidatedTokensPath = path.join(tokensDir, 'consolidated-tokens.css');
const backupDir = path.join(tokensDir, 'backup');

// Hauptfunktion
async function migrateToConsolidatedTokens() {
  console.log('Migration zu konsolidierten Tokens wird gestartet...');
  
  try {
    // 1. Backup-Verzeichnis erstellen, falls es nicht existiert
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir);
      console.log('Backup-Verzeichnis erstellt:', backupDir);
    }
    
    // 2. Überprüfen, ob die konsolidierte Tokens-Datei existiert
    if (!fs.existsSync(consolidatedTokensPath)) {
      console.error('Fehler: Die konsolidierte Tokens-Datei existiert nicht:', consolidatedTokensPath);
      console.error('Bitte führe zuerst das Skript token-cleanup.js aus.');
      return;
    }
    
    // 3. Erstelle Backups der vorhandenen Token-Dateien
    const tokenFiles = ['design-tokens.css', 'default-tokens.css'];
    for (const file of tokenFiles) {
      const originalPath = path.join(tokensDir, file);
      const backupPath = path.join(backupDir, file);
      
      if (fs.existsSync(originalPath)) {
        fs.copyFileSync(originalPath, backupPath);
        console.log(`Backup erstellt: ${file} -> backup/${file}`);
      }
    }
    
    // 4. Überprüfe, ob core/tokens.css existiert und ob es auf die Tokens-Dateien verweist
    const coreTokensPath = path.join(coreDir, 'tokens.css');
    if (fs.existsSync(coreTokensPath)) {
      let coreTokensContent = fs.readFileSync(coreTokensPath, 'utf8');
      const originalContent = coreTokensContent;
      
      // Suche nach Import-Anweisungen für die Token-Dateien
      const designTokensImport = /@import\s+(?:url\()?\s*['"]\.\.\/tokens\/design-tokens\.css['"]\s*(?:\))?\s*;/;
      const defaultTokensImport = /@import\s+(?:url\()?\s*['"]\.\.\/tokens\/default-tokens\.css['"]\s*(?:\))?\s*;/;
      
      // Ersetze Imports mit konsolidierter Datei
      let modified = false;
      
      if (designTokensImport.test(coreTokensContent)) {
        coreTokensContent = coreTokensContent.replace(
          designTokensImport, 
          `@import url('../tokens/consolidated-tokens.css');`
        );
        modified = true;
      }
      
      if (defaultTokensImport.test(coreTokensContent)) {
        coreTokensContent = coreTokensContent.replace(
          defaultTokensImport, 
          ''
        );
        modified = true;
      }
      
      // Wenn keine der beiden Imports gefunden wurde, füge den Import am Anfang hinzu
      if (!modified) {
        coreTokensContent = `@import url('../tokens/consolidated-tokens.css');\n\n${coreTokensContent}`;
        modified = true;
      }
      
      // Speichere die aktualisierte Datei
      if (modified) {
        // Erstelle ein Backup von core/tokens.css
        const coreTokensBackupPath = path.join(coreDir, 'tokens.css.backup');
        fs.writeFileSync(coreTokensBackupPath, originalContent, 'utf8');
        console.log(`Backup erstellt: core/tokens.css -> core/tokens.css.backup`);
        
        // Speichere die aktualisierte Datei
        fs.writeFileSync(coreTokensPath, coreTokensContent, 'utf8');
        console.log('core/tokens.css wurde aktualisiert, um auf consolidated-tokens.css zu verweisen');
      } else {
        console.log('core/tokens.css enthält keine Verweise auf die Token-Dateien. Keine Änderungen vorgenommen.');
      }
    } else {
      console.log('Warnung: core/tokens.css wurde nicht gefunden.');
    }
    
    // 5. Umbenenne die konsolidierte Datei zu design-tokens.css und entferne default-tokens.css
    const targetPath = path.join(tokensDir, 'design-tokens.css');
    fs.copyFileSync(consolidatedTokensPath, targetPath);
    console.log('consolidated-tokens.css wurde nach design-tokens.css kopiert');
    
    const defaultTokensPath = path.join(tokensDir, 'default-tokens.css');
    if (fs.existsSync(defaultTokensPath)) {
      // Behalte die Backup-Version, aber entferne die aktive Datei
      fs.unlinkSync(defaultTokensPath);
      console.log('default-tokens.css wurde entfernt (Backup unter backup/default-tokens.css)');
    }
    
    console.log('\nMigration abgeschlossen!');
    console.log('\nWeitere manuelle Schritte:');
    console.log('1. Überprüfe core/tokens.css auf korrekte Imports');
    console.log('2. Falls notwendig, aktualisiere JS- und SCSS-Versionen der Tokens');
    console.log('3. Teste, ob die Anwendung wie erwartet funktioniert');
    
  } catch (error) {
    console.error('Fehler bei der Migration:', error);
  }
}

// Skript ausführen
migrateToConsolidatedTokens(); 