"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Calendar, Download, ExternalLink } from "lucide-react"
import { StaggerContainer, StaggerItem } from "../loading-animations"

interface PressModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PressModal({ open, onOpenChange }: PressModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto mx-2 sm:mx-4 my-4 sm:my-8">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-slate-800 mb-4">Press & Media</DialogTitle>
        </DialogHeader>

        <StaggerContainer className="space-y-4 sm:space-y-6 p-2 sm:p-0">
          <StaggerItem>
            <div className="text-center space-y-4">
              <div className="mx-auto max-w-2xl">
                <p className="text-lg text-gray-600 mb-2">
                  We're just getting started on our journey to revolutionize home services.
                </p>
                <p className="text-orange-600 font-medium">
                  Check back soon for updates, press releases, and media resources!
                </p>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bg-gradient-to-r from-orange-50 to-slate-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Stay Updated</h3>
              <p className="text-gray-700 mb-4">
                Subscribe to be the first to know about our launches, partnerships, and milestones.
              </p>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6">
                Join Our Mailing List
              </Button>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bg-slate-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Media Inquiries</h3>
              <p className="text-gray-700 mb-4">
                Interested in covering FixIt? We'd love to hear from you.
              </p>
              <Button variant="outline" className="border-slate-300 text-slate-700">
                Contact Our Team
              </Button>
            </div>
          </StaggerItem>

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