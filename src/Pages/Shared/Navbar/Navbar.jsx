import { useRef, useState } from "react";
import {
    Menu,
    X,
    ChevronDown,
    LogOut,
    LayoutDashboard,
    LogIn,
    UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
    const timeoutRef = useRef(null);

    const menuLinks = [
        { to: "/", label: "Home" },
        { to: "/about-us", label: "About" },
        { to: "/health-tips", label: "Health Tips" },
        { to: "#", label: "How It Works" },
    ];

    const accountMenuItems = [
        { label: "Profile", icon: UserRound, to: "/profile" },
        { label: "Dashboard", icon: LayoutDashboard, to: "/dashboard" },
        { label: "Sign In", icon: LogIn, to: "/sign-in" },
        { label: "Logout", icon: LogOut, to: "/logout" },
    ];

    // Helper to handle hover logic for desktop
    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setAccountDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setAccountDropdownOpen(false);
        }, 150);
    };

    return (
        <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex-shrink-0 flex items-center gap-2"
                    >
                        <img
                            className="h-10 md:h-12 w-auto"
                            src="https://i.ibb.co.com/N2J2mDdq/ownmed.png"
                            alt="Logo"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {menuLinks.map((link) => (
                            <Link
                                key={link.label}
                                to={link.to}
                                className="text-gray-700 font-medium text-sm hover:text-primary transition-colors duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right Side - Profile & Account */}
                    <div className="flex items-center gap-3 md:gap-4">
                        {/* Profile Avatar (Visible on desktop/tablet) */}
                        <div className="hidden sm:block">
                            <div className="relative w-10 h-10 rounded-full border-2 border-primary p-0.5 overflow-hidden">
                                <img
                                    alt="Profile Avatar"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    className="w-full h-full rounded-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Desktop Account Dropdown */}
                        <div
                            className="hidden lg:relative lg:block"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="flex bg-primary items-center gap-2 px-4 py-2 text-white font-medium text-sm hover:bg-primary/90 rounded-lg transition-colors duration-200">
                                My Account
                                <ChevronDown
                                    className={`w-4 h-4 transition-transform duration-300 ${
                                        accountDropdownOpen ? "rotate-180" : ""
                                    }`}
                                />
                            </button>

                            {/* Dropdown Menu */}
                            {accountDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 animate-in fade-in zoom-in-95">
                                    {accountMenuItems.map((item) => {
                                        const Icon = item.icon;
                                        return (
                                            <Link
                                                key={item.label}
                                                to={item.to}
                                                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-50 last:border-b-0"
                                            >
                                                <Icon className="w-4 h-4 text-primary" />
                                                <span className="text-sm font-medium">
                                                    {item.label}
                                                </span>
                                            </Link>
                                        );
                                    })}
                                </div>
                            )}
                        </div>

                        {/* Mobile Menu Toggle Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6 text-gray-700" />
                            ) : (
                                <Menu className="w-6 h-6 text-gray-700" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Drawer */}
                {mobileMenuOpen && (
                    <div className="lg:hidden pb-6 border-t border-gray-100 animate-in slide-in-from-top-2 duration-300">
                        <div className="space-y-1 pt-4">
                            {menuLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    to={link.to}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium text-sm"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Account Section */}
                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <button
                                onClick={() =>
                                    setAccountDropdownOpen(!accountDropdownOpen)
                                }
                                className="w-full flex items-center justify-between px-4 py-2 text-gray-700 font-semibold text-sm hover:bg-gray-50 rounded-lg"
                            >
                                Account Settings
                                <ChevronDown
                                    className={`w-4 h-4 transition-transform duration-300 ${
                                        accountDropdownOpen ? "rotate-180" : ""
                                    }`}
                                />
                            </button>

                            {accountDropdownOpen && (
                                <div className="mt-2 space-y-1 px-2">
                                    {accountMenuItems.map((item) => {
                                        const Icon = item.icon;
                                        return (
                                            <Link
                                                key={item.label}
                                                to={item.to}
                                                onClick={() =>
                                                    setMobileMenuOpen(false)
                                                }
                                                className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200 text-sm font-medium"
                                            >
                                                <Icon className="w-4 h-4 text-primary" />
                                                {item.label}
                                            </Link>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
