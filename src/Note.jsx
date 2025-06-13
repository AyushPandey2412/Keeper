// import React, { useState, useRef } from "react";
// import { Trash2 } from "lucide-react";
// import TextToolbar from "./TextToolbar"; // Import the toolbar component

// function Note({ id, title, content, titleColor, onDelete, onEdit }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedNote, setEditedNote] = useState({ title, content, titleColor });
//   const [lastTap, setLastTap] = useState(0);
//   const contentRef = useRef(null);
//   const titleRef = useRef(null);

//   function handleDoubleClick() {
//     setIsEditing(true);
//   }

//   function handleTouchEnd() {
//     const now = Date.now();
//     const DOUBLE_TAP_DELAY = 300;
    
//     if (now - lastTap < DOUBLE_TAP_DELAY) {
//       setIsEditing(true);
//     }
//     setLastTap(now);
//   }

//   function handleTitleChange(event) {
//     setEditedNote(prev => ({
//       ...prev,
//       title: event.target.value
//     }));
//   }

//   function handleFormat(command) {
//     if (contentRef.current) {
//       document.execCommand(command, false, null);
//     }
//   }

//   function handleColorChange(color) {
//     setEditedNote(prev => ({
//       ...prev,
//       titleColor: color
//     }));
//   }

//   function saveEdit() {
//     const contentHtml = contentRef.current ? contentRef.current.innerHTML : editedNote.content;
//     if (editedNote.title.trim() !== "" || contentHtml.trim() !== "") {
//       onEdit(id, {
//         ...editedNote,
//         content: contentHtml
//       });
//       setIsEditing(false);
//     }
//   }

//   function cancelEdit() {
//     setEditedNote({ title, content, titleColor });
//     setIsEditing(false);
//   }

//   function handleKeyDown(event) {
//     if (event.key === 'Enter' && event.ctrlKey) {
//       saveEdit();
//     } else if (event.key === 'Escape') {
//       cancelEdit();
//     }
//   }

//   function handleDelete() {
//     onDelete(id);
//   }

//   // Edit Mode JSX
//   if (isEditing) {
//     return (
//       <div className="bg-white rounded-lg shadow-md overflow-hidden break-inside-avoid mb-4 border-2 border-yellow-400">
//         <TextToolbar 
//           onFormat={handleFormat} 
//           selectedColor={editedNote.titleColor}
//           onColorChange={handleColorChange}
//         />
//         <div className="p-4">
//           <input
//             ref={titleRef}
//             name="title"
//             value={editedNote.title}
//             onChange={handleTitleChange}
//             onKeyDown={handleKeyDown}
//             placeholder="Title"
//             className={`w-full border-none outline-none text-lg font-semibold mb-3 px-1 py-1 placeholder-gray-400 bg-gray-50 rounded ${editedNote.titleColor}`}
//             autoFocus
//           />
//           <div
//             ref={contentRef}
//             contentEditable
//             onKeyDown={handleKeyDown}
//             className="w-full border-none outline-none text-base px-1 py-1 min-h-[80px] placeholder-gray-400 bg-gray-50 rounded"
//             dangerouslySetInnerHTML={{ __html: editedNote.content }}
//             suppressContentEditableWarning={true}
//           />
//           <div className="flex justify-end gap-2 mt-3">
//             <button
//               onClick={cancelEdit}
//               className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors duration-200"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={saveEdit}
//               className="px-3 py-1 text-sm bg-yellow-500 text-white hover:bg-yellow-600 rounded transition-colors duration-200"
//             >
//               Save
//             </button>
//           </div>
//           <p className="text-xs text-gray-400 mt-2">
//             Tip: Ctrl+Enter to save, Esc to cancel
//           </p>
//         </div>
//       </div>
//     );
//   }

//   // Display Mode JSX
//   return (
//     <div 
//       className="bg-white rounded-lg shadow-md p-4 break-inside-avoid mb-4 hover:shadow-lg transition-shadow duration-200 cursor-pointer group relative"
//       onDoubleClick={handleDoubleClick}
//       onTouchEnd={handleTouchEnd}
//     >
//       {title && (
//         <h1 className={`text-lg font-semibold mb-2 pr-6 ${titleColor || 'text-gray-800'}`}>
//           {title}
//         </h1>
//       )}
//       {content && (
//         <div 
//           className="text-base text-gray-600 break-words"
//           dangerouslySetInnerHTML={{ __html: content }}
//         />
//       )}
      
//       <button
//         onClick={handleDelete}
//         className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gray-400 hover:text-red-500 p-1 rounded"
//         title="Delete note"
//       >
//         <Trash2 className="w-4 h-4" />
//       </button>
      
//       <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
//         <span className="text-xs text-gray-400">Double-click to edit</span>
//       </div>
//     </div>
//   );
// }

// export default Note;


// import React, { useState, useRef } from "react";
// import { Trash2 } from "lucide-react";
// import TextToolbar from "./TextToolbar";

// function Note({ id, title, content, titleColor, onDelete, onEdit }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedNote, setEditedNote] = useState({ title, content, titleColor });
//   const [lastTap, setLastTap] = useState(0);
//   const contentRef = useRef(null);
//   const titleRef = useRef(null);

//   function handleDoubleClick() {
//     setIsEditing(true);
//   }

//   function handleTouchEnd() {
//     const now = Date.now();
//     const DOUBLE_TAP_DELAY = 300;
    
//     if (now - lastTap < DOUBLE_TAP_DELAY) {
//       setIsEditing(true);
//     }
//     setLastTap(now);
//   }

//   function handleTitleChange(event) {
//     setEditedNote(prev => ({
//       ...prev,
//       title: event.target.value
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
//     setEditedNote(prev => ({
//       ...prev,
//       titleColor: color
//     }));
//   }

//   function saveEdit() {
//     const contentHtml = contentRef.current ? contentRef.current.innerHTML : editedNote.content;
//     if (editedNote.title.trim() !== "" || contentHtml.trim() !== "") {
//       onEdit(id, {
//         ...editedNote,
//         content: contentHtml
//       });
//       setIsEditing(false);
//     }
//   }

//   function cancelEdit() {
//     setEditedNote({ title, content, titleColor });
//     setIsEditing(false);
//   }

//   function handleKeyDown(event) {
//     if (event.key === 'Enter' && event.ctrlKey) {
//       saveEdit();
//     } else if (event.key === 'Escape') {
//       cancelEdit();
//     }
//   }

//   function handleDelete() {
//     onDelete(id);
//   }

//   // Handle content editable input during editing
//   function handleContentInput() {
//     if (contentRef.current) {
//       setEditedNote(prev => ({
//         ...prev,
//         content: contentRef.current.innerHTML
//       }));
//     }
//   }

//   // Edit Mode JSX
//   if (isEditing) {
//     return (
//       <div className="bg-white rounded-lg shadow-md overflow-hidden break-inside-avoid mb-4 border-2 border-yellow-400">
//         <TextToolbar 
//           onFormat={handleFormat} 
//           selectedColor={editedNote.titleColor}
//           onColorChange={handleColorChange}
//         />
//         <div className="p-4">
//           <input
//             ref={titleRef}
//             name="title"
//             value={editedNote.title}
//             onChange={handleTitleChange}
//             onKeyDown={handleKeyDown}
//             placeholder="Title"
//             className="w-full border-none outline-none text-lg font-semibold mb-3 px-3 py-2 placeholder-gray-400 text-gray-800 rounded-lg"
//             style={{ backgroundColor: editedNote.titleColor }}
//             autoFocus
//           />
//           <div
//             ref={contentRef}
//             contentEditable
//             onInput={handleContentInput}
//             onKeyDown={handleKeyDown}
//             className="w-full border-none outline-none text-base px-3 py-2 min-h-[80px] placeholder-gray-400 bg-gray-50 rounded-lg focus:ring-0"
//             dangerouslySetInnerHTML={{ __html: editedNote.content }}
//             suppressContentEditableWarning={true}
//           />
//           <div className="flex justify-end gap-2 mt-3">
//             <button
//               onClick={cancelEdit}
//               className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors duration-200"
//               type="button"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={saveEdit}
//               className="px-3 py-1 text-sm bg-yellow-500 text-white hover:bg-yellow-600 rounded transition-colors duration-200"
//               type="button"
//             >
//               Save
//             </button>
//           </div>
//           <p className="text-xs text-gray-400 mt-2">
//             Tip: Ctrl+Enter to save, Esc to cancel • Select text and use toolbar to format
//           </p>
//         </div>
//       </div>
//     );
//   }

//   // Display Mode JSX
//   return (
//     <div 
//       className="bg-white rounded-lg shadow-md p-4 break-inside-avoid mb-4 hover:shadow-lg transition-shadow duration-200 cursor-pointer group relative"
//       onDoubleClick={handleDoubleClick}
//       onTouchEnd={handleTouchEnd}
//     >
//       {title && (
//         <h1 
//           className="text-lg font-semibold mb-2 pr-6 text-gray-800 px-3 py-1 rounded-lg"
//           style={{ backgroundColor: titleColor || '#f3f4f6' }}
//         >
//           {title}
//         </h1>
//       )}
//       {content && (
//         <div 
//           className="text-base text-gray-600 break-words"
//           dangerouslySetInnerHTML={{ __html: content }}
//         />
//       )}
      
//       <button
//         onClick={handleDelete}
//         className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gray-400 hover:text-red-500 p-1 rounded"
//         title="Delete note"
//         type="button"
//       >
//         <Trash2 className="w-4 h-4" />
//       </button>
      
//       <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
//         <span className="text-xs text-gray-400">Double-click to edit</span>
//       </div>
//     </div>
//   );
// }

// export default Note;


