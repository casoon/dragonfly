#!/usr/bin/env python3
"""
Script to update layout/spacing.css to use spacing tokens from tokens/spacing.css
"""

import re

def update_spacing_css():
    # Read the current spacing.css file
    with open('layout/spacing.css', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Mapping of hardcoded values to token variables
    spacing_mappings = {
        '0': 'var(--space-0)',
        '0.25rem': 'var(--space-1)',
        '0.5rem': 'var(--space-2)', 
        '0.75rem': 'var(--space-3)',
        '1rem': 'var(--space-4)',
        '1.25rem': 'var(--space-5)',
        '1.5rem': 'var(--space-6)',
        '2rem': 'var(--space-8)',
        '2.5rem': 'var(--space-10)',
        '3rem': 'var(--space-12)',
        '4rem': 'var(--space-16)',
        '5rem': 'var(--space-20)',
        '6rem': 'var(--space-24)',
        '8rem': 'var(--space-32)',
    }
    
    # Update content by replacing hardcoded values with tokens
    for hardcoded, token in spacing_mappings.items():
        # Match patterns like: gap: 1rem; margin: 0.5rem; etc.
        pattern = rf'\b{re.escape(hardcoded)}\b'
        content = re.sub(pattern, token, content)
        
        # Also handle negative values
        if hardcoded != '0':
            negative_pattern = rf'-{re.escape(hardcoded)}'
            negative_token = f'-{token}'
            content = re.sub(negative_pattern, negative_token, content)
    
    # Write the updated content back
    with open('layout/spacing.css', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("✅ Updated layout/spacing.css to use spacing tokens")

if __name__ == "__main__":
    update_spacing_css() 