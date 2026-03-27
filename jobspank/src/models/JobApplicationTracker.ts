import { JobApplication } from "./JobApplication";

export class JobApplicationTracker {
  private _jobApplications: Array<JobApplication>;
  constructor() {
    this._jobApplications = new Array<JobApplication>();
  }
  public addJobApplication(app: JobApplication) {
    this._jobApplications.push(app);
  }
  public getJobApplication(index: number) {
    return this._jobApplications.at(index);
  }

  public getAllJobApplications(): Array<JobApplication> {
    return this._jobApplications;
  }

  public getLength(): number {
    return this._jobApplications.length;
  }
}
