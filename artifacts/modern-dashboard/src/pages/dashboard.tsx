import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, MoreHorizontal, Clock, CheckCircle2, Circle } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const stats = [
  { title: "Active Projects", value: "12", change: "+2 this week" },
  { title: "Tasks Completed", value: "148", change: "+14% from last month" },
  { title: "Upcoming Deadlines", value: "5", change: "2 due today" },
  { title: "Team Velocity", value: "92%", change: "+4% from last sprint" },
];

const projects = [
  { id: 1, title: "Website Redesign", category: "Design", status: "In Progress", progress: 65, dueDate: "Oct 24", avatars: ["/images/avatar-1.png", "/images/avatar-2.png"] },
  { id: 2, title: "Mobile App V2", category: "Engineering", status: "Planning", progress: 15, dueDate: "Nov 12", avatars: ["/images/avatar-3.png"] },
  { id: 3, title: "Q3 Marketing Campaign", category: "Marketing", status: "Completed", progress: 100, dueDate: "Sep 30", avatars: ["/images/avatar-2.png", "/images/avatar-3.png"] },
  { id: 4, title: "Database Migration", category: "Engineering", status: "In Progress", progress: 40, dueDate: "Oct 15", avatars: ["/images/avatar-1.png"] },
  { id: 5, title: "Brand Guidelines", category: "Design", status: "Review", progress: 90, dueDate: "Oct 05", avatars: ["/images/avatar-2.png"] },
  { id: 6, title: "User Research Q4", category: "Product", status: "Planning", progress: 0, dueDate: "Dec 01", avatars: ["/images/avatar-1.png", "/images/avatar-3.png"] },
];

const categories = ["All", "Design", "Engineering", "Marketing", "Product"];

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <DashboardLayout>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
          <p className="text-muted-foreground mt-1">Here's what's happening with your projects today.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button>Create Project</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Card className="hover-elevate transition-all border-card-border shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto hide-scrollbar">
          {categories.map((cat) => (
            <Badge 
              key={cat}
              variant={activeCategory === cat ? "default" : "secondary"}
              className="cursor-pointer whitespace-nowrap rounded-full px-3 py-1"
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </Badge>
          ))}
        </div>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Filter projects..." 
            className="pl-9 rounded-full bg-muted/50 border-transparent focus:bg-background"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <Card className="h-full flex flex-col group hover-elevate transition-all cursor-pointer border-card-border shadow-sm">
                <CardHeader className="pb-3 flex flex-row items-start justify-between space-y-0">
                  <div>
                    <Badge variant="outline" className="mb-2 font-normal text-xs">{project.category}</Badge>
                    <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 -mr-2 -mt-2 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent className="mt-auto pt-4 flex-1 flex flex-col justify-end">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    {project.status === "Completed" ? (
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    ) : project.status === "In Progress" ? (
                      <Clock className="h-4 w-4 text-amber-500" />
                    ) : (
                      <Circle className="h-4 w-4" />
                    )}
                    {project.status}
                  </div>
                  
                  <div className="w-full bg-muted rounded-full h-2 mb-4 overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${project.progress === 100 ? 'bg-primary' : 'bg-primary/80'}`} 
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between mt-2 pt-4 border-t border-border">
                    <div className="flex -space-x-2">
                      {project.avatars.map((avatar, idx) => (
                        <Avatar key={idx} className="h-7 w-7 border-2 border-card">
                          <AvatarImage src={avatar} />
                          <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                    <div className="text-xs font-medium text-muted-foreground">
                      Due {project.dueDate}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center flex flex-col items-center">
            <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center mb-4">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium mb-1">No projects found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
            <Button variant="outline" className="mt-4" onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}