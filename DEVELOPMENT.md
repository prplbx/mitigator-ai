# Mitigator.ai Development Guide

This document serves as the comprehensive development guide for the mitigator.ai project, consolidating development principles, workflow, and tasks into a single reference.

## Table of Contents

1. [Core Principles](#core-principles)
2. [Development Workflow](#development-workflow)
3. [AI Integration Strategy](#ai-integration-strategy)
4. [Implementation Tasks](#implementation-tasks)
5. [Code Standards](#code-standards)
6. [Testing Guidelines](#testing-guidelines)
7. [Performance Optimization](#performance-optimization)

## Core Principles

This section establishes the foundational rules and best practices for development and maintenance of the mitigator.ai website. All contributors should adhere to these guidelines to maintain consistency, quality, and alignment with our nonprofit mission.

### Project Awareness & Context

- **Review project documentation** at the start of a new task to understand the project's architecture, goals, and nonprofit mission
- **Use consistent naming conventions, file structure, and architecture patterns**
- **Ensure all content aligns with our nonprofit mission** focused on AI governance and education

### Code Structure & Modularity

- **Never create a file longer than 500 lines of code.** If a file approaches this limit, refactor by splitting it into components or helper files
- **Organize code into clearly separated modules**, grouped by feature or responsibility
- **Use clear, consistent imports and dependencies** for JavaScript files
- **Maintain separation of concerns** between HTML structure, CSS styling, and JavaScript functionality
- **Use semantic HTML elements** that accurately represent content meaning and improve accessibility

### Documentation & Explainability

- **Update documentation** when new features are added or significant changes are made
- **Comment non-obvious code** and ensure everything is understandable to a mid-level developer
- **Document any educational content changes** in the content update process
- When implementing complex logic, **add an inline `// Reason:` comment** explaining the why, not just the what
- **Ensure all nonprofit-specific features** (donation forms, educational resources) are well-documented

## Development Workflow

The development workflow for mitigator.ai follows a structured approach that leverages AI coding assistants effectively while ensuring high-quality results.

### Planning & Requirements Phase

#### Objective
Define clear requirements and specifications that can be effectively communicated to AI assistants.

#### Activities
- Document detailed component specifications
- Create user stories with acceptance criteria
- Develop visual mockups and wireframes
- Establish coding standards and patterns

#### AI Assistant Integration
- Use AI to help draft initial requirements documentation
- Generate user stories based on project goals
- Create initial planning documents that can be refined by the team

### Development Phase

#### Objective
Efficiently implement website features by leveraging AI coding assistants while maintaining code quality.

#### Activities
- Set up project structure and version control
- Implement core components with AI assistance
- Develop integration points for third-party services
- Create responsive layouts and interactive elements
- Ensure accessibility for all users, aligning with our inclusive mission

### Testing & Quality Assurance

#### Objective
Ensure all code, including AI-generated portions, meets quality standards and functions correctly.

#### Activities
- Develop automated tests for critical functionality
- Perform cross-browser and responsive testing
- Conduct accessibility testing
- Optimize for performance

## AI Integration Strategy

This project utilizes AI coding assistants such as GitHub Copilot or Claude to enhance productivity and code quality. The following strategy outlines how AI assistants will be effectively incorporated into the development workflow.

### Core Principles

1. **Human-AI Collaboration**: Treat AI as a collaborative partner, not a replacement for human expertise
2. **Prompt Engineering**: Develop effective prompts that yield high-quality code outputs
3. **Verification and Testing**: Always verify AI-generated code through testing and code review
4. **Continuous Learning**: Document effective prompts and patterns for future reference
5. **Ethical Development**: Ensure development practices align with our mission of responsible AI governance

### The AI Assistant Workflow

```
┌────────────────┐     ┌────────────────┐     ┌────────────────┐
│                │     │                │     │                │
│ 1. Define Task │────▶│ 2. Craft Prompt│────▶│ 3. Generate    │
│    Clearly     │     │    Effectively │     │    Code        │
│                │     │                │     │                │
└────────────────┘     └────────────────┘     └────────────────┘
                                                      │
                                                      ▼
┌────────────────┐     ┌────────────────┐     ┌────────────────┐
│                │     │                │     │                │
│ 6. Iterate &   │◀────│ 5. Refine      │◀────│ 4. Review &    │
│    Improve     │     │    Prompt      │     │    Test        │
│                │     │                │     │                │
└────────────────┘     └────────────────┘     └────────────────┘
```

### Effective Prompt Templates

For component development:
```
Create a [component type] for the mitigator.ai website with the following specifications:

- Purpose: [detailed description of what the component should do]
- Props/Parameters: [list of inputs the component should accept]
- Behavior: [how the component should behave, including states]
- Styling: [design requirements, responsive behavior]
- Accessibility Requirements: [a11y considerations]

Additional context:
- This component will be used in [specific section]
- It should match our design system using [specific styles]
- It needs to be responsive with these breakpoints: [breakpoints]
```

## Implementation Tasks

This section outlines specific tasks for the mitigator.ai project, organized by priority. Each task includes guidance on effective AI prompts and verification steps.

### Current Priority Tasks

#### M7: Fix Google Ads Integration
- **Description**: Resolve issues with Google AdSense integration and optimize ad placement.
- **AI Assistant Prompt**:
  ```
  Create a plan to fix Google AdSense integration for the mitigator.ai nonprofit website with:
  - Audit of current ad implementation and identification of issues
  - Best practices for appropriate ad placement on nonprofit websites
  - Optimization for balancing revenue generation and user experience
  - Implementation of proper ad containers that don't interfere with content
  - Testing methodology to ensure ads don't slow down page performance
  - Monitoring plan for ongoing ad performance
  ```
- **Verification Steps**:
  - Google AdSense properly loads on all pages
  - Ad placements are appropriate for a nonprofit site
  - Ads don't negatively impact page loading speed
  - Ad content is relevant to site visitors
  - Ad displays are properly responsive on all devices

#### M1: Content Update Process
- **Description**: Establish and document an efficient process for regular content updates.
- **Verification Steps**:
  - Content update process is documented
  - Templates are created for all content types
  - Process has been tested with a sample update
  - Guidelines ensure consistency across updates

### Task Tracking Workflow

```
┌────────────────┐     ┌────────────────┐     ┌────────────────┐
│                │     │                │     │                │
│ 1. Select Task │────▶│ 2. Use AI      │────▶│ 3. Implement   │
│    from List   │     │    Prompt      │     │    Solution    │
│                │     │                │     │                │
└────────────────┘     └────────────────┘     └────────────────┘
                                                      │
                                                      ▼
┌────────────────┐     ┌────────────────┐     ┌────────────────┐
│                │     │                │     │                │
│ 6. Mark Task   │◀────│ 5. Document    │◀────│ 4. Verify      │
│    Complete    │     │    Learnings   │     │    Results     │
│                │     │                │     │                │
└────────────────┘     └────────────────┘     └────────────────┘
```

## Code Standards

### Style & Conventions

- **Use HTML5, CSS3, and JavaScript** as the primary technologies
- **Follow consistent code formatting**:
  - 2-space indentation
  - Semantic class naming (avoid presentational names)
  - Lowercase HTML element names and attributes
- **Comment CSS sections** clearly with descriptive headers
- **Structure JavaScript** following modern best practices:
  ```javascript
  // Module pattern example
  const featureName = (function() {
    // Private variables and functions
    
    // Public API
    return {
      init: function() {
        // Initialize feature
      },
      // Other public methods
    };
  })();
  ```
- **Prioritize inclusive language** in all code comments and documentation

### Design & User Experience

- **Follow the established color palette** and design system
- **Maintain consistent visual hierarchy** across all pages
- **Ensure all interactive elements** have appropriate hover/focus states
- **Design with accessibility in mind** from the beginning (not as an afterthought)
- **Optimize images** for web use before adding them to the site
- **Consider nonprofit context** when designing features (avoid commercial aesthetics)

## Testing Guidelines

### Cross-Browser Testing

- Test website functionality across major browsers (Chrome, Firefox, Safari, Edge)
- Verify visual appearance is consistent
- Ensure responsive behavior works as expected
- Document any browser-specific issues

### Accessibility Testing

- Ensure WCAG 2.1 AA compliance
- Test with screen readers
- Verify keyboard navigation
- Check color contrast
- Test focus management
- Pay special attention to donation forms and educational resources

## Performance Optimization

- **Minify CSS and JavaScript** for production
- **Always regenerate minified files** after any changes
- **Optimize images** using appropriate formats and compression
- **Implement lazy loading** for below-the-fold images
- **Minimize HTTP requests** by combining files where appropriate
- **Ensure fast loading times** for educational resources
- **Test performance regularly** using Lighthouse or similar tools