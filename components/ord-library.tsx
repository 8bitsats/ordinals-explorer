'use client'

import { useState, useEffect } from 'react'
import { Search, Wallet } from 'lucide-react'

export function OrdLibrary() {
  const [searchQuery, setSearchQuery] = useState('')
  const [prices, setPrices] = useState({
    bitcoin: '0',
    solana: '0',
    doge: '0'
  })

  const categories = [
    'Bitcoin',
    'Solana',
    'Doge',
    'Ethereum',
    'Base',
    'Development',
    'Art',
    'AI',
  ]

  useEffect(() => {
    // Simulating price updates
    const interval = setInterval(() => {
      setPrices({
        bitcoin: '$' + (Math.random() * 50000 + 20000).toFixed(2),
        solana: '$' + (Math.random() * 200 + 50).toFixed(2),
        doge: '$' + (Math.random() * 0.5 + 0.05).toFixed(4)
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement blockchain detection logic here
    console.log('Searching:', searchQuery)
  }

  return (
    <div className="min-h-screen bg-black text-slate-100">
      <div className="bg-gradient-to-r from-purple-900 to-blue-900 text-xs p-2 overflow-hidden">
        <div className="animate-ticker whitespace-nowrap">
          Bitcoin: {prices.bitcoin} | Solana: {prices.solana} | Dogecoin: {prices.doge}
        </div>
      </div>
      <header className="border-b border-slate-800 p-4 bg-slate-900 bg-opacity-50 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">OrdLibrary</h1>
          <form onSubmit={handleSearch} className="flex-1 mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search any blockchain..."
                className="w-full bg-slate-800 bg-opacity-50 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
            </div>
          </form>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2 px-4 rounded-full flex items-center transition-all duration-300">
            <Wallet className="mr-2 h-5 w-5" />
            Connect Wallet
          </button>
        </div>
      </header>
      <nav className="bg-slate-900 bg-opacity-50 p-4 backdrop-blur-md">
        <div className="container mx-auto">
          <ul className="flex flex-wrap justify-center gap-6">
            {categories.map((category) => (
              <li key={category}>
                <a
                  href={`#${category.toLowerCase()}`}
                  className="text-slate-300 hover:text-white transition-colors relative group"
                >
                  <span className="relative z-10">{category}</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-25 blur-lg transition-opacity duration-300 z-0"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <main className="container mx-auto mt-8 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category}
              className="bg-slate-900 bg-opacity-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-md border border-slate-800 hover:border-purple-500"
            >
              <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{category}</h2>
              <p className="text-slate-400">
                Explore {category} content and resources...
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}