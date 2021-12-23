import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ClusterGroupWhereInput } from "./ClusterGroupWhereInput";
import { Type } from "class-transformer";
import { ClusterGroupOrderByInput } from "./ClusterGroupOrderByInput";

@ArgsType()
class ClusterGroupFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ClusterGroupWhereInput,
  })
  @Field(() => ClusterGroupWhereInput, { nullable: true })
  @Type(() => ClusterGroupWhereInput)
  where?: ClusterGroupWhereInput;

  @ApiProperty({
    required: false,
    type: ClusterGroupOrderByInput,
  })
  @Field(() => ClusterGroupOrderByInput, { nullable: true })
  @Type(() => ClusterGroupOrderByInput)
  orderBy?: ClusterGroupOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ClusterGroupFindManyArgs };
