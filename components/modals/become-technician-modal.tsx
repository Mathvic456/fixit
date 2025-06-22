"use client"

import type React from "react"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { DollarSign, Clock, Users, Award, CheckCircle } from "lucide-react"
import { StaggerContainer, StaggerItem, LoadingSpinner } from "../loading-animations"
import { useState } from "react"

interface BecomeTechnicianModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function BecomeTechnicianModal({ open, onOpenChange }: BecomeTechnicianModalProps) {
  const [showApplication, setShowApplication] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    specialties: "",
    description: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/meoklygp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          location: formData.location,
          experience: formData.experience,
          specialties: formData.specialties,
          description: formData.description,
          formType: "Technician Application",
          submittedAt: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        // Reset form data
        setFormData({
          name: "",
          email: "",
          phone: "",
          location: "",
          experience: "",
          specialties: "",
          description: "",
        })
      } else {
        throw new Error("Failed to submit application")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      // You could add error state handling here
      alert("There was an error submitting your application. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md mx-4 sm:mx-0">
          <div className="text-center space-y-4 py-6">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-green-100 rounded-full">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Application Submitted!</h3>
            <p className="text-gray-600">
              Thank you for your interest in joining Fixit! We'll review your application and get back to you within 3-5
              business days.
            </p>
            <Button
              onClick={() => {
                setIsSubmitted(false)
                setShowApplication(false)
                onOpenChange(false)
              }}
              className="w-full bg-slate-800 hover:bg-slate-700"
            >
              Got it!
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto mx-2 sm:mx-4 my-4 sm:my-8">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-slate-800 mb-4">
            {showApplication ? "Join Our Network" : "Become a Fixit Technician"}
          </DialogTitle>
        </DialogHeader>

        {!showApplication ? (
          <StaggerContainer className="space-y-4 sm:space-y-6 p-2 sm:p-0">
            <StaggerItem>
              <div className="text-center">
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Join thousands of professional technicians earning more with flexible schedules and guaranteed
                  payments.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Earn More</h4>
                      <p className="text-sm text-gray-600">
                        Set your own rates and keep 85% of what you earn. Average technicians earn $2,000-5,000/month.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Flexible Schedule</h4>
                      <p className="text-sm text-gray-600">
                        Work when you want, where you want. Accept jobs that fit your schedule and location.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Steady Work</h4>
                      <p className="text-sm text-gray-600">
                        Access to thousands of customers across Africa. Never worry about finding your next job.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-6 h-6 text-orange-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Professional Growth</h4>
                      <p className="text-sm text-gray-600">
                        Training programs, certification support, and tools to grow your business.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 sm:p-6">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">Requirements</h3>
                <ul className="space-y-2 text-sm text-orange-700">
                  <li>• Minimum 2 years of professional experience in your field</li>
                  <li>• Valid ID and proof of address</li>
                  <li>• Professional references</li>
                  <li>• Own tools and transportation</li>
                  <li>• Smartphone with internet access</li>
                  <li>• Professional liability insurance (we can help you get this)</li>
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="text-center space-y-4">
                <Button
                  onClick={() => setShowApplication(true)}
                  className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 text-lg"
                >
                  Apply Now
                </Button>
                <p className="text-xs text-gray-500">Application takes 5-10 minutes to complete</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 p-2 sm:p-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <Input
                  type="text"
                  value={formData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  placeholder="City, Country"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
                <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2-5">2-5 years</SelectItem>
                    <SelectItem value="5-10">5-10 years</SelectItem>
                    <SelectItem value="10+">10+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Primary Specialty</label>
                <Select value={formData.specialties} onValueChange={(value) => handleInputChange("specialties", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select specialty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="plumbing">Plumbing</SelectItem>
                    <SelectItem value="electrical">Electrical</SelectItem>
                    <SelectItem value="hvac">HVAC</SelectItem>
                    <SelectItem value="appliance">Appliance Repair</SelectItem>
                    <SelectItem value="solar">Solar Installation</SelectItem>
                    <SelectItem value="carpentry">Carpentry</SelectItem>
                    <SelectItem value="painting">Painting</SelectItem>
                    <SelectItem value="general">General Handyman</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tell us about yourself</label>
              <Textarea
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                placeholder="Describe your experience, certifications, and what makes you a great technician..."
                rows={4}
                required
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                type="submit"
                className="flex-1 bg-slate-800 hover:bg-slate-700 text-white py-3 disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <LoadingSpinner size="sm" />
                    <span>Submitting...</span>
                  </div>
                ) : (
                  "Submit Application"
                )}
              </Button>
              <Button type="button" variant="outline" onClick={() => setShowApplication(false)} className="flex-1 py-3">
                Back
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
