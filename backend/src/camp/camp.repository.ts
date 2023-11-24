import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Camp } from './entities/camp.entity';
import { CreateCampDto } from './dto/create-camp.dto';

@Injectable()
export class CampRepository {
  private campRepository: Repository<Camp>;

  constructor(private readonly dataSource: DataSource) {
    this.campRepository = this.dataSource.getRepository(Camp);
  }

  createCamp(createCampDto: CreateCampDto) {
    return this.campRepository.save(createCampDto);
  }

  findAll() {
    return this.campRepository.find();
  }

  findOneByCampName(campName: string) {
    return this.campRepository.findOneBy({ campName });
  }
}