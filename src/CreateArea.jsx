// import React, { useState, useRef } from "react";
// import { Plus } from "lucide-react";
// import TextToolbar from "./TextToolbar"; // Import the toolbar component

// function CreateArea({ onAdd }) {
//   const [isExpanded, setExpanded] = useState(false);
//   const [note, setNote] = useState({
//     title: "",
//     content: "",
//     titleColor: "text-gray-800"
//   });
//   const contentRef = useRef(null);
//   const titleRef = useRef(null);

//   function handleChange(event) {
//     const { name, value } = event.target;
//     setNote((prevNote) => ({
//       ...prevNote,
//       [name]: value,
//     }));
//   }

//   function handleFormat(command) {
//     const activeElement = document.activeElement;
//     if (activeElement === contentRef.current) {
//       document.execCommand(command, false, null);
//     }
//   }

//   function handleColorChange(color) {
//     setNote(prev => ({
//       ...prev,
//       titleColor: color
//     }));
//   }

//   function submitNote() {
//     const contentHtml = contentRef.current ? contentRef.current.innerHTML : note.content;
//     if (note.title.trim() !== "" || contentHtml.trim() !== "") {
//       onAdd({
//         ...note,
//         content: contentHtml
//       });
//       setNote({
//         title: "",
//         content: "",
//         titleColor: "text-gray-800"
//       });
//       if (contentRef.current) {
//         contentRef.current.innerHTML = "";
//       }
//       setExpanded(false);
//     }
//   }

//   function expand() {
//     setExpanded(true);
//   }

//   function handleKeyDown(event) {
//     if (event.key === 'Enter' && event.ctrlKey) {
//       submitNote();
//     }
//   }

//   return (
//     <div className="max-w-lg mx-auto mt-8 mb-8">
//       <div className="bg-white rounded-lg shadow-md overflow-hidden">
//         {isExpanded && (
//           <TextToolbar 
//             onFormat={handleFormat} 
//             selectedColor={note.titleColor}
//             onColorChange={handleColorChange}
//           />
//         )}
        
//         <div className="p-4">
//           {isExpanded && (
//             <input
//               ref={titleRef}
//               name="title"
//               onChange={handleChange}
//               value={note.title}
//               placeholder="Title"
//               className={`w-full border-none outline-none text-lg font-semibold mb-3 px-1 py-2 placeholder-gray-400 ${note.titleColor}`}
//               autoFocus
//             />
//           )}
          
//           <div
//             ref={contentRef}
//             contentEditable
//             onClick={expand}
//             onKeyDown={handleKeyDown}
//             className="w-full border-none outline-none text-base px-1 py-2 min-h-[40px] placeholder-gray-400"
//             style={{ minHeight: isExpanded ? '80px' : '40px' }}
//             data-placeholder="Take a note..."
//             suppressContentEditableWarning={true}
//           />
          
//           {isExpanded && (
//             <div className="flex justify-end mt-3">
//               <button
//                 onClick={submitNote}
//                 className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full p-2 shadow-lg transition-colors duration-200"
//               >
//                 <Plus className="w-5 h-5" />
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//       {isExpanded && (
//         <p className="text-xs text-gray-500 text-center mt-2">
//           Tip: Ctrl+Enter to add note
//         </p>
//       )}
//     </div>
//   );
// }

// export default CreateArea;


// import React, { useState, useRef } from "react";
// import { Plus } from "lucide-react";
// import TextToolbar from "./TextToolbar";

// function CreateArea({ onAdd }) {
//   const [isExpanded, setExpanded] = useState(false);
//   const [note, setNote] = useState({
//     title: "",
//     content: "",
//     titleColor: "#f3f4f6" // Default background color (gray-200)
//   });
//   const contentRef = useRef(null);
//   const titleRef = useRef(null);

//   function handleChange(event) {
//     const { name, value } = event.target;
//     setNote((prevNote) => ({
//       ...prevNote,
//       [name]: value,
//     }));
//   }

