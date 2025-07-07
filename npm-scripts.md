# NPM Scripts Documentation

This document provides detailed information about all npm scripts available in the mitigator.ai project.

## Quick Reference

| Script         | Description                                           |
|----------------|-------------------------------------------------------|
| `npm start`    | Start development environment with live reloading     |
| `npm run dev`  | Alias for `npm start`                                 |
| `npm run build`| Minify CSS and JS files                               |
| `npm run lint` | Run all code quality checks                           |
| `npm test`     | Run tests (currently a placeholder)                   |

## Detailed Script Reference

### Development Scripts

#### `npm start` or `npm run dev`

Starts the complete development environment with:
- File watching for CSS and JS files
- Automatic minification on changes
- Live reloading development server

```bash
npm start
```

This is the primary command for active development.

#### `npm run serve`

Starts only the Browser-Sync server without file watching:

```bash
npm run serve
```

Use this when you only need a server without file watching functionality.

### Build Scripts

#### `npm run build`

Minifies both CSS and JavaScript files:

```bash
npm run build
```

This should be run before committing changes to ensure minified files are up to date.

#### `npm run minify:css`

Minifies only the CSS files:

```bash
npm run minify:css
```

#### `npm run minify:js`

Minifies only the JavaScript files:

```bash
npm run minify:js
```

### Linting Scripts

#### `npm run lint`

Runs all linting checks (ESLint for JavaScript and Stylelint for CSS):

```bash
npm run lint
```

#### `npm run lint:fix`

Automatically fixes linting issues where possible:

```bash
npm run lint:fix
```

#### `npm run lint:js`

Runs only JavaScript linting with ESLint:

```bash
npm run lint:js
```

#### `npm run lint:css`

Runs only CSS linting with Stylelint:

```bash
npm run lint:css
```

### Watching Scripts

#### `npm run watch:css`

Watches for changes to CSS files and automatically minifies them:

```bash
npm run watch:css
```

#### `npm run watch:js`

Watches for changes to JavaScript files and automatically minifies them:

```bash
npm run watch:js
```

## Testing

#### `npm test`

Currently a placeholder for future test implementation:

```bash
npm test
```

## Adding New Scripts

When adding new scripts to the project:

1. Add the script to package.json
2. Document the script in this file
3. Include a brief description and usage example

## Best Practices

- Always run `npm run build` before committing changes
- Use `npm run lint:fix` to automatically fix common issues
- For complex tasks, create composite scripts that run multiple commands
