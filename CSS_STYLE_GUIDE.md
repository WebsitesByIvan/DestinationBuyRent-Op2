# DestinationBuyRent.com CSS Style Guide

## 🎨 **Color Palette & Global Styles**

### **Primary Colors**
- **Primary Red**: `#dc2626` - Used for buttons, links, and primary accents
- **Primary Red Dark**: `#b91c1c` - Used for button hover states
- **Primary Red Darker**: `#991b1b` - Used for button active states

### **Secondary Colors**
- **Success Green**: `#28a745` - Used for checkmarks and success indicators
- **Light Red**: `#fef2f2` to `#fee2e2` - Used for service icon backgrounds

### **Neutral Colors**
- **Text Primary**: `#343a40` - Main text color for readability
- **Text Secondary**: `#64748b` - Secondary text and subtitles
- **Background Light**: `#f8fafc` - Section backgrounds
- **Background Lighter**: `#e2e8f0` - Alternative section backgrounds
- **Border Light**: `#dee2e6` - Form borders and separators
- **White**: `#ffffff` - Card backgrounds and content areas

### **Dark Theme Colors**
- **Dark Blue**: `#1e293b` - Footer and CTA backgrounds
- **Dark Blue Light**: `#334155` - Secondary dark elements

## 🔤 **Typography System**

