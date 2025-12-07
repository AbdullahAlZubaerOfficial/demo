import Link from 'next/link'
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  DollarSign, 
  BarChart3, 
  Settings,
  FileText,
  HelpCircle,
  LogOut
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/admin' },
  { icon: Users, label: 'Employee', href: '/admin/employers' },
  { icon: Briefcase, label: 'Trainers', href: '/admin/trainers' },
  { icon: Briefcase, label: 'Traineers', href: '/admin/traineers' },
  { icon: BarChart3, label: 'Analytics', href: '/admin/analytics' },
  { icon: FileText, label: 'Reports', href: '/admin/reports' },
  { icon: Settings, label: 'Settings', href: '/admin/settings' },
  { icon: HelpCircle, label: 'Help', href: '/admin/help' },
]

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 p-6">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-8">
        <Image
              src="/neworkx-logo-blacktext (1) 1.png"
              alt="Logo"
              width={160}
              height={50}
              className="mx-auto"
            />
      </div>

      {/* Navigation */}
      <nav className="space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Logout */}
      <div className="absolute bottom-6 left-6 right-6">
        <Button variant="outline" className="w-full">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </aside>
  )
}