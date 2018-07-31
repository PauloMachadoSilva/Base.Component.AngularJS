'use strict';

import { BaseModule } from './base.module';

describe('Componente Base', () => {
    beforeEach(angular.mock.module(BaseModule));

    var component,
        controller,
        scope,
        timeout;

    beforeEach(() => {
        inject(($compile, $rootScope, $timeout) => {
            scope = $rootScope.$new();
            component = angular.element('<base-component test-value=""></base-component>');
            component = $compile(component)(scope);
            scope.$apply();
            controller = component.controller('baseComponent');
            timeout = $timeout;
        });
    });

    it('deve estar definido', () => {
        expect(component).toBeDefined();
    });

    it('controller deve estar definido', () => {
        expect(controller).toBeDefined();
    });

    it('$timeout deve ser chamado', () => {
        timeout.flush();
        expect(controller.testValue).toEqual('String de Teste Modificada');
    });
});
