import { ReactNode } from "react";
import Sidebar from "./components/Slidebar";


export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      

      <main className={`
        flex-1 
        transition-all duration-300
        
        w-full lg:w-auto 
      `}>
   
        <div className="lg:hidden h-16"></div>
        
        <div className="p-4 md:p-6">
          {children}
        </div>
      </main>
    </div>
  )
}