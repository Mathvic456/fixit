"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileUpload } from "./file-upload"
import { LoadingSpinner } from "./loading-animations"
import { CheckCircle, MapPin, Calendar, Clock } from "lucide-react"

interface ServiceRequestFormProps {
  onSubmit?: (data: any) => void
  className?: string
}

export function ServiceRequestForm({ onSubmit, className = "" }: ServiceRequestFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    serviceType: "",
    description: "",
    preferredDate: "",
    preferredTime: "",
    images: [] as string[],
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const serviceTypes = [
    "Plumbing",
    "Electrical",
    "HVAC",
    "Appliance Repair",
    "Solar Installation",
    "Carpentry",
    "Painting",
    "Cleaning Services",
    "General Handyman",
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleImageUpload = (url: string) => {
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, url],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // Prepare form data for Formspree
      const formspreeData = new FormData()

      // Add all form fields
      formspreeData.append("name", formData.name)
      formspreeData.append("email", formData.email)
      formspreeData.append("phone", formData.phone)
      formspreeData.append("address", formData.address)
      formspreeData.append("serviceType", formData.serviceType)
      formspreeData.append("description", formData.description)
      formspreeData.append("preferredDate", formData.preferredDate)
      formspreeData.append("preferredTime", formData.preferredTime)
      formspreeData.append("images", formData.images.join(", "))

      // Add a subject line for better email organization
      formspreeData.append("_subject", `New Service Request: ${formData.serviceType} - ${formData.name}`)

      // Submit to Formspree
      const response = await fetch("https://formspree.io/f/xjkredrz", {
        method: "POST",
        body: formspreeData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setIsSubmitted(true)
        onSubmit?.(formData)
      } else {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to submit form")
      }
    } catch (error) {
      console.error("Submission error:", error)
      setSubmitError(error instanceof Error ? error.message : "Failed to submit request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className={`bg-white rounded-lg shadow-lg p-6 text-center space-y-4 ${className}`}>
        <div className="flex items-center justify-center w-16 h-16 mx-auto bg-green-100 rounded-full">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900">Request Submitted!</h3>
        <p className="text-gray-600">
          We've received your service request. A qualified technician will contact you within 24 hours.
        </p>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <p className="text-sm text-orange-800">
            <strong>What's next?</strong> You'll receive a confirmation email with your request details and estimated
            arrival time.
          </p>
        </div>
        <Button
          onClick={() => {
            setIsSubmitted(false)
            setFormData({
              name: "",
              email: "",
              phone: "",
              address: "",
              serviceType: "",
              description: "",
              preferredDate: "",
              preferredTime: "",
              images: [],
            })
          }}
          className="bg-slate-800 hover:bg-slate-700 text-white"
        >
          Submit Another Request
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`bg-white rounded-lg shadow-lg p-6 space-y-6 ${className}`}>
      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold text-gray-900">Request a Service</h3>
        <p className="text-gray-600">Tell us what you need and we'll match you with the right technician</p>
      </div>

      {submitError && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800 text-sm">{submitError}</p>
        </div>
      )}

      {/* Personal Information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <Input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            placeholder="Enter your full name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
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
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
          <Input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Service Type *</label>
          <Select value={formData.serviceType} onValueChange={(value) => handleInputChange("serviceType", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select service type" />
            </SelectTrigger>
            <SelectContent>
              {serviceTypes.map((service) => (
                <SelectItem key={service} value={service}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Address */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          <MapPin className="w-4 h-4 inline mr-1" />
          Service Address *
        </label>
        <Input
          type="text"
          value={formData.address}
          onChange={(e) => handleInputChange("address", e.target.value)}
          placeholder="Enter the address where service is needed"
          required
        />
      </div>

      {/* Scheduling */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <Calendar className="w-4 h-4 inline mr-1" />
            Preferred Date *
          </label>
          <Input
            type="date"
            value={formData.preferredDate}
            onChange={(e) => handleInputChange("preferredDate", e.target.value)}
            min={new Date().toISOString().split("T")[0]}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <Clock className="w-4 h-4 inline mr-1" />
            Preferred Time *
          </label>
          <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange("preferredTime", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
              <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
              <SelectItem value="evening">Evening (5PM - 8PM)</SelectItem>
              <SelectItem value="flexible">Flexible</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Problem Description *</label>
        <Textarea
          value={formData.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
          placeholder="Describe the problem in detail. What needs to be fixed or installed?"
          rows={4}
          required
        />
      </div>

      {/* Image Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Photos (Optional)</label>
        <p className="text-xs text-gray-500 mb-3">Upload photos of the problem to help technicians prepare better</p>
        <FileUpload onUpload={handleImageUpload} />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full bg-slate-800 hover:bg-slate-700 text-white py-3 text-lg disabled:opacity-50"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div className="flex items-center gap-2">
            <LoadingSpinner size="sm" />
            <span>Submitting Request...</span>
          </div>
        ) : (
          "Submit Service Request"
        )}
      </Button>
{/* 
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-xs text-blue-800 text-center">
          <strong>Note:</strong> To activate this form, replace "YOUR_FORM_ID" in the code with your actual Formspree
          form ID.
          <br />
          Create a free account at{" "}
          <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="underline">
            formspree.io
          </a>{" "}
          to get started.
        </p>
      </div> */}

      <p className="text-xs text-gray-500 text-center">
        By submitting this form, you agree to our Terms of Service and Privacy Policy
      </p>
    </form>
  )
}
