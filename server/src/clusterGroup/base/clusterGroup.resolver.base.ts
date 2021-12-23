import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateClusterGroupArgs } from "./CreateClusterGroupArgs";
import { UpdateClusterGroupArgs } from "./UpdateClusterGroupArgs";
import { DeleteClusterGroupArgs } from "./DeleteClusterGroupArgs";
import { ClusterGroupFindManyArgs } from "./ClusterGroupFindManyArgs";
import { ClusterGroupFindUniqueArgs } from "./ClusterGroupFindUniqueArgs";
import { ClusterGroup } from "./ClusterGroup";
import { JobFindManyArgs } from "../../job/base/JobFindManyArgs";
import { Job } from "../../job/base/Job";
import { ClusterGroupService } from "../clusterGroup.service";

@graphql.Resolver(() => ClusterGroup)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ClusterGroupResolverBase {
  constructor(
    protected readonly service: ClusterGroupService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ClusterGroup",
    action: "read",
    possession: "any",
  })
  async _clusterGroupsMeta(
    @graphql.Args() args: ClusterGroupFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [ClusterGroup])
  @nestAccessControl.UseRoles({
    resource: "ClusterGroup",
    action: "read",
    possession: "any",
  })
  async clusterGroups(
    @graphql.Args() args: ClusterGroupFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ClusterGroup[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "ClusterGroup",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => ClusterGroup, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ClusterGroup",
    action: "read",
    possession: "own",
  })
  async clusterGroup(
    @graphql.Args() args: ClusterGroupFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ClusterGroup | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "ClusterGroup",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => ClusterGroup)
  @nestAccessControl.UseRoles({
    resource: "ClusterGroup",
    action: "create",
    possession: "any",
  })
  async createClusterGroup(
    @graphql.Args() args: CreateClusterGroupArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ClusterGroup> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "ClusterGroup",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"ClusterGroup"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ClusterGroup)
  @nestAccessControl.UseRoles({
    resource: "ClusterGroup",
    action: "update",
    possession: "any",
  })
  async updateClusterGroup(
    @graphql.Args() args: UpdateClusterGroupArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ClusterGroup | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "ClusterGroup",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"ClusterGroup"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ClusterGroup)
  @nestAccessControl.UseRoles({
    resource: "ClusterGroup",
    action: "delete",
    possession: "any",
  })
  async deleteClusterGroup(
    @graphql.Args() args: DeleteClusterGroupArgs
  ): Promise<ClusterGroup | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Job])
  @nestAccessControl.UseRoles({
    resource: "ClusterGroup",
    action: "read",
    possession: "any",
  })
  async jobs(
    @graphql.Parent() parent: ClusterGroup,
    @graphql.Args() args: JobFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Job[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Job",
    });
    const results = await this.service.findJobs(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }
}
