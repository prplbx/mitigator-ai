# Sticky Table of Contents Template

This template provides comprehensive guidance for implementing a sticky, left-side Table of Contents with enhanced styling and functionality for blog posts.

## Sticky TOC Features Checklist

### ✅ Required TOC Features

- [ ] **Fixed Position** - TOC stays on left side while scrolling
- [ ] **Collapsible Design** - Toggle button to expand/collapse
- [ ] **Active Section Highlighting** - Current section highlighted as you scroll
- [ ] **Smooth Scroll Navigation** - Clicking links smoothly scrolls to sections
- [ ] **Responsive Design** - Adapts to mobile devices
- [ ] **Visual Icons** - Emoji or icon indicators for each section

### ✅ Optional TOC Features

- [ ] **Auto-collapse on Mobile** - Automatically collapses after selection
- [ ] **Progress Indicators** - Visual progress bars for active sections
- [ ] **Glass Morphism** - Modern backdrop blur effect
- [ ] **Custom Scrollbar** - Styled scrollbar for better aesthetics
- [ ] **Hover Effects** - Smooth animations on hover
- [ ] **Keyboard Navigation** - Arrow key navigation support

## HTML Implementation

### Basic Sticky TOC Structure

```html
<!-- Sticky Table of Contents -->
<div class="sticky-toc">
  <div class="toc-header">
    <h3>📋 Table of Contents</h3>
    <button class="toc-toggle" onclick="toggleTOC()">
      <i class="fas fa-chevron-left"></i>
    </button>
  </div>
  <nav class="toc-nav" id="tocNav">
    <ul>
      <li>
        <a href="#introduction" class="toc-link" data-section="introduction">
          <span class="toc-icon">🎯</span>
          <span class="toc-text">Introduction</span>
        </a>
      </li>
      <li>
        <a href="#section-1" class="toc-link" data-section="section-1">
          <span class="toc-icon">🛠️</span>
          <span class="toc-text">Section 1</span>
        </a>
      </li>
      <li>
        <a href="#section-2" class="toc-link" data-section="section-2">
          <span class="toc-icon">⚖️</span>
          <span class="toc-text">Section 2</span>
        </a>
      </li>
      <li>
        <a href="#conclusion" class="toc-link" data-section="conclusion">
          <span class="toc-icon">🎉</span>
          <span class="toc-text">Conclusion</span>
        </a>
      </li>
    </ul>
  </nav>
</div>
```

### Enhanced TOC with More Sections

```html
<!-- Enhanced Sticky Table of Contents -->
<div class="sticky-toc">
  <div class="toc-header">
    <h3>📋 Table of Contents</h3>
    <button class="toc-toggle" onclick="toggleTOC()">
      <i class="fas fa-chevron-left"></i>
    </button>
  </div>
  <nav class="toc-nav" id="tocNav">
    <ul>
      <li>
        <a href="#introduction" class="toc-link" data-section="introduction">
          <span class="toc-icon">🎯</span>
          <span class="toc-text">Introduction</span>
        </a>
      </li>
      <li>
        <a
          href="#tool-categories"
          class="toc-link"
          data-section="tool-categories"
        >
          <span class="toc-icon">🛠️</span>
          <span class="toc-text">Tool Categories</span>
        </a>
      </li>
      <li>
        <a
          href="#decision-framework"
          class="toc-link"
          data-section="decision-framework"
        >
          <span class="toc-icon">⚖️</span>
          <span class="toc-text">Decision Framework</span>
        </a>
      </li>
      <li>
        <a
          href="#best-practices"
          class="toc-link"
          data-section="best-practices"
        >
          <span class="toc-icon">✨</span>
          <span class="toc-text">Best Practices</span>
        </a>
      </li>
      <li>
        <a
          href="#tool-recommendations"
          class="toc-link"
          data-section="tool-recommendations"
        >
          <span class="toc-icon">💡</span>
          <span class="toc-text">Tool Recommendations</span>
        </a>
      </li>
      <li>
        <a
          href="#common-pitfalls"
          class="toc-link"
          data-section="common-pitfalls"
        >
          <span class="toc-icon">⚠️</span>
          <span class="toc-text">Common Pitfalls</span>
        </a>
      </li>
      <li>
        <a href="#case-studies" class="toc-link" data-section="case-studies">
          <span class="toc-icon">📊</span>
          <span class="toc-text">Case Studies</span>
        </a>
      </li>
      <li>
        <a
          href="#performance-benchmarks"
          class="toc-link"
          data-section="performance-benchmarks"
        >
          <span class="toc-icon">📈</span>
          <span class="toc-text">Performance Benchmarks</span>
        </a>
      </li>
      <li>
        <a href="#conclusion" class="toc-link" data-section="conclusion">
          <span class="toc-icon">🎉</span>
          <span class="toc-text">Conclusion</span>
        </a>
      </li>
    </ul>
  </nav>
</div>
```

