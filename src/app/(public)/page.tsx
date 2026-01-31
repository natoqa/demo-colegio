import { HeroSection, LevelsSection, InfrastructureSection, StatsSection, ActivitiesSection, AdmissionCTASection } from '@/features/home/components';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Levels Section */}
      <LevelsSection />

      {/* Infrastructure Section */}
      <InfrastructureSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Activities Section */}
      <ActivitiesSection />

      {/* Admission CTA Section */}
      <AdmissionCTASection />
    </div>
  );
}
