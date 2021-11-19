import {Entity, model, property, belongsTo, hasOne} from '@loopback/repository';
import {Usuario} from './usuario.model';
import {Inmueble} from './inmueble.model';

@model()
export class Solicitud extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  fechaSolicitud: string;

  @property({
    type: 'string',
    required: true,
  })
  tipoSolicitud: string;

  @property({
    type: 'string',
    required: true,
  })
  estadoSolicitud: string;

  @belongsTo(() => Usuario)
  usuarioId: string;

  @hasOne(() => Inmueble)
  inmueble: Inmueble;

  @property({
    type: 'string',
  })
  inmuebleId?: string;

  constructor(data?: Partial<Solicitud>) {
    super(data);
  }
}

export interface SolicitudRelations {
  // describe navigational properties here
}

export type SolicitudWithRelations = Solicitud & SolicitudRelations;
