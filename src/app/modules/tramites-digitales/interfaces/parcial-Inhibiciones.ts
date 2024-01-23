import {IActo} from './acto';

import {IObservaciones} from './observaciones'

import { IPersonaHumana } from './personaHumana';


export interface IParcialInhibiciones{
    'actos':IActo,
    'personaH': IPersonaHumana,
    'observaciones':IObservaciones
  }
