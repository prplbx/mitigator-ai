# Mitigator.ai Golden Rules

This document establishes the foundational rules and best practices for development and maintenance of the mitigator.ai website. All contributors should adhere to these guidelines to maintain consistency, quality, and alignment with our nonprofit mission.

## 🔄 Project Awareness & Context
- **Always read `PLANNING.md`** at the start of a new conversation to understand the project's architecture, goals, style, and nonprofit mission.
- **Check `TASK.md`** before starting a new task. If the task isn't listed, add it with a brief description and today's date.
- **Review `PROJECT_SUMMARY.md`** to understand the overall project structure and content organization.
- **Use consistent naming conventions, file structure, and architecture patterns** as described in `PLANNING.md`.
- **Ensure all content aligns with our nonprofit mission** focused on AI governance and education.

## 🧱 Code Structure & Modularity
- **Never create a file longer than 500 lines of code.** If a file approaches this limit, refactor by splitting it into components or helper files.
- **Organize code into clearly separated modules**, grouped by feature or responsibility.
- **Use clear, consistent imports and dependencies** for JavaScript files.
- **Maintain separation of concerns** between HTML structure, CSS styling, and JavaScript functionality.
- **Use semantic HTML elements** that accurately represent content meaning and improve accessibility.

## 🧪 Testing & Reliability
- **Test all website features across multiple browsers** (Chrome, Firefox, Safari, Edge).
- **Validate HTML and CSS** using W3C validators.
- **Test responsive behavior** on mobile, tablet, and desktop screen sizes.
- **After updating any logic**, verify functionality across all affected pages.
- **Conduct accessibility testing** to ensure WCAG 2.1 AA compliance:
  - Include at least:
    - Keyboard navigation testing
    - Screen reader compatibility
    - Color contrast verification
    - Focus management testing

## ✅ Task Completion
- **Mark completed tasks in `TASK.md`** immediately after finishing them.
- Add new sub-tasks or TODOs discovered during development to `TASK.md` under a "Discovered During Work" section.
- **Document any challenges or solutions** that might benefit future development work.
- **Verify alignment with nonprofit mission** before considering any task complete.

## 📎 Style & Conventions
- **Use HTML5, CSS3, and JavaScript** as the primary technologies.
- **Follow consistent code formatting**:
  - 2-space indentation
  - Semantic class naming (avoid presentational names)
  - Lowercase HTML element names and attributes
- **Comment CSS sections** clearly with descriptive headers.
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
- **Prioritize inclusive language** in all code comments and documentation.

## 📚 Documentation & Explainability
- **Update `README.md`** when new features are added or significant changes are made.
- **Comment non-obvious code** and ensure everything is understandable to a mid-level developer.
- **Document any educational content changes** in the content update process documentation.
- When implementing complex logic, **add an inline `// Reason:` comment** explaining the why, not just the what.
- **Ensure all nonprofit-specific features** (donation forms, educational resources) are well-documented.

## 🎨 Design & User Experience
- **Follow the established color palette** and design system.
- **Maintain consistent visual hierarchy** across all pages.
- **Ensure all interactive elements** have appropriate hover/focus states.
- **Design with accessibility in mind** from the beginning (not as an afterthought).
- **Optimize images** for web use before adding them to the site.
- **Consider nonprofit context** when designing features (avoid commercial aesthetics).

## 🔒 Security & Compliance
- **Sanitize all user inputs** to prevent XSS attacks.
- **Follow GDPR best practices** for any data collection.
- **Maintain proper attribution** for all third-party resources.
- **Implement secure practices** for donation processing if applicable.
- **Keep third-party dependencies updated** to avoid security vulnerabilities.
- **Document data handling practices** clearly for transparency.

## 🚀 Performance Optimization
- **Minify CSS and JavaScript** for production.
- **Always regenerate minified JavaScript files** after any changes to the original files to ensure all functionality is included and properly synchronized.
- **Optimize images** using appropriate formats and compression.
- **Implement lazy loading** for below-the-fold images.
- **Minimize HTTP requests** by combining files where appropriate.
- **Ensure fast loading times** for educational resources.
- **Test performance regularly** using Lighthouse or similar tools.

## 🧠 Content Creation Rules
- **Follow the content update process** documented in `content_update_process.md`.
- **Use the appropriate template** for each content type.
- **Ensure all content aligns** with our nonprofit mission and values.
- **Apply SEO best practices** as outlined in the style guide.
- **Include proper attribution** for all statistics, quotes, and research.
- **Never assume audience familiarity** with technical concepts without explanation.
- **Maintain a consistent, educational tone** across all content.

## 💡 Development Workflow
- **Use version control** for all changes.
- **Create descriptive commit messages** explaining what and why.
- **Test thoroughly before deployment** to production.
- **Document any configuration changes** that affect the deployment process.
- **Consider the nonprofit audience** when prioritizing feature development.
- **Validate that all changes support** our educational and governance mission.