// import React, { useState, useRef } from "react";
// import { Trash2 } from "lucide-react";
// import TextToolbar from "./TextToolbar";

// function Note({ id, title, content, titleColor, onDelete, onEdit }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedNote, setEditedNote] = useState({ title, content, titleColor });
//   const [lastTap, setLastTap] = useState(0);
//   const contentRef = useRef(null);
//   const titleRef = useRef(null);

//   function handleDoubleClick() {
//     setIsEditing(true);
//   }

//   function handleTouchEnd() {
//     const now = Date.now();
//     const DOUBLE_TAP_DELAY = 300;
    
//     if (now - lastTap < DOUBLE_TAP_DELAY) {
//       setIsEditing(true);
//     }
//     setLastTap(now);
//   }

//   function handleTitleChange(event) {
//     setEditedNote(prev => ({
//       ...prev,
//       title: event.target.value
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
//     setEditedNote(prev => ({
//       ...prev,
//       titleColor: color
//     }));
//   }

//   function saveEdit() {
//     const contentHtml = contentRef.current ? contentRef.current.innerHTML : editedNote.content;
//     if (editedNote.title.trim() !== "" || contentHtml.trim() !== "") {
//       onEdit(id, {
//         ...editedNote,
//         content: contentHtml
//       });
//       setIsEditing(false);
//     }
//   }

//   function cancelEdit() {
//     setEditedNote({ title, content, titleColor });
//     setIsEditing(false);
//   }

//   function handleKeyDown(event) {
//     if (event.key === 'Enter' && event.ctrlKey) {
//       saveEdit();
//     } else if (event.key === 'Escape') {
//       cancelEdit();
//     }
//   }

//   function handleDelete() {
//     onDelete(id);
//   }

//   // Handle content editable input during editing
//   function handleContentInput() {
//     if (contentRef.current) {
//       setEditedNote(prev => ({
//         ...prev,
//         content: contentRef.current.innerHTML
//       }));
//     }
//   }

//   // Edit Mode JSX
//   if (isEditing) {
//     return (
//       <div className="bg-white rounded-lg shadow-md overflow-hidden break-inside-avoid mb-4 border-2 border-yellow-400">
//         <TextToolbar 
//           onFormat={handleFormat} 
//           selectedColor={editedNote.titleColor}
//           onColorChange={handleColorChange}
//         />
//         <div className="p-4">
//           <input
//             ref={titleRef}
//             name="title"
//             value={editedNote.title}
//             onChange={handleTitleChange}
//             onKeyDown={handleKeyDown}
//             placeholder="Title"
//             className="w-full border-none outline-none text-lg font-semibold mb-3 px-3 py-2 placeholder-gray-400 text-gray-800 rounded-lg"
//             style={{ backgroundColor: editedNote.titleColor }}
//             autoFocus
//           />
//           <div
//             ref={contentRef}
//             contentEditable
//             onInput={handleContentInput}
//             onKeyDown={handleKeyDown}
//             className="w-full border-none outline-none text-base px-3 py-2 min-h-[80px] placeholder-gray-400 bg-gray-50 rounded-lg focus:ring-0"
//             dangerouslySetInnerHTML={{ __html: editedNote.content }}
//             suppressContentEditableWarning={true}
//           />
//           <div className="flex justify-end gap-2 mt-3">
//             <button
//               onClick={cancelEdit}
//               className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors duration-200"
//               type="button"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={saveEdit}
//               className="px-3 py-1 text-sm bg-yellow-500 text-white hover:bg-yellow-600 rounded transition-colors duration-200"
//               type="button"
//             >
//               Save
//             </button>
//           </div>
//           <p className="text-xs text-gray-400 mt-2">
//             Tip: Ctrl+Enter to save, Esc to cancel • Select text and use toolbar to format
//           </p>
//         </div>
//       </div>
//     );
//   }

//   // Display Mode JSX
//   return (
//     <div 
//       className="rounded-lg shadow-lg p-6 break-inside-avoid mb-4 hover:shadow-xl transition-all duration-200 cursor-pointer group relative transform hover:-rotate-1 hover:scale-105"
//       style={{ 
//         backgroundColor: titleColor || '#fef3c7',
//         boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
//       }}
//       onDoubleClick={handleDoubleClick}
//       onTouchEnd={handleTouchEnd}
//     >
//       {/* Sticky note top shadow/fold effect */}
//       <div 
//         className="absolute top-0 right-8 w-8 h-8 transform rotate-45 opacity-20"
//         style={{ 
//           backgroundColor: 'rgba(0, 0, 0, 0.1)',
//           clipPath: 'polygon(0 0, 100% 0, 0 100%)'
//         }}
//       ></div>
      
//       {title && (
//         <h1 className="text-lg font-bold mb-3 pr-8 text-gray-800 leading-tight">
//           {title}
//         </h1>
//       )}
//       {content && (
//         <div 
//           className="text-base text-gray-700 break-words leading-relaxed"
//           dangerouslySetInnerHTML={{ __html: content }}
//         />
//       )}
      
//       <button
//         onClick={handleDelete}
//         className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gray-500 hover:text-red-600 p-1 rounded-full hover:bg-white hover:bg-opacity-50"
//         title="Delete note"
//         type="button"
//       >
//         <Trash2 className="w-4 h-4" />
//       </button>
      
//       <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
//         <span className="text-xs text-gray-600 bg-white bg-opacity-70 px-2 py-1 rounded">Double-click to edit</span>
//       </div>
//     </div>
//   );
// }

// export default Note;


// import React, { useState, useRef } from "react";
// import { Trash2, Pin, GripVertical } from "lucide-react";
// import TextToolbar from "./TextToolbar";

// function Note({ 
//   id, 
//   title, 
//   content, 
//   titleColor, 
//   isPinned,
//   createdAt,
//   updatedAt,
//   onDelete, 
//   onEdit, 
//   onPin,
//   onDragStart,
//   onDragEnd,
//   onDragOver,
//   onDrop,
//   isDarkMode,
//   isDeleting,
//   isDragging
// }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedNote, setEditedNote] = useState({ title, content, titleColor });
//   const [lastTap, setLastTap] = useState(0);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const contentRef = useRef(null);
//   const titleRef = useRef(null);

//   function handleDoubleClick() {
//     setIsEditing(true);
//   }

//   function handleTouchEnd() {
//     const now = Date.now();
//     const DOUBLE_TAP_DELAY = 300;
    
//     if (now - lastTap < DOUBLE_TAP_DELAY) {
//       setIsEditing(true);
//     }
//     setLastTap(now);
//   }

//   function handleTitleChange(event) {
//     setEditedNote(prev => ({
//       ...prev,
//       title: event.target.value
//     }));
//   }

//   function handleFormat(command) {
//     if (contentRef.current) {
//       contentRef.current.focus();
//       setTimeout(() => {
//         document.execCommand(command, false, null);
//       }, 10);
//     }
//   }

//   function handleColorChange(color) {
//     setEditedNote(prev => ({
//       ...prev,
//       titleColor: color
//     }));
//   }

//   function saveEdit() {
//     const contentHtml = contentRef.current ? contentRef.current.innerHTML : editedNote.content;
//     if (editedNote.title.trim() !== "" || contentHtml.trim() !== "") {
//       onEdit(id, {
//         ...editedNote,
//         content: contentHtml
//       });
      
//       // Show success animation
//       setShowSuccess(true);
//       setTimeout(() => setShowSuccess(false), 1500);
      
//       setIsEditing(false);
//     }
//   }

//   function cancelEdit() {
//     setEditedNote({ title, content, titleColor });
//     setIsEditing(false);
//   }

//   function handleKeyDown(event) {
//     if (event.key === 'Enter' && event.ctrlKey) {
//       saveEdit();
//     } else if (event.key === 'Escape') {
//       cancelEdit();
//     }
//   }

//   function handleDelete() {
//     onDelete(id);
//   }

//   function handlePin() {
//     onPin(id);
//   }

//   function handleContentInput() {
//     if (contentRef.current) {
//       setEditedNote(prev => ({
//         ...prev,
//         content: contentRef.current.innerHTML
//       }));
//     }
//   }

//   // Format date for display
//   function formatDate(date) {
//     const now = new Date();
//     const noteDate = new Date(date);
//     const diffInHours = (now - noteDate) / (1000 * 60 * 60);
    
//     if (diffInHours < 1) {
//       const diffInMinutes = Math.floor((now - noteDate) / (1000 * 60));
//       return diffInMinutes <= 1 ? 'Just now' : `${diffInMinutes}m ago`;
//     } else if (diffInHours < 24) {
//       return `${Math.floor(diffInHours)}h ago`;
//     } else if (diffInHours < 48) {
//       return 'Yesterday';
//     } else {
//       return noteDate.toLocaleDateString('en-US', { 
//         month: 'short', 
//         day: 'numeric',
//         year: noteDate.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
//       });
//     }
//   }

//   // Drag handlers
//   function handleDragStartWrapper(e) {
//     onDragStart(e, id);
//   }

//   function handleDragOverWrapper(e) {
//     onDragOver(e);
//   }

//   function handleDropWrapper(e) {
//     onDrop(e, id);
//   }

//   // Edit Mode JSX
//   if (isEditing) {
//     return (
//       <div className={`rounded-lg shadow-md overflow-hidden break-inside-avoid mb-4 border-2 transition-all duration-300 ${
//         isDarkMode 
//           ? 'bg-gray-800 border-yellow-500' 
//           : 'bg-white border-yellow-400'
//       } ${showSuccess ? 'animate-pulse' : ''}`}>
//         {/* Success Animation for Edit */}
//         {showSuccess && (
//           <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-50">
//             <div className={`px-3 py-1 rounded-full text-sm font-medium ${
//               isDarkMode 
//                 ? 'bg-green-800 text-green-100' 
//                 : 'bg-green-100 text-green-800'
//             }`}>
//               ✨ Updated!
//             </div>
//           </div>
//         )}
        
