# Tariq Mohmad Shiekh - Static Portfolio Website

A fully static, high-performance portfolio website built with pure HTML, CSS, and vanilla JavaScript. No frameworks, no build tools, no npm dependencies.

## 📁 File Structure

```
static-site/
├── assets/
│   └── images/
│       ├── profile-photo.jpg
│       ├── at-international.png
│       ├── crickmate.png
│       ├── desert-oasis.png
│       ├── education-expo.png
│       ├── ev-auto-show-logo.png
│       ├── ev-auto-show-pass.png
│       ├── ev-auto-show-riyadh.png
│       ├── latest-innovation.png
│       ├── saudi-national-day.png
│       ├── world-environment-day.png
│       └── world-ev-day.png
├── css/
│   ├── styles.css
│   ├── auth.css
│   └── admin.css
├── js/
│   ├── main.js
│   ├── auth.js
│   └── admin.js
├── index.html
├── login.html
├── signup.html
├── admin.html
├── favicon.ico
└── README.md
```

## 🚀 Deployment Instructions

### For Serverbyt or any static hosting:

1. **Copy the image files** from your original project:
   - Copy `src/assets/profile-photo.jpg` → `static-site/assets/images/profile-photo.jpg`
   - Copy all images from `src/assets/project-thumbnails/` → `static-site/assets/images/`

2. **Add your favicon**:
   - Copy `public/favicon.ico` → `static-site/favicon.ico`

3. **Upload the entire `static-site` folder** contents to your web server root directory.

4. That's it! No build step required.

## ✅ Features

- **100% Static**: Pure HTML, CSS, and vanilla JavaScript
- **No Dependencies**: No npm, no Node.js, no build tools required
- **Responsive**: Works on desktop, tablet, and mobile
- **SEO Optimized**: Proper meta tags, semantic HTML, alt texts
- **Accessible**: ARIA labels, focus states, keyboard navigation
- **Fast Loading**: Lazy loading images, minimal CSS/JS
- **Animations**: Smooth fade-in and hover effects
- **Authentication**: Login/Signup pages with Supabase Auth
- **Admin Dashboard**: View and manage contact form submissions

## 🔐 Admin Dashboard

The static site includes a fully functional admin dashboard:

- **Login** (`login.html`): Sign in with email/password
- **Signup** (`signup.html`): Create a new account
- **Admin** (`admin.html`): View contact submissions (requires admin role)

### Setting Up Admin Access

1. Sign up for an account via `signup.html`
2. Add an admin role in your Supabase dashboard:
   - Go to the `user_roles` table
   - Insert a row with your `user_id` and `role: 'admin'`
3. Access the admin dashboard at `admin.html`

## 🎨 Technologies Used

- HTML5 (Semantic markup)
- CSS3 (Custom properties, Flexbox, Grid, Animations)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter, Space Grotesk)
- Supabase JS SDK (for auth and database)

## 📋 Checklist Before Uploading

- [ ] All images copied to `assets/images/`
- [ ] Favicon added
- [ ] Test locally by opening `index.html` in a browser
- [ ] Verify all links work correctly
- [ ] Check responsive design on different screen sizes
- [ ] Test login/signup functionality
- [ ] Verify admin dashboard works

## 📝 Notes

- YouTube thumbnails are loaded directly from YouTube's servers
- Social media icons use inline SVG for optimal performance
- All external links open in new tabs with `noopener noreferrer` for security
- Supabase SDK is loaded from CDN for auth functionality
- Admin dashboard requires valid Supabase connection
