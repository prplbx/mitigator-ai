# GitHub Workflow for Content Updates

This document provides step-by-step instructions for using GitHub to manage content updates for the mitigator.ai website. Following this standardized workflow ensures proper version control, review, and traceability for all content changes.

## Workflow Overview

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│ 1. Create Issue │────▶│ 2. Create Branch│────▶│ 3. Make Updates │
│                 │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                                                        │
                                                        ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│ 6. Merge & Tag  │◀────│ 5. Review & Fix │◀────│ 4. Create PR    │
│                 │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

## Detailed Steps

### 1. Create an Issue

Start by creating a GitHub issue to track the content update:

1. Go to the [GitHub repository issues page](https://github.com/prplbx/mitigator-ai/issues)
2. Click "New Issue"
3. Use the title format: `Content Update: [Content Title]`
4. In the description, include:
   - Link to the content being updated
   - Reason for the update
   - Summary of planned changes
   - Target completion date
5. Add labels:
   - `content-update`
   - Content type (`educational`, `governance`, or `community`)
   - Priority level (`priority-high`, `priority-medium`, or `priority-low`)
6. Assign to the appropriate content owner

### 2. Create a Branch

Create a dedicated branch for your content updates:

```bash
# Pull the latest changes from main
git checkout main
git pull origin main

# Create a new branch with proper naming convention
git checkout -b content/[content-type]/[descriptive-name]
```

**Branch naming examples:**
- `content/educational/ai-governance-update-2025`
- `content/governance/risk-framework-v2`
- `content/community/new-volunteer-opportunities`

### 3. Make Content Updates

1. Locate the content file in the repository
2. Complete the [Content Update Tracker](./content_update_tracker.md) document and save it in a directory called `updates/[YYYY-MM]/[content-name]-update.md`
3. Make the planned changes to the content file(s)
4. For significant updates, consider adding a "Last updated: [date]" notation at the top of the content
5. Add and commit your changes with meaningful commit messages:

```bash
# Add the content tracker and updated content
git add updates/2025-06/ai-governance-update.md
git add path/to/updated/content.md

# Create a descriptive commit message
git commit -m "Update AI governance article with 2025 regulations
- Add section on EU AI Act implementation
- Update statistics with 2025 data
- Fix broken links to research papers"
```

### 4. Create a Pull Request

1. Push your branch to GitHub:
   ```bash
   git push -u origin content/educational/ai-governance-update-2025
   ```

2. Go to the repository on GitHub and create a Pull Request:
   - Set the base branch to `main`
   - Use the title format: `Content Update: [Content Title]`
   - In the description:
     - Reference the issue: `Resolves #123`
     - Include a summary of changes
     - List any special review considerations
     - Add screenshots if visual elements were changed

3. Add appropriate reviewers based on content type:
   - Educational content: Education Team reviewers
   - Governance frameworks: Governance Team reviewers
   - Community resources: Community Team reviewers
   - Always include a member of the Communications Team

4. Add the same labels that were applied to the issue

### 5. Review and Revision Process

1. Reviewers will provide feedback through PR comments
2. Make requested changes on the same branch:
   ```bash
   git add [changed-files]
   git commit -m "Address review feedback: [specific changes]"
   git push
   ```
3. Request re-review after addressing all feedback
4. Once approved, the PR is ready to merge

### 6. Merge and Tag

After the PR is approved:

1. Merge the PR using the "Squash and merge" option to keep the commit history clean
2. For significant content updates, create a version tag:
   ```bash
   git checkout main
   git pull origin main
   git tag content/[content-name]/v1.1
   git push origin content/[content-name]/v1.1
   ```

3. Close the associated issue with a comment linking to the updated content

## Version Control Best Practices

### Commit Message Guidelines

Use structured commit messages with:
- A summary line (50 chars max)
- A blank line
- Detailed bullet points of changes

Example:
```
Update AI governance framework for healthcare

- Add section on patient data privacy
- Include HIPAA compliance checklist
- Update reference links to 2025 regulations
- Fix formatting issues in assessment table
```

### Content Version Tracking

For governance frameworks and other versioned content:

1. Include a visible version number at the top of the document: `Version: 2.1`
2. Maintain a version history section at the end of the document:

```markdown
## Version History
| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2024-05-01 | Initial release |
| 2.0 | 2025-01-15 | Major revision with new regulations |
| 2.1 | 2025-06-05 | Updated implementation examples |
```

3. Tag each major version in the repository as described above

## Handling Urgent Content Updates

For time-sensitive corrections (factual errors, broken links, etc.):

1. Create an issue with the `priority-critical` label
2. Follow the same workflow but with expedited review
3. Tag the Communications Director and Technical Lead in the PR for immediate attention
4. Once approved, the PR can be merged by any team member with merge permissions

## Additional Resources

- [GitHub Documentation](https://docs.github.com/en)
- [Mitigator.ai Content Update Process](../CONTENT.md)
- [Content Update Tracker Template](./content_update_tracker.md)