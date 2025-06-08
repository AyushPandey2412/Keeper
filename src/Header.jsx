// // import React from "react";
// // import { Edit3 } from "lucide-react";

// // function Header() {
// //   return (
// //     <header className="bg-yellow-500 shadow-lg">
// //       <div className="container mx-auto px-6 py-4">
// //         <h1 className="text-white text-2xl font-bold flex items-center gap-2">
// //           <Edit3 className="w-6 h-6" />
// //           Keeper
// //         </h1>
// //       </div>
// //     </header>
// //   );
// // }

// // export default Header;

// import React from "react";
// import { Edit3, Moon, Sun, SortAsc, SortDesc } from "lucide-react";

// function Header({ 
//   isDarkMode, 
//   onToggleDarkMode, 
//   sortBy, 
//   sortDirection, 
//   onSortChange, 
//   onSortDirectionChange 
// }) {
//   return (
//     <header className={`shadow-lg transition-colors duration-300 ${
//       isDarkMode ? 'bg-gray-800' : 'bg-yellow-500'
//     }`}>
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo and Title */}
//           <h1 className="text-white text-2xl font-bold flex items-center gap-2">
//             <Edit3 className="w-6 h-6" />
//             Keeper
//           </h1>

//           {/* Controls Section */}
//           <div className="flex items-center gap-4">
//             {/* Sort Controls */}
//             <div className="flex items-center gap-2">
//               <span className="text-white text-sm font-medium hidden sm:block">
//                 Sort:
//               </span>
              
//               {/* Sort By Dropdown */}
//               <select
//                 value={sortBy}
//                 onChange={(e) => onSortChange(e.target.value)}
//                 className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
//                   isDarkMode
//                     ? 'bg-gray-700 text-white border-gray-600 hover:bg-gray-600'
//                     : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-50'
//                 } border focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
//                   isDarkMode ? 'focus:ring-blue-400' : 'focus:ring-yellow-400'
//                 }`}
//                 title="Sort notes by"
//               >
//                 <option value="date">Date</option>
//                 <option value="alphabetical">A-Z</option>
//                 <option value="color">Color</option>
//               </select>

//               {/* Sort Direction Toggle */}
//               <button
//                 onClick={() => onSortDirectionChange(sortDirection === 'asc' ? 'desc' : 'asc')}
//                 className={`p-2 rounded-md transition-all duration-200 ${
//                   isDarkMode
//                     ? 'text-white hover:bg-gray-700 hover:text-blue-300'
//                     : 'text-white hover:bg-yellow-600 hover:bg-opacity-80'
//                 } hover:scale-105`}
//                 title={`Sort ${sortDirection === 'asc' ? 'descending' : 'ascending'}`}
//               >
//                 {sortDirection === 'asc' ? (
//                   <SortAsc className="w-4 h-4" />
//                 ) : (
//                   <SortDesc className="w-4 h-4" />
//                 )}
//               </button>
//             </div>

//             {/* Divider */}
//             <div className={`w-px h-6 ${
//               isDarkMode ? 'bg-gray-600' : 'bg-yellow-400'
//             }`}></div>

//             {/* Dark Mode Toggle */}
//             <button
//               onClick={onToggleDarkMode}
//               className={`p-2 rounded-full transition-all duration-200 ${
//                 isDarkMode
//                   ? 'text-yellow-300 hover:bg-gray-700 hover:text-yellow-200'
//                   : 'text-white hover:bg-yellow-600 hover:bg-opacity-80'
//               } hover:scale-105`}
//               title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
//             >
//               {isDarkMode ? (
//                 <Sun className="w-5 h-5" />
//               ) : (
//                 <Moon className="w-5 h-5" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Sort Controls (Hidden on Desktop) */}
//         <div className="sm:hidden mt-3 flex items-center justify-center gap-3">
//           <span className="text-white text-sm font-medium">Sort:</span>
          
