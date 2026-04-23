import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    JwtModule.register({
      secret: 'MI_SECRETO_SUPER_SEGURO', // en .env mejor
      signOptions: { expiresIn: '1h' },
    }),
  ],
})
export class AppModule {}