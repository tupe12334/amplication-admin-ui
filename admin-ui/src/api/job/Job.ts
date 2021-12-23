import { ClusterGroup } from "../clusterGroup/ClusterGroup";

export type Job = {
  clusterGroup?: ClusterGroup | null;
  createdAt: Date;
  id: string;
  link: string | null;
  title: string | null;
  updatedAt: Date;
};
