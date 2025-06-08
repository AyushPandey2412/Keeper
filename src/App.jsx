// import React, { useState } from "react";
// import { Edit3, Search } from "lucide-react";
// import Header from "./Header";
// import Footer from "./Footer";
// import SearchBar from "./SearchBar";
// import CreateArea from "./CreateArea";
// import Note from "./Note";

// function App() {
//   const [notes, setNotes] = useState([
//     {
//       id: 1,
//       title: "Welcome to Keeper!",
//       content: "Double-click on any note to edit it. Try the <strong>rich text</strong> formatting and <em>colored titles</em>!<br><br>• Use bullet points<br>• Format your text<br>• Choose title colors",
//       titleColor: "text-green-600"
//     },
//     {
//       id: 2,
//       title: "Rich Text Example",
//       content: "<strong>Bold text</strong>, <em>italic text</em>, and <u>underlined text</u>.<br><br>Ordered list:<br>1. First item<br>2. Second item<br>3. Third item",
//       titleColor: "text-pink-600"
//     }
//   ]);
//   const [searchTerm, setSearchTerm] = useState("");

//   function addNote(newNote) {
//     const noteWithId = {
//       ...newNote,
//       id: Date.now()
//     };
//     setNotes(prevNotes => [...prevNotes, noteWithId]);
//   }

//   function deleteNote(id) {
//     setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
//   }

//   function editNote(id, updatedNote) {
//     setNotes(prevNotes => 
//       prevNotes.map(note => 
//         note.id === id ? { ...note, ...updatedNote } : note
//       )
//     );
//   }

//   // Filter notes based on search term
//   const filteredNotes = notes.filter(note => {
//     const searchLower = searchTerm.toLowerCase();
//     const titleMatch = note.title.toLowerCase().includes(searchLower);
//     const contentMatch = note.content.toLowerCase().includes(searchLower);
//     return titleMatch || contentMatch;
//   });

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col">
//       <Header />
      
//       <main className="flex-1 container mx-auto px-4 py-6">
//         <CreateArea onAdd={addNote} />
        
//         <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        
//         {filteredNotes.length > 0 ? (
//           <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 max-w-7xl mx-auto">
//             {filteredNotes.map((note) => (
//               <div key={note.id} className="relative">
//                 <Note
//                   id={note.id}
//                   title={note.title}
//                   content={note.content}
//                   titleColor={note.titleColor}
//                   onDelete={deleteNote}
//                   onEdit={editNote}
//                 />
//               </div>
//             ))}
//           </div>
//         ) : searchTerm ? (
//           <div className="text-center py-12">
//             <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//             <p className="text-gray-500 text-lg">No notes found for "{searchTerm}"</p>
//             <p className="text-gray-400 text-sm mt-2">Try searching with different keywords</p>
//           </div>
//         ) : (
//           <div className="text-center py-12">
//             <Edit3 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//             <p className="text-gray-500 text-lg">No notes yet. Create your first note above!</p>
//           </div>
//         )}
//       </main>
      
//       <Footer />
//     </div>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import { Edit3, Search } from "lucide-react";
// import Header from "./Header";
// import Footer from "./Footer";
// import SearchBar from "./SearchBar";
// import CreateArea from "./CreateArea";
// import Note from "./Note";

// function App() {
//   const [notes, setNotes] = useState([
//     {
//       id: 1,
//       title: "Welcome to Keeper!",
//       content: "Double-click on any note to edit it. Try the <strong>rich text</strong> formatting and <em>colored titles</em>!<br><br>• Use bullet points<br>• Format your text<br>• Choose title colors",
//       titleColor: "#dcfce7" // Green background instead of text class
//     },
//     {
//       id: 2,
//       title: "Rich Text Example",
//       content: "<strong>Bold text</strong>, <em>italic text</em>, and <u>underlined text</u>.<br><br>Ordered list:<br>1. First item<br>2. Second item<br>3. Third item",
//       titleColor: "#fce7f3" // Pink background instead of text class
//     }
//   ]);
//   const [searchTerm, setSearchTerm] = useState("");

