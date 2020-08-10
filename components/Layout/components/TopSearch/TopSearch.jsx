import React from "react";

export default function TopSearch() {
  return (
    <div class="top-search">
      <div class="container">
        <div class="input-group">
          <span className="input-group-addon">
            <i class="fa fa-search"></i>
          </span>
          <input type="text" class="form-control" placeholder="Search" />
          <span class="input-group-addon close-search">
            <i class="fa fa-times"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
