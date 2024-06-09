import { Module } from '@nestjs/common'
import { HttpModule } from './http/http.module'
// import { DatabaseModule } from './database/database.module'



@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
