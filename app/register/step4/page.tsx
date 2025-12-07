"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { CheckCircle, User, Briefcase, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Step4Page() {
  const router = useRouter()
  const [formData, setFormData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const savedData = localStorage.getItem('registrationData')
    if (savedData) {
      setFormData(JSON.parse(savedData))
    }
  }, [])

  const handleComplete = async () => {
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Clear localStorage
    localStorage.removeItem('registrationData')
    
    // Redirect to dashboard
    router.push('/dashboard')
    setIsLoading(false)
  }

  if (!formData) {
    return (
      <div className="p-8 text-center">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="p-6 md:p-8">
      <CardHeader className="text-center">
        <div className="w-24 h-24 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
        
        <CardTitle className="text-3xl">Welcome to NETWORKX! </CardTitle>
        <p className="text-gray-600 text-lg">
          Your account has been successfully created
        </p>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-6 max-w-md mx-auto">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">{formData.fullName}</p>
                    <p className="text-sm text-gray-600">{formData.email}</p>
                  </div>
                </div>
                
                {formData.jobTitle && (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Briefcase className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium">{formData.jobTitle}</p>
                      {formData.company && (
                        <p className="text-sm text-gray-600">{formData.company}</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="text-gray-600 space-y-2">
            <p className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Your profile is now active
            </p>
            <p className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              You can start applying for jobs immediately
            </p>
            <p className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Check your email for a welcome package
            </p>
          </div>

          <div className="pt-6 border-t">
            <Button
              onClick={handleComplete}
              disabled={isLoading}
              className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              {isLoading ? "Processing..." : "Go to Dashboard"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </div>
  )
}