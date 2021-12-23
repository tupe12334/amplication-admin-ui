import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ClusterGroupServiceBase } from "./base/clusterGroup.service.base";

@Injectable()
export class ClusterGroupService extends ClusterGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
