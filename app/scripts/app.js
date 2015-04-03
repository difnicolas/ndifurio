angular
	.module('app', [
		"ui.router"
	])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'templates/home.html'
			})
			.state('about', {
				url: '/about',
				templateUrl: 'templates/about.html'
			})
			.state('about.compover', {
				url: '/company_overview',
				templateUrl: 'templates/compover.html'
			})
			.state('about.associatebio', {
				url: '/associate_biographies',
				templateUrl: 'templates/assbio.html'
			})
			.state('contact', {
				url: '/contact',
				templateUrl: 'templates/contact.html'
			})
			.state('services', {
				url: '/services',
				templateUrl: 'templates/services/services.html'
			})
			.state('services.execBS', {
				url: '/exec_business_strategy',
				templateUrl: 'templates/services/ebs.html'
			})
			.state('services.capture', {
				url: '/capture_strategy',
				templateUrl: 'templates/services/capstrat.html'
			})
			.state('services.capprop', {
				url: '/capture_proposal_mgmt',
				templateUrl: 'templates/services/cpm.html'
			})
			.state('services.propsup', {
				url: '/proposal_support',
				templateUrl: 'templates/services/propsup.html'
			})
			.state('services.training', {
				url: '/training',
				templateUrl: 'templates/services/training.html'
			})
			.state('more', {
				url: '/more',
				templateUrl: 'templates/more/more.html'
			})
			.state('more.mdi', {
				url: '/strategy_diligence_integration',
				templateUrl: 'templates/more/sdi.html'
			})
			.state('more.startup', {
				url: '/startup',
				templateUrl: 'templates/more/startup.html'
			})
			.state('more.sToL', {
				url: '/small_to_large',
				templateUrl: 'templates/more/smalltolarge.html'
			})
			.state('more.reviews', {
				url: '/program_reviews',
				templateUrl: 'templates/more/reviews.html'
			})
			.state('cyber', {
				url: '/cyber',
				templateUrl: 'templates/cyber.html'
			})
			.state('careers', {
				url: '/careers',
				templateUrl: 'templates/careers.html'
			})
	}])