//   function handleFormat(command) {
//     // Ensure the content area is focused before applying formatting
//     if (contentRef.current) {
//       contentRef.current.focus();
//       // Small delay to ensure focus is set
//       setTimeout(() => {
//         document.execCommand(command, false, null);
//       }, 10);
//     }
//   }

//   function handleColorChange(color) {
//     setNote(prev => ({
//       ...prev,
//       titleColor: color
//     }));
//   }

//   function submitNote() {
//     const contentHtml = contentRef.current ? contentRef.current.innerHTML : note.content;
//     if (note.title.trim() !== "" || contentHtml.trim() !== "") {
//       onAdd({
//         ...note,
//         content: contentHtml
//       });
//       setNote({
//         title: "",
//         content: "",
//         titleColor: "#f3f4f6" // Reset to default
//       });
//       if (contentRef.current) {
//         contentRef.current.innerHTML = "";
//       }
//       setExpanded(false);
//     }
//   }

//   function expand() {
//     setExpanded(true);
//   }

//   function handleKeyDown(event) {
//     if (event.key === 'Enter' && event.ctrlKey) {
//       submitNote();
//     }
//   }

//   // Handle content editable input
//   function handleContentInput() {
//     if (contentRef.current) {
//       setNote(prev => ({
//         ...prev,
//         content: contentRef.current.innerHTML
//       }));
//     }
//   }

//   return (
//     <div className="max-w-lg mx-auto mt-8 mb-8">
//       <div className="bg-white rounded-lg shadow-md overflow-hidden">
//         {isExpanded && (
//           <TextToolbar 
//             onFormat={handleFormat} 
//             selectedColor={note.titleColor}
//             onColorChange={handleColorChange}
//           />
//         )}
        
//         <div className="p-4">
//           {isExpanded && (
//             <input
//               ref={titleRef}
//               name="title"
//               onChange={handleChange}
//               value={note.title}
//               placeholder="Title"
//               className="w-full border-none outline-none text-lg font-semibold mb-3 px-3 py-2 rounded-lg placeholder-gray-400 text-gray-800"
//               style={{ backgroundColor: note.titleColor }}
//               autoFocus
//             />
//           )}
          
//           <div
//             ref={contentRef}
//             contentEditable
//             onClick={expand}
//             onInput={handleContentInput}
//             onKeyDown={handleKeyDown}
//             className="w-full border-none outline-none text-base px-1 py-2 min-h-[40px] placeholder-gray-400 focus:ring-0"
//             style={{ minHeight: isExpanded ? '80px' : '40px' }}
//             data-placeholder="Take a note..."
//             suppressContentEditableWarning={true}
//             dangerouslySetInnerHTML={isExpanded ? undefined : { __html: '' }}
//           />
          
//           {isExpanded && (
//             <div className="flex justify-end mt-3">
//               <button
//                 onClick={submitNote}
//                 className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full p-2 shadow-lg transition-colors duration-200"
//                 type="button"
//               >
//                 <Plus className="w-5 h-5" />
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//       {isExpanded && (
//         <p className="text-xs text-gray-500 text-center mt-2">
//           Tip: Ctrl+Enter to add note • Select text and use toolbar to format
//         </p>
//       )}
//     </div>
//   );
// }

// export default CreateArea;

















// import React, { useState, useRef } from "react";
// import { Plus } from "lucide-react";
// import TextToolbar from "./TextToolbar";

// function CreateArea({ onAdd }) {
//   const [isExpanded, setExpanded] = useState(false);
//   const [note, setNote] = useState({
//     title: "",
//     content: "",
//     titleColor: "#f3f4f6" // Default background color (gray-200)
//   });
//   const contentRef = useRef(null);
//   const titleRef = useRef(null);

//   function handleChange(event) {
//     const { name, value } = event.target;
//     setNote((prevNote) => ({
//       ...prevNote,
//       [name]: value,
//     }));
//   }

//   function handleFormat(command) {
//     // Ensure the content area is focused before applying formatting
//     if (contentRef.current) {
//       contentRef.current.focus();
//       // Small delay to ensure focus is set
//       setTimeout(() => {
//         document.execCommand(command, false, null);
//       }, 10);
//     }
//   }

