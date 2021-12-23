import { Module } from "@nestjs/common";
import { JobModuleBase } from "./base/job.module.base";
import { JobService } from "./job.service";
import { JobController } from "./job.controller";
import { JobResolver } from "./job.resolver";

@Module({
  imports: [JobModuleBase],
  controllers: [JobController],
  providers: [JobService, JobResolver],
  exports: [JobService],
})
export class JobModule {}
