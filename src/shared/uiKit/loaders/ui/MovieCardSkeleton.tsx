import ContentLoader from "react-content-loader";

export const MovieCardSkeleton = () => (
  <ContentLoader
    speed={2}
    width={134}
    height={190}
    viewBox="0 0 134 190"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="26" ry="26" width="134" height="190" />
  </ContentLoader>
);
