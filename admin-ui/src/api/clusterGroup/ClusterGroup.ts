import { Job } from "../job/Job";

export type ClusterGroup = {
  createdAt: Date;
  description: string | null;
  id: string;
  jobs?: Array<Job>;
  name: string | null;
  updatedAt: Date;
};
