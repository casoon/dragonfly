# Token Cleanup Script

This script cleans up duplicates between the token files in the `/tokens` directory.

## Purpose

The tokens directory contains multiple files that partially contain the same token definitions:
- `design-tokens.css`: Main file with design tokens
- `default-tokens.css`: Auto-generated tokens with partially overlapping definitions
- `default-tokens.js`: JavaScript version of the tokens
- `default-tokens.scss`: SCSS version of the tokens

The script consolidates the CSS tokens from `design-tokens.css` and `default-tokens.css` into a single file `consolidated-tokens.css`.

## How It Works

1. Extracts all CSS variables from both files
2. Identifies duplicates and different values for the same variables
3. Creates a consolidated version of all tokens
4. Categorizes the tokens by type (color, spacing, etc.)
5. Saves the result in `consolidated-tokens.css`

## Included Scripts

### 1. Token Cleanup (`token-cleanup.js`)

This script analyzes the existing token files and creates a consolidated version.

```bash
# In the scripts/token-cleanup directory
node token-cleanup.js
```

Output:
- Creates `tokens/consolidated-tokens.css`
- Shows statistics about duplicates and unique tokens
- Identifies and reports tokens with differing values

### 2. Migration to Consolidated Tokens (`migrate-to-consolidated.js`)

This script introduces the consolidated tokens into the project:

```bash
# In the scripts/token-cleanup directory
node migrate-to-consolidated.js
```

The script:
1. Creates backups of existing token files in `tokens/backup/`
2. Updates `core/tokens.css` to reference the new consolidated file
3. Replaces `design-tokens.css` with the consolidated version
4. Removes the redundant `default-tokens.css`

## Usage

For a complete migration process:

```bash
# Step 1: Consolidate tokens
node token-cleanup.js

# Step 2: Manually check the consolidated tokens
# (open tokens/consolidated-tokens.css and review)

# Step 3: Perform migration
node migrate-to-consolidated.js
```

## Next Steps

After migration:

1. Check `core/tokens.css` for correct imports
2. If necessary, update JS and SCSS versions of tokens with the token generator
3. Test the application to ensure all styles render correctly
4. Consider adapting the token generator to avoid duplicates in the future 