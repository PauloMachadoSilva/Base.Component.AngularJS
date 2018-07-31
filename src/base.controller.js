'use strict';

export class BaseComponentController {
    constructor($timeout) {
        'ngInject';
        this.$timeout = $timeout;
    }
    
    $onInit() {
        this.$timeout(() => {
            this.testValue = 'String de Teste Modificada';
        }, 1000);
    }
}
