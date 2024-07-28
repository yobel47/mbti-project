import React, { useEffect, useState } from "react";
import { CustomRadio } from "@/components/CustomRadio";
import { Button, Progress, RadioGroup } from "@nextui-org/react";
import { GetStaticPropsContext } from "next";
import { FaArrowRight } from "react-icons/fa6";
import { Header } from "@/components/Header";
import Head from "next/head";
import { useTranslations } from "next-intl";
import { questionEn, questionId, Test } from "@/etc/question";
import { useRouter } from "next/router";

export default function Quiz() {
  const t = useTranslations("Quiz");
  const router = useRouter();

  const [answer, setAnswer] = useState("e");
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem("quizData");
    if (storedData) {
      const result = JSON.parse(storedData);
      setData(result);
      if (result.length == 70) {
        router.push("/report");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const saveData = () => {
    localStorage.setItem("quizData", JSON.stringify([...data, answer]));
    setData([...data, answer]);
    if (data.length + 1 == 70) {
      router.push("/report");
    }
    setAnswer("e");
  };

  const questions: Test[] = router.locale == "id" ? questionId : questionEn;

  return (
    <div className="flex flex-col landscape:h-screen potrait:h-full justify-center select-none ">
      <Head>
        <title>{t("title")}</title>
      </Head>
      <Header />

      <div className="pt-10 pe-10 ps-10 mt-8 sm:mt-0 flex-grow content-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          {questions[data.length]?.question}
        </h1>
        <RadioGroup
          value={answer}
          onValueChange={setAnswer}
          classNames={{
            base: "mt-6",
            wrapper: "!flex-row data-[orientation=horizontal]:!flex-col gap-6",
          }}
        >
          <CustomRadio value="a">
            <div className="text-2xl py-2 px-4 leading-normal">
              {questions[data.length]?.answerA}
            </div>
          </CustomRadio>
          <CustomRadio value="b">
            <div className="text-2xl py-2 px-4 leading-normal">
              {questions[data.length]?.answerB}
            </div>
          </CustomRadio>
        </RadioGroup>
      </div>
      <div className=" me-4 my-6 sm:mt-0 mb-6 sm:mb-4 flex flex-col sm:flex-row">
        <Progress
          color="default"
          aria-label="Loading..."
          value={(data.length / questions.length) * 100}
          classNames={{
            base: "pt-4 sm:pt-0 px-10 w-screen justify-end mb-2",
            indicator: "bg-black/80 dark:bg-white/80",
          }}
          className=""
        />
        <div className="w-24 md:w-28 h-24 md:h-28 mt-10 mb-4 me-4 sm:mt-0 sm:mb-2 sm:me-0 self-end sm:self-auto">
          <Button
            isIconOnly
            className="w-24 md:w-28 h-24 md:h-28 border-black dark:border-white border-4 bg-white dark:bg-black"
            variant="shadow"
            radius="full"
            aria-label="Next"
            onClick={saveData}
          >
            <FaArrowRight className="w-10 h-10 text-black dark:text-white" />
          </Button>
        </div>
      </div>
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
