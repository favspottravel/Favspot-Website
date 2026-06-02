import React from "react";
import { activities } from "../../data/content";
import ActivitiesSection from "../activities/ActivitiesSection";

function Activities() {
  return <ActivitiesSection items={activities} />;
}

export default Activities;
