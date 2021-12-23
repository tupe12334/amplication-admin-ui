import { ArgsType, Field } from "@nestjs/graphql";
import { ClusterGroupWhereUniqueInput } from "./ClusterGroupWhereUniqueInput";

@ArgsType()
class ClusterGroupFindUniqueArgs {
  @Field(() => ClusterGroupWhereUniqueInput, { nullable: false })
  where!: ClusterGroupWhereUniqueInput;
}

export { ClusterGroupFindUniqueArgs };