//   function handleColorChange(color) {
//     setNote(prev => ({
//       ...prev,
//       titleColor: color
//     }));
//   }

//   function submitNote() {
//     const contentHtml = contentRef.current ? contentRef.current.innerHTML : note.content;
//     if (note.title.trim() !== "" || contentHtml.trim() !== "") {
//       onAdd({
//         ...note,
//         content: contentHtml
//       });
//       setNote({
//         title: "",
//         content: "",
//         titleColor: "#f3f4f6" // Reset to default
//       });
//       if (contentRef.current) {
//         contentRef.current.innerHTML = "";
//       }
//       setExpanded(false);
//     }
//   }

//   function expand() {
//     setExpanded(true);
//   }

//   function handleKeyDown(event) {
//     if (event.key === 'Enter' && event.ctrlKey) {
//       submitNote();
//     }
//   }

//   // Handle content editable input
//   function handleContentInput() {
//     if (contentRef.current) {
//       setNote(prev => ({
//         ...prev,
//         content: contentRef.current.innerHTML
//       }));
//     }
//   }

//   return (
//     <div className="max-w-lg mx-auto mt-8 mb-8">
//       <div 
//         className={`rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
//           isExpanded ? 'transform hover:-rotate-1' : ''
//         }`}
//         style={{ 
//           backgroundColor: isExpanded ? note.titleColor : '#fff',
//           boxShadow: isExpanded 
//             ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
//             : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
//         }}
//       >
//         {isExpanded && (
//           <TextToolbar 
//             onFormat={handleFormat} 
//             selectedColor={note.titleColor}
//             onColorChange={handleColorChange}
//           />
//         )}
        
//         <div className="p-6">
//           {isExpanded && (
//             <input
//               ref={titleRef}
//               name="title"
//               onChange={handleChange}
//               value={note.title}
//               placeholder="Title"
//               className="w-full border-none outline-none text-lg font-bold mb-3 px-0 py-1 placeholder-gray-500 text-gray-800 bg-transparent"
//               autoFocus
//             />
//           )}
          
//           <div
//             ref={contentRef}
//             contentEditable
//             onClick={expand}
//             onInput={handleContentInput}
//             onKeyDown={handleKeyDown}
//             className="w-full border-none outline-none text-base px-0 py-2 min-h-[40px] placeholder-gray-500 focus:ring-0 bg-transparent"
//             style={{ minHeight: isExpanded ? '80px' : '40px' }}
//             data-placeholder="Take a note..."
//             suppressContentEditableWarning={true}
//             dangerouslySetInnerHTML={isExpanded ? undefined : { __html: '' }}
//           />
          
//           {isExpanded && (
//             <div className="flex justify-end mt-4">
//               <button
//                 onClick={submitNote}
//                 className="bg-gray-800 hover:bg-gray-900 text-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-105"
//                 type="button"
//               >
//                 <Plus className="w-5 h-5" />
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//       {isExpanded && (
//         <p className="text-xs text-gray-600 text-center mt-3 bg-white bg-opacity-80 rounded px-3 py-1 inline-block">
//           Tip: Ctrl+Enter to add note • Select text and use toolbar to format
//         </p>
//       )}
//     </div>
//   );
// }

// export default CreateArea;


// import React, { useState, useRef } from "react";
// import { Plus, X } from "lucide-react";
// import TextToolbar from "./TextToolbar";

// function CreateArea({ onAdd }) {
//   const [isExpanded, setExpanded] = useState(false);
//   const [note, setNote] = useState({
//     title: "",
//     content: "",
//     titleColor: "#f3f4f6" // Default background color (gray-200)
//   });
//   const contentRef = useRef(null);
//   const titleRef = useRef(null);

//   function handleChange(event) {
//     const { name, value } = event.target;
//     setNote((prevNote) => ({
//       ...prevNote,
//       [name]: value,
//     }));
//   }

//   function handleFormat(command) {
//     // Ensure the content area is focused before applying formatting
//     if (contentRef.current) {
//       contentRef.current.focus();
//       // Small delay to ensure focus is set
//       setTimeout(() => {
//         document.execCommand(command, false, null);
//       }, 10);
//     }
//   }

