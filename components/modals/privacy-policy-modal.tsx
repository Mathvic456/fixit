"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Shield, Eye, Lock, Database, UserCheck, Globe } from "lucide-react"
import { StaggerContainer, StaggerItem } from "../loading-animations"

interface PrivacyPolicyModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PrivacyPolicyModal({ open, onOpenChange }: PrivacyPolicyModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto mx-2 sm:mx-4 my-4 sm:my-8">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-slate-800 mb-4">Privacy Policy</DialogTitle>
        </DialogHeader>

        <StaggerContainer className="space-y-4 sm:space-y-6 p-2 sm:p-0">
          <StaggerItem>
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-100 rounded-full">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Your privacy is important to us. This policy explains how we collect, use, and protect your personal
                information.
              </p>
              <p className="text-sm text-gray-500">Last updated: January 15, 2025</p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Quick Summary</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700">
                <div className="flex items-start gap-2">
                  <Eye className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>We only collect data necessary to provide our services</span>
                </div>
                <div className="flex items-start gap-2">
                  <Lock className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>Your data is encrypted and securely stored</span>
                </div>
                <div className="flex items-start gap-2">
                  <UserCheck className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>We never sell your personal information</span>
                </div>
                <div className="flex items-start gap-2">
                  <Globe className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>You have full control over your data</span>
                </div>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">1. Information We Collect</h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h4 className="font-medium text-slate-800 mb-2">Personal Information</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Name, email address, and phone number</li>
                      <li>Service address and location data</li>
                      <li>Payment information (processed securely by our payment partners)</li>
                      <li>Profile photos and service-related images</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 mb-2">Usage Information</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>App usage patterns and preferences</li>
                      <li>Service requests and booking history</li>
                      <li>Communication with technicians and support</li>
                      <li>Device information and IP address</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">2. How We Use Your Information</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">Matching you with qualified technicians in your area</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">Processing payments and managing your account</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">Providing customer support and resolving issues</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">Improving our services and developing new features</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">Sending important updates and promotional communications</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">3. Data Security</h3>
                <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Database className="w-5 h-5 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-medium text-slate-800 text-sm">Encryption</h4>
                        <p className="text-xs text-gray-600">All data is encrypted in transit and at rest</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Lock className="w-5 h-5 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-medium text-slate-800 text-sm">Secure Storage</h4>
                        <p className="text-xs text-gray-600">Data stored in certified secure facilities</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">4. Your Rights</h3>
                <div className="space-y-2 text-gray-700 text-sm">
                  <p>
                    <strong>Access:</strong> Request a copy of your personal data
                  </p>
                  <p>
                    <strong>Correction:</strong> Update or correct inaccurate information
                  </p>
                  <p>
                    <strong>Deletion:</strong> Request deletion of your personal data
                  </p>
                  <p>
                    <strong>Portability:</strong> Export your data in a machine-readable format
                  </p>
                  <p>
                    <strong>Opt-out:</strong> Unsubscribe from marketing communications
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">5. Contact Us</h3>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 sm:p-4">
                  <p className="text-sm text-orange-800 mb-2">
                    Questions about this privacy policy? Contact our Data Protection Officer:
                  </p>
                  <div className="space-y-1 text-sm text-orange-700">
                    <p>
                      <strong>Email:</strong> privacy@fixit.com
                    </p>
                    <p>
                      <strong>Address:</strong> 123 Tech Street, Lagos, Nigeria
                    </p>
                    <p>
                      <strong>Phone:</strong> +234 800 PRIVACY
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
