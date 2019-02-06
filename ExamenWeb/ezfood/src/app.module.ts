import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UsuarioEntity} from "./usuario/usuario.entity";
import {IngredienteEntity} from "./ingrediente/ingrediente.entity";
import {EventoEntity} from "./evento/evento.entity";
import {ComidaEntity} from "./comida/comida.entity";
import {RolEntity} from "./rol/rol.entity";
import {UsuarioModule} from "./usuario/usuario.module";
import {ComidaModule} from "./comida/comida.module";
import {EventoModule} from "./evento/evento.module";

@Module({
  imports: [
      TypeOrmModule.forRoot(
          {
                type:'sqlite',
                database:'ezfood2_db',
                synchronize:true,
                dropSchema:false,
                entities:[
                    UsuarioEntity,
                    IngredienteEntity,
                    EventoEntity,
                    ComidaEntity,
                    RolEntity
                ],
          }),
          UsuarioModule,
          ComidaModule,
          EventoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
