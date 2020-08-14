import React from "react";
import TeamMember from "./components/TeamMember/TeamMember";

export default function OurTeam({ teamMembers = [] }) {
  return (
    <div className="row my-4">
      <div className="col-12">
        <h2 className="noo-sh-title">Meet Our Team</h2>
      </div>
      {teamMembers.map((memberDetails, index) => (
        <div className="col-sm-6 col-lg-3" key={index}>
          <TeamMember {...memberDetails} />
        </div>
      ))}
    </div>
  );
}