//   function addNote(newNote) {
//     const noteWithId = {
//       ...newNote,
//       id: Date.now()
//     };
//     setNotes(prevNotes => [...prevNotes, noteWithId]);
//   }

//   function deleteNote(id) {
//     setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
//   }

//   function editNote(id, updatedNote) {
//     setNotes(prevNotes => 
//       prevNotes.map(note => 
//         note.id === id ? { ...note, ...updatedNote } : note
//       )
//     );
//   }

//   // Helper function to strip HTML tags for search
//   function stripHtml(html) {
//     const tmp = document.createElement("div");
//     tmp.innerHTML = html;
//     return tmp.textContent || tmp.innerText || "";
//   }

//   // Filter notes based on search term
//   const filteredNotes = notes.filter(note => {
//     if (!searchTerm.trim()) return true; // Show all notes if search is empty
    
//     const searchLower = searchTerm.toLowerCase().trim();
//     const titleMatch = note.title.toLowerCase().includes(searchLower);
//     // Strip HTML tags from content before searching
//     const contentText = stripHtml(note.content);
//     const contentMatch = contentText.toLowerCase().includes(searchLower);
    
//     return titleMatch || contentMatch;
//   });

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col">
//       <Header />
      
//       <main className="flex-1 container mx-auto px-4 py-6">
//         <CreateArea onAdd={addNote} />
        
//         <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        
//         {/* Show search results info */}
//         {searchTerm.trim() && (
//           <div className="text-center mb-4">
//             <p className="text-sm text-gray-600">
//               {filteredNotes.length === 0 
//                 ? `No results found for "${searchTerm}"` 
//                 : `Found ${filteredNotes.length} note${filteredNotes.length === 1 ? '' : 's'} for "${searchTerm}"`
//               }
//             </p>
//           </div>
//         )}
        
//         {filteredNotes.length > 0 ? (
//           <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 max-w-7xl mx-auto">
//             {filteredNotes.map((note) => (
//               <div key={note.id} className="relative">
//                 <Note
//                   id={note.id}
//                   title={note.title}
//                   content={note.content}
//                   titleColor={note.titleColor}
//                   onDelete={deleteNote}
//                   onEdit={editNote}
//                 />
//               </div>
//             ))}
//           </div>
//         ) : searchTerm.trim() ? (
//           <div className="text-center py-12">
//             <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//             <p className="text-gray-500 text-lg">No notes found for "{searchTerm}"</p>
//             <p className="text-gray-400 text-sm mt-2">Try searching with different keywords</p>
//           </div>
//         ) : (
//           <div className="text-center py-12">
//             <Edit3 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//             <p className="text-gray-500 text-lg">No notes yet. Create your first note above!</p>
//           </div>
//         )}
//       </main>
      
//       <Footer />
//     </div>
//   );
// }

// export default App;





// ----new feature 


// import React, { useState, useEffect } from "react";
// import { Edit3, Search, Moon, Sun, SortAsc, SortDesc } from "lucide-react";
// import Header from "./Header";
// import Footer from "./Footer";
// import SearchBar from "./SearchBar";
// import CreateArea from "./CreateArea";
// import Note from "./Note";

// function App() {
//   const [notes, setNotes] = useState([
//     {
//       id: 1,
//       title: "Welcome to Keeper!",
//       content: "Double-click on any note to edit it. Try the <strong>rich text</strong> formatting and <em>colored titles</em>!<br><br>• Use bullet points<br>• Format your text<br>• Choose title colors",
//       titleColor: "#dcfce7",
//       isPinned: true,
//       createdAt: new Date('2024-01-15T10:30:00'),
//       updatedAt: new Date('2024-01-15T10:30:00')
//     },
//     {
//       id: 2,
//       title: "Rich Text Example",
//       content: "<strong>Bold text</strong>, <em>italic text</em>, and <u>underlined text</u>.<br><br>Ordered list:<br>1. First item<br>2. Second item<br>3. Third item",
//       titleColor: "#fce7f3",
//       isPinned: false,
//       createdAt: new Date('2024-01-16T14:20:00'),
//       updatedAt: new Date('2024-01-16T14:20:00')
//     }
//   ]);
  
