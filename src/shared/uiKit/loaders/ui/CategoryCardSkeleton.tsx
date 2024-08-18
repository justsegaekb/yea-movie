import ContentLoader from "react-content-loader";

export const CategoryCardSkeleton = ({ rtl = true }) => (
  <ContentLoader
    rtl={rtl}
    speed={2}
    width={163}
    height={145}
    viewBox="0 0 163 145"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <path d="M 0 39.106 c 0 -12.069 8.963 -22.26 20.933 -23.803 l 115 -14.816 C 150.287 -1.363 163 9.818 163 24.29 V 121 c 0 13.255 -10.745 24 -24 24 H 24 c -13.255 0 -24 -10.745 -24 -24 V 39.106 z" />
  </ContentLoader>
);

export default CategoryCardSkeleton;