//   function handleColorChange(color) {
//     setNote(prev => ({
//       ...prev,
//       titleColor: color
//     }));
//   }

//   function handleClose() {
//     setNote({
//       title: "",
//       content: "",
//       titleColor: "#f3f4f6" // Reset to default
//     });
//     if (contentRef.current) {
//       contentRef.current.innerHTML = "";
//     }
//     setExpanded(false);
//   }

//   function submitNote() {
//     const contentHtml = contentRef.current ? contentRef.current.innerHTML : note.content;
//     if (note.title.trim() !== "" || contentHtml.trim() !== "") {
//       onAdd({
//         ...note,
//         content: contentHtml
//       });
//       setNote({
//         title: "",
//         content: "",
//         titleColor: "#f3f4f6" // Reset to default
//       });
//       if (contentRef.current) {
//         contentRef.current.innerHTML = "";
//       }
//       setExpanded(false);
//     }
//   }

//   function expand() {
//     setExpanded(true);
//   }

//   function handleKeyDown(event) {
//     if (event.key === 'Enter' && event.ctrlKey) {
//       submitNote();
//     }
//     // Close on Escape key
//     if (event.key === 'Escape') {
//       handleClose();
//     }
//   }

//   // Handle content editable input
//   function handleContentInput() {
//     if (contentRef.current) {
//       setNote(prev => ({
//         ...prev,
//         content: contentRef.current.innerHTML
//       }));
//     }
//   }

//   return (
//     <div className="max-w-lg mx-auto mt-8 mb-8">
//       <div 
//         className={`rounded-lg shadow-lg overflow-hidden transition-all duration-300 relative ${
//           isExpanded ? 'transform hover:-rotate-1' : ''
//         }`}
//         style={{ 
//           backgroundColor: isExpanded ? note.titleColor : '#fff',
//           boxShadow: isExpanded 
//             ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
//             : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
//         }}
//       >
//         {isExpanded && (
//           <button
//             onClick={handleClose}
//             className="absolute top-3 right-3 z-20 text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-white hover:bg-opacity-70 transition-all duration-200 hover:scale-110"
//             type="button"
//             title="Close (Esc)"
//           >
//             <X className="w-4 h-4" />
//           </button>
//         )}

//         {isExpanded && (
//           <TextToolbar 
//             onFormat={handleFormat} 
//             selectedColor={note.titleColor}
//             onColorChange={handleColorChange}
//           />
//         )}
        
//         <div className="p-6">
//           {isExpanded && (
//             <input
//               ref={titleRef}
//               name="title"
//               onChange={handleChange}
//               value={note.title}
//               placeholder="Title"
//               className="w-full border-none outline-none text-lg font-bold mb-3 px-0 py-1 placeholder-gray-500 text-gray-800 bg-transparent pr-8"
//               autoFocus
//               onKeyDown={handleKeyDown}
//             />
//           )}
          
//           <div
//             ref={contentRef}
//             contentEditable
//             onClick={expand}
//             onInput={handleContentInput}
//             onKeyDown={handleKeyDown}
//             className="w-full border-none outline-none text-base px-0 py-2 min-h-[40px] placeholder-gray-500 focus:ring-0 bg-transparent"
//             style={{ minHeight: isExpanded ? '80px' : '40px' }}
//             data-placeholder="Take a note..."
//             suppressContentEditableWarning={true}
//             dangerouslySetInnerHTML={isExpanded ? undefined : { __html: '' }}
//           />
          
//           {isExpanded && (
//             <div className="flex justify-end mt-4">
//               <button
//                 onClick={submitNote}
//                 className="bg-gray-800 hover:bg-gray-900 text-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-105"
//                 type="button"
//               >
//                 <Plus className="w-5 h-5" />
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//       {isExpanded && (
//         <p className="text-xs text-gray-600 text-center mt-3 bg-white bg-opacity-80 rounded px-3 py-1 inline-block">
//           Tip: Ctrl+Enter to add note • Esc to close • Select text and use toolbar to format
//         </p>
//       )}
//     </div>
//   );
// }

