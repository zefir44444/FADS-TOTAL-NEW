"use client";

import React, { useState, FormEvent, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Types for form fields
interface FormField {
  label: string;
  name: string;
  type: string;
  description?: string;
  options?: string[];
  subfields?: FormField[];
  colorOptions?: string[];
}

interface BriefSection {
  title: string;
  description?: string;
  fields: FormField[];
}

export default function BriefForm() {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);

  // Prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Form field change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Privacy checkbox change handler
  const handlePrivacyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrivacyAccepted(e.target.checked);
  };

  // Get formatted message for submission
  const getFormattedMessage = (): string => {
    let message = "Website Development Brief\n\n";
    
    briefSections.forEach((section: BriefSection) => {
      message += `${section.title}\n`;
      message += "-------------------\n";
      
      section.fields.forEach((field: FormField) => {
        if (field.type === 'group' && field.subfields) {
          message += `${field.label}:\n`;
          field.subfields.forEach((subfield: FormField) => {
            const value = formData[subfield.name] || '';
            if (value) {
              message += `  - ${subfield.label}: ${value}\n`;
            }
          });
        } else {
          const value = formData[field.name] || '';
          if (value) {
            message += `${field.label}: ${value}\n`;
          }
        }
      });
      
      message += "\n";
    });

    return message;
  };

  // Form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!privacyAccepted) {
      setError("Please confirm that you agree with our Privacy Policy");
      return;
    }
    
    setIsSubmitting(true);
    setSuccess(false);
    setError("");
    
    try {
      // Get complete message
      const message = getFormattedMessage();
      
      // Send to Telegram
      const telegramRes = await fetch("/api/telegram", {
        method: "POST",
        body: JSON.stringify({
          firstName: formData.companyName || "",
          email: formData.contactEmail || "",
          phone: formData.contactPhone || "",
          formType: "Website Brief",
          message: message,
          source: "brief"
        }),
        headers: { "Content-Type": "application/json" },
      });
      
      if (!telegramRes.ok) {
        const errorData = await telegramRes.json();
        throw new Error(errorData.error || "Error submitting the form");
      }
      
      setSuccess(true);
      // Clear form after successful submission
      setFormData({});
      setPrivacyAccepted(false);
      
    } catch (err) {
      console.error("Form submission error:", err);
      setError(err instanceof Error ? err.message : "An error occurred while submitting the form");
    } finally {
      setIsSubmitting(false);
    }
  };

  const briefSections: BriefSection[] = [
    {
      title: "1. General Questions",
      fields: [
        { label: "Company Name", name: "companyName", type: "text" },
        { label: "Contact Person", name: "contactName", type: "text" },
        { label: "Address, Phone Numbers, Email", name: "contactInfo", type: "text" },
        { label: "Brief Description of the Company, Main Products/Services", name: "companyDescription", type: "textarea" },
        { label: "Geography of Product/Service Distribution", name: "geography", type: "text" },
        { label: "Who is the Main Consumer of Products/Services", name: "targetAudience", type: "text" },
        { label: "Existing Website Address (if any)", name: "existingWebsite", type: "text" },
        { label: "Competitors and Their Websites", name: "competitors", type: "textarea" },
        { label: "The Task That the Website Should Solve", name: "websiteGoal", type: "textarea" },
        { label: "Desired Website Launch Date", name: "launchDeadline", type: "text" },
        { label: "Planned Budget", name: "budget", type: "text" }
      ]
    },
    {
      title: "2. Website Design Recommendations",
      fields: [
        { 
          label: "Website Tone", 
          name: "websiteTone", 
          type: "select",
          options: ["Light", "Dark"],
          description: "Light or dark (dark is used much less frequently)"
        },
        { 
          label: "Brightness, Contrast", 
          name: "brightness", 
          type: "select",
          options: ["Bright and Contrasting", "Moderate and Calm"],
          description: "Should the site be bright with contrasting elements or moderate and calm?"
        },
        { 
          label: "Main Colors on the Website (set of 2-3 colors)", 
          name: "colors", 
          type: "color-picker",
          description: "If you have a logo, it dictates the colors.",
          colorOptions: [
            "#e59500", "#840032", "#000000", "#FFFFFF", 
            "#2563EB", "#16A34A", "#DC2626", "#7C3AED", 
            "#D97706", "#0891B2", "#4B5563", "#EC4899"
          ]
        },
        { 
          label: "Mood and Associations the Website Should Evoke", 
          name: "mood", 
          type: "select",
          options: [
            "Strict Corporate Design", 
            "Bright and Expressive Design", 
            "Design Rich with Illustrations / Photos", 
            "Minimalist Design with Focus on Functionality", 
            "Retro Style",
            "Other (specify in comments)"
          ]
        }
      ]
    },
    {
      title: "3. Examples of Websites with Good Design",
      description: "In your own words, describe what attracts you to a particular website. For example: color combinations, high-quality image in the header, well-chosen fonts, etc. Please avoid uninformative phrasing like: 'good website header, modern design, informative website'.",
      fields: [
        { 
          label: "Example 1", 
          name: "example1", 
          type: "group", 
          subfields: [
            { label: "Link", name: "url1", type: "text" },
            { label: "What you like about the site (in your own words)", name: "description1", type: "textarea" }
          ]
        },
        { 
          label: "Example 2", 
          name: "example2", 
          type: "group", 
          subfields: [
            { label: "Link", name: "url2", type: "text" },
            { label: "What you like about the site (in your own words)", name: "description2", type: "textarea" }
          ]
        },
        { 
          label: "Example 3", 
          name: "example3", 
          type: "group", 
          subfields: [
            { label: "Link", name: "url3", type: "text" },
            { label: "What you like about the site (in your own words)", name: "description3", type: "textarea" }
          ]
        }
      ]
    },
    {
      title: "4. Additional",
      fields: [
        { 
          label: "Do you have design elements that can be used when creating the website design (you can attach a link to the cloud)?", 
          name: "designElements", 
          type: "text",
          description: "Logo, corporate identity, colors, fonts, printing, etc."
        },
        { 
          label: "Do you have content for the website?", 
          name: "existingContent", 
          type: "text",
          description: "texts, translations, photos, etc.?"
        }
      ]
    },
    {
      title: "5. Domain/Hosting",
      fields: [
        { label: "What domain name would you like for your website?", name: "domainName", type: "text" },
        { 
          label: "Your hosting or ours?", 
          name: "hosting", 
          type: "select",
          options: ["Your hosting", "Our hosting", "Not decided yet"]
        }
      ]
    },
    {
      title: "6. Contact Information for Website",
      fields: [
        { label: "Phone", name: "contactPhone", type: "text" },
        { label: "Address", name: "contactAddress", type: "text" },
        { label: "E-mail", name: "contactEmail", type: "email" },
        { label: "Other", name: "otherContacts", type: "text" }
      ]
    },
    {
      title: "7. Website Menu Sections",
      description: "Example: Home, About Us (History / Our Team / Contacts), Catalog, Services, Payment (Prices), Delivery, Our Works, Contacts",
      fields: [
        { label: "Menu Sections", name: "menuItems", type: "textarea" }
      ]
    },
    {
      title: "8. Website Functionality",
      description: "Select modules, provide their description and a reference example",
      fields: [
        { label: "News Feed", name: "newsModule", type: "textarea", description: "quick addition and modification of news" },
        { label: "FAQ", name: "faqModule", type: "textarea", description: "processing visitor questions and answers" },
        { label: "Articles", name: "articlesModule", type: "textarea", description: "working with any text information on your website" },
        { label: "Online Order", name: "orderModule", type: "textarea", description: "ordering products or services on the website" },
        { label: "Product Catalog", name: "catalogModule", type: "textarea", description: "working with structured information about products or services" },
        { label: "E-commerce", name: "ecommerceModule", type: "textarea", description: "making sales over the internet and processing orders" },
        { label: "Integration of shop with bank payment system", name: "paymentIntegration", type: "textarea" },
        { label: "Newsletter", name: "newsletterModule", type: "textarea", description: "sending press releases and news to clients" },
        { label: "Banner System", name: "bannerModule", type: "textarea", description: "placing ads on website pages" },
        { label: "Search System", name: "searchModule", type: "textarea", description: "search by site, search by catalog, search by database" },
        { label: "Photo Gallery", name: "galleryModule", type: "textarea", description: "view gallery of images" },
        { label: "Product Export", name: "productExport", type: "textarea", description: "integration of products on the site, etc." },
        { label: "Online Consultant", name: "chatModule", type: "textarea", description: "ability to answer visitor questions online" },
        { label: "Voting", name: "pollModule", type: "textarea", description: "conducting surveys and viewing results" },
        { label: "Reviews", name: "reviewsModule", type: "textarea", description: "collecting and publishing reviews" },
        { label: "Language Versions of the Site", name: "multilingual", type: "textarea", description: "how many languages" },
        { label: "Personal Account", name: "personalAccount", type: "textarea", description: "and functions that should be available" },
        { label: "Filters, Product Sorting", name: "filters", type: "textarea" },
        { label: "Additional View of Product Cards", name: "productCards", type: "textarea" },
        { label: "Product Offers", name: "productOffers", type: "textarea" },
        { label: "Reviews", name: "reviews", type: "textarea", description: "for the site or for products" },
        { label: "Delivery Module", name: "deliveryModule", type: "textarea", description: "online delivery calculation" },
        { label: "Other Modules", name: "otherModules", type: "textarea", description: "list what else is needed, can include website examples" }
      ]
    },
    {
      title: "9. Additional Requests",
      fields: [
        { 
          label: "Additional (and valuable to you) development requests", 
          name: "additionalWishes", 
          type: "textarea" 
        }
      ]
    }
  ];

  const renderField = (field: FormField) => {
    switch (field.type) {
      case 'text':
        return (
          <div className="mb-4" key={field.name}>
            <label className="block text-sm font-medium mb-1 text-black" htmlFor={field.name}>
              {field.label}
              {field.description && (
                <div className="text-xs text-gray-500 mt-1">{field.description}</div>
              )}
            </label>
            <input
              type="text"
              id={field.name}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e59500] bg-white text-black"
            />
          </div>
        );
      case 'color-picker':
        return (
          <div className="mb-4" key={field.name}>
            <label className="block text-sm font-medium mb-1 text-black" htmlFor={field.name}>
              {field.label}
              {field.description && (
                <div className="text-xs text-gray-500 mt-1">{field.description}</div>
              )}
            </label>
            <div className="mt-2">
              <input
                type="text"
                id={field.name}
                name={field.name}
                value={formData[field.name] || ''}
                onChange={handleChange}
                placeholder="Added colors will appear here"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e59500] bg-white text-black mb-2"
              />
              
              {/* Display selected colors */}
              {formData[field.name] && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {formData[field.name].split(',').map((color, index) => (
                    <div key={index} className="flex items-center gap-1 border border-gray-200 rounded-md px-2 py-1 bg-white">
                      <div
                        className="w-4 h-4 rounded-sm border border-gray-300"
                        style={{ backgroundColor: color.trim() }}
                      ></div>
                      <span className="text-xs">{color.trim()}</span>
                      <button
                        type="button"
                        className="ml-1 text-gray-400 hover:text-gray-600"
                        onClick={() => {
                          const colors = formData[field.name].split(',')
                            .map(c => c.trim())
                            .filter((_, i) => i !== index)
                            .join(', ');
                          setFormData(prev => ({ ...prev, [field.name]: colors }));
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="flex flex-wrap gap-2 mt-2">
                <div className="flex items-center gap-2 mb-2">
                  <input 
                    type="color" 
                    id={`${field.name}-picker`}
                    className="w-10 h-10 cursor-pointer border-0"
                  />
                  <button
                    type="button"
                    className="px-2 py-1 bg-gray-100 hover:bg-gray-200 text-sm rounded border border-gray-300 transition-colors"
                    onClick={() => {
                      const input = document.getElementById(`${field.name}-picker`) as HTMLInputElement;
                      const color = input.value;
                      const currentColors = formData[field.name] ? formData[field.name].split(',').map(c => c.trim()) : [];
                      if (!currentColors.includes(color)) {
                        const newColors = [...currentColors, color].join(', ');
                        setFormData(prev => ({ ...prev, [field.name]: newColors }));
                      }
                    }}
                  >
                    Add Color
                  </button>
                </div>
                
                <div className="w-full border-t border-gray-200 my-2"></div>
                <div className="text-xs text-gray-500 w-full mb-1">Preset colors:</div>
                
                {field.colorOptions?.map((color) => (
                  <button
                    key={color}
                    type="button"
                    style={{ backgroundColor: color }}
                    className="w-8 h-8 rounded-full border border-gray-300 cursor-pointer hover:scale-110 transition-transform"
                    onClick={() => {
                      const currentColors = formData[field.name] ? formData[field.name].split(',').map(c => c.trim()) : [];
                      if (!currentColors.includes(color)) {
                        const newColors = [...currentColors, color].join(', ');
                        setFormData(prev => ({ ...prev, [field.name]: newColors }));
                      }
                    }}
                    aria-label={`Select color ${color}`}
                  />
                ))}
                <button
                  type="button"
                  className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 bg-white cursor-pointer hover:bg-gray-100"
                  onClick={() => setFormData(prev => ({ ...prev, [field.name]: '' }))}
                  aria-label="Reset selected colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        );
      case 'email':
        return (
          <div className="mb-4" key={field.name}>
            <label className="block text-sm font-medium mb-1 text-black" htmlFor={field.name}>
              {field.label}
              {field.description && (
                <div className="text-xs text-gray-500 mt-1">{field.description}</div>
              )}
            </label>
            <input
              type="email"
              id={field.name}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e59500] bg-white text-black"
            />
          </div>
        );
      case 'textarea':
        return (
          <div className="mb-4" key={field.name}>
            <label className="block text-sm font-medium mb-1 text-black" htmlFor={field.name}>
              {field.label}
              {field.description && (
                <div className="text-xs text-gray-500 mt-1">{field.description}</div>
              )}
            </label>
            <textarea
              id={field.name}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              rows={4}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e59500] bg-white text-black"
            ></textarea>
          </div>
        );
      case 'select':
        return (
          <div className="mb-4" key={field.name}>
            <label className="block text-sm font-medium mb-1 text-black" htmlFor={field.name}>
              {field.label}
              {field.description && (
                <div className="text-xs text-gray-500 mt-1">{field.description}</div>
              )}
            </label>
            <select
              id={field.name}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e59500] bg-white text-black"
            >
              <option value="">Select...</option>
              {field.options?.map((option: string) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        );
      case 'group':
        return (
          <div className="mb-4 p-4 border border-gray-200 rounded-md bg-white" key={field.name}>
            <h4 className="font-medium mb-3 text-black">{field.label}</h4>
            {field.subfields?.map((subfield: FormField) => renderField(subfield))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      className="w-full text-black bg-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {!mounted ? null : success ? (
        <div className="p-6 md:p-8 text-center">
          <div className="mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-2 text-black">Brief Submitted Successfully!</h3>
          <p className="text-black mb-6">Thank you for filling out the brief. We will contact you soon to discuss your project details.</p>
          <button
            type="button"
            onClick={() => setSuccess(false)}
            className="gradient-button text-center px-8 py-3 text-lg min-w-[180px] inline-flex justify-center items-center hover:scale-105 transition-transform duration-300"
          >
            Fill Again
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-6 md:p-8 bg-white">
          {briefSections.map((section, index) => (
            <div 
              key={index}
              className="mb-8 border border-gray-200 rounded-lg overflow-hidden shadow-md"
            >
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-black">{section.title}</h3>
                {section.description && (
                  <div className="mt-2 mb-4 text-sm text-black bg-white p-3 rounded border border-gray-100">
                    {section.description}
                  </div>
                )}
                <div className="space-y-4 mt-4">
                  {section.fields.map(field => renderField(field))}
                </div>
              </div>
            </div>
          ))}

          {error && (
            <div className="p-3 mb-4 bg-red-100 text-red-700 border border-red-200 rounded-md">
              {error}
            </div>
          )}

          <div className="mt-8 flex items-start gap-2">
            <input
              type="checkbox"
              id="privacy"
              checked={privacyAccepted}
              onChange={handlePrivacyChange}
              className="mt-1 h-4 w-4 cursor-pointer transition-all duration-300 ease-out accent-black"
            />
            <label htmlFor="privacy" className="text-sm cursor-pointer text-black">
              I agree to the processing of my personal data in accordance with the{" "}
              <Link 
                href="/en/privacy" 
                className="font-semibold relative text-[#840032] hover:text-[#e59500] transition-colors duration-300 no-underline"
                target="_blank"
              >
                Privacy Policy
              </Link>
            </label>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`gradient-button text-center px-8 py-3 text-lg min-w-[180px] inline-flex justify-center items-center transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'}`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : "Submit Brief"}
            </button>
          </div>
        </form>
      )}
    </motion.div>
  );
} 