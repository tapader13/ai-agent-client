"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { X } from "lucide-react"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import {
  setSelectedStatuses,
  setSelectedCategories,
  setSelectedPricingModel,
  clearAllFilters,
} from "@/lib/agentSlice"

interface FilterPanelProps {
  agents: Array<{
    status: string
    category: string
    pricingModel: string
  }>
}

export function FilterPanel({ agents }: FilterPanelProps) {
  const dispatch = useAppDispatch()
  const filters = useAppSelector((state) => state.agents.filters)

  // Get unique values for filters
  const uniqueStatuses = Array.from(new Set(agents.map((agent) => agent.status)))
  const uniqueCategories = Array.from(new Set(agents.map((agent) => agent.category)))
  const uniquePricingModels = Array.from(new Set(agents.map((agent) => agent.pricingModel)))

  const handleStatusChange = (status: string, checked: boolean) => {
    const newStatuses = checked
      ? [...filters.selectedStatuses, status]
      : filters.selectedStatuses.filter((s) => s !== status)
    dispatch(setSelectedStatuses(newStatuses))
  }

  const handleCategoryChange = (category: string, checked: boolean) => {
    const newCategories = checked
      ? [...filters.selectedCategories, category]
      : filters.selectedCategories.filter((c) => c !== category)
    dispatch(setSelectedCategories(newCategories))
  }

  const handlePricingModelChange = (pricingModel: string) => {
    dispatch(setSelectedPricingModel(pricingModel))
  }

  const hasActiveFilters =
    filters.searchQuery ||
    filters.selectedStatuses.length > 0 ||
    filters.selectedCategories.length > 0 ||
    filters.selectedPricingModel

  return (
    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Filters</CardTitle>
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => dispatch(clearAllFilters())}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4 mr-1" />
                Clear All
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Status Filter */}
          <div>
            <Label className="text-sm font-medium mb-3 block">Status</Label>
            <div className="space-y-2">
              {uniqueStatuses.map((status) => (
                <div key={status} className="flex items-center space-x-2">
                  <Checkbox
                    id={`status-${status}`}
                    checked={filters.selectedStatuses.includes(status)}
                    onCheckedChange={(checked) => handleStatusChange(status, checked as boolean)}
                  />
                  <Label htmlFor={`status-${status}`} className="text-sm font-normal cursor-pointer">
                    {status}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <Label className="text-sm font-medium mb-3 block">Category</Label>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {uniqueCategories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category}`}
                    checked={filters.selectedCategories.includes(category)}
                    onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                  />
                  <Label htmlFor={`category-${category}`} className="text-sm font-normal cursor-pointer">
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Model Filter */}
          <div>
            <Label className="text-sm font-medium mb-3 block">Pricing Model</Label>
            <RadioGroup value={filters.selectedPricingModel} onValueChange={handlePricingModelChange}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="" id="pricing-all" />
                <Label htmlFor="pricing-all" className="text-sm font-normal cursor-pointer">
                  All Models
                </Label>
              </div>
              {uniquePricingModels.map((model) => (
                <div key={model} className="flex items-center space-x-2">
                  <RadioGroupItem value={model} id={`pricing-${model}`} />
                  <Label htmlFor={`pricing-${model}`} className="text-sm font-normal cursor-pointer">
                    {model}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
