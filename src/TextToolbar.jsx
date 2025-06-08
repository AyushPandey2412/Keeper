// import React from "react";
// import { Bold, Italic, Underline, List, ListOrdered, Palette } from "lucide-react";

// function TextToolbar({ onFormat, selectedColor, onColorChange }) {
//   const colors = [
//     { name: 'default', value: 'text-gray-800', bg: 'bg-gray-200' },
//     { name: 'green', value: 'text-green-600', bg: 'bg-green-100' },
//     { name: 'red', value: 'text-red-600', bg: 'bg-red-100' },
//     { name: 'orange', value: 'text-orange-600', bg: 'bg-orange-100' },
//     { name: 'yellow', value: 'text-yellow-600', bg: 'bg-yellow-100' },
//     { name: 'pink', value: 'text-pink-600', bg: 'bg-pink-100' }
//   ];

//   return (
//     <div className="flex flex-wrap items-center gap-2 p-2 border-b border-gray-200 bg-gray-50 rounded-t-lg">
//       {/* Formatting Buttons */}
//       <div className="flex gap-1">
//         <button
//           onClick={() => onFormat('bold')}
//           className="p-2 hover:bg-gray-200 rounded transition-colors"
//           title="Bold"
//         >
//           <Bold className="w-4 h-4" />
//         </button>
//         <button
//           onClick={() => onFormat('italic')}
//           className="p-2 hover:bg-gray-200 rounded transition-colors"
//           title="Italic"
//         >
//           <Italic className="w-4 h-4" />
//         </button>
//         <button
//           onClick={() => onFormat('underline')}
//           className="p-2 hover:bg-gray-200 rounded transition-colors"
//           title="Underline"
//         >
//           <Underline className="w-4 h-4" />
//         </button>
//       </div>
      
//       <div className="w-px h-6 bg-gray-300"></div>
      
//       {/* List Buttons */}
//       <div className="flex gap-1">
//         <button
//           onClick={() => onFormat('unorderedList')}
//           className="p-2 hover:bg-gray-200 rounded transition-colors"
//           title="Bullet List"
//         >
//           <List className="w-4 h-4" />
//         </button>
//         <button
//           onClick={() => onFormat('orderedList')}
//           className="p-2 hover:bg-gray-200 rounded transition-colors"
//           title="Numbered List"
//         >
//           <ListOrdered className="w-4 h-4" />
//         </button>
//       </div>
      
//       <div className="w-px h-6 bg-gray-300"></div>
      
//       {/* Color Picker */}
//       <div className="flex items-center gap-1">
//         <Palette className="w-4 h-4 text-gray-600" />
//         <div className="flex gap-1">
//           {colors.map((color) => (
//             <button
//               key={color.name}
//               onClick={() => onColorChange(color.value)}
//               className={`w-6 h-6 rounded-full border-2 ${color.bg} ${
//                 selectedColor === color.value ? 'border-gray-600' : 'border-gray-300'
//               } hover:border-gray-500 transition-colors`}
//               title={`${color.name.charAt(0).toUpperCase() + color.name.slice(1)} color`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TextToolbar;


import React from "react";
import { Bold, Italic, Underline, List, ListOrdered, Palette } from "lucide-react";

function TextToolbar({ onFormat, selectedColor, onColorChange }) {
  // Updated colors with actual CSS background colors for title backgrounds
  const colors = [
    { name: 'default', value: '#f3f4f6', display: 'bg-gray-200' },
    { name: 'green', value: '#dcfce7', display: 'bg-green-100' },
    { name: 'red', value: '#fee2e2', display: 'bg-red-100' },
    { name: 'orange', value: '#fed7aa', display: 'bg-orange-100' },
    { name: 'yellow', value: '#fef3c7', display: 'bg-yellow-100' },
    { name: 'pink', value: '#fce7f3', display: 'bg-pink-100' },
    { name: 'blue', value: '#dbeafe', display: 'bg-blue-100' },
    { name: 'purple', value: '#e9d5ff', display: 'bg-purple-100' }
  ];

  return (
    <div className="flex flex-wrap items-center gap-2 p-2 border-b border-gray-200 bg-gray-50 rounded-t-lg">
      {/* Formatting Buttons */}
      <div className="flex gap-1">
        <button
          onClick={() => onFormat('bold')}
          className="p-2 hover:bg-gray-200 rounded transition-colors"
          title="Bold"
          type="button"
        >
          <Bold className="w-4 h-4" />
        </button>
        <button
          onClick={() => onFormat('italic')}
          className="p-2 hover:bg-gray-200 rounded transition-colors"
          title="Italic"
          type="button"
        >
          <Italic className="w-4 h-4" />
        </button>
        <button
          onClick={() => onFormat('underline')}
          className="p-2 hover:bg-gray-200 rounded transition-colors"
          title="Underline"
          type="button"
        >
          <Underline className="w-4 h-4" />
        </button>
      </div>
      
      <div className="w-px h-6 bg-gray-300"></div>
      
      {/* List Buttons */}
      <div className="flex gap-1">
        <button
          onClick={() => onFormat('insertUnorderedList')}
          className="p-2 hover:bg-gray-200 rounded transition-colors"
          title="Bullet List"
          type="button"
        >
          <List className="w-4 h-4" />
        </button>
        <button
          onClick={() => onFormat('insertOrderedList')}
          className="p-2 hover:bg-gray-200 rounded transition-colors"
          title="Numbered List"
          type="button"
        >
          <ListOrdered className="w-4 h-4" />
        </button>
      </div>
      
      <div className="w-px h-6 bg-gray-300"></div>
      
      {/* Color Picker for Title Background */}
      <div className="flex items-center gap-1">
        <Palette className="w-4 h-4 text-gray-600" />
        <span className="text-xs text-gray-600 mr-1">Title BG:</span>
        <div className="flex gap-1">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => onColorChange(color.value)}
              className={`w-6 h-6 rounded-full border-2 ${color.display} ${
                selectedColor === color.value ? 'border-gray-800 ring-1 ring-gray-400' : 'border-gray-300'
              } hover:border-gray-500 transition-all`}
              title={`${color.name.charAt(0).toUpperCase() + color.name.slice(1)} background`}
              type="button"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TextToolbar;