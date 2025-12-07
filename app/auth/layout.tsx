import { ReactNode } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Image from 'next/image'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen  flex bg-gradient-to-br from-blue-500 via-white to-purple-50">
     
          {/* Left Side - Content */}
      <div className="flex-1 overflow-y-auto ">
        <div className="container mx-auto px-4 py-8 md:py-12">
          {/* Header */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <Button variant="outline" size="sm" asChild>
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
              
              <div className="text-sm text-gray-600 hidden md:block">
                Already have an account?{" "}
                <Link href="/login" className="text-blue-600 hover:text-blue-800 font-medium">
                  Sign in
                </Link>
              </div>
            </div>
            
            {/* Mobile sign in link */}
            <div className="text-sm text-gray-600 mt-4 md:hidden text-center">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-600 hover:text-blue-800 font-medium">
                Sign in
              </Link>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Mobile Branding */}
            <div className="text-center mb-8 md:mb-12 lg:hidden">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                NEWORISX
              </h1>
              <p className="text-lg text-gray-600">
                REAL SKILLS • REAL JOBS • REAL FAST
              </p>
            </div>

            {children}

            {/* Footer */}
            <div className="mt-8 text-center text-sm text-gray-500">
              By continuing, you agree to our{" "}
              <Link href="/terms" className="text-blue-600 hover:underline">Terms</Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
     
      {/* Right Side - Branding */}
         <div className="hidden md:block md:w-1/2 relative">
              <Image
                src="/Group 350.svg"
                alt="Side Image"
                fill
                className="object-cover"
                priority
                sizes="50vw"
              />
            </div>

 
    </div>
  )
}