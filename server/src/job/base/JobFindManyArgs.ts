import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { JobWhereInput } from "./JobWhereInput";
import { Type } from "class-transformer";
import { JobOrderByInput } from "./JobOrderByInput";

@ArgsType()
class JobFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => JobWhereInput,
  })
  @Field(() => JobWhereInput, { nullable: true })
  @Type(() => JobWhereInput)
  where?: JobWhereInput;

  @ApiProperty({
    required: false,
    type: JobOrderByInput,
  })
  @Field(() => JobOrderByInput, { nullable: true })
  @Type(() => JobOrderByInput)
  orderBy?: JobOrderByInput;

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

export { JobFindManyArgs };