### **Font Family Hierarchy**
```css
font-family: 'Inter', 'Roboto', 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### **Font Sizes (Responsive)**
- **Base Font**: `16px` (1rem) - Body text
- **H1**: `2.5rem` (40px) - Hero headlines
- **H2**: `2.25rem` (36px) - Section titles
- **H3**: `1.75rem` (28px) - Subsection titles
- **H4**: `1.5rem` (24px) - Card titles

### **Line Heights**
- **Body Text**: `1.6` - Optimal readability
- **Headings**: `1.2` - Tighter spacing for titles

### **Font Weights**
- **Regular**: `400` - Body text
- **Medium**: `500` - Buttons and emphasis
- **Semi-Bold**: `600` - Headings
- **Bold**: `700` - Logo and strong emphasis

## 📐 **Layout & Spacing System**

### **Container System**
```css
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
```

### **Section Spacing**
- **Standard Section**: `80px` top/bottom padding
- **Content Padding**: `20px` left/right (mobile: `15px`)
- **Element Margins**: Consistent `1rem` base unit

### **Grid System**
- **Services Grid**: `repeat(auto-fit, minmax(280px, 1fr))`
- **Testimonials Grid**: `repeat(auto-fit, minmax(350px, 1fr))`
- **Footer Grid**: `repeat(auto-fit, minmax(250px, 1fr))`

## 🔘 **Button System**

### **Primary Button**
```css
.btn-primary {
    background: linear-gradient(135deg, #dc2626, #b91c1c);
    color: white;
    padding: 12px 25px;
    border-radius: 6px;
    font-weight: 500;
    text-transform: capitalize;
    transition: all 0.3s ease;
}
```

### **Button States**
- **Hover**: Darker blue with `translateY(-2px)` and enhanced shadow
- **Focus**: `2px solid #007bff` outline with offset
- **Active**: Darker background color

### **Button Sizes**
- **Standard**: `12px 25px` padding
- **Large**: `16px 32px` padding (hero and CTA buttons)

## 🎭 **Interactive Elements**

### **Hover Effects**
- **Cards**: `translateY(-5px)` with enhanced shadows
- **Links**: Color change to primary blue
- **Buttons**: Transform and shadow effects

### **Transitions**
```css
transition: all 0.3s ease;
```
Applied to all interactive elements for smooth animations.

### **Focus States**
- **Buttons**: `2px solid #dc2626` outline
- **Form Inputs**: Red border with subtle box-shadow
- **Navigation**: Consistent focus indicators

## 📱 **Responsive Design System**

### **Breakpoints**
```css
/* Mobile First Approach */
@media (max-width: 768px) { /* Tablet and below */ }
@media (max-width: 480px) { /* Small mobile */ }
```

### **Mobile Optimizations**
- **Touch Targets**: Minimum 44px height
- **Spacing**: Reduced padding for small screens
- **Typography**: Adjusted font sizes for mobile
- **Navigation**: Hamburger menu with smooth transitions

### **Grid Adaptations**
- **Mobile**: Single column layouts
- **Tablet**: Responsive grid adjustments
- **Desktop**: Full grid layouts

## 🖼️ **Image & Icon System**

### **Icon Specifications**
- **Service Icons**: `80px × 80px` circular backgrounds
- **Social Icons**: `40px × 40px` circular backgrounds
- **Avatar Icons**: `50px × 50px` circular backgrounds

### **Icon Colors**
- **Primary Icons**: `#dc2626` (red)
- **Success Icons**: `#28a745` (green)
- **Background Icons**: Light red gradients

### **Responsive Images**
```css
img {
    max-width: 100%;
    height: auto;
}
```

## 📝 **Form System**

### **Input Styling**
```css
.form-group input,
.form-group select,
.form-group textarea {
    border: 1px solid #dee2e6;
    border-radius: 6px;
    padding: 0.75rem;
    font-size: 1rem;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
```

### **Form States**
- **Default**: Light gray border
- **Focus**: Red border with subtle shadow
- **Error**: Red border (when implemented)
- **Success**: Green border (when implemented)

## 🎨 **Component-Specific Styles**

### **Service Cards**
- **Background**: White with subtle shadows
- **Hover**: Lift effect with enhanced shadows
- **Icons**: Circular red gradient backgrounds
- **Spacing**: Consistent 2rem padding

### **Testimonial Cards**
- **Layout**: Clean white cards with shadows
- **Typography**: Italic quotes with author info
- **Avatars**: Circular placeholder icons

### **FAQ Accordion**
- **Interaction**: Smooth height transitions
- **Icons**: Rotating chevron indicators
- **Spacing**: Consistent padding and margins

### **Header Navigation**
- **Fixed Position**: Sticky header with backdrop blur
- **Scroll Effect**: Background opacity changes
- **Mobile**: Hamburger menu with animations

## 🔧 **CSS Architecture Principles**

### **Naming Conventions**
- **BEM Methodology**: Block__Element--Modifier
- **Semantic Classes**: `.hero`, `.services`, `.testimonials`
- **Utility Classes**: `.text-center`, `.mb-1`, `.mb-2`

### **CSS Organization**
1. **Reset & Base Styles**
2. **Typography**
3. **Layout & Grid**
4. **Components**
5. **Responsive Design**
6. **Utilities**

### **Performance Considerations**
- **Minimal External Dependencies**: Only Font Awesome and Google Fonts
- **Efficient Animations**: CSS transforms and opacity
- **Optimized Selectors**: Specific class-based targeting

## 📱 **Accessibility Features**

### **Focus Management**
- **Visible Focus**: Clear outline indicators
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: Semantic HTML structure

### **Color Contrast**
- **Text**: High contrast ratios for readability
- **Interactive Elements**: Clear visual feedback
- **Backgrounds**: Sufficient contrast for content

### **Responsive Text**
- **Scalable Units**: Rem-based sizing
- **Readable Sizes**: Minimum 16px base font
- **Line Heights**: Optimal spacing for readability

## 🚀 **Implementation Guidelines**

### **Adding New Components**
1. Follow existing naming conventions
2. Use established color variables
3. Implement responsive design patterns
4. Include accessibility features
5. Add smooth transitions

### **Modifying Existing Styles**
1. Maintain color consistency
2. Preserve spacing patterns
3. Update responsive breakpoints
4. Test across devices
5. Document changes

### **Performance Best Practices**
1. Minimize CSS file size
2. Use efficient selectors
3. Optimize animations
4. Test loading performance
5. Monitor Core Web Vitals

---

**This style guide ensures consistency across all components and maintains the professional, trustworthy aesthetic of DestinationBuyRent.com.**