//           <select
//             value={sortBy}
//             onChange={(e) => onSortChange(e.target.value)}
//             className={`px-2 py-1 rounded text-sm ${
//               isDarkMode
//                 ? 'bg-gray-700 text-white'
//                 : 'bg-white text-gray-800'
//             }`}
//           >
//             <option value="date">Date</option>
//             <option value="alphabetical">A-Z</option>
//             <option value="color">Color</option>
//           </select>

//           <button
//             onClick={() => onSortDirectionChange(sortDirection === 'asc' ? 'desc' : 'asc')}
//             className="p-1 text-white hover:bg-white hover:bg-opacity-20 rounded"
//           >
//             {sortDirection === 'asc' ? (
//               <SortAsc className="w-4 h-4" />
//             ) : (
//               <SortDesc className="w-4 h-4" />
//             )}
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;


// import React from "react";
// import { Edit3, Moon, Sun, SortAsc, SortDesc } from "lucide-react";

// function Header({ 
//   isDarkMode, 
//   onToggleDarkMode, 
//   sortBy, 
//   sortDirection, 
//   onSortChange, 
//   onSortDirectionChange 
// }) {
//   return (
//     <header className={`shadow-lg transition-all duration-500 ease-in-out ${
//       isDarkMode 
//         ? 'bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800' 
//         : 'bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500'
//     }`}>
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo and Title */}
//           <div className="flex items-center gap-3">
//             <div className={`p-2 rounded-lg transition-all duration-300 ${
//               isDarkMode ? 'bg-slate-600/50' : 'bg-white/20'
//             }`}>
//               <Edit3 className="w-6 h-6 text-white" />
//             </div>
//             <h1 className="text-white text-2xl font-bold tracking-wide">
//               Keeper
//             </h1>
//           </div>

//           {/* Controls Section */}
//           <div className="flex items-center gap-4">
//             {/* Sort Controls */}
//             <div className="flex items-center gap-3">
//               <span className="text-white/90 text-sm font-medium hidden sm:block">
//                 Sort:
//               </span>
              
//               {/* Sort By Dropdown */}
//               <select
//                 value={sortBy}
//                 onChange={(e) => onSortChange(e.target.value)}
//                 className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
//                   isDarkMode
//                     ? 'bg-slate-700/80 text-white border-slate-600 hover:bg-slate-600/80 focus:bg-slate-600'
//                     : 'bg-white/90 text-blue-800 border-blue-200 hover:bg-white focus:bg-white'
//                 } border backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
//                   isDarkMode ? 'focus:ring-blue-400' : 'focus:ring-blue-300'
//                 } transform hover:scale-105`}
//                 title="Sort notes by"
//               >
//                 <option value="date">Date</option>
//                 <option value="alphabetical">A-Z</option>
//                 <option value="color">Color</option>
//               </select>

//               {/* Sort Direction Toggle */}
//               <button
//                 onClick={() => onSortDirectionChange(sortDirection === 'asc' ? 'desc' : 'asc')}
//                 className={`p-2 rounded-lg transition-all duration-300 ${
//                   isDarkMode
//                     ? 'text-white hover:bg-slate-600/60 hover:text-blue-300'
//                     : 'text-white hover:bg-white/20 hover:text-blue-100'
//                 } transform hover:scale-110 active:scale-95 backdrop-blur-sm`}
//                 title={`Sort ${sortDirection === 'asc' ? 'descending' : 'ascending'}`}
//               >
//                 <div className={`transition-transform duration-300 ${
//                   sortDirection === 'desc' ? 'rotate-180' : 'rotate-0'
//                 }`}>
//                   <SortAsc className="w-4 h-4" />
//                 </div>
//               </button>
//             </div>

//             {/* Animated Divider */}
//             <div className={`w-px h-6 transition-colors duration-300 ${
//               isDarkMode ? 'bg-slate-500' : 'bg-blue-300'
//             }`}></div>

