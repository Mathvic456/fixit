"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, DollarSign, Users } from "lucide-react"
import { StaggerContainer, StaggerItem } from "../loading-animations"

interface CareersModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CareersModal({ open, onOpenChange }: CareersModalProps) {
  const jobOpenings = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Till you decide to give up",
      salary: "Mistakes, Corrections and Experience",
      description: "Build scalable systems that connect millions of users with trusted technicians across Africa.",
    },
    {
      title: "Product Manager",
      department: "Product",
       location: "Remote",
      type: "Till you decide to give up",
      salary: "Mistakes, Corrections and Experience",
      description: "Drive product strategy and roadmap for our core marketplace platform.",
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
       location: "Remote",
      type: "Till you decide to give up",
      salary: "Mistakes, Corrections and Experience",
      description: "Ensure customer satisfaction and drive retention across our growing user base.",
    },
    {
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Till you decide to give up",
      salary: "Mistakes, Corrections and Experience",
      description: "Develop and execute marketing campaigns to grow our brand across African markets.",
    },
  ]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto mx-2 sm:mx-4 my-4 sm:my-8">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-slate-800 mb-4">Join Our Team</DialogTitle>
        </DialogHeader>

        <StaggerContainer className="space-y-4 sm:space-y-6 p-2 sm:p-0">
          <StaggerItem>
            <div className="text-center space-y-4">
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Help us revolutionize home and business maintenance across Africa. Join a team that's making a real
                impact.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bg-gradient-to-r from-orange-50 to-slate-50 rounded-lg p-4 sm:p-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Why Work at Fixit?</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-orange-600" />
                    <span className="font-medium">Diverse & Inclusive Team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    <span className="font-medium">Competitive Compensation</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">Flexible Work Arrangements</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    <span className="font-medium">Multiple Office Locations</span>
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-800">Open Positions</h3>
              <div className="space-y-4">
                {jobOpenings.map((job, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-slate-800">{job.title}</h4>
                        <p className="text-sm text-gray-600">{job.department}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">{job.type}</span>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">{job.salary}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3">{job.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <Button size="sm" className="bg-slate-800 hover:bg-slate-700">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bg-slate-50 rounded-lg p-4 sm:p-6 text-center">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Don't see the right role?</h3>
              <p className="text-gray-600 mb-4">
                We're always looking for talented people. Send us your resume and tell us how you'd like to contribute.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">Send Resume</Button>
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
