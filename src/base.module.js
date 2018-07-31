'use strict';

import { BaseComponent } from './base.component';
import { BaseStyle } from './styles/styles.sass';
import { BaseTemplatesModule } from './templates/templates.module';

export const BaseModule = angular
    .module('component', [
        BaseTemplatesModule
    ])
    .component('baseComponent', BaseComponent)
    .name;
