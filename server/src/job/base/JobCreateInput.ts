import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ClusterGroupWhereUniqueInput } from "../../clusterGroup/base/ClusterGroupWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
@InputType()
class JobCreateInput {
  @ApiProperty({
    required: false,
    type: () => ClusterGroupWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ClusterGroupWhereUniqueInput)
  @IsOptional()
  @Field(() => ClusterGroupWhereUniqueInput, {
    nullable: true,
  })
  clusterGroup?: ClusterGroupWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  link?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;
}
export { JobCreateInput };
