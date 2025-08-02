import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto px-4">
        <h1 className="text-6xl font-bold mb-6">HABITABLE</h1>
        <p className="text-xl mb-8 text-gray-300">
          Sustainable Urban Development Platform
        </p>
        <p className="text-lg mb-12 text-gray-400">
          Aligning key actors in urban housing development around investable, 
          sustainable, and resilient projects in overlooked urban areas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/projects" 
            className="px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Explore Projects
          </Link>
          <Link 
            href="/about" 
            className="px-8 py-3 border border-gray-700 text-white font-medium rounded-lg hover:border-gray-600 hover:bg-gray-900 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}
