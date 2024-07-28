import { FaArrowRight } from "react-icons/fa6";
import { Input } from "@nextui-org/input";
import HeadText from "@/components/HeadText";
import { titlesId, titlesEn } from "@/etc/titles";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Header } from "@/components/Header";

export default function Page() {
  const t = useTranslations("Index");
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  interface QuestionAnswer {
    question: string;
    answer: string;
  }

  useEffect(() => {
    const storedData = localStorage.getItem("name");
    if (storedData) {
      setInputValue(storedData);
    }
  }, []);

  const saveData = () => {
    localStorage.setItem("name", inputValue);
  };

  const texts: QuestionAnswer[] = router.locale == "id" ? titlesId : titlesEn;

  const [inputValue, setInputValue] = useState("");
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  const handleClick = () => {
    if (inputValue.trim() === "") {
      setIsErrorVisible(true);
    } else {
      onOpen();
    }
  };

  return (
    <div className="p-10 select-none min-h-screen flex flex-col">
      <Head>
        <title>{t("title")}</title>
      </Head>
      <Header />
      <div className="relative">
        <HeadText texts={texts} interval={10} />
      </div>
      <div className="flex-grow flex portrait:flex-col landscape:flex-row portrait:justify-end landscape:justify-between">
        <div className="w-full sm:w-5/12 lg:w-3/12 self-end h-full mb-8">
          <Input
            value={inputValue}
            onValueChange={(value) => {
              setInputValue(value);
              if (value.length > 0) {
                setIsErrorVisible(false);
              }
            }}
            classNames={{
              label: "text-2xl text-black dark:text-white",
              input: [
                "bg-transparent",
                "!text-black/90 dark:!text-white/90",
                "text-2xl",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "pb-2",
                "rounded-none",
                "border-b-4",
                "border-black",
                "dark:border-white",
                "!bg-transparent",
                "dark:bg-transparent",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-100/70",
                "dark:hover:bg-default/70",
                "group-data-[focus=true]:bg-transparent",
                "dark:group-data-[focus=true]:bg-transparent",
                "!cursor-text",
              ],
            }}
            isClearable
            type="email"
            labelPlacement="outside"
            label={inputValue.length == 0 ? t("label") : t("hello")}
          />
          <div className={isErrorVisible ? `font-bold mt-1 ms-3` : `hidden`}>
            {t("empty")}
          </div>
        </div>

        <div className="w-24 md:w-28 h-24 md:h-28 self-end mt-6">
          <Button
            isIconOnly
            className="w-24 md:w-28 h-24 md:h-28 border-black dark:border-white border-4 bg-white dark:bg-black"
            variant="shadow"
            radius="full"
            aria-label="Next"
            onClick={handleClick}
          >
            <FaArrowRight className="w-10 h-10 text-black dark:text-white" />
          </Button>
        </div>
      </div>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          header: "",
          closeButton: "w-10 h-10 text-2xl text-center",
        }}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        placement={"center"}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-2xl">
                {t("modalTitle")}
              </ModalHeader>
              <ModalBody>{t("modalDesc")}</ModalBody>
              <ModalFooter className="justify-center">
                <Button
                  className="border-black bg-black/80 text-white dark:bg-white/80 dark:text-black"
                  onPress={() => {
                    const storedData = localStorage.getItem("quizData");
                    if (storedData) {
                      const result = JSON.parse(storedData);
                      if (result.length == 70) {
                        router.push("/report");
                      }
                    } else {
                      router.push("/quiz");
                      saveData();
                    }
                  }}
                >
                  {t("modalBtn")}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
}
