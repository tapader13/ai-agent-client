"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { setAgents } from "@/lib/agentSlice"
import { AgentCard } from "./agent-card"
import { SearchBar } from "./search-bar"
import { FilterPanel } from "./filter-panel"
import type { Agent } from "@/lib/types"

interface AgentCatalogProps {
  initialAgents: Agent[]
}

export function AgentCatalog({ initialAgents }: AgentCatalogProps) {
  const dispatch = useAppDispatch()
  const { filteredAgents, filters } = useAppSelector((state) => state.agents)

  useEffect(() => {
    dispatch(setAgents(initialAgents))
  }, [dispatch, initialAgents])

  const hasActiveFilters =
    filters.searchQuery ||
    filters.selectedStatuses.length > 0 ||
    filters.selectedCategories.length > 0 ||
    filters.selectedPricingModel

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold tracking-tight mb-4">ArkLab AI Agent Catalog</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover and explore our comprehensive collection of AI agents designed to enhance your workflow and
          productivity.
        </p>
      </motion.div>

      <div className="mb-8">
        <SearchBar />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <FilterPanel agents={initialAgents} />
        </div>

        <div className="lg:col-span-3">
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing {filteredAgents.length} of {initialAgents.length} agents
                {hasActiveFilters && " (filtered)"}
              </p>
            </div>
          </div>

          {filteredAgents.length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-2">No agents found</p>
              <p className="text-sm text-muted-foreground">Try adjusting your search or filter criteria</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredAgents.map((agent, index) => (
                <AgentCard key={agent.id} agent={agent} index={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
