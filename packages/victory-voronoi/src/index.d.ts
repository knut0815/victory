import * as React from "react";
import {
  EventPropTypeInterface,
  StringOrNumberOrCallback,
  VictoryCommonProps,
  VictoryDatableProps,
  VictoryLabelableProps,
  VictoryMultiLabelableProps,
  VictoryStyleInterface
} from "victory-core";

export interface VictoryVoronoiProps
  extends VictoryCommonProps,
    VictoryDatableProps,
    VictoryLabelableProps,
    VictoryMultiLabelableProps {
  events?: EventPropTypeInterface<string, string | number | (string | number)[]>[];
  type?: number;
  sortKey?: StringOrNumberOrCallback | string[];
  sortOrder?: "ascending" | "descending";
  size?: number | { (data: any): number };
  style?: VictoryStyleInterface;
  polar?: boolean;
}

export class VictoryVoronoi extends React.Component<VictoryVoronoiProps, any> {}
