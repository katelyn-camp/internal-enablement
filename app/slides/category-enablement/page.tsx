import { CategoryEnablementSlideDeck } from "../../components/curriculum/lessons/CategoryEnablementSlideDeck";
import { PageVisitTracker } from "../../components/shared/PageVisitTracker";

export default function CategoryEnablementSlidesPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-10 lg:px-8 lg:py-14">
      <PageVisitTracker id="category-enablement-slides" />
      <h1 className="font-display text-h1 lg:text-display mb-2 text-ink">AI Search Category Enablement</h1>
      <p className="mb-6 max-w-2xl text-sm leading-relaxed text-ink/70 lg:text-base">
        The full slide deck on its own, outside the Orientation module — use this link to jump straight to the deck
        or share it with someone who just needs the slides.
      </p>
      <CategoryEnablementSlideDeck />
    </div>
  );
}
