import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export const ProductLoadingSkeleton = () => {
  return (
    <SkeletonTheme>
      <div className="pb-2  grid grid-cols-4">
        <div
          className="w-[18vw] relative rounded-xl px-1 pt-2 shadow-md
              group overflow-hidden"
        >
          <div className="w-full aspect-w-14 aspect-h-12">
            <Skeleton
              width="100%"
              height="100%"
              className="rounded-xl"
              style={{ margin: 0 }}
            />
          </div>
          <div className="mt-5 p-2 flex justify-between items-center">
            <div>
              <Skeleton width={50} height={15} />
            </div>
            <div>
              <Skeleton width={70} height={15} />
            </div>
          </div>
          <div className="w-full">
            <Skeleton width="100%" />
            <Skeleton width="100%" />
          </div>

          <div className="mt-5 p-2 flex justify-between items-center">
            <div>
              <Skeleton width={60} height={20} />
            </div>
            <div>
              <Skeleton width={43} height={43} />
            </div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};
