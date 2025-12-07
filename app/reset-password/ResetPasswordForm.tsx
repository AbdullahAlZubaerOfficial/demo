"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Lock, Eye, EyeOff, CheckCircle, Shield, ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
import Image from 'next/image'

export default function ResetPasswordForm() {
  const router = useRouter()
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const passwordRequirements = [
    { text: 'At least 8 characters', met: false },
    { text: 'One uppercase letter', met: false },
    { text: 'One lowercase letter', met: false },
    { text: 'One number', met: false },
    { text: 'One special character', met: false },
  ]

  const checkPasswordStrength = (password: string) => {
    const requirements = [
      password.length >= 8,
      /[A-Z]/.test(password),
      /[a-z]/.test(password),
      /[0-9]/.test(password),
      /[^A-Za-z0-9]/.test(password),
    ]
    
    return passwordRequirements.map((req, index) => ({
      ...req,
      met: requirements[index]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.newPassword || formData.newPassword.length < 8) {
      alert("Password must be at least 8 characters")
      return
    }
    
    if (formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match")
      return
    }

    const requirements = checkPasswordStrength(formData.newPassword)
    const allMet = requirements.every(req => req.met)
    
    if (!allMet) {
      alert("Please meet all password requirements")
      return
    }

    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSuccess(true)
    
    // Redirect after success
    setTimeout(() => {
      router.push('/login')
    }, 2000)
    
    setIsLoading(false)
  }

  const currentRequirements = checkPasswordStrength(formData.newPassword)

  return (
    <Card className="border-none shadow-xl">
      <CardHeader className="text-center space-y-4">
        {/* Header with Logo */}
        <div className="flex flex-col items-center">
        
          <div className="text-center">
                              <Image
                                src="/neworkx-logo-blacktext (1) 1.png"
                                alt="Side Image"
                                width={140}
                                height={140}
                                className="h-auto mx-auto"
                                priority
                                sizes="(max-width: 768px) 80vw, 40vw"
                              />
                            </div>
        </div>

        <div className="pt-4">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="h-8 w-8 text-blue-600" />
          </div>
          <CardTitle className="text-2xl">Create new password</CardTitle>
          <p className="text-gray-600 text-sm">
            Your new password must be different from previously used passwords.
          </p>
        </div>
      </CardHeader>
      
      <CardContent>
        {isSuccess ? (
          <div className="text-center space-y-6 py-8">
            <div className="w-20 h-20 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Password Reset Successful!</h3>
              <p className="text-gray-600">
                Your password has been updated successfully.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Redirecting to login page...
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* New Password */}
            <div className="space-y-2">
              <Label htmlFor="newPassword" className="text-sm font-medium">
                Enter new password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  id="newPassword"
                  type={showNewPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pl-10 pr-10 h-12"
                  value={formData.newPassword}
                  onChange={(e) => setFormData({...formData, newPassword: e.target.value})}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showNewPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-sm font-medium">
                Re-enter new password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pl-10 pr-10 h-12"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Password Requirements */}
            {formData.newPassword && (
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <p className="text-sm font-medium text-gray-700 mb-2">Password must contain:</p>
                {currentRequirements.map((req, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {req.met ? (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    ) : (
                      <div className="h-4 w-4 rounded-full border border-gray-300" />
                    )}
                    <span className={`text-sm ${req.met ? 'text-green-600' : 'text-gray-500'}`}>
                      {req.text}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Strength Meter */}
            {formData.newPassword && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Password strength:</span>
                  <span className={`font-medium ${
                    formData.newPassword.length >= 12 ? 'text-green-600' :
                    formData.newPassword.length >= 8 ? 'text-yellow-600' :
                    'text-red-600'
                  }`}>
                    {formData.newPassword.length >= 12 ? 'Strong' :
                     formData.newPassword.length >= 8 ? 'Medium' :
                     'Weak'}
                  </span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-300 ${
                      formData.newPassword.length >= 12 ? 'bg-green-500 w-full' :
                      formData.newPassword.length >= 8 ? 'bg-yellow-500 w-2/3' :
                      'bg-red-500 w-1/3'
                    }`}
                  />
                </div>
              </div>
            )}

            <div className="pt-4">
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12  bg-purple-600 hover:bg-purple-900  text-white font-semibold"
              >
                {isLoading ? "Resetting Password..." : "Reset password"}
              </Button>
            </div>

            <div className="text-center">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-gray-600 hover:text-gray-900"
                onClick={() => router.back()}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to login
              </Button>
            </div>
          </form>
        )}
      </CardContent>

      {/* Footer */}
      <div className="border-t px-6 py-4">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>Need help? <Link href="/support" className="text-blue-600 hover:text-blue-800">Contact support</Link></span>
          <span>© 2024 NETWORKX</span>
        </div>
      </div>
    </Card>
  )
}