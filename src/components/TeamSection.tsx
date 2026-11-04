/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Linkedin, Github, Mail } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 'TEAM-01',
    name: 'Binupa',
    role: 'Project Manager',
    bio: 'Coordinates the project, plans tasks and resources, and keeps the team focused on delivering the project on time.',
  },
  {
    id: 'TEAM-02',
    name: 'Nethis',
    role: 'Scrum Master',
    bio: 'Facilitates team collaboration, supports Scrum practices, and helps the team identify and resolve blockers.',
  },
  {
    id: 'TEAM-03',
    name: 'Vithum',
    role: 'Front End Developer',
    bio: 'Develops the user interface and builds responsive, accessible, and user-friendly website experiences.',
  },
  {
    id: 'TEAM-04',
    name: 'Sanula',
    role: 'Technical Leader',
    bio: 'Guides technical decisions, oversees the system architecture, and helps maintain code quality across the project.',
  },
  {
    id: 'TEAM-05',
    name: 'Rimaz',
    role: 'Back End Developer',
    bio: 'Develops server-side functionality, handles application logic, and works with the project data systems.',
  },
  {
    id: 'TEAM-06',
    name: 'Ramika',
    role: 'QA (Quality Assurance)',
    bio: 'Tests the application, identifies defects, and checks that features work as expected before release.',
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-20 lg:py-28 bg-[#F5F8FC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-[#2563EB] mb-2">
            Student Software Project
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#101C2C] text-balance">
            Meet the Team Behind VISIO
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Meet the team responsible for designing, developing, and testing the VISIO platform.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {teamMembers.map((member) => (
            <article
              key={member.id}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative mb-5 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden bg-black border border-slate-200 shadow-sm">
                    <img
                      src="/assets/visio-logo.png"
                      alt="VISIO logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-bold text-[#101C2C] leading-snug">
                    {member.name}
                  </h3>
                  <div className="text-sm font-semibold text-[#2563EB] mt-2">
                    {member.role}
                  </div>
                </div>

                <p className="mt-4 text-sm text-slate-600 leading-relaxed text-center">
                  {member.bio}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-3 text-slate-400">
                <a href="#contact" className="p-2 rounded-lg bg-slate-50 hover:bg-slate-100 hover:text-slate-700 transition-colors" aria-label={`${member.name} LinkedIn profile`}>
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#contact" className="p-2 rounded-lg bg-slate-50 hover:bg-slate-100 hover:text-slate-700 transition-colors" aria-label={`${member.name} GitHub profile`}>
                  <Github className="w-4 h-4" />
                </a>
                <a href="#contact" className="p-2 rounded-lg bg-slate-50 hover:bg-slate-100 hover:text-slate-700 transition-colors" aria-label={`Contact ${member.name}`}>
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
