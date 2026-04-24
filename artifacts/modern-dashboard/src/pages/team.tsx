import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageSquare, Phone } from "lucide-react";
import { motion } from "framer-motion";

const team = [
  { 
    id: 1, 
    name: "Sarah Jenkins", 
    role: "Senior Software Engineer", 
    department: "Engineering",
    avatar: "/images/avatar-1.png",
    status: "Online",
    skills: ["React", "TypeScript", "Node.js"]
  },
  { 
    id: 2, 
    name: "Marcus Chen", 
    role: "Lead Product Designer", 
    department: "Design",
    avatar: "/images/avatar-2.png",
    status: "In a meeting",
    skills: ["UI/UX", "Figma", "Prototyping"]
  },
  { 
    id: 3, 
    name: "Elena Rodriguez", 
    role: "Product Manager", 
    department: "Product",
    avatar: "/images/avatar-3.png",
    status: "Offline",
    skills: ["Strategy", "Agile", "User Research"]
  },
  { 
    id: 4, 
    name: "David Kim", 
    role: "Frontend Developer", 
    department: "Engineering",
    avatar: "",
    status: "Online",
    skills: ["Vue", "Tailwind", "CSS"]
  },
  { 
    id: 5, 
    name: "Rachel Dawes", 
    role: "Marketing Director", 
    department: "Marketing",
    avatar: "",
    status: "Online",
    skills: ["Campaigns", "SEO", "Content"]
  },
  { 
    id: 6, 
    name: "James Wilson", 
    role: "Backend Engineer", 
    department: "Engineering",
    avatar: "",
    status: "Away",
    skills: ["Go", "PostgreSQL", "Docker"]
  }
];

export default function Team() {
  return (
    <DashboardLayout>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Team Directory</h1>
          <p className="text-muted-foreground mt-1">Meet the people behind the magic.</p>
        </div>
        <Button>Invite Member</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {team.map((member, i) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            <Card className="overflow-hidden hover-elevate transition-all border-card-border shadow-sm group">
              <div className="h-24 bg-gradient-to-r from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 transition-colors" />
              <CardContent className="px-6 pb-6 relative pt-0">
                <div className="absolute -top-12 left-6">
                  <div className="relative">
                    <Avatar className="h-20 w-20 border-4 border-card bg-card shadow-sm">
                      <AvatarImage src={member.avatar} />
                      <AvatarFallback className="text-lg bg-primary/10 text-primary">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className={`absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-card ${
                      member.status === 'Online' ? 'bg-green-500' : 
                      member.status === 'In a meeting' ? 'bg-amber-500' : 
                      member.status === 'Away' ? 'bg-yellow-500' : 'bg-gray-400'
                    }`} title={member.status} />
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-1">{member.role}</p>
                  <p className="text-xs text-muted-foreground mb-4">{member.department}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {member.skills.map(skill => (
                      <Badge key={skill} variant="secondary" className="font-normal text-xs py-0">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2 pt-4 border-t border-border">
                    <Button variant="outline" size="sm" className="flex-1 rounded-full h-8 text-xs">
                      <MessageSquare className="mr-2 h-3 w-3" /> Message
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </DashboardLayout>
  );
}