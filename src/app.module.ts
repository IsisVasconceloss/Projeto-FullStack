import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MedicosModule } from './medicos/medicos.module';
import { ConsultasModule } from './consultas/consultas.module';
import { PrismaModule } from './prisma/prisma.module';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [MedicosModule, ConsultasModule, PrismaModule],
})
export class AppModule {}
