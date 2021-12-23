import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ClusterGroupResolverBase } from "./base/clusterGroup.resolver.base";
import { ClusterGroup } from "./base/ClusterGroup";
import { ClusterGroupService } from "./clusterGroup.service";

@graphql.Resolver(() => ClusterGroup)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ClusterGroupResolver extends ClusterGroupResolverBase {
  constructor(
    protected readonly service: ClusterGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
