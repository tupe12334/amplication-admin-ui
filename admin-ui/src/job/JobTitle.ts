import { Job as TJob } from "../api/job/Job";

export const JOB_TITLE_FIELD = "title";

export const JobTitle = (record: TJob): string => {
  return record.title || record.id;
};
