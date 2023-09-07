import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PoiModule } from './poi/poi.module';

@Module({
  imports: [PoiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
