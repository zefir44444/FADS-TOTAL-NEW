import React from "react";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | FADS",
  description: "Contact us through our contact form",
};

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        
        <div className="mb-8">
          <ContactForm />
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Contact Details</h2>
            <ul className="space-y-3">
              <li>
                <strong>Address:</strong> Espoo, Finland
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@fads.fi">
                  info@fads.fi
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Business Hours</h2>
            <ul className="space-y-3">
              <li>
                <strong>Mon-Fri:</strong> 9:00 AM - 6:00 PM
              </li>
            
              <li>
                <strong>Sat-Sun:</strong> Closed
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
} 