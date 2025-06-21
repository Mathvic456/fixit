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
  const pressReleases = [
    {
      date: "December 15, 2025",
      title: "Fixit Raises $10M Series A to Expand Across Africa",
      excerpt:
        "Leading technician marketplace secures funding to accelerate growth and bring reliable home services to more African markets.",
      link: "#",
    },
    {
      date: "November 8, 2025",
      title: "Fixit Launches in Kenya and Ghana",
      excerpt:
        "Platform expansion brings verified technician services to East and West Africa, serving over 2 million new potential customers.",
      link: "#",
    },
    {
      date: "October 22, 2025",
      title: "Fixit Partners with Leading Insurance Companies",
      excerpt:
        "New partnerships provide comprehensive coverage for all services, enhancing customer confidence and technician protection.",
      link: "#",
    },
    {
      date: "September 5, 2025",
      title: "Fixit Reaches 10,000 Verified Technicians Milestone",
      excerpt:
        "Platform celebrates major growth milestone as demand for reliable home services continues to surge across Africa.",
      link: "#",
    },
  ]

  const mediaKit = [
    { name: "Fixit Logo Package", type: "ZIP", size: "2.3 MB" },
    { name: "Company Fact Sheet", type: "PDF", size: "1.1 MB" },
    { name: "Executive Photos", type: "ZIP", size: "5.7 MB" },
    { name: "Product Screenshots", type: "ZIP", size: "8.2 MB" },
  ]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto mx-2 sm:mx-4 my-4 sm:my-8">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-slate-800 mb-4">Press & Media</DialogTitle>
        </DialogHeader>

        <StaggerContainer className="space-y-4 sm:space-y-6 p-2 sm:p-0">
          <StaggerItem>
            <div className="text-center">
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Latest news, press releases, and media resources about Fixit's mission to revolutionize home services
                across Africa.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-800">Recent Press Releases</h3>
              <div className="space-y-4">
                {pressReleases.map((release, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-500">{release.date}</span>
                        </div>
                        <h4 className="text-lg font-semibold text-slate-800 mb-2">{release.title}</h4>
                        <p className="text-gray-600">{release.excerpt}</p>
                      </div>
                      <Button size="sm" variant="outline" className="ml-4 flex-shrink-0">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Read More
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-800">Media Kit</h3>
              <div className="bg-slate-50 rounded-lg p-4 sm:p-6">
                <p className="text-gray-600 mb-4">
                  Download our media kit for logos, photos, and other brand assets for editorial use.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {mediaKit.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white rounded border">
                      <div>
                        <p className="font-medium text-slate-800">{item.name}</p>
                        <p className="text-sm text-gray-500">
                          {item.type} • {item.size}
                        </p>
                      </div>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">Media Inquiries</h3>
              <div className="space-y-2 text-sm text-orange-700">
                <p>
                  <strong>Press Contact:</strong> Sarah Johnson, Head of Communications
                </p>
                <p>
                  <strong>Email:</strong> press@fixit.com
                </p>
                <p>
                  <strong>Phone:</strong> +234 800 PRESS (77377)
                </p>
                <p className="mt-3">
                  For interview requests, product demos, or additional information, please contact our press team. We
                  typically respond within 24 hours.
                </p>
              </div>
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
