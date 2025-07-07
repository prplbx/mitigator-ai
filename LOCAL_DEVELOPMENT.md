# Local Development Guide for mitigator.ai

This guide will help you set up and run the mitigator.ai website locally for development.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- npm (comes with Node.js)
- Git

## Initial Setup

1. **Clone the repository**:
   ```
   git clone https://github.com/prplbx/mitigator-ai.git
   cd mitigator-ai
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

## Development Workflow

The project includes several npm scripts to streamline development:

- `npm start` or `npm run dev`: Starts the development server with live reloading
- `npm run build`: Minifies CSS and JS files
- `npm run minify:css`: Minifies only CSS
- `npm run minify:js`: Minifies only JavaScript
- `npm run serve`: Starts Browser-Sync server without file watching

## File Structure

- **HTML Pages**: Main content pages (index.html, ai-tools.html, etc.)
- **CSS**: styles.css (source) and styles.min.css (minified version)
- **JavaScript**: script.js (source) and script.min.js (minified version)
- **Resources**: PDF documents and markdown files in the resources/ directory
- **Templates**: Content templates in the templates/ directory

## Working with CSS and JavaScript

When modifying CSS or JavaScript:

1. Always edit the source files (styles.css and script.js)
2. The build process will automatically generate minified versions when using `npm start`
3. Before committing, run `npm run build` to ensure minified files are up to date

## Code Standards

Please follow the coding standards outlined in [DEVELOPMENT.md](DEVELOPMENT.md):

- 2-space indentation
- Semantic HTML elements
- Clear CSS section comments
- Well-structured JavaScript using the module pattern
- Proper documentation for all new features

## Performance Considerations

- Optimize all images before adding them to the site
- Keep minified files up to date
- Follow the lazy loading patterns established in the codebase
- Test performance regularly with Lighthouse

## Testing

- Test across major browsers (Chrome, Firefox, Safari, Edge)
- Ensure responsive behavior works as expected
- Verify accessibility (WCAG 2.1 AA compliance)

## Committing Changes

1. Make focused, single-purpose commits
2. Write clear commit messages explaining what changes were made and why
3. Ensure all files are properly formatted before committing
4. Run `npm run build` before committing to update minified files

## Getting Help

Refer to the following documentation files for more information:
- [README.md](README.md) - Project overview
- [DEVELOPMENT.md](DEVELOPMENT.md) - Comprehensive development guidelines
- [CONTENT.md](CONTENT.md) - Content management process

## AI Integration

This project follows specific guidelines for working with AI tools. See the "AI Integration Strategy" section in [DEVELOPMENT.md](DEVELOPMENT.md) for more details on effectively using AI assistants in the development process.