import { ArgsType, Field } from "@nestjs/graphql";
import { ClusterGroupWhereUniqueInput } from "./ClusterGroupWhereUniqueInput";
import { ClusterGroupUpdateInput } from "./ClusterGroupUpdateInput";

@ArgsType()
class UpdateClusterGroupArgs {
  @Field(() => ClusterGroupWhereUniqueInput, { nullable: false })
  where!: ClusterGroupWhereUniqueInput;
  @Field(() => ClusterGroupUpdateInput, { nullable: false })
  data!: ClusterGroupUpdateInput;
}

export { UpdateClusterGroupArgs };
