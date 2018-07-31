'use strict';

import { BaseTemplate } from './base.template';

export const BaseTemplatesModule = angular
    .module('wza.baseComponent.template', [])
    .run(BaseTemplate)
    .name;
