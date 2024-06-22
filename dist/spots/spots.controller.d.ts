import { SpotsService } from './spots.service';
import { CreateSpotDto } from './dto/create-spot.dto';
import { UpdateSpotDto } from './dto/update-spot.dto';
export declare class SpotsController {
    private readonly spotsService;
    constructor(spotsService: SpotsService);
    create(createSpotDto: CreateSpotDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSpotDto: UpdateSpotDto): string;
    remove(id: string): string;
}