//         <TextToolbar 
//           onFormat={handleFormat} 
//           selectedColor={editedNote.titleColor}
//           onColorChange={handleColorChange}
//           isDarkMode={isDarkMode}
//         />
//         <div className="p-4">
//           <input
//             ref={titleRef}
//             name="title"
//             value={editedNote.title}
//             onChange={handleTitleChange}
//             onKeyDown={handleKeyDown}
//             placeholder="Title"
//             className={`w-full border-none outline-none text-lg font-semibold mb-3 px-3 py-2 rounded-lg ${
//               isDarkMode 
//                 ? 'placeholder-gray-400 text-gray-100' 
//                 : 'placeholder-gray-400 text-gray-800'
//             }`}
//             style={{ backgroundColor: editedNote.titleColor }}
//             autoFocus
//           />
//           <div
//             ref={contentRef}
//             contentEditable
//             onInput={handleContentInput}
//             onKeyDown={handleKeyDown}
//             className={`w-full border-none outline-none text-base px-3 py-2 min-h-[80px] rounded-lg focus:ring-0 ${
//               isDarkMode 
//                 ? 'placeholder-gray-400 bg-gray-700 text-gray-100' 
//                 : 'placeholder-gray-400 bg-gray-50 text-gray-800'
//             }`}
//             dangerouslySetInnerHTML={{ __html: editedNote.content }}
//             suppressContentEditableWarning={true}
//           />
//           <div className="flex justify-end gap-2 mt-3">
//             <button
//               onClick={cancelEdit}
//               className={`px-3 py-1 text-sm rounded transition-colors duration-200 ${
//                 isDarkMode
//                   ? 'text-gray-300 hover:bg-gray-700'
//                   : 'text-gray-600 hover:bg-gray-100'
//               }`}
//               type="button"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={saveEdit}
//               className="px-3 py-1 text-sm bg-yellow-500 text-white hover:bg-yellow-600 rounded transition-colors duration-200"
//               type="button"
//             >
//               Save
//             </button>
//           </div>
//           <p className={`text-xs mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`}>
//             Tip: Ctrl+Enter to save, Esc to cancel • Select text and use toolbar to format
//           </p>
//         </div>
//       </div>
//     );
//   }

//   // Display Mode JSX
//   return (
//     <div 
//       className={`rounded-lg shadow-lg p-6 break-inside-avoid mb-4 cursor-pointer group relative transform transition-all duration-300 ${
//         isDeleting 
//           ? 'animate-pulse opacity-50 scale-95' 
//           : 'hover:shadow-xl hover:-rotate-1 hover:scale-105'
//       } ${
//         isDragging 
//           ? 'opacity-50 rotate-3 scale-95' 
//           : ''
//       }`}
//       style={{ 
//         backgroundColor: titleColor || '#fef3c7',
//         boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
//       }}
//       onDoubleClick={handleDoubleClick}
//       onTouchEnd={handleTouchEnd}
//       draggable
//       onDragStart={handleDragStartWrapper}
//       onDragEnd={onDragEnd}
//       onDragOver={handleDragOverWrapper}
//       onDrop={handleDropWrapper}
//     >
//       {/* Drag Handle */}
//       <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-60 transition-opacity duration-200">
//         <GripVertical className="w-4 h-4 text-gray-500" />
//       </div>

//       {/* Pin Icon */}
//       <button
//         onClick={handlePin}
//         className={`absolute top-3 right-10 transition-all duration-200 p-1 rounded-full ${
//           isPinned 
//             ? 'text-red-500 opacity-100 hover:text-red-600 rotate-45' 
//             : 'text-gray-400 opacity-0 group-hover:opacity-100 hover:text-red-500'
//         } hover:bg-white hover:bg-opacity-50`}
//         title={isPinned ? "Unpin note" : "Pin note"}
//         type="button"
//       >
//         <Pin className={`w-4 h-4 transition-transform duration-200 ${isPinned ? 'rotate-45' : ''}`} />
//       </button>

//       {/* Sticky note top shadow/fold effect */}
//       <div 
//         className="absolute top-0 right-8 w-8 h-8 transform rotate-45 opacity-20"
//         style={{ 
//           backgroundColor: 'rgba(0, 0, 0, 0.1)',
//           clipPath: 'polygon(0 0, 100% 0, 0 100%)'
//         }}
//       ></div>
      
//       {/* Pinned indicator */}
//       {isPinned && (
//         <div className="absolute top-2 right-2 text-red-500 transform rotate-45">
//           <Pin className="w-3 h-3" />
//         </div>
//       )}

//       {title && (
//         <h1 className={`text-lg font-bold mb-3 pr-8 leading-tight ${
//           isPinned ? 'pr-12' : 'pr-8'
//         } ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
//           {title}
//         </h1>
//       )}
      
//       {content && (
//         <div 
//           className={`text-base break-words leading-relaxed mb-3 ${
//             isDarkMode ? 'text-gray-200' : 'text-gray-700'
//           }`}
//           dangerouslySetInnerHTML={{ __html: content }}
//         />
//       )}

//       {/* Creation/Update Date */}
//       <div className={`text-xs mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
//         <span>Created {formatDate(createdAt)}</span>
//         {updatedAt && new Date(updatedAt).getTime() !== new Date(createdAt).getTime() && (
//           <span className="ml-2">• Updated {formatDate(updatedAt)}</span>
//         )}
//       </div>
      
//       <button
//         onClick={handleDelete}
//         className={`absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-1 rounded-full hover:bg-white hover:bg-opacity-50 ${
//           isDarkMode 
//             ? 'text-gray-400 hover:text-red-400' 
//             : 'text-gray-500 hover:text-red-600'
//         }`}
//         title="Delete note"
//         type="button"
//       >
//         <Trash2 className="w-4 h-4" />
//       </button>
      
//       <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
//         <span className={`text-xs px-2 py-1 rounded ${
//           isDarkMode 
//             ? 'text-gray-300 bg-gray-800 bg-opacity-70' 
//             : 'text-gray-600 bg-white bg-opacity-70'
//         }`}>
//           Double-click to edit
//         </span>
//       </div>
//     </div>
//   );
// }

// export default Note;



// ---animations


// import React, { useState, useRef, useEffect } from "react";
// import { Trash2, Pin, GripVertical } from "lucide-react";
// import TextToolbar from "./TextToolbar";

// function Note({ 
//   id, 
//   title, 
//   content, 
//   titleColor, 
//   isPinned,
//   createdAt,
//   updatedAt,
//   onDelete, 
//   onEdit, 
//   onPin,
//   onDragStart,
//   onDragEnd,
//   onDragOver,
//   onDrop,
//   isDarkMode,
//   isDeleting,
//   isDragging
// }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedNote, setEditedNote] = useState({ title, content, titleColor });
//   const [lastTap, setLastTap] = useState(0);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [isExiting, setIsExiting] = useState(false);
//   const [animationState, setAnimationState] = useState('idle'); // idle, success, error, deleting
//   const contentRef = useRef(null);
//   const titleRef = useRef(null);
//   const noteRef = useRef(null);

//   // Handle delete animation
//   useEffect(() => {
//     if (isDeleting && !isExiting) {
//       setIsExiting(true);
//     }
//   }, [isDeleting]);

//   function handleDoubleClick() {
//     if (!isDeleting && !isExiting) {
//       setIsEditing(true);
//       setAnimationState('idle');
//     }
//   }

//   function handleTouchEnd() {
//     if (isDeleting || isExiting) return;
    
//     const now = Date.now();
//     const DOUBLE_TAP_DELAY = 300;
    
//     if (now - lastTap < DOUBLE_TAP_DELAY) {
//       setIsEditing(true);
//       setAnimationState('idle');
//     }
//     setLastTap(now);
//   }

//   function handleTitleChange(event) {
//     setEditedNote(prev => ({
//       ...prev,
//       title: event.target.value
//     }));
//   }

//   function handleFormat(command) {
//     if (contentRef.current) {
//       contentRef.current.focus();
//       setTimeout(() => {
//         document.execCommand(command, false, null);
//       }, 10);
//     }
//   }

//   function handleColorChange(color) {
//     setEditedNote(prev => ({
//       ...prev,
//       titleColor: color
//     }));
//   }

//   function saveEdit() {
//     const contentHtml = contentRef.current ? contentRef.current.innerHTML : editedNote.content;
//     if (editedNote.title.trim() !== "" || contentHtml.trim() !== "") {
//       onEdit(id, {
//         ...editedNote,
//         content: contentHtml
//       });
      
//       // Enhanced success animation
//       setAnimationState('success');
//       setShowSuccess(true);
      
//       setTimeout(() => {
//         setShowSuccess(false);
//         setAnimationState('idle');
//         setIsEditing(false);
//       }, 2000);
//     }
//   }

//   function cancelEdit() {
//     setEditedNote({ title, content, titleColor });
//     setAnimationState('idle');
//     setIsEditing(false);
//   }

//   function handleKeyDown(event) {
//     if (event.key === 'Enter' && event.ctrlKey) {
//       saveEdit();
//     } else if (event.key === 'Escape') {
//       cancelEdit();
//     }
//   }

//   function handleDelete() {
//     if (!isDeleting && !isExiting) {
//       setAnimationState('deleting');
//       // Add a small delay before calling onDelete to show animation
//       setTimeout(() => {
//         onDelete(id);
//       }, 150);
//     }
//   }

//   function handlePin() {
//     if (!isDeleting && !isExiting) {
//       setAnimationState('success');
//       onPin(id);
//       setTimeout(() => setAnimationState('idle'), 600);
//     }
//   }

