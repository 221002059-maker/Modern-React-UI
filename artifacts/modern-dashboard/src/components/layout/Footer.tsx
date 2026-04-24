export function Footer() {
  return (
    <footer className="border-t py-8 md:py-12 bg-background">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <div>
          &copy; {new Date().getFullYear()} Modern Dashboard. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}