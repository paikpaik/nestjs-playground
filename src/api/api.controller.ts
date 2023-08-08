import { Controller, Get, HostParam } from '@nestjs/common';

@Controller({ host: ':version.api.example.com' })
export class ApiController {
  @Get()
  index(@HostParam('version') version: string): string {
    return `Hello, API ${version}`;
  }
}
