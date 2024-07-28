import LocaleSwitcher from "./LocaleSwitcher";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Header = () => {
  return (
    <div className="absolute top-0 right-0 mt-4 me-4 flex row gap-3">
      <LocaleSwitcher />
      <ThemeSwitcher />
    </div>
  );
};
