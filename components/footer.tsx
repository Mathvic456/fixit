"use client"

import { useState } from "react"
import Link from "next/link"
import { Wrench, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { AboutUsModal } from "./modals/about-us-modal"
import { HowItWorksModal } from "./modals/how-it-works-modal"
import { BecomeTechnicianModal } from "./modals/become-technician-modal"
import { CareersModal } from "./modals/careers-modal"
import { PressModal } from "./modals/press-modal"
import { BlogModal } from "./modals/blog-modal"
import { PrivacyPolicyModal } from "./modals/privacy-policy-modal"
import { TermsOfServiceModal } from "./modals/terms-of-service-modal"
import { HelpCenterModal } from "./modals/help-center-modal"

export function Footer() {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const openModal = (modalName: string) => {
    setActiveModal(modalName)
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  return (
    <>
      <footer className="bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Company Info */}
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 bg-orange-500 rounded">
                  <Wrench className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">fixit</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                Africa's smartest technician-matching platform. Connecting you with verified professionals for all your
                repair and maintenance needs.
              </p>
              <div className="flex space-x-4">
                {/* <Link href="https://www.instagram.com/fixi.tng/"> */}
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                {/* </Link> */}

                <Link href="https://x.com/ng_fixit">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                </Link>
                
                <Link href="https://www.instagram.com/fixi.tng/">
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                </Link>

                <a href="mailto:fixitfrontdesk@gmail.com">
                <Mail className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Services</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Plumbing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Electrical
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Appliance Repair
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    HVAC
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Solar Installation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    General Handyman
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <button onClick={() => openModal("about")} className="hover:text-white transition-colors text-left">
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openModal("howItWorks")}
                    className="hover:text-white transition-colors text-left"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openModal("technician")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Become a Technician
                  </button>
                </li>
                <li>
                  <button onClick={() => openModal("careers")} className="hover:text-white transition-colors text-left">
                    Careers
                  </button>
                </li>
                <li>
                  <button onClick={() => openModal("press")} className="hover:text-white transition-colors text-left">
                    Press
                  </button>
                </li>
                <li>
                  <button onClick={() => openModal("blog")} className="hover:text-white transition-colors text-left">
                    Blog
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact</h3>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="break-all">fixitfrontdesk@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+234 7062 3919 97</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span>Lagos, Nigeria</span>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-300">
                <button
                  onClick={() => openModal("privacy")}
                  className="block hover:text-white transition-colors text-left"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => openModal("terms")}
                  className="block hover:text-white transition-colors text-left"
                >
                  Terms of Service
                </button>
                <button
                  onClick={() => openModal("help")}
                  className="block hover:text-white transition-colors text-left"
                >
                  Help Center
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400">
            <p>&copy; 2025 Fixit. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* All Modals */}
      <AboutUsModal open={activeModal === "about"} onOpenChange={closeModal} />
      <HowItWorksModal open={activeModal === "howItWorks"} onOpenChange={closeModal} />
      <BecomeTechnicianModal open={activeModal === "technician"} onOpenChange={closeModal} />
      <CareersModal open={activeModal === "careers"} onOpenChange={closeModal} />
      <PressModal open={activeModal === "press"} onOpenChange={closeModal} />
      <BlogModal open={activeModal === "blog"} onOpenChange={closeModal} />
      <PrivacyPolicyModal open={activeModal === "privacy"} onOpenChange={closeModal} />
      <TermsOfServiceModal open={activeModal === "terms"} onOpenChange={closeModal} />
      <HelpCenterModal open={activeModal === "help"} onOpenChange={closeModal} />
    </>
  )
}
