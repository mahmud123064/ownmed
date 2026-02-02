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
        { href: "/", label: "Home" },
        { href: "/about-us", label: "About" },
        { href: "/health-tips", label: "Health Tips" },
        { href: "#", label: "How It Works" },
    ];

    const accountMenuItems = [
        { label: "Name", icon: UserRound, href: "#" },
        { label: "Dashboard", icon: LayoutDashboard, href: "#" },
        { label: "Sign In", icon: LogIn, href: "/sign-up" },
        { label: "Logout", icon: LogOut, href: "#" },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full bg-white border-border shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link
                        href="/"
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
                                key={link.href}
                                to={link.href}
                                className="text-foreground font-medium text-sm hover:text-primary transition-colors duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right Side - Profile & Account */}
                    <div className="flex items-center gap-3 md:gap-4">
                        {/* Profile Avatar */}
                        <div className="hidden sm:block">
                            <button
                                className="relative w-10 h-10 rounded-full border-2 border-primary p-1 hover:shadow-lg transition-all duration-300 overflow-hidden"
                                title="Profile"
                            >
                                <img
                                    alt="Profile Avatar"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    className="w-full h-full rounded-full object-cover"
                                />
                            </button>
                        </div>

                        {/* Account Dropdown */}
                        <div
                            className="hidden md:hidden lg:block relative"
                            // onMouseEnter={() => setAccountDropdownOpen(true)}
                            // onMouseLeave={() => setAccountDropdownOpen(false)}
                            onMouseEnter={() => {
                                clearTimeout(timeoutRef.current);
                                setAccountDropdownOpen(true);
                            }}
                            onMouseLeave={() => {
                                timeoutRef.current = setTimeout(() => {
                                    setAccountDropdownOpen(false);
                                }, 150); // small delay
                            }}
                        >
                            <button className="flex bg-primary items-center gap-2 px-3 py-2 text-white font-medium text-sm hover:bg-primary/60 rounded-lg transition-colors duration-200">
                                My Account
                                <ChevronDown
                                    className={`w-4 h-4 transition-transform duration-800 ${
                                        accountDropdownOpen ? "rotate-180" : ""
                                    }`}
                                />
                            </button>

                            {/* Account Dropdown Menu */}
                            {accountDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-border overflow-hidden animate-in fade-in zoom-in-95 z-50">
                                    {accountMenuItems.map((item) => {
                                        const Icon = item.icon;
                                        return (
                                            <Link
                                                key={item.label}
                                                href={item.href}
                                                className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-secondary/50 transition-colors duration-200 border-b border-border last:border-b-0"
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

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 rounded-lg hover:bg-secondary/50 transition-colors duration-200"
                            title="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6 text-foreground" />
                            ) : (
                                <Menu className="w-6 h-6 text-foreground" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="lg:hidden pb-4 border-t border-border animate-in slide-in-from-top-2">
                        {/* Mobile Menu Links */}
                        <div className="space-y-1 pt-4">
                            {menuLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="block px-4 py-2 text-foreground hover:bg-secondary/50 rounded-lg transition-colors duration-200 font-medium text-sm"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Account Section */}
                        <div className="mt-4 pt-4 border-t border-border">
                            <button
                                onClick={() =>
                                    setAccountDropdownOpen(!accountDropdownOpen)
                                }
                                className="w-full flex items-center justify-between px-4 py-2 text-foreground font-medium text-sm hover:bg-secondary/50 rounded-lg transition-colors duration-200"
                            >
                                My Account
                                <ChevronDown
                                    className={`w-4 h-4 transition-transform duration-300 ${
                                        accountDropdownOpen ? "rotate-180" : ""
                                    }`}
                                />
                            </button>

                            {accountDropdownOpen && (
                                <div className="mt-2 space-y-1">
                                    {accountMenuItems.map((item) => {
                                        const Icon = item.icon;
                                        return (
                                            <Link
                                                key={item.label}
                                                href={item.href}
                                                className="flex items-center gap-3 px-4 py-2 text-foreground hover:bg-secondary/50 rounded-lg transition-colors duration-200 text-sm font-medium"
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
