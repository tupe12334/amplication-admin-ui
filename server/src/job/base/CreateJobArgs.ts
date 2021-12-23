import { ArgsType, Field } from "@nestjs/graphql";
import { JobCreateInput } from "./JobCreateInput";

@ArgsType()
class CreateJobArgs {
  @Field(() => JobCreateInput, { nullable: false })
  data!: JobCreateInput;
}

export { CreateJobArgs };
