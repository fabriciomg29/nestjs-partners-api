import { PrismaService } from './../prisma/prisma.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
export declare class EventsService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(createEventDto: CreateEventDto): import(".prisma/client").Prisma.Prisma__EventClient<{
        id: string;
        name: string;
        description: string;
        date: Date;
        price: number;
        createedAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        description: string;
        date: Date;
        price: number;
        createedAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__EventClient<{
        id: string;
        name: string;
        description: string;
        date: Date;
        price: number;
        createedAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateEventDto: UpdateEventDto): import(".prisma/client").Prisma.Prisma__EventClient<{
        id: string;
        name: string;
        description: string;
        date: Date;
        price: number;
        createedAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__EventClient<{
        id: string;
        name: string;
        description: string;
        date: Date;
        price: number;
        createedAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
