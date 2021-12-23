import { ArgsType, Field } from "@nestjs/graphql";
import { JobWhereUniqueInput } from "./JobWhereUniqueInput";
import { JobUpdateInput } from "./JobUpdateInput";

@ArgsType()
class UpdateJobArgs {
  @Field(() => JobWhereUniqueInput, { nullable: false })
  where!: JobWhereUniqueInput;
  @Field(() => JobUpdateInput, { nullable: false })
  data!: JobUpdateInput;
}

export { UpdateJobArgs };
