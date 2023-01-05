import TableData from "../data/TableData.json";
import { DayRange, DayRangeModel } from "../models/dayRangeModel";
import { TableModel } from "../models/tableModel";

export const tableData: TableModel[] = TableData;

export const dayRangeData: DayRangeModel[] = [
  { id: "1", dayRange: DayRange.Seven, displayName: "7 Days" },
  { id: "2", dayRange: DayRange.Thirty, displayName: "30 Days" },
  { id: "3", dayRange: DayRange.Sixty, displayName: "60 Days" },
];
