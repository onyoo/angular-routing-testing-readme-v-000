describe('Routes', function() {
	var $state;

	beforeEach(module('app'));
	beforeEach(inject(function($injector) {
		$state = $injector.get('$state');
	}));

	describe('Settings', function() {
		var state;
		it('should have the correct URL', function() {
			state = $state.get('settings');
			expect(state.url).toEqual('/settings');
		});
		it('should have the correct template', function() {
			expect(state.templateUrl).toEqual('views/settings.html')
		})
	});

	describe('User', function() {
		var state;
		it('should have the correct URL for User profile', function() {
			state = $state.get('settings.user');
			expect(state.url).toEqual('/user')
		});
		it('should have the correct template', function() {
			expect(state.templateUrl).toEqual('views/settings/user.html')
		});
	});

	describe('Notifications', function() {
		var state;
		it('should have have the correct URL for the notifications page', function() {
			state = $state.get('settings.notifications');
			expect(state.url).toEqual('/notifications')
		});
		it('should access the propper template', function() {
			expect(state.templateUrl).toEqual('views/settings/notifications.html');
		});
	});
});
//
// describe('Routes', function () {
// 	var $state;
//
// 	beforeEach(module('app'));
//
// 	beforeEach(inject(function ($injector) {
// 		$state = $injector.get('$state');
// 	}));
//
// 	describe('Settings', function () {
// 		var state;
//
// 		it('should have the correct URL', function () {
// 			state = $state.get('settings');
//
// 			expect(state.url).toEqual('/settings');
// 		});
// 	});
// });
