import { SignedIn, SignedOut, SignInButton, SignOutButton, User, UserDropdown, UserProfile } from '@asgardeo/react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { ProtectedRoute } from '@asgardeo/react-router'
import './App.css'

// Import components
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import SignIn from './components/SignIn'

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <header>
          <nav>
            <Link to="/">Home</Link> | {' '}
            <Link to="/dashboard">Dashboard</Link> | {' '}
            <Link to="/profile">Profile</Link>
            
            <div className="auth-buttons">
              <SignedIn>
                <UserDropdown />
                <SignOutButton>Sign Out</SignOutButton>
              </SignedIn>
              <SignedOut>
                <Link to="/signin">Sign In</Link>
              </SignedOut>
            </div>
          </nav>
        </header>

        <main>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />

            {/* Protected routes */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute 
                redirectTo="/signin"
                loader={<div className="spinner">Loading...</div>}
                >
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/profile" 
              element={
                <ProtectedRoute redirectTo="/signin">
                  <Profile />
                  <User>
                    {(user) => (
                      <div>
                        <p>Welcome back, {user.userName || user.username || user.sub}</p>
                        <UserProfile />
                      </div>
                    )}
                  </User>
                </ProtectedRoute>
              } 
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App;
