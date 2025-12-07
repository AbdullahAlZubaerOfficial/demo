"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Search, Filter, Eye, MoreVertical, FileText, Mail, Phone, Calendar, Download, UserPlus, Award } from 'lucide-react'
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
import { Progress } from "@/components/ui/progress"

const traineesData = [
  {
    id: "EO01",
    name: "Alice Brown",
    programEnrolled: "Web Development",
    certificate: "issued",
    status: "Completed",
    progress: 100,
    email: "alice.brown@email.com",
    phone: "+1 (555) 123-4567",
    enrolledDate: "2023-01-15",
    completionDate: "2023-04-15",
    grade: "A+",
    resume: "alice_brown_resume.pdf"
  },
  {
    id: "EO01",
    name: "David Lee",
    programEnrolled: "Healthcare",
    certificate: "Not Issued",
    status: "Completed",
    progress: 100,
    email: "david.lee@email.com",
    phone: "+1 (555) 987-6543",
    enrolledDate: "2023-02-20",
    completionDate: "2023-05-20",
    grade: "B+",
    resume: "david_lee_resume.pdf"
  },
  {
    id: "EO01",
    name: "Jenifer Martinez",
    programEnrolled: "UI/UX",
    certificate: "issued",
    status: "Completed",
    progress: 100,
    email: "jenifer.m@email.com",
    phone: "+1 (555) 456-7890",
    enrolledDate: "2023-03-10",
    completionDate: "2023-06-10",
    grade: "A",
    resume: "jenifer_martinez_resume.pdf"
  },
  {
    id: "EO01",
    name: "Martin Luther",
    programEnrolled: "Digital Marketing",
    certificate: "issued",
    status: "Completed",
    progress: 100,
    email: "martin.l@email.com",
    phone: "+1 (555) 789-0123",
    enrolledDate: "2023-04-05",
    completionDate: "2023-07-05",
    grade: "A-",
    resume: "martin_luther_resume.pdf"
  },
  {
    id: "EO01",
    name: "Tom Anderson",
    programEnrolled: "Cloud Computing",
    certificate: "issued",
    status: "Applied",
    progress: 30,
    email: "tom.a@email.com",
    phone: "+1 (555) 234-5678",
    enrolledDate: "2023-05-12",
    completionDate: "-",
    grade: "In Progress",
    resume: "tom_anderson_resume.pdf"
  },
  {
    id: "EO01",
    name: "Emily White",
    programEnrolled: "Healthcare",
    certificate: "issued",
    status: "Completed",
    progress: 100,
    email: "emily.white@email.com",
    phone: "+1 (555) 876-5432",
    enrolledDate: "2023-06-18",
    completionDate: "2023-09-18",
    grade: "A+",
    resume: "emily_white_resume.pdf"
  },
  {
    id: "EO01",
    name: "Mono Den",
    programEnrolled: "Web Development",
    certificate: "issued",
    status: "Completed",
    progress: 100,
    email: "mono.den@email.com",
    phone: "+1 (555) 345-6789",
    enrolledDate: "2023-07-22",
    completionDate: "2023-10-22",
    grade: "B",
    resume: "mono_den_resume.pdf"
  }
]

const programs = [
  "All Programs",
  "Web Development",
  "Healthcare",
  "UI/UX",
  "Digital Marketing",
  "Cloud Computing",
  "Data Science",
  "AI/ML",
  "Cybersecurity"
]

const statuses = ["All Status", "Completed", "Applied", "In Progress", "Dropped"]

