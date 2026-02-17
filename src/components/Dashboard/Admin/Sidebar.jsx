import { useState } from "react";
import {
    ChevronDown,
    Home,
    User,
    Plus,
    Upload,
    Search,
    MapPin,
    Calendar,
    Users,
} from "lucide-react";
import { href, Link } from "react-router-dom";

const menuItems = [
    {
        id: "overview",
        label: "Overview-Admin",
        icon: Home,
        submenu: [
            { id: "health-summary", label: "Health Summary" },
            { id: "recent-activity", label: "Recent Activity" },
        ],
    },
    {
        id: "profile",
        label: "Profile",
        icon: User,
        to: "/dashboard/profile",
        submenu: [
            {
                id: "personal-info",
                label: "Personal Information",
                to: "/dashboard/profile",
            },
            // { id: "profile-image", label: "Profile Image" },
            // { id: "password", label: "Change Password" },
        ],
    },
    {
        id: "medicine",
        label: "Add Medicine",
        icon: Plus,
        submenu: [
            { id: "medicine-details", label: "Medicine Details" },
            { id: "reminders", label: "Reminder Scheduling" },
        ],
    },
    {
        id: "prescription",
        label: "Upload Prescription",
        icon: Upload,
        submenu: [
            { id: "upload-images", label: "Upload Images" },
            { id: "cloudinary", label: "Cloudinary Storage" },
        ],
    },
    {
        id: "doctor",
        label: "Find Doctor",
        icon: Search,
        submenu: [
            { id: "doctor-search", label: "Search by Department" },
            { id: "doctor-profiles", label: "Doctor Profile & Availability" },
        ],
    },
    {
        id: "pharmacy",
        label: "Find Pharmacy",
        icon: MapPin,
        submenu: [
            { id: "pharmacy-search", label: "Search by Name" },
            { id: "pharmacy-location", label: "Location-based Search" },
        ],
    },
    {
        id: "hospital",
        label: "Find Hospital",
        icon: MapPin,
        submenu: [
            { id: "hospital-search", label: "Search by Name" },
            { id: "hospital-location", label: "Location-based Search" },
        ],
    },
    {
        id: "appointments",
        label: "My Appointments",
        icon: Calendar,
        submenu: [
            { id: "appointment-list", label: "Appointment List" },
            { id: "appointment-status", label: "Appointment Status" },
        ],
    },
    {
        id: "family",
        label: "Family Member Status",
        icon: Users,
        submenu: [
            { id: "add-family", label: "Add Family Members" },
            { id: "family-health", label: "View Health Status" },
        ],
    },
];

export function Sidebar({
    activeSection,
    setActiveSection,
    sidebarOpen,
    setSidebarOpen,
}) {
    const [expandedMenu, setExpandedMenu] = useState("overview");

    const handleMenuClick = (id) => {
        setExpandedMenu(expandedMenu === id ? null : id);
        setActiveSection(id);
        // Close sidebar on mobile when section is selected
        if (window.innerWidth < 768) {
            setSidebarOpen(false);
        }
    };

    const handleSubmenuClick = (parentId, submenuId) => {
        setActiveSection(submenuId);
        // Close sidebar on mobile when submenu is selected
        if (window.innerWidth < 768) {
            setSidebarOpen(false);
        }
    };

    return (
        <>
            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}

            {/* Sidebar */}
            <aside
                className={`fixed md:relative top-16 md:top-0 left-0 h-[calc(100vh-4rem)] md:h-screen w-64 border-r transition-all duration-300 z-30 flex flex-col
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
                style={{
                    backgroundColor: "hsl(var(--sidebar-background))",
                    borderColor: "hsl(var(--sidebar-border))",
                    color: "hsl(var(--sidebar-foreground))",
                }}
            >
                {/* Fixed Logo Section */}
                <div
                    className="flex-shrink-0 px-4 py-2 border-b border-b border-border shadow-sm"
                    style={{ borderColor: "hsl(var(--sidebar-border))" }}
                >
                    <Link to="/" className="flex items-center gap-2">
                        <img
                            className="h-10 md:h-12 w-auto"
                            src="https://i.ibb.co.com/N2J2mDdq/ownmed.png"
                            alt="Logo"
                        />
                    </Link>
                </div>

                {/* Scrollable Menu Section */}
                <nav className="flex-1 overflow-y-auto p-4 space-y-2">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isExpanded = expandedMenu === item.id;
                        const isActive = activeSection === item.id;

                        return (
                            <div key={item.id}>
                                <button
                                    onClick={() => handleMenuClick(item.id)}
                                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-all
                    ${
                        isActive
                            ? "text-sidebar-primary-foreground"
                            : "hover:text-sidebar-accent-foreground"
                    }`}
                                    style={{
                                        backgroundColor: isActive
                                            ? "hsl(var(--sidebar-primary))"
                                            : "transparent",
                                        color: isActive
                                            ? "hsl(var(--sidebar-primary-foreground))"
                                            : "hsl(var(--sidebar-foreground))",
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isActive) {
                                            e.currentTarget.style.backgroundColor =
                                                "hsl(var(--sidebar-accent))";
                                            e.currentTarget.style.color =
                                                "hsl(var(--sidebar-accent-foreground))";
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isActive) {
                                            e.currentTarget.style.backgroundColor =
                                                "transparent";
                                            e.currentTarget.style.color =
                                                "hsl(var(--sidebar-foreground))";
                                        }
                                    }}
                                >
                                    <div className="flex items-center gap-3">
                                        <Icon size={20} />
                                        <span className="text-sm">
                                            {item.label}
                                        </span>
                                    </div>
                                    <ChevronDown
                                        size={16}
                                        className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
                                    />
                                </button>

                                {/* Submenu */}
                                {isExpanded && (
                                    <div
                                        className="mt-2 ml-4 space-y-1 border-l-2"
                                        style={{
                                            borderColor:
                                                "hsl(var(--sidebar-border))",
                                        }}
                                    >
                                        {item.submenu.map((submenu) => (
                                            <button
                                                key={submenu.id}
                                                onClick={() =>
                                                    handleSubmenuClick(
                                                        item.id,
                                                        submenu.id,
                                                    )
                                                }
                                                className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-all
                          ${activeSection === submenu.id ? "font-medium" : ""}`}
                                                style={{
                                                    backgroundColor:
                                                        activeSection ===
                                                        submenu.id
                                                            ? "hsl(var(--sidebar-primary))"
                                                            : "transparent",
                                                    color:
                                                        activeSection ===
                                                        submenu.id
                                                            ? "hsl(var(--sidebar-primary-foreground))"
                                                            : "hsl(var(--sidebar-foreground))",
                                                }}
                                                onMouseEnter={(e) => {
                                                    if (
                                                        activeSection !==
                                                        submenu.id
                                                    ) {
                                                        e.currentTarget.style.backgroundColor =
                                                            "hsl(var(--sidebar-accent))";
                                                        e.currentTarget.style.color =
                                                            "hsl(var(--sidebar-accent-foreground))";
                                                    }
                                                }}
                                                onMouseLeave={(e) => {
                                                    if (
                                                        activeSection !==
                                                        submenu.id
                                                    ) {
                                                        e.currentTarget.style.backgroundColor =
                                                            "transparent";
                                                        e.currentTarget.style.color =
                                                            "hsl(var(--sidebar-foreground))";
                                                    }
                                                }}
                                            >
                                                {submenu.label}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </nav>
            </aside>
        </>
    );
}
