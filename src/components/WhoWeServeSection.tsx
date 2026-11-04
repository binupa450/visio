/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Shield, UserCheck, CalendarDays, Ambulance } from 'lucide-react';

export default function WhoWeServeSection() {
  const userGroups = [
    {
      role: 'Event Safety Managers',
      category: 'Strategic Oversight & Threshold Governance',
      icon: Shield,
      summary:
        'Establish safety thresholds, monitor multi-sector crowd densities in real time, and oversee compliance with local licensing and crowd safety standards.',
      keyTasks: [
        'Configure customized crowd threshold tiers per sector',
        'Maintain the central common operating picture in command HQ',
        'Review post-event density curves and safety audit records',
      ],
      quote: 'VISIO replaces subjective guesses with verified density calculations before overcrowding becomes hazardous.',
    },
    {
      role: 'Ground Security Officers',
      category: 'Tactical Intervention & Crowd Direction',
      icon: UserCheck,
      summary:
        'Receive immediate threshold alerts with clear zone identifiers on mobile devices or control radios, enabling swift deployment to bottlenecked gates.',
      keyTasks: [
        'Receive immediate zone alerts with clear physical coordinates',
        'Initiate crowd diversion protocols at chokepoints before crush risk',
        'Direct foot traffic to underutilized gates and bypass passages',
      ],
      quote: 'Knowing the exact corridor in trouble lets us position officers minutes before a queue turns into a compression.',
    },
    {
      role: 'Event Organisers',
      category: 'Venue Operations & Stakeholder Trust',
      icon: CalendarDays,
      summary:
        'Ensure licensing compliance, protect attendee well-being, and maintain smooth patron flow throughout concert festivals, sporting arenas, and exhibitions.',
      keyTasks: [
        'Demonstrate rigorous crowd safety protocols to municipal authorities',
        'Balance venue capacity across food plazas, merchandise, and main stages',
        'Eliminate reputational risk linked to preventable overcrowding incidents',
      ],
      quote: 'Gives our operational directors complete peace of mind that safety risks are monitored systematically.',
    },
    {
      role: 'Emergency Response Teams',
      category: 'Corridor Clearance & Rapid Evacuation',
      icon: Ambulance,
      summary:
        'Maintain unobstructed primary emergency egress routes and access points, ensuring paramedic and response units can navigate large venues safely.',
      keyTasks: [
        'Continuously verify emergency egress corridors remain below density limits',
        'Locate incidents instantly on the venue zone schematic',
        'Coordinate multi-agency evacuations using synchronized density data',
      ],
      quote: 'Verifying that emergency access corridors are clear is essential for rapid first-responder deployment.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#101C2C] text-white border-b border-[#172D46]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
            Target Stakeholders
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Supporting the People Behind Event Safety
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            From the control room command center to ground personnel on venue walkways, VISIO provides every safety stakeholder with the precise intelligence they need.
          </p>
        </div>

        {/* 4 User Group Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {userGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.role}
                className="bg-[#172D46] rounded-2xl p-7 sm:p-8 border border-slate-700/80 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#2563EB] text-white flex items-center justify-center shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                        {group.category}
                      </span>
                      <h3 className="text-xl font-bold text-white">
                        {group.role}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {group.summary}
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-slate-700/60">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                      Primary Operational Workflows
                    </div>
                    {group.keyTasks.map((task) => (
                      <div key={task} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                        <span className="text-blue-400 font-bold shrink-0">→</span>
                        <span>{task}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-700/60 text-xs italic text-slate-300 bg-[#101C2C]/50 p-3.5 rounded-lg border border-slate-800">
                  &ldquo;{group.quote}&rdquo;
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
