function PagerDirective() {

  return {
    restrict: 'EA',
    templateUrl: 'directives/pager.html',
    scope: {
      range: '=',
      ctrl: '='
    },
    link: (scope) => {
      scope.foward = () => {
        if(scope.ctrl.pageIndex < scope.range.length){
            ++scope.ctrl.pageIndex;
            scope.ctrl.pageControlHandler(true);
        }
      };

      scope.back = () => {
        if(scope.ctrl.pageIndex > 0){
            --scope.ctrl.pageIndex;
            scope.ctrl.pageControlHandler(false);
        }
      };
    }
  };
}

export default {
  name: 'pagerDirective',
  fn: PagerDirective
};
