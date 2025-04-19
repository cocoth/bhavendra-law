"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/90 to-secondary-blue/90"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">Hubungi Kami</h1>
            <p className="text-lg md:text-xl text-light-blue/90 mb-8">
              Tim kami siap membantu Anda dengan kebutuhan hukum bisnis Anda
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-primary-blue mb-6">Informasi Kontak</h2>
              <p className="text-slate-600 mb-8">
                Jangan ragu untuk menghubungi kami dengan pertanyaan atau kebutuhan hukum bisnis Anda. Tim kami siap
                membantu Anda.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-blue rounded-full p-3 text-white mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary-blue mb-1">Alamat</h3>
                    <p className="text-slate-600">
                      Jl. Gatot Subroto No. 123
                      <br />
                      Jakarta Selatan, 12930
                      <br />
                      Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-blue rounded-full p-3 text-white mt-1">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary-blue mb-1">Email</h3>
                    <p className="text-slate-600">
                      info@bhavendra.com
                      <br />
                      support@bhavendra.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-blue rounded-full p-3 text-white mt-1">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary-blue mb-1">Telepon</h3>
                    <p className="text-slate-600">
                      +62 21 1234 5678
                      <br />
                      +62 812 3456 7890
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-blue rounded-full p-3 text-white mt-1">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary-blue mb-1">Jam Kerja</h3>
                    <p className="text-slate-600">
                      Senin - Jumat: 08:00 - 17:00
                      <br />
                      Sabtu: 09:00 - 13:00
                      <br />
                      Minggu: Tutup
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-primary-blue mb-6">Kirim Pesan</h2>

                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-md mb-6">
                    <p className="font-medium">Pesan Anda telah berhasil dikirim!</p>
                    <p>Tim kami akan segera menghubungi Anda.</p>
                  </div>
                ) : null}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                        Nomor Telepon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                        Subjek *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                      >
                        <option value="">Pilih Subjek</option>
                        <option value="Konsultasi Hukum Bisnis">Konsultasi Hukum Bisnis</option>
                        <option value="Pendirian Perusahaan">Pendirian Perusahaan</option>
                        <option value="Kontrak & Perjanjian">Kontrak & Perjanjian</option>
                        <option value="Litigasi & Arbitrase">Litigasi & Arbitrase</option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                      Pesan *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center bg-primary-blue text-white px-6 py-3 rounded-md font-medium hover:bg-secondary-blue transition-colors disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Kirim Pesan
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray">
        <div className="container mx-auto px-4">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="aspect-[16/9] w-full bg-slate-200 rounded-lg overflow-hidden">
              {/* Replace with actual map embed */}
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-slate-500">Peta Lokasi Kantor</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
