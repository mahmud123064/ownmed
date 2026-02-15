import { useState, useRef, useEffect, createContext, useContext } from 'react';
import { Bell, User, Moon, Sun, Menu, X, LogOut, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Theme Context (replacement for next-themes)
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

export function Header({ sidebarOpen, setSidebarOpen }) {
  const { theme, setTheme } = useTheme();
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const profileRef = useRef(null);
  const notificationsRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setNotificationsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-card shadow-sm">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left Section - Logo & Hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="inline-flex md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="flex items-center gap-2">
            {/* <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
              H
            </div> */}
            <h1 className="hidden sm:inline md:text-lg lg:text-xl  font-bold text-primary">Welcome to OwnMed Mahmud!</h1>
            
            
          </div>
        </div>

        {/* Right Section - Icons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Notifications */}
          <div ref={notificationsRef} className="relative">
            <button
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className="relative p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <Bell size={20} className="text-foreground" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
            </button>
            
            {notificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-card-foreground border  rounded-lg shadow-lg"
              style={{
                    backgroundColor: "hsl(var(--sidebar-background))",
                    borderColor: "hsl(var(--sidebar-border))",
                    color: "hsl(var(--sidebar-foreground))",
                }}
              >
                <div className="p-4 border-b border-border">
                  <h3 className="font-semibold">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  <div className="p-4 hover:bg-muted cursor-pointer transition-colors border-b border-border">
                    <p className="font-medium text-sm">Medicine Reminder</p>
                    <p className="text-xs text-muted-foreground">Time to take your medication</p>
                  </div>
                  <div className="p-4 hover:bg-muted cursor-pointer transition-colors border-b border-border">
                    <p className="font-medium text-sm">Appointment Tomorrow</p>
                    <p className="text-xs text-muted-foreground">Your doctor appointment is tomorrow at 2 PM</p>
                  </div>
                  <div className="p-4 hover:bg-muted cursor-pointer transition-colors">
                    <p className="font-medium text-sm">Prescription Ready</p>
                    <p className="text-xs text-muted-foreground">Your prescription is ready for pickup</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Profile Dropdown */}
          <div ref={profileRef} className="relative">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg transition-colors"

             
            >
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold">
                JD
              </div>
              <span className="hidden sm:inline text-sm font-medium">John Doe</span>
            </button>
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg"
               style={{
                    backgroundColor: "hsl(var(--sidebar-background))",
                    borderColor: "hsl(var(--sidebar-border))",
                    color: "hsl(var(--sidebar-foreground))",
                }}
              >
                <button className="w-full flex items-center gap-2 px-4 py-3 hover:bg-muted transition-colors border-b border-border">
                  <User size={18} />
                  <span className="text-sm">View Profile</span>
                </button>
                <button className="w-full flex items-center gap-2 px-4 py-3 hover:bg-muted transition-colors border-b border-border">
                  <Settings size={18} />
                  <span className="text-sm">Settings</span>
                </button>
                <button className="w-full flex items-center gap-2 px-4 py-3 hover:bg-destructive hover:text-destructive-foreground transition-colors">
                  <LogOut size={18} />
                  <span className="text-sm">Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}