//   const [searchTerm, setSearchTerm] = useState("");
//   const [isDarkMode, setIsDarkMode] = useState(() => {
//     const saved = localStorage.getItem('darkMode');
//     return saved ? JSON.parse(saved) : false;
//   });
//   const [sortBy, setSortBy] = useState('date');
//   const [sortDirection, setSortDirection] = useState('desc');
//   const [draggedNote, setDraggedNote] = useState(null);
//   const [showSuccess, setShowSuccess] = useState(null);
//   const [deletingNoteId, setDeletingNoteId] = useState(null);

//   // Apply dark mode
//   useEffect(() => {
//     if (isDarkMode) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//     localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
//   }, [isDarkMode]);

//   function toggleDarkMode() {
//     setIsDarkMode(!isDarkMode);
//   }

//   function addNote(newNote) {
//     const noteWithId = {
//       ...newNote,
//       id: Date.now(),
//       createdAt: new Date(),
//       updatedAt: new Date(),
//       isPinned: false
//     };
//     setNotes(prevNotes => [...prevNotes, noteWithId]);
    
//     // Show success animation
//     setShowSuccess('created');
//     setTimeout(() => setShowSuccess(null), 2000);
//   }

//   function deleteNote(id) {
//     setDeletingNoteId(id);
//     setTimeout(() => {
//       setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
//       setDeletingNoteId(null);
//     }, 300);
//   }

//   function editNote(id, updatedNote) {
//     setNotes(prevNotes => 
//       prevNotes.map(note => 
//         note.id === id ? { 
//           ...note, 
//           ...updatedNote, 
//           updatedAt: new Date() 
//         } : note
//       )
//     );
    
//     // Show success animation
//     setShowSuccess('updated');
//     setTimeout(() => setShowSuccess(null), 2000);
//   }

//   function togglePin(id) {
//     setNotes(prevNotes =>
//       prevNotes.map(note =>
//         note.id === id ? { 
//           ...note, 
//           isPinned: !note.isPinned,
//           updatedAt: new Date()
//         } : note
//       )
//     );
//   }

//   // Drag and drop handlers
//   function handleDragStart(e, noteId) {
//     setDraggedNote(noteId);
//     e.dataTransfer.effectAllowed = 'move';
//   }

//   function handleDragOver(e) {
//     e.preventDefault();
//     e.dataTransfer.dropEffect = 'move';
//   }

//   function handleDrop(e, targetNoteId) {
//     e.preventDefault();
    
//     if (draggedNote === targetNoteId) return;
    
//     const draggedIndex = notes.findIndex(note => note.id === draggedNote);
//     const targetIndex = notes.findIndex(note => note.id === targetNoteId);
    
//     const newNotes = [...notes];
//     const draggedNoteObj = newNotes[draggedIndex];
    
//     newNotes.splice(draggedIndex, 1);
//     newNotes.splice(targetIndex, 0, draggedNoteObj);
    
//     setNotes(newNotes);
//     setDraggedNote(null);
//   }

//   function handleDragEnd() {
//     setDraggedNote(null);
//   }

//   // Helper function to strip HTML tags for search
//   function stripHtml(html) {
//     const tmp = document.createElement("div");
//     tmp.innerHTML = html;
//     return tmp.textContent || tmp.innerText || "";
//   }

//   // Sorting function
//   function sortNotes(notesToSort) {
//     return [...notesToSort].sort((a, b) => {
//       // Always show pinned notes first
//       if (a.isPinned && !b.isPinned) return -1;
//       if (!a.isPinned && b.isPinned) return 1;
      
//       let result = 0;
      
//       switch (sortBy) {
//         case 'alphabetical':
//           result = a.title.localeCompare(b.title);
//           break;
//         case 'color':
//           result = a.titleColor.localeCompare(b.titleColor);
//           break;
//         case 'date':
//         default:
//           result = new Date(a.createdAt) - new Date(b.createdAt);
//           break;
//       }
      
//       return sortDirection === 'asc' ? result : -result;
//     });
//   }

//   // Filter and sort notes
//   const filteredNotes = notes.filter(note => {
//     if (!searchTerm.trim()) return true;
    
