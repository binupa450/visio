/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import {
  Activity,
  AlertTriangle,
  Camera,
  CheckCircle,
  Clock,
  Filter,
  Layers,
  MapPin,
  RefreshCw,
  TrendingUp,
  Users,
  ShieldAlert,
  Info,
  Check
} from 'lucide-react';

interface ZoneData {
  id: string;
  name: string;
  location: string;
  density: number; // people per m²
  capacityPercent: number;
  peopleCount: number;
  status: 'safe' | 'warning' | 'critical';
  threshold: number;
  cameraFeed: string;
  trend: 'rising' | 'stable' | 'decreasing';
  alertNote?: string;
}

export default function DashboardPreviewSection() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'safe' | 'warning' | 'critical'>('all');
  const [acknowledgedAlerts, setAcknowledgedAlerts] = useState<string[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<string>('Grand Arena Cup Final');

  const initialZones: ZoneData[] = [
    {
      id: 'Z-01',
      name: 'North Gate Turnstiles',
      location: 'Ground Level · Sectors A1-A4',
      density: 1.4,
      capacityPercent: 42,
      peopleCount: 1420,
      status: 'safe',
      threshold: 2.5,
      cameraFeed: 'CAM-01 (Turnstiles North)',
      trend: 'stable',
    },
    {
      id: 'Z-02',
      name: 'Concourse West Bottleneck',
      location: 'Level 1 Corridor · Near Gate B Egress',
      density: 4.5,
      capacityPercent: 94,
      peopleCount: 3890,
      status: 'critical',
      threshold: 4.0,
      cameraFeed: 'CAM-04 (Corridor West)',
      trend: 'rising',
      alertNote: 'Egress bottleneck detected. Crowd density exceeds 4.0 ppl/m² safe threshold.',
    },
    {
      id: 'Z-03',
      name: 'Main Stage Floor & Pit',
      location: 'Central Arena Floor',
      density: 3.6,
      capacityPercent: 78,
      peopleCount: 4650,
      status: 'warning',
      threshold: 3.8,
      cameraFeed: 'CAM-07 (Overhead Arena)',
      trend: 'rising',
      alertNote: 'Approaching critical limit ahead of halftime performance.',
    },
    {
      id: 'Z-04',
      name: 'South Plaza Food & Merch Court',
      location: 'External Pavilion · Courtyard South',
      density: 1.8,
      capacityPercent: 51,
      peopleCount: 2150,
      status: 'safe',
      threshold: 2.5,
      cameraFeed: 'CAM-09 (South Courtyard)',
      trend: 'stable',
    },
    {
      id: 'Z-05',
      name: 'East Emergency Egress Corridor',
      location: 'East Wing · Stairwell 3 & 4',
      density: 0.6,
      capacityPercent: 15,
      peopleCount: 280,
      status: 'safe',
      threshold: 2.0,
      cameraFeed: 'CAM-11 (East Egress 3)',
      trend: 'decreasing',
    },
    {
      id: 'Z-06',
      name: 'Upper Tier Concourse Escalators',
      location: 'Level 2 Upper Deck',
      density: 3.2,
      capacityPercent: 74,
      peopleCount: 2430,
      status: 'warning',
      threshold: 3.5,
      cameraFeed: 'CAM-12 (Escalator Bank B)',
      trend: 'rising',
      alertNote: 'Escalator landing accumulation detected during seat ingress.',
    },
  ];

  const filteredZones = initialZones.filter((zone) => {
    if (activeFilter === 'all') return true;
    return zone.status === activeFilter;
  });

  const handleAcknowledge = (alertId: string) => {
    if (!acknowledgedAlerts.includes(alertId)) {
      setAcknowledgedAlerts([...acknowledgedAlerts, alertId]);
    }
  };

  const getStatusBadge = (status: 'safe' | 'warning' | 'critical') => {
    switch (status) {
      case 'safe':
        return (
          <span className="text-xs font-semibold text-[#16A34A] flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#16A34A]"></span>
            Safe Flow
          </span>
        );
      case 'warning':
        return (
          <span className="text-xs font-semibold text-[#F59E0B] flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#F59E0B]"></span>
            Warning Level
          </span>
        );
      case 'critical':
        return (
          <span className="text-xs font-semibold text-[#DC2626] flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
            Critical Hazard
          </span>
        );
    }
  };

  return (
    <section id="dashboard" className="py-20 lg:py-28 bg-[#F5F8FC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-[#2563EB] mb-2">
            Interactive Operational Preview
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#101C2C] text-balance">
            Your Event. Every Zone. One View.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Experience the VISIO operations console. Designed for zero-clutter situational awareness, immediate density recognition, and rapid security dispatch coordination.
          </p>
        </div>

        {/* Demo Disclaimer Watermark Banner */}
        <div className="mb-6 p-4 rounded-xl bg-blue-50/80 border border-blue-200 flex flex-wrap items-center justify-between gap-3 text-xs text-blue-900">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-[#2563EB] shrink-0" />
            <span>
              <strong>Demonstration Environment:</strong> Simulated data based on venue safety models. No real live CCTV video feeds or biometric tracking are deployed.
            </span>
          </div>
          <div className="font-mono text-[11px] text-blue-700 font-semibold">
            STATUS: DEMO_ACTIVE
          </div>
        </div>

        {/* Comprehensive Dashboard Frame */}
        <div className="bg-[#101C2C] rounded-2xl border border-slate-800 shadow-2xl overflow-hidden text-white">
          {/* Dashboard Control Bar */}
          <div className="p-4 sm:p-6 bg-[#172D46] border-b border-slate-700/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <div>
                <label className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                  Active Simulation Scenario
                </label>
                <select
                  value={selectedEvent}
                  onChange={(e) => setSelectedEvent(e.target.value)}
                  className="bg-[#101C2C] text-white text-xs font-semibold px-3 py-2 rounded-lg border border-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <option value="Grand Arena Cup Final">Grand Arena Cup Final (35,000 Capacity)</option>
                  <option value="Riverside Summer Festival">Riverside Summer Festival (22,000 Capacity)</option>
                  <option value="Metro Transit Hub Rush Hour">Metro Transit Hub Rush Hour (18,000 Capacity)</option>
                </select>
              </div>

              {/* Status summary numbers */}
              <div className="hidden sm:flex items-center gap-4 pl-4 border-l border-slate-700 text-xs">
                <div>
                  <div className="text-slate-400">Total Count</div>
                  <div className="font-mono font-bold text-white tabular-nums text-sm">14,820</div>
                </div>
                <div>
                  <div className="text-slate-400">Active Cameras</div>
                  <div className="font-mono font-bold text-blue-400 tabular-nums text-sm">12 / 12</div>
                </div>
                <div>
                  <div className="text-slate-400">Avg Density</div>
                  <div className="font-mono font-bold text-white tabular-nums text-sm">2.4 ppl/m²</div>
                </div>
              </div>
            </div>

            {/* Zone Filter Buttons */}
            <div className="flex items-center gap-1.5 p-1 bg-[#101C2C] rounded-lg border border-slate-700/70 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  activeFilter === 'all'
                    ? 'bg-[#2563EB] text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                All Zones (6)
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('critical')}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  activeFilter === 'critical'
                    ? 'bg-[#DC2626] text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Critical (1)
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('warning')}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  activeFilter === 'warning'
                    ? 'bg-[#F59E0B] text-slate-900'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Warning (2)
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('safe')}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  activeFilter === 'safe'
                    ? 'bg-[#16A34A] text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Safe (3)
              </button>
            </div>
          </div>

          {/* Main Dashboard Body */}
          <div className="p-4 sm:p-6 space-y-6">
            {/* Zone Density Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredZones.map((zone) => {
                const isCritical = zone.status === 'critical';
                const isWarning = zone.status === 'warning';
                const isSafe = zone.status === 'safe';

                return (
                  <div
                    key={zone.id}
                    className={`rounded-xl p-5 border transition-all ${
                      isCritical
                        ? 'bg-red-950/20 border-red-500/50 shadow-md shadow-red-950/20'
                        : isWarning
                        ? 'bg-amber-950/20 border-amber-500/40'
                        : 'bg-[#172D46] border-slate-700/70'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[11px] font-bold text-slate-400">
                            {zone.id}
                          </span>
                          <span className="text-slate-500">·</span>
                          <span className="text-[11px] text-slate-400 font-mono">
                            {zone.cameraFeed}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-white mt-0.5">
                          {zone.name}
                        </h4>
                        <div className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          <span>{zone.location}</span>
                        </div>
                      </div>
                      <div>{getStatusBadge(zone.status)}</div>
                    </div>

                    {/* Density Meter Gauge */}
                    <div className="my-4 p-3 bg-[#101C2C] rounded-lg border border-slate-800 space-y-2">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-slate-400">Estimated Density:</span>
                        <div className="text-right">
                          <span
                            className={`font-mono text-xl font-bold tabular-nums ${
                              isCritical
                                ? 'text-[#DC2626]'
                                : isWarning
                                ? 'text-[#F59E0B]'
                                : 'text-[#16A34A]'
                            }`}
                          >
                            {zone.density.toFixed(1)} ppl/m²
                          </span>
                          <span className="text-[10px] text-slate-400 block">
                            Safety Threshold: {zone.threshold.toFixed(1)} ppl/m²
                          </span>
                        </div>
                      </div>

                      {/* Progress Bar with safety marker */}
                      <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden relative">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            isCritical
                              ? 'bg-[#DC2626]'
                              : isWarning
                              ? 'bg-[#F59E0B]'
                              : 'bg-[#16A34A]'
                          }`}
                          style={{
                            width: `${Math.min(100, (zone.density / 5.0) * 100)}%`,
                          }}
                        />
                      </div>
                      <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                        <span>0.0 (Free)</span>
                        <span>2.5 (Threshold)</span>
                        <span>5.0+ (Hazard)</span>
                      </div>
                    </div>

                    {/* Zone Quick Metrics */}
                    <div className="grid grid-cols-2 gap-2 text-xs border-t border-slate-800/80 pt-3">
                      <div>
                        <span className="text-slate-400 text-[11px]">Est. People:</span>
                        <div className="font-mono font-semibold text-slate-200 tabular-nums">
                          {zone.peopleCount.toLocaleString()}
                        </div>
                      </div>
                      <div>
                        <span className="text-slate-400 text-[11px]">Capacity Used:</span>
                        <div className="font-mono font-semibold text-slate-200 tabular-nums">
                          {zone.capacityPercent}%
                        </div>
                      </div>
                    </div>

                    {/* Alert Banner if warning or critical */}
                    {zone.alertNote && (
                      <div className="mt-3 p-2.5 rounded bg-[#101C2C] border border-slate-800 text-[11px] text-slate-300">
                        <div className="font-semibold text-amber-400 flex items-center gap-1 mb-0.5">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                          <span>Advisory Notice</span>
                        </div>
                        {zone.alertNote}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom Panel: Camera Matrix + Real-time Alert & Trend Dispatch */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
              {/* Left Column: Camera Matrix Grid */}
              <div className="lg:col-span-5 bg-[#172D46] rounded-xl p-5 border border-slate-700/80 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                  <div className="flex items-center gap-2">
                    <Camera className="w-4 h-4 text-blue-400" />
                    <h4 className="text-sm font-bold text-white">
                      Camera Health &amp; Ingestion Grid
                    </h4>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400">
                    6 / 6 FEEDS ONLINE
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  {[
                    { id: 'CAM-01', name: 'North Turnstiles', status: 'Online', fps: '30 FPS', latency: '42ms' },
                    { id: 'CAM-04', name: 'West Concourse Bottleneck', status: 'Online', fps: '30 FPS', latency: '38ms' },
                    { id: 'CAM-07', name: 'Arena Central Floor', status: 'Online', fps: '30 FPS', latency: '45ms' },
                    { id: 'CAM-09', name: 'South Food Pavilion', status: 'Online', fps: '25 FPS', latency: '50ms' },
                    { id: 'CAM-11', name: 'East Egress Corridor', status: 'Online', fps: '30 FPS', latency: '41ms' },
                    { id: 'CAM-12', name: 'Upper Escalator Landing', status: 'Online', fps: '30 FPS', latency: '48ms' },
                  ].map((cam) => (
                    <div
                      key={cam.id}
                      className="p-2.5 bg-[#101C2C] rounded-lg border border-slate-800 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#16A34A]"></span>
                        <div>
                          <span className="font-mono font-bold text-white">{cam.id}</span>
                          <span className="text-slate-400 ml-2">{cam.name}</span>
                        </div>
                      </div>
                      <div className="font-mono text-[11px] text-slate-400">
                        {cam.fps} · {cam.latency}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Live Alert Dispatch Log with Interactive Actions */}
              <div className="lg:col-span-7 bg-[#172D46] rounded-xl p-5 border border-slate-700/80 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                  <div className="flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-[#DC2626]" />
                    <h4 className="text-sm font-bold text-white">
                      Active Alert Dispatch &amp; History
                    </h4>
                  </div>
                  <span className="text-[11px] text-slate-400">
                    Live Incident Queue
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      id: 'ALT-104',
                      severity: 'critical',
                      zone: 'Zone 02 · Concourse West Bottleneck',
                      message: 'Density exceeded 4.2 ppl/m². Involuntary deceleration observed at Gate B.',
                      time: '14:22:10 (3m ago)',
                      actionHint: 'Deploy Sector Marshals to hold ingress and activate Gate C bypass.',
                    },
                    {
                      id: 'ALT-103',
                      severity: 'warning',
                      zone: 'Zone 03 · Main Stage Floor',
                      message: 'Crowd rate-of-rise reached +0.6 ppl/m² per minute before headliner set.',
                      time: '14:15:44 (9m ago)',
                      actionHint: 'Instruct stage barrier team to inspect center release pen.',
                    },
                    {
                      id: 'ALT-102',
                      severity: 'resolved',
                      zone: 'Zone 06 · Upper Tier Escalators',
                      message: 'Patron surge cleared following escalator pacing protocol.',
                      time: '13:58:02 (27m ago)',
                      actionHint: 'Status returned to Green (< 2.5 ppl/m²).',
                    },
                  ].map((alert) => {
                    const isAcked = acknowledgedAlerts.includes(alert.id);
                    return (
                      <div
                        key={alert.id}
                        className={`p-3.5 rounded-lg border text-xs space-y-2 ${
                          alert.severity === 'critical'
                            ? 'bg-red-950/20 border-red-500/40'
                            : alert.severity === 'warning'
                            ? 'bg-amber-950/20 border-amber-500/30'
                            : 'bg-[#101C2C] border-slate-800'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="space-y-0.5">
                            <div className="flex items-center gap-2">
                              <span className="font-mono font-bold text-white">{alert.id}</span>
                              <span className="text-slate-500">·</span>
                              <span className="font-semibold text-slate-200">{alert.zone}</span>
                            </div>
                            <div className="text-slate-400 text-[11px]">{alert.time}</div>
                          </div>

                          {/* Action Button */}
                          {alert.severity !== 'resolved' && (
                            <button
                              type="button"
                              onClick={() => handleAcknowledge(alert.id)}
                              disabled={isAcked}
                              className={`px-3 py-1.5 rounded text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                                isAcked
                                  ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40 cursor-default'
                                  : 'bg-white text-slate-900 hover:bg-slate-200'
                              }`}
                            >
                              {isAcked ? (
                                <>
                                  <Check className="w-3.5 h-3.5 text-[#16A34A]" />
                                  <span>Acknowledged</span>
                                </>
                              ) : (
                                <span>Acknowledge &amp; Dispatch</span>
                              )}
                            </button>
                          )}
                        </div>

                        <p className="text-slate-200 leading-relaxed">{alert.message}</p>
                        <div className="text-[11px] text-blue-300 font-medium">
                          SOP: {alert.actionHint}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
