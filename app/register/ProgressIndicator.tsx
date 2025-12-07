"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { User, Shield, Key, CheckCircle } from 'lucide-react'

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

export default function ProgressIndicator() {
  const pathname = usePathname()
  
  // Find current step based on path
  const currentStep = steps.find(step => step.path === pathname)?.number || 1
  
  // Calculate progress percentage
  const progress = ((currentStep - 1) / (steps.length - 1)) * 100

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <div className="space-y-4">
        {/* Step Circles with Connectors */}
        <div className="flex justify-between relative">
          {/* Progress Line */}
          <div className="absolute top-6 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0">
            <div 
              className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          {steps.map((step) => {
            const isActive = step.number === currentStep
            const isCompleted = step.number < currentStep
            const isCurrentPath = step.path === pathname
            
            return (
              <Link 
                href={step.path}
                key={step.number}
                className={`relative z-10 flex flex-col items-center ${isCompleted ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <div className={`
                  w-12 h-12 rounded-full flex items-center justify-center mb-2
                  ${isCompleted 
                    ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-200" 
                    : isActive
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-200"
                    : "bg-gray-100 text-gray-400"
                  }
                  transition-all duration-300
                `}>
                  {step.icon}
                </div>
                <span className={`text-sm font-medium ${
                  isActive || isCompleted ? "text-gray-900" : "text-gray-500"
                }`}>
                  Step {step.number}
                </span>
                <span className={`text-xs mt-1 ${
                  isActive ? "text-blue-600 font-semibold" : "text-gray-500"
                }`}>
                  {step.title}
                </span>
                
                {/* Step Number Badge */}
                <div className={`
                  absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                  ${isCompleted 
                    ? "bg-green-500 text-white" 
                    : isActive
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-500"
                  }
                `}>
                  {step.number}
                </div>
              </Link>
            )
          })}
        </div>

  
      </div>
    </div>
  )
}