//     const searchLower = searchTerm.toLowerCase().trim();
//     const titleMatch = note.title.toLowerCase().includes(searchLower);
//     const contentText = stripHtml(note.content);
//     const contentMatch = contentText.toLowerCase().includes(searchLower);
    
//     return titleMatch || contentMatch;
//   });

//   const sortedNotes = sortNotes(filteredNotes);

//   return (
//     <div className={`min-h-screen transition-colors duration-300 ${
//       isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
//     } flex flex-col`}>
//       {/* Success Animation */}
//       {showSuccess && (
//         <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
//           <div className={`px-4 py-2 rounded-lg shadow-lg ${
//             isDarkMode ? 'bg-green-800 text-green-100' : 'bg-green-100 text-green-800'
//           }`}>
//             Note {showSuccess} successfully! ✨
//           </div>
//         </div>
//       )}

//       <Header 
//         isDarkMode={isDarkMode} 
//         onToggleDarkMode={toggleDarkMode}
//         sortBy={sortBy}
//         sortDirection={sortDirection}
//         onSortChange={setSortBy}
//         onSortDirectionChange={setSortDirection}
//       />
      
//       <main className="flex-1 container mx-auto px-4 py-6">
//         <CreateArea onAdd={addNote} isDarkMode={isDarkMode} />
        
//         <SearchBar 
//           searchTerm={searchTerm} 
//           onSearchChange={setSearchTerm}
//           isDarkMode={isDarkMode}
//         />
        
//         {/* Sort Controls */}
//         <div className="flex justify-center mb-6">
//           <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
//             isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
//           } shadow-md`}>
//             <span className="text-sm font-medium">Sort by:</span>
//             <select
//               value={sortBy}
//               onChange={(e) => setSortBy(e.target.value)}
//               className={`px-2 py-1 rounded text-sm ${
//                 isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'
//               }`}
//             >
//               <option value="date">Date</option>
//               <option value="alphabetical">A-Z</option>
//               <option value="color">Color</option>
//             </select>
//             <button
//               onClick={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')}
//               className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
//             >
//               {sortDirection === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />}
//             </button>
//           </div>
//         </div>
        
//         {/* Search results info */}
//         {searchTerm.trim() && (
//           <div className="text-center mb-4">
//             <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//               {filteredNotes.length === 0 
//                 ? `No results found for "${searchTerm}"` 
//                 : `Found ${filteredNotes.length} note${filteredNotes.length === 1 ? '' : 's'} for "${searchTerm}"`
//               }
//             </p>
//           </div>
//         )}
        
//         {sortedNotes.length > 0 ? (
//           <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 max-w-7xl mx-auto">
//             {sortedNotes.map((note) => (
//               <div key={note.id} className="relative">
//                 <Note
//                   id={note.id}
//                   title={note.title}
//                   content={note.content}
//                   titleColor={note.titleColor}
//                   isPinned={note.isPinned}
//                   createdAt={note.createdAt}
//                   updatedAt={note.updatedAt}
//                   onDelete={deleteNote}
//                   onEdit={editNote}
//                   onPin={togglePin}
//                   onDragStart={handleDragStart}
//                   onDragEnd={handleDragEnd}
//                   onDragOver={handleDragOver}
//                   onDrop={handleDrop}
//                   isDarkMode={isDarkMode}
//                   isDeleting={deletingNoteId === note.id}
//                   isDragging={draggedNote === note.id}
//                 />
//               </div>
//             ))}
//           </div>
//         ) : searchTerm.trim() ? (
//           <div className="text-center py-12">
//             <Search className={`w-16 h-16 mx-auto mb-4 ${
//               isDarkMode ? 'text-gray-600' : 'text-gray-300'
//             }`} />
//             <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
//               No notes found for "{searchTerm}"
//             </p>
//             <p className={`text-sm mt-2 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
//               Try searching with different keywords
//             </p>
//           </div>
//         ) : (
//           <div className="text-center py-12">
//             <Edit3 className={`w-16 h-16 mx-auto mb-4 ${
//               isDarkMode ? 'text-gray-600' : 'text-gray-300'
//             }`} />
//             <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
//               No notes yet. Create your first note above!
//             </p>
//           </div>
//         )}
//       </main>
      
