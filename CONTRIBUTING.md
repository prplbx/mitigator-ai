# Contributing to mitigator.ai

Thank you for your interest in contributing to mitigator.ai! As a nonprofit organization focused on AI governance and education, we welcome contributions that help further our mission of democratizing AI for organizations serving the public good.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Development Process](#development-process)
4. [Submitting Changes](#submitting-changes)
5. [Style Guidelines](#style-guidelines)
6. [AI Integration Guidelines](#ai-integration-guidelines)

## Code of Conduct

We are committed to providing a welcoming and inclusive experience for everyone. By participating in this project, you agree to abide by our Code of Conduct, which includes:

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

## Getting Started

To get started with development:

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR-USERNAME/mitigator-ai.git`
3. Navigate to the project directory: `cd mitigator-ai`
4. Run the setup script: `./setup.sh`
5. Start the development server: `npm start`

See [LOCAL_DEVELOPMENT.md](LOCAL_DEVELOPMENT.md) for more detailed instructions.

## Development Process

Our development process is outlined in detail in [DEVELOPMENT.md](DEVELOPMENT.md), but here's a quick overview:

1. **Choose a task**: Pick an issue from our issue tracker or propose a new feature/improvement
2. **Create a branch**: Create a new branch for your work with a descriptive name
3. **Develop**: Make your changes following our code standards
4. **Test**: Ensure your changes work as expected and pass all linting checks
5. **Submit**: Create a pull request with a clear description of your changes

### Branch Naming Convention

- Feature branches: `feature/short-description`
- Bug fix branches: `fix/issue-description`
- Documentation branches: `docs/what-was-changed`

## Submitting Changes

When submitting a pull request:

1. Ensure your code follows our style guidelines
2. Include a clear and detailed description of the changes
3. Reference any related issues
4. Make sure all tests and linting checks pass
5. Keep pull requests focused on a single concern

## Style Guidelines

We maintain specific style guidelines to ensure code consistency and quality:

- **HTML**: Use semantic HTML elements and maintain proper indentation (2 spaces)
- **CSS**: Follow the rules in our `.stylelintrc.json` configuration
- **JavaScript**: Adhere to our ESLint configuration in `.eslintrc.json`
- **Documentation**: Keep documentation clear, concise, and up-to-date

Run `npm run lint` before submitting changes to ensure your code meets our style requirements.

## AI Integration Guidelines

This project effectively leverages AI coding assistants following these principles:

1. **Human-AI Collaboration**: Treat AI as a collaborative partner, not a replacement for human expertise
2. **Verification and Testing**: Always verify AI-generated code through testing and code review
3. **Documentation**: Document how AI was used to generate or modify code when appropriate
4. **Ethical Development**: Ensure all AI-assisted development aligns with our mission of responsible AI governance

See the "AI Integration Strategy" section in [DEVELOPMENT.md](DEVELOPMENT.md) for more details.

## Content Guidelines

When contributing educational content:

1. Ensure accuracy and cite sources when appropriate
2. Follow the templates in the `templates/` directory
3. Document all content changes as outlined in [CONTENT.md](CONTENT.md)
4. Ensure content aligns with our nonprofit mission

## Questions?

If you have any questions or need help, please open an issue labeled "question" in the issue tracker.

Thank you for contributing to mitigator.ai!
