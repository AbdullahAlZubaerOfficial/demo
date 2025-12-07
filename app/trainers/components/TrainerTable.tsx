"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Search, Filter, Eye, MoreVertical, Download, Mail, Phone, Globe } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const employersData = [
  {
    id: "EO01",
    companyName: "TechCorp Industries",
    industry: "Software",
    activeJobs: 12,
    status: "Verified",
    contact: "contact@techcorp.com",
    phone: "+1 (555) 123-4567",
    website: "techcorp.com",
    joined: "2023-01-15"
  },
  {
    id: "EO02",
    companyName: "Google Incorporate",
    industry: "Software",
    activeJobs: 6,
    status: "Verified",
    contact: "hr@google.com",
    phone: "+1 (555) 987-6543",
    website: "google.com",
    joined: "2023-02-20"
  },
  {
    id: "EO03",
    companyName: "Jamuna Incorporate",
    industry: "Software",
    activeJobs: 9,
    status: "Verified",
    contact: "careers@jamuna.com",
    phone: "+1 (555) 456-7890",
    website: "jamuna.com",
    joined: "2023-03-10"
  },
  {
    id: "EO04",
    companyName: "Techgiant Incorporate",
    industry: "Software",
    activeJobs: 8,
    status: "Verified",
    contact: "info@techgiant.com",
    phone: "+1 (555) 789-0123",
    website: "techgiant.com",
    joined: "2023-04-05"
  },
  {
    id: "EO05",
    companyName: "Technonologia",
    industry: "Software",
    activeJobs: 10,
    status: "Verified",
    contact: "hello@technonologia.com",
    phone: "+1 (555) 234-5678",
    website: "technonologia.com",
    joined: "2023-05-12"
  },
  {
    id: "EO06",
    companyName: "Technical Incorporate",
    industry: "Software",
    activeJobs: 17,
    status: "Verified",
    contact: "support@technical.com",
    phone: "+1 (555) 876-5432",
    website: "technical.com",
    joined: "2023-06-18"
  },
  {
    id: "EO07",
    companyName: "Microsoft Incorporate",
    industry: "Software",
    activeJobs: 15,
    status: "Verified",
    contact: "careers@microsoft.com",
    phone: "+1 (555) 345-6789",
    website: "microsoft.com",
    joined: "2023-07-22"
  }
]

const industries = [
  "All Industries",
  "Software",
  "Healthcare",
  "Finance",
  "Education",
  "Manufacturing",
  "Retail"
]

export default function TrainersTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries")
  const [selectedStatus, setSelectedStatus] = useState("All Status")

  const filteredData = employersData.filter(employer => {
    const matchesSearch = 
      employer.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employer.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employer.industry.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesIndustry = 
      selectedIndustry === "All Industries" || employer.industry === selectedIndustry
    
    const matchesStatus = 
      selectedStatus === "All Status" || employer.status === selectedStatus
    
    return matchesSearch && matchesIndustry && matchesStatus
  })

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <CardTitle>Employers Management</CardTitle>
            <p className="text-sm text-gray-600 mt-1">Manage all company profiles and their job postings</p>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Add New Employer
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by name or ID"
              className="pl-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Industry Filter */}
          <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
            <SelectTrigger className="w-[180px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Industry" />
            </SelectTrigger>
            <SelectContent>
              {industries.map((industry) => (
                <SelectItem key={industry} value={industry}>{industry}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Status Filter */}
          <Select value={selectedStatus} onValueChange={setSelectedStatus}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All Status">All Status</SelectItem>
              <SelectItem value="Verified">Verified</SelectItem>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Suspended">Suspended</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Company Name</TableHead>
                <TableHead>Industry</TableHead>
                <TableHead>Active Jobs</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Contact Info</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((employer) => (
                <TableRow key={employer.id}>
                  <TableCell className="font-medium">
                    <Badge variant="secondary" className="font-mono">
                      {employer.id}
                    </Badge>
                  </TableCell>
                  
                  <TableCell>
                    <div>
                      <div className="font-medium">{employer.companyName}</div>
                      <div className="text-xs text-gray-500">Joined: {employer.joined}</div>
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {employer.industry}
                    </Badge>
                  </TableCell>
                  
                  <TableCell>
                    <div className="flex items-center">
                      <div className="text-lg font-bold">{employer.activeJobs}</div>
                      <div className="ml-2 w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-green-500" 
                          style={{ width: `${Math.min(employer.activeJobs * 5, 100)}%` }}
                        />
                      </div>
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        {employer.status}
                      </div>
                    </Badge>
                  </TableCell>
                  
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="h-3 w-3 text-gray-400" />
                        <span className="text-gray-700">{employer.contact}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-3 w-3 text-gray-400" />
                        <span className="text-gray-700">{employer.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Globe className="h-3 w-3 text-gray-400" />
                        <span className="text-blue-600 hover:underline cursor-pointer">
                          {employer.website}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                      
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Mail className="h-4 w-4 mr-2" />
                            Send Email
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Phone className="h-4 w-4 mr-2" />
                            Call Company
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">
                            Suspend Account
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <div className="text-sm text-gray-600">
            Showing {filteredData.length} of {employersData.length} employers
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" className="bg-blue-50 text-blue-700">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{employersData.length}</div>
                <div className="text-sm text-gray-600">Total Employers</div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {employersData.filter(e => e.status === "Verified").length}
                </div>
                <div className="text-sm text-gray-600">Verified Companies</div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {employersData.reduce((sum, e) => sum + e.activeJobs, 0)}
                </div>
                <div className="text-sm text-gray-600">Total Active Jobs</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  )
}