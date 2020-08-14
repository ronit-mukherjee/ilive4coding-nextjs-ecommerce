import React from "react";
import Skeleton from "react-loading-skeleton";

export default function OurTeamLoader() {
  return (
    <div className="row my-4">
      <div className="col-12">
        <Skeleton width={200} height={30} />
      </div>
      {[1, 2, 3, 4].map(() => (
        <div className="col-sm-6 col-lg-3">
          <Skeleton height={300} />
        </div>
      ))}
    </div>
  );
}
