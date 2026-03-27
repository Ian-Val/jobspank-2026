import { JobApplicationTracker } from "./JobApplicationTracker";
import { JobApplication, StatusEnum } from "./JobApplication";
let testTracker: JobApplicationTracker;

beforeEach(() => {
  testTracker = new JobApplicationTracker();
});

describe("JobApplicationTracker class", () => {
  test("test object instantiation", () => {
    expect(testTracker).not.toBeUndefined();
  });
  test("test addding a single application", () => {
    const testApplication = new JobApplication(
      "JobSpank",
      "Business Development Representative",
      "West Haven, CT",
      "100k",
      StatusEnum.Applied,
      new Temporal.PlainDate(2003, 6, 22),
      "Job should be super easy lol",
    );
    testTracker.addJobApplication(testApplication);
    expect(testTracker.getLength()).toBe(1);
    expect(testTracker.getJobApplication(0)).toEqual(testApplication);
  });
  
});
