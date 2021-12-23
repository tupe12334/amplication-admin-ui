import { ArgsType, Field } from "@nestjs/graphql";
import { ClusterGroupWhereUniqueInput } from "./ClusterGroupWhereUniqueInput";

@ArgsType()
class DeleteClusterGroupArgs {
  @Field(() => ClusterGroupWhereUniqueInput, { nullable: false })
  where!: ClusterGroupWhereUniqueInput;
}

export { DeleteClusterGroupArgs };
