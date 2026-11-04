/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import {
  Video,
  Users2,
  Gauge,
  BellRing,
  Map,
  FileSpreadsheet,
  X,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

interface FeatureItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: typeof Video;
  extendedSpecs: string[];
  operationalRole: string;
}

export default function FeaturesSection() {
  const [selectedFeature, setSelectedFeature] = useState<FeatureItem | null>(null);

  const features: FeatureItem[] = [
    {
      id: 'multi-cam',
      title: 'Multi-Camera Monitoring',
      tagline: 'Synchronized visual ingestion across all venue sectors',
      description:
        'Monitor different event zones using connected camera feeds or supported monitoring inputs. Organize multiple camera feeds by gate, corridor, concourse, or stage area.',
      icon: Video,
      operationalRole: 'Surveillance & Spatial Partitioning',
      extendedSpecs: [
        'Supports RTSP, HLS, WebRTC, and standard IP camera feeds',
        'Multi-angle coverage reconciliation for wide entry plazas',
        'Automatic stream health monitoring and camera status pinging',
        'Configurable spatial masking to exclude non-public staff areas',
      ],
    },
    {
      id: 'density-est',
      title: 'Crowd Density Estimation',
      tagline: 'Continuous spatial density calculation per square meter',
      description:
        'Estimate the number of people within monitored zones in real time. Translates visual inputs into objective persons-per-square-meter (ppl/m²) metrics.',
      icon: Users2,
      operationalRole: 'Computer Vision & Occupancy Modeling',
      extendedSpecs: [
        'Strictly anonymous person and density estimation',
        'No facial recognition or identity tracking ever executed',
        'Calibrated spatial geometry mapped to physical square meters',
        'Tolerant to varying ambient light and high-angle perspectives',
      ],
    },
    {
      id: 'smart-warnings',
      title: 'Smart Warning Levels',
      tagline: 'Tri-tier safety status based on configured safety limits',
      description:
        'Display green, orange and red status levels based on configured density thresholds. Distinct visual and color telemetry guides operator attention immediately.',
      icon: Gauge,
      operationalRole: 'Threshold & Status Engine',
      extendedSpecs: [
        'Green Level: Normal free flow (< 2.5 people/m²)',
        'Orange Level: Warning compression (2.5 – 3.8 people/m²)',
        'Red Level: Critical congestion hazard (> 4.0 people/m²)',
        'Hysteresis filtering prevents jittery false threshold toggles',
      ],
    },
    {
      id: 'instant-alerts',
      title: 'Instant Security Alerts',
      tagline: 'Immediate notification dispatched when thresholds are breached',
      description:
        'Notify responsible personnel when crowd density reaches warning or critical levels. Delivers actionable alerts with zone location and severity.',
      icon: BellRing,
      operationalRole: 'Dispatch & Safety Routing',
      extendedSpecs: [
        'Sub-second threshold alert generation and dashboard audio-visual cue',
        'Push notifications to on-duty security and mobile tablets',
        'Includes recommended standard operating diversion maneuvers',
        'Requires manual or auto-recorded acknowledgement from supervisors',
      ],
    },
    {
      id: 'venue-viz',
      title: 'Venue Zone Visualisation',
      tagline: 'Interactive 2D schematic of event perimeter and choke points',
      description:
        'View monitored areas and identify zones that require attention. Visual layout helps safety teams locate bottlenecks across complex multi-level facilities.',
      icon: Map,
      operationalRole: 'Spatial Mapping & Topology',
      extendedSpecs: [
        'Interactive zone floorplan with real-time status coloration',
        'Direct drill-down into specific gate feeds and corridor bottlenecks',
        'Clear spatial orientation for multi-agency emergency coordination',
        'Visual indicators showing crowd flow vectors and ingress direction',
      ],
    },
    {
      id: 'incident-history',
      title: 'Incident History & Reports',
      tagline: 'Audit-ready crowd logs and post-event safety analytics',
      description:
        'Review previous alerts, response actions and crowd monitoring records. Generates structured post-event documentation for safety authorities and future planning.',
      icon: FileSpreadsheet,
      operationalRole: 'Compliance & Safety Auditing',
      extendedSpecs: [
        'Time-stamped archive of all warning and critical threshold events',
        'Documented team acknowledgement and response duration metrics',
        'Exportable CSV and PDF summary reports for event licensing bodies',
        'Trend charts identifying peak arrival surges across different hours',
      ],
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-28 bg-[#F5F8FC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#2563EB] mb-2">
            System Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#101C2C] text-balance">
            Everything You Need to Monitor Crowd Safety
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Engineered specifically for event safety directors, ground teams, and operations control centers. Every feature focuses on rapid situational awareness and actionable early intervention.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="bg-white rounded-xl p-7 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1.5">
                    {feature.operationalRole}
                  </div>

                  <h3 className="text-xl font-bold text-[#101C2C] mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedFeature(feature)}
                    className="text-xs font-bold text-[#2563EB] hover:text-blue-800 transition-colors inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  >
                    <span>View Technical Specifications</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Detail Modal */}
        {selectedFeature && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#101C2C]/80 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150">
              <button
                type="button"
                onClick={() => setSelectedFeature(null)}
                className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#2563EB] flex items-center justify-center">
                  <selectedFeature.icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    {selectedFeature.operationalRole}
                  </span>
                  <h3 className="text-xl font-bold text-[#101C2C]">
                    {selectedFeature.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                {selectedFeature.description}
              </p>

              <div className="space-y-3 mb-6 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Feature Architecture &amp; Implementation Details
                </div>
                <div className="space-y-2">
                  {selectedFeature.extendedSpecs.map((spec) => (
                    <div key={spec} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedFeature(null)}
                  className="px-5 py-2 text-xs font-semibold text-white bg-[#101C2C] hover:bg-[#172D46] rounded-lg transition-colors"
                >
                  Close Specification
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
