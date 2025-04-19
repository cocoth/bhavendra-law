"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Shield, Scale, FileText, Users, Award, Building, ArrowRight } from "lucide-react"

export default function Services() {
  const observerRef = useRef<IntersectionObserver | null>(null)

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">Layanan Kami</h1>
            <p className="text-lg md:text-xl text-light-blue/90 mb-8">
              Solusi hukum komprehensif untuk memenuhi kebutuhan bisnis Anda
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-blue">Layanan Hukum Komprehensif</h2>
            <p className="text-lg text-slate-600">
              PT Bhavendra Legal Konsultan menawarkan berbagai layanan hukum untuk membantu bisnis Anda berkembang
              dengan landasan hukum yang kuat.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 staggered-animation">
            <div className="service-card">
              <div className="bg-light-blue/20 p-3 rounded-full w-fit mb-6">
                <Shield className="text-primary-blue" size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary-blue mb-3">Konsultasi Hukum Bisnis</h3>
              <p className="text-slate-600 mb-4">
                Konsultasi komprehensif untuk berbagai aspek hukum bisnis, termasuk pendirian, restrukturisasi, dan
                pengembangan perusahaan.
              </p>
              <ul className="space-y-2 mb-6 text-slate-600">
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">•</span>
                  Analisis risiko hukum
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">•</span>
                  Perencanaan bisnis
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">•</span>
                  Strategi kepatuhan hukum
                </li>
              </ul>
              <Link href="/contact" className="flex items-center text-primary-blue font-medium hover:underline">
                Konsultasi Sekarang <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="service-card">
              <div className="bg-light-blue/20 p-3 rounded-full w-fit mb-6">
                <Building className="text-primary-blue" size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary-blue mb-3">Pendirian Perusahaan</h3>
              <p className="text-slate-600 mb-4">
                Layanan lengkap untuk pendirian berbagai jenis badan usaha di Indonesia, termasuk PT, CV, dan perusahaan
                asing.
              </p>
              <ul className="space-y-2 mb-6 text-slate-600">
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">•</span>
                  Penyusunan akta pendirian
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">•</span>
                  Pengurusan izin usaha
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">•</span>
                  Pendaftaran perusahaan
                </li>
              </ul>
              <Link href="/contact" className="flex items-center text-primary-blue font-medium hover:underline">
                Konsultasi Sekarang <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="service-card">
              <div className="bg-light-blue/20 p-3 rounded-full w-fit mb-6">
                <FileText className="text-primary-blue" size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary-blue mb-3">Kontrak & Perjanjian</h3>
              <p className="text-slate-600 mb-4">
                Penyusunan, peninjauan, dan negosiasi berbagai jenis kontrak bisnis untuk melindungi kepentingan
                perusahaan Anda.
              </p>
              <ul className="space-y-2 mb-6 text-slate-600">
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">•</span>
                  Perjanjian komersial
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">•</span>
                  Kontrak kerjasama
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">•</span>
                  Perjanjian kerahasiaan
                </li>
              </ul>
              <Link href="/contact" className="flex items-center text-primary-blue font-medium hover:underline">
                Konsultasi Sekarang <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="service-card">
              <div className="bg-light-blue/20 p-3 rounded-full w-fit mb-6">
                <Scale className="text-primary-blue" size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary-blue mb-3">Litigasi & Arbitrase</h3>
              <p className="text-slate-600 mb-4">
                Representasi hukum dalam penyelesaian sengketa bisnis melalui litigasi di pengadilan atau melalui
                arbitrase.
              </p>
              <ul className="space-y-2 mb-6 text-slate-600">
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">•</span>
                  Sengketa komersial
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">•</span>
                  Arbitrase bisnis
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">•</span>
                  Mediasi dan negosiasi
                </li>
              </ul>
              <Link href="/contact" className="flex items-center text-primary-blue font-medium hover:underline">
                Konsultasi Sekarang <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="service-card">
              <div className="bg-light-blue/20 p-3 rounded-full w-fit mb-6">
                <Users className="text-primary-blue" size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary-blue mb-3">Hukum Ketenagakerjaan</h3>
              <p className="text-slate-600 mb-4">
                Konsultasi dan pendampingan dalam masalah ketenagakerjaan, termasuk penyusunan peraturan perusahaan dan
                penyelesaian perselisihan.
              </p>
              <ul className="space-y-2 mb-6 text-slate-600">
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">•</span>
                  Perjanjian kerja
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">•</span>
                  Peraturan perusahaan
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">•</span>
                  Penyelesaian perselisihan
                </li>
              </ul>
              <Link href="/contact" className="flex items-center text-primary-blue font-medium hover:underline">
                Konsultasi Sekarang <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="service-card">
              <div className="bg-light-blue/20 p-3 rounded-full w-fit mb-6">
                <Award className="text-primary-blue" size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary-blue mb-3">Kekayaan Intelektual</h3>
              <p className="text-slate-600 mb-4">
                Pendaftaran dan perlindungan hak kekayaan intelektual, termasuk merek dagang, hak cipta, dan paten.
              </p>
              <ul className="space-y-2 mb-6 text-slate-600">
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">•</span>
                  Pendaftaran merek
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">•</span>
                  Perlindungan hak cipta
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">•</span>
                  Lisensi dan perjanjian IP
                </li>
              </ul>
              <Link href="/contact" className="flex items-center text-primary-blue font-medium hover:underline">
                Konsultasi Sekarang <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="diagonal-section">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Bagaimana Kami Bekerja</h2>
            <p className="text-lg text-light-blue/90">
              Proses kami yang terstruktur memastikan solusi hukum yang efektif untuk kebutuhan bisnis Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 text-white reveal-animation">
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-white/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Konsultasi Awal</h3>
                    <p className="text-light-blue/90">
                      Kami memulai dengan konsultasi mendalam untuk memahami kebutuhan dan tantangan hukum bisnis Anda.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-white/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Analisis Hukum</h3>
                    <p className="text-light-blue/90">
                      Tim ahli kami melakukan analisis mendalam terhadap situasi hukum Anda dan mengidentifikasi risiko
                      potensial.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-white/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Pengembangan Strategi</h3>
                    <p className="text-light-blue/90">
                      Kami mengembangkan strategi hukum yang disesuaikan dengan kebutuhan spesifik bisnis Anda.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-white/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Implementasi</h3>
                    <p className="text-light-blue/90">
                      Kami mengimplementasikan solusi hukum yang telah disepakati dengan pendekatan yang terstruktur dan
                      efisien.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-white/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Evaluasi & Dukungan Berkelanjutan</h3>
                    <p className="text-light-blue/90">
                      Kami terus mengevaluasi hasil dan memberikan dukungan hukum berkelanjutan untuk memastikan
                      keberhasilan jangka panjang.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 reveal-animation">
              <div className="relative">
                <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
                  <Image src="/placeholder.svg?height=500&width=700" alt="Our Process" fill className="object-cover" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl">
                  <div className="text-primary-blue">
                    <h3 className="text-2xl font-bold mb-2">100+</h3>
                    <p>Klien Puas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary-blue text-white p-8 md:p-12 rounded-lg shadow-xl reveal-animation">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Untuk Memulai?</h2>
                <p className="text-lg text-light-blue/90 mb-8">
                  Jadwalkan konsultasi dengan tim ahli kami untuk mendiskusikan kebutuhan hukum bisnis Anda dan temukan
                  solusi yang tepat.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-white text-primary-blue px-8 py-4 rounded-md font-medium text-lg hover:bg-light-blue transition-colors"
                >
                  Hubungi Kami Sekarang <ArrowRight size={20} className="ml-2" />
                </Link>
              </div>

              <div className="hidden md:block">
                <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Legal Consultation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
