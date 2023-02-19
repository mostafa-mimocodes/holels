<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" {{session()->has('rtl') ? 'direction=rtl' : null}} style="{{session()->has('rtl') ?'direction:rtl;' : null}}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">

        <link rel="shortcut icon" href="{{ asset('storage/media/logos/' . App\Setting::first()->favicon) }}" />

        {{-- Fonts --}}
        {{ Mimocodes::getGoogleFontsInclude() }}
        {{-- Global Theme Styles (used by all pages) --}}
        @foreach(config('layout.resources.css') as $style)
            <link href="{{ session()->has('rtl')  ? asset(Mimocodes::rtlCssPath($style)) : asset($style) }}" rel="stylesheet" type="text/css"/>
        @endforeach


        {{-- Layout Themes (used by all pages) --}}
        @foreach (Mimocodes::initThemes() as $theme)
            <link href="{{ session()->has('rtl') ? asset(Mimocodes::rtlCssPath($theme)) : asset($theme) }}" rel="stylesheet" type="text/css"/>
    @endforeach
        <script>
            var BASE_URL = "{{asset('/')}}";
        </script>

    {{-- Includable CSS --}}


    @yield('styles')




        <!-- Scripts -->
        @routes
        @inertiaHead
    </head>
    <body id="kt_body" class="header-fixed header-mobile-fixed subheader-enabled subheader-fixed aside-enabled aside-fixed aside-minimize-hoverable page-loading ">

            @inertia

            <script>
                var KTAppSettings = {!! json_encode(config('layout.js'), JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES) !!};
            </script>

            {{-- Global Theme JS Bundle (used by all pages)  --}}
            @foreach(config('layout.resources.js') as $script)
                <script src="{{ asset($script) }}" type="text/javascript"></script>
            @endforeach

            <script type="text/javascript" src="{{ asset('admin_assets/plugins/jquery.dataTables/jquery.dataTables.min.js') }}">
            </script>
            <script type="text/javascript"src="{{ asset('admin_assets/plugins/dataTables.bootstrap/dataTables.bootstrap.min.js') }}"></script>
            <script src="https://cdn.datatables.net/select/1.3.1/js/dataTables.select.min.js"></script>
            <script src="{{asset("js/metronic/pages/crud/forms/widgets/select2.js")}}"></script>


            {{-- Includable JS --}}
            @yield('scripts')
            <script src="{{asset('js/metronic/pages/custom/profile/profile.js')}}"></script>
{{--            <script src="{{asset('js/metronic/pages/features/miscellaneous/toastr.js')}}"></script>--}}


            @vite(['resources/css/app.css', 'resources/js/app.js'])


    </body>
</html>
