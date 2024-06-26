/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Context/postsDetail.context.js":
/*!********************************************!*\
  !*** ./src/Context/postsDetail.context.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostsDetailContext: () => (/* binding */ PostsDetailContext),
/* harmony export */   PostsDetailProvider: () => (/* binding */ PostsDetailProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _postsSettings_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./postsSettings.context */ "./src/Context/postsSettings.context.js");




const PostsDetailContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createContext)({
  isLoading: true,
  posts: [],
  totalPages: 1,
  totalPosts: 0,
  setPostsDetails: () => {}
});
const PostsDetailProvider = ({
  children,
  setAttributes,
  attributes
}) => {
  const settings = (0,_postsSettings_context__WEBPACK_IMPORTED_MODULE_3__.getPostsSettings)();
  const [postDetails, updatePostsDetails] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
    isLoading: true,
    posts: [],
    totalPages: 1,
    totalPosts: 0,
    setPostsDetails: value => {
      updatePostsDetails(prevState => {
        return {
          ...prevState,
          ...value
        };
      });
    }
  });
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const queryParams = {
      per_page: settings.perPage,
      page: settings.currentPage,
      orderby: settings.orderBy,
      order: settings.order
    };
    if ('' !== settings.type) {
      queryParams.type = settings.type;
    }
    if ('' !== settings.search) {
      queryParams.search = settings.search;
    }
    console.log(queryParams);
    console.log(settings);
    const url = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_2__.addQueryArgs)('/wp-json/wp/v2/posts', queryParams);
    fetch(url, {
      headers: {
        'X-WP-Nonce': SampleData.nonce
      }
    }).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (response.headers.get('X-WP-TotalPages')) {
        updatePostsDetails(prevState => ({
          ...prevState,
          totalPages: parseInt(response.headers.get('X-WP-TotalPages'))
        }));
      }
      if (response.headers.get('X-WP-Total')) {
        updatePostsDetails(prevState => ({
          ...prevState,
          totalPosts: parseInt(response.headers.get('X-WP-Total'))
        }));
      }
      return response.json();
    }).then(data => {
      updatePostsDetails(prevState => {
        return {
          ...prevState,
          posts: data,
          isLoading: false
        };
      });

      // Update the block's attributes with fetched data
    }).catch(error => {
      console.error(error);
      updatePostsDetails(prevState => {
        return {
          ...prevState,
          posts: [],
          isLoading: false
        };
      });

      // Update the block's attributes with fetched data
      setAttributes({
        ...attributes,
        posts: []
      });
    });
  }, [settings]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PostsDetailContext.Provider, {
    value: postDetails
  }, children);
};

/***/ }),

/***/ "./src/Context/postsSettings.context.js":
/*!**********************************************!*\
  !*** ./src/Context/postsSettings.context.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostsSettingsProvider: () => (/* binding */ PostsSettingsProvider),
/* harmony export */   getPostsSettings: () => (/* binding */ getPostsSettings),
/* harmony export */   usePostsSettings: () => (/* binding */ usePostsSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


const PostsSettingsContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const usePostsSettings = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(PostsSettingsContext);
const getPostsSettings = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(PostsSettingsContext).getSettings();
const PostsSettingsProvider = ({
  children,
  initialSettings,
  setAttributes
}) => {
  const [settings, setSettings] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(initialSettings);
  const updateSettings = newSettings => {
    setSettings(prevSettings => ({
      ...prevSettings,
      ...newSettings.postsSettings
    }));
    setAttributes({
      postsSettings: {
        ...settings,
        ...newSettings.postsSettings
      }
    });
  };
  const getSettings = () => {
    return settings;
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PostsSettingsContext.Provider, {
    value: {
      settings,
      updateSettings,
      getSettings
    }
  }, children);
};

/***/ }),

/***/ "./src/Context/postsStyles.context.js":
/*!********************************************!*\
  !*** ./src/Context/postsStyles.context.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostsStylesProvider: () => (/* binding */ PostsStylesProvider),
