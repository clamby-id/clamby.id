import type { Metadata } from "next";

import { PrivacyPolicyHeader } from "@/components/privacy-policy/sections/PrivacyPolicyHeader";
import { SummarySection } from "@/components/privacy-policy/sections/SummarySection";
import { TableOfContents } from "@/components/privacy-policy/sections/TableOfContents";
import { InformationCollectionSection } from "@/components/privacy-policy/sections/InformationCollectionSection";
import { InformationProcessingSection } from "@/components/privacy-policy/sections/InformationProcessingSection";
import { LegalBasesSection } from "@/components/privacy-policy/sections/LegalBasesSection";
import { InformationSharingSection } from "@/components/privacy-policy/sections/InformationSharingSection";
import { AISection } from "@/components/privacy-policy/sections/AISection";
import { SocialLoginsSection } from "@/components/privacy-policy/sections/SocialLoginsSection";
import { InformationRetentionSection } from "@/components/privacy-policy/sections/InformationRetentionSection";
import { InformationSafetySection } from "@/components/privacy-policy/sections/InformationSafetySection";
import { MinorsSection } from "@/components/privacy-policy/sections/MinorsSection";
import { PrivacyRightsSection } from "@/components/privacy-policy/sections/PrivacyRightsSection";
import { DoNotTrackSection } from "@/components/privacy-policy/sections/DoNotTrackSection";
import { USResidentsSection } from "@/components/privacy-policy/sections/USResidentsSection";
import { OtherRegionsSection } from "@/components/privacy-policy/sections/OtherRegionsSection";
import { PolicyUpdatesSection } from "@/components/privacy-policy/sections/PolicyUpdatesSection";
import { ContactSection } from "@/components/privacy-policy/sections/ContactSection";
import { ReviewUpdateDeleteSection } from "@/components/privacy-policy/sections/ReviewUpdateDeleteSection";

export const metadata: Metadata = {
  title: "Privacy Policy | Clamby",
  description:
    "Privacy Policy for Clamby Inc. - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
        <PrivacyPolicyHeader />

        <SummarySection />

        <TableOfContents />

        <InformationCollectionSection />

        <InformationProcessingSection />

        <LegalBasesSection />

        <InformationSharingSection />

        <AISection />

        <SocialLoginsSection />

        <InformationRetentionSection />

        <InformationSafetySection />

        <MinorsSection />

        <PrivacyRightsSection />

        <DoNotTrackSection />

        <USResidentsSection />

        <OtherRegionsSection />

        <PolicyUpdatesSection />

        <ContactSection />

        <ReviewUpdateDeleteSection />
      </div>
    </div>
  );
}
