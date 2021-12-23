import { ClusterGroupWhereUniqueInput } from "../clusterGroup/ClusterGroupWhereUniqueInput";

export type JobCreateInput = {
  clusterGroup?: ClusterGroupWhereUniqueInput | null;
  link?: string | null;
  title?: string | null;
};
