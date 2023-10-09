import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // // session configuration
  // app.use(
  //   session({
  //     secret: 'keyboard cat',
  //     resave: false, 
  //     saveUninitialize: false,
  //     cookie: {maxAge: 36000000},
  //   }),
  // );

  // app.use(passport.initialize());
  // app.use(passport.session());
  
  await app.listen(3000);
}
bootstrap();
