import { ArgsType, Field } from "@nestjs/graphql";
import { JobWhereUniqueInput } from "./JobWhereUniqueInput";

@ArgsType()
class JobFindUniqueArgs {
  @Field(() => JobWhereUniqueInput, { nullable: false })
  where!: JobWhereUniqueInput;
}

export { JobFindUniqueArgs };