//             {/* Dark Mode Toggle with Animation */}
//             <button
//               onClick={onToggleDarkMode}
//               className={`relative p-3 rounded-full transition-all duration-500 ease-in-out ${
//                 isDarkMode
//                   ? 'text-yellow-300 hover:bg-slate-600/60 shadow-lg shadow-yellow-500/20'
//                   : 'text-white hover:bg-white/20 shadow-lg shadow-blue-900/20'
//               } transform hover:scale-110 active:scale-95 backdrop-blur-sm overflow-hidden`}
//               title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
//             >
//               {/* Background glow effect */}
//               <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
//                 isDarkMode 
//                   ? 'bg-gradient-to-r from-yellow-400/10 to-orange-400/10' 
//                   : 'bg-gradient-to-r from-blue-400/10 to-indigo-400/10'
//               }`}></div>
              
//               {/* Icon container with rotation animation */}
//               <div className="relative z-10">
//                 <div className={`transition-all duration-500 ease-in-out ${
//                   isDarkMode ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
//                 } absolute inset-0 flex items-center justify-center`}>
//                   <Sun className="w-5 h-5" />
//                 </div>
//                 <div className={`transition-all duration-500 ease-in-out ${
//                   isDarkMode ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
//                 } flex items-center justify-center`}>
//                   <Moon className="w-5 h-5" />
//                 </div>
//               </div>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Sort Controls (Hidden on Desktop) */}
//         <div className="sm:hidden mt-4 flex items-center justify-center gap-4 pt-3 border-t border-white/20">
//           <span className="text-white/90 text-sm font-medium">Sort:</span>
          
//           <select
//             value={sortBy}
//             onChange={(e) => onSortChange(e.target.value)}
//             className={`px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
//               isDarkMode
//                 ? 'bg-slate-700/80 text-white'
//                 : 'bg-white/90 text-blue-800'
//             } backdrop-blur-sm`}
//           >
//             <option value="date">Date</option>
//             <option value="alphabetical">A-Z</option>
//             <option value="color">Color</option>
//           </select>

//           <button
//             onClick={() => onSortDirectionChange(sortDirection === 'asc' ? 'desc' : 'asc')}
//             className="p-2 text-white hover:bg-white/20 rounded-lg transition-all duration-300 transform hover:scale-110"
//           >
//             <div className={`transition-transform duration-300 ${
//               sortDirection === 'desc' ? 'rotate-180' : 'rotate-0'
//             }`}>
//               <SortAsc className="w-4 h-4" />
//             </div>
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;

// import React from "react";
// import { Edit3, Moon, Sun } from "lucide-react";

// function Header({ 
//   isDarkMode, 
//   onToggleDarkMode
// }) {
//   return (
//     <header className={`shadow-lg transition-all duration-500 ease-in-out ${
//       isDarkMode 
//         ? 'bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800' 
//         : 'bg-gradient-to-r from-white via-gray-50 to-white border-b border-gray-200'
//     }`}>
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo and Title */}
//           <div className="flex items-center gap-3">
//             <div className={`p-2 rounded-lg transition-all duration-300 ${
//               isDarkMode ? 'bg-gray-600/50' : 'bg-gray-100'
//             }`}>
//               <Edit3 className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-gray-700'}`} />
//             </div>
//             <h1 className={`text-2xl font-bold tracking-wide ${
//               isDarkMode ? 'text-white' : 'text-gray-800'
//             }`}>
//               Keeper
//             </h1>
//           </div>

//           {/* Controls Section */}
//           <div className="flex items-center gap-4">
//             {/* Dark Mode Toggle with Animation */}
//             <button
//               onClick={onToggleDarkMode}
//               className={`relative p-3 rounded-full transition-all duration-500 ease-in-out ${
//                 isDarkMode
//                   ? 'text-yellow-300 hover:bg-gray-600/60 shadow-lg shadow-yellow-500/20'
//                   : 'text-gray-600 hover:bg-gray-100 shadow-lg shadow-gray-400/20'
//               } transform hover:scale-110 active:scale-95 backdrop-blur-sm overflow-hidden`}
//               title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
//             >
//               {/* Background glow effect */}
//               <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
//                 isDarkMode 
//                   ? 'bg-gradient-to-r from-yellow-400/10 to-orange-400/10' 
//                   : 'bg-gradient-to-r from-gray-400/10 to-gray-500/10'
//               }`}></div>
              
