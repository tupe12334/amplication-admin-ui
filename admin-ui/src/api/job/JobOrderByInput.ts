import { SortOrder } from "../../util/SortOrder";

export type JobOrderByInput = {
  clusterGroupId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  link?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
