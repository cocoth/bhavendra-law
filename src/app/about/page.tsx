"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Users, Award, Target, BookOpen, ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"

export default function About() {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const t = useTranslations("about")
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

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="reveal-animation">
              <div className="relative">
                <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
                  <Image src="/images/law-team.png" alt="Bhavendra Team" fill className="object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary-blue p-6 rounded-lg shadow-xl">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">{t("story.foundedYear")}</h3>
                    <p>{t("story.foundedLabel")}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal-animation">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-blue">{t("story.title")}</h2>
              <p className="text-lg text-slate-600 mb-6">{t("story.paragraph1")}</p>
              <p className="text-lg text-slate-600 mb-6">{t("story.paragraph2")}</p>
              <p className="text-lg text-slate-600 mb-6">{t("story.paragraph3")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="diagonal-section">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Nilai-Nilai Kami</h2>
            <p className="text-lg text-light-blue/90">
              Prinsip-prinsip yang memandu kami dalam memberikan layanan terbaik untuk klien
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 staggered-animation">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-light-blue/20 p-3 rounded-full w-fit mb-6">
                <Award className="text-primary-blue" size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary-blue mb-3">Integritas</h3>
              <p className="text-slate-600">
                Kami menjunjung tinggi kejujuran dan etika profesional dalam setiap aspek pekerjaan kami.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-light-blue/20 p-3 rounded-full w-fit mb-6">
                <Target className="text-primary-blue" size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary-blue mb-3">Keunggulan</h3>
              <p className="text-slate-600">
                Kami berkomitmen untuk memberikan layanan hukum berkualitas tinggi yang melebihi ekspektasi klien.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-light-blue/20 p-3 rounded-full w-fit mb-6">
                <Users className="text-primary-blue" size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary-blue mb-3">Kolaborasi</h3>
              <p className="text-slate-600">
                Kami bekerja sama dengan klien untuk memahami kebutuhan mereka dan memberikan solusi yang tepat.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-light-blue/20 p-3 rounded-full w-fit mb-6">
                <BookOpen className="text-primary-blue" size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary-blue mb-3">Inovasi</h3>
              <p className="text-slate-600">
                Kami terus berinovasi untuk menemukan solusi hukum yang kreatif dan efektif bagi klien kami.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-blue">Tim Kami</h2>
            <p className="text-lg text-slate-600">
              Dipimpin oleh para profesional hukum berpengalaman yang berdedikasi untuk keberhasilan klien
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 staggered-animation">
            {[
              { id: 1, image: "/images/team-member-1.png" },
              { id: 2, image: "/images/team-member-2.png" },
              { id: 3, image: "/images/team-member-3.png" },
              { id: 4, image: "/images/team-member-4.png" },
              { id: 5, image: "/images/team-member-5.png" },
              { id: 6, image: "/images/team-member-6.png" },
            ].map((member) => (
              <div key={member.id} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={`Team Member ${member.id}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary-blue mb-1">Nama Lengkap</h3>
                <p className="text-accent-blue mb-4">Posisi / Spesialisasi</p>
                <p className="text-slate-600 mb-4">
                  Pengalaman lebih dari 10 tahun dalam bidang hukum bisnis dan korporasi.
                </p>
                <div className="flex justify-center gap-4">
                  <a href="#" className="text-primary-blue hover:text-accent-blue transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </a>
                  <a href="#" className="text-primary-blue hover:text-accent-blue transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </a>
                  <a href="#" className="text-primary-blue hover:text-accent-blue transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal-animation">
            <Link
              href="/contact"
              className="inline-flex items-center bg-primary-blue text-white px-6 py-3 rounded-md font-medium hover:bg-secondary-blue transition-colors"
            >
              Hubungi Tim Kami <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center reveal-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Butuh Konsultasi Hukum?</h2>
            <p className="text-lg text-light-blue/90 mb-8 max-w-2xl mx-auto">
              Tim ahli kami siap membantu Anda menyelesaikan tantangan hukum bisnis dengan solusi yang tepat.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-primary-blue px-8 py-4 rounded-md font-medium text-lg hover:bg-light-blue transition-colors"
            >
              Jadwalkan Konsultasi <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
