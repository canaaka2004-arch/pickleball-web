# Pickleball Sports Community - Product Requirements Document

## Original Problem Statement
Build a full-featured Pickleball Sports Community website for Vietnam with:
- Modern, professional design (business network style)
- Multiple pages: Home, Tournaments, Rankings, News, Contact
- Language support: Vietnamese (primary) + English (placeholder)
- Mock data for 6 tournaments, 20 players, 10 news articles
- Filter and search functionality
- Responsive design for all devices

## User Choices & Inputs
1. **Design Style:** Modern, professional with business network approach (option 1)
2. **Development Scope:** All pages with mock data (option 2)
3. **Language:** Vietnamese primary, English as placeholder (option 4)

## Architecture & Tech Stack
- **Frontend:** React 19 with React Router
- **Styling:** Custom CSS with design system (Network Brand Colors)
- **UI Components:** Shadcn/UI components
- **State Management:** React hooks (useState)
- **Backend (Future):** FastAPI + MongoDB
- **Mock Data:** JavaScript object exports

## Core Requirements (Static)

### Design System
- **Colors:**
  - Primary: #D3FF62 (brand green)
  - Dark: #004534 (text & buttons)
  - Backgrounds: #FAFFEE, #FAFAFF, #EDEDFE, #CACAFC
  - Text: #004534, #0C6951, #807979
  
- **Typography:**
  - Font: Inter
  - Responsive sizing with clamp()
  
- **Components:**
  - Pill-shaped buttons (25px radius)
  - Rounded cards (32px radius)
  - Smooth transitions (0.2-0.3s)
  - Hover effects with transforms

### Pages Structure
1. **Home:** Hero, Stats, Upcoming Tournaments, Latest News, CTA
2. **Tournaments:** List with filters (status, category), detail view
3. **Rankings:** Sortable table with province filter, medals for top 3
4. **News:** List with search and category filter, detail articles
5. **Contact:** Form with validation, contact information cards

### Features
- ✅ Language toggle (VN/EN)
- ✅ Responsive navigation with mobile menu
- ✅ Filter and search functionality
- ✅ Status badges (upcoming, registration, completed)
- ✅ Mock data system
- ✅ Smooth scrolling and animations

## What's Been Implemented (January 2025)

### Phase 1: Frontend with Mock Data (Completed - Jan 1, 2025)
**Files Created:**
- `/app/frontend/src/mockData.js` - Complete mock data
- `/app/frontend/src/components/Navbar.jsx` - Navigation with language toggle
- `/app/frontend/src/components/Footer.jsx` - Footer with links and social
- `/app/frontend/src/pages/Home.jsx` - Landing page
- `/app/frontend/src/pages/Tournaments.jsx` - Tournament list with filters
- `/app/frontend/src/pages/TournamentDetail.jsx` - Individual tournament view
- `/app/frontend/src/pages/Rankings.jsx` - Player rankings table
- `/app/frontend/src/pages/News.jsx` - News list with search
- `/app/frontend/src/pages/NewsDetail.jsx` - Article detail view
- `/app/frontend/src/pages/Contact.jsx` - Contact form and info

**Files Updated:**
- `/app/frontend/src/App.js` - Routes setup
- `/app/frontend/src/App.css` - Complete design system implementation

**Features Working:**
- All 7 pages functional with smooth navigation
- Language switching (VN/EN) working perfectly
- Filters and search operating on mock data
- Responsive design tested across breakpoints
- Professional business network aesthetic achieved

## Prioritized Backlog

### P0 Features (Must Have - Next Phase)
1. **Backend Development**
   - MongoDB schemas for tournaments, players, news
   - FastAPI endpoints for CRUD operations
   - API integration replacing mock data
   
2. **Tournament Registration**
   - Registration form with validation
   - Email confirmation system
   - Registration status tracking

### P1 Features (Should Have)
1. **Admin Panel**
   - Dashboard for managing tournaments
   - Player/athlete management
   - News/content management
   
2. **User Authentication**
   - User registration and login
   - Profile management
   - Role-based access (admin, player, visitor)

### P2 Features (Nice to Have)
1. **Advanced Features**
   - Tournament bracket/results tracking
   - Live scoring system
   - Photo gallery
   - Event calendar integration
   
