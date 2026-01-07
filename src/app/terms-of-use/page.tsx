import type { Metadata } from "next";

import { TermsOfUseHeader } from "@/components/terms-of-use/sections/TermsOfUseHeader";
import { AgreementSection } from "@/components/terms-of-use/sections/AgreementSection";
import { TableOfContents } from "@/components/terms-of-use/sections/TableOfContents";
import { ServicesSection } from "@/components/terms-of-use/sections/ServicesSection";
import { IntellectualPropertySection } from "@/components/terms-of-use/sections/IntellectualPropertySection";
import { UserRepresentationsSection } from "@/components/terms-of-use/sections/UserRepresentationsSection";
import { UserRegistrationSection } from "@/components/terms-of-use/sections/UserRegistrationSection";
import { PurchasesPaymentSection } from "@/components/terms-of-use/sections/PurchasesPaymentSection";
import { SubscriptionsSection } from "@/components/terms-of-use/sections/SubscriptionsSection";
import { SoftwareSection } from "@/components/terms-of-use/sections/SoftwareSection";
import { ProhibitedActivitiesSection } from "@/components/terms-of-use/sections/ProhibitedActivitiesSection";
import { UserGeneratedContributionsSection } from "@/components/terms-of-use/sections/UserGeneratedContributionsSection";
import { ContributionLicenseSection } from "@/components/terms-of-use/sections/ContributionLicenseSection";
import { MobileApplicationLicenseSection } from "@/components/terms-of-use/sections/MobileApplicationLicenseSection";
import { SocialMediaSection } from "@/components/terms-of-use/sections/SocialMediaSection";
import { ServicesManagementSection } from "@/components/terms-of-use/sections/ServicesManagementSection";
import { PrivacyPolicySection } from "@/components/terms-of-use/sections/PrivacyPolicySection";
import { DMCASection } from "@/components/terms-of-use/sections/DMCASection";
import { TermTerminationSection } from "@/components/terms-of-use/sections/TermTerminationSection";
import { ModificationsInterruptionsSection } from "@/components/terms-of-use/sections/ModificationsInterruptionsSection";
import { GoverningLawSection } from "@/components/terms-of-use/sections/GoverningLawSection";
import { DisputeResolutionSection } from "@/components/terms-of-use/sections/DisputeResolutionSection";
import { CorrectionsSection } from "@/components/terms-of-use/sections/CorrectionsSection";
import { DisclaimerSection } from "@/components/terms-of-use/sections/DisclaimerSection";
import { LimitationsLiabilitySection } from "@/components/terms-of-use/sections/LimitationsLiabilitySection";
import { IndemnificationSection } from "@/components/terms-of-use/sections/IndemnificationSection";
import { UserDataSection } from "@/components/terms-of-use/sections/UserDataSection";
import { ElectronicCommunicationsSection } from "@/components/terms-of-use/sections/ElectronicCommunicationsSection";
import { CaliforniaUsersSection } from "@/components/terms-of-use/sections/CaliforniaUsersSection";
import { MiscellaneousSection } from "@/components/terms-of-use/sections/MiscellaneousSection";
import { ContactSection } from "@/components/terms-of-use/sections/ContactSection";

export const metadata: Metadata = {
  title: "Terms of Use | Clamby",
  description:
    "Terms of Use for Clamby Inc. - Read our legal terms and conditions for using our services.",
};

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
        <TermsOfUseHeader />

        <AgreementSection />

        <TableOfContents />

        <ServicesSection />

        <IntellectualPropertySection />

        <UserRepresentationsSection />

        <UserRegistrationSection />

        <PurchasesPaymentSection />

        <SubscriptionsSection />

        <SoftwareSection />

        <ProhibitedActivitiesSection />

        <UserGeneratedContributionsSection />

        <ContributionLicenseSection />

        <MobileApplicationLicenseSection />

        <SocialMediaSection />

        <ServicesManagementSection />

        <PrivacyPolicySection />

        <DMCASection />

        <TermTerminationSection />

        <ModificationsInterruptionsSection />

        <GoverningLawSection />

        <DisputeResolutionSection />

        <CorrectionsSection />

        <DisclaimerSection />

        <LimitationsLiabilitySection />

        <IndemnificationSection />

        <UserDataSection />

        <ElectronicCommunicationsSection />

        <CaliforniaUsersSection />

        <MiscellaneousSection />

        <ContactSection />
      </div>
    </div>
  );
}
