"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, FileText, CheckCircle } from "lucide-react"
import { useTranslations } from "next-intl"

export default function Portfolio() {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const t = useTranslations("portfolio")
  const tCommon = useTranslations("common")

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          }
        })
      },
      { threshold: 0.1 },
    )

    const animatedElements = document.querySelectorAll(".reveal-animation, .staggered-animation")
    animatedElements.forEach((el) => {
      observerRef.current?.observe(el)
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/90 to-secondary-blue/90"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">{t("hero.title")}</h1>
            <p className="text-lg md:text-xl text-light-blue/90 mb-8">{t("hero.subtitle")}</p>
          </div>
        </div>
      </section>

      {/* Portfolio Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-blue">{t("clients.title")}</h2>
            <p className="text-lg text-slate-600">{t("clients.subtitle")}</p>
          </div>

          <div className="reveal-animation mb-16">
            <div className="relative w-full h-auto">
              <Image src="/images/portfolio.png" alt="Portofolio Klien" width={1200} height={600} className="mx-auto" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 staggered-animation">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-light-blue/20 p-3 rounded-full w-fit mb-6">
                <FileText className="text-primary-blue" size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary-blue mb-3">Sektor Perbankan</h3>
              <p className="text-slate-600 mb-4">
                Kami telah membantu berbagai institusi perbankan dalam kepatuhan regulasi dan penyusunan kontrak.
              </p>
              <ul className="space-y-2 mb-6 text-slate-600">
                <li className="flex items-start">
                  <CheckCircle className="text-primary-blue mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>Bank Syariah Indonesia (BSI)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary-blue mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>KB Bukopin</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary-blue mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>Bumiputera Syariah</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-light-blue/20 p-3 rounded-full w-fit mb-6">
                <FileText className="text-primary-blue" size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary-blue mb-3">Sektor Pendidikan</h3>
              <p className="text-slate-600 mb-4">
                Kami menyediakan konsultasi hukum untuk institusi pendidikan terkait regulasi dan kepatuhan.
              </p>
              <ul className="space-y-2 mb-6 text-slate-600">
                <li className="flex items-start">
                  <CheckCircle className="text-primary-blue mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>YPAN (Yayasan Pendidikan)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary-blue mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>SMP-SMA-SMK Nusantara 1 Kota Tangerang</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary-blue mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>Lembaga Akreditasi Pendidikan</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-light-blue/20 p-3 rounded-full w-fit mb-6">
                <FileText className="text-primary-blue" size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary-blue mb-3">Sektor Teknologi</h3>
              <p className="text-slate-600 mb-4">
                Kami membantu perusahaan teknologi dalam perlindungan kekayaan intelektual dan kepatuhan regulasi.
              </p>
              <ul className="space-y-2 mb-6 text-slate-600">
                <li className="flex items-start">
                  <CheckCircle className="text-primary-blue mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>Prunus DigiApps</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary-blue mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>PT Elzeki Sinar Abadi Gemilang</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary-blue mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>Mitra Usaha Sarana</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center reveal-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Untuk Menjadi Klien Berikutnya?</h2>
            <p className="text-lg text-light-blue/90 mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan daftar klien puas kami. Jadwalkan konsultasi gratis dengan tim ahli kami untuk
              mendiskusikan kebutuhan hukum bisnis Anda.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-primary-blue px-8 py-4 rounded-md font-medium text-lg hover:bg-light-blue transition-colors"
            >
              Konsultasi Gratis <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
