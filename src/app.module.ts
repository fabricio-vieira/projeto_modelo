import { Module } from '@nestjs/common'
import { HttpModule } from './http/http.module'
import { DatabaseModule } from './database/database.module'
import { PrismaService } from './database/prisma/prisma.service';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';

@Module({
  imports: [HttpModule, DatabaseModule, UserModule],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule { }
