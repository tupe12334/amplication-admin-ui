import { JobWhereInput } from "./JobWhereInput";
import { JobOrderByInput } from "./JobOrderByInput";

export type JobFindManyArgs = {
  where?: JobWhereInput;
  orderBy?: JobOrderByInput;
  skip?: number;
  take?: number;
};