//       <Footer isDarkMode={isDarkMode} />
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";
// import { Edit3, Search, Moon, Sun, SortAsc, SortDesc } from "lucide-react";
// import Header from "./Header";
// import Footer from "./Footer";
// import SearchBar from "./SearchBar";
// import CreateArea from "./CreateArea";
// import Note from "./Note";

// function App() {
//   const [notes, setNotes] = useState([
//     {
//       id: 1,
//       title: "Welcome to Keeper!",
//       content: "Double-click on any note to edit it. Try the <strong>rich text</strong> formatting and <em>colored titles</em>!<br><br>• Use bullet points<br>• Format your text<br>• Choose title colors",
//       titleColor: "#dcfce7",
//       isPinned: true,
//       createdAt: new Date('2024-01-15T10:30:00'),
//       updatedAt: new Date('2024-01-15T10:30:00')
//     },
//     {
//       id: 2,
//       title: "Rich Text Example",
//       content: "<strong>Bold text</strong>, <em>italic text</em>, and <u>underlined text</u>.<br><br>Ordered list:<br>1. First item<br>2. Second item<br>3. Third item",
//       titleColor: "#fce7f3",
//       isPinned: false,
//       createdAt: new Date('2024-01-16T14:20:00'),
//       updatedAt: new Date('2024-01-16T14:20:00')
//     }
//   ]);
  
//   const [searchTerm, setSearchTerm] = useState("");
//   const [isDarkMode, setIsDarkMode] = useState(() => {
//     const saved = localStorage.getItem('darkMode');
//     return saved ? JSON.parse(saved) : false;
//   });
//   const [sortBy, setSortBy] = useState('date');
//   const [sortDirection, setSortDirection] = useState('desc');
//   const [draggedNote, setDraggedNote] = useState(null);
//   const [showSuccess, setShowSuccess] = useState(null);
//   const [deletingNoteId, setDeletingNoteId] = useState(null);

//   // Apply dark mode
//   useEffect(() => {
//     if (isDarkMode) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//     localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
//   }, [isDarkMode]);

//   function toggleDarkMode() {
//     setIsDarkMode(!isDarkMode);
//   }

//   function addNote(newNote) {
//     const noteWithId = {
//       ...newNote,
//       id: Date.now(),
//       createdAt: new Date(),
//       updatedAt: new Date(),
//       isPinned: false
//     };
//     setNotes(prevNotes => [...prevNotes, noteWithId]);
    
//     // Show success animation
//     setShowSuccess('created');
//     setTimeout(() => setShowSuccess(null), 2000);
//   }

//   function deleteNote(id) {
//     setDeletingNoteId(id);
//     setTimeout(() => {
//       setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
//       setDeletingNoteId(null);
//     }, 300);
//   }

//   function editNote(id, updatedNote) {
//     setNotes(prevNotes => 
//       prevNotes.map(note => 
//         note.id === id ? { 
//           ...note, 
//           ...updatedNote, 
//           updatedAt: new Date() 
//         } : note
//       )
//     );
    
//     // Show success animation
//     setShowSuccess('updated');
//     setTimeout(() => setShowSuccess(null), 2000);
//   }

//   function togglePin(id) {
//     setNotes(prevNotes =>
//       prevNotes.map(note =>
//         note.id === id ? { 
//           ...note, 
//           isPinned: !note.isPinned,
//           updatedAt: new Date()
//         } : note
//       )
//     );
//   }

//   // Drag and drop handlers
//   function handleDragStart(e, noteId) {
//     setDraggedNote(noteId);
//     e.dataTransfer.effectAllowed = 'move';
//   }

//   function handleDragOver(e) {
//     e.preventDefault();
//     e.dataTransfer.dropEffect = 'move';
//   }

//   function handleDrop(e, targetNoteId) {
//     e.preventDefault();
    
//     if (draggedNote === targetNoteId) return;
    
//     const draggedIndex = notes.findIndex(note => note.id === draggedNote);
//     const targetIndex = notes.findIndex(note => note.id === targetNoteId);
    
//     const newNotes = [...notes];
//     const draggedNoteObj = newNotes[draggedIndex];
    