//   function handleContentInput() {
//     if (contentRef.current) {
//       setEditedNote(prev => ({
//         ...prev,
//         content: contentRef.current.innerHTML
//       }));
//     }
//   }

//   // Format date for display
//   function formatDate(date) {
//     const now = new Date();
//     const noteDate = new Date(date);
//     const diffInHours = (now - noteDate) / (1000 * 60 * 60);
    
//     if (diffInHours < 1) {
//       const diffInMinutes = Math.floor((now - noteDate) / (1000 * 60));
//       return diffInMinutes <= 1 ? 'Just now' : `${diffInMinutes}m ago`;
//     } else if (diffInHours < 24) {
//       return `${Math.floor(diffInHours)}h ago`;
//     } else if (diffInHours < 48) {
//       return 'Yesterday';
//     } else {
//       return noteDate.toLocaleDateString('en-US', { 
//         month: 'short', 
//         day: 'numeric',
//         year: noteDate.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
//       });
//     }
//   }

//   // Drag handlers
//   function handleDragStartWrapper(e) {
//     if (!isDeleting && !isExiting) {
//       onDragStart(e, id);
//     }
//   }

//   function handleDragOverWrapper(e) {
//     onDragOver(e);
//   }

//   function handleDropWrapper(e) {
//     onDrop(e, id);
//   }

//   // Get animation classes based on state
//   function getAnimationClasses() {
//     const baseClasses = "transform transition-all duration-300 ease-in-out";
    
//     if (isExiting || animationState === 'deleting') {
//       return `${baseClasses} animate-noteExit opacity-0 scale-75 -rotate-12`;
//     }
    
//     if (isDragging) {
//       return `${baseClasses} opacity-60 rotate-6 scale-95 shadow-2xl cursor-grabbing`;
//     }
    
//     if (animationState === 'success') {
//       return `${baseClasses} animate-noteSuccess shadow-2xl`;
//     }
    
//     return `${baseClasses} hover:shadow-2xl hover:-rotate-1 hover:scale-105 hover:z-10`;
//   }

//   // Edit Mode JSX
//   if (isEditing) {
//     return (
//       <div className={`rounded-xl shadow-xl overflow-hidden break-inside-avoid mb-4 border-2 relative ${
//         isDarkMode 
//           ? 'bg-gray-800 border-yellow-500' 
//           : 'bg-white border-yellow-400'
//       } ${animationState === 'success' ? 'animate-editSuccess' : 'animate-slideIn'}`}>
        
//         {/* Enhanced Success Animation for Edit */}
//         {showSuccess && (
//           <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-50 animate-successPop">
//             <div className={`px-4 py-2 rounded-full text-sm font-semibold shadow-lg ${
//               isDarkMode 
//                 ? 'bg-green-800 text-green-100 border border-green-600' 
//                 : 'bg-green-500 text-white'
//             }`}>
//               <span className="mr-2">✨</span>
//               Note Updated!
//             </div>
//           </div>
//         )}
        
//         <TextToolbar 
//           onFormat={handleFormat} 
//           selectedColor={editedNote.titleColor}
//           onColorChange={handleColorChange}
//           isDarkMode={isDarkMode}
//         />
//         <div className="p-6">
//           <input
//             ref={titleRef}
//             name="title"
//             value={editedNote.title}
//             onChange={handleTitleChange}
//             onKeyDown={handleKeyDown}
//             placeholder="Title"
//             className={`w-full border-none outline-none text-xl font-bold mb-4 px-4 py-3 rounded-xl transition-all duration-200 focus:ring-4 focus:ring-opacity-50 ${
//               isDarkMode 
//                 ? 'placeholder-gray-400 text-gray-100 focus:ring-yellow-400' 
//                 : 'placeholder-gray-400 text-gray-800 focus:ring-yellow-300'
//             }`}
//             style={{ backgroundColor: editedNote.titleColor }}
//             autoFocus
//           />
//           <div
//             ref={contentRef}
//             contentEditable
//             onInput={handleContentInput}
//             onKeyDown={handleKeyDown}
//             className={`w-full border-none outline-none text-base px-4 py-3 min-h-[100px] rounded-xl transition-all duration-200 focus:ring-4 focus:ring-opacity-50 ${
//               isDarkMode 
//                 ? 'placeholder-gray-400 bg-gray-700 text-gray-100 focus:ring-yellow-400' 
//                 : 'placeholder-gray-400 bg-gray-50 text-gray-800 focus:ring-yellow-300'
//             }`}
//             dangerouslySetInnerHTML={{ __html: editedNote.content }}
//             suppressContentEditableWarning={true}
//           />
//           <div className="flex justify-end gap-3 mt-4">
//             <button
//               onClick={cancelEdit}
//               className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 transform hover:scale-105 ${
//                 isDarkMode
//                   ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
//                   : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
//               }`}
//               type="button"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={saveEdit}
//               className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
//               type="button"
//             >
//               Save Changes
//             </button>
//           </div>
//           <p className={`text-xs mt-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
//             💡 Tip: Ctrl+Enter to save, Esc to cancel • Select text and use toolbar to format
//           </p>
//         </div>
//       </div>
//     );
//   }

//   // Display Mode JSX
//   return (
//     <div 
//       ref={noteRef}
//       className={`rounded-xl shadow-lg p-6 break-inside-avoid mb-4 cursor-pointer group relative ${getAnimationClasses()}`}
//       style={{ 
//         backgroundColor: titleColor || '#fef3c7',
//         boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
//         transformOrigin: 'center center'
//       }}
//       onDoubleClick={handleDoubleClick}
//       onTouchEnd={handleTouchEnd}
//       draggable={!isDeleting && !isExiting}
//       onDragStart={handleDragStartWrapper}
//       onDragEnd={onDragEnd}
//       onDragOver={handleDragOverWrapper}
//       onDrop={handleDropWrapper}
//     >
//       {/* Enhanced Drag Handle */}
//       <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-70 transition-all duration-300 transform group-hover:scale-110">
//         <GripVertical className="w-5 h-5 text-gray-500" />
//       </div>

//       {/* Enhanced Pin Icon with Rotation Animation */}
//       <button
//         onClick={handlePin}
//         className={`absolute top-4 right-12 transition-all duration-300 p-2 rounded-full transform ${
//           isPinned 
//             ? 'text-red-500 opacity-100 hover:text-red-600 rotate-45 scale-110' 
//             : 'text-gray-400 opacity-0 group-hover:opacity-100 hover:text-red-500 hover:scale-110'
//         } hover:bg-white hover:bg-opacity-60 hover:shadow-lg`}
//         title={isPinned ? "Unpin note" : "Pin note"}
//         type="button"
//       >
//         <Pin className={`w-5 h-5 transition-all duration-300 ${
//           isPinned ? 'rotate-45' : 'hover:rotate-12'
//         }`} />
//       </button>

//       {/* Enhanced sticky note fold effect */}
//       <div 
//         className="absolute top-0 right-10 w-10 h-10 transform rotate-45 opacity-20 transition-opacity duration-300 group-hover:opacity-30"
//         style={{ 
//           backgroundColor: 'rgba(0, 0, 0, 0.1)',
//           clipPath: 'polygon(0 0, 100% 0, 0 100%)'
//         }}
//       ></div>
      
//       {/* Animated Pinned indicator */}
//       {isPinned && (
//         <div className="absolute top-3 right-3 text-red-500 transform rotate-45 animate-pinBounce">
//           <Pin className="w-4 h-4" />
//         </div>
//       )}

//       {title && (
//         <h1 className={`text-xl font-bold mb-4 pr-10 leading-tight transition-colors duration-300 ${
//           isPinned ? 'pr-14' : 'pr-10'
//         } ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
//           {title}
//         </h1>
//       )}
      
//       {content && (
//         <div 
//           className={`text-base break-words leading-relaxed mb-4 transition-colors duration-300 ${
//             isDarkMode ? 'text-gray-200' : 'text-gray-700'
//           }`}
//           dangerouslySetInnerHTML={{ __html: content }}
//         />
//       )}

//       {/* Enhanced Date Display */}
//       <div className={`text-xs mb-3 opacity-70 transition-opacity duration-300 group-hover:opacity-100 ${
//         isDarkMode ? 'text-gray-400' : 'text-gray-600'
//       }`}>
//         <span className="font-medium">📅 {formatDate(createdAt)}</span>
//         {updatedAt && new Date(updatedAt).getTime() !== new Date(createdAt).getTime() && (
//           <span className="ml-2">• ✏️ {formatDate(updatedAt)}</span>
//         )}
//       </div>
      
//       {/* Enhanced Delete Button */}
//       <button
//         onClick={handleDelete}
//         className={`absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 p-2 rounded-full transform hover:scale-110 hover:rotate-12 hover:bg-white hover:bg-opacity-60 hover:shadow-lg ${
//           isDarkMode 
//             ? 'text-gray-400 hover:text-red-400' 
//             : 'text-gray-500 hover:text-red-600'
//         } ${animationState === 'deleting' ? 'animate-spin opacity-100 text-red-500' : ''}`}
//         title="Delete note"
//         type="button"
//       >
//         <Trash2 className="w-5 h-5" />
//       </button>
      
//       {/* Enhanced Edit Hint */}
//       <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
//         <span className={`text-xs px-3 py-2 rounded-full font-medium shadow-lg backdrop-blur-sm ${
//           isDarkMode 
//             ? 'text-gray-200 bg-gray-800 bg-opacity-80' 
//             : 'text-gray-700 bg-white bg-opacity-80'
//         }`}>
//           ✨ Double-click to edit
//         </span>
//       </div>
//     </div>
//   );
// }

// export default Note;

