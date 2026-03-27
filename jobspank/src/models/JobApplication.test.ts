import { JobApplication, StatusEnum } from "./JobApplication";

let testApp: JobApplication;

beforeEach(() => {
  testApp = new JobApplication(
    "JobSpank",
    "Business Development Representative",
    "West Haven, CT",
    "100k",
    StatusEnum.Applied,
    new Temporal.PlainDate(2003, 6, 22),
    "Job should be super easy lol",
  );
});

describe("JobApplication class", () => {
  test("test object instantiation", () => {
    expect(testApp).not.toBeUndefined();
  });
  test("test empty object instantiation works", () => {
    testApp = new JobApplication();
    expect(testApp).not.toBeUndefined();
  });
  test("test get Job Application attributes", () => {
    expect(testApp.company).toBe("JobSpank");
    expect(testApp.position).toBe("Business Development Representative");
    expect(testApp.city).toBe("West Haven, CT");
    expect(testApp.pay).toBe("100k");
    expect(testApp.status).toBe(StatusEnum.Applied);
    expect(testApp.dateApplied).toEqual(new Temporal.PlainDate(2003, 6, 22));
    expect(testApp.dateAppliedString).toEqual(
      new Temporal.PlainDate(2003, 6, 22).toLocaleString(),
    );
    expect(testApp.notes).toBe("Job should be super easy lol");
  });
  test("test empty object date string", () => {
    testApp = new JobApplication();
    expect(testApp.dateAppliedString).toBe("");
  });
});
