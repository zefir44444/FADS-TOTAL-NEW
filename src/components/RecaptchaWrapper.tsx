"use client";

import React, { forwardRef, useEffect, useState } from 'react';
import Script from 'next/script';
import ReCAPTCHAComponent from 'react-google-recaptcha';

interface RecaptchaProps {
  sitekey: string;
  onChange: (token: string | null) => void;
  size?: "normal" | "compact";
}

// Используем forwardRef для передачи ref от родительского компонента к ReCAPTCHA
const RecaptchaWrapper = forwardRef<ReCAPTCHAComponent, RecaptchaProps>(
  ({ sitekey, onChange, size }, ref) => {
    const [scriptLoaded, setScriptLoaded] = useState(false);

    return (
      <>
        <Script
          src="https://www.google.com/recaptcha/api.js"
          strategy="lazyOnload"
          onLoad={() => setScriptLoaded(true)}
        />
        {scriptLoaded && (
          <ReCAPTCHAComponent
            ref={ref}
            sitekey={sitekey}
            onChange={onChange}
            size={size}
          />
        )}
      </>
    );
  }
);

// Важно добавить displayName для forwardRef компонентов
RecaptchaWrapper.displayName = 'RecaptchaWrapper';

export default RecaptchaWrapper; 