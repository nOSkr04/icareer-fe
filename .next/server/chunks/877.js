"use strict";
exports.id = 877;
exports.ids = [877];
exports.modules = {

/***/ 5877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Footer_Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Footer/footerOne.json
const footerOne_namespaceObject = JSON.parse('[0,{"id":2,"title":"","quicklink":[{"id":1,"text":"","url":""},{"id":2,"text":"","url":""},{"id":3,"text":"","url":""},{"id":4,"text":"","url":""},{"id":5,"text":"","url":""}]},{"id":3,"title":"Тусламж","quicklink":[{"id":1,"text":"Утасаар холбогдох","url":"/contact"},{"id":2,"text":"Эмайл бичих","url":"/contact"},{"id":3,"text":"Хаяг байршил","url":"/contact"}]},{"id":4,"title":"Холбоо барих","quicklink":[{"id":3,"text":"Сэтгүүлийн үйлчилгээний нөхцөл","url":"/Privacy-policy"},{"id":4,"text":" ","url":"/work"}]},0,{"id":6,"title":"Нийгмийн сүлжээн дэх хаягууд","subtitle":"Та манай хаягуудыг дагаж тогтмол мэдээллээр хангагдаарай"}]');
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
;// CONCATENATED MODULE: ./src/components/Footer/Footer.js





const footerIntemOne = footerOne_namespaceObject[1];
const footerIntemTwo = footerOne_namespaceObject[2];
const footerIntemThree = footerOne_namespaceObject[3];
const footerIntemFive = footerOne_namespaceObject[5];
const indexOneLink = footerIntemOne.quicklink;
const indexThreeLink = footerIntemThree.quicklink;
const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("footer", {
            className: "rn-footer footer-style-default no-border",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "footer-top",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-4 col-md-6 col-sm-6 col-12",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "rn-footer-widget",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                        className: "text-big",
                                        children: [
                                            "Новелист Тайм ХХК ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            " 2022 он"
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-2 col-md-6 col-sm-6 col-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "rn-footer-widget",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "title",
                                            children: footerIntemOne.title
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "inner",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                className: "footer-link link-hover",
                                                children: indexOneLink.map((data, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: `${data.url}`,
                                                            children: data.text
                                                        })
                                                    }, index))
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-2 col-md-6 col-sm-6 col-12",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "rn-footer-widget",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "widget-menu-top",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "title",
                                                children: footerIntemTwo.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "inner",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "footer-link link-hover",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "www.novelistgroup.com/upload/brochure.pdf",
                                                                target: "_blank",
                                                                children: "Сурталчилгаа тавих үнийн санал"
                                                            })
                                                        }),
                                                        indexThreeLink.map((data, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: `${data.url}`,
                                                                    children: data.text
                                                                })
                                                            }, index))
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-4 col-md-6 col-sm-6 col-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "rn-footer-widget",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "title",
                                            children: footerIntemFive.title
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "inner",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    className: "subtitle",
                                                    children: footerIntemFive.subtitle
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "social-icon social-default justify-content-start",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "www.facebook.com/careerdevelopermagazine",
                                                                target: "_blank",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiFacebook, {})
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "www.instagram.com/career_magazine/",
                                                                target: "_blank",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiInstagram, {})
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "www.linkedin.com/showcase/career-developer-magazine",
                                                                target: "_blank",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiLinkedin, {})
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const Footer_Footer = (Footer);


/***/ })

};
;