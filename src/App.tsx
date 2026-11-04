/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import DashboardPreviewSection from './components/DashboardPreviewSection';
import WhoWeServeSection from './components/WhoWeServeSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F8FC] text-[#101C2C] selection:bg-[#2563EB] selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Section 4: Hero Section */}
        <Hero />

        {/* Section 5: Problem Section */}
        <ProblemSection />

        {/* Section 6: Solution Section */}
        <SolutionSection />

        {/* Section 7: Features Section */}
        <FeaturesSection />

        {/* Section 8: How It Works Section */}
        <HowItWorksSection />

        {/* Section 9: Dashboard Preview Section */}
        <DashboardPreviewSection />

        {/* Section 10: Who We Serve Section */}
        <WhoWeServeSection />

        {/* Section 11: Our Team Section */}
        <TeamSection />

        {/* Section 12: Contact Section */}
        <ContactSection />
      </main>

      {/* Section 13: Footer */}
      <Footer />
    </div>
  );
}
