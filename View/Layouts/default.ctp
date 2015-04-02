<!doctype html>
<html lang="pt_BR" ng-app="app">
<head>
	<meta charset="utf-8">
	<title>Plataforma M.I.</title>
	<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css" rel="stylesheet" media="screen">
	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="css/app.css"/>
</head>
<body ng-controller="AppCtrl">
	<header class="header">
		<div class="content">
			<div class="col-md-3">
				<a class="logo" href="#">
					<img src="{{base_url}}/img/logo-pmi.png">
				</a>
			</div>
			<div class="col-md-9 header-options text-right">
				<a class="opt user-options pull-right">
					<i class="fa fa-chevron-down"></i>
				</a>

				<div class="user-profile pull-right">
					E
				</div>
			</div>		
		</div>
		<div class="clearfix"></div>
	</header>

	<section class="container">
		<div class="col-md-3">
		<div class="br10"></div>		
			<div class="navbar navbar-fixed">
				<div class="navbar-inner">
					<a class="brand" href="#">
						<msg key="title"></msg>
					</a>
					<ul class="nav">
						<li ng-class="activeWhen(path() == '/posts')">
							<a href="#/posts">Cursos</a>
						</li>
						<li ng-class="activeWhen(path() == '/new-post')">
							<a href="#/new-post">Novo curso</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="col-md-9">
		<div class="br30"></div>		
			<ng-view></ng-view>
		</div>
	</section>
	<footer>
		2012 &copy; <?php echo date('Y') ?> Plataforma M.I.
	</footer>
	<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
	<script type="text/javascript" src="http://code.jquery.com/jquery-2.1.3.min.js"></script>
	<script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/app.js"></script>
	<script type="text/javascript" src="js/services.js"></script>
	<script type="text/javascript" src="js/controllers.js"></script>
	<script type="text/javascript" src="js/filters.js"></script>
	<script type="text/javascript" src="js/directives.js"></script>
</body>
</html>
