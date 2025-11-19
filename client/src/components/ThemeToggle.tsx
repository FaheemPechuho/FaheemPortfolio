import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full w-9 h-9"
        aria-label="Toggle theme"
        disabled
      >
        <Sun className="h-4 w-4 opacity-50" />
      </Button>
    );
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative rounded-full w-9 h-9 transition-transform"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <Sun className={`h-4 w-4 ${isDark ? "scale-0" : "scale-100"} transition-transform`} />
      <Moon className={`absolute h-4 w-4 ${isDark ? "scale-100" : "scale-0"} transition-transform`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

