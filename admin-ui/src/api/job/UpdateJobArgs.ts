import { JobWhereUniqueInput } from "./JobWhereUniqueInput";
import { JobUpdateInput } from "./JobUpdateInput";

export type UpdateJobArgs = {
  where: JobWhereUniqueInput;
  data: JobUpdateInput;
};
