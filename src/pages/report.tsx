import React, { useEffect, useState } from "react";
import {
  Button,
  Progress,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { GetStaticPropsContext } from "next";
import { FaRegTrashCan } from "react-icons/fa6";
import { Header } from "@/components/Header";
import Head from "next/head";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { calculateResult, Result } from "@/etc/calculateResutl";
import { advEn, advId, descEn, descId } from "@/etc/analisys";

export default function Report() {
  const t = useTranslations("Report");
  const router = useRouter();

  const [name, setName] = useState("");
  const [result, setResult] = useState<Result>({
    extrovert: 0,
    sensing: 0,
    thinking: 0,
    judging: 0,
    introvert: 0,
    intuition: 0,
    feeling: 0,
    perceiving: 0,
    fullLetter: "",
    point: 0,
  });
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    const storedData = localStorage.getItem("quizData");
    if (storedData) {
      const result = JSON.parse(storedData);
      if (result.length !== 70) {
        router.push("/quiz");
      } else {
        setResult(calculateResult(result));
      }
    } else {
      router.push("/quiz");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const storedData = localStorage.getItem("name");
    if (storedData) {
      setName(storedData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addAnOrA = (word: string) => {
    const vowels = "aeiouAEIOU";
    const article = vowels.includes(word[0]) ? "an" : "a";
    return article;
  };

  const desc = router.locale == "id" ? descId : descEn;
  const advice = router.locale == "id" ? advId : advEn;

  return (
    <div className="p-10 min-h-screen flex flex-col">
      <Head>
        <title>{t("title")}</title>
      </Head>
      <Header />

      <div className="flex items-start md:items-center flex-col pt-10">
        <div className="text-5xl font-bold">
          {t("hello")} {name},
        </div>
        <div className="text-3xl font-bold border-b-4 py-1 border-black dark:border-white w-fit text-center px-2">
          {t("report")}
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly gap-20 mt-20 flex-grow">
        <div className="text-center md:text-start">
          <div className="text-4xl font-bold">
            {t("you")} {router.locale !== "id" && addAnOrA(result.fullLetter)}
          </div>
          <div className="text-8xl font-bold">{result.fullLetter}</div>
          <div className="text-sm  w-64 mt-4">{t("disclaimer")}</div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex-1">
            <div className="text-2xl font-bold">{t("detail")}</div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-4">
              <div className="flex flex-col flex-1">
                <div className="flex flex-col">
                  <div className="text-4xl font-bold">
                    E<span className="text-3xl font-bold">xtrovert</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Progress
                      color="default"
                      aria-label="extrovert"
                      value={result.extrovert}
                      classNames={{
                        base: "w-full",
                        indicator: "bg-black/80 dark:bg-white/80",
                      }}
                    />
                    <div className="text-lg font-bold">
                      {Math.round(result.extrovert)}%
                    </div>
                  </div>
                </div>
                <div className="flex flex-col pt-2">
                  <div className="text-4xl font-bold">
                    S<span className="text-3xl font-bold">ensing</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Progress
                      color="default"
                      aria-label="sensing"
                      value={result.sensing}
                      classNames={{
                        base: "w-full",
                        indicator: "bg-black/80 dark:bg-white/80",
                      }}
                    />
                    <div className="text-lg font-bold">
                      {Math.round(result.sensing)}%
                    </div>
                  </div>
                </div>
                <div className="flex flex-col pt-2">
                  <div className="text-4xl font-bold">
                    T<span className="text-3xl font-bold">hinking</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Progress
                      color="default"
                      aria-label="thinking"
                      value={result.thinking}
                      classNames={{
                        base: "w-full",
                        indicator: "bg-black/80 dark:bg-white/80",
                      }}
                    />
                    <div className="text-lg font-bold">
                      {Math.round(result.thinking)}%
                    </div>
                  </div>
                </div>
                <div className="flex flex-col pt-2">
                  <div className="text-4xl font-bold">
                    J<span className="text-3xl font-bold">udging</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Progress
                      color="default"
                      aria-label="judging"
                      value={result.judging}
                      classNames={{
                        base: "w-full",
                        indicator: "bg-black/80 dark:bg-white/80",
                      }}
                    />
                    <div className="text-lg font-bold">
                      {Math.round(result.judging)}%
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex flex-col">
                  <div className="text-4xl font-bold">
                    I<span className="text-3xl font-bold">ntrovert</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Progress
                      color="default"
                      aria-label="introvert"
                      value={result.introvert}
                      classNames={{
                        base: "w-full",
                        indicator: "bg-black/80 dark:bg-white/80",
                      }}
                    />
                    <div className="text-lg font-bold">
                      {Math.round(result.introvert)}%
                    </div>
                  </div>
                </div>
                <div className="flex flex-col pt-2">
                  <div className="text-4xl font-bold">
                    <span className="text-3xl font-bold">i</span>N
                    <span className="text-3xl font-bold">tuition</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Progress
                      color="default"
                      aria-label="intuition"
                      value={result.intuition}
                      classNames={{
                        base: "w-full",
                        indicator: "bg-black/80 dark:bg-white/80",
                      }}
                    />
                    <div className="text-lg font-bold">
                      {Math.round(result.intuition)}%
                    </div>
                  </div>
                </div>
                <div className="flex flex-col pt-2">
                  <div className="text-4xl font-bold">
                    F<span className="text-3xl font-bold">eeling</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Progress
                      color="default"
                      aria-label="thinking"
                      value={result.feeling}
                      classNames={{
                        base: "w-full",
                        indicator: "bg-black/80 dark:bg-white/80",
                      }}
                    />
                    <div className="text-lg font-bold">
                      {Math.round(result.feeling)}%
                    </div>
                  </div>
                </div>
                <div className="flex flex-col pt-2">
                  <div className="text-4xl font-bold">
                    P<span className="text-3xl font-bold">erceiving</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Progress
                      color="default"
                      aria-label="perceiving"
                      value={result.perceiving}
                      classNames={{
                        base: "w-full",
                        indicator: "bg-black/80 dark:bg-white/80",
                      }}
                    />
                    <div className="text-lg font-bold">
                      {Math.round(result.perceiving)}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 mt-20">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 ">
              <div className="flex flex-col flex-1">
                <div className="text-3xl font-bold">{t("description")}</div>
                <ul className="text-2xl font-normal leading-normal list-disc ps-8 mt-4">
                  {desc[result.point - 1]?.map((e, i) => {
                    return (
                      <li key={i} className="leading-snug">
                        {e}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex flex-col flex-1 mt-20 md:mt-0">
                <div className="text-3xl font-bold">{t("advice")}</div>
                <ul className="text-2xl font-normal leading-normal list-disc ps-8 mt-4">
                  {advice[result.point - 1]?.map((e, i) => {
                    return (
                      <li key={i} className="leading-snug">
                        {e}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-center mt-20 md:mt-32">
        <div className="w-24 md:w-28 h-24 md:h-28 ">
          <Button
            isIconOnly
            className="w-24 md:w-28 h-24 md:h-28 border-black dark:border-white border-4 bg-white dark:bg-black"
            variant="shadow"
            radius="full"
            aria-label="delete"
            onClick={onOpen}
          >
            <FaRegTrashCan className="w-10 h-10 text-black dark:text-white" />
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
                    localStorage.removeItem("name");
                    localStorage.removeItem("quizData");
                    router.push("/");
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
