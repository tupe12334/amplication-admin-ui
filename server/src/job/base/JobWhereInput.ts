import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ClusterGroupWhereUniqueInput } from "../../clusterGroup/base/ClusterGroupWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
@InputType()
class JobWhereInput {
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
  clusterGroup?: ClusterGroupWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  link?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  title?: StringNullableFilter;
}
export { JobWhereInput };
