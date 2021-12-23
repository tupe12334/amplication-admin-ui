import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ClusterGroupService } from "./clusterGroup.service";
import { ClusterGroupControllerBase } from "./base/clusterGroup.controller.base";

@swagger.ApiTags("cluster-groups")
@common.Controller("cluster-groups")
export class ClusterGroupController extends ClusterGroupControllerBase {
  constructor(
    protected readonly service: ClusterGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
