'use strict';

angular.module('annuityApp', [
  'ngRoute',
  'annuityApp.module1',
  'annuityApp.module2'
]);

// (function(document,$,angular){
//   angular.element(document).ready(function() {
//     $.ajax({
//       url: '/api/get_user_permission',
//       type: "GET",
//       dataType: 'json'
//     }).then(function(data){
//         for (var i = 0; i < data.permissions.length; i++) {
//           data.permissions[i] = data.permissions[i].replace(/\s/g,"");
//         };
//         angular.module('annuityApp').run(['$rootScope', function($rootScope){
//           $rootScope = data.permissions;
//         }]);
//         angular.bootstrap(document, ['annuityApp']);
//     });
//   });
// })(document,jQuery,angular);