"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Wrench, Users, Globe, Award } from "lucide-react"
import { StaggerContainer, StaggerItem } from "../loading-animations"

interface AboutUsModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AboutUsModal({ open, onOpenChange }: AboutUsModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto mx-2 sm:mx-4 my-4 sm:my-8">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-slate-800 mb-4">About Fixit</DialogTitle>
        </DialogHeader>

        <StaggerContainer className="space-y-4 sm:space-y-6 p-2 sm:p-0">
          <StaggerItem>
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-orange-100 rounded-full">
                <Wrench className="w-8 h-8 text-orange-600" />
              </div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Revolutionizing home and business maintenance across Africa through smart technology and trusted
                professionals.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bg-gradient-to-r from-orange-50 to-slate-50 rounded-lg p-4 sm:p-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To make reliable, professional technical services accessible to everyone across Africa. We believe that
                quality repairs and installations shouldn't be a luxury, but a standard that everyone deserves.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center w-12 h-12 mx-auto bg-blue-100 rounded-full">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-slate-800">10,000+</h4>
                <p className="text-sm text-gray-600">Verified Technicians</p>
              </div>
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full">
                  <Globe className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-slate-800">15</h4>
                <p className="text-sm text-gray-600">African Countries</p>
              </div>
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center w-12 h-12 mx-auto bg-purple-100 rounded-full">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-slate-800">99.5%</h4>
                <p className="text-sm text-gray-600">Customer Satisfaction</p>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-800">Our Story</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 2023 in Lagos, Nigeria, Fixit was born from a simple frustration: finding reliable
                  technicians shouldn't be so difficult. Our founders experienced firsthand the challenges of home
                  maintenance across Africa - from unreliable service providers to unclear pricing and poor
                  communication.
                </p>
                <p>
                  We set out to solve this problem by creating a platform that connects homeowners and businesses with
                  verified, professional technicians. Our technology ensures quality, transparency, and reliability in
                  every interaction.
                </p>
                <p>
                  Today, Fixit is expanding across Africa, empowering both customers and technicians with the tools they
                  need to succeed. We're not just a service platform - we're building the future of home and business
                  maintenance.
                </p>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="flex justify-center pt-4">
              <Button
                onClick={() => onOpenChange(false)}
                className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3"
              >
                Close
              </Button>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </DialogContent>
    </Dialog>
  )
}