// import React, { useState, useRef, useEffect } from "react";
// import { Trash2, Pin, GripVertical } from "lucide-react";
// import TextToolbar from "./TextToolbar";

// function Note({ 
//   id, 
//   title, 
//   content, 
//   titleColor, 
//   isPinned,
//   createdAt,
//   updatedAt,
//   onDelete, 
//   onEdit, 
//   onPin,
//   onDragStart,
//   onDragEnd,
//   onDragOver,
//   onDrop,
//   isDarkMode,
//   isDeleting,
//   isDragging
// }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedNote, setEditedNote] = useState({ title: title || '', content: content || '', titleColor: titleColor || '#fef3c7' });
//   const [lastTap, setLastTap] = useState(0);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [isExiting, setIsExiting] = useState(false);
//   const [animationState, setAnimationState] = useState('idle');
//   const contentRef = useRef(null);
//   const titleRef = useRef(null);
//   const noteRef = useRef(null);

//   // Update editedNote when props change
//   useEffect(() => {
//     setEditedNote({ 
//       title: title || '', 
//       content: content || '', 
//       titleColor: titleColor || '#fef3c7' 
//     });
//   }, [title, content, titleColor]);

//   // Handle delete animation
//   useEffect(() => {
//     if (isDeleting && !isExiting) {
//       setIsExiting(true);
//     }
//   }, [isDeleting]);

//   // Set initial content when entering edit mode
//   useEffect(() => {
//     if (isEditing && contentRef.current) {
//       contentRef.current.innerHTML = editedNote.content || '';
//     }
//   }, [isEditing]);

//   function handleDoubleClick(e) {
//     e.preventDefault();
//     e.stopPropagation();
//     if (!isDeleting && !isExiting) {
//       setIsEditing(true);
//       setAnimationState('idle');
//     }
//   }

//   function handleTouchEnd(e) {
//     if (isDeleting || isExiting) return;
    
//     const now = Date.now();
//     const DOUBLE_TAP_DELAY = 300;
    
//     if (now - lastTap < DOUBLE_TAP_DELAY) {
//       e.preventDefault();
//       setIsEditing(true);
//       setAnimationState('idle');
//     }
//     setLastTap(now);
//   }

//   function handleTitleChange(event) {
//     setEditedNote(prev => ({
//       ...prev,
//       title: event.target.value
//     }));
//   }

//   function handleFormat(command) {
//     if (contentRef.current) {
//       contentRef.current.focus();
//       setTimeout(() => {
//         try {
//           document.execCommand(command, false, null);
//           handleContentInput(); // Update state after formatting
//         } catch (error) {
//           console.warn('Document.execCommand not supported:', error);
//         }
//       }, 10);
//     }
//   }

//   function handleColorChange(color) {
//     setEditedNote(prev => ({
//       ...prev,
//       titleColor: color
//     }));
//   }

//   function saveEdit() {
//     const contentHtml = contentRef.current ? contentRef.current.innerHTML : editedNote.content;
//     const trimmedTitle = editedNote.title.trim();
//     const trimmedContent = contentHtml.replace(/<[^>]*>/g, '').trim(); // Remove HTML tags for empty check
    
//     if (trimmedTitle !== "" || trimmedContent !== "") {
//       onEdit(id, {
//         title: trimmedTitle,
//         content: contentHtml,
//         titleColor: editedNote.titleColor
//       });
      
//       // Success animation
//       setAnimationState('success');
//       setShowSuccess(true);
      
//       setTimeout(() => {
//         setShowSuccess(false);
//         setAnimationState('idle');
//         setIsEditing(false);
//       }, 2000);
//     } else {
//       // If both title and content are empty, just cancel edit
//       cancelEdit();
//     }
//   }

//   function cancelEdit() {
//     setEditedNote({ 
//       title: title || '', 
//       content: content || '', 
//       titleColor: titleColor || '#fef3c7' 
//     });
//     setAnimationState('idle');
//     setIsEditing(false);
//   }

//   function handleKeyDown(event) {
//     if (event.key === 'Enter' && event.ctrlKey) {
//       event.preventDefault();
//       saveEdit();
//     } else if (event.key === 'Escape') {
//       event.preventDefault();
//       cancelEdit();
//     }
//   }

//   function handleDelete(e) {
//     e.preventDefault();
//     e.stopPropagation();
//     if (!isDeleting && !isExiting) {
//       setAnimationState('deleting');
//       setTimeout(() => {
//         onDelete(id);
//       }, 150);
//     }
//   }

//   function handlePin(e) {
//     e.preventDefault();
//     e.stopPropagation();
//     if (!isDeleting && !isExiting) {
//       setAnimationState('success');
//       onPin(id);
//       setTimeout(() => setAnimationState('idle'), 600);
//     }
//   }

//   function handleContentInput() {
//     if (contentRef.current) {
//       setEditedNote(prev => ({
//         ...prev,
//         content: contentRef.current.innerHTML
//       }));
//     }
//   }

//   function formatDate(date) {
//     if (!date) return 'Unknown';
    
//     try {
//       const now = new Date();
//       const noteDate = new Date(date);
//       const diffInHours = (now - noteDate) / (1000 * 60 * 60);
      
//       if (diffInHours < 1) {
//         const diffInMinutes = Math.floor((now - noteDate) / (1000 * 60));
//         return diffInMinutes <= 1 ? 'Just now' : `${diffInMinutes}m ago`;
//       } else if (diffInHours < 24) {
//         return `${Math.floor(diffInHours)}h ago`;
//       } else if (diffInHours < 48) {
//         return 'Yesterday';
//       } else {
//         return noteDate.toLocaleDateString('en-US', { 
//           month: 'short', 
//           day: 'numeric',
//           year: noteDate.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
//         });
//       }
//     } catch (error) {
//       return 'Unknown';
//     }
//   }

//   // Drag handlers with better error handling
//   function handleDragStartWrapper(e) {
//     if (!isDeleting && !isExiting && onDragStart) {
//       onDragStart(e, id);
//     }
//   }

//   function handleDragOverWrapper(e) {
//     if (onDragOver) {
//       onDragOver(e);
//     }
//   }

//   function handleDropWrapper(e) {
//     if (onDrop) {
//       onDrop(e, id);
//     }
//   }

//   function getAnimationClasses() {
//     const baseClasses = "transform transition-all duration-300 ease-in-out";
    
//     if (isExiting || animationState === 'deleting') {
//       return `${baseClasses} animate-noteExit opacity-0 scale-75 -rotate-12`;
//     }
    
//     if (isDragging) {
//       return `${baseClasses} opacity-60 rotate-6 scale-95 shadow-2xl cursor-grabbing`;
//     }
    
//     if (animationState === 'success') {
//       return `${baseClasses} animate-noteSuccess shadow-2xl`;
//     }
    
//     return `${baseClasses} hover:shadow-2xl hover:-rotate-1 hover:scale-105 hover:z-10`;
//   }

//   // Edit Mode JSX
//   if (isEditing) {
//     return (
//       <div className={`rounded-xl shadow-xl overflow-hidden break-inside-avoid mb-4 border-2 relative ${
//         isDarkMode 
//           ? 'bg-gray-800 border-yellow-500' 
//           : 'bg-white border-yellow-400'
//       } ${animationState === 'success' ? 'animate-editSuccess' : 'animate-slideIn'}`}>
        
//         {showSuccess && (
//           <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-50 animate-successPop">
//             <div className={`px-4 py-2 rounded-full text-sm font-semibold shadow-lg ${
//               isDarkMode 
//                 ? 'bg-green-800 text-green-100 border border-green-600' 
//                 : 'bg-green-500 text-white'
//             }`}>
//               <span className="mr-2">✨</span>
//               Note Updated!
//             </div>
//           </div>
//         )}
        
//         <TextToolbar 
//           onFormat={handleFormat} 
//           selectedColor={editedNote.titleColor}
//           onColorChange={handleColorChange}
//           isDarkMode={isDarkMode}
//         />
//         <div className="p-6">
//           <input
//             ref={titleRef}
//             name="title"
//             value={editedNote.title}
//             onChange={handleTitleChange}
//             onKeyDown={handleKeyDown}
//             placeholder="Title"
//             className={`w-full border-none outline-none text-xl font-bold mb-4 px-4 py-3 rounded-xl transition-all duration-200 focus:ring-4 focus:ring-opacity-50 ${
//               isDarkMode 
//                 ? 'placeholder-gray-600 text-gray-900 focus:ring-yellow-400' 
//                 : 'placeholder-gray-400 text-gray-800 focus:ring-yellow-300'
//             }`}
//             style={{ backgroundColor: editedNote.titleColor }}
//             autoFocus
//           />
//           <div
//             ref={contentRef}
//             contentEditable
//             onInput={handleContentInput}
//             onKeyDown={handleKeyDown}
//             className={`w-full border-none outline-none text-base px-4 py-3 min-h-[100px] rounded-xl transition-all duration-200 focus:ring-4 focus:ring-opacity-50 ${
//               isDarkMode 
//                 ? 'placeholder-gray-400 bg-gray-700 text-gray-100 focus:ring-yellow-400' 
//                 : 'placeholder-gray-400 bg-gray-50 text-gray-800 focus:ring-yellow-300'
//             }`}
//             data-placeholder="Write your note here..."
//             suppressContentEditableWarning={true}
//           />
//           <div className="flex justify-end gap-3 mt-4">
//             <button
//               onClick={cancelEdit}
//               className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 transform hover:scale-105 ${
//                 isDarkMode
//                   ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
//                   : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
//               }`}
//               type="button"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={saveEdit}
//               className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
//               type="button"
//             >
//               Save Changes
//             </button>
//           </div>
//           <p className={`text-xs mt-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
//             💡 Tip: Ctrl+Enter to save, Esc to cancel • Select text and use toolbar to format
//           </p>
//         </div>
//       </div>
//     );
//   }