//               {/* Icon container with rotation animation */}
//               <div className="relative z-10">
//                 <div className={`transition-all duration-500 ease-in-out ${
//                   isDarkMode ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
//                 } absolute inset-0 flex items-center justify-center`}>
//                   <Sun className="w-5 h-5" />
//                 </div>
//                 <div className={`transition-all duration-500 ease-in-out ${
//                   isDarkMode ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
//                 } flex items-center justify-center`}>
//                   <Moon className="w-5 h-5" />
//                 </div>
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;


// import React from "react";
// import { Edit3, Moon, Sun, Search } from "lucide-react";

// function Header({
//   isDarkMode,
//   onToggleDarkMode,
//   searchTerm,
//   onSearchChange
// }) {
//   return (
//     <header className={`shadow-lg transition-all duration-500 ease-in-out ${
//       isDarkMode
//         ? 'bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800'
//         : 'bg-gradient-to-r from-white via-gray-50 to-white border-b border-gray-200'
//     }`}>
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo and Title */}
//           <div className="flex items-center gap-3">
//             <div className={`p-2 rounded-lg transition-all duration-300 ${
//               isDarkMode ? 'bg-gray-600/50' : 'bg-gray-100'
//             }`}>
//               <Edit3 className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-gray-700'}`} />
//             </div>
//             <h1 className={`text-2xl font-bold tracking-wide ${
//               isDarkMode ? 'text-white' : 'text-gray-800'
//             }`}>
//               Keeper
//             </h1>
//           </div>

//           {/* Search Bar */}
//           <div className="flex-1 flex justify-center mx-8">
//             <div className="relative w-full max-w-md">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <Search className={`w-4 h-4 ${
//                   isDarkMode ? 'text-gray-400' : 'text-gray-500'
//                 }`} />
//               </div>
//               <input
//                 type="text"
//                 placeholder="Search notes..."
//                 value={searchTerm}
//                 onChange={(e) => onSearchChange(e.target.value)}
//                 className={`w-full pl-10 pr-4 py-2 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 ${
//                   isDarkMode
//                     ? 'bg-gray-700/60 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500'
//                     : 'bg-white/80 border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500'
//                 } backdrop-blur-sm`}
//               />
//             </div>
//           </div>

//           {/* Controls Section */}
//           <div className="flex items-center gap-4">
//             {/* Dark Mode Toggle with Animation */}
//             <button
//               onClick={onToggleDarkMode}
//               className={`relative p-3 rounded-full transition-all duration-500 ease-in-out ${
//                 isDarkMode
//                   ? 'text-yellow-300 hover:bg-gray-600/60 shadow-lg shadow-yellow-500/20'
//                   : 'text-gray-600 hover:bg-gray-100 shadow-lg shadow-gray-400/20'
//               } transform hover:scale-110 active:scale-95 backdrop-blur-sm overflow-hidden`}
//               title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
//             >
//               {/* Background glow effect */}
//               <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
//                 isDarkMode
//                   ? 'bg-gradient-to-r from-yellow-400/10 to-orange-400/10'
//                   : 'bg-gradient-to-r from-gray-400/10 to-gray-500/10'
//               }`}></div>

//               {/* Icon container with rotation animation */}
//               <div className="relative z-10">
//                 <div className={`transition-all duration-500 ease-in-out ${
//                   isDarkMode ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
//                 } absolute inset-0 flex items-center justify-center`}>
//                   <Sun className="w-5 h-5" />
//                 </div>
//                 <div className={`transition-all duration-500 ease-in-out ${
//                   isDarkMode ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
//                 } flex items-center justify-center`}>
//                   <Moon className="w-5 h-5" />
//                 </div>
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;

// import React, { useState, useEffect } from "react";
// import { Edit3, Moon, Sun, Search } from "lucide-react";

// function Header({
//   isDarkMode,
//   onToggleDarkMode,
//   searchTerm,
//   onSearchChange
// }) {
//   // Dynamic placeholder text
//   const placeholders = [
//     "Search your notes...",
//     "Find that idea...",
//     "Look for inspiration...",
//     "Discover your thoughts...",
//     "Search memories...",
//     "Find your creativity...",
//     "Explore your notes...",
//     "Search for wisdom..."
//   ];

