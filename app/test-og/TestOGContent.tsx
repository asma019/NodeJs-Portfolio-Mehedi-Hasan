"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function TestOGContent() {
  const [showImage, setShowImage] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Social Media Share Preview Test
        </h1>
        
        <div className="space-y-6">
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This page lets you test how your site's social sharing image appears. This is the image that will be shown when sharing your site on platforms like Facebook, Twitter, LinkedIn, etc.
            </p>
            
            <div className="flex space-x-3 mb-6">
              <Link 
                href="/"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Back to Home
              </Link>
              
              <button
                onClick={() => setShowImage(!showImage)}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                {showImage ? "Hide Image" : "Show Image"}
              </button>
            </div>
          </div>
          
          {showImage && (
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Your Social Share Image
              </h2>
              <div className="relative w-full aspect-[1200/630] overflow-hidden rounded-md shadow-md">
                <Image
                  src="/images/socialshare.png"
                  alt="Social Share Preview"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                Recommended size: 1200×630 pixels (Aspect ratio 1.91:1)
              </p>
            </div>
          )}
          
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Meta Tags Added to Your Site
            </h2>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded overflow-x-auto">
              <pre className="text-xs text-gray-800 dark:text-gray-300">
{`<meta property="og:title" content="Mehedi Hasan | Freelancer And Web Developer From Bangladesh">
<meta property="og:description" content="Freelance web developer with 3+ years of experience creating responsive, user-friendly websites and web applications.">
<meta property="og:image" content="https://mehedims.com/images/socialshare.png">
<meta property="og:url" content="https://mehedims.com">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Mehedi Hasan | Freelancer And Web Developer From Bangladesh">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Mehedi Hasan | Freelancer And Web Developer From Bangladesh">
<meta name="twitter:description" content="Freelance web developer with 3+ years of experience creating responsive, user-friendly websites and web applications.">
<meta name="twitter:image" content="https://mehedims.com/images/socialshare.png">
<meta name="twitter:creator" content="@mehedihasan">`}
              </pre>
            </div>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Test Tools
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              You can use these tools to test how your site appears when shared:
            </p>
            <ul className="space-y-2 text-blue-600 dark:text-blue-400">
              <li>
                <a 
                  href="https://developers.facebook.com/tools/debug/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Facebook Sharing Debugger
                </a>
              </li>
              <li>
                <a 
                  href="https://cards-dev.twitter.com/validator" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Twitter Card Validator
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/post-inspector/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  LinkedIn Post Inspector
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 