import Image from "next/image"
import ResetPasswordForm from "./ResetPasswordForm"

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-500 via-white to-purple-50">

{/* Left Side */}

      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-md">
          <ResetPasswordForm />
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