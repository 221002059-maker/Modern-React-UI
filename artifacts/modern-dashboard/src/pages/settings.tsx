import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "@/components/theme-provider";
import { Moon, Sun, Monitor, Bell, Shield, Key } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Settings() {
  const { theme, setTheme } = useTheme();

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your account settings and preferences.</p>
      </div>

      <Tabs defaultValue="appearance" className="w-full max-w-4xl">
        <TabsList className="grid w-full sm:w-[400px] grid-cols-3 mb-8">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="appearance">
          <Card className="shadow-sm border-card-border">
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>Customize how the dashboard looks on your device.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label>Theme</Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div 
                    className={`cursor-pointer rounded-lg border-2 p-4 text-center hover:bg-muted/50 transition-all ${theme === 'light' ? 'border-primary bg-primary/5' : 'border-muted'}`}
                    onClick={() => setTheme("light")}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="rounded-full bg-orange-100 p-3 text-orange-600 dark:bg-orange-900/30 dark:text-orange-500">
                        <Sun className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="font-medium">Light</div>
                    <div className="text-xs text-muted-foreground mt-1">Clean and bright</div>
                  </div>
                  
                  <div 
                    className={`cursor-pointer rounded-lg border-2 p-4 text-center hover:bg-muted/50 transition-all ${theme === 'dark' ? 'border-primary bg-primary/5' : 'border-muted'}`}
                    onClick={() => setTheme("dark")}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="rounded-full bg-slate-100 p-3 text-slate-800 dark:bg-slate-800 dark:text-slate-200">
                        <Moon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="font-medium">Dark</div>
                    <div className="text-xs text-muted-foreground mt-1">Easy on the eyes</div>
                  </div>
                  
                  <div 
                    className={`cursor-pointer rounded-lg border-2 p-4 text-center hover:bg-muted/50 transition-all ${theme === 'system' ? 'border-primary bg-primary/5' : 'border-muted'}`}
                    onClick={() => setTheme("system")}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                        <Monitor className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="font-medium">System</div>
                    <div className="text-xs text-muted-foreground mt-1">Matches your device</div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Reduce Motion</Label>
                  <p className="text-sm text-muted-foreground">Minimize animations and transitions throughout the app.</p>
                </div>
                <Switch />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Compact Mode</Label>
                  <p className="text-sm text-muted-foreground">Decrease padding and increase information density.</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="profile">
          <Card className="shadow-sm border-card-border mb-6">
            <CardHeader>
              <CardTitle>Profile Details</CardTitle>
              <CardDescription>Update your personal information and public profile.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/images/avatar-1.png" />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2 text-center sm:text-left">
                  <Button variant="outline" size="sm">Change Avatar</Button>
                  <p className="text-xs text-muted-foreground">JPG, GIF or PNG. 1MB max.</p>
                </div>
              </div>

              <Separator />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" defaultValue="Sarah" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" defaultValue="Jenkins" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input id="email" type="email" defaultValue="sarah.jenkins@example.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Input id="role" defaultValue="Senior Software Engineer" />
              </div>

              <div className="flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-destructive/20">
            <CardHeader>
              <CardTitle className="text-destructive flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Danger Zone
              </CardTitle>
              <CardDescription>Irreversible actions for your account.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium">Delete Account</p>
                  <p className="text-sm text-muted-foreground">Permanently remove your account and all its data.</p>
                </div>
                <Button variant="destructive">Delete Account</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card className="shadow-sm border-card-border">
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Choose what updates you want to receive.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  Email Notifications
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Project Updates</Label>
                      <p className="text-sm text-muted-foreground">When a project status changes or tasks are completed.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Mentions & Comments</Label>
                      <p className="text-sm text-muted-foreground">When someone mentions you in a comment or task.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Weekly Report</Label>
                      <p className="text-sm text-muted-foreground">A weekly summary of your team's velocity and upcoming deadlines.</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 pt-6 border-t border-border">
                <h3 className="font-medium flex items-center gap-2">
                  <Bell className="h-4 w-4 text-muted-foreground" />
                  Push Notifications
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Direct Messages</Label>
                      <p className="text-sm text-muted-foreground">When someone sends you a direct message.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Critical Alerts</Label>
                      <p className="text-sm text-muted-foreground">System maintenance, security alerts, and billing issues.</p>
                    </div>
                    <Switch defaultChecked disabled />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end pt-4">
                <Button>Save Preferences</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
}