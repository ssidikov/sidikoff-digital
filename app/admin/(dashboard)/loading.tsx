'use client'

import { motion } from 'framer-motion'

export default function AdminLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-slate-200 border-t-indigo-600 rounded-full mx-auto mb-4"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-slate-900 mb-2">Loading Dashboard</h2>
          <p className="text-slate-600">Preparing your admin panel...</p>
        </motion.div>
      </div>
    </div>
  )
}
