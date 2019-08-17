import React from "react";

export default function LocationCard({ name, type, dimension, residents }) {
  return (<Card
    header={name}
    description={`${type} - ${dimension}`}
    extra={<Label className="bottom right attached">{residents && residents.length} residents</Label>}
  />
  )
}
