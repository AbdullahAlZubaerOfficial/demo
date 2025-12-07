"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Shield, MailCheck, ArrowRight, ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Step2Page() {
  const router = useRouter()
  const [otp, setOtp] = useState('')
  const [timer, setTimer] = useState(60)
  const [isOtpSent, setIsOtpSent] = useState(false)
  const [userEmail, setUserEmail] = useState('')

  useEffect(() => {
    // Get email from localStorage
    const savedData = localStorage.getItem('registrationData')
    if (savedData) {
      const parsedData = JSON.parse(savedData)
      setUserEmail(parsedData.email || '')
    }

    // Auto-send OTP
    sendOtp()
  }, [])

  const sendOtp = () => {
    setIsOtpSent(true)
    setTimer(60)
    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearInterval(interval)
          setIsOtpSent(false)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!otp || otp.length !== 6) {
      alert("Please enter a valid 6-digit OTP")
      return
    }

    // Save OTP to localStorage
    const savedData = localStorage.getItem('registrationData')
    if (savedData) {
      const parsedData = JSON.parse(savedData)
      const updated = { ...parsedData, otp }
      localStorage.setItem('registrationData', JSON.stringify(updated))
    }

    router.push('/register/step3')
  }

  return (
    <div className="p-6 md:p-8">
      <CardHeader className="text-center">
        <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Shield className="h-10 w-10 text-blue-600" />
        </div>
        <CardTitle className="text-2xl">Verify Your Email</CardTitle>
        <p className="text-gray-600">
          We've sent a 6-digit code to {userEmail || 'your email'}
        </p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
          <div className="space-y-2">
            <Label htmlFor="otp">Enter OTP *</Label>
            <div className="relative">
              <MailCheck className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                id="otp"
                placeholder="123456"
                className="pl-10 h-12 text-center text-2xl tracking-widest"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                maxLength={6}
                required
              />
            </div>
          </div>

          <div className="text-center">
            {isOtpSent ? (
              <p className="text-sm text-gray-600">
                Resend code in {timer}s
              </p>
            ) : (
              <button
                type="button"
                onClick={sendOtp}
                className="text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                Resend OTP
              </button>
            )}
          </div>

          <div className="pt-6 border-t flex gap-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1 h-12"
              onClick={() => router.push('/register/step1')}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            
            <Button
              type="submit"
              className="flex-1 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Verify & Continue
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </CardContent>
    </div>
  )
}