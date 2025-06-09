"use client"

import { motion } from "framer-motion"
import { Heart, Users, Globe, Sparkles, Target, Shield, Zap } from "lucide-react"
import { UpdatedHeader } from "@/components/layout/updated-header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AboutPage() {
  const stats = [
    { number: "1M+", label: "Happy Customers", icon: Users },
    { number: "50K+", label: "Products", icon: Globe },
    { number: "99.9%", label: "Uptime", icon: Zap },
    { number: "24/7", label: "Support", icon: Shield },
  ]

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Every decision we make starts with our customers' needs and wishes in mind.",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "We leverage cutting-edge AI technology to create magical shopping experiences.",
    },
    {
      icon: Target,
      title: "Quality",
      description: "We curate only the best products from trusted brands and sellers worldwide.",
    },
    {
      icon: Shield,
      title: "Trust",
      description: "Your security and privacy are our top priorities in everything we do.",
    },
  ]

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Former tech executive with 15+ years in e-commerce and AI.",
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      image: "/placeholder.svg?height=100&width=100",
      bio: "AI researcher and full-stack developer passionate about user experience.",
    },
    {
      name: "Emily Watson",
      role: "Head of Design",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Award-winning designer focused on creating delightful digital experiences.",
    },
    {
      name: "David Kim",
      role: "VP of Operations",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Supply chain expert ensuring fast and reliable product delivery.",
    },
  ]

  const timeline = [
    {
      year: "2023",
      title: "The Vision",
      description: "WishShop was founded with the vision of making online shopping more personal and magical.",
    },
    {
      year: "2024",
      title: "AI Integration",
      description: "Launched our AI-powered recommendation engine, revolutionizing product discovery.",
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Expanded to serve customers in over 50 countries worldwide.",
    },
    {
      year: "2025",
      title: "The Future",
      description: "Continuing to innovate with new AI features and sustainable shopping initiatives.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <UpdatedHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-purple-950 dark:via-pink-950 dark:to-blue-950 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto"
            >
              <Badge variant="secondary" className="mb-4">
                <Sparkles className="w-3 h-3 mr-1" />
                About WishShop
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Making Shopping{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  Magical
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We believe that shopping should be more than just buying products. It should be about discovering your
                wishes, finding exactly what you need, and experiencing the joy of getting something perfect for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Join Our Journey</Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  At WishShop, we're on a mission to transform the way people discover and purchase products online. By
                  combining artificial intelligence with human intuition, we create personalized shopping experiences
                  that feel magical and effortless.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We believe that technology should enhance human connection, not replace it. That's why our AI doesn't
                  just recommend products—it understands your wishes, preferences, and dreams to help you find exactly
                  what you're looking for, even when you don't know what that is yet.
                </p>
                <Button size="lg">Experience the Magic</Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 p-8 text-white">
                  <div className="h-full flex flex-col justify-center items-center text-center">
                    <Sparkles className="w-16 h-16 mb-6" />
                    <h3 className="text-2xl font-bold mb-4">AI-Powered Discovery</h3>
                    <p className="text-lg opacity-90">
                      Our advanced algorithms learn from your behavior to predict what you'll love before you even know
                      it.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                        <value.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle>{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center">{value.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground">The passionate people behind WishShop</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <Avatar className="w-24 h-24 mx-auto mb-4">
                        <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                        <AvatarFallback>
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                      <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                      <p className="text-sm text-muted-foreground">{member.bio}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
              <p className="text-lg text-muted-foreground">From vision to reality</p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                    <Badge variant="outline" className="mb-2">
                      {item.year}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex-shrink-0"></div>
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make Your Wishes Come True?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join millions of happy customers who have discovered the magic of personalized shopping
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Start Shopping
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-purple-600"
                >
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
