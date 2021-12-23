import { ArgsType, Field } from "@nestjs/graphql";
import { JobWhereUniqueInput } from "./JobWhereUniqueInput";

@ArgsType()
class DeleteJobArgs {
  @Field(() => JobWhereUniqueInput, { nullable: false })
  where!: JobWhereUniqueInput;
}

export { DeleteJobArgs };
