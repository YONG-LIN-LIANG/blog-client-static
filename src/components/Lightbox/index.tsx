import { withLightbox } from "./withLightbox";
// import WarningBox from "./warningBox"
import MainBox from "./MainBox";
export const MainDialog = withLightbox(MainBox, { type: "main" });

// export const AbilityDialog = withLightbox(AbilityBox, {type: "ability"})

// export const QuickExploreDialog = withLightbox(QuickExploreBox, {type: "quickExplore"})
