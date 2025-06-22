import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Wrench, ShieldCheck, Star, ClipboardCheck } from "lucide-react"
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
          <DialogTitle className="text-2xl font-bold text-center text-slate-800 mb-4">About FixIt</DialogTitle>
        </DialogHeader>

        <StaggerContainer className="space-y-4 sm:space-y-6 p-2 sm:p-0">
          <StaggerItem>
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-orange-100 rounded-full">
                <Wrench className="w-8 h-8 text-orange-600" />
              </div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                FixIt connects you with trusted technicians, backed by our 
                <span className="font-semibold text-slate-800"> quality guarantee</span>. 
                No more unreliable repairs or hidden fees—just solutions you can count on.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bg-gradient-to-r from-orange-50 to-slate-50 rounded-lg p-4 sm:p-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Our Promise</h3>
              <p className="text-gray-700 leading-relaxed">
                We vet every technician, enforce transparent pricing, and hold providers accountable for their work. 
                If you’re not satisfied, we’ll make it right—because 
                <span className="font-semibold"> quality service shouldn’t be a gamble</span>.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center w-12 h-12 mx-auto bg-blue-100 rounded-full">
                  <ShieldCheck className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-slate-800">100% Vetted</h4>
                <p className="text-sm text-gray-600">Background checks & skill verified</p>
              </div>
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full">
                  <ClipboardCheck className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-slate-800">30-Day Guarantee</h4>
                <p className="text-sm text-gray-600">Free fixes if issues recur</p>
              </div>
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center w-12 h-12 mx-auto bg-purple-100 rounded-full">
                  <Star className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-slate-800">4.9/5</h4>
                <p className="text-sm text-gray-600">Average customer rating</p>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-800">Why FixIt Exists</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  After one too many experiences with unqualified technicians and disappearing handymen, 
                  we built FixIt to <span className="font-semibold">eliminate the stress of home repairs</span>. 
                  Our platform ensures every job is done right—with clear pricing, real reviews, 
                  and a team that has your back.
                </p>
                <p>
                  We empower technicians too. By rewarding quality work with more jobs and fair pay, 
                  we’re raising the bar for service standards across Africa.
                </p>
                <p>
                  Join thousands who’ve said goodbye to repair headaches. 
                  <span className="font-semibold"> Try FixIt today—where every fix is guaranteed</span>.
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