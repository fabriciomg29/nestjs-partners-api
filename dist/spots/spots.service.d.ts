import { CreateSpotDto } from './dto/create-spot.dto';
import { UpdateSpotDto } from './dto/update-spot.dto';
export declare class SpotsService {
    create(createSpotDto: CreateSpotDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateSpotDto: UpdateSpotDto): string;
    remove(id: number): string;
}
