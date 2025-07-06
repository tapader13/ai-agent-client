"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, Zap, Archive, Clock } from "lucide-react"
import type { Agent } from "@/lib/types"

interface AgentCardProps {
  agent: Agent
  index: number
}

export function AgentCard({ agent, index }: AgentCardProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Active":
        return <Zap className="h-4 w-4" />
      case "Beta":
        return <Clock className="h-4 w-4" />
      case "Archived":
        return <Archive className="h-4 w-4" />
      default:
        return <Bot className="h-4 w-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 hover:bg-green-200"
      case "Beta":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
      case "Archived":
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
      default:
        return "bg-blue-100 text-blue-800 hover:bg-blue-200"
    }
  }

  const getPricingColor = (pricing: string) => {
    switch (pricing) {
      case "Free Tier":
        return "bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
      case "Subscription":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200"
      case "Per-Use":
        return "bg-orange-100 text-orange-800 hover:bg-orange-200"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <Card className="h-full hover:shadow-lg transition-shadow duration-200">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                {getInitials(agent.name)}
              </div>
              <div className="flex-1">
                <CardTitle className="text-lg leading-tight">{agent.name}</CardTitle>
              </div>
            </div>
          </div>
          <CardDescription className="text-sm text-muted-foreground line-clamp-2">{agent.description}</CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className={`${getStatusColor(agent.status)} flex items-center gap-1`}>
              {getStatusIcon(agent.status)}
              {agent.status}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {agent.category}
            </Badge>
            <Badge variant="secondary" className={`${getPricingColor(agent.pricingModel)} text-xs`}>
              {agent.pricingModel}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