## CSS Implementation

### Core Sticky TOC Styles

```css
/* Sticky Table of Contents */
.sticky-toc {
  position: fixed;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  width: 280px;
  max-height: 70vh;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 1rem;
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 100;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.sticky-toc.collapsed {
  width: 60px;
}

.sticky-toc.collapsed .toc-nav {
  opacity: 0;
  transform: translateX(-20px);
}

.toc-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: linear-gradient(
    135deg,
    var(--primary-color),
    var(--secondary-color)
  );
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.toc-header h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.toc-toggle {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.toc-toggle:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.sticky-toc.collapsed .toc-toggle i {
  transform: rotate(180deg);
}

.toc-nav {
  padding: 1rem 0;
  max-height: calc(70vh - 80px);
  overflow-y: auto;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.toc-nav::-webkit-scrollbar {
  width: 4px;
}

.toc-nav::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.05);
  border-radius: 2px;
}

.toc-nav::-webkit-scrollbar-thumb {
  background: var(--primary-color);
  border-radius: 2px;
}

.toc-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.toc-nav li {
  margin: 0;
}

.toc-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  color: var(--dark-color);
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  border-left: 3px solid transparent;
}

.toc-link:hover {
  background: rgba(115, 99, 243, 0.1);
  color: var(--primary-color);
  transform: translateX(5px);
  border-left-color: var(--primary-color);
}

.toc-link.active {
  background: linear-gradient(
    90deg,
    rgba(115, 99, 243, 0.1),
    rgba(115, 99, 243, 0.05)
  );
  color: var(--primary-color);
  border-left-color: var(--primary-color);
  font-weight: 600;
}

.toc-icon {
  font-size: 1.2rem;
  width: 24px;
  text-align: center;
  flex-shrink: 0;
}

.toc-text {
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.4;
}

.sticky-toc.collapsed .toc-text {
  opacity: 0;
  transform: translateX(-10px);
}

/* Progress indicator for TOC */
.toc-link::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: var(--primary-color);
  transform: scaleY(0);
  transition: transform 0.3s ease;
  transform-origin: bottom;
}

.toc-link.active::before {
  transform: scaleY(1);
}
```

### Responsive Design

```css
/* Responsive Design for Sticky TOC */
@media (max-width: 1200px) {
  .sticky-toc {
    left: 10px;
    width: 250px;
  }
}

@media (max-width: 768px) {
  .sticky-toc {
    position: fixed;
    top: auto;
    bottom: 20px;
    left: 20px;
    right: 20px;
    width: auto;
    max-height: 50vh;
    transform: none;
  }

  .sticky-toc.collapsed {
    width: auto;
    height: 60px;
  }

  .sticky-toc.collapsed .toc-nav {
    display: none;
  }

  .toc-header {
    padding: 1rem;
  }

  .toc-nav {
    max-height: calc(50vh - 80px);
  }

  .toc-link {
    padding: 0.5rem 1rem;
  }

  .toc-text {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .sticky-toc {
    bottom: 10px;
    left: 10px;
    right: 10px;
  }

  .toc-header h3 {
    font-size: 1rem;
  }

  .toc-link {
    padding: 0.6rem 1rem;
  }

  .toc-icon {
    font-size: 1rem;
    width: 20px;
  }
}
```

## JavaScript Implementation

### Core TOC Functionality

