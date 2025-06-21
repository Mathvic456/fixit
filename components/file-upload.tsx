"use client"

import type React from "react"

import { useState } from "react"
import { Upload, X } from "lucide-react"
import { LoadingSpinner } from "./loading-animations"

interface FileUploadProps {
  onUpload?: (url: string) => void
  accept?: string
  maxSize?: number
  className?: string
}

export function FileUpload({
  onUpload,
  accept = "image/*",
  maxSize = 5 * 1024 * 1024,
  className = "",
}: FileUploadProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (file.size > maxSize) {
      setError(`File size must be less than ${Math.round(maxSize / 1024 / 1024)}MB`)
      return
    }

    setIsUploading(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append("file", file)

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Upload failed")
      }

      const { url } = await response.json()
      setUploadedFiles((prev) => [...prev, url])
      onUpload?.(url)
    } catch (error) {
      setError("Failed to upload file. Please try again.")
      console.error("Upload error:", error)
    } finally {
      setIsUploading(false)
    }
  }

  const removeFile = (urlToRemove: string) => {
    setUploadedFiles((prev) => prev.filter((url) => url !== urlToRemove))
  }

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
        <input
          type="file"
          accept={accept}
          onChange={handleFileUpload}
          disabled={isUploading}
          className="hidden"
          id="file-upload"
        />
        <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center space-y-2">
          {isUploading ? <LoadingSpinner size="lg" /> : <Upload className="w-8 h-8 text-gray-400" />}
          <span className="text-sm text-gray-600">
            {isUploading ? "Uploading..." : "Click to upload or drag and drop"}
          </span>
          <span className="text-xs text-gray-400">PNG, JPG, GIF up to {Math.round(maxSize / 1024 / 1024)}MB</span>
        </label>
      </div>

      {error && <div className="text-red-600 text-sm bg-red-50 border border-red-200 rounded p-3">{error}</div>}

      {uploadedFiles.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700">Uploaded Files:</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {uploadedFiles.map((url, index) => (
              <div key={index} className="relative group">
                <img
                  src={url || "/placeholder.svg"}
                  alt={`Uploaded file ${index + 1}`}
                  className="w-full h-20 object-cover rounded border"
                />
                <button
                  onClick={() => removeFile(url)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
