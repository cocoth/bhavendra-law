import Navbar from "@/components/custom/Navbar";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {

  const t = useTranslations("HomePage")

  return (
    <div className="font-poppins">
      <Navbar />
      <div className="flex flex-col justify-center items-center gap-3 min-h-[calc(100dvh-8dvh)] bg-[url('/assets/landing-1-bg.jpg')]">
        <section className="flex space-x-2 items-center -translate-y-3/4 md:translate-y-0">
          <Image
            src={"/assets/favicon.png"}
            height={500}
            width={500}
            alt="logo"
            className="h-14 w-14 md:h-20 md:w-20 rounded-full"
          />
          <p className="max-w-28 md:max-w-36 font-bold text-left text-sm/4 md:text-lg/5 text-white">
            PT Bhavendra
            Legal
            Konsultan
          </p>
        </section>
        <section className="mt-10 -translate-y-3/4 md:translate-y-0">
          <h1 className="font-poppins max-w-[90dvw] md:max-w-2xl font-bold text-center text-4xl md:text-7xl text-white ">
            {t("title")}
          </h1>
        </section>
        <Button
          className="border bg-transparent rounded-full -translate-y-3/4 md:translate-y-0 mt-3 py-3 px-4 md:py-5 md:px-6 text-xl md:text-2xl text-white font-bold hover:bg-gray-100 hover:text-black cursor-pointer"
        >
          {t("cta")}
        </Button>
      </div>
    </div>
  );
}
