import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto py-4 text-center">
      <p className="text-gray-400 text-sm">Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;