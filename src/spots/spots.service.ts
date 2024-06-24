import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateSpotDto } from './dto/create-spot.dto';
import { UpdateSpotDto } from './dto/update-spot.dto';

@Injectable()
export class SpotsService {
  constructor(private prismaService: PrismaService) {}

  create(createSpotDto: CreateSpotDto) {
    return this.prismaService.spot.create({
      data: {
        ...createSpotDto,
      },
    });
  }

  findAll(eventId: string) {
    return this.prismaService.spot.findMany({ where: { eventId } });
  }

  findOne(eventId: string, spotId: string) {
    return this.prismaService.spot.findFirst({
      where: {
        id: spotId,
        eventId,
      },
    });
  }

  update(eventId: string, spotId: string, updateSpotDto: UpdateSpotDto) {
    return this.prismaService.spot.update({
      data: updateSpotDto,
      where: {
        id: spotId,
        eventId,
      },
    });
  }

  remove(eventId: string, spotId: string) {
    return this.prismaService.spot.delete({
      where: {
        id: spotId,
        eventId,
      },
    });
  }
}
