import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, CheckCircle2, Zap, Shield, LayoutDashboard } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-32 lg:pt-36 lg:pb-40">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-10" />
            <img 
              src="/images/hero.png" 
              alt="Hero Background" 
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          
          <div className="container mx-auto px-4 relative z-20 text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Modern Workspace v2.0 is live
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                Work beautifully.<br />
                <span className="text-primary">Without the clutter.</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                A sleek, opinionated productivity workspace for individuals and small teams. Everything you need, exactly where you expect it to be.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/dashboard">
                  <Button size="lg" className="rounded-full h-12 px-8 text-base group">
                    Enter Dashboard
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-base">
                  View Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Crafted for focus</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">We stripped away the unnecessary features to give you a fast, responsive, and beautiful workspace.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: LayoutDashboard,
                  title: "Card-based interface",
                  description: "Information density optimized for scanning. See everything important at a glance."
                },
                {
                  icon: Zap,
                  title: "Lightning fast",
                  description: "Keyboard shortcuts for everything. Move between tasks without taking your hands off the keyboard."
                },
                {
                  icon: Shield,
                  title: "Secure & private",
                  description: "Your data belongs to you. Built with security best practices from the ground up."
                }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-card p-6 rounded-2xl border border-card-border shadow-sm hover-elevate"
                >
                  <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}