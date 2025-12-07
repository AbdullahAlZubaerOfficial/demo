"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Key, Lock, Eye, EyeOff, ArrowRight, ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

export default function Step3Page() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
    terms: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.password || formData.password.length < 8) {
      alert("Password must be at least 8 characters")
      return
    }
    
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match")
      return
    }
    
    if (!formData.terms) {
      alert("You must accept the terms and conditions")
      return
    }

    // Save to localStorage
    const savedData = localStorage.getItem('registrationData')
    if (savedData) {
      const parsedData = JSON.parse(savedData)
      const updated = { ...parsedData, ...formData }
      localStorage.setItem('registrationData', JSON.stringify(updated))
    }

    router.push('/register/step4')
  }

  return (
    <div className="p-6 md:p-8">
      <CardHeader className="text-center">
        <div className="w-20 h-20 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Key className="h-10 w-10 text-green-600" />
        </div>
        <CardTitle className="text-2xl">Create Secure Password</CardTitle>
        <p className="text-gray-600">Choose a strong password to protect your account</p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password">Password *</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="pl-10 pr-10 h-12"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
            <p className="text-xs text-gray-500">
              Must be at least 8 characters with letters and numbers
            </p>
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password *</Label>
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

          {/* Terms */}
          <div className="space-y-4 pt-4">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="terms"
                checked={formData.terms}
                onCheckedChange={(checked) => 
                  setFormData({...formData, terms: checked as boolean})
                }
                className="mt-1"
              />
              <Label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{" "}
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Privacy Policy
                </a>
              </Label>
            </div>
          </div>

          <div className="pt-6 border-t flex gap-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1 h-12"
              onClick={() => router.push('/register/step2')}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            
            <Button
              type="submit"
              className="flex-1 h-12 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
            >
              Create Account
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </CardContent>
    </div>
  )
}