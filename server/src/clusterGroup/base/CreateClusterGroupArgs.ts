import { ArgsType, Field } from "@nestjs/graphql";
import { ClusterGroupCreateInput } from "./ClusterGroupCreateInput";

@ArgsType()
class CreateClusterGroupArgs {
  @Field(() => ClusterGroupCreateInput, { nullable: false })
  data!: ClusterGroupCreateInput;
}

export { CreateClusterGroupArgs };
