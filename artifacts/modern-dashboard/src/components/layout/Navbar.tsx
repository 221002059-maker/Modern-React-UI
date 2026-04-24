import { Link, useLocation } from "wouter";
import { ThemeToggle } from "./ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Menu, Search } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();
  const isDashboard = location !== "/";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
              <LayoutDashboard size={20} />
            </div>
            <span className="font-bold text-lg tracking-tight hidden sm:inline-block">Modern Dashboard</span>
          </Link>
          
          {!isDashboard && (
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
              <Link href="#features" className="hover:text-foreground transition-colors">Features</Link>
              <Link href="#pricing" className="hover:text-foreground transition-colors">Pricing</Link>
              <Link href="#about" className="hover:text-foreground transition-colors">About</Link>
            </nav>
          )}
        </div>

        <div className="flex items-center gap-4">
          {isDashboard ? (
            <div className="hidden sm:flex relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input 
                type="search" 
                placeholder="Search anywhere..." 
                className="h-9 w-64 rounded-full border border-input bg-muted/50 px-9 text-sm outline-none focus:bg-background focus:ring-2 focus:ring-ring transition-all"
              />
              <kbd className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </div>
          ) : (
            <Link href="/dashboard" className="hidden sm:block">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                Sign In
              </Button>
            </Link>
          )}

          <ThemeToggle />
          
          {isDashboard ? (
            <Avatar className="h-8 w-8 cursor-pointer ring-2 ring-transparent hover:ring-primary transition-all">
              <AvatarImage src="/images/avatar-1.png" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          ) : (
            <Link href="/dashboard">
              <Button className="hidden sm:inline-flex rounded-full">Get Started</Button>
            </Link>
          )}

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}