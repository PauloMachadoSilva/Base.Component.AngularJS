'use strict';

/* @ngInject */
export const BaseTemplate = ($templateCache) => (
    $templateCache.put('wza.baseComponent.template',
        '<p class="my-text-bold">{{ $ctrl.testValue }}</p>'
    )
);
