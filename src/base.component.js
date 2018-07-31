'use strict';

import { BaseComponentController } from './base.controller';

export const BaseComponent = {
    bindings: {
        testValue: '@'
    },
    controller: BaseComponentController,
    templateUrl: 'wza.baseComponent.template'
};
