import { KnowledgeCheckQuestion, M1_KNOWLEDGE_CHECK, M2_KNOWLEDGE_CHECK } from "./lessons/knowledge-check-data";

/** Modules with a real knowledge check built, keyed by "audience:slug" like lessonComponents. */
export const knowledgeChecks: Record<string, KnowledgeCheckQuestion[]> = {
  "em-sa:m1": M1_KNOWLEDGE_CHECK,
  "sales:m1": M1_KNOWLEDGE_CHECK,
  "em-sa:m2": M2_KNOWLEDGE_CHECK,
  "sales:m2": M2_KNOWLEDGE_CHECK,
};
