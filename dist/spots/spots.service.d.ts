import { PrismaService } from './../prisma/prisma.service';
import { CreateSpotDto } from './dto/create-spot.dto';
import { UpdateSpotDto } from './dto/update-spot.dto';
export declare class SpotsService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(createSpotDto: CreateSpotDto): import(".prisma/client").Prisma.Prisma__SpotClient<{
        id: string;
        name: string;
        status: import(".prisma/client").$Enums.SpotStatus;
        createedAt: Date;
        updatedAt: Date;
        eventId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(eventId: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        status: import(".prisma/client").$Enums.SpotStatus;
        createedAt: Date;
        updatedAt: Date;
        eventId: string;
    }[]>;
    findOne(eventId: string, spotId: string): import(".prisma/client").Prisma.Prisma__SpotClient<{
        id: string;
        name: string;
        status: import(".prisma/client").$Enums.SpotStatus;
        createedAt: Date;
        updatedAt: Date;
        eventId: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(eventId: string, spotId: string, updateSpotDto: UpdateSpotDto): import(".prisma/client").Prisma.Prisma__SpotClient<{
        id: string;
        name: string;
        status: import(".prisma/client").$Enums.SpotStatus;
        createedAt: Date;
        updatedAt: Date;
        eventId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(eventId: string, spotId: string): import(".prisma/client").Prisma.Prisma__SpotClient<{
        id: string;
        name: string;
        status: import(".prisma/client").$Enums.SpotStatus;
        createedAt: Date;
        updatedAt: Date;
        eventId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