/* harmony export */   getPostsStyles: () => (/* binding */ getPostsStyles),
/* harmony export */   usePostsStyles: () => (/* binding */ usePostsStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


const PostsStylesContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const usePostsStyles = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(PostsStylesContext);
const getPostsStyles = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(PostsStylesContext).getStyles();
const PostsStylesProvider = ({
  children,
  initialStyles,
  setAttributes
}) => {
  const [styles, setStyles] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(initialStyles);
  const updateStyles = newStyles => {
    setStyles(prevStyles => ({
      ...prevStyles,
      ...newStyles.postsStyles
    }));
    setAttributes({
      postsStyles: {
        ...styles,
        ...newStyles.postsStyles
      }
    });
  };
  const getStyles = () => {
    return styles;
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PostsStylesContext.Provider, {
    value: {
      styles,
      updateStyles,
      getStyles
    }
  }, children);
};

/***/ }),

/***/ "./src/components/BlockSettings.js":
/*!*****************************************!*\
  !*** ./src/components/BlockSettings.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Context_postsDetail_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Context/postsDetail.context */ "./src/Context/postsDetail.context.js");
/* harmony import */ var _Context_postsSettings_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Context/postsSettings.context */ "./src/Context/postsSettings.context.js");






const BlockSettings = () => {
  const {
    settings,
    updateSettings
  } = (0,_Context_postsSettings_context__WEBPACK_IMPORTED_MODULE_5__.usePostsSettings)();
  const postDetails = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useContext)(_Context_postsDetail_context__WEBPACK_IMPORTED_MODULE_4__.PostsDetailContext);
  const {
    totalPages
  } = postDetails;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Settings', 'sample-block'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Search', 'sample-block'),
    value: settings.search,
    onChange: value => updateSettings({
      postsSettings: {
        ...settings,
        search: value
      }
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Order', 'sample-block'),
    options: [{
      value: 'desc',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Descending', 'sample-block')
    }, {
      value: 'asc',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Ascending', 'sample-block')
    }],
    onChange: value => updateSettings({
      postsSettings: {
        ...settings,
        order: value
      }
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Order By', 'sample-block'),
    options: [{
      value: 'date',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Date', 'sample-block')
    }, {
      value: 'id',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('ID', 'sample-block')
    }, {
      value: 'title',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Title', 'sample-block')
    }, {
      value: 'slug',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Slug', 'sample-block')
    }, {
      value: 'modified',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Last Modified', 'sample-block')
    }],
    onChange: value => updateSettings({
      postsSettings: {
        ...settings,
        orderBy: value
      }
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Posts per page', 'sample-block'),
    type: "number",
    value: settings.perPage,
    onChange: value => updateSettings({
      postsSettings: {
        ...settings,
        perPage: value
      }
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Current Page', 'sample-block'),
    value: settings.currentPage,
    options: Array.from({
      length: totalPages
    }, (v, i) => ({
      value: i + 1,
      label: i + 1
    })),
    onChange: value => updateSettings({
      postsSettings: {
        ...settings,
        currentPage: value
      }
    })
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockSettings);

/***/ }),

/***/ "./src/components/BlockStyles.js":
/*!***************************************!*\
  !*** ./src/components/BlockStyles.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Context_postsStyles_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Context/postsStyles.context */ "./src/Context/postsStyles.context.js");





const BlockStyles = () => {
  const {
    styles,
    updateStyles
  } = (0,_Context_postsStyles_context__WEBPACK_IMPORTED_MODULE_4__.usePostsStyles)();
  const {
    postsLayout
  } = styles;
  const handlePostsLayoutChange = newLayout => {
    updateStyles({
      postsStyles: {
        postsLayout: newLayout ? 'grid' : 'list'
      }
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
    icon: "list-view",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('List Layout', 'GrowwBuddy'),
    onClick: () => handlePostsLayoutChange(false),
    isPressed: postsLayout === 'list'
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
    icon: "grid-view",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Grid Layout', 'GrowwBuddy'),
    onClick: () => handlePostsLayoutChange(true),
    isPressed: postsLayout === 'grid'
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockStyles);

/***/ }),

/***/ "./src/components/Post.js":
/*!********************************!*\
  !*** ./src/components/Post.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context_postsStyles_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Context/postsStyles.context */ "./src/Context/postsStyles.context.js");
/* harmony import */ var _images_default_post_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/default-post.png */ "./src/images/default-post.png");



const Post = props => {
  const postStyle = (0,_Context_postsStyles_context__WEBPACK_IMPORTED_MODULE_1__.getPostsStyles)();
  const {
    postsLayout
  } = postStyle;
  const {
    post
  } = props;
  console.log(post);
  const postTitle = post.title.rendered;
  const postLink = post.link;
  const featuredImg = post.featured_img ? post.featured_img : _images_default_post_png__WEBPACK_IMPORTED_MODULE_2__;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "item is-collapsed"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "item-container "
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "item-cover"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "avatar"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: featuredImg
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "item-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "subhead-1 activator",
    href: postLink
  }, postTitle))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);

