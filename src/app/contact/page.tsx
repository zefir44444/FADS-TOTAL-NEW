"use client";

import React, { useState, useEffect } from "react";
import ContactForm from "../../components/ContactForm";
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Предотвращаем гидратацию и ждем загрузки страницы
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto min-h-[900px]">
        <motion.div 
          className="mb-8 min-h-[600px]"
          initial={{ opacity: isLoaded ? 0 : 1, y: isLoaded ? 20 : 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ContactForm />
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[200px]">
          <motion.div
            className="min-h-[150px]"
            initial={{ opacity: isLoaded ? 0 : 1, y: isLoaded ? 20 : 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">Our Contact Details</h2>
            <ul className="space-y-3">
              <li>
                <strong>Address:</strong> Espoo, Finland
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@fads.fi">
                <span className="select-text cursor-text">info@fads.fi</span>
                </a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            className="min-h-[150px]"
            initial={{ opacity: isLoaded ? 0 : 1, y: isLoaded ? 20 : 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4">Business Hours</h2>
            <ul className="space-y-3">
              <li>
                <strong>Mon-Fri:</strong> 9:00 AM - 6:00 PM
              </li>
            
              <li>
                <strong>Sat-Sun:</strong> Closed
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 