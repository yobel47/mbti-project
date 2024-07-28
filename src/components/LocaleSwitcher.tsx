import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import { Button } from "@nextui-org/button";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const router = useRouter();
  const { locale, locales, route } = useRouter();
  const otherLocale = locales?.find((cur) => cur !== locale);

  const handleLocaleSwitch = () => {
    router.push(route, route, { locale: otherLocale });
  };

  return (
    <Button
      isIconOnly
      className="w-12 h-12 font-bold text-2xl text-center border-black dark:border-white border-3 bg-white dark:bg-black"
      variant="shadow"
      radius="full"
      onClick={handleLocaleSwitch}
    >
      {t("switchLocale", { locale: otherLocale })}
    </Button>
  );
}
