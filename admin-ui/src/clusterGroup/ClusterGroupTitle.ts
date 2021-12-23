import { ClusterGroup as TClusterGroup } from "../api/clusterGroup/ClusterGroup";

export const CLUSTERGROUP_TITLE_FIELD = "name";

export const ClusterGroupTitle = (record: TClusterGroup): string => {
  return record.name || record.id;
};
