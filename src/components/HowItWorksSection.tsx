/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import {
  Cctv,
  Cpu,
  Sliders,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Terminal
} from 'lucide-react';

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      number: '01',
      title: 'Monitor',
      action: 'Ingest Video Streams',
      description:
        'Receive crowd information from connected cameras or monitoring inputs. Feeds from gates, concourses, stages, and exits are organized into designated operational sectors.',
      icon: Cctv,
      pipelineDetail: 'RTSP/HLS streams ingested at configured frame-sampling rates. No high-resolution cloud storage required; processing operates locally/securely.',
      outputTelemetry: '12 synchronized video streams feeding spatial ingestion buffer',
    },
    {
      number: '02',
      title: 'Analyse',
      action: 'Estimate Spatial Density',
      description:
        'Estimate crowd density for each configured event zone. Spatial computer vision models map people distribution and determine actual people per square meter (ppl/m²).',
      icon: Cpu,
      pipelineDetail: 'Applies anonymized head/body occupancy detection. Does not capture facial biometric identifiers or private citizen credentials.',
      outputTelemetry: 'Density evaluated: Zone 04 = 4.6 ppl/m² | Zone 02 = 3.4 ppl/m²',
    },
    {
      number: '03',
      title: 'Detect',
      action: 'Evaluate Safety Thresholds',
      description:
        'Compare density values against configured safety thresholds. Automatically triggers color-coded status states (Green Safe, Orange Warning, Red Critical).',
      icon: Sliders,
      pipelineDetail: 'Checks mathematical slope of density surge. If density exceeds 4.0 ppl/m² or rises faster than 0.5 ppl/m² per minute, flags immediate alert condition.',
      outputTelemetry: 'Status triggered: CRITICAL_OVERCROWDING_RISK on Zone 04 West Gate',
    },
    {
      number: '04',
      title: 'Respond',
      action: 'Dispatch & Proactive Action',
      description:
        'Notify security personnel so they can investigate and take appropriate action. Control room supervisors and ground marshals receive clear instructions to redirect patron flow.',
      icon: ShieldCheck,
      pipelineDetail: 'Dispatches alert notification with precise physical zone coordinates, allowing stewards to open secondary exit barriers and safely disperse pressure.',
      outputTelemetry: 'Response action dispatched: Sector Marshal Delta acknowledged in 18s',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#101C2C] text-white border-b border-[#172D46]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
            Operational Lifecycle
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            From Detection to Action
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            How VISIO converts incoming camera video feeds into actionable crowd safety responses in 4 systematic steps.
          </p>
        </div>

        {/* 4 Interactive Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isCurrent = activeStep === index;
            return (
              <div
                key={step.title}
                onClick={() => setActiveStep(index)}
                className={`cursor-pointer rounded-xl p-6 transition-all border flex flex-col justify-between relative group ${
                  isCurrent
                    ? 'bg-[#172D46] border-[#2563EB] shadow-lg shadow-blue-900/30 ring-1 ring-blue-500'
                    : 'bg-[#101C2C] hover:bg-[#172D46]/60 border-slate-800'
                }`}
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={`font-mono text-sm font-bold ${
                        isCurrent ? 'text-blue-400' : 'text-slate-500'
                      }`}
                    >
                      STEP {step.number}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                        isCurrent
                          ? 'bg-[#2563EB] text-white shadow-md'
                          : 'bg-slate-800 text-slate-300 group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
                  <div className="text-xs font-semibold text-blue-400 mb-3 uppercase tracking-wider">
                    {step.action}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs font-medium">
                  <span className={isCurrent ? 'text-white' : 'text-slate-400'}>
                    {isCurrent ? 'Inspecting Step' : 'Click to preview'}
                  </span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 transition-transform ${
                      isCurrent ? 'translate-x-1 text-blue-400' : 'text-slate-500'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Pipeline Interactive Simulator Terminal */}
        <div className="mt-10 bg-[#172D46] border border-slate-700 rounded-2xl p-6 sm:p-7 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700/80 pb-4">
            <div className="flex items-center gap-2.5">
              <Terminal className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                Pipeline Stage 0{activeStep + 1}: {steps[activeStep].title} – {steps[activeStep].action}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-400">Step Cycle:</span>
              <div className="flex items-center gap-1">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`w-6 h-6 rounded text-[11px] font-mono font-bold flex items-center justify-center transition-colors ${
                      activeStep === i
                        ? 'bg-[#2563EB] text-white'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    0{i + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-3">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                System Processing Logic
              </div>
              <p className="text-sm text-slate-200 leading-relaxed">
                {steps[activeStep].pipelineDetail}
              </p>
              <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                Automated continuous execution loop
              </div>
            </div>

            <div className="bg-[#101C2C] p-4 rounded-xl border border-slate-700/80 font-mono text-xs space-y-2">
              <div className="text-[11px] text-slate-400 border-b border-slate-800 pb-1">
                Simulated Telemetry Output
              </div>
              <div className="text-blue-400 break-words">
                &gt; {steps[activeStep].outputTelemetry}
              </div>
              <div className="text-[10px] text-slate-500 pt-1">
                Latency: ~140ms · Status: OK · Mode: Simulation Demonstration
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