//   const [currentPlaceholder, setCurrentPlaceholder] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentPlaceholder(prev => (prev + 1) % placeholders.length);
//     }, 3000); // Change every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <header className={`shadow-lg transition-all duration-500 ease-in-out ${
//       isDarkMode
//         ? 'bg-gradient-to-r from-slate-800 via-gray-800 to-slate-800'
//         : 'bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border-b border-emerald-100'
//     }`}>
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo and Title */}
//           <div className="flex items-center gap-3">
//             <div className={`p-2 rounded-xl transition-all duration-300 ${
//               isDarkMode ? 'bg-emerald-600/20' : 'bg-emerald-100'
//             }`}>
//               <Edit3 className={`w-6 h-6 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}`} />
//             </div>
//             <h1 className={`text-2xl font-bold tracking-wide ${
//               isDarkMode ? 'text-white' : 'text-slate-800'
//             }`}>
//               Keeper
//             </h1>
//           </div>

//           {/* Search Bar */}
//           <div className="flex-1 flex justify-center mx-2 sm:mx-4 md:mx-8">
//             <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <Search className={`w-4 h-4 ${
//                   isDarkMode ? 'text-emerald-400' : 'text-emerald-500'
//                 }`} />
//               </div>
//               <input
//                 type="text"
//                 placeholder={placeholders[currentPlaceholder]}
//                 value={searchTerm}
//                 onChange={(e) => onSearchChange(e.target.value)}
//                 className={`w-full pl-10 pr-4 py-2 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 text-sm sm:text-base ${
//                   isDarkMode
//                     ? 'bg-slate-700/60 border-slate-600 text-white placeholder-slate-400 focus:ring-emerald-500 focus:border-emerald-500'
//                     : 'bg-white/80 border-emerald-200 text-slate-900 placeholder-slate-500 focus:ring-emerald-500 focus:border-emerald-500'
//                 } backdrop-blur-sm`}
//               />
//             </div>
//           </div>

//           {/* Controls Section */}
//           <div className="flex items-center gap-4">
//             {/* Dark Mode Toggle with Animation */}
//             <button
//               onClick={onToggleDarkMode}
//               className={`relative p-3 rounded-full transition-all duration-500 ease-in-out ${
//                 isDarkMode
//                   ? 'text-amber-300 hover:bg-slate-600/60 shadow-lg shadow-amber-500/20'
//                   : 'text-slate-600 hover:bg-emerald-100 shadow-lg shadow-emerald-400/20'
//               } transform hover:scale-110 active:scale-95 backdrop-blur-sm overflow-hidden`}
//               title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
//             >
//               {/* Background glow effect */}
//               <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
//                 isDarkMode
//                   ? 'bg-gradient-to-r from-amber-400/10 to-orange-400/10'
//                   : 'bg-gradient-to-r from-emerald-400/10 to-teal-400/10'
//               }`}></div>

//               {/* Icon container with rotation animation */}
//               <div className="relative z-10">
//                 <div className={`transition-all duration-500 ease-in-out ${
//                   isDarkMode ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
//                 } absolute inset-0 flex items-center justify-center`}>
//                   <Sun className="w-5 h-5" />
//                 </div>
//                 <div className={`transition-all duration-500 ease-in-out ${
//                   isDarkMode ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
//                 } flex items-center justify-center`}>
//                   <Moon className="w-5 h-5" />
//                 </div>
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;

import React, { useState, useEffect } from "react";
import { Edit3, Moon, Sun, Search } from "lucide-react";

