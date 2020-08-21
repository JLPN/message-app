import { Controller, Body, Post, Get, Put, Delete, Res, HttpStatus, Param } from '@nestjs/common';
import { CreateMensajeDto } from './dto/create-mensaje-dto';
import { MensajesService } from './mensajes.service';
import { response } from 'express';

@Controller('mensajes')
export class MensajesController {
    constructor(private mensajesService: MensajesService)
    {

    }

    @Post()
    create(@Body() createMensajeDto: CreateMensajeDto, @Res() response){
        this.mensajesService.createMensaje(createMensajeDto).then(
            mensaje => { response.status(HttpStatus.CREATED).json(mensaje);}        
        ).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje:'Error en la creación del mensaje'});
            }
        );
    }

    @Get()
    getAll(@Res() response) {
        this.mensajesService.getAll().then(mensajesList => {
            response.status(HttpStatus.OK).json(mensajesList);
        }
        
        ).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje:'Error en la obtención del mensaje'});
            }

        );
    }

    @Put(':id')
    update(@Body() updateMensajeDto: CreateMensajeDto, @Res() response, @Param('id') idmensaje){
        this.mensajesService.updateMensaje(idmensaje, updateMensajeDto).then(
            mensaje => {
                response.status(HttpStatus.OK).json(mensaje);
            }
        ).catch(()=>{
            response.status(HttpStatus.FORBIDDEN).json({mensaje:'Error en la actualización del mensaje'});
        }
        );
    }

    @Delete(':id')
    delete(@Res() response, @Param('id') idmensaje){
        this.mensajesService.deleteMensaje(idmensaje).then(res => {
            response.status(HttpStatus.OK).json(res);
        }

        ).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje:'Error en la eliminación del mensaje'});
            }
        );
    }



}
