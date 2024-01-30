import { IPJuridica } from './IPJuridica';
import {IActo} from './acto';

import {IObservaciones} from './observaciones'

import { IPersonaHumana } from './personaHumana';


export interface IParcialInhibiciones{
    'actos':IActo,
    'personas': (IPersonaHumana|IPJuridica)[],
    'observaciones':IObservaciones
  }