function Header({
  isDarkMode,
  onToggleDarkMode,
  searchTerm,
  onSearchChange
}) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  // Dynamic placeholder text
  const placeholders = [
    "Search your notes...",
    "Find that idea...",
    "Look for inspiration...",
    "Discover your thoughts...",
    "Search memories...",
    "Find your creativity...",
    "Explore your notes...",
    "Search for wisdom..."
  ];

  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholder(prev => (prev + 1) % placeholders.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <header className={`relative shadow-lg transition-all duration-500 ease-in-out ${
      isDarkMode
        ? 'bg-gradient-to-r from-slate-800 via-gray-800 to-slate-800'
        : 'bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border-b border-emerald-100'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo and Title */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <div className={`p-1.5 sm:p-2 rounded-xl transition-all duration-300 ${
              isDarkMode ? 'bg-emerald-600/20' : 'bg-emerald-100'
            }`}>
              <Edit3 className={`w-5 h-5 sm:w-6 sm:h-6 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}`} />
            </div>
            <h1 className={`text-lg sm:text-2xl font-bold tracking-wide ${
              isDarkMode ? 'text-white' : 'text-slate-800'
            }`}>
              Keeper
            </h1>
          </div>

          {/* Search Bar - Hidden on mobile, shown on larger screens */}
          <div className="hidden sm:flex flex-1 justify-center mx-4 md:mx-8 min-w-0">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className={`w-4 h-4 ${
                  isDarkMode ? 'text-emerald-400' : 'text-emerald-500'
                }`} />
              </div>
              <input
                type="text"
                placeholder={placeholders[currentPlaceholder]}
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 text-sm md:text-base ${
                  isDarkMode
                    ? 'bg-slate-700/60 border-slate-600 text-white placeholder-slate-400 focus:ring-emerald-500 focus:border-emerald-500'
                    : 'bg-white/80 border-emerald-200 text-slate-900 placeholder-slate-500 focus:ring-emerald-500 focus:border-emerald-500'
                } backdrop-blur-sm`}
              />
            </div>
          </div>

          {/* Mobile Search Bar - Only shown when isSearchOpen is true */}
          {isSearchOpen && (
            <div className="absolute top-full left-0 right-0 sm:hidden bg-inherit border-t border-opacity-20 px-4 py-3 z-10">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className={`w-4 h-4 ${
                    isDarkMode ? 'text-emerald-400' : 'text-emerald-500'
                  }`} />
                </div>
                <input
                  type="text"
                  placeholder={placeholders[currentPlaceholder]}
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className={`w-full pl-10 pr-4 py-2 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 text-sm ${
                    isDarkMode
                      ? 'bg-slate-700/60 border-slate-600 text-white placeholder-slate-400 focus:ring-emerald-500 focus:border-emerald-500'
                      : 'bg-white/80 border-emerald-200 text-slate-900 placeholder-slate-500 focus:ring-emerald-500 focus:border-emerald-500'
                  } backdrop-blur-sm`}
                  autoFocus
                />
              </div>
            </div>
          )}

          {/* Controls Section */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            {/* Mobile Search Toggle - Only visible on small screens */}
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`sm:hidden p-2 rounded-full transition-all duration-300 ease-in-out ${
                isDarkMode
                  ? 'text-emerald-400 hover:bg-slate-600/60'
                  : 'text-emerald-600 hover:bg-emerald-100'
              } transform hover:scale-110 active:scale-95`}
              title="Toggle search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={onToggleDarkMode}
              className={`relative p-2 sm:p-3 rounded-full transition-all duration-500 ease-in-out ${
                isDarkMode
                  ? 'text-amber-300 hover:bg-slate-600/60 shadow-lg shadow-amber-500/20'
                  : 'text-slate-600 hover:bg-emerald-100 shadow-lg shadow-emerald-400/20'
              } transform hover:scale-110 active:scale-95 backdrop-blur-sm overflow-hidden`}
              title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            >
              {/* Background glow effect */}
              <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                isDarkMode
                  ? 'bg-gradient-to-r from-amber-400/10 to-orange-400/10'
                  : 'bg-gradient-to-r from-emerald-400/10 to-teal-400/10'
              }`}></div>

              {/* Icon container with rotation animation */}
              <div className="relative z-10">
                <div className={`transition-all duration-500 ease-in-out ${
                  isDarkMode ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
                } absolute inset-0 flex items-center justify-center`}>
                  <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className={`transition-all duration-500 ease-in-out ${
                  isDarkMode ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
                } flex items-center justify-center`}>
                  <Moon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;