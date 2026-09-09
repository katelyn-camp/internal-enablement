import { ComponentType } from "react";
import { Audience } from "@/lib/curriculum";
import { M0Orientation } from "./M0Orientation";
import { M1AISearchLandscape } from "./M1AISearchLandscape";
import { M2MeasurementBenchmarking } from "./M2MeasurementBenchmarking";
import { M3SeoFundamentalsSales } from "./M3SeoFundamentalsSales";
import { M3SeoFundamentalsManagedServices } from "./M3SeoFundamentalsManagedServices";
import { M4AeoFundamentalsManagedServices } from "./M4AeoFundamentalsManagedServices";
import { M4AeoFundamentalsSales } from "./M4AeoFundamentalsSales";
import { M5ReadingTheNumbers } from "./M5ReadingTheNumbers";
import { M5ReadingTheNumbersSales } from "./M5ReadingTheNumbersSales";
import { M6ContentStrategyLifecycle } from "./M6ContentStrategyLifecycle";
import { M6ContentStrategyLifecycleSales } from "./M6ContentStrategyLifecycleSales";
import { M7AttributionRoi } from "./M7AttributionRoi";
import { M7AttributionRoiSales } from "./M7AttributionRoiSales";
import { M8ManualAuditMethodology } from "./M8ManualAuditMethodology";
import { M9PromptTaxonomyStrategy } from "./M9PromptTaxonomyStrategy";
import { M10CompetitivePositioningComparisonDiagnostics } from "./M10CompetitivePositioningComparisonDiagnostics";
import { M11ExternalContentPlacementExecution } from "./M11ExternalContentPlacementExecution";
import { S4CompetitiveLandscape } from "./S4CompetitiveLandscape";
import { AirOpsResearchDigest } from "@/app/components/research-digest/AirOpsResearchDigest";

/**
 * Real, written lesson bodies, keyed by "audience:slug", looked up from
 * ModuleDetailView in place of the generic "Full write-up: content
 * pending" block once a module actually has one. Each module's content
 * is bespoke (tables, prose, whatever fits), so this is a plain registry
 * rather than a shared content schema.
 */
export const lessonComponents: Record<string, ComponentType<{ audience?: Audience }>> = {
  "em-sa:m0": M0Orientation,
  "sales:m0": M0Orientation,
  "em-sa:m1": M1AISearchLandscape,
  "sales:m1": M1AISearchLandscape,
  "em-sa:m2": M2MeasurementBenchmarking,
  "sales:m2": M2MeasurementBenchmarking,
  "em-sa:m3": M3SeoFundamentalsManagedServices,
  "sales:m3": M3SeoFundamentalsSales,
  "em-sa:m4": M4AeoFundamentalsManagedServices,
  "sales:m4": M4AeoFundamentalsSales,
  "em-sa:m5": M5ReadingTheNumbers,
  "sales:m5": M5ReadingTheNumbersSales,
  "em-sa:m6": M6ContentStrategyLifecycle,
  "sales:m6": M6ContentStrategyLifecycleSales,
  "em-sa:m7": M7AttributionRoi,
  "sales:m7": M7AttributionRoiSales,
  "em-sa:m8": M8ManualAuditMethodology,
  "sales:m8": AirOpsResearchDigest,
  "em-sa:m9": M9PromptTaxonomyStrategy,
  "em-sa:m10": M10CompetitivePositioningComparisonDiagnostics,
  "em-sa:m11": M11ExternalContentPlacementExecution,
  "sales:s4": S4CompetitiveLandscape,
};
