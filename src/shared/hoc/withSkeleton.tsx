import { ComponentType } from "react";
import { Skeleton } from "../uiKit/skeleton";

interface Props {
  isLoading: boolean;
  type?: "category" | "movie" | "actor";
}

const withSkeleton = <P extends object>(
  Component: ComponentType<P>,
  type: "category" | "movie" | "actor",
  count: number,
) => {
  return function WithSkeleton(props: Props & P) {
    const { isLoading } = props;
    if (isLoading) {
      return <Skeleton type={type} count={count} />;
    }
    return <Component {...(props as P)} />;
  };
};

export default withSkeleton;
