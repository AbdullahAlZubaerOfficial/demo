"use client"
import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ArrowLeft, User, Shield, Key, CheckCircle, Building2, GraduationCap, Users } from 'lucide-react'
import Image from 'next/image'

function RegisterContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const role = searchParams.get('role') || 'employer'
  
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    role: role,
    fullName: '',
    email: '',
    phone: '',
    jobTitle: '',
    company: '',
    experience: '',
    otp: '',
    password: '',
    confirmPassword: '',
    terms: false,
    newsletter: true
  })

  const roleConfig = {
    employer: {
      title: "Employer",
      icon: Building2,
      color: "from-blue-600 to-blue-800",
      description: "Hire top talent and post job openings"
    },
    trainer: {
      title: "Trainer",
      icon: GraduationCap,
      color: "from-purple-600 to-purple-800",
      description: "Offer training programs and opportunities"
    },
    agency: {
      title: "Agency",
      icon: Users,
      color: "from-green-600 to-green-800",
      description: "Manage cases and reports"
    }
  }

  const currentRole = roleConfig[role as keyof typeof roleConfig]

  useEffect(() => {
    // Load saved data
    const savedData = localStorage.getItem('registrationData')
    if (savedData) {
      const data = JSON.parse(savedData)
      setFormData(prev => ({ ...prev, ...data }))
    }
    
    // Save selected role
    const savedRole = localStorage.getItem('selectedRole')
    if (savedRole && savedRole !== role) {
      router.replace(`/register?role=${savedRole}`)
    }
  }, [role, router])

  // Define steps with current step
  const steps = [
    { 
      number: 1, 
      title: "Sign Up", 
      icon: <User className="h-5 w-5" />, 
      path: "/register/step1",
      description: "Personal Information"
    },
    { 
      number: 2, 
      title: "Verify OTP", 
      icon: <Shield className="h-5 w-5" />, 
      path: "/register/step2",
      description: "Email Verification"
    },
    { 
      number: 3, 
      title: "Create Password", 
      icon: <Key className="h-5 w-5" />, 
      path: "/register/step3",
      description: "Account Security"
    },
    { 
      number: 4, 
      title: "Complete", 
      icon: <CheckCircle className="h-5 w-5" />, 
      path: "/register/step4",
      description: "Finish Setup"
    }
  ]

  // Update ProgressIndicator to accept current step
  const CustomProgressIndicator = () => {
    return (
      <div className="bg-white rounded-xl shadow-md p-4 md:p-6 mb-6">
        <div className="space-y-4">
          {/* Step Circles with Connectors */}
          <div className="flex justify-between relative">
            {/* Progress Line */}
            <div className="absolute top-6 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0">
              <div 
                className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500"
                style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
              />
            </div>
            
            {steps.map((stepItem) => {
              const isActive = stepItem.number === step
              const isCompleted = stepItem.number < step
              
              return (
                <div 
                  key={stepItem.number}
                  className={`relative z-10 flex flex-col items-center ${isCompleted ? 'cursor-pointer' : 'cursor-default'}`}
                  onClick={() => isCompleted && setStep(stepItem.number)}
                >
                  <div className={`
                    w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-2
                    ${isCompleted 
                      ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-200" 
                      : isActive
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-200"
                      : "bg-gray-100 text-gray-400"
                    }
                    transition-all duration-300
                  `}>
                    <div className="h-4 w-4 md:h-5 md:w-5">
                      {stepItem.icon}
                    </div>
                  </div>
                  <span className={`text-xs md:text-sm font-medium ${
                    isActive || isCompleted ? "text-gray-900" : "text-gray-500"
                  }`}>
                    Step {stepItem.number}
                  </span>
                  <span className={`text-xs mt-1 ${
                    isActive ? "text-blue-600 font-semibold" : "text-gray-500"
                  }`}>
                    {stepItem.title}
                  </span>
                  
                  {/* Step Number Badge */}
                  <div className={`
                    absolute -top-1 -right-1 w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center text-xs font-bold
                    ${isCompleted 
                      ? "bg-green-500 text-white" 
                      : isActive
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-500"
                    }
                  `}>
                    {stepItem.number}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Current Step Description */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
              <span className="text-sm font-medium text-blue-700">
                {steps[step - 1]?.description}
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const saveData = (data: any) => {
    const newData = { ...formData, ...data }
    setFormData(newData)
    localStorage.setItem('registrationData', JSON.stringify(newData))
  }

  const progress = ((step - 1) / 3) * 100

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    } else {
      router.push('/auth/role-selection')
    }
  }

  const handleComplete = () => {
    // Save final data
    localStorage.setItem('registrationComplete', 'true')
    localStorage.setItem('userRole', role)
    
    // Navigate to dashboard based on role
    router.push(`/admin`)
  }

  return (
    <div className=" flex min-h-screen bg-gradient-to-b bg-white">
      {/* Left Side - Registration Content */}
      <div className="w-full lg:w-1/2 p-4 md:p-6 lg:p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          {/* Role Indicator */}
          <div className="flex items-center justify-center mb-6 md:mb-8">
            <div className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full">
              <div className={`p-2 rounded-lg bg-gradient-to-r ${currentRole.color}`}>
                <currentRole.icon className="h-4 w-4 text-white" />
              </div>
              <span className="font-medium text-gray-700 text-sm md:text-base">
                Registering as <span className="font-bold">{currentRole.title}</span>
              </span>
            </div>
          </div>

          {/* Custom Progress Indicator */}
          <CustomProgressIndicator />

          <div className="space-y-6 md:space-y-8">
            {/* Step Content */}
            <Card>
              <CardContent className="pt-6">
                {/* Step 1: Personal Information */}
                {step === 1 && (
                  <div className="space-y-6">
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
                    
                    <div className="max-w-md mx-auto space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                          placeholder="John Doe"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                          placeholder="john@example.com"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                          placeholder="+880 1XXX XXXXXX"
                        />
                      </div>

                      {role === 'employer' && (
                        <>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Company Name *
                            </label>
                            <input
                              type="text"
                              value={formData.company}
                              onChange={(e) => setFormData({...formData, company: e.target.value})}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                              placeholder="Your company name"
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Job Title *
                            </label>
                            <input
                              type="text"
                              value={formData.jobTitle}
                              onChange={(e) => setFormData({...formData, jobTitle: e.target.value})}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                              placeholder="HR Manager, Recruiter, etc."
                              required
                            />
                          </div>
                        </>
                      )}

                      {role === 'trainer' && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Years of Experience
                          </label>
                          <input
                            type="text"
                            value={formData.experience}
                            onChange={(e) => setFormData({...formData, experience: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            placeholder="e.g., 5 years"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 2: Verify OTP */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div className="text-center space-y-4">
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900">Verify Your Email</h2>
                      <p className="text-gray-600 text-sm md:text-base">We've sent a 6-digit code to <span className="font-semibold">{formData.email || 'your email'}</span></p>
                    </div>
                    
                    <div className="max-w-md mx-auto space-y-6">
                      <div className="flex justify-center gap-2">
                        {[1, 2, 3, 4, 5, 6].map((digit) => (
                          <input
                            key={digit}
                            type="text"
                            maxLength={1}
                            className="w-10 h-10 md:w-12 md:h-12 text-center text-lg md:text-xl font-semibold border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                            onChange={(e) => {
                              const value = e.target.value
                              if (value) {
                                // Auto focus next input
                                const nextInput = e.target.nextElementSibling as HTMLInputElement
                                if (nextInput) nextInput.focus()
                              }
                            }}
                          />
                        ))}
                      </div>

                      <div className="text-center space-y-2">
                        <p className="text-sm text-gray-600">Didn't receive the code?</p>
                        <button 
                          type="button"
                          className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                        >
                          Resend OTP
                        </button>
                        <p className="text-xs text-gray-500 mt-2">Code expires in 10:00</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Create Password */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div className="text-center space-y-4">
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900">Create Password</h2>
                      <p className="text-gray-600 text-sm md:text-base">Set a strong password for your account security</p>
                    </div>
                    
                    <div className="max-w-md mx-auto space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Password *
                        </label>
                        <input
                          type="password"
                          value={formData.password}
                          onChange={(e) => setFormData({...formData, password: e.target.value})}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                          placeholder="••••••••"
                          required
                        />
                        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          <div className="flex items-center gap-1 text-green-600">
                            <div className="w-1 h-1 rounded-full bg-green-500"></div>
                            At least 8 characters
                          </div>
                          <div className="flex items-center gap-1 text-green-600">
                            <div className="w-1 h-1 rounded-full bg-green-500"></div>
                            One uppercase letter
                          </div>
                          <div className="flex items-center gap-1 text-green-600">
                            <div className="w-1 h-1 rounded-full bg-green-500"></div>
                            One number
                          </div>
                          <div className="flex items-center gap-1 text-green-600">
                            <div className="w-1 h-1 rounded-full bg-green-500"></div>
                            One special character
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Confirm Password *
                        </label>
                        <input
                          type="password"
                          value={formData.confirmPassword}
                          onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                          placeholder="••••••••"
                          required
                        />
                      </div>

                      <div className="flex items-start gap-2">
                        <input
                          type="checkbox"
                          id="terms"
                          checked={formData.terms}
                          onChange={(e) => setFormData({...formData, terms: e.target.checked})}
                          className="mt-1"
                          required
                        />
                        <label htmlFor="terms" className="text-sm text-gray-600">
                          I agree to the <a href="/terms" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>
                        </label>
                      </div>

                      <div className="flex items-start gap-2">
                        <input
                          type="checkbox"
                          id="newsletter"
                          checked={formData.newsletter}
                          onChange={(e) => setFormData({...formData, newsletter: e.target.checked})}
                          className="mt-1"
                        />
                        <label htmlFor="newsletter" className="text-sm text-gray-600">
                          Send me product updates, tips, and offers via email
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Complete */}
                {step === 4 && (
                  <div className="space-y-6">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full bg-gradient-to-r from-green-100 to-emerald-100 flex items-center justify-center">
                        <CheckCircle className="h-8 w-8 md:h-10 md:w-10 text-green-600" />
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900">Registration Complete!</h2>
                      <p className="text-gray-600 text-sm md:text-base">
                        Your {currentRole.title.toLowerCase()} account has been created successfully
                      </p>
                    </div>
                    
                    <div className="max-w-md mx-auto space-y-6">
                      {/* Account Summary */}
                      <div className="bg-gray-50 rounded-xl p-4">
                        <h3 className="font-semibold text-gray-900 mb-3">Account Summary</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Name:</span>
                            <span className="font-medium">{formData.fullName || 'Not provided'}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Email:</span>
                            <span className="font-medium">{formData.email}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Role:</span>
                            <span className="font-medium">{currentRole.title}</span>
                          </div>
                        </div>
                      </div>

                      {/* Next Steps */}
                      <div className="space-y-3">
                        <h3 className="font-semibold text-gray-900">What's next?</h3>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                              <span className="text-xs font-semibold text-blue-600">1</span>
                            </div>
                            <span className="text-sm text-gray-600">Set up your profile</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                              <span className="text-xs font-semibold text-blue-600">2</span>
                            </div>
                            <span className="text-sm text-gray-600">Explore the dashboard</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                              <span className="text-xs font-semibold text-blue-600">3</span>
                            </div>
                            <span className="text-sm text-gray-600">Start using features</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-4 md:pt-6 border-t">
              <Button
                variant="outline"
                onClick={handleBack}
                className="text-sm"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {step === 1 ? 'Change Role' : 'Previous Step'}
              </Button>
              
              {step < 4 ? (
                <Button
                  onClick={handleNext}
                  className="ml-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-sm"
                  disabled={step === 1 && (!formData.fullName || !formData.email)}
                >
                  Next Step
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleComplete}
                  className="ml-auto bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-sm"
                >
                  Go to Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>

            <div className="text-center text-xs md:text-sm text-gray-500">
              Step {step} of 4 • {Math.round(progress)}% complete
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Image (Hidden on mobile, shown on large screens) */}
      <div className="hidden lg:block lg:w-1/2 relative bg-white">
        <div className="absolute inset-0">
          <Image
            src="/Group 350.svg"
            alt="Side Image"
            fill
            className="object-cover object-center"
            priority
            sizes="50vw"
          />
        </div>
      </div>
    </div>
  )
}

export default function RegisterPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    }>
      <RegisterContent />
    </Suspense>
  )
}