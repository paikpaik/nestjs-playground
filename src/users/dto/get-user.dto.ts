export class GetUserDto {
  // GET /users?offset=0&limit=10 과 같이 페이징 옵션을 위한 dto
  offset: number;
  limit: number;
}