//     newNotes.splice(draggedIndex, 1);
//     newNotes.splice(targetIndex, 0, draggedNoteObj);
    
//     setNotes(newNotes);
//     setDraggedNote(null);
//   }

//   function handleDragEnd() {
//     setDraggedNote(null);
//   }

//   // Helper function to strip HTML tags for search
//   function stripHtml(html) {
//     const tmp = document.createElement("div");
//     tmp.innerHTML = html;
//     return tmp.textContent || tmp.innerText || "";
//   }

//   // Sorting function
//   function sortNotes(notesToSort) {
//     return [...notesToSort].sort((a, b) => {
//       // Always show pinned notes first
//       if (a.isPinned && !b.isPinned) return -1;
//       if (!a.isPinned && b.isPinned) return 1;
      
//       let result = 0;
      
//       switch (sortBy) {
//         case 'alphabetical':
//           result = a.title.localeCompare(b.title);
//           break;
//         case 'color':
//           result = a.titleColor.localeCompare(b.titleColor);
//           break;
//         case 'date':
//         default:
//           result = new Date(a.createdAt) - new Date(b.createdAt);
//           break;
//       }
      
//       return sortDirection === 'asc' ? result : -result;
//     });
//   }

//   // Filter and sort notes
//   const filteredNotes = notes.filter(note => {
//     if (!searchTerm.trim()) return true;
    
//     const searchLower = searchTerm.toLowerCase().trim();
//     const titleMatch = note.title.toLowerCase().includes(searchLower);
//     const contentText = stripHtml(note.content);
//     const contentMatch = contentText.toLowerCase().includes(searchLower);
    
//     return titleMatch || contentMatch;
//   });

//   const sortedNotes = sortNotes(filteredNotes);

//   return (
//     <div className={`min-h-screen transition-colors duration-300 ${
//       isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
//     } flex flex-col`}>
//       {/* Success Animation */}
//       {showSuccess && (
//         <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
//           <div className={`px-4 py-2 rounded-lg shadow-lg ${
//             isDarkMode ? 'bg-green-800 text-green-100' : 'bg-green-100 text-green-800'
//           }`}>
//             Note {showSuccess} successfully! ✨
//           </div>
//         </div>
//       )}

//       <Header 
//         isDarkMode={isDarkMode} 
//         onToggleDarkMode={toggleDarkMode}
//         sortBy={sortBy}
//         sortDirection={sortDirection}
//         onSortChange={setSortBy}
//         onSortDirectionChange={setSortDirection}
//         searchTerm={searchTerm}
//         onSearchChange={setSearchTerm}
//       />
      
//       <main className="flex-1 container mx-auto px-4 py-6">
//         <CreateArea onAdd={addNote} isDarkMode={isDarkMode} />
        
//         {/* Sort Controls */}
//         <div className="flex justify-center mb-6">
//           <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
//             isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
//           } shadow-md`}>
//             <span className="text-sm font-medium">Sort by:</span>
//             <select
//               value={sortBy}
//               onChange={(e) => setSortBy(e.target.value)}
//               className={`px-2 py-1 rounded text-sm ${
//                 isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'
//               }`}
//             >
//               <option value="date">Date</option>
//               <option value="alphabetical">A-Z</option>
//               <option value="color">Color</option>
//             </select>
//             <button
//               onClick={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')}
//               className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
//             >
//               {sortDirection === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />}
//             </button>
//           </div>
//         </div>
        
//         {/* Search results info */}
//         {searchTerm.trim() && (
//           <div className="text-center mb-4">
//             <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//               {filteredNotes.length === 0 
//                 ? `No results found for "${searchTerm}"` 
//                 : `Found ${filteredNotes.length} note${filteredNotes.length === 1 ? '' : 's'} for "${searchTerm}"`
//               }
//             </p>
//           </div>
//         )}
        
