import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { 
  BarChart3, 
  Home, 
  Settings, 
  Users, 
  FolderKanban,
  CheckSquare,
  MessageSquare
} from "lucide-react";

const navItems = [
  { href: "/dashboard", icon: Home, label: "Overview" },
  { href: "/dashboard/projects", icon: FolderKanban, label: "Projects" },
  { href: "/dashboard/tasks", icon: CheckSquare, label: "Tasks" },
  { href: "/analytics", icon: BarChart3, label: "Analytics" },
  { href: "/team", icon: Users, label: "Team" },
  { href: "/dashboard/messages", icon: MessageSquare, label: "Messages" },
];

export function Sidebar() {
  const [location] = useLocation();

  return (
    <aside className="hidden md:flex flex-col w-64 border-r bg-sidebar h-[calc(100vh-4rem)] sticky top-16 z-40 p-4">
      <div className="space-y-1 py-2">
        <h4 className="px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Main Menu</h4>
        {navItems.map((item) => {
          const isActive = location === item.href;
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all group",
                isActive 
                  ? "bg-primary/10 text-primary" 
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon className={cn("h-4 w-4", isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground")} />
              {item.label}
            </Link>
          );
        })}
      </div>
      
      <div className="mt-auto pt-4 border-t space-y-1">
        <Link 
          href="/settings"
          className={cn(
            "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all group",
            location === "/settings" 
              ? "bg-primary/10 text-primary" 
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          )}
        >
          <Settings className="h-4 w-4" />
          Settings
        </Link>
      </div>
    </aside>
  );
}