import Image from "next/image"
import LoginForm from "./LoginForm"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-gradient-to-b bg-white ">
      
      {/* Left Side - Login Form */}
      <div className="w-full md:w-1/2 p-3 xs:p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-16 flex items-center justify-center bg-white">
        <div className="w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
          <LoginForm />
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