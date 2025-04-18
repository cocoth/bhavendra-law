import Navbar from "@/components/custom/Navbar";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {

  const t = useTranslations("HomePage")

  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col justify-center items-center inset-0 h-screen bg-[url('/assets/landing-1-bg.jpg')]">
        <h1 className="font-poppins font-bold text-center text-4xl text-white ">
          {t("title")}
        </h1>
        <Button
          className="border bg-transparent rounded-full mt-3 py-5 px-6 text-2xl text-white font-bold hover:bg-gray-200 hover:text-black"
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
}
