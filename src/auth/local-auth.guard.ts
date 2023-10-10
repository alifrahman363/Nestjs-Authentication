import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport"; 

// authorization here

@Injectable()
export class LocalAuthGuard extends AuthGuard('local'){
}