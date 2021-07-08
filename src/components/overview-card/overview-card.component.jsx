import React from "react";
import Typography from "@material-ui/core/Typography";

export default function OverviewCard({ type, value }) {
  return (
    <div>
      <Typography component="p" variant="body2" color="textSecondary">
        {type}
      </Typography>
      <Typography component="p" variant="h4">
        {value}
      </Typography>
    </div>
  );
}
