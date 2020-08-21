import { Mensaje } from './entities/mensaje.entity';
import { Repository } from 'typeorm';
import { CreateMensajeDto } from './dto/create-mensaje-dto';
export declare class MensajesService {
    private readonly mensajeRepository;
    constructor(mensajeRepository: Repository<Mensaje>);
    getAll(): Promise<Mensaje[]>;
    createMensaje(mensajeNuevo: CreateMensajeDto): Promise<Mensaje>;
    updateMensaje(idMensaje: number, mensajeActualizar: CreateMensajeDto): Promise<Mensaje>;
    deleteMensaje(idMensaje: number): Promise<any>;
}