// export default CreateArea;



// import React, { useState, useRef } from "react";
// import { Plus, X } from "lucide-react";
// import TextToolbar from "./TextToolbar";

// function CreateArea({ onAdd, isDarkMode }) {
//   const [isExpanded, setExpanded] = useState(false);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [note, setNote] = useState({
//     title: "",
//     content: "",
//     titleColor: "#f3f4f6" // Default background color (gray-200)
//   });
//   const contentRef = useRef(null);
//   const titleRef = useRef(null);

//   function handleChange(event) {
//     const { name, value } = event.target;
//     setNote((prevNote) => ({
//       ...prevNote,
//       [name]: value,
//     }));
//   }

//   function handleFormat(command) {
//     // Ensure the content area is focused before applying formatting
//     if (contentRef.current) {
//       contentRef.current.focus();
//       // Small delay to ensure focus is set
//       setTimeout(() => {
//         document.execCommand(command, false, null);
//       }, 10);
//     }
//   }

//   function handleColorChange(color) {
//     setNote(prev => ({
//       ...prev,
//       titleColor: color
//     }));
//   }

//   function handleClose() {
//     setNote({
//       title: "",
//       content: "",
//       titleColor: "#f3f4f6" // Reset to default
//     });
//     if (contentRef.current) {
//       contentRef.current.innerHTML = "";
//     }
//     setExpanded(false);
//   }

//   function submitNote() {
//     const contentHtml = contentRef.current ? contentRef.current.innerHTML : note.content;
//     if (note.title.trim() !== "" || contentHtml.trim() !== "") {
//       onAdd({
//         ...note,
//         content: contentHtml
//       });
      
//       // Show success animation
//       setShowSuccess(true);
//       setTimeout(() => setShowSuccess(false), 1000);
      
//       setNote({
//         title: "",
//         content: "",
//         titleColor: "#f3f4f6" // Reset to default
//       });
//       if (contentRef.current) {
//         contentRef.current.innerHTML = "";
//       }
//       setExpanded(false);
//     }
//   }

//   function expand() {
//     setExpanded(true);
//   }

//   function handleKeyDown(event) {
//     if (event.key === 'Enter' && event.ctrlKey) {
//       submitNote();
//     }
//     // Close on Escape key
//     if (event.key === 'Escape') {
//       handleClose();
//     }
//   }

//   // Handle content editable input
//   function handleContentInput() {
//     if (contentRef.current) {
//       setNote(prev => ({
//         ...prev,
//         content: contentRef.current.innerHTML
//       }));
//     }
//   }

//   return (
//     <div className="max-w-lg mx-auto mt-8 mb-8 relative">
//       {/* Success Animation */}
//       {showSuccess && (
//         <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-50 animate-pulse">
//           <div className={`px-3 py-1 rounded-full text-sm font-medium ${
//             isDarkMode 
//               ? 'bg-green-800 text-green-100' 
//               : 'bg-green-100 text-green-800'
//           }`}>
//             ✨ Note created!
//           </div>
//         </div>
//       )}
      
//       <div 
//         className={`rounded-lg shadow-lg overflow-hidden transition-all duration-300 relative ${
//           isExpanded ? 'transform hover:-rotate-1' : ''
//         } ${showSuccess ? 'animate-bounce' : ''}`}
//         style={{ 
//           backgroundColor: isExpanded ? note.titleColor : (isDarkMode ? '#374151' : '#fff'),
//           boxShadow: isExpanded 
//             ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
//             : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
//         }}
//       >
//         {isExpanded && (
//           <button
//             onClick={handleClose}
//             className={`absolute top-3 right-3 z-20 p-1 rounded-full transition-all duration-200 hover:scale-110 ${
//               isDarkMode
//                 ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700 hover:bg-opacity-70'
//                 : 'text-gray-500 hover:text-gray-700 hover:bg-white hover:bg-opacity-70'
//             }`}
//             type="button"
//             title="Close (Esc)"
//           >
//             <X className="w-4 h-4" />
//           </button>
//         )}

