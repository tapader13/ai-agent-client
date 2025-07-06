# ArkLab AI Agent Catalog

A modern, responsive web application built with Next.js and TypeScript that displays a catalog of AI agents with advanced filtering, search capabilities, and Google OAuth authentication.

## 🚀 Features

### Core Features

- **Server-Side Rendering (SSR)** - Initial data fetching with Next.js App Router
- **Advanced Filtering & Search** - Multi-criteria filtering with real-time search
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Smooth Animations** - Framer Motion for enhanced user experience
- **Type Safety** - Full TypeScript implementation
- **State Management** - Redux Toolkit for application state

### Authentication Features (Bonus Challenge)

- **Google OAuth 2.0** - Secure authentication with NextAuth.js
- **Session Management** - Redux-based client-side session handling
- **User Profile** - Display user information and avatar
- **Logout Functionality** - Complete session management

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Shadcn/ui
- **State Management**: Redux Toolkit
- **Authentication**: NextAuth.js
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📦 Installation & Setup

### Prerequisites

- Node.js 18+
- npm or yarn
- Google Cloud Console account (for OAuth)

### 1. Clone the Repository

```bash
git clone https://github.com/tapader13/ai-agent-client
cd ai-agent-client
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Copy the example environment file into env:

```bash
 .env.local
```

### 4. Google OAuth Setup (Required for Authentication)

1. **Google Cloud Console Setup:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable the Google+ API
   - Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client IDs"
   - Set application type to "Web application"
   - Add authorized redirect URIs:
     - \`<http://localhost:3000/api/auth/callback/google\`>
     - \`<https://ai-agent-client-snowy.vercel.app/api/auth/callback/google\`> (for production)

2. **Update Environment Variables:**

   ```env
   AUTH_GOOGLE_ID=your_google_client_id_here
   AUTH_GOOGLE_SECRET=your_google_client_secret_here
   NEXTAUTH_URL=<http://localhost:3000>
   AUTH_SECRET=your_nextauth_secret_here
   ```

3. **Generate NextAuth Secret:**

   ```bash
   openssl rand -base64 32
   ```

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Key Design Decisions

### 1. **Architecture Choices**

**Next.js App Router**: Chosen for its modern approach to SSR, better performance, and improved developer experience compared to Pages Router.

**Redux Toolkit**: Selected for predictable state management, especially beneficial for complex filtering logic and authentication state across components.

**Server + Client Component Split**:

- Server Components for initial data fetching (SSR)
- Client Components for interactive features (filtering, authentication)

### 2. **Authentication Implementation**

**NextAuth.js**: Chosen over custom implementation for:

- Built-in security best practices
- Simplified OAuth flow handling
- JWT session management

**Protected Routes Strategy**: Implemented AuthGuard component that:

- Checks authentication status on mount
- Shows loading skeleton during auth check
- Redirects unauthenticated users to sign-in
- Provides smooth user experience

### 3. **State Management Strategy**

**Dual State Approach**:

- **Redux**: For complex application state (filters, agents, auth)
- **NextAuth Session**: For authentication session data
- **Sync Layer**: AuthProvider component syncs NextAuth session with Redux

### 4. **UI/UX Decisions**

**Mobile-First Design**: Responsive breakpoints ensure optimal experience across devices.

**Progressive Enhancement**: Core functionality works without JavaScript, enhanced with client-side features.

**Loading States**: Comprehensive loading states prevent layout shifts and improve perceived performance.

## 🔍 Filtering & Search Implementation

### Multi-Criteria Filtering

- **Search**: Case-insensitive search across name and description
- **Status Filter**: Multiple selection (Active, Beta, Archived)
- **Category Filter**: Multiple selection across all categories
- **Pricing Model Filter**: Single selection (Free Tier, Subscription, Per-Use)
- **Clear All**: Reset all filters to initial state


## 🎨 Animation & Visual Design

### Framer Motion Implementation

- **Staggered Card Animations**: Cards animate in sequence for visual appeal
- **Hover Effects**: Subtle card elevation on hover
- **Page Transitions**: Smooth transitions between states
- **Loading Animations**: Skeleton loaders during data fetching

### Design System

- **Shadcn/ui Components**: Consistent, accessible component library
- **Color-Coded Status**: Visual distinction for agent statuses
- **Avatar Generation**: Automatic initials for agents and users
- **Responsive Grid**: Adaptive layout for different screen sizes

## 🚧 Challenges Encountered & Solutions

### 1. **SSR Data Fetching Issue**

**Challenge**: Initial fetch from public JSON file failed in server environment.

**Solution**: Moved mock data to TypeScript module for direct import, maintaining SSR simulation with artificial delay.

### 2. **Authentication State Synchronization**

**Challenge**: Syncing NextAuth session with Redux store across page refreshes.

**Solution**: Created AuthProvider component that listens to NextAuth session changes and updates Redux state accordingly.

### 3. **Protected Route Implementation**

**Challenge**: Preventing flash of unauthenticated content while checking auth status.

**Solution**: Implemented AuthGuard with loading states and proper redirect logic.

## 🔐 Google OAuth 2.0 Implementation Details

### Implementation Approach

- **Library Used**: NextAuth.js v5
- **Provider**: Google OAuth 2.0
- **Session Strategy**: JWT (stateless)
- **State Management**: Redux integration for client-side session handling

### Authentication Flow

1. User clicks "Continue with Google"
2. Redirected to Google OAuth consent screen
3. Google redirects back with authorization code
4. NextAuth exchanges code for tokens
5. JWT session created and stored in cookies
6. AuthProvider syncs session with Redux store
7. User gains access to protected catalog

## 🚀 Deployment

### Build Commands

```bash
npm run build
npm start
```

### 🛠️ Authentication Setup Note

While integrating NextAuth.js for authentication, I initially encountered an issue where the authentication data (session) was not available in certain client components, especially in the header. This was because the session context wasn't properly provided at the top level of the application. To resolve this, I wrapped the app with SessionProvider inside the RootLayout to ensure that session data is available globally, including in components like the header. This approach ensures consistent access to auth state across both server and client components.

**Note**: This project was created as a take-home challenge for a Frontend Developer Intern position, demonstrating proficiency in modern React/Next.js development, authentication implementation, and responsive design principles.
