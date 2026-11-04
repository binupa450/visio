/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import {
  ShieldAlert,
  Camera,
  Activity,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  BellRing,
  Info
} from 'lucide-react';

export default function Hero() {
  // Interactive mini simulation in hero dashboard
  const [selectedZone, setSelectedZone] = useState<'all' | 'critical' | 'warning'>('all');

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#101C2C] text-white overflow-hidden border-b border-[#172D46]"
    >
      {/* Background Subtle Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#2563EB 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span>Intelligent Event Safety Intelligence</span>
              <span className="text-slate-500">·</span>
              <span className="text-slate-400">Student Innovation Project</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance leading-[1.12]">
              Detect Crowds. <br />
              <span className="text-blue-500">Prevent Risks.</span> <br />
              Protect Lives.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              VISIO brings intelligent crowd monitoring and early-warning capabilities together in one platform, helping event safety teams identify overcrowding and respond before situations become critical.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-[#2563EB] hover:bg-blue-600 rounded-lg shadow-lg shadow-blue-600/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              >
                <span>Explore Features</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-200 bg-[#172D46] hover:bg-[#1e3958] border border-slate-700/60 rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-400"
              >
                <span>Contact Us</span>
              </a>
            </div>

            {/* Credibility / Scope Disclaimers */}
            <div className="pt-6 border-t border-[#172D46] flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                100% Anonymous Density Estimation
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                No Facial Recognition
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                Proactive Threshold Telemetry
              </span>
            </div>
          </div>

          {/* Right Column: Realistic Crowd Monitoring Dashboard Mockup */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl bg-[#172D46] border border-[#2563EB]/30 shadow-2xl overflow-hidden">
              {/* Mockup Top Header */}
              <div className="px-5 py-3.5 bg-[#101C2C] border-b border-slate-700/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                  <span className="ml-2 text-xs font-semibold text-slate-300">
                    Live Operations Console
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-amber-400 font-medium bg-amber-950/40 px-2 py-0.5 rounded border border-amber-600/30">
                  <Info className="w-3.5 h-3.5" />
                  <span>Demonstration Data</span>
                </div>
              </div>

              {/* Mockup Event Overview Strip */}
              <div className="p-5 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700/60 pb-3">
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Active Monitored Event</div>
                    <div className="text-sm font-bold text-white flex items-center gap-2">
                      <span>Metropolitan Arena – National Finals</span>
                      <span className="text-[11px] text-emerald-400 font-mono font-medium">CAM-MATRIX 12/12 ACTIVE</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400">Total Monitored Count</span>
                    <div className="text-xl font-bold font-mono text-blue-400 tabular-nums">
                      14,820 <span className="text-xs font-sans text-slate-400">attendees</span>
                    </div>
                  </div>
                </div>

                {/* 4 Stat Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 bg-[#101C2C] rounded-lg border border-slate-700/50">
                    <div className="text-[11px] text-slate-400 font-medium">Total Zones</div>
                    <div className="text-xl font-bold text-white font-mono mt-0.5 tabular-nums">12</div>
                    <div className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                      <Camera className="w-3 h-3 text-blue-400" />
                      12 Feeds Synced
                    </div>
                  </div>

                  <div className="p-3 bg-[#101C2C] rounded-lg border border-slate-700/50">
                    <div className="text-[11px] text-[#16A34A] font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]"></span>
                      Safe Zones
                    </div>
                    <div className="text-xl font-bold text-[#16A34A] font-mono mt-0.5 tabular-nums">9</div>
                    <div className="text-[10px] text-slate-400 mt-1">&lt; 2.5 people/m²</div>
                  </div>

                  <div className="p-3 bg-[#101C2C] rounded-lg border border-slate-700/50">
                    <div className="text-[11px] text-[#F59E0B] font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]"></span>
                      Warning
                    </div>
                    <div className="text-xl font-bold text-[#F59E0B] font-mono mt-0.5 tabular-nums">2</div>
                    <div className="text-[10px] text-slate-400 mt-1">2.5 – 3.8 people/m²</div>
                  </div>

                  <div className="p-3 bg-[#101C2C] rounded-lg border border-slate-700/50">
                    <div className="text-[11px] text-[#DC2626] font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]"></span>
                      Critical
                    </div>
                    <div className="text-xl font-bold text-[#DC2626] font-mono mt-0.5 tabular-nums">1</div>
                    <div className="text-[10px] text-slate-400 mt-1">&gt; 4.0 people/m²</div>
                  </div>
                </div>

                {/* Simulated Zone Density Grid */}
                <div className="bg-[#101C2C] p-3.5 rounded-lg border border-slate-700/60 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-200">Key Venue Zones Density Feed</span>
                    <span className="text-[11px] text-slate-400">Refreshed 2s ago</span>
                  </div>

                  {/* Zone Items */}
                  <div className="space-y-2 text-xs">
                    {/* Critical Zone */}
                    <div className="p-2.5 rounded bg-red-950/30 border border-red-500/40 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0" />
                        <div>
                          <div className="font-semibold text-white">Zone 04 · West Concourse Turnstiles</div>
                          <div className="text-[11px] text-red-300">Bottleneck surge detected at Gate B egress</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-mono font-bold text-[#DC2626] tabular-nums text-sm">4.6 ppl/m²</span>
                        <div className="text-[10px] text-red-400 font-semibold uppercase">CRITICAL DENSITY</div>
                      </div>
                    </div>

                    {/* Warning Zone */}
                    <div className="p-2.5 rounded bg-amber-950/20 border border-amber-500/30 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <TrendingUp className="w-4 h-4 text-[#F59E0B] shrink-0" />
                        <div>
                          <div className="font-semibold text-white">Zone 02 · Main Stage Front Railing</div>
                          <div className="text-[11px] text-slate-300">Gradual compression before headliner start</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-mono font-bold text-[#F59E0B] tabular-nums text-sm">3.4 ppl/m²</span>
                        <div className="text-[10px] text-amber-400 font-semibold uppercase">WARNING LEVEL</div>
                      </div>
                    </div>

                    {/* Safe Zone */}
                    <div className="p-2.5 rounded bg-emerald-950/20 border border-emerald-500/20 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                        <div>
                          <div className="font-semibold text-white">Zone 01 · North Plaza Entryway</div>
                          <div className="text-[11px] text-slate-300">Steady continuous patron flow</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-mono font-bold text-[#16A34A] tabular-nums text-sm">1.3 ppl/m²</span>
                        <div className="text-[10px] text-emerald-400 font-semibold uppercase">NORMAL FLOW</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Alert Ticker */}
                <div className="p-3 bg-[#101C2C]/80 rounded-lg border border-slate-700/60 flex items-start gap-3">
                  <BellRing className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-300">
                    <span className="font-bold text-white">Latest Dispatch:</span> Safety Team Delta notified for proactive diversion at West Gate B turnstiles.
                  </div>
                </div>
              </div>

              {/* Bottom Notice */}
              <div className="px-5 py-2.5 bg-[#101C2C] border-t border-slate-800 text-[11px] text-slate-400 text-center font-medium">
                Prototype demonstration view · Real-time density calculation model preview
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