//         {isExpanded && (
//           <TextToolbar 
//             onFormat={handleFormat} 
//             selectedColor={note.titleColor}
//             onColorChange={handleColorChange}
//             isDarkMode={isDarkMode}
//           />
//         )}
        
//         <div className="p-6">
//           {isExpanded && (
//             <input
//               ref={titleRef}
//               name="title"
//               onChange={handleChange}
//               value={note.title}
//               placeholder="Title"
//               className={`w-full border-none outline-none text-lg font-bold mb-3 px-0 py-1 bg-transparent pr-8 ${
//                 isDarkMode 
//                   ? 'placeholder-gray-400 text-gray-100' 
//                   : 'placeholder-gray-500 text-gray-800'
//               }`}
//               autoFocus
//               onKeyDown={handleKeyDown}
//             />
//           )}
          
//           <div
//             ref={contentRef}
//             contentEditable
//             onClick={expand}
//             onInput={handleContentInput}
//             onKeyDown={handleKeyDown}
//             className={`w-full border-none outline-none text-base px-0 py-2 min-h-[40px] focus:ring-0 bg-transparent ${
//               isDarkMode 
//                 ? 'placeholder-gray-400 text-gray-100' 
//                 : 'placeholder-gray-500 text-gray-800'
//             }`}
//             style={{ minHeight: isExpanded ? '80px' : '40px' }}
//             data-placeholder="Take a note..."
//             suppressContentEditableWarning={true}
//             dangerouslySetInnerHTML={isExpanded ? undefined : { __html: '' }}
//           />
          
//           {isExpanded && (
//             <div className="flex justify-end mt-4">
//               <button
//                 onClick={submitNote}
//                 className={`rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-105 ${
//                   isDarkMode
//                     ? 'bg-blue-600 hover:bg-blue-700 text-white'
//                     : 'bg-gray-800 hover:bg-gray-900 text-white'
//                 }`}
//                 type="button"
//               >
//                 <Plus className="w-5 h-5" />
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//       {isExpanded && (
//         <p className={`text-xs text-center mt-3 rounded px-3 py-1 inline-block ${
//           isDarkMode 
//             ? 'text-gray-400 bg-gray-800 bg-opacity-80' 
//             : 'text-gray-600 bg-white bg-opacity-80'
//         }`}>
//           Tip: Ctrl+Enter to add note • Esc to close • Select text and use toolbar to format
//         </p>
//       )}
//     </div>
//   );
// }

// export default CreateArea;


import React, { useState, useRef } from "react";
import { Plus, X } from "lucide-react";
import TextToolbar from "./TextToolbar";

