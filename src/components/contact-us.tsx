"use client";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

const ContactUs: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Contact Us
          </h2>
          <div className="grid gap-4">
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5 text-muted-foreground" />
              <a
                href="tel:+917306307944"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Call us at 730-630-7944"
              >
                +91 730 630 7944
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MailIcon className="h-5 w-5 text-muted-foreground" />
              <a href="mailto:chocobae50@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                chocobae50@gmail.com
              </a>
            </div>
            <div className="flex items-start gap-2">
              <LocateIcon className="h-5 w-5 text-muted-foreground shrink-0 mt-1" />
              <span className="text-muted-foreground">
                35/311-A3, Mini Bypass Road, <br />
                Near RLV College, Tripunithura, <br />
                Kochi, Kerala 682301
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="h-5 w-5 text-muted-foreground" />
              <span className="text-muted-foreground">10:00 AM – 10:30 PM (Daily)</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
             {/* Map or Image could go here */}
             <div className="w-full h-64 bg-muted rounded-xl border border-border flex items-center justify-center text-muted-foreground overflow-hidden">
                <iframe 
                  src="https://maps.google.com/maps?q=9.9420935277,76.3432815444&z=15&output=embed"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Chocobae Location"
                ></iframe>
             </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

function ClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function LocateIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

