// components/ThemeSwitcher.tsx
import { Button } from "@nextui-org/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  
  return (
    <div>
      {hasMounted && theme == "light" ? (
        <Button
          isIconOnly
          className="w-12 h-12 border-black dark:border-white border-3 bg-white dark:bg-black"
          variant="shadow"
          radius="full"
          aria-label="Next"
          onClick={() => setTheme("dark")}
        >
          <div>
            <FiMoon className="w-8 h-8" />
          </div>
        </Button>
      ) : (
        <Button
          isIconOnly
          className="w-12 h-12 border-black dark:border-white border-3 bg-white dark:bg-black"
          variant="shadow"
          radius="full"
          aria-label="Next"
          onClick={() => setTheme("light")}
        >
          <div>
            <FiSun className="w-8 h-8" />
          </div>
        </Button>
      )}
    </div>
  );
};
