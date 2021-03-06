'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Application documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/FsDateModule.html" data-type="entity-link">FsDateModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FsDateModule-a20383a00f2cbb4cdad4fd7af48ef102"' : 'data-target="#xs-components-links-module-FsDateModule-a20383a00f2cbb4cdad4fd7af48ef102"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FsDateModule-a20383a00f2cbb4cdad4fd7af48ef102"' :
                                            'id="xs-components-links-module-FsDateModule-a20383a00f2cbb4cdad4fd7af48ef102"' }>
                                            <li class="link">
                                                <a href="components/FsDateAgoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FsDateAgoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-FsDateModule-a20383a00f2cbb4cdad4fd7af48ef102"' : 'data-target="#xs-pipes-links-module-FsDateModule-a20383a00f2cbb4cdad4fd7af48ef102"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-FsDateModule-a20383a00f2cbb4cdad4fd7af48ef102"' :
                                            'id="xs-pipes-links-module-FsDateModule-a20383a00f2cbb4cdad4fd7af48ef102"' }>
                                            <li class="link">
                                                <a href="pipes/FsDateAgoPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FsDateAgoPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/FsDateDurationPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FsDateDurationPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/FsDateFormatPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FsDateFormatPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/FsDatePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FsDatePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/FsDateRangePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FsDateRangePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/FsDateAgoFactory.html" data-type="entity-link">FsDateAgoFactory</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});