//         {sortedNotes.length > 0 ? (
//           <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 max-w-7xl mx-auto">
//             {sortedNotes.map((note) => (
//               <div key={note.id} className="relative">
//                 <Note
//                   id={note.id}
//                   title={note.title}
//                   content={note.content}
//                   titleColor={note.titleColor}
//                   isPinned={note.isPinned}
//                   createdAt={note.createdAt}
//                   updatedAt={note.updatedAt}
//                   onDelete={deleteNote}
//                   onEdit={editNote}
//                   onPin={togglePin}
//                   onDragStart={handleDragStart}
//                   onDragEnd={handleDragEnd}
//                   onDragOver={handleDragOver}
//                   onDrop={handleDrop}
//                   isDarkMode={isDarkMode}
//                   isDeleting={deletingNoteId === note.id}
//                   isDragging={draggedNote === note.id}
//                 />
//               </div>
//             ))}
//           </div>
//         ) : searchTerm.trim() ? (
//           <div className="text-center py-12">
//             <Search className={`w-16 h-16 mx-auto mb-4 ${
//               isDarkMode ? 'text-gray-600' : 'text-gray-300'
//             }`} />
//             <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
//               No notes found for "{searchTerm}"
//             </p>
//             <p className={`text-sm mt-2 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
//               Try searching with different keywords
//             </p>
//           </div>
//         ) : (
//           <div className="text-center py-12">
//             <Edit3 className={`w-16 h-16 mx-auto mb-4 ${
//               isDarkMode ? 'text-gray-600' : 'text-gray-300'
//             }`} />
//             <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
//               No notes yet. Create your first note above!
//             </p>
//           </div>
//         )}
//       </main>
      
//       <Footer isDarkMode={isDarkMode} />
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import { Edit3, Search, Moon, Sun, SortAsc, SortDesc } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import CreateArea from "./CreateArea";
import Note from "./Note";