//   // Display Mode JSX
//   return (
//     <div 
//       ref={noteRef}
//       className={`rounded-xl shadow-lg p-6 break-inside-avoid mb-4 cursor-pointer group relative ${getAnimationClasses()}`}
//       style={{ 
//         backgroundColor: titleColor || '#fef3c7',
//         boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
//         transformOrigin: 'center center'
//       }}
//       onDoubleClick={handleDoubleClick}
//       onTouchEnd={handleTouchEnd}
//       draggable={!isDeleting && !isExiting}
//       onDragStart={handleDragStartWrapper}
//       onDragEnd={onDragEnd}
//       onDragOver={handleDragOverWrapper}
//       onDrop={handleDropWrapper}
//     >
//       {/* Drag Handle */}
//       <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-70 transition-all duration-300 transform group-hover:scale-110">
//         <GripVertical className="w-5 h-5 text-gray-500" />
//       </div>

//       {/* Pin Button */}
//       <button
//         onClick={handlePin}
//         className={`absolute top-4 right-12 transition-all duration-300 p-2 rounded-full transform ${
//           isPinned 
//             ? 'text-red-500 opacity-100 hover:text-red-600 rotate-45 scale-110' 
//             : 'text-gray-400 opacity-0 group-hover:opacity-100 hover:text-red-500 hover:scale-110'
//         } hover:bg-white hover:bg-opacity-60 hover:shadow-lg`}
//         title={isPinned ? "Unpin note" : "Pin note"}
//         type="button"
//       >
//         <Pin className={`w-5 h-5 transition-all duration-300 ${
//           isPinned ? 'rotate-45' : 'hover:rotate-12'
//         }`} />
//       </button>

//       {/* Sticky note fold effect */}
//       <div 
//         className="absolute top-0 right-10 w-10 h-10 transform rotate-45 opacity-20 transition-opacity duration-300 group-hover:opacity-30"
//         style={{ 
//           backgroundColor: 'rgba(0, 0, 0, 0.1)',
//           clipPath: 'polygon(0 0, 100% 0, 0 100%)'
//         }}
//       ></div>
      
//       {/* Pinned indicator */}
//       {isPinned && (
//         <div className="absolute top-3 right-3 text-red-500 transform rotate-45 animate-pinBounce">
//           <Pin className="w-4 h-4" />
//         </div>
//       )}

//       {/* Title */}
//       {title && (
//         <h1 className={`text-xl font-bold mb-4 pr-10 leading-tight transition-colors duration-300 ${
//           isPinned ? 'pr-14' : 'pr-10'
//         } ${isDarkMode ? 'text-gray-900' : 'text-gray-800'}`}>
//           {title}
//         </h1>
//       )}
      
//       {/* Content */}
//       {content && (
//         <div 
//           className={`text-base break-words leading-relaxed mb-4 transition-colors duration-300 ${
//             isDarkMode ? 'text-gray-800' : 'text-gray-700'
//           }`}
//           dangerouslySetInnerHTML={{ __html: content }}
//         />
//       )}

//       {/* Date Display */}
//       <div className={`text-xs mb-3 opacity-70 transition-opacity duration-300 group-hover:opacity-100 ${
//         isDarkMode ? 'text-gray-700' : 'text-gray-600'
//       }`}>
//         <span className="font-medium">📅 {formatDate(createdAt)}</span>
//         {updatedAt && new Date(updatedAt).getTime() !== new Date(createdAt).getTime() && (
//           <span className="ml-2">• ✏️ {formatDate(updatedAt)}</span>
//         )}
//       </div>
      
//       {/* Delete Button */}
//       <button
//         onClick={handleDelete}
//         className={`absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 p-2 rounded-full transform hover:scale-110 hover:rotate-12 hover:bg-white hover:bg-opacity-60 hover:shadow-lg ${
//           isDarkMode 
//             ? 'text-gray-700 hover:text-red-600' 
//             : 'text-gray-500 hover:text-red-600'
//         } ${animationState === 'deleting' ? 'animate-spin opacity-100 text-red-500' : ''}`}
//         title="Delete note"
//         type="button"
//       >
//         <Trash2 className="w-5 h-5" />
//       </button>
      
//       {/* Edit Hint */}
//       <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
//         <span className={`text-xs px-3 py-2 rounded-full font-medium shadow-lg backdrop-blur-sm ${
//           isDarkMode 
//             ? 'text-gray-800 bg-white bg-opacity-90' 
//             : 'text-gray-700 bg-white bg-opacity-80'
//         }`}>
//           ✨ Double-click to edit
//         </span>
//       </div>
//     </div>
//   );
// }

// export default Note;


// import React, { useState, useRef, useEffect } from "react";
// import { Trash2, Pin } from "lucide-react";
// import TextToolbar from "./TextToolbar";

// function Note({ 
//   id, 
//   title,
//   content, 
//   titleColor, 
//   isPinned,
//   createdAt,
//   updatedAt,
//   onDelete, 
//   onEdit, 
//   onPin,
//   isDarkMode,
//   isDeleting
// }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedNote, setEditedNote] = useState({ title: title || '', content: content || '', titleColor: titleColor || '#fef3c7' });
//   const [lastTap, setLastTap] = useState(0);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [isExiting, setIsExiting] = useState(false);
//   const [animationState, setAnimationState] = useState('idle');
//   const contentRef = useRef(null);
//   const titleRef = useRef(null);
//   const noteRef = useRef(null);

//   // Update editedNote when props change
//   useEffect(() => {
//     setEditedNote({ 
//       title: title || '', 
//       content: content || '', 
//       titleColor: titleColor || '#fef3c7' 
//     });
//   }, [title, content, titleColor]);

//   // Handle delete animation
//   useEffect(() => {
//     if (isDeleting && !isExiting) {
//       setIsExiting(true);
//     }
//   }, [isDeleting]);

//   // Set initial content when entering edit mode
//   useEffect(() => {
//     if (isEditing && contentRef.current) {
//       contentRef.current.innerHTML = editedNote.content || '';
//     }
//   }, [isEditing]);

//   function handleDoubleClick(e) {
//     e.preventDefault();
//     e.stopPropagation();
//     if (!isDeleting && !isExiting) {
//       setIsEditing(true);
//       setAnimationState('idle');
//     }
//   }

//   function handleTouchEnd(e) {
//     if (isDeleting || isExiting) return;
    
//     const now = Date.now();
//     const DOUBLE_TAP_DELAY = 300;
    
//     if (now - lastTap < DOUBLE_TAP_DELAY) {
//       e.preventDefault();
//       setIsEditing(true);
//       setAnimationState('idle');
//     }
//     setLastTap(now);
//   }

//   function handleTitleChange(event) {
//     setEditedNote(prev => ({
//       ...prev,
//       title: event.target.value
//     }));
//   }

//   function handleFormat(command) {
//     if (contentRef.current) {
//       contentRef.current.focus();
//       setTimeout(() => {
//         try {
//           document.execCommand(command, false, null);
//           handleContentInput(); // Update state after formatting
//         } catch (error) {
//           console.warn('Document.execCommand not supported:', error);
//         }
//       }, 10);
//     }
//   }

//   function handleColorChange(color) {
//     setEditedNote(prev => ({
//       ...prev,
//       titleColor: color
//     }));
//   }

//   function saveEdit() {
//     const contentHtml = contentRef.current ? contentRef.current.innerHTML : editedNote.content;
//     const trimmedTitle = editedNote.title.trim();
//     const trimmedContent = contentHtml.replace(/<[^>]*>/g, '').trim(); // Remove HTML tags for empty check
    
//     if (trimmedTitle !== "" || trimmedContent !== "") {
//       onEdit(id, {
//         title: trimmedTitle,
//         content: contentHtml,
//         titleColor: editedNote.titleColor
//       });
      
//       // Success animation
//       setAnimationState('success');
//       setShowSuccess(true);
      
//       setTimeout(() => {
//         setShowSuccess(false);
//         setAnimationState('idle');
//         setIsEditing(false);
//       }, 2000);
//     } else {
//       // If both title and content are empty, just cancel edit
//       cancelEdit();
//     }
//   }

//   function cancelEdit() {
//     setEditedNote({ 
//       title: title || '', 
//       content: content || '', 
//       titleColor: titleColor || '#fef3c7' 
//     });
//     setAnimationState('idle');
//     setIsEditing(false);
//   }

//   function handleKeyDown(event) {
//     if (event.key === 'Enter' && event.ctrlKey) {
//       event.preventDefault();
//       saveEdit();
//     } else if (event.key === 'Escape') {
//       event.preventDefault();
//       cancelEdit();
//     }
//   }

//   function handleDelete(e) {
//     e.preventDefault();
//     e.stopPropagation();
//     if (!isDeleting && !isExiting) {
//       setAnimationState('deleting');
//       setTimeout(() => {
//         onDelete(id);
//       }, 150);
//     }
//   }

//   function handlePin(e) {
//     e.preventDefault();
//     e.stopPropagation();
//     if (!isDeleting && !isExiting) {
//       setAnimationState('success');
//       onPin(id);
//       setTimeout(() => setAnimationState('idle'), 600);
//     }
//   }

//   function handleContentInput() {
//     if (contentRef.current) {
//       setEditedNote(prev => ({
//         ...prev,
//         content: contentRef.current.innerHTML
//       }));
//     }
//   }

//   function formatDate(date) {
//     if (!date) return 'Unknown';
    
//     try {
//       const now = new Date();
//       const noteDate = new Date(date);
//       const diffInHours = (now - noteDate) / (1000 * 60 * 60);
      
