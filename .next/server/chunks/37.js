exports.id = 37;
exports.ids = [37];
exports.modules = {

/***/ 95577:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23))

/***/ }),

/***/ 95243:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 87202))

/***/ }),

/***/ 78076:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 56529))

/***/ }),

/***/ 10715:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 43107))

/***/ }),

/***/ 66105:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 35447))

/***/ }),

/***/ 87202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/index.js
var node = __webpack_require__(17421);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(55601);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
// EXTERNAL MODULE: ./node_modules/@tabler/icons-react/dist/cjs/tabler-icons-react.js
var tabler_icons_react = __webpack_require__(29674);
;// CONCATENATED MODULE: ./src/app/(DashboardLayout)/layout/header/Profile.tsx






const Profile = ()=>{
    const router = (0,navigation.useRouter)();
    const [anchorEl2, setAnchorEl2] = (0,react_.useState)(null);
    const handleClick2 = (event)=>{
        setAnchorEl2(event.currentTarget);
    };
    const handleClose2 = ()=>{
        setAnchorEl2(null);
    };
    const theme = (0,styles.useTheme)();
    const primary = theme.palette.primary.main;
    const primarylight = theme.palette.primary.light;
    const error = theme.palette.error.main;
    const errorlight = theme.palette.error.light;
    const success = theme.palette.success.main;
    const successlight = theme.palette.success.light;
    /*profile data*/ const profiledata = [
        {
            href: "/",
            title: "My Profile",
            subtitle: "Account Settings",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconCurrencyDollar */.IWo, {
                width: "20",
                height: "20"
            }),
            color: primary,
            lightcolor: primarylight
        },
        {
            href: "/",
            title: "My Inbox",
            subtitle: "Messages & Emails",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconShield */.xq1, {
                width: "20",
                height: "20"
            }),
            color: success,
            lightcolor: successlight
        },
        {
            href: "/",
            title: "My Tasks",
            subtitle: "To-do and Daily Tasks",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconCreditCard */.bln, {
                width: "20",
                height: "20"
            }),
            color: error,
            lightcolor: errorlight
        }
    ];
    const handleLogout = ()=>{
        // Clear the login state from localStorage
        localStorage.removeItem("isLoggedIn");
        // Redirect to the login page
        window.location.href = "login";
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Box, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.IconButton, {
                size: "large",
                "aria-label": "menu",
                color: "inherit",
                "aria-controls": "msgs-menu",
                "aria-haspopup": "true",
                sx: {
                    ...typeof anchorEl2 === "object" && {
                        borderRadius: "9px"
                    }
                },
                onClick: handleClick2,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(node.Avatar, {
                        src: "/images/users/user2.jpg",
                        alt: "ProfileImg",
                        sx: {
                            width: 30,
                            height: 30
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Box, {
                        sx: {
                            display: {
                                xs: "none",
                                sm: "flex"
                            },
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(node.Typography, {
                                color: "textSecondary",
                                variant: "h5",
                                fontWeight: "400",
                                sx: {
                                    ml: 1
                                },
                                children: "Hi,"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(node.Typography, {
                                variant: "h5",
                                fontWeight: "700",
                                sx: {
                                    ml: 1
                                },
                                children: "Julia"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconChevronDown */.C26, {
                                width: "20",
                                height: "20"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Menu, {
                id: "msgs-menu",
                anchorEl: anchorEl2,
                keepMounted: true,
                open: Boolean(anchorEl2),
                onClose: handleClose2,
                anchorOrigin: {
                    horizontal: "right",
                    vertical: "bottom"
                },
                transformOrigin: {
                    horizontal: "right",
                    vertical: "top"
                },
                sx: {
                    "& .MuiMenu-paper": {
                        width: "360px",
                        p: 2,
                        pb: 2,
                        pt: 0
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(node.Box, {
                        pt: 0
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(node.Divider, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(node.Box, {
                        mt: 2,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(node.Button, {
                            fullWidth: true,
                            variant: "contained",
                            color: "primary",
                            onClick: handleLogout,
                            children: "Logout"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const header_Profile = (Profile);

;// CONCATENATED MODULE: ./src/app/(DashboardLayout)/layout/header/Search.tsx




const Search = ()=>{
    // drawer top
    const [showDrawer2, setShowDrawer2] = (0,react_.useState)(false);
    const handleDrawerClose2 = ()=>{
        setShowDrawer2(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(node.IconButton, {
                "aria-label": "show 4 new mails",
                color: "inherit",
                "aria-controls": "search-menu",
                "aria-haspopup": "true",
                onClick: ()=>setShowDrawer2(true),
                size: "large",
                children: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconSearch */.jVj, {
                    height: "20",
                    width: "20",
                    strokeWidth: "1.5"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(node.Drawer, {
                anchor: "top",
                open: showDrawer2,
                onClose: ()=>setShowDrawer2(false),
                sx: {
                    "& .MuiDrawer-paper": {
                        padding: "15px 30px"
                    }
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Box, {
                    display: "flex",
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(node.Input, {
                            placeholder: "Search here",
                            "aria-label": "description",
                            fullWidth: true
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(node.Box, {
                            sx: {
                                ml: "auto"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(node.IconButton, {
                                // color="inherit"
                                // sx={{
                                //   color: (theme) => theme.palette.grey.A200,
                                // }}
                                onClick: handleDrawerClose2,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconX */.kLi, {
                                    height: "20",
                                    width: "20"
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const header_Search = (Search);

;// CONCATENATED MODULE: ./src/app/(DashboardLayout)/layout/header/Notification.tsx





const Notifications = ()=>{
    const [anchorEl, setAnchorEl] = (0,react_.useState)(null);
    const [notifications, setNotifications] = (0,react_.useState)([]);
    const router = (0,navigation.useRouter)();
    (0,react_.useEffect)(()=>{
        const fetchNotifications = async ()=>{
            try {
                const response = await fetch("http://3.27.194.81:8000/notifications");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                console.log("data", data);
                setNotifications(data);
            } catch (error) {
                console.error("Error fetching notifications:", error);
                setNotifications([]);
            }
        };
        fetchNotifications();
        const intervalId = setInterval(fetchNotifications, 15000);
        return ()=>clearInterval(intervalId);
    }, []);
    const handleClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    const handleNotificationClick = (notification)=>{
        router.push(`/notification-details?camera_id=${notification.camera_id}&frame_id=${notification.frame_id}`);
        handleClose();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Box, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(node.IconButton, {
                size: "large",
                "aria-label": "show notifications",
                color: "inherit",
                onClick: handleClick,
                children: /*#__PURE__*/ jsx_runtime_.jsx(node.Badge, {
                    badgeContent: notifications.length,
                    color: "error",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconBell */.YK1, {
                        width: "20",
                        height: "20"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Menu, {
                id: "notifications-menu",
                anchorEl: anchorEl,
                keepMounted: true,
                open: Boolean(anchorEl),
                onClose: handleClose,
                anchorOrigin: {
                    horizontal: "right",
                    vertical: "bottom"
                },
                transformOrigin: {
                    horizontal: "right",
                    vertical: "top"
                },
                sx: {
                    "& .MuiMenu-paper": {
                        width: "360px",
                        p: 2,
                        pb: 2,
                        pt: 0
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(node.Box, {
                        pt: 2,
                        pb: 1,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(node.Typography, {
                            variant: "h6",
                            children: "Notifications"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(node.List, {
                        children: Array.isArray(notifications) && notifications.map((notification)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.ListItem, {
                                alignItems: "flex-start",
                                onClick: ()=>handleNotificationClick(notification),
                                sx: {
                                    cursor: "pointer"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(node.ListItemAvatar, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(node.Avatar, {
                                            alt: "User Avatar",
                                            src: notification.avatar
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(node.ListItemText, {
                                        primary: notification.title,
                                        secondary: notification.description
                                    })
                                ]
                            }, notification.id))
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(node.Box, {
                        mt: 2,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(node.Button, {
                            fullWidth: true,
                            variant: "contained",
                            color: "primary",
                            children: "View All Notifications"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Notification = (Notifications);

;// CONCATENATED MODULE: ./src/app/(DashboardLayout)/layout/header/Header.tsx




// components




const Header = ({ toggleMobileSidebar })=>{
    // const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
    // const lgDown = useMediaQuery((theme) => theme.breakpoints.down('lg'));
    const AppBarStyled = (0,node.styled)(node.AppBar)(({ theme })=>({
            boxShadow: "none",
            background: theme.palette.background.paper,
            justifyContent: "center",
            backdropFilter: "blur(4px)",
            [theme.breakpoints.up("lg")]: {
                minHeight: "70px"
            }
        }));
    const ToolbarStyled = (0,node.styled)(node.Toolbar)(({ theme })=>({
            width: "100%",
            color: theme.palette.text.secondary
        }));
    return /*#__PURE__*/ jsx_runtime_.jsx(AppBarStyled, {
        position: "sticky",
        color: "default",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ToolbarStyled, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(node.IconButton, {
                    color: "inherit",
                    "aria-label": "menu",
                    onClick: toggleMobileSidebar,
                    sx: {
                        display: {
                            lg: "none",
                            xs: "inline"
                        }
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconMenu2 */._AG, {
                        width: "20",
                        height: "20"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(header_Search, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(node.Box, {
                    flexGrow: 1
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Stack, {
                    spacing: 1,
                    direction: "row",
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Notification, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(header_Profile, {})
                    ]
                })
            ]
        })
    });
};
Header.propTypes = {
    sx: (prop_types_default()).object
};
/* harmony default export */ const header_Header = (Header);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/app/(DashboardLayout)/layout/shared/logo/Logo.tsx




const LinkStyled = (0,node.styled)((link_default()))(()=>({
        height: "100px",
        width: "180px",
        overflow: "hidden",
        display: "block"
    }));
const Logo = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(LinkStyled, {
        href: "/",
        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            src: "/images/logos/neuweb.png",
            alt: "logo",
            height: 100,
            width: 100,
            priority: true
        })
    });
};
/* harmony default export */ const logo_Logo = (Logo);

// EXTERNAL MODULE: ./node_modules/lodash/uniqueId.js
var uniqueId = __webpack_require__(1740);
var uniqueId_default = /*#__PURE__*/__webpack_require__.n(uniqueId);
;// CONCATENATED MODULE: ./src/app/(DashboardLayout)/layout/sidebar/MenuItems.tsx


const Menuitems = [
    // {
    //   id: uniqueId(),
    //   title: "Dashboard",
    //   icon: IconHome,
    //   href: "/",
    // },
    // {
    //   id: uniqueId(),
    //   title: "Buttons",
    //   icon: IconCircleDot,
    //   href: "/ui-components/buttons",
    // },
    // {
    //   id: uniqueId(),
    //   title: "Forms",
    //   icon: IconTable,
    //   href: "/ui-components/forms",
    // },
    // {
    //   id: uniqueId(),
    //   title: "Alerts",
    //   icon: IconInfoCircle,
    //   href: "/ui-components/alerts",
    // },
    // {
    //   id: uniqueId(),
    //   title: "Ratings",
    //   icon: IconStar,
    //   href: "/ui-components/ratings",
    // },
    // {
    //   id: uniqueId(),
    //   title: "Images",
    //   icon: IconPhoto,
    //   href: "/ui-components/images",
    // },
    // {
    //   id: uniqueId(),
    //   title: "Pagination",
    //   icon: IconUser,
    //   href: "/ui-components/pagination",
    // },
    {
        id: uniqueId_default()(),
        title: "Cameras",
        icon: tabler_icons_react/* IconLayoutGrid */.lp2,
        href: "/camera-dashboard"
    }
];
/* harmony default export */ const MenuItems = (Menuitems);

;// CONCATENATED MODULE: ./src/app/(DashboardLayout)/layout/sidebar/NavItem/index.tsx


// mui imports


const NavItem = ({ item, level, pathDirect, onClick })=>{
    const Icon = item.icon;
    const theme = (0,node.useTheme)();
    const itemIcon = /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
        stroke: 1.5,
        size: "1.3rem"
    });
    const ListItemStyled = (0,node.styled)(node.ListItem)(()=>({
            padding: 0,
            ".MuiButtonBase-root": {
                whiteSpace: "nowrap",
                marginBottom: "8px",
                padding: "8px 10px",
                borderRadius: "8px",
                backgroundColor: level > 1 ? "transparent !important" : "inherit",
                color: theme.palette.text.secondary,
                paddingLeft: "10px",
                "&:hover": {
                    backgroundColor: theme.palette.primary.light,
                    color: theme.palette.primary.main
                },
                "&.Mui-selected": {
                    color: "white",
                    backgroundColor: theme.palette.primary.main,
                    "&:hover": {
                        backgroundColor: theme.palette.primary.main,
                        color: "white"
                    }
                }
            }
        }));
    return /*#__PURE__*/ jsx_runtime_.jsx(node.List, {
        component: "div",
        disablePadding: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx(ListItemStyled, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.ListItemButton, {
                component: (link_default()),
                href: item.href,
                disabled: item.disabled,
                selected: pathDirect === item.href,
                target: item.external ? "_blank" : "",
                onClick: onClick,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(node.ListItemIcon, {
                        sx: {
                            minWidth: "36px",
                            p: "3px 0",
                            color: "inherit"
                        },
                        children: itemIcon
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(node.ListItemText, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                            children: item.title
                        })
                    })
                ]
            })
        })
    }, item.id);
};
/* harmony default export */ const sidebar_NavItem = (NavItem);

;// CONCATENATED MODULE: ./src/app/(DashboardLayout)/layout/sidebar/SidebarItems.tsx






const SidebarItems = ({ toggleMobileSidebar })=>{
    const pathname = (0,navigation.usePathname)();
    const pathDirect = pathname;
    return /*#__PURE__*/ jsx_runtime_.jsx(node.Box, {
        sx: {
            px: 2
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(node.List, {
            sx: {
                pt: 0
            },
            className: "sidebarNav",
            component: "div",
            children: MenuItems.map((item)=>{
                // {/********SubHeader**********/}
                // if (item.subheader) {
                //   return <NavGroup item={item} key={item.subheader} />;
                //   // {/********If Sub Menu**********/}
                //   /* eslint no-else-return: "off" */
                // } else {
                return /*#__PURE__*/ jsx_runtime_.jsx(sidebar_NavItem, {
                    item: item,
                    pathDirect: pathDirect,
                    onClick: toggleMobileSidebar
                }, item.id);
            })
        })
    });
};
/* harmony default export */ const sidebar_SidebarItems = (SidebarItems);

;// CONCATENATED MODULE: ./src/app/(DashboardLayout)/layout/sidebar/Sidebar.tsx




const Sidebar = ({ isMobileSidebarOpen, onSidebarClose, isSidebarOpen })=>{
    const lgUp = (0,node.useMediaQuery)((theme)=>theme.breakpoints.up("lg"));
    const sidebarWidth = "270px";
    if (lgUp) {
        return /*#__PURE__*/ jsx_runtime_.jsx(node.Box, {
            sx: {
                width: sidebarWidth,
                flexShrink: 0
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(node.Drawer, {
                anchor: "left",
                open: isSidebarOpen,
                variant: "permanent",
                PaperProps: {
                    sx: {
                        width: sidebarWidth,
                        boxSizing: "border-box",
                        border: "0",
                        boxShadow: "rgba(113, 122, 131, 0.11) 0px 7px 30px 0px"
                    }
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Box, {
                    sx: {
                        height: "100%"
                    },
                    py: 2,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(node.Box, {
                            px: 2,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(logo_Logo, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(node.Box, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(node.Box, {
                                mt: 3,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(sidebar_SidebarItems, {})
                            })
                        })
                    ]
                })
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Drawer, {
        anchor: "left",
        open: isMobileSidebarOpen,
        onClose: onSidebarClose,
        variant: "temporary",
        PaperProps: {
            sx: {
                width: sidebarWidth,
                boxShadow: (theme)=>theme.shadows[8]
            }
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(node.Box, {
                px: 2,
                py: 2,
                children: /*#__PURE__*/ jsx_runtime_.jsx(logo_Logo, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(sidebar_SidebarItems, {})
        ]
    });
};
/* harmony default export */ const sidebar_Sidebar = (Sidebar);

// EXTERNAL MODULE: ./src/app/(DashboardLayout)/layout/footer/page.tsx
var page = __webpack_require__(95038);
;// CONCATENATED MODULE: ./src/app/(DashboardLayout)/layout.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






const MainWrapper = (0,node.styled)("div")(()=>({
        display: "flex",
        minHeight: "100vh",
        width: "100%"
    }));
const PageWrapper = (0,node.styled)("div")(()=>({
        display: "flex",
        flexGrow: 1,
        paddingBottom: "60px",
        flexDirection: "column",
        zIndex: 1,
        backgroundColor: "transparent"
    }));
function RootLayout({ children }) {
    const [isSidebarOpen, setSidebarOpen] = (0,react_.useState)(true);
    const [isMobileSidebarOpen, setMobileSidebarOpen] = (0,react_.useState)(false);
    const [isLoggedIn, setIsLoggedIn] = (0,react_.useState)(null);
    const router = (0,navigation.useRouter)();
    (0,react_.useEffect)(()=>{
        const checkLoginStatus = async ()=>{
            const loggedIn = await checkUserLoginStatus();
            setIsLoggedIn(loggedIn);
            if (!loggedIn) {
                router.push("/login");
            }
        };
        checkLoginStatus();
    }, [
        router
    ]);
    if (isLoggedIn === null) {
        // Still checking login status
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: "Loading..."
        });
    }
    if (!isLoggedIn) {
        // User is not logged in, render children (which should be the login page)
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: children
        });
    }
    // User is logged in, render the dashboard layout
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MainWrapper, {
        className: "mainwrapper",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(sidebar_Sidebar, {
                isSidebarOpen: isSidebarOpen,
                isMobileSidebarOpen: isMobileSidebarOpen,
                onSidebarClose: ()=>setMobileSidebarOpen(false)
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PageWrapper, {
                className: "page-wrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(header_Header, {
                        toggleMobileSidebar: ()=>setMobileSidebarOpen(true)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Container, {
                        sx: {
                            paddingTop: "20px",
                            maxWidth: "1200px"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(node.Box, {
                                sx: {
                                    minHeight: "calc(100vh - 170px)"
                                },
                                children: children
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(page["default"], {})
                        ]
                    })
                ]
            })
        ]
    });
}
async function checkUserLoginStatus() {
    // Implement your login check logic here
    // For example, check for a valid token in localStorage or make an API call
    // Return true if logged in, false otherwise
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    return isLoggedIn;
}


/***/ }),

/***/ 95038:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17421);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const Footer = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
        sx: {
            pt: 6,
            textAlign: "center"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
            children: [
                "\xa9 ",
                new Date().getFullYear(),
                " All rights reserved by",
                " ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "neuwbetech.com",
                    children: "Neuwebtech.com"
                }),
                " "
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 56529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99360);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43872);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function Loading() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {
        sx: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_2___default()), {})
    });
}


/***/ }),

/***/ 43107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/utils/theme/DefaultColors.tsx","import":"DM_Sans","arguments":[{"weight":["400","500","700"],"subsets":["latin"],"display":"swap","fallback":["Helvetica","Arial","sans-serif"]}],"variableName":"dm"}
var DefaultColors_tsx_import_DM_Sans_arguments_weight_400_500_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_dm_ = __webpack_require__(88221);
var DefaultColors_tsx_import_DM_Sans_arguments_weight_400_500_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_dm_default = /*#__PURE__*/__webpack_require__.n(DefaultColors_tsx_import_DM_Sans_arguments_weight_400_500_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_dm_);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
;// CONCATENATED MODULE: ./src/utils/theme.ts

// Create a theme instance.
const theme = (0,styles.createTheme)({
    palette: {
        primary: {
            main: "#03c9d7",
            light: "#e5fafb",
            dark: "#05b2bd",
            contrastText: "#ffffff"
        },
        secondary: {
            main: "#fb9678",
            light: "#fcf1ed",
            dark: "#e67e5f",
            contrastText: "#ffffff"
        },
        success: {
            main: "#00c292",
            light: "#ebfaf2",
            dark: "#00964b",
            contrastText: "#ffffff"
        },
        info: {
            main: "#0bb2fb",
            light: "#a7e3f4",
            dark: "#0bb2fb",
            contrastText: "#ffffff"
        },
        error: {
            main: "#e46a76",
            light: "#fdf3f5",
            dark: "#e45a68",
            contrastText: "#ffffff"
        },
        warning: {
            main: "#fec90f",
            light: "#fff4e5",
            dark: "#dcb014",
            contrastText: "#ffffff"
        }
    }
});
/* harmony default export */ const utils_theme = (theme);

;// CONCATENATED MODULE: ./src/utils/theme/DefaultColors.tsx



const baselightTheme = (0,styles.createTheme)({
    direction: "ltr",
    palette: {
        primary: {
            main: "#03c9d7",
            light: "#e5fafb",
            dark: "#05b2bd",
            contrastText: "#ffffff"
        },
        secondary: {
            main: "#fb9678",
            light: "#fcf1ed",
            dark: "#e67e5f",
            contrastText: "#ffffff"
        },
        success: {
            main: "#00c292",
            light: "#ebfaf2",
            dark: "#00964b",
            contrastText: "#ffffff"
        },
        info: {
            main: "#0bb2fb",
            light: "#a7e3f4",
            dark: "#0bb2fb",
            contrastText: "#ffffff"
        },
        error: {
            main: "#e46a76",
            light: "#fdf3f5",
            dark: "#e45a68",
            contrastText: "#ffffff"
        },
        warning: {
            main: "#fec90f",
            light: "#fff4e5",
            dark: "#dcb014",
            contrastText: "#ffffff"
        },
        // purple: {
        //   A50: "#EBF3FE",
        //   A100: "#6610f2",
        //   A200: "#557fb9",
        //   contrastText: "#ffffff",
        // },
        grey: {
            100: "#F2F6FA",
            200: "#EAEFF4",
            300: "#DFE5EF",
            400: "#767e89",
            500: "#5A6A85",
            600: "#2A3547"
        },
        text: {
            primary: "#000",
            secondary: "rgba(0,0,0,0.87)"
        },
        action: {
            disabledBackground: "rgba(73,82,88,0.12)",
            hoverOpacity: 0.02,
            hover: "#f6f9fc"
        },
        divider: "#e5eaef",
        background: {
            default: "#fafbfb",
            paper: "#fafbfb"
        }
    },
    typography: {
        fontFamily: (DefaultColors_tsx_import_DM_Sans_arguments_weight_400_500_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_dm_default()).style.fontFamily,
        h1: {
            fontWeight: 500,
            fontSize: "1.875rem",
            lineHeight: "1.5"
        },
        h2: {
            fontWeight: 500,
            fontSize: "1.5rem",
            lineHeight: "1.5"
        },
        h3: {
            fontWeight: 500,
            fontSize: "1.3125rem",
            lineHeight: "1.5"
        },
        h4: {
            fontWeight: 500,
            fontSize: "1.125rem",
            lineHeight: "1.5"
        },
        h5: {
            fontWeight: 500,
            fontSize: "1rem",
            lineHeight: "1.5"
        },
        h6: {
            fontWeight: 500,
            fontSize: "0.875rem",
            lineHeight: "1.5"
        },
        button: {
            textTransform: "none",
            fontWeight: "400"
        },
        subtitle1: {
            fontSize: "1rem",
            fontWeight: "400"
        },
        subtitle2: {
            fontSize: "0.875rem",
            fontWeight: "400"
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                ".MuiPaper-elevation9, .MuiPopover-root .MuiPaper-elevation": {
                    boxShadow: "0px 7px 30px 0px rgba(90, 114, 123, 0.11) !important"
                },
                a: {
                    textDecoration: "none"
                }
            }
        },
        MuiButtonGroup: {
            styleOverrides: {
                root: {
                    boxShadow: "none"
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    boxShadow: "none"
                }
            }
        },
        MuiFab: {
            styleOverrides: {
                root: {
                    boxShadow: "none"
                }
            }
        },
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    padding: "16px 24px"
                },
                title: {
                    fontSize: "1.125rem"
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: "20px",
                    padding: "0",
                    boxShadow: "0px 7px 30px 0px rgba(90, 114, 123, 0.11)"
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: "30px"
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottom: `1px solid #e5eaef`
                }
            }
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    "&:last-child td": {
                        borderBottom: 0
                    }
                }
            }
        },
        MuiAlert: {
            styleOverrides: {
                filledSuccess: {
                    color: "white"
                },
                filledInfo: {
                    color: "white"
                },
                filledError: {
                    color: "white"
                },
                filledWarning: {
                    color: "white"
                },
                standardSuccess: {
                    backgroundColor: utils_theme.palette.success.light,
                    color: utils_theme.palette.success.main
                },
                standardError: {
                    backgroundColor: utils_theme.palette.error.light,
                    color: utils_theme.palette.error.main
                },
                standardWarning: {
                    backgroundColor: utils_theme.palette.warning.light,
                    color: utils_theme.palette.warning.main
                },
                standardInfo: {
                    backgroundColor: utils_theme.palette.info.light,
                    color: utils_theme.palette.info.main
                },
                outlinedSuccess: {
                    borderColor: utils_theme.palette.success.main,
                    color: utils_theme.palette.success.main
                },
                outlinedWarning: {
                    borderColor: utils_theme.palette.warning.main,
                    color: utils_theme.palette.warning.main
                },
                outlinedError: {
                    borderColor: utils_theme.palette.error.main,
                    color: utils_theme.palette.error.main
                },
                outlinedInfo: {
                    borderColor: utils_theme.palette.info.main,
                    color: utils_theme.palette.info.main
                }
            }
        }
    }
});



// EXTERNAL MODULE: ./node_modules/@mui/material/node/CssBaseline/index.js
var CssBaseline = __webpack_require__(98331);
;// CONCATENATED MODULE: ./src/app/layout.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles.ThemeProvider, {
                theme: baselightTheme,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(CssBaseline["default"], {}),
                    children
                ]
            })
        })
    });
}


/***/ }),

/***/ 35447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99360);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43872);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function Loading() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {
        sx: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_2___default()), {})
    });
}


/***/ }),

/***/ 72520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/thainguyen/Working/Neuweb/DashboardResponsive/src/app/(DashboardLayout)/layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 5886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/thainguyen/Working/Neuweb/DashboardResponsive/src/app/(DashboardLayout)/loading.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 74053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/thainguyen/Working/Neuweb/DashboardResponsive/src/app/layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 88924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/thainguyen/Working/Neuweb/DashboardResponsive/src/app/loading.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 73881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ })

};
;