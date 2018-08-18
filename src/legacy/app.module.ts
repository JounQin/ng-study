import uiRouter from '@uirouter/angularjs'
import angular from 'angular'

import { DOWNGRADE_MODULE } from 'app/console/downgrade/downgrades'

angular.module('app', [DOWNGRADE_MODULE, uiRouter])