function CreateArea({ onAdd, isDarkMode }) {
  const [isExpanded, setExpanded] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
    titleColor: "#fef3c7" // Default to light yellow like sticky notes
  });
  const contentRef = useRef(null);
  const titleRef = useRef(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function handleFormat(command) {
    if (contentRef.current) {
      contentRef.current.focus();
      setTimeout(() => {
        try {
          document.execCommand(command, false, null);
          handleContentInput(); // Update state after formatting
        } catch (error) {
          console.warn('Document.execCommand not supported:', error);
        }
      }, 10);
    }
  }

  function handleColorChange(color) {
    setNote(prev => ({
      ...prev,
      titleColor: color
    }));
  }

  function handleClose() {
    setNote({
      title: "",
      content: "",
      titleColor: "#fef3c7"
    });
    if (contentRef.current) {
      contentRef.current.innerHTML = "";
    }
    setExpanded(false);
  }

  function submitNote() {
    const contentHtml = contentRef.current ? contentRef.current.innerHTML : note.content;
    const trimmedTitle = note.title.trim();
    const trimmedContent = contentHtml.replace(/<[^>]*>/g, '').trim(); // Remove HTML tags for empty check
    
    if (trimmedTitle !== "" || trimmedContent !== "") {
      onAdd({
        title: trimmedTitle,
        content: contentHtml,
        titleColor: note.titleColor
      });
      
      // Show success animation
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 1000);
      
      setNote({
        title: "",
        content: "",
        titleColor: "#fef3c7"
      });
      if (contentRef.current) {
        contentRef.current.innerHTML = "";
      }
      setExpanded(false);
    }
  }

  function expand() {
    setExpanded(true);
    // Focus the content area after expansion
    setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.focus();
      }
    }, 100);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter' && event.ctrlKey) {
      event.preventDefault();
      submitNote();
    }
    if (event.key === 'Escape') {
      event.preventDefault();
      handleClose();
    }
  }

  function handleContentInput() {
    if (contentRef.current) {
      setNote(prev => ({
        ...prev,
        content: contentRef.current.innerHTML
      }));
    }
  }

  return (
    <div className="max-w-lg mx-auto mt-8 mb-8 relative">
      {/* Success Animation */}
      {showSuccess && (
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-50 animate-pulse">
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${
            isDarkMode 
              ? 'bg-green-800 text-green-100' 
              : 'bg-green-100 text-green-800'
          }`}>
            ✨ Note created!
          </div>
        </div>
      )}
      
      <div 
        className={`rounded-lg shadow-lg overflow-hidden transition-all duration-300 relative ${
          isExpanded ? 'transform hover:-rotate-1' : ''
        } ${showSuccess ? 'animate-bounce' : ''}`}
        style={{ 
          backgroundColor: isExpanded ? note.titleColor : (isDarkMode ? '#374151' : '#fff'),
          boxShadow: isExpanded 
            ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
        }}
      >
        {isExpanded && (
          <button
            onClick={handleClose}
            className={`absolute top-3 right-3 z-20 p-1 rounded-full transition-all duration-200 hover:scale-110 ${
              isDarkMode
                ? 'text-gray-700 hover:text-gray-900 hover:bg-white hover:bg-opacity-70'
                : 'text-gray-500 hover:text-gray-700 hover:bg-white hover:bg-opacity-70'
            }`}
            type="button"
            title="Close (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        {isExpanded && (
          <TextToolbar 
            onFormat={handleFormat} 
            selectedColor={note.titleColor}
            onColorChange={handleColorChange}
            isDarkMode={isDarkMode}
          />
        )}
        
        <div className="p-6">
          {isExpanded && (
            <input
              ref={titleRef}
              name="title"
              onChange={handleChange}
              value={note.title}
              placeholder="Title"
              className={`w-full border-none outline-none text-lg font-bold mb-3 px-0 py-1 bg-transparent pr-8 ${
                isDarkMode 
                  ? 'placeholder-gray-600 text-gray-900' 
                  : 'placeholder-gray-500 text-gray-800'
              }`}
              autoFocus
              onKeyDown={handleKeyDown}
            />
          )}
          
          <div
            ref={contentRef}
            contentEditable
            onClick={expand}
            onInput={handleContentInput}
            onKeyDown={handleKeyDown}
            className={`w-full border-none outline-none text-base px-0 py-2 min-h-[40px] focus:ring-0 bg-transparent cursor-text ${
              isExpanded 
                ? (isDarkMode ? 'placeholder-gray-600 text-gray-900' : 'placeholder-gray-500 text-gray-800')
                : (isDarkMode ? 'placeholder-gray-400 text-gray-200' : 'placeholder-gray-500 text-gray-800')
            }`}
            style={{ minHeight: isExpanded ? '80px' : '40px' }}
            data-placeholder={isExpanded ? "Write your note here..." : "Take a note..."}
            suppressContentEditableWarning={true}
          />
          
          {isExpanded && (
            <div className="flex justify-end mt-4">
              <button
                onClick={submitNote}
                className={`rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-105 ${
                  isDarkMode
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-800 hover:bg-gray-900 text-white'
                }`}
                type="button"
                title="Add note (Ctrl+Enter)"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
      {isExpanded && (
        <p className={`text-xs text-center mt-3 rounded px-3 py-1 inline-block ${
          isDarkMode 
            ? 'text-gray-300 bg-gray-800 bg-opacity-80' 
            : 'text-gray-600 bg-white bg-opacity-80'
        }`}>
          Tip: Ctrl+Enter to add note • Esc to close • Select text and use toolbar to format
        </p>
      )}
    </div>
  );
}

export default CreateArea;