//       if (diffInHours < 1) {
//         const diffInMinutes = Math.floor((now - noteDate) / (1000 * 60));
//         return diffInMinutes <= 1 ? 'Just now' : `${diffInMinutes}m ago`;
//       } else if (diffInHours < 24) {
//         return `${Math.floor(diffInHours)}h ago`;
//       } else if (diffInHours < 48) {
//         return 'Yesterday';
//       } else {
//         return noteDate.toLocaleDateString('en-US', { 
//           month: 'short', 
//           day: 'numeric',
//           year: noteDate.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
//         });
//       }
//     } catch (error) {
//       return 'Unknown';
//     }
//   }

//   function getAnimationClasses() {
//     const baseClasses = "transform transition-all duration-300 ease-in-out";
    
//     if (isExiting || animationState === 'deleting') {
//       return `${baseClasses} animate-noteExit opacity-0 scale-75 -rotate-12`;
//     }
    
//     if (animationState === 'success') {
//       return `${baseClasses} animate-noteSuccess shadow-2xl`;
//     }
    
//     return `${baseClasses} hover:shadow-2xl hover:-rotate-1 hover:scale-105 hover:z-10`;
//   }

//   // Edit Mode JSX
//   if (isEditing) {
//     return (
//       <div className={`rounded-xl shadow-xl overflow-hidden break-inside-avoid mb-4 border-2 relative ${
//         isDarkMode 
//           ? 'bg-gray-800 border-yellow-500' 
//           : 'bg-white border-yellow-400'
//       } ${animationState === 'success' ? 'animate-editSuccess' : 'animate-slideIn'}`}>
        
//         {showSuccess && (
//           <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-50 animate-successPop">
//             <div className={`px-4 py-2 rounded-full text-sm font-semibold shadow-lg ${
//               isDarkMode 
//                 ? 'bg-green-800 text-green-100 border border-green-600' 
//                 : 'bg-green-500 text-white'
//             }`}>
//               Note Updated!
//             </div>
//           </div>
//         )}
        
//         <TextToolbar 
//           onFormat={handleFormat} 
//           selectedColor={editedNote.titleColor}
//           onColorChange={handleColorChange}
//           isDarkMode={isDarkMode}
//         />
//         <div className="p-6">
//           <input
//             ref={titleRef}
//             name="title"
//             value={editedNote.title}
//             onChange={handleTitleChange}
//             onKeyDown={handleKeyDown}
//             placeholder="Title"
//             className={`w-full border-none outline-none text-xl font-bold mb-4 px-4 py-3 rounded-xl transition-all duration-200 focus:ring-4 focus:ring-opacity-50 ${
//               isDarkMode 
//                 ? 'placeholder-gray-600 text-gray-900 focus:ring-yellow-400' 
//                 : 'placeholder-gray-400 text-gray-800 focus:ring-yellow-300'
//             }`}
//             style={{ backgroundColor: editedNote.titleColor }}
//             autoFocus
//           />
//           <div
//             ref={contentRef}
//             contentEditable
//             onInput={handleContentInput}
//             onKeyDown={handleKeyDown}
//             className={`w-full border-none outline-none text-base px-4 py-3 min-h-[100px] rounded-xl transition-all duration-200 focus:ring-4 focus:ring-opacity-50 ${
//               isDarkMode 
//                 ? 'placeholder-gray-400 bg-gray-700 text-gray-100 focus:ring-yellow-400' 
//                 : 'placeholder-gray-400 bg-gray-50 text-gray-800 focus:ring-yellow-300'
//             }`}
//             data-placeholder="Write your note here..."
//             suppressContentEditableWarning={true}
//           />
//           <div className="flex justify-end gap-3 mt-4">
//             <button
//               onClick={cancelEdit}
//               className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 transform hover:scale-105 ${
//                 isDarkMode
//                   ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
//                   : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
//               }`}
//               type="button"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={saveEdit}
//               className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
//               type="button"
//             >
//               Save Changes
//             </button>
//           </div>
//           <p className={`text-xs mt-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
//             Ctrl+Enter to save, Esc to cancel • Select text and use toolbar to format
//           </p>
//         </div>
//       </div>
//     );
//   }

//   // Display Mode JSX
//   return (
//     <div 
//       ref={noteRef}
//       className={`rounded-xl shadow-lg p-6 break-inside-avoid mb-4 cursor-pointer group relative ${getAnimationClasses()}`}
//       style={{ 
//         backgroundColor: titleColor || '#fef3c7',
//         boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
//         transformOrigin: 'center center'
//       }}
//       onDoubleClick={handleDoubleClick}
//       onTouchEnd={handleTouchEnd}
//     >
//       {/* Pin Button */}
//       <button
//         onClick={handlePin}
//         className={`absolute top-4 right-12 transition-all duration-300 p-2 rounded-full transform ${
//           isPinned 
//             ? 'text-red-500 opacity-100 hover:text-red-600 rotate-45 scale-110' 
//             : 'text-gray-400 opacity-0 group-hover:opacity-100 hover:text-red-500 hover:scale-110'
//         } hover:bg-white hover:bg-opacity-60 hover:shadow-lg`}
//         title={isPinned ? "Unpin note" : "Pin note"}
//         type="button"
//       >
//         <Pin className={`w-5 h-5 transition-all duration-300 ${
//           isPinned ? 'rotate-45' : 'hover:rotate-12'
//         }`} />
//       </button>

//       {/* Sticky note fold effect */}
//       <div 
//         className="absolute top-0 right-10 w-10 h-10 transform rotate-45 opacity-20 transition-opacity duration-300 group-hover:opacity-30"
//         style={{ 
//           backgroundColor: 'rgba(0, 0, 0, 0.1)',
//           clipPath: 'polygon(0 0, 100% 0, 0 100%)'
//         }}
//       ></div>

//       {/* Title */}
//       {title && (
//         <h1 className={`text-xl font-bold mb-4 pr-10 leading-tight transition-colors duration-300 ${
//           isPinned ? 'pr-14' : 'pr-10'
//         } ${isDarkMode ? 'text-gray-900' : 'text-gray-800'}`}>
//           {title}
//         </h1>
//       )}
      
//       {/* Content */}
//       {content && (
//         <div 
//           className={`text-base break-words leading-relaxed mb-4 transition-colors duration-300 ${
//             isDarkMode ? 'text-gray-800' : 'text-gray-700'
//           }`}
//           dangerouslySetInnerHTML={{ __html: content }}
//         />
//       )}

//       {/* Date Display - Simplified */}
//       <div className={`text-xs mb-3 opacity-70 transition-opacity duration-300 group-hover:opacity-100 ${
//         isDarkMode ? 'text-gray-700' : 'text-gray-600'
//       }`}>
//         <span>{formatDate(createdAt)}</span>
//         {updatedAt && new Date(updatedAt).getTime() !== new Date(createdAt).getTime() && (
//           <span className="ml-2">• Updated {formatDate(updatedAt)}</span>
//         )}
//       </div>
      
//       {/* Delete Button */}
//       <button
//         onClick={handleDelete}
//         className={`absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 p-2 rounded-full transform hover:scale-110 hover:rotate-12 hover:bg-white hover:bg-opacity-60 hover:shadow-lg ${
//           isDarkMode 
//             ? 'text-gray-700 hover:text-red-600' 
//             : 'text-gray-500 hover:text-red-600'
//         } ${animationState === 'deleting' ? 'animate-spin opacity-100 text-red-500' : ''}`}
//         title="Delete note"
//         type="button"
//       >
//         <Trash2 className="w-5 h-5" />
//       </button>
      
//       {/* Edit Hint - Simplified */}
//       <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
//         <span className={`text-xs font-medium ${
//           isDarkMode 
//             ? 'text-gray-800' 
//             : 'text-gray-700'
//         }`}>
//           Double-click to edit
//         </span>
//       </div>
//     </div>
//   );
// }

// export default Note;











import React, { useState, useRef, useEffect } from "react";
import { Trash2, Pin } from "lucide-react";
import TextToolbar from "./TextToolbar";

