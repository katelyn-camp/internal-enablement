import { ComponentType } from "react";
import { M0Orientation } from "./M0Orientation";
import { M1AISearchLandscape } from "./M1AISearchLandscape";

/**
 * Real, written lesson bodies, keyed by "audience:slug", looked up from
 * ModuleDetailView in place of the generic "Full write-up: content
 * pending" block once a module actually has one. Each module's content
 * is bespoke (tables, prose, whatever fits), so this is a plain registry
 * rather than a shared content schema.
 */
export const lessonComponents: Record<string, ComponentType> = {
  "em-sa:m0": M0Orientation,
  "em-sa:m1": M1AISearchLandscape,
  "sales:m1": M1AISearchLandscape,
};
