/**
 * load-project-info.js
 * 
 * A utility script to load project metadata and provide quick access to project information.
 * This can be used at the beginning of a new task to avoid re-analyzing the entire project.
 * 
 * Usage:
 * 1. In Node.js: const projectInfo = require('./load-project-info.js');
 * 2. In browser: <script src="load-project-info.js"></script>
 */

(function() {
  // Function to load project metadata
  function loadProjectMetadata() {
    try {
      // In Node.js environment
      if (typeof module !== 'undefined' && module.exports) {
        const fs = require('fs');
        const path = require('path');
        const metadataPath = path.join(__dirname, 'project-metadata.json');
        
        return JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
      } 
      // In browser environment
      else if (typeof window !== 'undefined') {
        return fetch('project-metadata.json')
          .then(response => response.json())
          .catch(error => {
            console.error('Error loading project metadata:', error);
            return null;
          });
      }
    } catch (error) {
      console.error('Error loading project metadata:', error);
      return null;
    }
  }

  // Function to get a summary of the project
  function getProjectSummary() {
    const metadata = loadProjectMetadata();
    
    if (!metadata) {
      return 'Unable to load project metadata.';
    }

    const project = metadata.project;
    
    return `
Project: ${project.name}
Description: ${project.description}
GitHub: ${project.github_url}
Live Demo: ${project.live_demo}

Documentation:
- README.md - Project overview and entry point
- DEVELOPMENT.md - Development guidelines, workflow, and tasks
- CONTENT.md - Content management process and implementation
- project-metadata.json - Structured data about the project

Technologies: ${metadata.technologies.join(', ')}

Key Features:
${metadata.features.map(feature => `- ${feature}`).join('\n')}

Pages:
- index.html (Main landing page)
- ai-tools.html (Top 10 Generative AI Tools)
- ai-governance.html (AI Governance Framework)
- resources.html (AI Resources Library)
- And more, see README.md for details
    `.trim();
  }

  // Function to get file structure
  function getFileStructure() {
    const metadata = loadProjectMetadata();
    
    if (!metadata) {
      return 'Unable to load project metadata.';
    }

    const files = metadata.files;
    let result = 'Project File Structure:\n\n';

    for (const category in files) {
      result += `${category.toUpperCase()}:\n`;
      files[category].forEach(file => {
        result += `- ${file}\n`;
      });
      result += '\n';
    }

    return result.trim();
  }

  // Function to get page details
  function getPageDetails(pageName) {
    const metadata = loadProjectMetadata();
    
    if (!metadata || !metadata.pages[pageName]) {
      return `No details found for page: ${pageName}`;
    }

    const page = metadata.pages[pageName];
    let result = `Details for ${pageName}.html:\n\n`;

    if (page.sections) {
      result += 'Sections:\n';
      page.sections.forEach(section => {
        result += `- ${section}\n`;
      });
      result += '\n';
    }

    if (page.tools) {
      result += 'Tools Featured:\n';
      page.tools.forEach(tool => {
        result += `- ${tool}\n`;
      });
      result += '\n';
    }

    if (page.frameworks) {
      result += 'Frameworks:\n';
      page.frameworks.forEach(framework => {
        result += `- ${framework}\n`;
      });
      result += '\n';
    }

    return result.trim();
  }

  // Export functions in Node.js environment
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      getMetadata: loadProjectMetadata,
      getSummary: getProjectSummary,
      getFileStructure: getFileStructure,
      getPageDetails: getPageDetails
    };
  } 
  // Add to window object in browser environment
  else if (typeof window !== 'undefined') {
    window.projectInfo = {
      getMetadata: loadProjectMetadata,
      getSummary: getProjectSummary,
      getFileStructure: getFileStructure,
      getPageDetails: getPageDetails
    };
  }
})();