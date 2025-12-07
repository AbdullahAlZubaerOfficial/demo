"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, GraduationCap, Users, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const RoleSelectionPage = () => {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const roles = [
    {
      id: "employer",
      title: "Employer",
      description: "I am looking to hire job seekers and post job openings.",
      icon: Building2,
      color: "from-blue-600 to-blue-800",
      route: "/register?role=employer"
    },
    {
      id: "trainer",
      title: "Trainer",
      description: "I am looking to offer training programs and share various opportunities.",
      icon: GraduationCap,
      color: "from-purple-600 to-purple-800",
      route: "/register?role=trainer"
    },
    {
      id: "agency",
      title: "Agency",
      description: "Create your official agency account to manage cases and reports",
      icon: Users,
      color: "from-green-600 to-green-800",
      route: "/register?role=agency"
    },
  ];

  const handleRoleSelect = (roleId: string, route: string) => {
    setSelectedRole(roleId);
    // Save selected role to localStorage
    localStorage.setItem('selectedRole', roleId);
    // Navigate to register with role parameter
    router.push(route);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white rounded-2xl ">
      

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 rounded-2xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2  rounded-full mb-4">
            
          <Image
                      src="/neworkx-logo-blacktext (1) 1.png"
                      alt="Side Image"
                      width={600}
                      height={600}
                      className="w-full h-auto"
                      priority
                      sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 40vw"
                    />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Select Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Account Type</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started by selecting the account type that best matches your goals. 
            Each role offers specialized features tailored to your needs.
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <Card 
                key={role.id}
                className={`relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border-2 cursor-pointer ${
                  selectedRole === role.id 
                    ? 'border-blue-500 ring-2 ring-blue-200 ring-offset-2' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => handleRoleSelect(role.id, role.route)}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-50 to-purple-50"></div>
                
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center h-full">
                    {/* Icon Container */}
                    <div className="mb-6 p-4 rounded-2xl bg-gray-50 transition-transform duration-300 group-hover:scale-110">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${role.color} shadow-lg`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {role.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {role.description}
                      </p>
                    </div>

                    {/* Proceed Button */}
                    <Button
                      className={`w-full bg-gradient-to-r ${role.color} hover:opacity-90 transition-all duration-300 group`}
                      size="lg"
                    >
                      Proceed
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

     


      </div>
    </div>
  );
};

export default RoleSelectionPage;