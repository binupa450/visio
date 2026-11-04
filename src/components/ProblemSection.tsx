/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { EyeOff, Zap, ShieldAlert, Radio, LayoutDashboard } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      step: '01',
      icon: EyeOff,
      title: 'Manual CCTV Monitoring Is Overwhelming',
      description:
        'Operators cannot effectively scrutinize dozens of simultaneous video feeds for hours. Critical crowd compressions in peripheral corridors or corner turnstiles are easily overlooked until someone calls in.',
      stat: '75%',
      statDesc: 'of human visual attention drops after 20 minutes of continuous multi-feed scanning.',
    },
    {
      step: '02',
      icon: Zap,
      title: 'Overcrowding Develops In Minutes',
      description:
        'A sudden rain shower, artist stage entrance, or gate opening can channel thousands of people into narrow passages in under 180 seconds, converting safe walkways into high-risk chokepoints.',
      stat: '< 3 min',
      statDesc: 'average timeframe for localized crowd density to transition from safe to hazardous.',
    },
    {
      step: '03',
      icon: ShieldAlert,
      title: 'Dangerous Density Levels Go Unnoticed Early',
      description:
        'Crowd safety science establishes that densities exceeding 4 people/m² dramatically restrict human locomotion and trigger shock waves. Traditional security rarely perceives this build-up until physical distress occurs.',
      stat: '> 4 ppl/m²',
      statDesc: 'critical threshold where free human movement becomes involuntary fluid dynamics.',
    },
    {
      step: '04',
      icon: Radio,
      title: 'Communication & Coordination Delays',
      description:
        'Relying solely on radio chatter leads to channel congestion and ambiguous location reports. Ground stewards often lack clear situational coordinates on which gate needs immediate physical diversion.',
      stat: '4–8 min',
      statDesc: 'lost in verbal radio exchanges verifying exact zone location and current density severity.',
    },
    {
      step: '05',
      icon: LayoutDashboard,
      title: 'Lack of Unified Common Operating Picture',
      description:
        'Event directors, local authorities, and ground teams operate with fragmented perspectives. Without a single real-time overview of all venue zones, coordinated preventative interventions remain difficult.',
      stat: 'Siloed',
      statDesc: 'operational views prevent proactive early-stage crowd redistribution.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F5F8FC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#2563EB] mb-2">
            The Operational Reality
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#101C2C] text-balance">
            The Challenge of Managing Large Crowds
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Managing public safety across festivals, sports arenas, and transport hubs requires continuous vigilance. Traditional manual surveillance and reactive reporting leave dangerous blind spots when thousands gather.
          </p>
        </div>

        {/* 5 Problem Cards in an Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            const isWide = index === 3 || index === 4;
            return (
              <div
                key={problem.title}
                className={`group bg-white rounded-xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between ${
                  isWide ? 'lg:col-span-1 md:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center font-semibold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-slate-400">
                      {problem.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#101C2C] mb-2.5 leading-snug">
                    {problem.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {problem.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-baseline gap-3">
                  <span className="font-mono font-bold text-lg text-[#DC2626] tabular-nums shrink-0">
                    {problem.stat}
                  </span>
                  <span className="text-xs text-slate-500 leading-tight">
                    {problem.statDesc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
