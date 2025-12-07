"use client"

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ArrowLeft } from 'lucide-react'

export default function Step1Page() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const role = searchParams.get('role') || 'employer'

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    experience: ''
  })

  useEffect(() => {
    // Load saved data
    const savedData = localStorage.getItem('registrationData')
    if (savedData) {
      const data = JSON.parse(savedData)
      setFormData(prev => ({ ...prev, ...data }))
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Save data
    const savedData = localStorage.getItem('registrationData')
    const existingData = savedData ? JSON.parse(savedData) : {}
    const newData = { ...existingData, ...formData }
    localStorage.setItem('registrationData', JSON.stringify(newData))
    
    // Navigate to next step
    router.push(`/register/step2?role=${role}`)
  }

  const roleSpecificFields = {
    employer: ['company', 'jobTitle'],
    trainer: ['experience', 'specialization'],
    agency: ['agencyName', 'licenseNumber']
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Basic Information</CardTitle>
          <p className="text-gray-600">
            Fill in your details to create your {role} account
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+880 1XXX XXXXXX"
                />
              </div>

              {role === 'employer' && (
                <>
                  <div>
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="jobTitle">Job Title *</Label>
                    <Input
                      id="jobTitle"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      placeholder="HR Manager, Recruiter, etc."
                      required
                    />
                  </div>
                </>
              )}

              {role === 'trainer' && (
                <div>
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Input
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="e.g., 5 years"
                  />
                </div>
              )}
            </div>

            <div className="flex justify-between pt-6 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push(`/register?role=${role}`)}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>

              <Button 
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}