function Note({ 
  id, 
  title,
  content, 
  titleColor, 
  isPinned,
  createdAt,
  updatedAt,
  onDelete, 
  onEdit, 
  onPin,
  isDarkMode,
  isDeleting
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState({ title: title || '', content: content || '', titleColor: titleColor || '#fef3c7' });
  const [lastTap, setLastTap] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [animationState, setAnimationState] = useState('idle');
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const noteRef = useRef(null);

  // Detect touch device
  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    
    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);
    
    return () => window.removeEventListener('resize', checkTouchDevice);
  }, []);

  // Update editedNote when props change
  useEffect(() => {
    setEditedNote({ 
      title: title || '', 
      content: content || '', 
      titleColor: titleColor || '#fef3c7' 
    });
  }, [title, content, titleColor]);

  // Handle delete animation
  useEffect(() => {
    if (isDeleting && !isExiting) {
      setIsExiting(true);
    }
  }, [isDeleting]);

  // Set initial content when entering edit mode
  useEffect(() => {
    if (isEditing && contentRef.current) {
      contentRef.current.innerHTML = editedNote.content || '';
    }
  }, [isEditing]);

  function handleDoubleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!isDeleting && !isExiting) {
      setIsEditing(true);
      setAnimationState('idle');
    }
  }

  function handleTouchEnd(e) {
    if (isDeleting || isExiting) return;
    
    const now = Date.now();
    const DOUBLE_TAP_DELAY = 300;
    
    if (now - lastTap < DOUBLE_TAP_DELAY) {
      e.preventDefault();
      setIsEditing(true);
      setAnimationState('idle');
    }
    setLastTap(now);
  }

  function handleTitleChange(event) {
    setEditedNote(prev => ({
      ...prev,
      title: event.target.value
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
    setEditedNote(prev => ({
      ...prev,
      titleColor: color
    }));
  }

  function saveEdit() {
    const contentHtml = contentRef.current ? contentRef.current.innerHTML : editedNote.content;
    const trimmedTitle = editedNote.title.trim();
    const trimmedContent = contentHtml.replace(/<[^>]*>/g, '').trim(); // Remove HTML tags for empty check
    
    if (trimmedTitle !== "" || trimmedContent !== "") {
      onEdit(id, {
        title: trimmedTitle,
        content: contentHtml,
        titleColor: editedNote.titleColor
      });
      
      // Success animation
      setAnimationState('success');
      setShowSuccess(true);
      
      setTimeout(() => {
        setShowSuccess(false);
        setAnimationState('idle');
        setIsEditing(false);
      }, 2000);
    } else {
      // If both title and content are empty, just cancel edit
      cancelEdit();
    }
  }

  function cancelEdit() {
    setEditedNote({ 
      title: title || '', 
      content: content || '', 
      titleColor: titleColor || '#fef3c7' 
    });
    setAnimationState('idle');
    setIsEditing(false);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter' && event.ctrlKey) {
      event.preventDefault();
      saveEdit();
    } else if (event.key === 'Escape') {
      event.preventDefault();
      cancelEdit();
    }
  }

  function handleDelete(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!isDeleting && !isExiting) {
      setAnimationState('deleting');
      setTimeout(() => {
        onDelete(id);
      }, 150);
    }
  }

  function handlePin(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!isDeleting && !isExiting) {
      setAnimationState('success');
      onPin(id);
      setTimeout(() => setAnimationState('idle'), 600);
    }
  }

  function handleContentInput() {
    if (contentRef.current) {
      setEditedNote(prev => ({
        ...prev,
        content: contentRef.current.innerHTML
      }));
    }
  }

  function formatDate(date) {
    if (!date) return 'Unknown';
    
    try {
      const now = new Date();
      const noteDate = new Date(date);
      const diffInHours = (now - noteDate) / (1000 * 60 * 60);
      
      if (diffInHours < 1) {
        const diffInMinutes = Math.floor((now - noteDate) / (1000 * 60));
        return diffInMinutes <= 1 ? 'Just now' : `${diffInMinutes}m ago`;
      } else if (diffInHours < 24) {
        return `${Math.floor(diffInHours)}h ago`;
      } else if (diffInHours < 48) {
        return 'Yesterday';
      } else {
        return noteDate.toLocaleDateString('en-US', { 
          month: 'short', 
          day: 'numeric',
          year: noteDate.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
        });
      }
    } catch (error) {
      return 'Unknown';
    }
  }

  function getAnimationClasses() {
    const baseClasses = "transform transition-all duration-300 ease-in-out";
    
    if (isExiting || animationState === 'deleting') {
      return `${baseClasses} animate-noteExit opacity-0 scale-75 -rotate-12`;
    }
    
    if (animationState === 'success') {
      return `${baseClasses} animate-noteSuccess shadow-2xl`;
    }
    
    return `${baseClasses} hover:shadow-2xl hover:-rotate-1 hover:scale-105 hover:z-10`;
  }

  // Get button visibility classes based on device type
  function getButtonVisibility() {
    if (isTouchDevice) {
      return 'opacity-100'; // Always visible on touch devices
    }
    return 'opacity-0 group-hover:opacity-100'; // Hover-based visibility on desktop
  }

  // Edit Mode JSX
  if (isEditing) {
    return (
      <div className={`rounded-xl shadow-xl overflow-hidden break-inside-avoid mb-4 border-2 relative ${
        isDarkMode 
          ? 'bg-gray-800 border-yellow-500' 
          : 'bg-white border-yellow-400'
      } ${animationState === 'success' ? 'animate-editSuccess' : 'animate-slideIn'}`}>
        
        {showSuccess && (
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-50 animate-successPop">
            <div className={`px-4 py-2 rounded-full text-sm font-semibold shadow-lg ${
              isDarkMode 
                ? 'bg-green-800 text-green-100 border border-green-600' 
                : 'bg-green-500 text-white'
            }`}>
              Note Updated!
            </div>
          </div>
        )}
        
        <TextToolbar 
          onFormat={handleFormat} 
          selectedColor={editedNote.titleColor}
          onColorChange={handleColorChange}
          isDarkMode={isDarkMode}
        />
        <div className="p-6">
          <input
            ref={titleRef}
            name="title"
            value={editedNote.title}
            onChange={handleTitleChange}
            onKeyDown={handleKeyDown}
            placeholder="Title"
            className={`w-full border-none outline-none text-xl font-bold mb-4 px-4 py-3 rounded-xl transition-all duration-200 focus:ring-4 focus:ring-opacity-50 ${
              isDarkMode 
                ? 'placeholder-gray-600 text-gray-900 focus:ring-yellow-400' 
                : 'placeholder-gray-400 text-gray-800 focus:ring-yellow-300'
            }`}
            style={{ backgroundColor: editedNote.titleColor }}
            autoFocus
          />
          <div
            ref={contentRef}
            contentEditable
            onInput={handleContentInput}
            onKeyDown={handleKeyDown}
            className={`w-full border-none outline-none text-base px-4 py-3 min-h-[100px] rounded-xl transition-all duration-200 focus:ring-4 focus:ring-opacity-50 ${
              isDarkMode 
                ? 'placeholder-gray-400 bg-gray-700 text-gray-100 focus:ring-yellow-400' 
                : 'placeholder-gray-400 bg-gray-50 text-gray-800 focus:ring-yellow-300'
            }`}
            data-placeholder="Write your note here..."
            suppressContentEditableWarning={true}
          />
          <div className="flex justify-end gap-3 mt-4">
            <button
              onClick={cancelEdit}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 transform hover:scale-105 ${
                isDarkMode
                  ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
              }`}
              type="button"
            >
              Cancel
            </button>
            <button
              onClick={saveEdit}
              className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              type="button"
            >
              Save Changes
            </button>
          </div>
          <p className={`text-xs mt-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Ctrl+Enter to save, Esc to cancel • Select text and use toolbar to format
          </p>
        </div>
      </div>
    );
  }

  // Display Mode JSX
  return (
    <div 
      ref={noteRef}
      className={`rounded-xl shadow-lg p-6 break-inside-avoid mb-4 cursor-pointer group relative ${getAnimationClasses()}`}
      style={{ 
        backgroundColor: titleColor || '#fef3c7',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        transformOrigin: 'center center'
      }}
      onDoubleClick={handleDoubleClick}
      onTouchEnd={handleTouchEnd}
    >
      {/* Pin Button */}
      <button
        onClick={handlePin}
        className={`absolute top-4 right-12 transition-all duration-300 p-2 rounded-full transform ${
          isPinned 
            ? 'text-red-500 opacity-100 hover:text-red-600 rotate-45 scale-110' 
            : `text-gray-400 ${getButtonVisibility()} hover:text-red-500 hover:scale-110`
        } hover:bg-white hover:bg-opacity-60 hover:shadow-lg`}
        title={isPinned ? "Unpin note" : "Pin note"}
        type="button"
      >
        <Pin className={`w-5 h-5 transition-all duration-300 ${
          isPinned ? 'rotate-45' : 'hover:rotate-12'
        }`} />
      </button>

      {/* Sticky note fold effect */}
      <div 
        className="absolute top-0 right-10 w-10 h-10 transform rotate-45 opacity-20 transition-opacity duration-300 group-hover:opacity-30"
        style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          clipPath: 'polygon(0 0, 100% 0, 0 100%)'
        }}
      ></div>

      {/* Title */}
      {title && (
        <h1 className={`text-xl font-bold mb-4 pr-10 leading-tight transition-colors duration-300 ${
          isPinned ? 'pr-14' : 'pr-10'
        } ${isDarkMode ? 'text-gray-900' : 'text-gray-800'}`}>
          {title}
        </h1>
      )}
      
      {/* Content */}
      {content && (
        <div 
          className={`text-base break-words leading-relaxed mb-4 transition-colors duration-300 ${
            isDarkMode ? 'text-gray-800' : 'text-gray-700'
          }`}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}

      {/* Date Display - Simplified */}
      <div className={`text-xs mb-3 opacity-70 transition-opacity duration-300 group-hover:opacity-100 ${
        isDarkMode ? 'text-gray-700' : 'text-gray-600'
      }`}>
        <span>{formatDate(createdAt)}</span>
        {updatedAt && new Date(updatedAt).getTime() !== new Date(createdAt).getTime() && (
          <span className="ml-2">• Updated {formatDate(updatedAt)}</span>
        )}
      </div>
      
      {/* Delete Button */}
      <button
        onClick={handleDelete}
        className={`absolute top-4 right-4 ${getButtonVisibility()} transition-all duration-300 p-2 rounded-full transform hover:scale-110 hover:rotate-12 hover:bg-white hover:bg-opacity-60 hover:shadow-lg ${
          isDarkMode 
            ? 'text-gray-700 hover:text-red-600' 
            : 'text-gray-500 hover:text-red-600'
        } ${animationState === 'deleting' ? 'animate-spin opacity-100 text-red-500' : ''}`}
        title="Delete note"
        type="button"
      >
        <Trash2 className="w-5 h-5" />
      </button>
      
      {/* Edit Hint - Adjusted for mobile */}
      <div className={`absolute bottom-4 right-4 transition-all duration-300 ${
        isTouchDevice ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
      }`}>
        <span className={`text-xs font-medium ${
          isDarkMode 
            ? 'text-gray-800' 
            : 'text-gray-700'
        }`}>
          {isTouchDevice ? 'Double-tap to edit' : 'Double-click to edit'}
        </span>
      </div>
    </div>
  );
}

export default Note;