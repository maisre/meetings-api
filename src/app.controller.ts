import {
  Controller,
  Request,
  Get,
  Headers,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local.strategy';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt.strategy';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}

  @Get()
  getHello(@Headers('Authorization') customHeader?: string): string {
    console.log(`got this for header - ${customHeader}`);
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('auth/logout')
  async logout(@Request() req) {
    return req.logout(() => {});
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
