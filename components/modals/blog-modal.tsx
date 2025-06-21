"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight, Tag } from "lucide-react"
import { StaggerContainer, StaggerItem } from "../loading-animations"

interface BlogModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function BlogModal({ open, onOpenChange }: BlogModalProps) {
  const blogPosts = [
    {
      title: "10 Essential Home Maintenance Tips for African Homeowners",
      excerpt:
        "Learn how to keep your home in top condition with these practical maintenance tips tailored for African climates and conditions.",
      author: "David Okafor",
      date: "December 10, 2025",
      category: "Home Maintenance",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "The Future of Solar Energy in Africa: What Homeowners Need to Know",
      excerpt:
        "Explore the growing solar energy market in Africa and how homeowners can benefit from renewable energy solutions.",
      author: "Amara Diallo",
      date: "December 5, 2025",
      category: "Solar Energy",
      readTime: "8 min read",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "How to Choose the Right Technician for Your Home Project",
      excerpt: "A comprehensive guide to selecting qualified professionals for your home improvement and repair needs.",
      author: "Sarah Johnson",
      date: "November 28, 2025",
      category: "Tips & Guides",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Smart Home Technology Trends in African Markets",
      excerpt:
        "Discover the latest smart home technologies gaining popularity across African markets and their practical applications.",
      author: "Michael Adebayo",
      date: "November 20, 2025",
      category: "Technology",
      readTime: "7 min read",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const categories = ["All", "Home Maintenance", "Solar Energy", "Tips & Guides", "Technology", "Business"]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-5xl max-h-[90vh] overflow-y-auto mx-2 sm:mx-4 my-4 sm:my-8">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-slate-800 mb-4">Fixit Blog</DialogTitle>
        </DialogHeader>

        <StaggerContainer className="space-y-4 sm:space-y-6 p-2 sm:p-0">
          <StaggerItem>
            <div className="text-center">
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Expert insights, tips, and stories about home maintenance, technology, and life across Africa.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className={category === "All" ? "bg-slate-800 hover:bg-slate-700" : ""}
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {category}
                </Button>
              ))}
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video bg-gray-200">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg?height=200&width=300"
                      }}
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </div>
                      </div>
                      <Button size="sm" variant="ghost" className="text-orange-600 hover:text-orange-700">
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bg-gradient-to-r from-orange-50 to-slate-50 rounded-lg p-4 sm:p-6 text-center">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Stay Updated</h3>
              <p className="text-gray-600 mb-4">
                Subscribe to our newsletter for the latest home maintenance tips, industry insights, and Fixit updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6">Subscribe</Button>
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
