/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Mail, MapPin, Building2 } from 'lucide-react';

interface FormState {
  fullName: string;
  email: string;
  organisation: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    organisation: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please enter a message of at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate clean local client submission without claiming backend delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      organisation: '',
      message: '',
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#101C2C] text-white border-b border-[#172D46]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Context & Project Inquiries */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Get in Touch
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
              Let&apos;s Make Events Safer Together
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Whether you are an event safety officer interested in our crowd monitoring research, an academic evaluator, or looking to discuss student prototype deployment, we welcome your feedback and inquiries.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-800 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#172D46] border border-slate-700 flex items-center justify-center shrink-0 text-blue-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Project Correspondence</div>
                  <div className="text-slate-400 text-xs mt-0.5">
                    Add your project email address here
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#172D46] border border-slate-700 flex items-center justify-center shrink-0 text-blue-400">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Academic Affiliation</div>
                  <div className="text-slate-400 text-xs mt-0.5">
                    Department of Computing &amp; Systems Engineering
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#172D46] border border-slate-700 flex items-center justify-center shrink-0 text-blue-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Project Lab Location</div>
                  <div className="text-slate-400 text-xs mt-0.5">
                    Student Innovation Hub · Research Wing
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#172D46]/60 border border-slate-700/60 text-xs text-slate-300">
              <strong>Backend Integration Readiness:</strong> This form includes client-side validation and state handling. When you connect an email service or backend endpoint (e.g. via Node/Express or Firebase), payload mapping is immediately ready.
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#172D46] rounded-2xl p-6 sm:p-8 border border-slate-700/80 shadow-xl">
              {isSuccess ? (
                <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-950 border border-emerald-500/40 text-[#16A34A] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-[#16A34A]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Inquiry Recorded (Prototype Form)
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-white">{formData.fullName}</span>. Your inquiry has been validated and recorded in local state for review.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-2.5 text-xs font-semibold text-white bg-[#2563EB] hover:bg-blue-600 rounded-lg transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Full Name <span className="text-[#DC2626]">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      placeholder="e.g. Alex Henderson"
                      className={`w-full px-4 py-2.5 rounded-lg bg-[#101C2C] border text-white text-sm placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                        errors.fullName
                          ? 'border-[#DC2626]'
                          : 'border-slate-700 focus:border-blue-500'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Email Address <span className="text-[#DC2626]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="alex.henderson@safety-org.com"
                      className={`w-full px-4 py-2.5 rounded-lg bg-[#101C2C] border text-white text-sm placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                        errors.email
                          ? 'border-[#DC2626]'
                          : 'border-slate-700 focus:border-blue-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="organisation"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Organisation / Agency <span className="text-slate-500 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="organisation"
                      value={formData.organisation}
                      onChange={(e) =>
                        setFormData({ ...formData, organisation: e.target.value })
                      }
                      placeholder="e.g. Metropolitan Stadium Operations / Event Safety Trust"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#101C2C] border border-slate-700 text-white text-sm placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Message / Inquiry Details <span className="text-[#DC2626]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about your event safety requirements, questions about density thresholds, or feedback on our student prototype..."
                      className={`w-full px-4 py-2.5 rounded-lg bg-[#101C2C] border text-white text-sm placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                        errors.message
                          ? 'border-[#DC2626]'
                          : 'border-slate-700 focus:border-blue-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-lg text-sm font-semibold text-white bg-[#2563EB] hover:bg-blue-600 transition-colors shadow-sm flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      {isSubmitting ? (
                        <span>Validating &amp; Recording...</span>
                      ) : (
                        <>
                          <span>Submit Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