2. **Enhancement Features**
   - Social sharing
   - Comments on news
   - Newsletter subscription
   - Download tournament schedules (PDF)

## Next Tasks
1. **Backend Setup:**
   - Create MongoDB models for tournaments, players, news, registrations
   - Build REST API endpoints with FastAPI
   - Implement data validation with Pydantic
   
2. **Frontend-Backend Integration:**
   - Replace mock data with API calls
   - Add loading states
   - Error handling and user feedback
   
3. **Testing:**
   - Frontend functionality testing
   - Backend API testing
   - End-to-end integration testing

## API Contracts (To Be Implemented)

### Tournaments API
```
GET    /api/tournaments - List all tournaments
GET    /api/tournaments/:id - Get tournament details
POST   /api/tournaments - Create tournament (admin)
PUT    /api/tournaments/:id - Update tournament (admin)
DELETE /api/tournaments/:id - Delete tournament (admin)
POST   /api/tournaments/:id/register - Register for tournament
```

### Players API
```
GET    /api/players - List all players (rankings)
GET    /api/players/:id - Get player details
POST   /api/players - Create player profile
PUT    /api/players/:id - Update player profile
```

### News API
```
GET    /api/news - List all news articles
GET    /api/news/:id - Get article details
POST   /api/news - Create news article (admin)
PUT    /api/news/:id - Update article (admin)
DELETE /api/news/:id - Delete article (admin)
```

### Contact API
```
POST   /api/contact - Submit contact form
```

## Mock Data Structure (Current Implementation)

### Tournaments (6 entries)
- ID, name (VN/EN), location (VN/EN), date, status, participants, prize, image, category

### Players (20 entries)
- ID, rank, name, province, points, tournaments played, wins

### News (10 entries)
- ID, title (VN/EN), excerpt (VN/EN), content, date, category (VN/EN), image, author

### Stats
- Total players: 1,250
- Total tournaments: 48
- Provinces: 25
- Active tournaments: 3

## Success Metrics (Future)
- User registration rate
- Tournament registration conversion
- Page load performance (<2s)
- Mobile responsiveness score
- User engagement (time on site, pages per session)

---
**Last Updated:** March 1, 2025
**Status:** Phase 1 Complete - Frontend with Mock Data ✅
**Next Phase:** Backend Development & API Integration

---

## Changelog

### March 23, 2025 - Full Multi-language (VI/EN) Support Implementation
**Task:** Implement complete bilingual system across the entire website.

**Files Updated:**
- `/app/frontend/src/translations.js` - Comprehensive translations added:
  - Format page: Doubles rules, Singles rules, Tournament format
  - Media page: Gallery, highlights, empty states
  - Ranking page: All 4 categories with subtitles
  - Home page: Hero sections, loading states
  - Common: Coming soon messages
  
- `/app/frontend/src/pages/FormatPage.jsx` - Now uses translations for:
  - Page title and subtitle
  - Doubles rules (Serve, Two-Bounce Rule, Serve Order, Kitchen, Scoring)
  - Singles rules (Intro, Position, Side Out)
  - Tournament Format section with "Coming Soon"

- `/app/frontend/src/pages/MediaPage.jsx` - Now uses translations for:
  - Page title and subtitle
  - Gallery section header
  - Video highlights header
  - Empty state messages

- `/app/frontend/src/pages/RankingPage.jsx` - Now uses translations for:
  - Page title and subtitle
  - All 4 ranking categories (Intermediate, Advanced, Pro, Master)
  - Subtitles for each category
  - "Coming Soon" message

- `/app/frontend/src/pages/Home.jsx` - Now uses translations for:
  - Hero 3 title and subtitle
  - Loading state

**Translation Coverage:**
- ✅ Navigation menu (8 items)
- ✅ Contact form (labels, placeholders, messages)
- ✅ Format page (Pickleball rules - Doubles & Singles)
- ✅ Media page (headers, empty states)
- ✅ Ranking page (all categories)
- ✅ Home page (all hero sections)
- ✅ Footer (all sections)
- ✅ "Coming Soon" messages
- ✅ Loading states

**Key Features:**
- Instant language switching (no page reload)
- Language state persists across page navigation
- Default language: Vietnamese
- All static text controlled by centralized translation object
