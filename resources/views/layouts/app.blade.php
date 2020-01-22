<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body class="bg-gradient-default">
    <div id="app">
		<!-- <xb-menu appname="{{ config('app.name', 'Laravel') }}"></xb-menu> -->
		<router-view name="menu" appname="{{ config('app.name', 'L') }}"></router-view>
		<main>
			<fade-transition origin="center" mode="out-in" :duration="250">
				<router-view></router-view>
				{{-- @yield('content') --}}
            </fade-transition>
        </main>
    </div>
</body>
</html>
