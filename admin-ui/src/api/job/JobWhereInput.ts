import { ClusterGroupWhereUniqueInput } from "../clusterGroup/ClusterGroupWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type JobWhereInput = {
  clusterGroup?: ClusterGroupWhereUniqueInput;
  id?: StringFilter;
  link?: StringNullableFilter;
  title?: StringNullableFilter;
};
