module.exports = {
    title: "Kickstand UI",
    description: "Kickstand UI is a Design System built using Web Components so you can use it Everywhere!",
    head: [
        [
            "meta",
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1, shrink-to-fit=no"
            }
        ],
        [
            "meta",
            {
                "http-equiv": "X-UA-Compatible",
                content: "IE=edge"
            }
        ],
        [
            "meta",
            {
                property: "og:image",
                content: "https://kickstand-ui.com/images/kickstand_card.png"
            }
        ],
        [
            "meta",
            {
                property: "og:title",
                content: "Kickstand UI"
            }
        ],
        [
            "meta",
            {
                property: "og:description",
                content: "Kickstand UI is a Design System built using Web Components so you can use it Everywhere!"
            }
        ],
        [
            "meta",
            {
                property: "twitter:image:src",
                content: "https://kickstand-ui.com/images/kickstand_card.png"
            }
        ],
        ["meta", { property: "twitter:card", content: "summary_large_image" }],
        ["meta", { property: "twitter:creator", content: "@stuffbreaker" }],
        ["meta", { property: "robots", content: "index, follow" }],
        ["meta", { property: "HandheldFriendly", content: "True" }],
        ["link", { rel: "icon", href: "/images/kickstand_icon.png" }]
    ],
    themeConfig: {
        logo: "/images/kickstand_logo_2.svg",
        nav: [
            {
                text: "Documentation",
                link: "/getting-started/installation.html"
            },
            {
                text: "Contact",
                link: "/contact.html"
            },
            {
                text: "NPM",
                link: "https://www.npmjs.com/package/kickstand-ui"
            },
            {
                text: "GitHub",
                link: "https://github.com/break-stuff/kickstand-ui"
            }
        ],
        sidebar: [
            {
                title: "Getting Started",
                collapsable: true,
                children: [
                    "./getting-started/installation.html",
                    "./getting-started/introduction.html",
                    "./getting-started/how-to-use.html",
                    {
                        title: "Framework Integrations",
                        children: [
                            "/getting-started/framework-integrations/overview.html",
                            {
                                title: "Angular",
                                path: "/getting-started/framework-integrations/angular.html"
                            },
                            {
                                title: "Ember",
                                path: "/getting-started/framework-integrations/ember.html"
                            },
                            {
                                title: "React",
                                path: "/getting-started/framework-integrations/react.html"
                            },
                            {
                                title: "Vue",
                                path: "/getting-started/framework-integrations/vue.html"
                            }
                        ]
                    }
                ]
            },
            {
                title: "Components",
                collapsable: true,
                children: [
                    "/components/accordion.html",
                    "/components/alert.html",
                    "/components/badge.html",
                    "/components/breadcrumbs.html",
                    "/components/button.html",
                    "/components/button-bar.html",
                    "/components/card.html",
                    "/components/carousel.html",
                    "/components/dropdown.html",
                    "/components/gallery.html",
                    "/components/icons.html",
                    "/components/images.html",
                    "/components/loading.html",
                    "/components/menu-bar.html",
                    "/components/modal.html",
                    "/components/overlay.html",
                    "/components/progress-bar.html",
                    "/components/responsive-embed.html",
                    "/components/scroll-to-top.html",
                    "/components/skip-to-content.html",
                    "/components/side-drawer.html",
                    "/components/switch.html",
                    "/components/tabs.html",
                    "/components/tooltip.html"
                ]
            },
            {
                title: "Forms",
                collapsable: true,
                children: [
                    "/forms/form.html",
                    "/forms/form-field.html",
                    "/forms/autocomplete.html",
                    "/forms/checkbox.html",
                    "/forms/checklist.html",
                    "/forms/color.html",
                    "/forms/datalist.html",
                    "/forms/date.html",
                    "/forms/email.html",
                    "/forms/file.html",
                    "/forms/number.html",
                    "/forms/password.html",
                    "/forms/radiolist.html",
                    "/forms/range.html",
                    "/forms/search.html",
                    "/forms/select.html",
                    "/forms/spin-box.html",
                    "/forms/telephone.html",
                    "/forms/text.html",
                    "/forms/textarea.html"
                ]
            },
            {
                title: "Layout",
                collapsable: true,
                children: ["/layout/grid.html", "/layout/flex-box.html"]
            },
            {
                title: "Utilities",
                collapsable: true,
                children: [
                    {
                        title: "DOM Utilities",
                        path: "/utilities/dom-utilities.html"
                    },
                    {
                        title: "Borders",
                        path: "/utilities/borders.html"
                    },
                    {
                        title: "Border Radiuses",
                        path: "/utilities/border-radiuses.html"
                    },
                    {
                        title: "Colors",
                        path: "/utilities/colors.html"
                    },
                    {
                        title: "Display",
                        path: "/utilities/display.html"
                    },
                    {
                        title: "Layout",
                        path: "/utilities/layout.html"
                    },
                    {
                        title: "Lists",
                        path: "/utilities/list.html"
                    },
                    {
                        title: "Position",
                        path: "/utilities/position.html"
                    },
                    {
                        title: "Shadows",
                        path: "/utilities/shadows.html"
                    },
                    {
                        title: "Spacing",
                        path: "/utilities/spacing.html"
                    },
                    {
                        title: "Table",
                        path: "/utilities/table.html"
                    },
                    {
                        title: "Text",
                        path: "/utilities/text.html"
                    }
                ]
            },
            '/iconography.html',
            {
                title: "Design Tokens",
                collapsable: true,
                children: [
                    "/design-tokens/overview.html",
                    {
                        title: "Border Radiuses",
                        path: "/design-tokens/border-radiuses.html"
                    },
                    {
                        title: "Borders",
                        path: "/design-tokens/borders.html"
                    },
                    {
                        title: "Colors",
                        path: "/design-tokens/colors.html"
                    },
                    {
                        title: "Containers",
                        path: "/design-tokens/containers.html"
                    },
                    {
                        title: "Fonts",
                        path: "/design-tokens/fonts.html"
                    },
                    {
                        title: "Media Queries",
                        path: "/design-tokens/media-queries.html"
                    },
                    {
                        title: "Outline",
                        path: "/design-tokens/outline.html"
                    },
                    {
                        title: "Responsive Embed",
                        path: "/design-tokens/responsive-embed.html"
                    },
                    {
                        title: "Shadows",
                        path: "/design-tokens/shadows.html"
                    },
                    {
                        title: "Spacing",
                        path: "/design-tokens/spacing.html"
                    },
                    {
                        title: "Transitions",
                        path: "/design-tokens/transitions.html"
                    },
                    {
                        title: "Z-Indexes",
                        path: "/design-tokens/z-index.html"
                    }
                ]
            },
            {
                title: "Guides",
                collapsable: true,
                children: [
                    // "/guides/overview.html",
                    "/guides/contact-form.html",
                    "/guides/password-confirmation.html",
                    "/guides/adding-search.html",
                    // "/guides/star-rating.html",
                ]
            },
            "changelog.html"
        ]
    },
    plugins: [
        [
            "@vuepress/google-analytics",
            {
                ga: "UA-106134260-3" // UA-00000000-0
            }
        ],
        [
            "sitemap",
            {
                hostname: "https://kickstand-ui.com/"
            }
        ]
    ]
};
