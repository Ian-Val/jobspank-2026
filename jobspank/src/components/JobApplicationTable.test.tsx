import { JobApplication, StatusEnum } from "@/models/JobApplication";
import JobApplicationTable from "./JobApplicationTable";
import { render, screen } from "@testing-library/react";
import { JobApplicationTracker } from "@/models/JobApplicationTracker";

describe("Job Application Table React Component", () => {
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
  test("renders a single job application", () => {
    const testApp = new JobApplication(
      "JobSpank",
      "Business Development Representative",
      "West Haven, CT",
      "100k",
      StatusEnum.Applied,
      new Temporal.PlainDate(2003, 6, 22),
      "Job should be super easy lol",
    );
    const testTracker = new JobApplicationTracker();
    testTracker.addJobApplication(testApp);
    render(<JobApplicationTable data={testTracker} />);
    expect(screen.getByText(testApp.company)).toBeInTheDocument();
    expect(screen.getByText(testApp.position)).toBeInTheDocument();
    expect(screen.getByText(testApp.city)).toBeInTheDocument();
    expect(screen.getByText(testApp.pay)).toBeInTheDocument();
    expect(screen.getByText(testApp.status)).toBeInTheDocument();
    expect(screen.getByText(testApp.dateAppliedString)).toBeInTheDocument();
  });
  test("renders multiple job applications", () => {
    const testApps = [
      new JobApplication(
        "JobSpank",
        "Business Development Representative",
        "West Haven, CT",
        "100k",
        StatusEnum.Applied,
        new Temporal.PlainDate(2003, 6, 22),
        "Job should be super easy lol",
      ),
      new JobApplication(
        "SocialSpark",
        "Graphic Designer",
        "Austin, TX",
        "101k",
        StatusEnum.Rejected,
        new Temporal.PlainDate(2004, 6, 22),
        "Lets connect baby",
      ),
    ];
    const testTracker = new JobApplicationTracker();
    testTracker.addJobApplication(testApps[0]);
    testTracker.addJobApplication(testApps[1]);
    render(<JobApplicationTable data={testTracker} />);
    expect(screen.getByText(testApps[0].company)).toBeInTheDocument();
    expect(screen.getByText(testApps[0].position)).toBeInTheDocument();
    expect(screen.getByText(testApps[0].city)).toBeInTheDocument();
    expect(screen.getByText(testApps[0].pay)).toBeInTheDocument();
    expect(screen.getByText(testApps[0].status)).toBeInTheDocument();
    expect(screen.getByText(testApps[0].dateAppliedString)).toBeInTheDocument();
    expect(screen.getByText(testApps[1].company)).toBeInTheDocument();
    expect(screen.getByText(testApps[1].position)).toBeInTheDocument();
    expect(screen.getByText(testApps[1].city)).toBeInTheDocument();
    expect(screen.getByText(testApps[1].pay)).toBeInTheDocument();
    expect(screen.getByText(testApps[1].status)).toBeInTheDocument();
    expect(screen.getByText(testApps[1].dateAppliedString)).toBeInTheDocument();
  });
});
