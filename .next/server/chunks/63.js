"use strict";
exports.id = 63;
exports.ids = [63];
exports.modules = {

/***/ 8063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ header_HeaderOne)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./src/elements/logo/Logo.js





const Logo_Logo = ({ image , image2  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "logo",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
            href: "/",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    className: "logo-light",
                    src: image,
                    alt: "Corporate Logo"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    className: "logo-dark",
                    src: image2,
                    alt: "Corporate Logo"
                })
            ]
        })
    });
};
Logo_Logo.propTypes = {
    image: (external_prop_types_default()).string
};
/* harmony default export */ const logo_Logo = (Logo_Logo);

;// CONCATENATED MODULE: ./src/common/header/Nav.js



const Nav_Nav = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        className: "mainmenu",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: "Эхлэл"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/news",
                    children: "Мэдээ"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/pricing",
                    children: "Захиалга"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/contact",
                    children: "Холбоо барих"
                })
            })
        ]
    });
};
/* harmony default export */ const header_Nav = (Nav_Nav);

;// CONCATENATED MODULE: ./src/common/header/MobileMenu.js





const MobileMenu = ({ show , onClose  })=>{
    var elements = document.querySelectorAll(".popup-mobile-menu .has-droupdown > a");
    var elementsTwo = document.querySelectorAll(".popup-mobile-menu .with-megamenu > a");
    for(var i in elements){
        if (elements.hasOwnProperty(i)) {
            elements[i].onclick = function() {
                this.parentElement.querySelector(".submenu").classList.toggle("active");
                this.classList.toggle("open");
            };
        }
    }
    for(var i in elementsTwo){
        if (elementsTwo.hasOwnProperty(i)) {
            elementsTwo[i].onclick = function() {
                this.parentElement.querySelector(".rn-megamenu").classList.toggle("active");
                this.classList.toggle("open");
            };
        }
    }
    return /*#__PURE__*/ _jsx("div", {
        className: `popup-mobile-menu ${show ? "active" : ""}`,
        children: /*#__PURE__*/ _jsxs("div", {
            className: "inner",
            children: [
                /*#__PURE__*/ _jsxs("div", {
                    className: "header-top",
                    children: [
                        /*#__PURE__*/ _jsx(Logo, {
                            image: `/images/ihelp/careerWhite.png`,
                            image2: `/images/ihelp/careerBlack.png`
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "close-menu",
                            children: /*#__PURE__*/ _jsx("span", {
                                className: "close-button",
                                onClick: onClose,
                                children: /*#__PURE__*/ _jsx(FiX, {})
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx(Nav, {})
            ]
        })
    });
};
/* harmony default export */ const header_MobileMenu = ((/* unused pure expression or super */ null && (MobileMenu)));

;// CONCATENATED MODULE: ./src/common/header/Darkmode.js


const Darkmode = ()=>{
    const switchTheme = (e)=>{
        document.querySelector("body").classList.toggle("light");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        id: "darkmode",
        onClick: (e)=>switchTheme(e),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                className: "light-icon",
                src: `/images/icons/sun-01.svg`,
                alt: "Sun images"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                className: "dark-icon",
                src: `/images/icons/vector.svg`,
                alt: "Sun images"
            })
        ]
    });
};
/* harmony default export */ const header_Darkmode = (Darkmode);

;// CONCATENATED MODULE: ./src/common/header/useIsomorphicLayoutEffect.js

const useIsomorphicLayoutEffect =  false ? 0 : external_react_.useEffect;
/* harmony default export */ const header_useIsomorphicLayoutEffect = (useIsomorphicLayoutEffect);

;// CONCATENATED MODULE: ./src/common/header/useStickyHeader.js


const useStickyHeader = (offset = 0)=>{
    const [stick, setStick] = (0,external_react_.useState)(false);
    const handleScroll = ()=>{
        setStick(window.scrollY > offset);
    };
    header_useIsomorphicLayoutEffect(()=>{
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    });
    return stick;
};
/* harmony default export */ const header_useStickyHeader = (useStickyHeader);

;// CONCATENATED MODULE: ./src/common/header/HeaderOne.js








const HeaderOne = ({ btnStyle , HeaderSTyle  })=>{
    const [ofcanvasShow, setOffcanvasShow] = (0,external_react_.useState)(false);
    const onCanvasHandler = ()=>{
        setOffcanvasShow((prev)=>!prev);
    };
    const ref = (0,external_react_.useRef)();
    let [check, setCheck] = (0,external_react_.useState)(true);
    const sticky = header_useStickyHeader(50);
    const headerClasses = `header-default ${sticky && check ? "sticky" : ""}`;
    const { clientHeight  } = ref;
    const checkChange = (value)=>{
        setCheck(value);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("header", {
            ref: ref,
            className: `rn-header header-default ${HeaderSTyle} ${headerClasses}`,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container position-relative",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row align-items-center row--0",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-3 col-md-6 col-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(logo_Logo, {
                                image: `/images/ihelp/faceLogo.png`,
                                image2: `/images/ihelp/faceLogoBlack.png`
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-9 col-md-6 col-8 position-static",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "header-right",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                        className: "mainmenu-nav d-none d-lg-block",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(header_Nav, {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "mobile-menu-bar ml--5 d-block d-lg-none",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "hamberger",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "hamberger-button",
                                                onClick: onCanvasHandler,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiMenu, {})
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(header_Darkmode, {})
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const header_HeaderOne = (HeaderOne);


/***/ })

};
;