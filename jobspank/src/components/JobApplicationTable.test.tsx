import JobApplicationTable from "./JobApplicationTable";
import { render, screen } from "@testing-library/react";

test("renders all table headers", () => {
  render(<JobApplicationTable />);
  const getHeader = (headerName: string) =>
    screen.getByRole("columnheader", { name: new RegExp(headerName, "i") });
  const headers = [
    "company",
    "position",
    "city",
    "pay",
    "status",
    "date applied",
    "notes",
  ];
  headers.forEach((header) => expect(getHeader(header)).toBeInTheDocument());
});
