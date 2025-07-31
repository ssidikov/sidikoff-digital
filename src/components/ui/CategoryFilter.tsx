'use client'

import { motion } from 'framer-motion'
import { BlogCategory } from '@/lib/sanity'

interface CategoryFilterProps {
  categories: BlogCategory[]
  selectedCategory: string | null
  onCategoryChange: (category: string | null) => void
}

export const CategoryFilter = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange
}: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onCategoryChange(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          selectedCategory === null
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Tous
      </motion.button>
      
      {categories.map((category) => (
        <motion.button
          key={category._id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCategoryChange(category._id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === category._id
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category.title}
        </motion.button>
      ))}
    </div>
  )
}

export default CategoryFilter
