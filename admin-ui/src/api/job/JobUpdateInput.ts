import { ClusterGroupWhereUniqueInput } from "../clusterGroup/ClusterGroupWhereUniqueInput";

export type JobUpdateInput = {
  clusterGroup?: ClusterGroupWhereUniqueInput | null;
  link?: string | null;
  title?: string | null;
};
