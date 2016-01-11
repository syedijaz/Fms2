/**=========================================================
 * Module: config.js
 * App routes and resources configuration
 =========================================================*/


(function() {
    'use strict';

    angular
        .module('app.routes')
        .config(routesConfig);

    routesConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', 'RouteHelpersProvider'];
    function routesConfig($stateProvider, $locationProvider, $urlRouterProvider, helper){

        // Set the following to true to enable the HTML5 Mode
        // You may have to set <base> tag in index and a routing configuration in your server
        $locationProvider.html5Mode(false);

        // defaults to dashboard
        $urlRouterProvider.otherwise('/Dashboard');

        //
        // Application Routes
        // -----------------------------------
        $stateProvider
          .state('app', {
              //url: '/app',
              abstract: true,
              //templateUrl: helper.basepath('App/Index'),
              resolve: helper.resolveFor('fastclick', 'modernizr', 'icons', 'screenfull', 'animo', 'sparklines', 'slimscroll', 'classyloader', 'toaster', 'whirl'),
              controller: ['$rootScope', function ($rootScope) {

                  // Uncomment this if you are using horizontal layout
                  // $rootScope.app.layout.horizontal = true;

                  // Due to load times on local server sometimes the offsidebar is displayed before go offscreen
                  // so it's hidden by default and after 1sec we show it offscreen
                  // [If removed, also the hide class must be removed from .offsidebar]
                  setTimeout(function () {
                      angular.element('.offsidebar').removeClass('hide');
                  }, 3000);
              }]
          })
          .state('app.dashboard', {
              url: '/Dashboard',
              title: 'Dashboard',
              templateUrl: helper.basepath('Dashboard/DashboardV1'),
              resolve: helper.resolveFor('flot-chart','flot-chart-plugins', 'weather-icons', 'vector-map', 'vector-map-maps')
          })

          .state('app.dashboard_v2', {
              url: '/dashboard_v2',
              title: 'Dashboard v2',
              templateUrl: helper.basepath('Dashboard/DashboardV2'),
              controller: 'DashboardV2Controller',
              controllerAs: 'dash2',
              resolve: helper.resolveFor('flot-chart','flot-chart-plugins')
          })
          .state('app.dashboard_v3', {
              url: '/dashboard_v3',
              title: 'Dashboard v3',
              controller: 'DashboardV3Controller',
              controllerAs: 'dash3',
              templateUrl: helper.basepath('Dashboard/DashboardV3'),
              resolve: helper.resolveFor('flot-chart','flot-chart-plugins', 'vector-map', 'vector-map-maps')
          })

           .state('app.runsheets', {
               url: '/runsheets',
               title: 'Runsheets',
               templateUrl: helper.basepath('Runsheets/Runsheets'),
               resolve: helper.resolveFor('loadGoogleMapsJS', function() { return loadGoogleMaps(); }, 'ui.map')
           })

            .state('app.customers', {
                url: '/customers',
                title: 'Customers',
                templateUrl: helper.basepath('Customers/Customers'),
                resolve: helper.resolveFor('loadGoogleMapsJS', function () { return loadGoogleMaps(); }, 'ui.map')
            })

            .state('app.viewcustomer', {
                url: '/viewcustomer',
                title: 'View Customer',
                templateUrl: helper.basepath('Customers/ViewCustomer'),
                resolve: helper.resolveFor('loadGoogleMapsJS', function () { return loadGoogleMaps(); }, 'ui.map')
            })


          .state('app.widgets', {
              url: '/widgets',
              title: 'Widgets',
              templateUrl: helper.basepath('Widgets/Widgets'),
              resolve: helper.resolveFor('loadGoogleMapsJS', function() { return loadGoogleMaps(); }, 'ui.map')
          })


          .state('app.buttons', {
              url: '/buttons',
              title: 'Buttons',
              templateUrl: helper.basepath('Elements/Buttons')
          })
          .state('app.colors', {
              url: '/colors',
              title: 'Colors',
              templateUrl: helper.basepath('Elements/Colors')
          })
          .state('app.localization', {
              url: '/localization',
              title: 'Localization',
              templateUrl: helper.basepath('Elements/Localization')
          })
          .state('app.infinite-scroll', {
              url: '/infinite-scroll',
              title: 'Infinite Scroll',
              templateUrl: helper.basepath('Elements/InfiniteScroll'),
              resolve: helper.resolveFor('infinite-scroll')
          })
          .state('app.navtree', {
              url: '/navtree',
              title: 'Nav Tree',
              templateUrl: helper.basepath('Elements/NavTree'),
              resolve: helper.resolveFor('angularBootstrapNavTree')
          })
          .state('app.nestable', {
              url: '/nestable',
              title: 'Nestable',
              templateUrl: helper.basepath('Elements/Nestable'),
              resolve: helper.resolveFor('ng-nestable')
          })
          .state('app.sortable', {
              url: '/sortable',
              title: 'Sortable',
              templateUrl: helper.basepath('Elements/Sortable'),
              resolve: helper.resolveFor('htmlSortable')
          })
          .state('app.notifications', {
              url: '/notifications',
              title: 'Notifications',
              templateUrl: helper.basepath('Elements/Notifications')
          })
          .state('app.carousel', {
              url: '/carousel',
              title: 'Carousel',
              templateUrl: helper.basepath('Elements/Carousel'),
              resolve: helper.resolveFor('angular-carousel')
          })
          .state('app.ngdialog', {
              url: '/ngdialog',
              title: 'ngDialog',
              templateUrl: helper.basepath('Elements/Ngdialog'),
              resolve: angular.extend(helper.resolveFor('ngDialog'),{
                tpl: function() { return { path: helper.basepath('Elements/NgdialogTemplate') }; }
              }),
              controller: 'DialogIntroCtrl'
          })
          .state('app.sweetalert', {
            url: '/sweetalert',
            title: 'SweetAlert',
            templateUrl: helper.basepath('Elements/Sweetalert'),
            resolve: helper.resolveFor('oitozero.ngSweetAlert')
          })
          .state('app.tour', {
            url: '/tour',
            title: 'Tour',
            templateUrl: helper.basepath('Elements/Tour'),
            resolve: helper.resolveFor('bm.bsTour')
          })
          .state('app.interaction', {
              url: '/interaction',
              title: 'Interaction',
              templateUrl: helper.basepath('Elements/Interaction')
          })
          .state('app.spinners', {
              url: '/spinners',
              title: 'Spinners',
              templateUrl: helper.basepath('Elements/Spinners'),
              resolve: helper.resolveFor('loaders.css', 'spinkit')
          })
          .state('app.dropdown-animations', {
              url: '/dropdown-animations',
              title: 'Dropdown Animations',
              templateUrl: helper.basepath('Elements/DropdownAnimations')
          })
          .state('app.panels', {
              url: '/panels',
              title: 'Panels',
              templateUrl: helper.basepath('Elements/Panels')
          })
          .state('app.portlets', {
              url: '/portlets',
              title: 'Portlets',
              templateUrl: helper.basepath('Elements/Portlets'),
              resolve: helper.resolveFor('jquery-ui', 'jquery-ui-widgets')
          })
          .state('app.maps-google', {
              url: '/maps-google',
              title: 'Maps Google',
              templateUrl: helper.basepath('Maps/MapsGoogle'),
              resolve: helper.resolveFor('loadGoogleMapsJS', function() { return loadGoogleMaps(); }, 'ui.map')
          })
          .state('app.maps-vector', {
              url: '/maps-vector',
              title: 'Maps Vector',
              templateUrl: helper.basepath('Maps/MapsVector'),
              controller: 'VectorMapController',
              controllerAs: 'vmap',
              resolve: helper.resolveFor('vector-map', 'vector-map-maps')
          })
          .state('app.grid', {
              url: '/grid',
              title: 'Grid',
              templateUrl: helper.basepath('Elements/Grid')
          })
          .state('app.grid-masonry', {
              url: '/grid-masonry',
              title: 'Grid Masonry',
              templateUrl: helper.basepath('Elements/GridMasonry')
          })
          .state('app.grid-masonry-deck', {
              url: '/grid-masonry-deck',
              title: 'Grid Masonry',
              templateUrl: helper.basepath('Elements/GridMasonryDeck'),
              resolve: helper.resolveFor('spinkit', 'akoenig.deckgrid')
          })
          .state('app.typo', {
              url: '/typo',
              title: 'Typo',
              templateUrl: helper.basepath('Elements/Typo')
          })
          .state('app.icons-font', {
              url: '/icons-font',
              title: 'Icons Font',
              templateUrl: helper.basepath('Elements/IconsFont'),
              resolve: helper.resolveFor('icons')
          })
          .state('app.icons-weather', {
              url: '/icons-weather',
              title: 'Icons Weather',
              templateUrl: helper.basepath('Elements/IconsWeather'),
              resolve: helper.resolveFor('weather-icons', 'skycons')
          })
          .state('app.form-standard', {
              url: '/form-standard',
              title: 'Form Standard',
              templateUrl: helper.basepath('Forms/FormStandard')
          })
          .state('app.form-extended', {
              url: '/form-extended',
              title: 'Form Extended',
              templateUrl: helper.basepath('Forms/FormExtended'),
              resolve: helper.resolveFor('colorpicker.module', 'codemirror', 'moment', 'taginput','inputmask','localytics.directives', 'ui.bootstrap-slider', 'ngWig', 'filestyle', 'textAngular')
          })
          .state('app.form-validation', {
              url: '/form-validation',
              title: 'Form Validation',
              templateUrl: helper.basepath('Forms/FormValidation'),
              resolve: helper.resolveFor('ui.select', 'taginput','inputmask','localytics.directives')
          })
          .state('app.form-parsley', {
              url: '/form-parsley',
              title: 'Form Validation - Parsley',
              templateUrl: helper.basepath('Forms/FormParsley'),
              resolve: helper.resolveFor('parsley')
          })
          .state('app.form-wizard', {
              url: '/form-wizard',
              title: 'Form Wizard',
              templateUrl: helper.basepath('Forms/FormWizard'),
              resolve: helper.resolveFor('parsley')
          })
          .state('app.form-upload', {
              url: '/form-upload',
              title: 'Form upload',
              templateUrl: helper.basepath('Forms/FormUpload'),
              resolve: helper.resolveFor('angularFileUpload', 'filestyle')
          })
          .state('app.form-xeditable', {
              url: '/form-xeditable',
              templateUrl: helper.basepath('Forms/FormXeditable'),
              resolve: helper.resolveFor('xeditable')
          })
          .state('app.form-imagecrop', {
              url: '/form-imagecrop',
              templateUrl: helper.basepath('Forms/FormImagecrop'),
              resolve: helper.resolveFor('ngImgCrop', 'filestyle')
          })
          .state('app.form-uiselect', {
              url: '/form-uiselect',
              templateUrl: helper.basepath('Forms/FormUiselect'),
              controller: 'uiSelectController',
              controllerAs: 'uisel',
              resolve: helper.resolveFor('ui.select')
          })
          .state('app.chart-flot', {
              url: '/chart-flot',
              title: 'Chart Flot',
              templateUrl: helper.basepath('Charts/ChartFlot'),
              resolve: helper.resolveFor('flot-chart','flot-chart-plugins')
          })
          .state('app.chart-radial', {
              url: '/chart-radial',
              title: 'Chart Radial',
              templateUrl: helper.basepath('Charts/ChartRadial'),
              resolve: helper.resolveFor('classyloader', 'ui.knob', 'easypiechart')
          })
          .state('app.chart-js', {
              url: '/chart-js',
              title: 'Chart JS',
              templateUrl: helper.basepath('Charts/ChartJs'),
              resolve: helper.resolveFor('chartjs')
          })
          .state('app.chart-rickshaw', {
              url: '/chart-rickshaw',
              title: 'Chart Rickshaw',
              templateUrl: helper.basepath('Charts/ChartRickshaw'),
              resolve: helper.resolveFor('angular-rickshaw')
          })
          .state('app.chart-morris', {
              url: '/chart-morris',
              title: 'Chart Morris',
              templateUrl: helper.basepath('Charts/ChartMorris'),
              resolve: helper.resolveFor('morris')
          })
          .state('app.chart-chartist', {
              url: '/chart-chartist',
              title: 'Chart Chartist',
              templateUrl: helper.basepath('Charts/ChartChartist'),
              resolve: helper.resolveFor('angular-chartist')
          })
          .state('app.table-standard', {
              url: '/table-standard',
              title: 'Table Standard',
              templateUrl: helper.basepath('Tables/TableStandard')
          })
          .state('app.table-extended', {
              url: '/table-extended',
              title: 'Table Extended',
              templateUrl: helper.basepath('Tables/TableExtended')
          })
          .state('app.table-datatable', {
              url: '/table-datatable',
              title: 'Table Datatable',
              templateUrl: helper.basepath('Tables/TableDatatable'),
              resolve: helper.resolveFor('datatables')
          })
          .state('app.table-xeditable', {
              url: '/table-xeditable',
              templateUrl: helper.basepath('Tables/TableXeditable'),
              resolve: helper.resolveFor('xeditable')
          })
          .state('app.table-ngtable', {
              url: '/table-ngtable',
              templateUrl: helper.basepath('Tables/TableNgtable'),
              resolve: helper.resolveFor('ngTable', 'ngTableExport')
          })
          .state('app.table-nggrid', {
              url: '/table-nggrid',
              templateUrl: helper.basepath('Tables/TableNgGrid'),
              resolve: helper.resolveFor('ngGrid')
          })
          .state('app.table-uigrid', {
              url: '/table-uigrid',
              templateUrl: helper.basepath('Tables/TableUigrid'),
              resolve: helper.resolveFor('ui.grid')
          })
          .state('app.table-angulargrid', {
              url: '/table-angulargrid',
              templateUrl: helper.basepath('Tables/TableAngulargrid'),
              resolve: helper.resolveFor('angularGrid')
          })
          .state('app.timeline', {
              url: '/timeline',
              title: 'Timeline',
              templateUrl: helper.basepath('Extras/Timeline')
          })
          .state('app.calendar', {
              url: '/calendar',
              title: 'Calendar',
              templateUrl: helper.basepath('Extras/Calendar'),
              resolve: helper.resolveFor('jquery-ui', 'jquery-ui-widgets', 'moment', 'fullcalendar')
          })
          .state('app.invoice', {
              url: '/invoice',
              title: 'Invoice',
              templateUrl: helper.basepath('Extras/Invoice')
          })
          .state('app.search', {
              url: '/search',
              title: 'Search',
              templateUrl: helper.basepath('Extras/Search'),
              resolve: helper.resolveFor('moment', 'localytics.directives', 'ui.bootstrap-slider')
          })
          .state('app.todo', {
              url: '/todo',
              title: 'Todo List',
              templateUrl: helper.basepath('Extras/Todo'),
              controller: 'TodoController',
              controllerAs: 'todo'
          })
          .state('app.profile', {
              url: '/profile',
              title: 'Profile',
              templateUrl: helper.basepath('Extras/Profile'),
              resolve: helper.resolveFor('loadGoogleMapsJS', function() { return loadGoogleMaps(); }, 'ui.map')
          })
          .state('app.code-editor', {
              url: '/code-editor',
              templateUrl: helper.basepath('Extras/CodeEditor'),
              controller: 'CodeEditorController',
              controllerAs: 'coder',
              resolve: {
                  deps: helper.resolveFor('codemirror', 'ui.codemirror', 'codemirror-modes-web', 'angularBootstrapNavTree').deps,
                  filetree: ['LoadTreeService', function (LoadTreeService) {
                      return LoadTreeService.get().$promise.then(function (res) {
                          return res.data;
                      });
                  }]
              }
          })
          .state('app.template', {
              url: '/template',
              title: 'Blank Template',
              templateUrl: helper.basepath('Elements/Template')
          })
          .state('app.documentation', {
              url: '/documentation',
              title: 'Documentation',
              templateUrl: helper.basepath('Documentation/Documentation'),
              resolve: helper.resolveFor('flatdoc')
          })
          // Forum
          // -----------------------------------
          .state('app.forum', {
              url: '/forum',
              title: 'Forum',
              templateUrl: helper.basepath('Forum/Forum')
          })
          .state('app.forum-topics', {
              url: '/forum/topics/:catid',
              title: 'Forum Topics',
              templateUrl: helper.basepath('Forum/ForumTopics')
          })
          .state('app.forum-discussion', {
              url: '/forum/discussion/:topid',
              title: 'Forum Discussion',
              templateUrl: helper.basepath('Forum/ForumDiscussion')
          })
          // Blog
          // -----------------------------------
          .state('app.blog', {
              url: '/blog',
              title: 'Blog',
              templateUrl: helper.basepath('Blog/Blog'),
              resolve: helper.resolveFor('angular-jqcloud')
          })
          .state('app.blog-post', {
              url: '/post',
              title: 'Post',
              templateUrl: helper.basepath('Blog/BlogPost'),
              resolve: helper.resolveFor('angular-jqcloud')
          })
          .state('app.articles', {
              url: '/articles',
              title: 'Articles',
              templateUrl: helper.basepath('Blog/BlogArticles'),
              resolve: helper.resolveFor('datatables')
          })
          .state('app.article-view', {
              url: '/article/:id',
              title: 'Article View',
              templateUrl: helper.basepath('Blog/BlogArticleView'),
              resolve: helper.resolveFor('ui.select', 'textAngular')
          })
          // eCommerce
          // -----------------------------------
          .state('app.orders', {
              url: '/orders',
              title: 'Orders',
              templateUrl: helper.basepath('Ecommerce/EcommerceOrders'),
              resolve: helper.resolveFor('datatables')
          })
          .state('app.order-view', {
              url: '/order-view',
              title: 'Order View',
              templateUrl: helper.basepath('Ecommerce/EcommerceOrderView')
          })
          .state('app.products', {
              url: '/products',
              title: 'Products',
              templateUrl: helper.basepath('Ecommerce/EcommerceProducts'),
              resolve: helper.resolveFor('datatables')
          })
          .state('app.product-view', {
              url: '/product/:id',
              title: 'Product View',
              templateUrl: helper.basepath('Ecommerce/EcommerceProductView')
          })
          // Mailbox
          // -----------------------------------
          .state('app.mailbox', {
              url: '/mailbox',
              title: 'Mailbox',
              abstract: true,
              templateUrl: helper.basepath('Extras/Mailbox')
          })
          .state('app.mailbox.folder', {
              url: '/folder/:folder',
              title: 'Mailbox',
              templateUrl: helper.basepath('Extras/MailboxInbox')
          })
          .state('app.mailbox.view', {
              url : '/{mid:[0-9]{1,4}}',
              title: 'View mail',
              templateUrl: helper.basepath('Extras/MailboxView'),
              resolve: helper.resolveFor('ngWig')
          })
          .state('app.mailbox.compose', {
              url: '/compose',
              title: 'Mailbox',
              templateUrl: helper.basepath('Extras/MailboxCompose'),
              resolve: helper.resolveFor('ngWig')
          })
          //
          // Multiple level example
          // -----------------------------------
          .state('app.multilevel', {
              url: '/multilevel',
              title: 'Multilevel',
              template: '<h3>Multilevel Views</h3>' + '<div class="lead ba p">View @ Top Level ' + '<div ui-view=""></div> </div>'
          })
          .state('app.multilevel.level1', {
              url: '/level1',
              title: 'Multilevel - Level1',
              template: '<div class="lead ba p">View @ Level 1' + '<div ui-view=""></div> </div>'
          })
          .state('app.multilevel.level1.item', {
              url: '/item',
              title: 'Multilevel - Level1',
              template: '<div class="lead ba p"> Menu item @ Level 1</div>'
          })
          .state('app.multilevel.level1.level2', {
              url: '/level2',
              title: 'Multilevel - Level2',
              template: '<div class="lead ba p">View @ Level 2'  + '<div ui-view=""></div> </div>'
          })
          .state('app.multilevel.level1.level2.level3', {
              url: '/level3',
              title: 'Multilevel - Level3',
              template: '<div class="lead ba p">View @ Level 3' + '<div ui-view=""></div> </div>'
          })
          .state('app.multilevel.level1.level2.level3.item', {
              url: '/item',
              title: 'Multilevel - Level3 Item',
              template: '<div class="lead ba p"> Menu item @ Level 3</div>'
          })
          //
          // Single Page Routes
          // -----------------------------------
          .state('page', {
              url: '/page',
              templateUrl: helper.basepath('Pages/Page'),
              resolve: helper.resolveFor('modernizr', 'icons'),
              controller: ['$rootScope', function($rootScope) {
                  $rootScope.app.layout.isBoxed = false;
              }]
          })
          .state('page.login', {
              url: '/login',
              title: 'Login',
              templateUrl: helper.basepath('Pages/Login')
          })
          .state('page.register', {
              url: '/register',
              title: 'Register',
              templateUrl: helper.basepath('Pages/Register')
          })
          .state('page.recover', {
              url: '/recover',
              title: 'Recover',
              templateUrl: helper.basepath('Pages/Recover')
          })
          .state('page.lock', {
              url: '/lock',
              title: 'Lock',
              templateUrl: helper.basepath('Pages/Lock')
          })
          .state('page.404', {
              url: '/404',
              title: 'Not Found',
              templateUrl: helper.basepath('Pages/Error404')
          })
          //
          // CUSTOM RESOLVES
          //   Add your own resolves properties
          //   following this object extend
          //   method
          // -----------------------------------
          // .state('app.someroute', {
          //   url: '/some_url',
          //   templateUrl: 'path_to_template.html',
          //   controller: 'someController',
          //   resolve: angular.extend(
          //     helper.resolveFor(), {
          //     // YOUR RESOLVES GO HERE
          //     }
          //   )
          // })
          ;

    } // routesConfig

})();

