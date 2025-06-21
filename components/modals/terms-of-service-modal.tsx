"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { FileText, AlertTriangle, Scale, CreditCard, Users, Shield } from "lucide-react"
import { StaggerContainer, StaggerItem } from "../loading-animations"

interface TermsOfServiceModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function TermsOfServiceModal({ open, onOpenChange }: TermsOfServiceModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto mx-2 sm:mx-4 my-4 sm:my-8">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-slate-800 mb-4">Terms of Service</DialogTitle>
        </DialogHeader>

        <StaggerContainer className="space-y-4 sm:space-y-6 p-2 sm:p-0">
          <StaggerItem>
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-green-100 rounded-full">
                <FileText className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These terms govern your use of Fixit's platform and services. Please read them carefully.
              </p>
              <p className="text-sm text-gray-500">Last updated: December 15, 2025</p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 sm:p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-amber-800 mb-2">Important Notice</h3>
                  <p className="text-sm text-amber-700">
                    By using Fixit's services, you agree to these terms. If you don't agree, please don't use our
                    platform. These terms may be updated periodically, and continued use constitutes acceptance of
                    changes.
                  </p>
                </div>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  1. Platform Overview
                </h3>
                <div className="space-y-3 text-gray-700 text-sm">
                  <p>
                    Fixit is a digital marketplace that connects customers with verified technicians for home and
                    business services. We facilitate these connections but are not directly responsible for the services
                    performed.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                    <h4 className="font-medium text-slate-800 mb-2">Our Role:</h4>
                    <ul className="list-disc list-inside space-y-1 text-xs">
                      <li>Provide the technology platform for connections</li>
                      <li>Verify technician credentials and background</li>
                      <li>Process payments securely</li>
                      <li>Provide customer support and dispute resolution</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-purple-600" />
                  2. User Responsibilities
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-slate-800 mb-2">Customers Must:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li>Provide accurate service information</li>
                      <li>Be present during scheduled services</li>
                      <li>Pay for completed services promptly</li>
                      <li>Treat technicians with respect</li>
                      <li>Report issues through proper channels</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 mb-2">Technicians Must:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li>Maintain valid licenses and insurance</li>
                      <li>Arrive on time and prepared</li>
                      <li>Perform work to professional standards</li>
                      <li>Communicate clearly with customers</li>
                      <li>Follow safety protocols</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-green-600" />
                  3. Payment Terms
                </h3>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="bg-green-50 rounded-lg p-3 sm:p-4">
                    <h4 className="font-medium text-green-800 mb-2">Payment Process:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-green-700">
                      <li>Service quotes provided upfront with no hidden fees</li>
                      <li>Payment authorized before service begins</li>
                      <li>Funds held securely until service completion</li>
                      <li>Payment released to technician after customer approval</li>
                      <li>Refunds processed for unsatisfactory work</li>
                    </ol>
                  </div>
                  <p>
                    <strong>Platform Fee:</strong> Fixit charges a service fee (typically 10-15%) included in the quoted
                    price. This covers platform maintenance, customer support, and payment processing.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-red-600" />
                  4. Liability and Insurance
                </h3>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4">
                    <h4 className="font-medium text-red-800 mb-2">Important Limitations:</h4>
                    <ul className="list-disc list-inside space-y-1 text-red-700">
                      <li>Fixit is not liable for technician work quality or damages</li>
                      <li>All technicians carry professional liability insurance</li>
                      <li>Disputes should be resolved directly with technicians first</li>
                      <li>Platform liability limited to service fees paid</li>
                    </ul>
                  </div>
                  <p>
                    We strongly recommend discussing insurance coverage with your technician before work begins,
                    especially for high-value items or complex installations.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">5. Prohibited Activities</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <h4 className="font-medium text-slate-800 mb-2">Strictly Forbidden:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Circumventing the platform for payments</li>
                      <li>Providing false information or reviews</li>
                      <li>Harassment or discriminatory behavior</li>
                      <li>Unauthorized use of platform data</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 mb-2">Consequences:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Account suspension or termination</li>
                      <li>Forfeiture of pending payments</li>
                      <li>Legal action if necessary</li>
                      <li>Reporting to relevant authorities</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">6. Dispute Resolution</h3>
                <div className="space-y-3 text-gray-700 text-sm">
                  <p>
                    We encourage direct communication between customers and technicians to resolve issues. If that
                    fails, our support team provides mediation services.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-3 sm:p-4">
                    <h4 className="font-medium text-blue-800 mb-2">Resolution Process:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-blue-700">
                      <li>Contact technician directly within 24 hours</li>
                      <li>If unresolved, contact Fixit support</li>
                      <li>Provide evidence (photos, documentation)</li>
                      <li>Fixit mediates and determines resolution</li>
                      <li>Final decisions are binding</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">7. Contact Information</h3>
                <div className="bg-slate-50 rounded-lg p-3 sm:p-4">
                  <p className="text-sm text-slate-700 mb-2">Questions about these terms? Contact our legal team:</p>
                  <div className="space-y-1 text-sm text-slate-600">
                    <p>
                      <strong>Email:</strong> legal@fixit.com
                    </p>
                    <p>
                      <strong>Address:</strong> 123 Tech Street, Lagos, Nigeria
                    </p>
                    <p>
                      <strong>Phone:</strong> +234 800 LEGAL (53425)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="text-center">
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
