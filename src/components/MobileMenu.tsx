"use client";

import React, { useState, useEffect } from 'react';
import { SignedIn, SignedOut, UserButton,  SignInButton, SignUpButton, } from '@clerk/nextjs';
import Link from 'next/link';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      <button 
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className={`bg-white block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-white block h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 ease-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-white block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>

      <div 
        className={`fixed inset-0 bg-[#0A0A14] z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b border-gray-800">
            <Link href="/" className="text-xl font-bold text-white flex items-center" onClick={() => setIsOpen(false)}>

              <span>NEXYA</span>
            </Link>
            <div>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-8">
            <nav className="flex flex-col space-y-6">
              <SignedIn>
                <Link 
                  href="/dashboard" 
                  className="text-white text-xl font-medium border-b border-gray-800 pb-4"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
                <Link 
                  href="/agents" 
                  className="text-white text-xl font-medium border-b border-gray-800 pb-4"
                  onClick={() => setIsOpen(false)}
                >
                  Agents
                </Link>
                <Link 
                  href="/pricing" 
                  className="text-white text-xl font-medium border-b border-gray-800 pb-4"
                  onClick={() => setIsOpen(false)}
                >
                  Tarifs
                </Link>
                <Link 
                  href="/help" 
                  className="text-white text-xl font-medium border-b border-gray-800 pb-4"
                  onClick={() => setIsOpen(false)}
                >
                  Aide
                </Link>
              </SignedIn>
              <SignedOut>
                <Link 
                  href="/pricing" 
                  className="text-white text-xl font-medium border-b border-gray-800 pb-4"
                  onClick={() => setIsOpen(false)}
                >
                  Tarifs
                </Link>
                <Link 
                  href="/help" 
                  className="text-white text-xl font-medium border-b border-gray-800 pb-4"
                  onClick={() => setIsOpen(false)}
                >
                  Aide
                </Link>
                <Link 
                  href="/agents" 
                  className="text-white text-xl font-medium border-b border-gray-800 pb-4"
                  onClick={() => setIsOpen(false)}
                >
                  Agents
                </Link>
                <div className="pt-4 flex flex-col space-y-4">
                <SignInButton mode="modal">
                  <button className="px-4 py-2 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition-colors">
                    Sign In
                  </button>
                </SignInButton>
                  <SignUpButton mode="modal">
                  <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md hover:from-indigo-500 hover:to-purple-500 transition-colors">
                    Sign Up
                  </button>
                </SignUpButton>
                </div>
              </SignedOut>
            </nav>
          </div>

          <div className="p-4 border-t border-gray-800">
            <div className="flex justify-center space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;