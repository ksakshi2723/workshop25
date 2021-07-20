<script>
		var app = angular.module('myApp', []);
		app.controller('datCtrl', function ($scope) {
			$scope.dateValue = new Date();
		});
	</script>
</body>