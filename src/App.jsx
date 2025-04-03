import './App.css'
import Home from './components/Home'
import { useState, useEffect } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Apply theme to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`relative min-h-screen overflow-hidden transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-black to-blue-900' 
        : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    }`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -inset-[10px] ${darkMode ? 'opacity-50' : 'opacity-30'}`}>
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r ${
            darkMode ? 'from-blue-500 to-purple-500' : 'from-blue-200 to-purple-200'
          } rounded-full blur-3xl animate-pulse`}></div>
          <div className={`absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-gradient-to-r ${
            darkMode ? 'from-cyan-500 to-blue-500' : 'from-cyan-200 to-blue-200'
          } rounded-full blur-3xl animate-pulse delay-700`}></div>
          <div className={`absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r ${
            darkMode ? 'from-purple-500 to-pink-500' : 'from-purple-200 to-pink-200'
          } rounded-full blur-3xl animate-pulse delay-1000`}></div>
        </div>
        
        {/* Grid pattern overlay */}
        <div className={`absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] ${darkMode ? 'opacity-20' : 'opacity-10'}`}></div>
      </div>

      {/* Theme Toggle Button */}
      <button 
        onClick={toggleTheme}
        className={`fixed top-4 right-4 z-20 p-2 rounded-full transition-all duration-300 ${
          darkMode 
            ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
            : 'bg-white text-gray-800 hover:bg-gray-100'
        } shadow-lg`}
        aria-label="Toggle theme"
      >
        {darkMode ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </button>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-8 px-4">
        <div className="text-center mb-8 space-y-4">
          <h1 className={`text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${
            darkMode ? 'from-blue-400 to-purple-600' : 'from-blue-600 to-purple-800'
          } mb-2 filter drop-shadow-lg`}>
            PixelPerfect AI
          </h1>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} font-light`}>
            Transform your images with the power of artificial intelligence
          </p>
        </div>
        
        <Home darkMode={darkMode} />
        
        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-8 flex items-center space-x-2`}>
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          {/* <span>Powered by Advanced AI</span> */}
          <span>Made with ❤️ by <a href="https://github.com/shivanshpathak01" className="text-blue-500 hover:text-blue-600">Shivansh Pathak</a></span>
        </div>
      </div>
    </div>
  )
}

export default App
