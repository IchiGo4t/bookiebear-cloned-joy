import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-secondary text-secondary-foreground border">
            <BookOpen className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="font-semibold tracking-tight">onlybooks</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#home" className="text-foreground/80 hover:text-foreground transition-colors">Home</a>
          <a href="#physics" className="text-foreground/80 hover:text-foreground transition-colors">Physics</a>
          <a href="#maths" className="text-foreground/80 hover:text-foreground transition-colors">Maths</a>
          <a href="#chemistry" className="text-foreground/80 hover:text-foreground transition-colors">Chemistry</a>
          <a href="#biology" className="text-foreground/80 hover:text-foreground transition-colors">Biology</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