export default function TraineesTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProgram, setSelectedProgram] = useState("All Programs")
  const [selectedStatus, setSelectedStatus] = useState("All Status")

  const filteredData = traineesData.filter(trainee => {
    const matchesSearch = 
      trainee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trainee.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trainee.programEnrolled.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesProgram = 
      selectedProgram === "All Programs" || trainee.programEnrolled === selectedProgram
    
    const matchesStatus = 
      selectedStatus === "All Status" || trainee.status === selectedStatus
    
    return matchesSearch && matchesProgram && matchesStatus
  })

  const getStatusBadge = (status: string) => {
    switch(status) {
      case "Completed":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            {status}
          </div>
        </Badge>
      case "Applied":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            {status}
          </div>
        </Badge>
      case "In Progress":
        return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-amber-500" />
            {status}
          </div>
        </Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getCertificateBadge = (certificate: string) => {
    if (certificate === "issued") {
      return <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
        <Award className="h-3 w-3 mr-1" />
        Issued
      </Badge>
    } else {
      return <Badge variant="outline" className="text-gray-500">
        Not Issued
      </Badge>
    }
  }

  return (
    <Card className="border shadow-lg">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <CardTitle className="text-xl">Trainees Management</CardTitle>
            <p className="text-sm text-gray-600 mt-1">Manage all trainee profiles, progress, and certificates</p>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <UserPlus className="h-4 w-4 mr-2" />
              Add New Trainee
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mt-6 space-y-4">
          <div className="text-sm font-medium text-gray-700">Search by name or ID</div>
          
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search trainees..."
                className="pl-9 h-11"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Program Filter */}
            <Select value={selectedProgram} onValueChange={setSelectedProgram}>
              <SelectTrigger className="w-[200px] h-11">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Program" />
              </SelectTrigger>
              <SelectContent>
                {programs.map((program) => (
                  <SelectItem key={program} value={program}>{program}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Status Filter */}
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-[140px] h-11">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                {statuses.map((status) => (
                  <SelectItem key={status} value={status}>{status}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button variant="outline" className="h-11">
              All Users
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="w-[100px] font-semibold">ID</TableHead>
                <TableHead className="font-semibold">Name</TableHead>
                <TableHead className="font-semibold">Program Enrolled</TableHead>
                <TableHead className="font-semibold">Progress</TableHead>
                <TableHead className="font-semibold">Certificate</TableHead>
                <TableHead className="font-semibold">Status</TableHead>
                <TableHead className="font-semibold text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((trainee, index) => (
                <TableRow key={index} className="hover:bg-gray-50/50">
                  <TableCell className="font-medium">
                    <Badge variant="secondary" className="font-mono bg-blue-50 text-blue-700">
                      {trainee.id}
                    </Badge>
                  </TableCell>
                  
                  <TableCell>
                    <div>
                      <div className="font-medium">{trainee.name}</div>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                        <Mail className="h-3 w-3" />
                        {trainee.email}
                      </div>
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    <div className="space-y-1">
                      <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                        {trainee.programEnrolled}
                      </Badge>
                      <div className="text-xs text-gray-500">
                        Enrolled: {trainee.enrolledDate}
                      </div>
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{trainee.progress}%</span>
                        <span className="text-gray-500">Grade: {trainee.grade}</span>
                      </div>
                      <Progress value={trainee.progress} className="h-2" />
                      {trainee.completionDate !== "-" && (
                        <div className="text-xs text-gray-500">
                          Completed: {trainee.completionDate}
                        </div>
                      )}
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    {getCertificateBadge(trainee.certificate)}
                  </TableCell>
                  
                  <TableCell>
                    {getStatusBadge(trainee.status)}
                  </TableCell>
                  
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm" className="h-9">
                        <FileText className="h-4 w-4 mr-2" />
                        View Resume
                      </Button>
                      
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-9 w-9">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Eye className="h-4 w-4 mr-2" />
                            View Profile
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <FileText className="h-4 w-4 mr-2" />
                            View Resume
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Mail className="h-4 w-4 mr-2" />
                            Send Message
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Award className="h-4 w-4 mr-2" />
                            Issue Certificate
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-amber-600">
                            Edit Profile
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            Remove Trainee
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

        {/* Summary and Pagination */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-6">
          <div className="text-sm text-gray-600">
            Showing {filteredData.length} of {traineesData.length} trainees
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" className="bg-blue-50 text-blue-700 border-blue-200">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <span className="px-2 text-gray-500">...</span>
            <Button variant="outline" size="sm">
              10
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>

      

      
      </CardContent>
    </Card>
  )
}