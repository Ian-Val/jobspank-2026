"use client";

import { JobApplication } from "@/models/JobApplication";
import { JobApplicationTracker } from "@/models/JobApplicationTracker";
import { useState } from "react";
import "./JobApplicationTable.css";

export default function JobApplicationTable({
  data,
}: {
  data?: JobApplicationTracker;
}) {
  const [tableData, setTableData] = useState<JobApplicationTracker>(
    data
      ? data
      : () => {
          const newBlankTracker = new JobApplicationTracker();
          newBlankTracker.addJobApplication(new JobApplication());
          return newBlankTracker;
        },
  );

  return (
    <table>
      <thead>
        <tr>
          <th className="lg:w-80 md:w-60 w-40">Company</th>
          <th className="lg:w-80 md:w-60 w-40">Position</th>
          <th className="md:w-60 w-40">City</th>
          <th className="md:w-60 w-40">Pay</th>
          <th className="md:w-60 w-40">Status</th>
          <th className="w-60">Date Applied</th>
          <th className="lg:w-80 md:w-60 w-40">Notes</th>
        </tr>
      </thead>
      <tbody>
        {tableData
          ? tableData
              .getAllJobApplications()
              .map((application: JobApplication) => {
                return (
                  <tr key={application.uuid}>
                    <td>{application.company}</td>
                    <td>{application.position}</td>
                    <td>{application.city}</td>
                    <td>{application.pay}</td>
                    <td>{application.status}</td>
                    <td>{application.dateAppliedString}</td>
                    <td>{application.notes}</td>
                  </tr>
                );
              })
          : null}
      </tbody>
    </table>
  );
}
