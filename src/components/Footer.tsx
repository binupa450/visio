/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Mail, Shield } from 'lucide-react';
import BrandLogo from './BrandLogo';
import PrivacyModal from './PrivacyModal';

export default function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#101C2C] text-slate-400 border-t border-[#172D46] pt-16 pb-12 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
            {/* Brand Col */}
            <div className="lg:col-span-5 space-y-4">
              <BrandLogo theme="dark" showTagline={true} />

              <p className="text-xs sm:text-sm text-slate-300 max-w-sm leading-relaxed mt-2">
                VISIO brings intelligent crowd monitoring and early-warning safety intelligence together to support safer, better-managed public venues.
              </p>

              <div className="text-xs font-semibold text-slate-400 italic">
                &ldquo;Detect Crowds. Prevent Risks. Protect Lives.&rdquo;
              </div>

              <div className="flex items-center gap-3 pt-2 text-slate-400">
                <a
                  href="#hero"
                  className="p-2 rounded-lg bg-[#172D46] hover:bg-[#2563EB] hover:text-white transition-colors"
                  aria-label="GitHub Repository Placeholder"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="#hero"
                  className="p-2 rounded-lg bg-[#172D46] hover:bg-[#2563EB] hover:text-white transition-colors"
                  aria-label="LinkedIn Profile Placeholder"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#hero"
                  className="p-2 rounded-lg bg-[#172D46] hover:bg-[#2563EB] hover:text-white transition-colors"
                  aria-label="Twitter Placeholder"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="p-2 rounded-lg bg-[#172D46] hover:bg-[#2563EB] hover:text-white transition-colors"
                  aria-label="Email Project Team"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-white">
                Quick Navigation
              </div>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#hero" className="hover:text-white transition-colors">
                    Home &amp; Hero Overview
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About the Challenge
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Core Platform Features
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-white transition-colors">
                    How VISIO Works
                  </a>
                </li>
                <li>
                  <a href="#dashboard" className="hover:text-white transition-colors">
                    Live Operations Console
                  </a>
                </li>
                <li>
                  <a href="#team" className="hover:text-white transition-colors">
                    Our Project Team
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact &amp; Inquiries
                  </a>
                </li>
              </ul>
            </div>

            {/* Project Details & Disclaimers */}
            <div className="lg:col-span-4 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-white">
                Academic &amp; Safety Disclaimer
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                VISIO is an engineering prototype designed for academic evaluation and crowd safety research. It provides threshold estimation tools to assist trained safety managers and does not claim to predict crowd crushes or guarantee public safety.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setPrivacyOpen(true)}
                  className="text-xs text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  <Shield className="w-3.5 h-3.5" />
                  <span>Review Privacy &amp; Operational Safety Charter</span>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              &copy; {new Date().getFullYear()} VISIO Project. All rights reserved. Built for event safety.
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setPrivacyOpen(true)}
                className="hover:text-slate-300 transition-colors"
              >
                Privacy Policy
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => setPrivacyOpen(true)}
                className="hover:text-slate-300 transition-colors"
              >
                Safety Terms
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors ml-2"
                aria-label="Back to top"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Charter Modal */}
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </>
  );
}
