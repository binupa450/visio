/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { X, ShieldCheck, EyeOff, Lock, AlertCircle } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#101C2C]/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#2563EB] flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#101C2C]">
              VISIO Privacy &amp; Operational Safety Charter
            </h3>
            <span className="text-xs text-slate-500">
              Student Project Ethical Principles &amp; Governance
            </span>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
            <div className="font-semibold text-[#101C2C] flex items-center gap-1.5">
              <EyeOff className="w-4 h-4 text-[#2563EB]" />
              <span>Zero Biometric or Facial Recognition</span>
            </div>
            <p>
              VISIO operates purely on anonymous spatial geometry and volumetric crowd density estimation. The system does not scan faces, track individual identities, read license plates, or store personal biometrics.
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
            <div className="font-semibold text-[#101C2C] flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-[#F59E0B]" />
              <span>Safety Advisory &amp; No Absolute Guarantees</span>
            </div>
            <p>
              VISIO is an early-warning situational intelligence tool designed to assist trained human safety managers. It does not predict unforeseen human actions or claim to guarantee zero incidents. Physical crowd management and emergency response remain the responsibility of certified venue personnel and authorities.
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
            <div className="font-semibold text-[#101C2C] flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-[#16A34A]" />
              <span>Data Retention &amp; Academic Scope</span>
            </div>
            <p>
              Developed as a student software engineering prototype. Demonstration dashboards use simulated sensor data. Any telemetry generated during lab testing is processed locally and discarded post-session.
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#101C2C] hover:bg-[#172D46] rounded-lg transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}
