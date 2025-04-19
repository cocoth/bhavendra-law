"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Shield, Scale, FileText, Users, Award, ChevronRight, CheckCircle } from "lucide-react"
import { useTranslations } from "next-intl"

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const t = useTranslations("home")
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
      <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-blue)]/90 to-[var(--secondary-blue)]/90"></div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="mb-8 inline-block">
                <Image src="/images/logo.png" alt="Bhavendra Logo" width={80} height={80} className="mb-4 rounded-full" />
                <h2 className="text-xl font-medium text-light-blue">PT Bhavendra Legal Konsultan</h2>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">{t("hero.title")}</h1>

              <p className="text-lg md:text-xl text-light-blue/90 mb-8 max-w-xl">{t("hero.subtitle")}</p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-[var(--primary-blue)] px-6 py-3 rounded-md font-medium hover:bg-[var(--light-blue)] transition-colors"
                >
                  {t("hero.contactButton")}
                </Link>
                <Link
                  href="/services"
                  className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors"
                >
                  {t("hero.servicesButton")}
                </Link>
              </div>
            </div>

            <div className="hidden md:block relative">
              <div className="relative h-[500px] w-full">
                <Image
                  src="/images/hero-law-office.png"
                  alt="Legal Professionals"
                  fill
                  className="object-cover rounded-lg shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-[var(--primary-blue)] rounded-full p-2">
                    <Award className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--primary-blue)]">{t("hero.trustedLabel")}</h3>
                </div>
                <p className="text-slate-600">{t("hero.trustedText")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 reveal-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--primary-blue)]">{t("whyChooseUs.title")}</h2>
            <p className="text-lg text-slate-600">{t("whyChooseUs.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 staggered-animation">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-light-blue/20 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Users className="text-[var(--primary-blue)]" size={36} />
              </div>
              <h3 className="text-xl font-bold text-[var(--primary-blue)] mb-3">{t("whyChooseUs.expertTeam")}</h3>
              <p className="text-slate-600">{t("whyChooseUs.expertTeamDesc")}</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-light-blue/20 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Shield className="text-[var(--primary-blue)]" size={36} />
              </div>
              <h3 className="text-xl font-bold text-[var(--primary-blue)] mb-3">{t("whyChooseUs.personalApproach")}</h3>
              <p className="text-slate-600">{t("whyChooseUs.personalApproachDesc")}</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-light-blue/20 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Scale className="text-[var(--primary-blue)]" size={36} />
              </div>
              <h3 className="text-xl font-bold text-[var(--primary-blue)] mb-3">{t("whyChooseUs.innovativeSolutions")}</h3>
              <p className="text-slate-600">{t("whyChooseUs.innovativeSolutionsDesc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--primary-blue)]">{t("portfolio.title")}</h2>
            <p className="text-lg text-slate-600">{t("portfolio.subtitle")}</p>
          </div>

          <div className="reveal-animation">
            <div className="relative w-full h-auto mb-12">
              <Image src="/images/portfolio.png" alt="Portofolio Klien" width={1200} height={600} className="mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-[var(--primary-blue)] mb-4">{t("portfolio.corporateClients")}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-[var(--primary-blue)] mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Bank Syariah Indonesia (BSI) - Konsultasi kepatuhan syariah</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[var(--primary-blue)] mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>KB Bukopin - Penyusunan kontrak dan perjanjian</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[var(--primary-blue)] mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Bumiputera Syariah - Konsultasi regulasi asuransi</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[var(--primary-blue)] mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>PT Elzeki Sinar Abadi Gemilang - Pendirian perusahaan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[var(--primary-blue)] mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Mitra Usaha Sarana - Konsultasi hukum bisnis</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-[var(--primary-blue)] mb-4">{t("portfolio.institutionalClients")}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-[var(--primary-blue)] mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>YPAN - Konsultasi hukum yayasan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[var(--primary-blue)] mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>SMP-SMA-SMK Nusantara 1 Kota Tangerang - Konsultasi regulasi pendidikan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[var(--primary-blue)] mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Prunus DigiApps - Konsultasi hukum teknologi dan startup</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[var(--primary-blue)] mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Lembaga Akreditasi - Konsultasi kepatuhan dan sertifikasi</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--primary-blue)]">{t("testimonials.title")}</h2>
            <p className="text-lg text-slate-600">{t("testimonials.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 staggered-animation">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image src="/images/client-testimonial-1.png" alt="Client" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--primary-blue)]">Budi Santoso</h4>
                  <p className="text-slate-500 text-sm">Direktur, Bank Syariah Indonesia</p>
                </div>
              </div>
              <p className="text-slate-600 mb-4">
                "Meskipun PT Bhavendra Legal Konsultan adalah firma hukum yang relatif baru, mereka menunjukkan
                profesionalisme dan keahlian yang luar biasa dalam menangani kebutuhan hukum kami terkait kepatuhan
                syariah."
              </p>
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image src="/images/client-testimonial-2.png" alt="Client" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--primary-blue)]">Rini Anggraini</h4>
                  <p className="text-slate-500 text-sm">Kepala Sekolah, SMK Nusantara 1</p>
                </div>
              </div>
              <p className="text-slate-600 mb-4">
                "Tim Bhavendra sangat responsif dan memahami kebutuhan spesifik institusi pendidikan kami. Mereka
                memberikan solusi yang praktis dan sesuai dengan regulasi pendidikan terkini."
              </p>
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image src="/images/client-testimonial-3.png" alt="Client" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--primary-blue)]">Dimas Pratama</h4>
                  <p className="text-slate-500 text-sm">CEO, Prunus DigiApps</p>
                </div>
              </div>
              <p className="text-slate-600 mb-4">
                "Sebagai startup teknologi, kami membutuhkan konsultan hukum yang memahami industri kami. PT Bhavendra
                memberikan pendampingan yang sangat berharga dalam penyusunan kontrak dan perlindungan kekayaan
                intelektual kami."
              </p>
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="diagonal-section">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{t("services.title")}</h2>
            <p className="text-lg text-light-blue/90">{t("services.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 staggered-animation">
            <div className="service-card">
              <div className="bg-light-blue/20 p-3 rounded-full w-fit mb-6">
                <Shield className="text-[var(--primary-blue)]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[var(--primary-blue)] mb-3">{t("services.businessLegalConsultation")}</h3>
              <p className="text-slate-600 mb-4">{t("services.businessLegalConsultationDesc")}</p>
              <Link href="/services" className="flex items-center text-[var(--primary-blue)] font-medium hover:underline">
                {t("services.learnMore")} <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="service-card">
              <div className="bg-light-blue/20 p-3 rounded-full w-fit mb-6">
                <FileText className="text-[var(--primary-blue)]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[var(--primary-blue)] mb-3">{t("services.contractsAgreements")}</h3>
              <p className="text-slate-600 mb-4">{t("services.contractsAgreementsDesc")}</p>
              <Link href="/services" className="flex items-center text-[var(--primary-blue)] font-medium hover:underline">
                {t("services.learnMore")} <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="service-card">
              <div className="bg-light-blue/20 p-3 rounded-full w-fit mb-6">
                <Scale className="text-[var(--primary-blue)]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[var(--primary-blue)] mb-3">{t("services.litigationArbitration")}</h3>
              <p className="text-slate-600 mb-4">{t("services.litigationArbitrationDesc")}</p>
              <Link href="/services" className="flex items-center text-[var(--primary-blue)] font-medium hover:underline">
                {t("services.learnMore")} <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="service-card">
              <div className="bg-light-blue/20 p-3 rounded-full w-fit mb-6">
                <Users className="text-[var(--primary-blue)]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[var(--primary-blue)] mb-3">{t("services.employmentLaw")}</h3>
              <p className="text-slate-600 mb-4">{t("services.employmentLawDesc")}</p>
              <Link href="/services" className="flex items-center text-[var(--primary-blue)] font-medium hover:underline">
                {t("services.learnMore")} <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="service-card">
              <div className="bg-light-blue/20 p-3 rounded-full w-fit mb-6">
                <Award className="text-[var(--primary-blue)]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[var(--primary-blue)] mb-3">{t("services.intellectualProperty")}</h3>
              <p className="text-slate-600 mb-4">{t("services.intellectualPropertyDesc")}</p>
              <Link href="/services" className="flex items-center text-[var(--primary-blue)] font-medium hover:underline">
                {t("services.learnMore")} <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="service-card">
              <div className="bg-light-blue/20 p-3 rounded-full w-fit mb-6">
                <Shield className="text-[var(--primary-blue)]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[var(--primary-blue)] mb-3">{t("services.legalCompliance")}</h3>
              <p className="text-slate-600 mb-4">{t("services.legalComplianceDesc")}</p>
              <Link href="/services" className="flex items-center text-[var(--primary-blue)] font-medium hover:underline">
                {t("services.learnMore")} <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>

          <div className="text-center mt-12 reveal-animation">
            <Link
              href="/services"
              className="inline-flex items-center bg-white text-[var(--primary-blue)] px-6 py-3 rounded-md font-medium hover:bg-light-blue transition-colors"
            >
              {t("services.viewAllServices")} <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--primary-blue)] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center reveal-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("cta.title")}</h2>
            <p className="text-lg text-light-blue/90 mb-8 max-w-2xl mx-auto">{t("cta.subtitle")}</p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-[var(--primary-blue)] px-8 py-4 rounded-md font-medium text-lg hover:bg-light-blue transition-colors"
            >
              {t("cta.button")} <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
