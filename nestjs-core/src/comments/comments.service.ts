import { Injectable } from '@nestjs/common';
import { CommentsCreateDto } from './dtos/comments.create.dto';

@Injectable()
export class CommentsService {
  async getAllComments() {
    return '';
  }
  async createComment(id: string, comments: CommentsCreateDto) {
    return '';
  }
  async plusLike(id: string) {
    return '';
  }
}
