"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Footer() {
  const [expandedPolicy, setExpandedPolicy] = useState<string | null>(null);

  const togglePolicy = (policy: string) => {
    setExpandedPolicy(expandedPolicy === policy ? null : policy);
  };

  return (
    <footer className="bg-gradient-to-b from-background to-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Aureum</h3>
            <p className="text-sm text-muted-foreground">
              Premium Korean skincare for timeless beauty. Curated collection of
              the finest K-beauty brands.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/clients"
                  className="hover:text-primary transition-colors"
                >
                  Our Clients
                </Link>
              </li>
              <li>
                <Link
                  href="/order"
                  className="hover:text-primary transition-colors"
                >
                  Order
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Email: hello@aureum.com
            </p>
            <p className="text-sm text-muted-foreground">
              Phone: +91 93212 23123
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-12 space-y-4">
          <div className="bg-card rounded-lg border border-border">
            <button
              onClick={() => togglePolicy("terms")}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted transition-colors"
            >
              <h5 className="font-semibold text-foreground">
                Terms of Service
              </h5>
              <ChevronDown
                size={20}
                className={`text-muted-foreground transition-transform ${
                  expandedPolicy === "terms" ? "rotate-180" : ""
                }`}
              />
            </button>
            {expandedPolicy === "terms" && (
              <div className="px-6 py-4 border-t border-border text-sm text-muted-foreground space-y-3">
                <p>
                  <strong>1. Agreement to Terms</strong>
                  <br />
                  By accessing and using this website, you accept and agree to
                  be bound by the terms and provision of this agreement.
                </p>
                <p>
                  <strong>2. Use License</strong>
                  <br />
                  Permission is granted to temporarily download one copy of the
                  materials (information or software) on Aureum for personal,
                  non-commercial transitory viewing only. This is the grant of a
                  license, not a transfer of title.
                </p>
                <p>
                  <strong>3. Disclaimer</strong>
                  <br />
                  The materials on Aureum are provided on an 'as is' basis.
                  Aureum makes no warranties, expressed or implied, and hereby
                  disclaims and negates all other warranties including, without
                  limitation, implied warranties or conditions of
                  merchantability, fitness for a particular purpose, or
                  non-infringement of intellectual property or other violation
                  of rights.
                </p>
                <p>
                  <strong>4. Limitations</strong>
                  <br />
                  In no event shall Aureum or its suppliers be liable for any
                  damages (including, without limitation, damages for loss of
                  data or profit, or due to business interruption) arising out
                  of the use or inability to use the materials on Aureum, even
                  if Aureum or an authorized representative has been notified
                  orally or in writing of the possibility of such damage.
                </p>
                <p>
                  <strong>5. Accuracy of Materials</strong>
                  <br />
                  The materials appearing on Aureum could include technical,
                  typographical, or photographic errors. Aureum does not warrant
                  that any of the materials on its website are accurate,
                  complete, or current. Aureum may make changes to the materials
                  contained on its website at any time without notice.
                </p>
              </div>
            )}
          </div>

          <div className="bg-card rounded-lg border border-border">
            <button
              onClick={() => togglePolicy("privacy")}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted transition-colors"
            >
              <h5 className="font-semibold text-foreground">Privacy Policy</h5>
              <ChevronDown
                size={20}
                className={`text-muted-foreground transition-transform ${
                  expandedPolicy === "privacy" ? "rotate-180" : ""
                }`}
              />
            </button>
            {expandedPolicy === "privacy" && (
              <div className="px-6 py-4 border-t border-border text-sm text-muted-foreground space-y-3">
                <p>
                  <strong>1. Introduction</strong>
                  <br />
                  Aureum ("we" or "us" or "our") operates the website. This page
                  informs you of our policies regarding the collection, use, and
                  disclosure of personal data when you use our Service and the
                  choices you have associated with that data.
                </p>
                <p>
                  <strong>2. Information Collection and Use</strong>
                  <br />
                  We collect several different types of information for various
                  purposes to provide and improve our Service to you.
                </p>
                <p>
                  <strong>3. Types of Data Collected:</strong>
                  <br />
                  • Personal Data: While using our Service, we may ask you to
                  provide us with certain personally identifiable information
                  that can be used to contact or identify you ("Personal Data").
                  This may include, but is not limited to:
                  <br />
                  - Email address
                  <br />
                  - First name and last name
                  <br />
                  - Phone number
                  <br />
                  - Address, State, Province, ZIP/Postal code, City
                  <br />- Cookies and Usage Data
                </p>
                <p>
                  <strong>4. Use of Data</strong>
                  <br />
                  Aureum uses the collected data for various purposes:
                  <br />
                  • To provide and maintain our Service
                  <br />
                  • To notify you about changes to our Service
                  <br />
                  • To allow you to participate in interactive features of our
                  Service
                  <br />
                  • To provide customer support
                  <br />
                  • To gather analysis or valuable information so that we can
                  improve our Service
                  <br />
                  • To monitor the usage of our Service
                  <br />• To detect, prevent and address technical issues
                </p>
                <p>
                  <strong>5. Security of Data</strong>
                  <br />
                  The security of your data is important to us but remember that
                  no method of transmission over the Internet or method of
                  electronic storage is 100% secure. While we strive to use
                  commercially acceptable means to protect your Personal Data,
                  we cannot guarantee its absolute security.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            &copy; 2024 Aureum. All rights reserved. | Premium Korean Skincare
          </p>
        </div>
      </div>
    </footer>
  );
}
