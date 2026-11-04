/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import {
  Layers,
  Users,
  SlidersHorizontal,
  BellRing,
  Send,
  Workflow,
  Check,
  ShieldCheck
} from 'lucide-react';

export default function SolutionSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const solutions = [
    {
      id: 0,
      title: 'Unified Multi-Zone Surveillance',
      summary: 'Monitoring multiple event zones simultaneously without manual camera fatigue.',
      icon: Layers,
      detail:
        'VISIO brings discrete CCTV or video streams into one synchronized spatial overview. Safety officers can partition venues into defined spatial zones (turnstiles, corridors, main arenas, exit gates) and observe crowd distribution at a glance.',
      benefits: [
        'Organizes dozens of cameras into logical operational sectors',
        'Eliminates blind spots between connected corridors and staging zones',
        'Works with standard IP camera streams and video inputs',
      ],
      metricLabel: 'Coverage',
      metricValue: '100% Venue Footprint',
    },
    {
      id: 1,
      title: 'Automated Density Estimation',
      summary: 'Estimating crowd density (people/m²) continuously without personal surveillance.',
      icon: Users,
      detail:
        'Using spatial computer vision algorithms, VISIO measures occupancy metrics and calculates localized density in real time. The platform does NOT collect or process biometric features or facial identities—preserving patron privacy while safeguarding lives.',
      benefits: [
        'Strictly anonymous person and density estimation',
        'Calculates real-world persons per square meter (ppl/m²)',
        'Resilient across day, evening, and varied ambient lighting',
      ],
      metricLabel: 'Privacy',
      metricValue: 'Zero Facial ID / Biometrics',
    },
    {
      id: 2,
      title: 'Configurable Safety Thresholds',
      summary: 'Identifying zones approaching configured safety thresholds before critical surges.',
      icon: SlidersHorizontal,
      detail:
        'Every venue geometry is unique. Safety directors configure customized green (normal), orange (warning), and red (critical) density thresholds tailored to specific bottlenecks, stairs, or open plazas.',
      benefits: [
        'Dynamic thresholds per zone type (narrow exit vs. open festival lawn)',
        'Pre-warning margins allow intervention before movement freezes',
        'Eliminates guesswork with standardized density standards',
      ],
      metricLabel: 'Precision',
      metricValue: 'Customizable Tier Limits',
    },
    {
      id: 3,
      title: 'Proactive Early Warnings',
      summary: 'Generating automated alerts the moment density rates begin accelerating.',
      icon: BellRing,
      detail:
        'Instead of waiting for an emergency call, VISIO detects acceleration in density build-up and automatically triggers visual and auditory warnings on control room displays.',
      benefits: [
        'Instant alerts on threshold breaches',
        'Highlights rate of crowd accumulation (surges vs. steady flow)',
        'Reduces operator response latency from minutes to seconds',
      ],
      metricLabel: 'Lead Time',
      metricValue: 'Up to 10 min Early Warning',
    },
    {
      id: 4,
      title: 'Targeted Personnel Notification',
      summary: 'Notifying responsible security personnel with exact zone coordinates.',
      icon: Send,
      detail:
        'Alerts are routed directly to assigned zone supervisors and ground officers, providing clear operational details and recommended crowd redistribution protocols.',
      benefits: [
        'Direct dispatch to personnel nearest the affected zone',
        'Clear zone tags avoid confusing radio location descriptions',
        'Audit trail records dispatch time and acknowledgement',
      ],
      metricLabel: 'Coordination',
      metricValue: 'Direct Zone Dispatch',
    },
    {
      id: 5,
      title: 'Organised Incident Response',
      summary: 'Supporting faster and more organized responses through standardized workflows.',
      icon: Workflow,
      detail:
        'VISIO provides event safety managers with actionable insights to deploy crowd management tactics: opening secondary turnstiles, activating directional signage, and pausing ingress before dangerous pressure builds.',
      benefits: [
        'Empowers proactive crowd diversions over reactive crisis management',
        'Provides objective post-event incident logs for safety audits',
        'Supports standard operating procedures (SOPs) for venue security',
      ],
      metricLabel: 'Outcome',
      metricValue: 'Structured Action Plans',
    },
  ];

  const current = solutions[activeTab];
  const CurrentIcon = current.icon;

  return (
    <section className="py-20 lg:py-28 bg-[#101C2C] text-white border-b border-[#172D46]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
            The VISIO Solution
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            A Smarter Approach to Event Safety
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            By combining continuous multi-zone monitoring with automated density calculation and instant threshold alerts, VISIO empowers security personnel to act before overcrowding compromises life safety.
          </p>
        </div>

        {/* Interactive Solution Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Solution Selector List */}
          <div className="lg:col-span-5 space-y-2">
            {solutions.map((item, index) => {
              const Icon = item.icon;
              const isSelected = activeTab === index;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-4 rounded-xl transition-all border flex items-start gap-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    isSelected
                      ? 'bg-[#172D46] border-[#2563EB] text-white shadow-md'
                      : 'bg-[#101C2C] hover:bg-[#172D46]/60 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg shrink-0 mt-0.5 ${
                      isSelected ? 'bg-[#2563EB] text-white' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                      {item.summary}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Solution Deep-Dive Display Card */}
          <div className="lg:col-span-7 bg-[#172D46] border border-slate-700/80 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-700/70 pb-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#2563EB] text-white flex items-center justify-center shadow-md">
                  <CurrentIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-blue-400 font-mono font-semibold">
                    CAPABILITY 0{current.id + 1}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {current.title}
                  </h3>
                </div>
              </div>
              <div className="text-right hidden sm:block">
                <div className="text-[11px] text-slate-400 uppercase tracking-wider">{current.metricLabel}</div>
                <div className="text-sm font-bold text-blue-400 font-mono">{current.metricValue}</div>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {current.detail}
            </p>

            <div className="space-y-3 pt-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Key Operational Advantages
              </div>
              <div className="space-y-2.5">
                {current.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500/40 text-[#16A34A] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#16A34A]" />
                    </div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Safety & Protocol Box */}
            <div className="p-4 rounded-xl bg-[#101C2C] border border-slate-700/60 flex items-center gap-3 text-xs text-slate-300">
              <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0" />
              <span>
                <strong>Academic Prototype Standard:</strong> Designed in accordance with international crowd density safety thresholds (Fruin Level of Service standards for public assembly).
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
