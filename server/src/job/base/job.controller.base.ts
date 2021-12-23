import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { JobService } from "../job.service";
import { JobCreateInput } from "./JobCreateInput";
import { JobWhereInput } from "./JobWhereInput";
import { JobWhereUniqueInput } from "./JobWhereUniqueInput";
import { JobFindManyArgs } from "./JobFindManyArgs";
import { JobUpdateInput } from "./JobUpdateInput";
import { Job } from "./Job";
@swagger.ApiBearerAuth()
export class JobControllerBase {
  constructor(
    protected readonly service: JobService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "Job",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: Job })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: JobCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Job> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Job",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"Job"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        clusterGroup: data.clusterGroup
          ? {
              connect: data.clusterGroup,
            }
          : undefined,
      },
      select: {
        clusterGroup: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        link: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "Job",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [Job] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => JobFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Job[]> {
    const args = plainToClass(JobFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Job",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        clusterGroup: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        link: true,
        title: true,
        updatedAt: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "Job",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Job })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: JobWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Job | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Job",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        clusterGroup: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        link: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return permission.filter(result);
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "Job",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Job })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: JobWhereUniqueInput,
    @common.Body()
    data: JobUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Job | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Job",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"Job"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          clusterGroup: data.clusterGroup
            ? {
                connect: data.clusterGroup,
              }
            : undefined,
        },
        select: {
          clusterGroup: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          link: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "Job",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Job })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: JobWhereUniqueInput
  ): Promise<Job | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          clusterGroup: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          link: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
