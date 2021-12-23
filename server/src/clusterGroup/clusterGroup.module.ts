import { Module } from "@nestjs/common";
import { ClusterGroupModuleBase } from "./base/clusterGroup.module.base";
import { ClusterGroupService } from "./clusterGroup.service";
import { ClusterGroupController } from "./clusterGroup.controller";
import { ClusterGroupResolver } from "./clusterGroup.resolver";

@Module({
  imports: [ClusterGroupModuleBase],
  controllers: [ClusterGroupController],
  providers: [ClusterGroupService, ClusterGroupResolver],
  exports: [ClusterGroupService],
})
export class ClusterGroupModule {}
