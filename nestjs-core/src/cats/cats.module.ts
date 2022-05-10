import { Comments, CommentsSchema } from './../comments/comments.schema';
import { AuthModule } from './../auth/auth.module';
import { CatsRepository } from './cats.repository';
import { Module, forwardRef } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './cats.schema';
import { MulterModule } from '@nestjs/platform-express';
import { AwsService } from '../aws.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Cat.name, schema: CatSchema },
      { name: Comments.name, schema: CommentsSchema },
    ]),
    forwardRef(() => AuthModule),
    MulterModule.register({
      dest: './upload',
    }),
  ],
  controllers: [CatsController],
  providers: [CatsService, CatsRepository, AwsService],
  exports: [CatsService, CatsRepository],
})
export class CatsModule {}