/***/ }),

/***/ "./src/components/Posts.js":
/*!*********************************!*\
  !*** ./src/components/Posts.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Post */ "./src/components/Post.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Context_postsDetail_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Context/postsDetail.context */ "./src/Context/postsDetail.context.js");
/* harmony import */ var _Context_postsStyles_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Context/postsStyles.context */ "./src/Context/postsStyles.context.js");







const Posts = () => {
  const postDetails = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useContext)(_Context_postsDetail_context__WEBPACK_IMPORTED_MODULE_5__.PostsDetailContext);
  const {
    posts,
    isLoading,
    totalPosts
  } = postDetails;
  if (isLoading) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "sample-block-post-block-loading"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Spinner, null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Loading...', 'sample-block'));
  }
  const hasPosts = posts && posts.length > 0;
  if (!hasPosts) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "sample-block-post-block-loading"
    }, totalPosts > 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Spinner, null) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No post found.', 'sample-block'));
  }
  const postStyle = (0,_Context_postsStyles_context__WEBPACK_IMPORTED_MODULE_6__.getPostsStyles)();
  const {
    postsLayout
  } = postStyle;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gridlist-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `gridlist ${postsLayout === 'grid' ? 'gridview' : 'listview'}`
  }, posts.map((post, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Post__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: index,
      post: post
    });
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Posts);

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _Context_postsSettings_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Context/postsSettings.context */ "./src/Context/postsSettings.context.js");
/* harmony import */ var _Context_postsStyles_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Context/postsStyles.context */ "./src/Context/postsStyles.context.js");
/* harmony import */ var _Context_postsDetail_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Context/postsDetail.context */ "./src/Context/postsDetail.context.js");
/* harmony import */ var _components_BlockSettings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/BlockSettings */ "./src/components/BlockSettings.js");
/* harmony import */ var _components_BlockStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/BlockStyles */ "./src/components/BlockStyles.js");
/* harmony import */ var _components_Posts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Posts */ "./src/components/Posts.js");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */








/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
function Edit(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    postsLayout
  } = attributes.postsStyles;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: 'sample-block-groups-blocks ' + (postsLayout === 'grid' ? 'sample-block-groups-blocks--grid' : 'sample-block-groups-blocks--list')
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Context_postsSettings_context__WEBPACK_IMPORTED_MODULE_4__.PostsSettingsProvider, {
    initialSettings: attributes.postsSettings,
    setAttributes: setAttributes
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Context_postsStyles_context__WEBPACK_IMPORTED_MODULE_5__.PostsStylesProvider, {
    initialStyles: attributes.postsStyles,
    setAttributes: setAttributes
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Context_postsDetail_context__WEBPACK_IMPORTED_MODULE_6__.PostsDetailProvider, {
    setAttributes: setAttributes,
    attributes: attributes
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_BlockSettings__WEBPACK_IMPORTED_MODULE_7__["default"], null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_BlockStyles__WEBPACK_IMPORTED_MODULE_8__["default"], null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Posts__WEBPACK_IMPORTED_MODULE_9__["default"], null)))));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/images/default-post.png":
/*!*************************************!*\
  !*** ./src/images/default-post.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/default-post.0d8980ca.png";

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ ((module) => {

module.exports = window["wp"]["url"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"hardip/sample-block","version":"0.1.0","title":"Sample block","category":"widgets","icon":"smiley","description":"Example block scaffolded with Create Block tool.","example":{},"attributes":{"postsStyles":{"type":"object","default":{"postsLayout":"grid"}},"postsSettings":{"type":"object","default":{"search":"","perPage":10,"currentPage":1,"order":"desc","orderBy":"date"}}},"supports":{"html":false},"textdomain":"sample-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScript":"file:./view.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunksample_block"] = globalThis["webpackChunksample_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map