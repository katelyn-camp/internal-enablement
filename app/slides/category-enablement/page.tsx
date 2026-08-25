import { CategoryEnablementSlideDeck } from "../../components/curriculum/lessons/CategoryEnablementSlideDeck";
import { PageVisitTracker } from "../../components/shared/PageVisitTracker";

export default function CategoryEnablementSlidesPage() {
  return (
    <>
      <PageVisitTracker id="category-enablement-slides" />
      <CategoryEnablementSlideDeck variant="standalone" />
    </>
  );
}
