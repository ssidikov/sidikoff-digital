'use client'

import { useState, useRef, useEffect } from 'react'

interface MobileSearchProps {
  placeholder?: string
  onSearch: (query: string) => void
  onClear?: () => void
  suggestions?: string[]
}

export default function MobileSearch({
  placeholder = 'Search...',
  onSearch,
  onClear,
  suggestions = [],
}: MobileSearchProps) {
  const [query, setQuery] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isExpanded])

  const handleSearch = () => {
    onSearch(query)
    setShowSuggestions(false)
  }

  const handleClear = () => {
    setQuery('')
    setIsExpanded(false)
    setShowSuggestions(false)
    onClear?.()
  }

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion)
    onSearch(suggestion)
    setShowSuggestions(false)
  }

  const filteredSuggestions = suggestions
    .filter((s) => s.toLowerCase().includes(query.toLowerCase()) && s !== query)
    .slice(0, 5)

  return (
    <div className='relative'>
      {/* Mobile Search Bar */}
      <div
        className={`flex items-center transition-all duration-300 ${
          isExpanded
            ? 'bg-white border border-gray-300 rounded-xl shadow-lg'
            : 'bg-gray-100 border border-transparent rounded-lg'
        }`}>
        {/* Search Icon/Button */}
        <button
          onClick={() => {
            if (!isExpanded) {
              setIsExpanded(true)
            } else if (query) {
              handleSearch()
            }
          }}
          className={`flex items-center justify-center w-10 h-10 text-gray-500 hover:text-gray-700 transition-colors ${
            isExpanded ? 'ml-2' : 'mx-2'
          }`}>
          <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </button>

        {/* Search Input */}
        <input
          ref={inputRef}
          type='text'
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setShowSuggestions(e.target.value.length > 0 && filteredSuggestions.length > 0)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch()
            } else if (e.key === 'Escape') {
              handleClear()
            }
          }}
          placeholder={placeholder}
          className={`flex-1 px-2 py-2 text-sm border-none outline-none bg-transparent transition-all duration-300 ${
            isExpanded ? 'w-full' : 'w-0 opacity-0'
          }`}
        />

        {/* Clear Button */}
        {query && isExpanded && (
          <button
            onClick={handleClear}
            className='flex items-center justify-center w-8 h-8 mr-2 text-gray-400 hover:text-gray-600 transition-colors'>
            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        )}
      </div>

      {/* Search Suggestions */}
      {showSuggestions && filteredSuggestions.length > 0 && (
        <div className='absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto'>
          {filteredSuggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className='w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 first:rounded-t-xl last:rounded-b-xl transition-colors'>
              <div className='flex items-center space-x-2'>
                <svg
                  className='w-4 h-4 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
                <span>{suggestion}</span>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Backdrop for mobile */}
      {isExpanded && (
        <div className='fixed inset-0 z-10 lg:hidden' onClick={() => setIsExpanded(false)} />
      )}
    </div>
  )
}