function App() {
  const [notes, setNotes] = useState([]);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });
  const [sortBy, setSortBy] = useState('date');
  const [sortDirection, setSortDirection] = useState('desc');
  const [draggedNote, setDraggedNote] = useState(null);
  const [showSuccess, setShowSuccess] = useState(null);
  const [deletingNoteId, setDeletingNoteId] = useState(null);

  // Apply dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  function addNote(newNote) {
    const noteWithId = {
      ...newNote,
      id: Date.now(),
      createdAt: new Date(),
      updatedAt: new Date(),
      isPinned: false
    };
    setNotes(prevNotes => [...prevNotes, noteWithId]);
    
    // Show success animation
    setShowSuccess('created');
    setTimeout(() => setShowSuccess(null), 2000);
  }

  function deleteNote(id) {
    setDeletingNoteId(id);
    setTimeout(() => {
      setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
      setDeletingNoteId(null);
    }, 300);
  }

  function editNote(id, updatedNote) {
    setNotes(prevNotes => 
      prevNotes.map(note => 
        note.id === id ? { 
          ...note, 
          ...updatedNote, 
          updatedAt: new Date() 
        } : note
      )
    );
    
    // Show success animation
    setShowSuccess('updated');
    setTimeout(() => setShowSuccess(null), 2000);
  }

  function togglePin(id) {
    setNotes(prevNotes =>
      prevNotes.map(note =>
        note.id === id ? { 
          ...note, 
          isPinned: !note.isPinned,
          updatedAt: new Date()
        } : note
      )
    );
  }

  // Drag and drop handlers
  function handleDragStart(e, noteId) {
    setDraggedNote(noteId);
    e.dataTransfer.effectAllowed = 'move';
  }

  function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }

  function handleDrop(e, targetNoteId) {
    e.preventDefault();
    
    if (draggedNote === targetNoteId) return;
    
    const draggedIndex = notes.findIndex(note => note.id === draggedNote);
    const targetIndex = notes.findIndex(note => note.id === targetNoteId);
    
    const newNotes = [...notes];
    const draggedNoteObj = newNotes[draggedIndex];
    
    newNotes.splice(draggedIndex, 1);
    newNotes.splice(targetIndex, 0, draggedNoteObj);
    
    setNotes(newNotes);
    setDraggedNote(null);
  }

  function handleDragEnd() {
    setDraggedNote(null);
  }

  // Helper function to strip HTML tags for search
  function stripHtml(html) {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }

  // Sorting function
  function sortNotes(notesToSort) {
    return [...notesToSort].sort((a, b) => {
      // Always show pinned notes first
      if (a.isPinned && !b.isPinned) return -1;
      if (!a.isPinned && b.isPinned) return 1;
      
      let result = 0;
      
      switch (sortBy) {
        case 'alphabetical':
          result = a.title.localeCompare(b.title);
          break;
        case 'color':
          result = a.titleColor.localeCompare(b.titleColor);
          break;
        case 'date':
        default:
          result = new Date(a.createdAt) - new Date(b.createdAt);
          break;
      }
      
      return sortDirection === 'asc' ? result : -result;
    });
  }

  // Filter and sort notes
  const filteredNotes = notes.filter(note => {
    if (!searchTerm.trim()) return true;
    
    const searchLower = searchTerm.toLowerCase().trim();
    const titleMatch = note.title.toLowerCase().includes(searchLower);
    const contentText = stripHtml(note.content);
    const contentMatch = contentText.toLowerCase().includes(searchLower);
    
    return titleMatch || contentMatch;
  });

  const sortedNotes = sortNotes(filteredNotes);

  return (
    <div className="min-h-screen transition-colors duration-300 flex flex-col" 
         style={{ 
           backgroundColor: isDarkMode ? 'rgb(0, 0, 0)' : 'rgb(240, 249, 255)' 
         }}>
      {/* Success Animation */}
      {showSuccess && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
          <div className={`px-4 py-2 rounded-lg shadow-lg ${
            isDarkMode ? 'bg-green-800 text-green-100' : 'bg-green-100 text-green-800'
          }`}>
            Note {showSuccess} successfully! ✨
          </div>
        </div>
      )}

      <Header 
        isDarkMode={isDarkMode} 
        onToggleDarkMode={toggleDarkMode}
        sortBy={sortBy}
        sortDirection={sortDirection}
        onSortChange={setSortBy}
        onSortDirectionChange={setSortDirection}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <CreateArea onAdd={addNote} isDarkMode={isDarkMode} />
        
        {/* Sort Controls */}
        <div className="flex justify-center mb-6">
          <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
            isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
          } shadow-md`}>
            <span className="text-sm font-medium">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={`px-2 py-1 rounded text-sm ${
                isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'
              }`}
            >
              <option value="date">Date</option>
              <option value="alphabetical">A-Z</option>
              <option value="color">Color</option>
            </select>
            <button
              onClick={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')}
              className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
            >
              {sortDirection === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />}
            </button>
          </div>
        </div>
        
        {/* Search results info */}
        {searchTerm.trim() && (
          <div className="text-center mb-4">
            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {filteredNotes.length === 0 
                ? `No results found for "${searchTerm}"` 
                : `Found ${filteredNotes.length} note${filteredNotes.length === 1 ? '' : 's'} for "${searchTerm}"`
              }
            </p>
          </div>
        )}
        
        {sortedNotes.length > 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 max-w-7xl mx-auto">
            {sortedNotes.map((note) => (
              <div key={note.id} className="relative">
                <Note
                  id={note.id}
                  title={note.title}
                  content={note.content}
                  titleColor={note.titleColor}
                  isPinned={note.isPinned}
                  createdAt={note.createdAt}
                  updatedAt={note.updatedAt}
                  onDelete={deleteNote}
                  onEdit={editNote}
                  onPin={togglePin}
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  isDarkMode={isDarkMode}
                  isDeleting={deletingNoteId === note.id}
                  isDragging={draggedNote === note.id}
                />
              </div>
            ))}
          </div>
        ) : searchTerm.trim() ? (
          <div className="text-center py-12">
            <Search className={`w-16 h-16 mx-auto mb-4 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-400'
            }`} />
            <p className={`text-lg ${isDarkMode ? 'text-gray-200' : 'text-gray-500'}`}>
              No notes found for "{searchTerm}"
            </p>
            <p className={`text-sm mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-400'}`}>
              Try searching with different keywords
            </p>
          </div>
        ) : (
          <div className="text-center py-12">
            <Edit3 className={`w-16 h-16 mx-auto mb-4 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-400'
            }`} />
            <p className={`text-lg ${isDarkMode ? 'text-gray-200' : 'text-gray-500'}`}>
              No notes yet. Create your first note above!
            </p>
          </div>
        )}
      </main>
      
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;