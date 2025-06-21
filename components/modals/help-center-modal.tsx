"use client"

import type React from "react"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  HelpCircle,
  Search,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  Star,
  CreditCard,
  Users,
  Settings,
  AlertCircle,
} from "lucide-react"
import { StaggerContainer, StaggerItem, LoadingSpinner } from "../loading-animations"
import { useState } from "react"

interface HelpCenterModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function HelpCenterModal({ open, onOpenChange }: HelpCenterModalProps) {
  const [activeSection, setActiveSection] = useState<string>("faq")
  const [searchQuery, setSearchQuery] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  })

  const faqCategories = [
    {
      id: "booking",
      title: "Booking & Scheduling",
      icon: Clock,
      questions: [
        {
          q: "How do I book a technician?",
          a: "Simply describe your problem, select your preferred time, and we'll match you with available technicians in your area. You can book through our app or website.",
        },
        {
          q: "Can I reschedule my appointment?",
          a: "Yes, you can reschedule up to 2 hours before your appointment time through the app or by contacting support.",
        },
        {
          q: "What if no technicians are available?",
          a: "We'll notify you of the next available slots and can put you on a priority list for cancellations.",
        },
      ],
    },
    {
      id: "payment",
      title: "Payment & Pricing",
      icon: CreditCard,
      questions: [
        {
          q: "How is pricing determined?",
          a: "Pricing is based on service type, complexity, and local market rates. You'll see the full cost upfront with no hidden fees.",
        },
        {
          q: "When do I pay for services?",
          a: "Payment is authorized before service begins but only charged after successful completion and your approval.",
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards, debit cards, mobile money, and bank transfers depending on your location.",
        },
      ],
    },
    {
      id: "technicians",
      title: "Technicians & Quality",
      icon: Users,
      questions: [
        {
          q: "How are technicians verified?",
          a: "All technicians undergo background checks, skill assessments, insurance verification, and customer review monitoring.",
        },
        {
          q: "What if I'm not satisfied with the work?",
          a: "We offer a satisfaction guarantee. Contact us within 24 hours and we'll work to resolve the issue or provide a refund.",
        },
        {
          q: "Can I request a specific technician?",
          a: "Yes, you can request technicians you've worked with before, subject to their availability.",
        },
      ],
    },
    {
      id: "account",
      title: "Account & Settings",
      icon: Settings,
      questions: [
        {
          q: "How do I update my profile?",
          a: "Go to Settings in your account to update personal information, addresses, payment methods, and preferences.",
        },
        {
          q: "Can I delete my account?",
          a: "Yes, you can delete your account from Settings. Note that this action is permanent and cannot be undone.",
        },
        {
          q: "How do I change my password?",
          a: "Go to Settings > Security to change your password or reset it if you've forgotten it.",
        },
      ],
    },
  ]

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setContactForm({ name: "", email: "", subject: "", category: "", message: "" })
    alert("Message sent! We'll get back to you within 24 hours.")
  }

  const filteredFAQs = faqCategories.map((category) => ({
    ...category,
    questions: category.questions.filter(
      (q) =>
        q.q.toLowerCase().includes(searchQuery.toLowerCase()) || q.a.toLowerCase().includes(searchQuery.toLowerCase()),
    ),
  }))

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-5xl max-h-[90vh] overflow-y-auto mx-2 sm:mx-4 my-4 sm:my-8">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-slate-800 mb-4">Help Center</DialogTitle>
        </DialogHeader>

        <StaggerContainer className="space-y-4 sm:space-y-6 p-2 sm:p-0">
          <StaggerItem>
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-purple-100 rounded-full">
                <HelpCircle className="w-8 h-8 text-purple-600" />
              </div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions or get in touch with our support team.
              </p>
            </div>
          </StaggerItem>

          {/* Navigation */}
          <StaggerItem>
            <div className="flex flex-wrap gap-2 justify-center">
              <Button
                variant={activeSection === "faq" ? "default" : "outline"}
                onClick={() => setActiveSection("faq")}
                className={activeSection === "faq" ? "bg-slate-800 hover:bg-slate-700" : ""}
              >
                <HelpCircle className="w-4 h-4 mr-2" />
                FAQ
              </Button>
              <Button
                variant={activeSection === "contact" ? "default" : "outline"}
                onClick={() => setActiveSection("contact")}
                className={activeSection === "contact" ? "bg-slate-800 hover:bg-slate-700" : ""}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Contact Support
              </Button>
              <Button
                variant={activeSection === "status" ? "default" : "outline"}
                onClick={() => setActiveSection("status")}
                className={activeSection === "status" ? "bg-slate-800 hover:bg-slate-700" : ""}
              >
                <AlertCircle className="w-4 h-4 mr-2" />
                Service Status
              </Button>
            </div>
          </StaggerItem>

          {/* FAQ Section */}
          {activeSection === "faq" && (
            <StaggerItem>
              <div className="space-y-6">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Search for answers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* FAQ Categories */}
                <div className="space-y-6">
                  {filteredFAQs.map((category) => (
                    <div key={category.id} className="space-y-3">
                      <div className="flex items-center gap-2">
                        <category.icon className="w-5 h-5 text-orange-600" />
                        <h3 className="text-lg font-semibold text-slate-800">{category.title}</h3>
                      </div>
                      <div className="space-y-2">
                        {category.questions.map((faq, index) => (
                          <details key={index} className="border border-gray-200 rounded-lg">
                            <summary className="p-3 sm:p-4 cursor-pointer hover:bg-gray-50 flex items-center justify-between">
                              <span className="font-medium text-slate-800">{faq.q}</span>
                              <ChevronRight className="w-4 h-4 text-gray-400" />
                            </summary>
                            <div className="p-4 pt-0 text-gray-600 text-sm">{faq.a}</div>
                          </details>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          )}

          {/* Contact Support Section */}
          {activeSection === "contact" && (
            <StaggerItem>
              <div className="space-y-6">
                {/* Contact Options */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <Phone className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-medium text-slate-800">Phone Support</h4>
                    <p className="text-sm text-gray-600 mb-2">24/7 Emergency Support</p>
                    <p className="text-sm font-medium">+234 800 FIXIT</p>
                  </div>
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <MessageCircle className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-medium text-slate-800">Live Chat</h4>
                    <p className="text-sm text-gray-600 mb-2">Mon-Fri 8AM-8PM</p>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Start Chat
                    </Button>
                  </div>
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <Mail className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <h4 className="font-medium text-slate-800">Email Support</h4>
                    <p className="text-sm text-gray-600 mb-2">Response within 24 hours</p>
                    <p className="text-sm font-medium">support@fixit.com</p>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">Send us a message</h3>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        type="text"
                        placeholder="Your Name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        required
                      />
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        type="text"
                        placeholder="Subject"
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                        required
                      />
                      <Select
                        value={contactForm.category}
                        onValueChange={(value) => setContactForm({ ...contactForm, category: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="booking">Booking Issue</SelectItem>
                          <SelectItem value="payment">Payment Problem</SelectItem>
                          <SelectItem value="technician">Technician Feedback</SelectItem>
                          <SelectItem value="technical">Technical Issue</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Textarea
                      placeholder="Describe your issue or question..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      rows={4}
                      required
                    />
                    <Button
                      type="submit"
                      className="w-full bg-slate-800 hover:bg-slate-700 disabled:opacity-50"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <LoadingSpinner size="sm" />
                          <span>Sending...</span>
                        </div>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </StaggerItem>
          )}

          {/* Service Status Section */}
          {activeSection === "status" && (
            <StaggerItem>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-green-100 rounded-full mb-4">
                    <Star className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">All Systems Operational</h3>
                  <p className="text-gray-600">All Fixit services are running smoothly.</p>
                </div>

                <div className="space-y-4">
                  {[
                    { service: "Booking System", status: "Operational", color: "green" },
                    { service: "Payment Processing", status: "Operational", color: "green" },
                    { service: "Technician Matching", status: "Operational", color: "green" },
                    { service: "Mobile App", status: "Operational", color: "green" },
                    { service: "Customer Support", status: "Operational", color: "green" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 sm:p-4 border border-gray-200 rounded-lg"
                    >
                      <span className="font-medium text-slate-800">{item.service}</span>
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 bg-${item.color}-500 rounded-full`}></div>
                        <span className={`text-sm text-${item.color}-600`}>{item.status}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4">
                  <h4 className="font-medium text-blue-800 mb-2">Subscribe to Status Updates</h4>
                  <p className="text-sm text-blue-700 mb-3">
                    Get notified about service disruptions and maintenance windows.
                  </p>
                  <div className="flex gap-2">
                    <Input type="email" placeholder="Your email" className="flex-1" />
                    <Button className="bg-blue-600 hover:bg-blue-700">Subscribe</Button>
                  </div>
                </div>
              </div>
            </StaggerItem>
          )}

          <StaggerItem>
            <div className="text-center">
              <Button
                onClick={() => onOpenChange(false)}
                variant="outline"
                className="px-8 py-3 border-slate-300 text-slate-700 hover:bg-slate-50"
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
