import { ComponentType } from "react";
import { Skeleton } from "../uiKit/skeleton";

interface Props {
  isLoading: boolean;
  type?: "category" | "movie" | "actor" | "undefined";
}

function withSkeleton<P extends object>(
  Component: ComponentType<P>,
  type: "category" | "movie" | "actor" | undefined,
  count?: number | undefined,
  isLoading?: boolean,
) {
  return function WithSkeleton(props: Props & P) {
    const { isLoading, type, ...restProps } = props;
    console.log(isLoading);

    if (isLoading) {
      return <Skeleton type={type} count={count} />;
    }
    return <Component {...(restProps as P)} />;
  };
}

export default withSkeleton;