```javascript
// Sticky TOC functionality
function toggleTOC() {
  const toc = document.querySelector(".sticky-toc");
  toc.classList.toggle("collapsed");
}

// Active section highlighting
function updateActiveTOCLink() {
  const sections = document.querySelectorAll("h2[id], h3[id]");
  const tocLinks = document.querySelectorAll(".toc-link");

  let currentSection = "";

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom >= 100) {
      currentSection = section.id;
    }
  });

  tocLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("data-section") === currentSection) {
      link.classList.add("active");
    }
  });
}

// Smooth scroll for TOC links
document.querySelectorAll(".toc-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerHeight = 80;
      const targetPosition = targetElement.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Update active TOC link on scroll
window.addEventListener("scroll", updateActiveTOCLink);
window.addEventListener("load", updateActiveTOCLink);

// Auto-collapse TOC on mobile after selection
if (window.innerWidth <= 768) {
  document.querySelectorAll(".toc-link").forEach((link) => {
    link.addEventListener("click", function () {
      setTimeout(() => {
        document.querySelector(".sticky-toc").classList.add("collapsed");
      }, 500);
    });
  });
}
```

### Enhanced TOC Features

```javascript
// Keyboard navigation for TOC
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    const toc = document.querySelector(".sticky-toc");
    if (!toc.classList.contains("collapsed")) {
      toc.classList.add("collapsed");
    }
  }
});

// TOC visibility based on scroll position
function handleTOCVisibility() {
  const toc = document.querySelector(".sticky-toc");
  const scrollTop = window.pageYOffset;

  // Hide TOC when at very top of page
  if (scrollTop < 100) {
    toc.style.opacity = "0.7";
  } else {
    toc.style.opacity = "1";
  }
}

window.addEventListener("scroll", handleTOCVisibility);

// TOC auto-expand on hover (desktop only)
if (window.innerWidth > 768) {
  const toc = document.querySelector(".sticky-toc");

  toc.addEventListener("mouseenter", function () {
    if (this.classList.contains("collapsed")) {
      this.classList.remove("collapsed");
    }
  });
}
```

## Implementation Guidelines

### Content Structure Requirements

1. **Section IDs**: Ensure all sections have proper `id` attributes
2. **TOC Links**: Match `href` attributes with section IDs
3. **Data Attributes**: Use `data-section` attributes for active highlighting
4. **Icon Selection**: Choose appropriate emoji icons for each section

### Performance Considerations

1. **Scroll Throttling**: Use `requestAnimationFrame` for scroll events
2. **Intersection Observer**: Consider using for better performance
3. **Mobile Optimization**: Reduce animations on mobile devices
4. **Memory Management**: Clean up event listeners when needed

### Accessibility Guidelines

1. **Keyboard Navigation**: Ensure TOC is keyboard accessible
2. **Screen Readers**: Use proper ARIA labels and roles
3. **Focus Management**: Maintain focus states for navigation
4. **Color Contrast**: Ensure sufficient contrast for all text

### Browser Support

1. **Modern Browsers**: Full support in Chrome, Firefox, Safari, Edge
2. **Backdrop Filter**: Graceful degradation for older browsers
3. **CSS Grid**: Fallback for older browsers
4. **JavaScript**: Progressive enhancement approach

## Best Practices

### Design Principles

1. **Consistent Styling**: Match TOC design with overall site theme
2. **Clear Hierarchy**: Use visual cues to show content structure
3. **Intuitive Navigation**: Make it easy to understand and use
4. **Mobile-First**: Design for mobile devices first

### User Experience

1. **Smooth Animations**: Use appropriate timing and easing
2. **Visual Feedback**: Provide clear hover and active states
3. **Responsive Behavior**: Adapt to different screen sizes
4. **Performance**: Ensure smooth scrolling and interactions

### Content Strategy

1. **Logical Structure**: Organize TOC in logical reading order
2. **Descriptive Labels**: Use clear, descriptive section titles
3. **Appropriate Icons**: Choose icons that represent content
4. **Consistent Naming**: Use consistent naming conventions

This template ensures consistent, professional, and engaging sticky Table of Contents implementation across all blog posts while maintaining performance and accessibility standards.
