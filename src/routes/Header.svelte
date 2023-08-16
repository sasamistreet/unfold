<script>
    import UIkit from 'uikit';
	import Icons from 'uikit/dist/js/uikit-icons'
	UIkit.use(Icons);
    UIkit.navbar();
</script>
<header>
    <nav class="uk-navbar-container">
        <div class="uk-container">
            <div data-uk-navbar>
                <div class="uk-navbar-left">
                    <a class="uk-navbar-item uk-logo" href="#4" aria-label="Back to Home">Logo</a>
                </div>
                <div class="uk-navbar-center">
                    <div class="uk-navbar-item">
                        <form class="uk-search uk-search-default">
                            <span class="uk-search-icon-flip" data-uk-search-icon></span>
                            <input class="uk-search-input" type="search" placeholder="Search" aria-label="Search">
                        </form>
                    </div>
                </div>
                <div class="uk-navbar-right">
                    <ul class="uk-iconnav">
                        <li><a href="#1"><span data-uk-icon="icon: bag"></span><span class="uk-badge">2</span></a></li>
                        <li><a href="#2" data-uk-icon="icon: bell"> </a></li>
                        <li><a href="#3" data-uk-icon="icon: user"> </a></li>
                    </ul>
                </div>
    
            </div>
        </div>
    </nav>
</header>