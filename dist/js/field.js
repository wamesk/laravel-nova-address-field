/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@fawmi/vue-google-maps/src/components/build-component.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@fawmi/vue-google-maps/src/components/build-component.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   mappedPropsToVueProps: () => (/* binding */ mappedPropsToVueProps)
/* harmony export */ });
/* harmony import */ var _utils_bindEvents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/bindEvents.js */ "./node_modules/@fawmi/vue-google-maps/src/utils/bindEvents.js");
/* harmony import */ var _utils_bindProps_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/bindProps.js */ "./node_modules/@fawmi/vue-google-maps/src/utils/bindProps.js");
/* harmony import */ var _mapElementMixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapElementMixin */ "./node_modules/@fawmi/vue-google-maps/src/components/mapElementMixin.js");




/**
 *
 * @param {Object} options
 * @param {Object} options.mappedProps - Definitions of props
 * @param {Object} options.mappedProps.PROP.type - Value type
 * @param {Boolean} options.mappedProps.PROP.twoWay
 *  - Whether the prop has a corresponding PROP_changed
 *   event
 * @param {Boolean} options.mappedProps.PROP.noBind
 *  - If true, do not apply the default bindProps / bindEvents.
 * However it will still be added to the list of component props
 * @param {Object} options.props - Regular Vue-style props.
 *  Note: must be in the Object form because it will be
 *  merged with the `mappedProps`
 *
 * @param {Object} options.events - Google Maps API events
 *  that are not bound to a corresponding prop
 * @param {String} options.name - e.g. `polyline`
 * @param {=> String} options.ctr - constructor, e.g.
 *  `google.maps.Polyline`. However, since this is not
 *  generally available during library load, this becomes
 *  a function instead, e.g. () => google.maps.Polyline
 *  which will be called only after the API has been loaded
 * @param {(MappedProps, OtherVueProps) => Array} options.ctrArgs -
 *   If the constructor in `ctr` needs to be called with
 *   arguments other than a single `options` object, e.g. for
 *   GroundOverlay, we call `new GroundOverlay(url, bounds, options)`
 *   then pass in a function that returns the argument list as an array
 *
 * Otherwise, the constructor will be called with an `options` object,
 *   with property and values merged from:
 *
 *   1. the `options` property, if any
 *   2. a `map` property with the Google Maps
 *   3. all the properties passed to the component in `mappedProps`
 * @param {Object => Any} options.beforeCreate -
 *  Hook to modify the options passed to the initializer
 * @param {(options.ctr, Object) => Any} options.afterCreate -
 *  Hook called when
 *
 */
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(options) {
  const {
    mappedProps,
    name,
    ctr,
    ctrArgs,
    events,
    beforeCreate,
    afterCreate,
    props,
    ...rest
  } = options

  const promiseName = `$${name}Promise`
  const instanceName = `$${name}Object`

  assert(!(rest.props instanceof Array), '`props` should be an object, not Array')

  return {
    ...(typeof GENERATE_DOC !== 'undefined' ? { $vgmOptions: options } : {}),
    mixins: [_mapElementMixin__WEBPACK_IMPORTED_MODULE_2__["default"]],
    props: {
      ...props,
      ...mappedPropsToVueProps(mappedProps),
    },
    render() {
      return ''
    },
    provide() {
      const promise = this.$mapPromise
        .then((map) => {
          // Infowindow needs this to be immediately available
          this.$map = map

          // Initialize the maps with the given options
          const options = {
            ...this.options,
            map,
            ...(0,_utils_bindProps_js__WEBPACK_IMPORTED_MODULE_1__.getPropsValues)(this, mappedProps),
          }
          delete options.options // delete the extra options

          if (beforeCreate) {
            const result = beforeCreate.bind(this)(options)

            if (result instanceof Promise) {
              return result.then(() => ({ options }))
            }
          }
          return { options }
        })
        .then(({ options }) => {
          const ConstructorObject = ctr()
          // https://stackoverflow.com/questions/1606797/use-of-apply-with-new-operator-is-this-possible
          this[instanceName] = ctrArgs
            ? new (Function.prototype.bind.call(
                ConstructorObject,
                null,
                ...ctrArgs(options, (0,_utils_bindProps_js__WEBPACK_IMPORTED_MODULE_1__.getPropsValues)(this, props || {}))
              ))()
            : new ConstructorObject(options)

          ;(0,_utils_bindProps_js__WEBPACK_IMPORTED_MODULE_1__.bindProps)(this, this[instanceName], mappedProps)
          ;(0,_utils_bindEvents_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, this[instanceName], events)

          if (afterCreate) {
            afterCreate.bind(this)(this[instanceName])
          }
          return this[instanceName]
        })
      this[promiseName] = promise
      return { [promiseName]: promise }
    },
    unmounted() {
      // Note: not all Google Maps components support maps
      if (this[instanceName] && this[instanceName].setMap) {
        this[instanceName].setMap(null)
      }
    },
    ...rest,
  }
}

function assert(v, message) {
  if (!v) throw new Error(message)
}

/**
 * Strips out the extraneous properties we have in our
 * props definitions
 * @param {Object} props
 */
function mappedPropsToVueProps(mappedProps) {
  return Object.entries(mappedProps)
    .map(([key, prop]) => {
      const value = {}

      if ('type' in prop) value.type = prop.type
      if ('default' in prop) value.default = prop.default
      if ('required' in prop) value.required = prop.required

      return [key, value]
    })
    .reduce((acc, [key, val]) => {
      acc[key] = val
      return acc
    }, {})
}


/***/ }),

/***/ "./node_modules/@fawmi/vue-google-maps/src/components/circle.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@fawmi/vue-google-maps/src/components/circle.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _build_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./build-component */ "./node_modules/@fawmi/vue-google-maps/src/components/build-component.js");


const props = {
  center: {
    type: Object,
    twoWay: true,
    required: true,
  },
  radius: {
    type: Number,
    twoWay: true,
  },
  draggable: {
    type: Boolean,
    default: false,
  },
  editable: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Object,
    twoWay: false,
  },
}

const events = [
  'click',
  'dblclick',
  'drag',
  'dragend',
  'dragstart',
  'mousedown',
  'mousemove',
  'mouseout',
  'mouseover',
  'mouseup',
  'rightclick',
]

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_build_component__WEBPACK_IMPORTED_MODULE_0__["default"])({
  mappedProps: props,
  name: 'circle',
  ctr: () => google.maps.Circle,
  events,
}));


/***/ }),

/***/ "./node_modules/@fawmi/vue-google-maps/src/components/heatmap.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@fawmi/vue-google-maps/src/components/heatmap.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _build_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./build-component.js */ "./node_modules/@fawmi/vue-google-maps/src/components/build-component.js");


const props = {
  options: {
    type: Object,
    twoWay: false,
    default: () => {
    },
  },
  data: {
    type: Array,
    twoWay: true
  },
}

const events = [];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_build_component_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
  mappedProps: props,
  name: 'heatmap',
  ctr: () => google.maps.visualization.HeatmapLayer,
  events,
}));




/***/ }),

/***/ "./node_modules/@fawmi/vue-google-maps/src/components/mapElementMixin.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@fawmi/vue-google-maps/src/components/mapElementMixin.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @class MapElementMixin
 *
 * Extends components to include the following fields:
 *
 * @property $map        The Google map (valid only after the promise returns)
 *
 *
 * */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  inject: {
    $mapPromise: { default: 'abcdef' },
  },

  provide() {
    // Note: although this mixin is not "providing" anything,
    // components' expect the `$map` property to be present on the component.
    // In order for that to happen, this mixin must intercept the $mapPromise
    // .then(() =>) first before its component does so.
    //
    // Since a provide() on a mixin is executed before a provide() on the
    // component, putting this code in provide() ensures that the $map is
    // already set by the time the
    // component's provide() is called.
    this.$mapPromise.then((map) => {
      this.$map = map
    })

    return {}
  },
});


/***/ }),

/***/ "./node_modules/@fawmi/vue-google-maps/src/components/polygon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@fawmi/vue-google-maps/src/components/polygon.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _build_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./build-component.js */ "./node_modules/@fawmi/vue-google-maps/src/components/build-component.js");


const props = {
  draggable: {
    type: Boolean,
  },
  editable: {
    type: Boolean,
  },
  options: {
    type: Object,
  },
  path: {
    type: Array,
    twoWay: true,
    noBind: true,
  },
  paths: {
    type: Array,
    twoWay: true,
    noBind: true,
  },
}

const events = [
  'click',
  'dblclick',
  'drag',
  'dragend',
  'dragstart',
  'mousedown',
  'mousemove',
  'mouseout',
  'mouseover',
  'mouseup',
  'rightclick',
]

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_build_component_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
  props: {
    deepWatch: {
      type: Boolean,
      default: false,
    },
  },
  events,
  mappedProps: props,
  name: 'polygon',
  ctr: () => google.maps.Polygon,

  beforeCreate(options) {
    if (!options.path) delete options.path
    if (!options.paths) delete options.paths
  },

  afterCreate(inst) {
    let clearEvents = () => {}

    // Watch paths, on our own, because we do not want to set either when it is
    // empty
    this.$watch(
      'paths',
      (paths) => {
        if (paths) {
          clearEvents()

          inst.setPaths(paths)

          const updatePaths = () => {
            this.$emit('paths_changed', inst.getPaths())
          }
          const eventListeners = []

          const mvcArray = inst.getPaths()
          for (let i = 0; i < mvcArray.getLength(); i++) {
            let mvcPath = mvcArray.getAt(i)
            eventListeners.push([mvcPath, mvcPath.addListener('insert_at', updatePaths)])
            eventListeners.push([mvcPath, mvcPath.addListener('remove_at', updatePaths)])
            eventListeners.push([mvcPath, mvcPath.addListener('set_at', updatePaths)])
          }
          eventListeners.push([mvcArray, mvcArray.addListener('insert_at', updatePaths)])
          eventListeners.push([mvcArray, mvcArray.addListener('remove_at', updatePaths)])
          eventListeners.push([mvcArray, mvcArray.addListener('set_at', updatePaths)])

          clearEvents = () => {
            eventListeners.map((
              [obj, listenerHandle] // eslint-disable-line no-unused-vars
            ) => google.maps.event.removeListener(listenerHandle))
          }
        }
      },
      {
        deep: this.deepWatch,
        immediate: true,
      }
    )

    this.$watch(
      'path',
      (path) => {
        if (path) {
          clearEvents()

          inst.setPaths(path)

          const mvcPath = inst.getPath()
          const eventListeners = []

          const updatePaths = () => {
            this.$emit('path_changed', inst.getPath())
          }

          eventListeners.push([mvcPath, mvcPath.addListener('insert_at', updatePaths)])
          eventListeners.push([mvcPath, mvcPath.addListener('remove_at', updatePaths)])
          eventListeners.push([mvcPath, mvcPath.addListener('set_at', updatePaths)])

          clearEvents = () => {
            eventListeners.map((
              [obj, listenerHandle] // eslint-disable-line no-unused-vars
            ) => google.maps.event.removeListener(listenerHandle))
          }
        }
      },
      {
        deep: this.deepWatch,
        immediate: true,
      }
    )
  },
}));


/***/ }),

/***/ "./node_modules/@fawmi/vue-google-maps/src/components/polyline.js":
/*!************************************************************************!*\
  !*** ./node_modules/@fawmi/vue-google-maps/src/components/polyline.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _build_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./build-component.js */ "./node_modules/@fawmi/vue-google-maps/src/components/build-component.js");


const props = {
  draggable: {
    type: Boolean,
  },
  editable: {
    type: Boolean,
  },
  options: {
    twoWay: false,
    type: Object,
  },
  path: {
    type: Array,
    twoWay: true,
  },
}

const events = [
  'click',
  'dblclick',
  'drag',
  'dragend',
  'dragstart',
  'mousedown',
  'mousemove',
  'mouseout',
  'mouseover',
  'mouseup',
  'rightclick',
]

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_build_component_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
  mappedProps: props,
  props: {
    deepWatch: {
      type: Boolean,
      default: false,
    },
  },
  events,

  name: 'polyline',
  ctr: () => google.maps.Polyline,

  afterCreate() {
    let clearEvents = () => {}

    this.$watch(
      'path',
      (path) => {
        if (path) {
          clearEvents()

          this.$polylineObject.setPath(path)

          const mvcPath = this.$polylineObject.getPath()
          const eventListeners = []

          const updatePaths = () => {
            this.$emit('path_changed', this.$polylineObject.getPath())
          }

          eventListeners.push([mvcPath, mvcPath.addListener('insert_at', updatePaths)])
          eventListeners.push([mvcPath, mvcPath.addListener('remove_at', updatePaths)])
          eventListeners.push([mvcPath, mvcPath.addListener('set_at', updatePaths)])

          clearEvents = () => {
            eventListeners.map((
              [obj, listenerHandle] // eslint-disable-line no-unused-vars
            ) => google.maps.event.removeListener(listenerHandle))
          }
        }
      },
      {
        deep: this.deepWatch,
        immediate: true,
      }
    )
  },
}));


/***/ }),

/***/ "./node_modules/@fawmi/vue-google-maps/src/components/rectangle.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@fawmi/vue-google-maps/src/components/rectangle.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _build_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./build-component.js */ "./node_modules/@fawmi/vue-google-maps/src/components/build-component.js");


const props = {
  bounds: {
    type: Object,
    twoWay: true,
  },
  draggable: {
    type: Boolean,
    default: false,
  },
  editable: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Object,
    twoWay: false,
  },
}

const events = [
  'click',
  'dblclick',
  'drag',
  'dragend',
  'dragstart',
  'mousedown',
  'mousemove',
  'mouseout',
  'mouseover',
  'mouseup',
  'rightclick',
]

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_build_component_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
  mappedProps: props,
  name: 'rectangle',
  ctr: () => google.maps.Rectangle,
  events,
}));


/***/ }),

/***/ "./node_modules/@fawmi/vue-google-maps/src/load-google-maps.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@fawmi/vue-google-maps/src/load-google-maps.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadGMapApi: () => (/* binding */ loadGMapApi)
/* harmony export */ });
/* harmony import */ var _utils_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/env */ "./node_modules/@fawmi/vue-google-maps/src/utils/env.js");
/* harmony import */ var _utils_create_map_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/create-map-script */ "./node_modules/@fawmi/vue-google-maps/src/utils/create-map-script.js");



let isApiSetUp = false
function loadGMapApi (options) {

  if (_utils_env__WEBPACK_IMPORTED_MODULE_0__.Env.isServer()) {
    return;
  }

  if (!isApiSetUp) {
    isApiSetUp = true
    const googleMapScript = (0,_utils_create_map_script__WEBPACK_IMPORTED_MODULE_1__.createMapScript)(options);
    document.head.appendChild(googleMapScript)
  } else {
    throw new Error('You already started the loading of google maps')
  }
}


/***/ }),

/***/ "./node_modules/@fawmi/vue-google-maps/src/main.js":
/*!*********************************************************!*\
  !*** ./node_modules/@fawmi/vue-google-maps/src/main.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Autocomplete: () => (/* reexport safe */ _components_autocomplete_vue__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   Circle: () => (/* reexport safe */ _components_circle__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   GMapCluster: () => (/* reexport safe */ _components_cluster_vue__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   Heatmap: () => (/* reexport safe */ _components_heatmap__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   InfoWindow: () => (/* reexport safe */ _components_infoWindow_vue__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   Map: () => (/* reexport safe */ _components_map_vue__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   MapElementMixin: () => (/* reexport safe */ _components_mapElementMixin__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   Marker: () => (/* reexport safe */ _components_marker_vue__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   MountableMixin: () => (/* reexport safe */ _utils_mountableMixin__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   Polygon: () => (/* reexport safe */ _components_polygon__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   Polyline: () => (/* reexport safe */ _components_polyline__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   Rectangle: () => (/* reexport safe */ _components_rectangle__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   buildComponent: () => (/* reexport safe */ _components_build_component__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   "default": () => (/* binding */ install),
/* harmony export */   loadGMapApi: () => (/* reexport safe */ _load_google_maps__WEBPACK_IMPORTED_MODULE_1__.loadGMapApi)
/* harmony export */ });
/* harmony import */ var _utils_lazyValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/lazyValue */ "./node_modules/@fawmi/vue-google-maps/src/utils/lazyValue.js");
/* harmony import */ var _load_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-google-maps */ "./node_modules/@fawmi/vue-google-maps/src/load-google-maps.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_polyline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/polyline */ "./node_modules/@fawmi/vue-google-maps/src/components/polyline.js");
/* harmony import */ var _components_polygon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/polygon */ "./node_modules/@fawmi/vue-google-maps/src/components/polygon.js");
/* harmony import */ var _components_circle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/circle */ "./node_modules/@fawmi/vue-google-maps/src/components/circle.js");
/* harmony import */ var _components_rectangle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/rectangle */ "./node_modules/@fawmi/vue-google-maps/src/components/rectangle.js");
/* harmony import */ var _components_marker_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/marker.vue */ "./node_modules/@fawmi/vue-google-maps/src/components/marker.vue");
/* harmony import */ var _components_cluster_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/cluster.vue */ "./node_modules/@fawmi/vue-google-maps/src/components/cluster.vue");
/* harmony import */ var _components_infoWindow_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/infoWindow.vue */ "./node_modules/@fawmi/vue-google-maps/src/components/infoWindow.vue");
/* harmony import */ var _components_map_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/map.vue */ "./node_modules/@fawmi/vue-google-maps/src/components/map.vue");
/* harmony import */ var _components_heatmap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/heatmap */ "./node_modules/@fawmi/vue-google-maps/src/components/heatmap.js");
/* harmony import */ var _components_autocomplete_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/autocomplete.vue */ "./node_modules/@fawmi/vue-google-maps/src/components/autocomplete.vue");
/* harmony import */ var _components_mapElementMixin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/mapElementMixin */ "./node_modules/@fawmi/vue-google-maps/src/components/mapElementMixin.js");
/* harmony import */ var _components_build_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/build-component */ "./node_modules/@fawmi/vue-google-maps/src/components/build-component.js");
/* harmony import */ var _utils_mountableMixin__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils/mountableMixin */ "./node_modules/@fawmi/vue-google-maps/src/utils/mountableMixin.js");
/* harmony import */ var _utils_env__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utils/env */ "./node_modules/@fawmi/vue-google-maps/src/utils/env.js");


















let GMapApi = null;



function install(Vue, options) {
  options = {
    installComponents: true,
    autobindAllEvents: false,
    ...options,
  }

  GMapApi = (0,vue__WEBPACK_IMPORTED_MODULE_2__.createApp)({
    data: function () {
      return { gmapApi: null }
    },
  })

  const defaultResizeBus = (0,vue__WEBPACK_IMPORTED_MODULE_2__.createApp)()

  // Use a lazy to only load the API when
  // a VGM component is loaded
  let gmapApiPromiseLazy = makeGMapApiPromiseLazy(options)

  Vue.mixin({
    created() {
      this.$gmapDefaultResizeBus = defaultResizeBus
      this.$gmapOptions = options
      this.$gmapApiPromiseLazy = gmapApiPromiseLazy
    },
  })
  Vue.$gmapDefaultResizeBus = defaultResizeBus
  Vue.$gmapApiPromiseLazy = gmapApiPromiseLazy

  if (options.installComponents) {
    Vue.component('GMapMap', _components_map_vue__WEBPACK_IMPORTED_MODULE_10__["default"])
    Vue.component('GMapMarker', _components_marker_vue__WEBPACK_IMPORTED_MODULE_7__["default"])
    Vue.component('GMapInfoWindow', _components_infoWindow_vue__WEBPACK_IMPORTED_MODULE_9__["default"])
    Vue.component('GMapCluster', _components_cluster_vue__WEBPACK_IMPORTED_MODULE_8__["default"])
    Vue.component('GMapPolyline', _components_polyline__WEBPACK_IMPORTED_MODULE_3__["default"])
    Vue.component('GMapPolygon', _components_polygon__WEBPACK_IMPORTED_MODULE_4__["default"])
    Vue.component('GMapCircle', _components_circle__WEBPACK_IMPORTED_MODULE_5__["default"])
    Vue.component('GMapRectangle', _components_rectangle__WEBPACK_IMPORTED_MODULE_6__["default"])
    Vue.component('GMapAutocomplete', _components_autocomplete_vue__WEBPACK_IMPORTED_MODULE_12__["default"])
    Vue.component('GMapHeatmap', _components_heatmap__WEBPACK_IMPORTED_MODULE_11__["default"])
  }
}

function makeGMapApiPromiseLazy(options) {
  // Things to do once the API is loaded
  function onApiLoaded() {
    GMapApi.gmapApi = {}
    return window.google
  }

  if (options.load) {
    // If library should load the API
    return (0,_utils_lazyValue__WEBPACK_IMPORTED_MODULE_0__["default"])(() => {
      // Load the
      // This will only be evaluated once
      if (_utils_env__WEBPACK_IMPORTED_MODULE_16__.Env.isServer()) {
        return new Promise(() => {}).then(onApiLoaded)
      } else {
        return new Promise((resolve, reject) => {
          try {
            window['vueGoogleMapsInit'] = resolve
            ;(0,_load_google_maps__WEBPACK_IMPORTED_MODULE_1__.loadGMapApi)(options.load)
          } catch (err) {
            reject(err)
          }
        }).then(onApiLoaded)
      }
    })
  } else {
    // If library should not handle API, provide
    // end-users with the global `vueGoogleMapsInit: () => undefined`
    // when the Google Maps API has been loaded
    const promise = new Promise((resolve) => {
      if (_utils_env__WEBPACK_IMPORTED_MODULE_16__.Env.isServer()) {
        return
      }
      window['vueGoogleMapsInit'] = resolve
    }).then(onApiLoaded)

    return (0,_utils_lazyValue__WEBPACK_IMPORTED_MODULE_0__["default"])(() => promise)
  }
}


/***/ }),

/***/ "./node_modules/@fawmi/vue-google-maps/src/utils/TwoWayBindingWrapper.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@fawmi/vue-google-maps/src/utils/TwoWayBindingWrapper.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TwoWayBindingWrapper)
/* harmony export */ });
/**
 * When you have two-way bindings, but the actual bound value will not equal
 * the value you initially passed in, then to avoid an infinite loop you
 * need to increment a counter every time you pass in a value, decrement the
 * same counter every time the bound value changed, but only bubble up
 * the event when the counter is zero.
 *
Example:

Let's say DrawingRecognitionCanvas is a deep-learning backed canvas
that, when given the name of an object (e.g. 'dog'), draws a dog.
But whenever the drawing on it changes, it also sends back its interpretation
of the image by way of the @newObjectRecognized event.

<input
  type="text"
  placeholder="an object, e.g. Dog, Cat, Frog"
  v-model="identifiedObject" />
<DrawingRecognitionCanvas
  :object="identifiedObject"
  @newObjectRecognized="identifiedObject = $event"
  />

new TwoWayBindingWrapper((increment, decrement, shouldUpdate) => {
  this.$watch('identifiedObject', () => {
    // new object passed in
    increment()
  })
  this.$deepLearningBackend.on('drawingChanged', () => {
    recognizeObject(this.$deepLearningBackend)
      .then((object) => {
        decrement()
        if (shouldUpdate()) {
          this.$emit('newObjectRecognized', object.name)
        }
      })
  })
})
 */
function TwoWayBindingWrapper(fn) {
  let counter = 0

  fn(
    () => {
      counter += 1
    },
    () => {
      counter = Math.max(0, counter - 1)
    },
    () => counter === 0
  )
}


/***/ }),

/***/ "./node_modules/@fawmi/vue-google-maps/src/utils/WatchPrimitiveProperties.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@fawmi/vue-google-maps/src/utils/WatchPrimitiveProperties.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WatchPrimitiveProperties)
/* harmony export */ });
/**
 * Watch the individual properties of a PoD object, instead of the object
 * per se. This is different from a deep watch where both the reference
 * and the individual values are watched.
 *
 * In effect, it throttles the multiple $watch to execute at most once per tick.
 */
function WatchPrimitiveProperties(
  vueInst,
  propertiesToTrack,
  handler,
  immediate = false
) {
  let isHandled = false

  function requestHandle() {
    if (!isHandled) {
      isHandled = true
      vueInst.$nextTick(() => {
        isHandled = false
        handler()
      })
    }
  }

  for (let prop of propertiesToTrack) {
    vueInst.$watch(prop, requestHandle, { immediate })
  }
}


/***/ }),

/***/ "./node_modules/@fawmi/vue-google-maps/src/utils/bindEvents.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@fawmi/vue-google-maps/src/utils/bindEvents.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((vueInst, googleMapsInst, events) => {
  for (let eventName of events) {
    const propName = `on${eventName.charAt(0).toUpperCase()}${eventName.slice(1)}`.replace(/[-_]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');

    if (vueInst.$props[propName] || vueInst.$attrs[propName]) {
      googleMapsInst.addListener(eventName, (ev) => {
        vueInst.$emit(eventName, ev)
      })
    } else if (vueInst.$gmapOptions.autobindAllEvents || vueInst.$attrs[eventName]) {
      googleMapsInst.addListener(eventName, (ev) => {
        vueInst.$emit(eventName, ev)
      })
    }
  }
});


/***/ }),

/***/ "./node_modules/@fawmi/vue-google-maps/src/utils/bindProps.js":
/*!********************************************************************!*\
  !*** ./node_modules/@fawmi/vue-google-maps/src/utils/bindProps.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindProps: () => (/* binding */ bindProps),
/* harmony export */   getPropsValues: () => (/* binding */ getPropsValues)
/* harmony export */ });
/* harmony import */ var _utils_WatchPrimitiveProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/WatchPrimitiveProperties */ "./node_modules/@fawmi/vue-google-maps/src/utils/WatchPrimitiveProperties.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./string */ "./node_modules/@fawmi/vue-google-maps/src/utils/string.js");



function getPropsValues(vueInst, props) {
  return Object.keys(props).reduce((acc, prop) => {
    if (vueInst[prop] !== undefined) {
      acc[prop] = vueInst[prop]
    }
    return acc
  }, {})
}

/**
 * Binds the properties defined in props to the google maps instance.
 * If the prop is an Object type, and we wish to track the properties
 * of the object (e.g. the lat and lng of a LatLng), then we do a deep
 * watch. For deep watch, we also prevent the _changed event from being
 * $emitted if the data source was external.
 */
function bindProps(vueInst, googleMapsInst, props) {
  for (let attribute in props) {
    let { twoWay, type, trackProperties, noBind } = props[attribute]

    if (noBind) continue

    const setMethodName = 'set' + _string__WEBPACK_IMPORTED_MODULE_1__.Str.capitalizeFirstLetter(attribute)
    const getMethodName = 'get' + _string__WEBPACK_IMPORTED_MODULE_1__.Str.capitalizeFirstLetter(attribute)
    const eventName = attribute.toLowerCase() + '_changed'
    const initialValue = vueInst[attribute]

    if (typeof googleMapsInst[setMethodName] === 'undefined') {
      throw new Error(
        `${setMethodName} is not a method of (the Maps object corresponding to) ${vueInst.$options._componentTag}`
      )
    }

    // We need to avoid an endless
    // propChanged -> event $emitted -> propChanged -> event $emitted loop
    // although this may really be the user's responsibility
    if (type !== Object || !trackProperties) {
      // Track the object deeply
      vueInst.$watch(attribute,
        () => {
          const attributeValue = vueInst[attribute]

          googleMapsInst[setMethodName](attributeValue)
        },
        {
          immediate: typeof initialValue !== 'undefined',
          deep: type === Object,
        }
      )
    } else {
      (0,_utils_WatchPrimitiveProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(
        vueInst,
        trackProperties.map((prop) => `${attribute}.${prop}`),
        () => {
          googleMapsInst[setMethodName](vueInst[attribute])
        },
        vueInst[attribute] !== undefined
      )
    }

    if (twoWay && (vueInst.$gmapOptions.autobindAllEvents || vueInst.$attrs[eventName])) {
      googleMapsInst.addListener(eventName, () => {
        // eslint-disable-line no-unused-vars
        vueInst.$emit(eventName, googleMapsInst[getMethodName]())
      })
    }
  }
}


/***/ }),

/***/ "./node_modules/@fawmi/vue-google-maps/src/utils/create-map-script.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@fawmi/vue-google-maps/src/utils/create-map-script.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMapScript: () => (/* binding */ createMapScript)
/* harmony export */ });
function createMapScript(options) {
  const googleMapScript = document.createElement('SCRIPT')
  if (typeof options !== 'object') {
    throw new Error('options should  be an object')
  }

  // libraries
  /* eslint-disable no-prototype-builtins */
  if (Array.prototype.isPrototypeOf(options.libraries)) {
    options.libraries = options.libraries.join(',')
  }
  if (!options.v) {
    options.v = 3.47
  }

  options['callback'] = 'vueGoogleMapsInit'
  let baseUrl = 'https://maps.googleapis.com/maps/api/js?'

  let url =
    baseUrl +
    Object.keys(options)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(options[key])).join('&')

  googleMapScript.setAttribute('src', url)
  googleMapScript.setAttribute('async', '')
  googleMapScript.setAttribute('defer', '')

  return googleMapScript;
}


/***/ }),

/***/ "./node_modules/@fawmi/vue-google-maps/src/utils/env.js":
/*!**************************************************************!*\
  !*** ./node_modules/@fawmi/vue-google-maps/src/utils/env.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Env: () => (/* binding */ Env)
/* harmony export */ });
class Env {
  static isServer() {
    return typeof document === 'undefined';
  }
}


/***/ }),

/***/ "./node_modules/@fawmi/vue-google-maps/src/utils/lazyValue.js":
/*!********************************************************************!*\
  !*** ./node_modules/@fawmi/vue-google-maps/src/utils/lazyValue.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// lazy-value by sindresorhus

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fn => {
  let called = false;
  let result;

  return () => {
    if (!called) {
      called = true;
      result = fn();
    }

    return result;
  };
});


/***/ }),

/***/ "./node_modules/@fawmi/vue-google-maps/src/utils/mountableMixin.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@fawmi/vue-google-maps/src/utils/mountableMixin.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
Mixin for objects that are mounted by Google Maps
Javascript API.

These are objects that are sensitive to element resize
operations so it exposes a property which accepts a bus

*/

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['resizeBus'],

  data() {
    return {
      _actualResizeBus: null,
    }
  },

  created() {
    if (typeof this.resizeBus === 'undefined') {
      this.$data._actualResizeBus = this.$gmapDefaultResizeBus
    } else {
      this.$data._actualResizeBus = this.resizeBus
    }
  },

  methods: {
    _resizeCallback() {
      this.resize()
    },
    isFunction(functionToCheck) {
      return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
    },
    _delayedResizeCallback() {
      this.$nextTick(() => this._resizeCallback())
    },
  },

  watch: {
    resizeBus(newVal) {
      // eslint-disable-line no-unused-vars
      this.$data._actualResizeBus = newVal
    },
    '$data._actualResizeBus'(newVal, oldVal) {
      if (oldVal) {
        oldVal.$off('resize', this._delayedResizeCallback)
      }
      if (newVal) {
        //  newVal.$on('resize', this._delayedResizeCallback)
      }
    },
  },

  unmounted() {
    if (this.$data._actualResizeBus && this.isFunction(this.$data._actualResizeBus.$off)) {
      this.$data._actualResizeBus.$off('resize', this._delayedResizeCallback)
    }
  },
});


/***/ }),

/***/ "./node_modules/@fawmi/vue-google-maps/src/utils/simulateArrowDown.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@fawmi/vue-google-maps/src/utils/simulateArrowDown.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// This piece of code was orignally written by amirnissim and can be seen here
// http://stackoverflow.com/a/11703018/2694653
// This has been ported to Vanilla.js by GuillaumeLeclerc
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((input) => {
  const _addEventListener = input.addEventListener ? input.addEventListener : input.attachEvent

  function addEventListenerWrapper(type, listener) {
    // Simulate a 'down arrow' keypress on hitting 'return' when no pac suggestion is selected,
    // and then trigger the original listener.
    if (type === 'keydown') {
      const origListener = listener
      listener = function (event) {
        const suggestionSelected = document.getElementsByClassName('pac-item-selected').length > 0
        if (event.which === 13 && !suggestionSelected) {
          const simulatedEvent = document.createEvent('Event')
          simulatedEvent.keyCode = 40
          simulatedEvent.which = 40
          origListener.apply(input, [simulatedEvent])
        }
        origListener.apply(input, [event])
      }
    }
    _addEventListener.apply(input, [type, listener])
  }

  input.addEventListener = addEventListenerWrapper
  input.attachEvent = addEventListenerWrapper
});


/***/ }),

/***/ "./node_modules/@fawmi/vue-google-maps/src/utils/string.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@fawmi/vue-google-maps/src/utils/string.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Str: () => (/* binding */ Str)
/* harmony export */ });
class Str {
  static capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
}


/***/ }),

/***/ "./node_modules/@googlemaps/markerclusterer/dist/index.esm.js":
/*!********************************************************************!*\
  !*** ./node_modules/@googlemaps/markerclusterer/dist/index.esm.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractAlgorithm: () => (/* binding */ AbstractAlgorithm),
/* harmony export */   AbstractViewportAlgorithm: () => (/* binding */ AbstractViewportAlgorithm),
/* harmony export */   Cluster: () => (/* binding */ Cluster),
/* harmony export */   ClusterStats: () => (/* binding */ ClusterStats),
/* harmony export */   DefaultRenderer: () => (/* binding */ DefaultRenderer),
/* harmony export */   GridAlgorithm: () => (/* binding */ GridAlgorithm),
/* harmony export */   MarkerClusterer: () => (/* binding */ MarkerClusterer),
/* harmony export */   MarkerClustererEvents: () => (/* binding */ MarkerClustererEvents),
/* harmony export */   MarkerUtils: () => (/* binding */ MarkerUtils),
/* harmony export */   NoopAlgorithm: () => (/* binding */ NoopAlgorithm),
/* harmony export */   SuperClusterAlgorithm: () => (/* binding */ SuperClusterAlgorithm),
/* harmony export */   SuperClusterViewportAlgorithm: () => (/* binding */ SuperClusterViewportAlgorithm),
/* harmony export */   defaultOnClusterClickHandler: () => (/* binding */ defaultOnClusterClickHandler),
/* harmony export */   distanceBetweenPoints: () => (/* binding */ distanceBetweenPoints),
/* harmony export */   extendBoundsToPaddedViewport: () => (/* binding */ extendBoundsToPaddedViewport),
/* harmony export */   extendPixelBounds: () => (/* binding */ extendPixelBounds),
/* harmony export */   filterMarkersToPaddedViewport: () => (/* binding */ filterMarkersToPaddedViewport),
/* harmony export */   getPaddedViewport: () => (/* binding */ getPaddedViewport),
/* harmony export */   noop: () => (/* binding */ noop),
/* harmony export */   pixelBoundsToLatLngBounds: () => (/* binding */ pixelBoundsToLatLngBounds)
/* harmony export */ });
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var supercluster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! supercluster */ "./node_modules/supercluster/index.js");



/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

/**
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * util class that creates a common set of convenience functions to wrap
 * shared behavior of Advanced Markers and Markers.
 */
class MarkerUtils {
    static isAdvancedMarkerAvailable(map) {
        return (google.maps.marker &&
            map.getMapCapabilities().isAdvancedMarkersAvailable === true);
    }
    static isAdvancedMarker(marker) {
        return (google.maps.marker &&
            marker instanceof google.maps.marker.AdvancedMarkerElement);
    }
    static setMap(marker, map) {
        if (this.isAdvancedMarker(marker)) {
            marker.map = map;
        }
        else {
            marker.setMap(map);
        }
    }
    static getPosition(marker) {
        // SuperClusterAlgorithm.calculate expects a LatLng instance so we fake it for Adv Markers
        if (this.isAdvancedMarker(marker)) {
            if (marker.position) {
                if (marker.position instanceof google.maps.LatLng) {
                    return marker.position;
                }
                // since we can't cast to LatLngLiteral for reasons =(
                if (marker.position.lat && marker.position.lng) {
                    return new google.maps.LatLng(marker.position.lat, marker.position.lng);
                }
            }
            return new google.maps.LatLng(null);
        }
        return marker.getPosition();
    }
    static getVisible(marker) {
        if (this.isAdvancedMarker(marker)) {
            /**
             * Always return true for Advanced Markers because the clusterer
             * uses getVisible as a way to count legacy markers not as an actual
             * indicator of visibility for some reason. Even when markers are hidden
             * Marker.getVisible returns `true` and this is used to set the marker count
             * on the cluster. See the behavior of Cluster.count
             */
            return true;
        }
        return marker.getVisible();
    }
}

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cluster {
    constructor({ markers, position }) {
        this.markers = markers;
        if (position) {
            if (position instanceof google.maps.LatLng) {
                this._position = position;
            }
            else {
                this._position = new google.maps.LatLng(position);
            }
        }
    }
    get bounds() {
        if (this.markers.length === 0 && !this._position) {
            return;
        }
        const bounds = new google.maps.LatLngBounds(this._position, this._position);
        for (const marker of this.markers) {
            bounds.extend(MarkerUtils.getPosition(marker));
        }
        return bounds;
    }
    get position() {
        return this._position || this.bounds.getCenter();
    }
    /**
     * Get the count of **visible** markers.
     */
    get count() {
        return this.markers.filter((m) => MarkerUtils.getVisible(m)).length;
    }
    /**
     * Add a marker to the cluster.
     */
    push(marker) {
        this.markers.push(marker);
    }
    /**
     * Cleanup references and remove marker from map.
     */
    delete() {
        if (this.marker) {
            MarkerUtils.setMap(this.marker, null);
            this.marker = undefined;
        }
        this.markers.length = 0;
    }
}

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns the markers visible in a padded map viewport
 *
 * @param map
 * @param mapCanvasProjection
 * @param markers The list of marker to filter
 * @param viewportPaddingPixels The padding in pixel
 * @returns The list of markers in the padded viewport
 */
const filterMarkersToPaddedViewport = (map, mapCanvasProjection, markers, viewportPaddingPixels) => {
    const extendedMapBounds = extendBoundsToPaddedViewport(map.getBounds(), mapCanvasProjection, viewportPaddingPixels);
    return markers.filter((marker) => extendedMapBounds.contains(MarkerUtils.getPosition(marker)));
};
/**
 * Extends a bounds by a number of pixels in each direction
 */
const extendBoundsToPaddedViewport = (bounds, projection, numPixels) => {
    const { northEast, southWest } = latLngBoundsToPixelBounds(bounds, projection);
    const extendedPixelBounds = extendPixelBounds({ northEast, southWest }, numPixels);
    return pixelBoundsToLatLngBounds(extendedPixelBounds, projection);
};
/**
 * Gets the extended bounds as a bbox [westLng, southLat, eastLng, northLat]
 */
const getPaddedViewport = (bounds, projection, pixels) => {
    const extended = extendBoundsToPaddedViewport(bounds, projection, pixels);
    const ne = extended.getNorthEast();
    const sw = extended.getSouthWest();
    return [sw.lng(), sw.lat(), ne.lng(), ne.lat()];
};
/**
 * Returns the distance between 2 positions.
 *
 * @hidden
 */
const distanceBetweenPoints = (p1, p2) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = ((p2.lat - p1.lat) * Math.PI) / 180;
    const dLon = ((p2.lng - p1.lng) * Math.PI) / 180;
    const sinDLat = Math.sin(dLat / 2);
    const sinDLon = Math.sin(dLon / 2);
    const a = sinDLat * sinDLat +
        Math.cos((p1.lat * Math.PI) / 180) *
            Math.cos((p2.lat * Math.PI) / 180) *
            sinDLon *
            sinDLon;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
};
/**
 * Converts a LatLng bound to pixels.
 *
 * @hidden
 */
const latLngBoundsToPixelBounds = (bounds, projection) => {
    return {
        northEast: projection.fromLatLngToDivPixel(bounds.getNorthEast()),
        southWest: projection.fromLatLngToDivPixel(bounds.getSouthWest()),
    };
};
/**
 * Extends a pixel bounds by numPixels in all directions.
 *
 * @hidden
 */
const extendPixelBounds = ({ northEast, southWest }, numPixels) => {
    northEast.x += numPixels;
    northEast.y -= numPixels;
    southWest.x -= numPixels;
    southWest.y += numPixels;
    return { northEast, southWest };
};
/**
 * @hidden
 */
const pixelBoundsToLatLngBounds = ({ northEast, southWest }, projection) => {
    const sw = projection.fromDivPixelToLatLng(southWest);
    const ne = projection.fromDivPixelToLatLng(northEast);
    return new google.maps.LatLngBounds(sw, ne);
};

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @hidden
 */
class AbstractAlgorithm {
    constructor({ maxZoom = 16 }) {
        this.maxZoom = maxZoom;
    }
    /**
     * Helper function to bypass clustering based upon some map state such as
     * zoom, number of markers, etc.
     *
     * ```typescript
     *  cluster({markers, map}: AlgorithmInput): Cluster[] {
     *    if (shouldBypassClustering(map)) {
     *      return this.noop({markers})
     *    }
     * }
     * ```
     */
    noop({ markers, }) {
        return noop(markers);
    }
}
/**
 * Abstract viewport algorithm proves a class to filter markers by a padded
 * viewport. This is a common optimization.
 *
 * @hidden
 */
class AbstractViewportAlgorithm extends AbstractAlgorithm {
    constructor(_a) {
        var { viewportPadding = 60 } = _a, options = __rest(_a, ["viewportPadding"]);
        super(options);
        this.viewportPadding = 60;
        this.viewportPadding = viewportPadding;
    }
    calculate({ markers, map, mapCanvasProjection, }) {
        if (map.getZoom() >= this.maxZoom) {
            return {
                clusters: this.noop({
                    markers,
                }),
                changed: false,
            };
        }
        return {
            clusters: this.cluster({
                markers: filterMarkersToPaddedViewport(map, mapCanvasProjection, markers, this.viewportPadding),
                map,
                mapCanvasProjection,
            }),
        };
    }
}
/**
 * @hidden
 */
const noop = (markers) => {
    const clusters = markers.map((marker) => new Cluster({
        position: MarkerUtils.getPosition(marker),
        markers: [marker],
    }));
    return clusters;
};

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The default Grid algorithm historically used in Google Maps marker
 * clustering.
 *
 * The Grid algorithm does not implement caching and markers may flash as the
 * viewport changes. Instead use {@link SuperClusterAlgorithm}.
 */
class GridAlgorithm extends AbstractViewportAlgorithm {
    constructor(_a) {
        var { maxDistance = 40000, gridSize = 40 } = _a, options = __rest(_a, ["maxDistance", "gridSize"]);
        super(options);
        this.clusters = [];
        this.state = { zoom: -1 };
        this.maxDistance = maxDistance;
        this.gridSize = gridSize;
    }
    calculate({ markers, map, mapCanvasProjection, }) {
        const state = { zoom: map.getZoom() };
        let changed = false;
        if (this.state.zoom >= this.maxZoom && state.zoom >= this.maxZoom) ;
        else {
            changed = !fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default()(this.state, state);
        }
        this.state = state;
        if (map.getZoom() >= this.maxZoom) {
            return {
                clusters: this.noop({
                    markers,
                }),
                changed,
            };
        }
        return {
            clusters: this.cluster({
                markers: filterMarkersToPaddedViewport(map, mapCanvasProjection, markers, this.viewportPadding),
                map,
                mapCanvasProjection,
            }),
        };
    }
    cluster({ markers, map, mapCanvasProjection, }) {
        this.clusters = [];
        markers.forEach((marker) => {
            this.addToClosestCluster(marker, map, mapCanvasProjection);
        });
        return this.clusters;
    }
    addToClosestCluster(marker, map, projection) {
        let maxDistance = this.maxDistance; // Some large number
        let cluster = null;
        for (let i = 0; i < this.clusters.length; i++) {
            const candidate = this.clusters[i];
            const distance = distanceBetweenPoints(candidate.bounds.getCenter().toJSON(), MarkerUtils.getPosition(marker).toJSON());
            if (distance < maxDistance) {
                maxDistance = distance;
                cluster = candidate;
            }
        }
        if (cluster &&
            extendBoundsToPaddedViewport(cluster.bounds, projection, this.gridSize).contains(MarkerUtils.getPosition(marker))) {
            cluster.push(marker);
        }
        else {
            const cluster = new Cluster({ markers: [marker] });
            this.clusters.push(cluster);
        }
    }
}

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Noop algorithm does not generate any clusters or filter markers by the an extended viewport.
 */
class NoopAlgorithm extends AbstractAlgorithm {
    constructor(_a) {
        var options = __rest(_a, []);
        super(options);
    }
    calculate({ markers, map, mapCanvasProjection, }) {
        return {
            clusters: this.cluster({ markers, map, mapCanvasProjection }),
            changed: false,
        };
    }
    cluster(input) {
        return this.noop(input);
    }
}

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A very fast JavaScript algorithm for geospatial point clustering using KD trees.
 *
 * @see https://www.npmjs.com/package/supercluster for more information on options.
 */
class SuperClusterAlgorithm extends AbstractAlgorithm {
    constructor(_a) {
        var { maxZoom, radius = 60 } = _a, options = __rest(_a, ["maxZoom", "radius"]);
        super({ maxZoom });
        this.state = { zoom: -1 };
        this.superCluster = new supercluster__WEBPACK_IMPORTED_MODULE_1__["default"](Object.assign({ maxZoom: this.maxZoom, radius }, options));
    }
    calculate(input) {
        let changed = false;
        const state = { zoom: input.map.getZoom() };
        if (!fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default()(input.markers, this.markers)) {
            changed = true;
            // TODO use proxy to avoid copy?
            this.markers = [...input.markers];
            const points = this.markers.map((marker) => {
                const position = MarkerUtils.getPosition(marker);
                const coordinates = [position.lng(), position.lat()];
                return {
                    type: "Feature",
                    geometry: {
                        type: "Point",
                        coordinates,
                    },
                    properties: { marker },
                };
            });
            this.superCluster.load(points);
        }
        if (!changed) {
            if (this.state.zoom <= this.maxZoom || state.zoom <= this.maxZoom) {
                changed = !fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default()(this.state, state);
            }
        }
        this.state = state;
        if (changed) {
            this.clusters = this.cluster(input);
        }
        return { clusters: this.clusters, changed };
    }
    cluster({ map }) {
        return this.superCluster
            .getClusters([-180, -90, 180, 90], Math.round(map.getZoom()))
            .map((feature) => this.transformCluster(feature));
    }
    transformCluster({ geometry: { coordinates: [lng, lat], }, properties, }) {
        if (properties.cluster) {
            return new Cluster({
                markers: this.superCluster
                    .getLeaves(properties.cluster_id, Infinity)
                    .map((leaf) => leaf.properties.marker),
                position: { lat, lng },
            });
        }
        const marker = properties.marker;
        return new Cluster({
            markers: [marker],
            position: MarkerUtils.getPosition(marker),
        });
    }
}

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A very fast JavaScript algorithm for geospatial point clustering using KD trees.
 *
 * @see https://www.npmjs.com/package/supercluster for more information on options.
 */
class SuperClusterViewportAlgorithm extends AbstractViewportAlgorithm {
    constructor(_a) {
        var { maxZoom, radius = 60, viewportPadding = 60 } = _a, options = __rest(_a, ["maxZoom", "radius", "viewportPadding"]);
        super({ maxZoom, viewportPadding });
        this.superCluster = new supercluster__WEBPACK_IMPORTED_MODULE_1__["default"](Object.assign({ maxZoom: this.maxZoom, radius }, options));
        this.state = { zoom: -1, view: [0, 0, 0, 0] };
    }
    calculate(input) {
        const state = {
            zoom: Math.round(input.map.getZoom()),
            view: getPaddedViewport(input.map.getBounds(), input.mapCanvasProjection, this.viewportPadding),
        };
        let changed = !fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default()(this.state, state);
        if (!fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default()(input.markers, this.markers)) {
            changed = true;
            // TODO use proxy to avoid copy?
            this.markers = [...input.markers];
            const points = this.markers.map((marker) => {
                const position = MarkerUtils.getPosition(marker);
                const coordinates = [position.lng(), position.lat()];
                return {
                    type: "Feature",
                    geometry: {
                        type: "Point",
                        coordinates,
                    },
                    properties: { marker },
                };
            });
            this.superCluster.load(points);
        }
        if (changed) {
            this.clusters = this.cluster(input);
            this.state = state;
        }
        return { clusters: this.clusters, changed };
    }
    cluster({ map, mapCanvasProjection }) {
        /* recalculate new state because we can't use the cached version. */
        const state = {
            zoom: Math.round(map.getZoom()),
            view: getPaddedViewport(map.getBounds(), mapCanvasProjection, this.viewportPadding),
        };
        return this.superCluster
            .getClusters(state.view, state.zoom)
            .map((feature) => this.transformCluster(feature));
    }
    transformCluster({ geometry: { coordinates: [lng, lat], }, properties, }) {
        if (properties.cluster) {
            return new Cluster({
                markers: this.superCluster
                    .getLeaves(properties.cluster_id, Infinity)
                    .map((leaf) => leaf.properties.marker),
                position: { lat, lng },
            });
        }
        const marker = properties.marker;
        return new Cluster({
            markers: [marker],
            position: MarkerUtils.getPosition(marker),
        });
    }
}

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provides statistics on all clusters in the current render cycle for use in {@link Renderer.render}.
 */
class ClusterStats {
    constructor(markers, clusters) {
        this.markers = { sum: markers.length };
        const clusterMarkerCounts = clusters.map((a) => a.count);
        const clusterMarkerSum = clusterMarkerCounts.reduce((a, b) => a + b, 0);
        this.clusters = {
            count: clusters.length,
            markers: {
                mean: clusterMarkerSum / clusters.length,
                sum: clusterMarkerSum,
                min: Math.min(...clusterMarkerCounts),
                max: Math.max(...clusterMarkerCounts),
            },
        };
    }
}
class DefaultRenderer {
    /**
     * The default render function for the library used by {@link MarkerClusterer}.
     *
     * Currently set to use the following:
     *
     * ```typescript
     * // change color if this cluster has more markers than the mean cluster
     * const color =
     *   count > Math.max(10, stats.clusters.markers.mean)
     *     ? "#ff0000"
     *     : "#0000ff";
     *
     * // create svg url with fill color
     * const svg = window.btoa(`
     * <svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
     *   <circle cx="120" cy="120" opacity=".6" r="70" />
     *   <circle cx="120" cy="120" opacity=".3" r="90" />
     *   <circle cx="120" cy="120" opacity=".2" r="110" />
     *   <circle cx="120" cy="120" opacity=".1" r="130" />
     * </svg>`);
     *
     * // create marker using svg icon
     * return new google.maps.Marker({
     *   position,
     *   icon: {
     *     url: `data:image/svg+xml;base64,${svg}`,
     *     scaledSize: new google.maps.Size(45, 45),
     *   },
     *   label: {
     *     text: String(count),
     *     color: "rgba(255,255,255,0.9)",
     *     fontSize: "12px",
     *   },
     *   // adjust zIndex to be above other markers
     *   zIndex: 1000 + count,
     * });
     * ```
     */
    render({ count, position }, stats, map) {
        // change color if this cluster has more markers than the mean cluster
        const color = count > Math.max(10, stats.clusters.markers.mean) ? "#ff0000" : "#0000ff";
        // create svg literal with fill color
        const svg = `<svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="50" height="50">
<circle cx="120" cy="120" opacity=".6" r="70" />
<circle cx="120" cy="120" opacity=".3" r="90" />
<circle cx="120" cy="120" opacity=".2" r="110" />
<text x="50%" y="50%" style="fill:#fff" text-anchor="middle" font-size="50" dominant-baseline="middle" font-family="roboto,arial,sans-serif">${count}</text>
</svg>`;
        const title = `Cluster of ${count} markers`, 
        // adjust zIndex to be above other markers
        zIndex = Number(google.maps.Marker.MAX_ZINDEX) + count;
        if (MarkerUtils.isAdvancedMarkerAvailable(map)) {
            // create cluster SVG element
            const parser = new DOMParser();
            const svgEl = parser.parseFromString(svg, "image/svg+xml").documentElement;
            svgEl.setAttribute("transform", "translate(0 25)");
            const clusterOptions = {
                map,
                position,
                zIndex,
                title,
                content: svgEl,
            };
            return new google.maps.marker.AdvancedMarkerElement(clusterOptions);
        }
        const clusterOptions = {
            position,
            zIndex,
            title,
            icon: {
                url: `data:image/svg+xml;base64,${btoa(svg)}`,
                anchor: new google.maps.Point(25, 25),
            },
        };
        return new google.maps.Marker(clusterOptions);
    }
}

/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Extends an object's prototype by another's.
 *
 * @param type1 The Type to be extended.
 * @param type2 The Type to extend with.
 * @ignore
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extend(type1, type2) {
    /* istanbul ignore next */
    // eslint-disable-next-line prefer-const
    for (let property in type2.prototype) {
        type1.prototype[property] = type2.prototype[property];
    }
}
/**
 * @ignore
 */
class OverlayViewSafe {
    constructor() {
        // MarkerClusterer implements google.maps.OverlayView interface. We use the
        // extend function to extend MarkerClusterer with google.maps.OverlayView
        // because it might not always be available when the code is defined so we
        // look for it at the last possible moment. If it doesn't exist now then
        // there is no point going ahead :)
        extend(OverlayViewSafe, google.maps.OverlayView);
    }
}

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var MarkerClustererEvents;
(function (MarkerClustererEvents) {
    MarkerClustererEvents["CLUSTERING_BEGIN"] = "clusteringbegin";
    MarkerClustererEvents["CLUSTERING_END"] = "clusteringend";
    MarkerClustererEvents["CLUSTER_CLICK"] = "click";
})(MarkerClustererEvents || (MarkerClustererEvents = {}));
const defaultOnClusterClickHandler = (_, cluster, map) => {
    map.fitBounds(cluster.bounds);
};
/**
 * MarkerClusterer creates and manages per-zoom-level clusters for large amounts
 * of markers. See {@link MarkerClustererOptions} for more details.
 *
 */
class MarkerClusterer extends OverlayViewSafe {
    constructor({ map, markers = [], algorithmOptions = {}, algorithm = new SuperClusterAlgorithm(algorithmOptions), renderer = new DefaultRenderer(), onClusterClick = defaultOnClusterClickHandler, }) {
        super();
        this.markers = [...markers];
        this.clusters = [];
        this.algorithm = algorithm;
        this.renderer = renderer;
        this.onClusterClick = onClusterClick;
        if (map) {
            this.setMap(map);
        }
    }
    addMarker(marker, noDraw) {
        if (this.markers.includes(marker)) {
            return;
        }
        this.markers.push(marker);
        if (!noDraw) {
            this.render();
        }
    }
    addMarkers(markers, noDraw) {
        markers.forEach((marker) => {
            this.addMarker(marker, true);
        });
        if (!noDraw) {
            this.render();
        }
    }
    removeMarker(marker, noDraw) {
        const index = this.markers.indexOf(marker);
        if (index === -1) {
            // Marker is not in our list of markers, so do nothing:
            return false;
        }
        MarkerUtils.setMap(marker, null);
        this.markers.splice(index, 1); // Remove the marker from the list of managed markers
        if (!noDraw) {
            this.render();
        }
        return true;
    }
    removeMarkers(markers, noDraw) {
        let removed = false;
        markers.forEach((marker) => {
            removed = this.removeMarker(marker, true) || removed;
        });
        if (removed && !noDraw) {
            this.render();
        }
        return removed;
    }
    clearMarkers(noDraw) {
        this.markers.length = 0;
        if (!noDraw) {
            this.render();
        }
    }
    /**
     * Recalculates and draws all the marker clusters.
     */
    render() {
        const map = this.getMap();
        if (map instanceof google.maps.Map && map.getProjection()) {
            google.maps.event.trigger(this, MarkerClustererEvents.CLUSTERING_BEGIN, this);
            const { clusters, changed } = this.algorithm.calculate({
                markers: this.markers,
                map,
                mapCanvasProjection: this.getProjection(),
            });
            // Allow algorithms to return flag on whether the clusters/markers have changed.
            if (changed || changed == undefined) {
                // Accumulate the markers of the clusters composed of a single marker.
                // Those clusters directly use the marker.
                // Clusters with more than one markers use a group marker generated by a renderer.
                const singleMarker = new Set();
                for (const cluster of clusters) {
                    if (cluster.markers.length == 1) {
                        singleMarker.add(cluster.markers[0]);
                    }
                }
                const groupMarkers = [];
                // Iterate the clusters that are currently rendered.
                for (const cluster of this.clusters) {
                    if (cluster.marker == null) {
                        continue;
                    }
                    if (cluster.markers.length == 1) {
                        if (!singleMarker.has(cluster.marker)) {
                            // The marker:
                            // - was previously rendered because it is from a cluster with 1 marker,
                            // - should no more be rendered as it is not in singleMarker.
                            MarkerUtils.setMap(cluster.marker, null);
                        }
                    }
                    else {
                        // Delay the removal of old group markers to avoid flickering.
                        groupMarkers.push(cluster.marker);
                    }
                }
                this.clusters = clusters;
                this.renderClusters();
                // Delayed removal of the markers of the former groups.
                requestAnimationFrame(() => groupMarkers.forEach((marker) => MarkerUtils.setMap(marker, null)));
            }
            google.maps.event.trigger(this, MarkerClustererEvents.CLUSTERING_END, this);
        }
    }
    onAdd() {
        this.idleListener = this.getMap().addListener("idle", this.render.bind(this));
        this.render();
    }
    onRemove() {
        google.maps.event.removeListener(this.idleListener);
        this.reset();
    }
    reset() {
        this.markers.forEach((marker) => MarkerUtils.setMap(marker, null));
        this.clusters.forEach((cluster) => cluster.delete());
        this.clusters = [];
    }
    renderClusters() {
        // Generate stats to pass to renderers.
        const stats = new ClusterStats(this.markers, this.clusters);
        const map = this.getMap();
        this.clusters.forEach((cluster) => {
            if (cluster.markers.length === 1) {
                cluster.marker = cluster.markers[0];
            }
            else {
                // Generate the marker to represent the group.
                cluster.marker = this.renderer.render(cluster, stats, map);
                // Make sure all individual markers are removed from the map.
                cluster.markers.forEach((marker) => MarkerUtils.setMap(marker, null));
                if (this.onClusterClick) {
                    cluster.marker.addListener("click", 
                    /* istanbul ignore next */
                    (event) => {
                        google.maps.event.trigger(this, MarkerClustererEvents.CLUSTER_CLICK, cluster);
                        this.onClusterClick(event, cluster, map);
                    });
                }
            }
            MarkerUtils.setMap(cluster.marker, map);
        });
    }
}


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DetailField.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DetailField.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['index', 'resource', 'resourceName', 'resourceId', 'field'],
  data: function data() {
    return {
      address: [],
      list: false
    };
  },
  mounted: function mounted() {
    this.prepare();
  },
  methods: {
    prepare: function prepare() {
      var address = this.field.value;
      if (address !== null) {
        if (_typeof(address) === 'object') {
          var list = [];
          address.map(function (item) {
            list.push(JSON.parse(item.fields.address));
          });
          this.address = list;
          this.list = true;
        } else if (address.startsWith('{')) {
          this.address = JSON.parse(address);
        }
      }
    },
    country: function country(countryCode) {
      var _this$field$country_l;
      return (_this$field$country_l = this.field.country_list[countryCode]) !== null && _this$field$country_l !== void 0 ? _this$field$country_l : countryCode;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FormField.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FormField.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var laravel_nova__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! laravel-nova */ "laravel-nova");
/* harmony import */ var laravel_nova__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(laravel_nova__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../google-maps */ "./resources/js/google-maps.js");
/* harmony import */ var _google_maps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_google_maps__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [laravel_nova__WEBPACK_IMPORTED_MODULE_0__.DependentFormField, laravel_nova__WEBPACK_IMPORTED_MODULE_0__.HandlesValidationErrors],
  props: ['resourceName', 'resourceId', 'field'],
  data: function data() {
    var _this$field$default_c;
    return {
      formData: {
        first_name: '',
        last_name: '',
        street: '',
        zip_code: '',
        city: '',
        country: '',
        company: (_this$field$default_c = this.field.default_company) !== null && _this$field$default_c !== void 0 ? _this$field$default_c : '0',
        company_name: '',
        business_id: '',
        tax_id: '',
        vat_id: ''
      }
    };
  },
  watch: {
    'formData.company': function formDataCompany(newValue, oldValue) {
      var _this = this;
      if (newValue === '1') {
        this.$nextTick(function () {
          document.getElementById(_this.currentField.attribute + '-company').checked = true;
        });
      } else {
        this.$nextTick(function () {
          document.getElementById(_this.currentField.attribute + '-personal').checked = true;
        });
      }
    }
  },
  methods: {
    /**
    * Set the initial, internal value for the field.
    */
    setInitialValue: function setInitialValue() {
      var value = this.field.value || '';
      if (value !== '[]') {
        var _value$first_name, _value$last_name, _value$street, _value$zip_code, _value$city, _value$country, _value$company, _value$company_name, _value$business_id, _value$tax_id, _value$vat_id;
        if (typeof value === 'string' || value instanceof String) {
          // FIX for whitecube/nova-flexible-content
          if (value.charAt(0) !== '{') value = '{' + value + '}';
          value = JSON.parse(value);
        }
        this.formData.first_name = (_value$first_name = value.first_name) !== null && _value$first_name !== void 0 ? _value$first_name : '';
        this.formData.last_name = (_value$last_name = value.last_name) !== null && _value$last_name !== void 0 ? _value$last_name : '';
        this.formData.street = (_value$street = value.street) !== null && _value$street !== void 0 ? _value$street : '';
        this.formData.zip_code = (_value$zip_code = value.zip_code) !== null && _value$zip_code !== void 0 ? _value$zip_code : '';
        this.formData.city = (_value$city = value.city) !== null && _value$city !== void 0 ? _value$city : '';
        this.formData.country = (_value$country = value.country) !== null && _value$country !== void 0 ? _value$country : '';
        this.formData.company = (_value$company = value.company) !== null && _value$company !== void 0 ? _value$company : this.currentField.default_company;
        this.formData.company_name = (_value$company_name = value.company_name) !== null && _value$company_name !== void 0 ? _value$company_name : '';
        this.formData.business_id = (_value$business_id = value.business_id) !== null && _value$business_id !== void 0 ? _value$business_id : '';
        this.formData.tax_id = (_value$tax_id = value.tax_id) !== null && _value$tax_id !== void 0 ? _value$tax_id : '';
        this.formData.vat_id = (_value$vat_id = value.vat_id) !== null && _value$vat_id !== void 0 ? _value$vat_id : '';
      }
      this.value = value;
    },
    /**
    * Fill the given FormData object with the field's internal value.
    */
    fill: function fill(formData) {
      var _document$getElementB;
      this.value = JSON.stringify(this.formData);

      // FIX for whitecube/nova-flexible-content
      var flexibleContent = (_document$getElementB = document.getElementById(this.fieldAttribute.split('__')[0])) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.classList.contains('component-form-nova-flexible-content-group');
      if (flexibleContent) this.value = this.value.slice(1, -1);
      formData.append(this.currentField.attribute, this.value || '');
    },
    addressSuggestions: function addressSuggestions(place) {
      var address = (0,_google_maps__WEBPACK_IMPORTED_MODULE_1__.getAddressFromPlace)(place);
      this.formData.street = address.street;
      this.formData.zip_code = address.zipCode;
      this.formData.city = address.city;
      this.formData.country = address.country;
    },
    isRequired: function isRequired(name) {
      if (!this.currentField.required) {
        return false;
      }
      var defaultFields = ['street', 'zip_code', 'city', 'country'];
      var companyFields = ['company_name'];
      var personalFields = ['first_name', 'last_name'];
      if (defaultFields.includes(name)) {
        return true;
      } else if (this.currentField.company === '0' && personalFields.includes(name) || this.currentField.company === '1' && companyFields.includes(name)) {
        return true;
      }
      return false;
    }
  },
  computed: {
    showCompany: function showCompany() {
      return this.currentField.only_company || this.currentField.with_company && this.formData.company === '1';
    },
    showName: function showName() {
      return this.currentField.with_name;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexField.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexField.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var laravel_nova__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! laravel-nova */ "laravel-nova");
/* harmony import */ var laravel_nova__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(laravel_nova__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [laravel_nova__WEBPACK_IMPORTED_MODULE_0__.Localization],
  props: ['resourceName', 'field'],
  data: function data() {
    return {
      list: false,
      address: null
    };
  },
  mounted: function mounted() {
    this.prepare();
  },
  methods: {
    prepare: function prepare() {
      var address = this.field.value;

      // FIX for whitecube/nova-flexible-content
      if (address.length && !address.startsWith('{')) {
        var list = [];
        JSON.parse(address).forEach(function (item) {
          list.push(JSON.parse('{' + item.attributes.address + '}'));
        });
        address = list;
        this.list = true;
      } else if (address.startsWith('{')) {
        address = JSON.parse(address);
      }
      this.address = address;
    },
    country: function country(countryCode) {
      var _this$field$country_l;
      return (_this$field$country_l = this.field.country_list[countryCode]) !== null && _this$field$country_l !== void 0 ? _this$field$country_l : countryCode;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DetailField.vue?vue&type=template&id=0224618e":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DetailField.vue?vue&type=template&id=0224618e ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  "class": "flex flex-col md:flex-row -mx-6 px-6 py-2 md:py-0 space-y-2 md:space-y-0 component-panel-item"
};
var _hoisted_2 = {
  "class": "md:w-1/4 md:py-3"
};
var _hoisted_3 = {
  "class": "font-normal"
};
var _hoisted_4 = {
  "class": "md:w-3/4 md:py-3 break-all lg:break-words"
};
var _hoisted_5 = {
  key: 0,
  "class": "list"
};
var _hoisted_6 = {
  "class": "item"
};
var _hoisted_7 = {
  key: 0
};
var _hoisted_8 = {
  key: 1
};
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_11 = {
  key: 2,
  "class": "mt-2"
};
var _hoisted_12 = {
  key: 0
};
var _hoisted_13 = {
  key: 1
};
var _hoisted_14 = {
  key: 2
};
var _hoisted_15 = {
  key: 1
};
var _hoisted_16 = {
  key: 0
};
var _hoisted_17 = {
  key: 1
};
var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_20 = {
  key: 2,
  "class": "mt-2"
};
var _hoisted_21 = {
  key: 0
};
var _hoisted_22 = {
  key: 1
};
var _hoisted_23 = {
  key: 2
};
var _hoisted_24 = {
  key: 2
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.field.name), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [$data.list ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.address, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [$data.address.company === '1' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.address.company_name), 1 /* TEXT */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.first_name) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.last_name), 1 /* TEXT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.street), 1 /* TEXT */), _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.zip_code) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.city), 1 /* TEXT */), _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.country(item.country)) + " ", 1 /* TEXT */), item.company === '1' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, [item.business_id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('business_id')) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.business_id), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), item.tax_id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('tax_id')) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.tax_id), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), item.vat_id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('vat_id')) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.vat_id), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
  }), 256 /* UNKEYED_FRAGMENT */))])) : $data.address ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_15, [$data.address.company === '1' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.address.company_name), 1 /* TEXT */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.address.first_name) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.address.last_name), 1 /* TEXT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.address.street), 1 /* TEXT */), _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.address.zip_code) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.address.city), 1 /* TEXT */), _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.country($data.address.country)) + " ", 1 /* TEXT */), $data.address.company === '1' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_20, [$data.address.business_id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('business_id')) + ": " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.address.business_id), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.address.tax_id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('tax_id')) + ": " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.address.tax_id), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.address.vat_id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('vat_id')) + ": " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.address.vat_id), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_24, "–"))])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FormField.vue?vue&type=template&id=c023248a":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FormField.vue?vue&type=template&id=c023248a ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  "class": "address-field-group"
};
var _hoisted_2 = {
  key: 0,
  "class": "radio-wrapper"
};
var _hoisted_3 = ["for"];
var _hoisted_4 = ["id"];
var _hoisted_5 = ["for"];
var _hoisted_6 = ["id"];
var _hoisted_7 = {
  key: 1,
  "class": "input-wrapper"
};
var _hoisted_8 = ["id", "placeholder", "required"];
var _hoisted_9 = {
  key: 2,
  "class": "name-row"
};
var _hoisted_10 = {
  "class": "input-wrapper col"
};
var _hoisted_11 = ["id", "placeholder", "required"];
var _hoisted_12 = {
  "class": "input-wrapper col"
};
var _hoisted_13 = ["id", "placeholder", "required"];
var _hoisted_14 = {
  "class": "input-wrapper"
};
var _hoisted_15 = ["id", "placeholder", "required"];
var _hoisted_16 = {
  "class": "row"
};
var _hoisted_17 = {
  "class": "input-wrapper col"
};
var _hoisted_18 = ["id", "placeholder", "required"];
var _hoisted_19 = {
  "class": "input-wrapper col"
};
var _hoisted_20 = ["id", "placeholder", "required"];
var _hoisted_21 = {
  "class": "flex relative w-full component-select-control select-wrapper"
};
var _hoisted_22 = ["id", "required"];
var _hoisted_23 = ["selected"];
var _hoisted_24 = ["value"];
var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "shrink-0 pointer-events-none form-select-arrow component-icon-arrow",
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "6",
  viewBox: "0 0 10 6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "class": "fill-current",
  d: "M8.292893.292893c.390525-.390524 1.023689-.390524 1.414214 0 .390524.390525.390524 1.023689 0 1.414214l-4 4c-.390525.390524-1.023689.390524-1.414214 0l-4-4c-.390524-.390525-.390524-1.023689 0-1.414214.390525-.390524 1.023689-.390524 1.414214 0L5 3.585786 8.292893.292893z"
})], -1 /* HOISTED */);
var _hoisted_26 = {
  "class": "company-data"
};
var _hoisted_27 = {
  "class": "row"
};
var _hoisted_28 = {
  "class": "col"
};
var _hoisted_29 = ["for"];
var _hoisted_30 = {
  "class": "input-wrapper col"
};
var _hoisted_31 = ["id", "placeholder"];
var _hoisted_32 = {
  "class": "row"
};
var _hoisted_33 = {
  "class": "col"
};
var _hoisted_34 = ["for"];
var _hoisted_35 = {
  "class": "input-wrapper col"
};
var _hoisted_36 = ["id", "placeholder"];
var _hoisted_37 = {
  "class": "row"
};
var _hoisted_38 = {
  "class": "col"
};
var _hoisted_39 = ["for"];
var _hoisted_40 = {
  "class": "input-wrapper col"
};
var _hoisted_41 = ["id", "placeholder"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_GMapAutocomplete = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("GMapAutocomplete");
  var _component_DefaultField = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultField");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_DefaultField, {
    field: $props.field,
    errors: _ctx.errors,
    "show-help-text": _ctx.showHelpText,
    "full-width-content": _ctx.fullWidthContent
  }, {
    field: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [_ctx.currentField.with_company && !_ctx.currentField.only_company ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
        "for": _ctx.currentField.attribute + '-personal'
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        id: _ctx.currentField.attribute + '-personal',
        type: "radio",
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["checked:border-primary-500", _ctx.errorClasses]),
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $data.formData.company = $event;
        }),
        value: "0"
      }, null, 10 /* CLASS, PROPS */, _hoisted_4), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $data.formData.company]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('personal')), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_3), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
        "for": _ctx.currentField.attribute + '-company'
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        id: _ctx.currentField.attribute + '-company',
        type: "radio",
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["peer/draft", _ctx.errorClasses]),
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $data.formData.company = $event;
        }),
        value: "1"
      }, null, 10 /* CLASS, PROPS */, _hoisted_6), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $data.formData.company]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('company')), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_5)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.showCompany && $options.showName ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        id: _ctx.currentField.attribute + '-company_name',
        type: "text",
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["w-full form-control form-input form-input-bordered", _ctx.errorClasses]),
        placeholder: _ctx.__('company_name'),
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $data.formData.company_name = $event;
        }),
        required: $options.isRequired('company_name')
      }, null, 10 /* CLASS, PROPS */, _hoisted_8), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.company_name]])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$options.showCompany && $options.showName ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        id: _ctx.currentField.attribute + '-first_name',
        type: "text",
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["w-full form-control form-input form-input-bordered", _ctx.errorClasses]),
        placeholder: _ctx.__('first_name'),
        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
          return $data.formData.first_name = $event;
        }),
        required: $options.isRequired('company_name')
      }, null, 10 /* CLASS, PROPS */, _hoisted_11), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.first_name]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        id: _ctx.currentField.attribute + '-last_name',
        type: "text",
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["w-full form-control form-input form-input-bordered", _ctx.errorClasses]),
        placeholder: _ctx.__('last_name'),
        "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
          return $data.formData.last_name = $event;
        }),
        required: $options.isRequired('last_name')
      }, null, 10 /* CLASS, PROPS */, _hoisted_13), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.last_name]])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_ctx.currentField.with_address_suggestions && _ctx.currentField.google_maps_api_key ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_GMapAutocomplete, {
        key: 0,
        id: _ctx.currentField.attribute + '-street',
        type: "text",
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["w-full form-control form-input form-input-bordered", _ctx.errorClasses]),
        placeholder: _ctx.__('address_suggestions'),
        value: $data.formData.street,
        modelValue: $data.formData.street,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
          return $data.formData.street = $event;
        }),
        autocomplete: "nope",
        required: $options.isRequired('street'),
        onPlace_changed: $options.addressSuggestions,
        onKeydown: _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["prevent"]), ["enter"]))
      }, null, 8 /* PROPS */, ["id", "class", "placeholder", "value", "modelValue", "required", "onPlace_changed"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
        key: 1,
        id: _ctx.currentField.attribute + '-street',
        type: "text",
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["w-full form-control form-input form-input-bordered", _ctx.errorClasses]),
        placeholder: _ctx.__('street'),
        "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
          return $data.formData.street = $event;
        }),
        required: $options.isRequired('street')
      }, null, 10 /* CLASS, PROPS */, _hoisted_15)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.street]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        id: _ctx.currentField.attribute + '-zip_code',
        type: "text",
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["w-full form-control form-input form-input-bordered", _ctx.errorClasses]),
        placeholder: _ctx.__('zip_code'),
        "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
          return $data.formData.zip_code = $event;
        }),
        required: $options.isRequired('zip_code')
      }, null, 10 /* CLASS, PROPS */, _hoisted_18), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.zip_code]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        id: _ctx.currentField.attribute + '-city',
        type: "text",
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["w-full form-control form-input form-input-bordered", _ctx.errorClasses]),
        placeholder: _ctx.__('city'),
        "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
          return $data.formData.city = $event;
        }),
        required: $options.isRequired('city')
      }, null, 10 /* CLASS, PROPS */, _hoisted_20), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.city]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
        id: _ctx.currentField.attribute + '-country',
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["w-full block form-control form-select form-select-bordered", _ctx.errorClasses]),
        "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
          return $data.formData.country = $event;
        }),
        required: $options.isRequired('country')
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
        disabled: "",
        selected: $data.formData.country === '',
        value: "",
        key: "none"
      }, " - " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('country')) + " - ", 9 /* TEXT, PROPS */, _hoisted_23), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.currentField.country_list, function (countryTitle, countryCode) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
          value: countryCode,
          key: countryCode
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(countryTitle), 9 /* TEXT, PROPS */, _hoisted_24);
      }), 128 /* KEYED_FRAGMENT */))], 10 /* CLASS, PROPS */, _hoisted_22), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.formData.country]]), _hoisted_25]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
        "for": _ctx.currentField.attribute + '-business_id'
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('business_id')), 9 /* TEXT, PROPS */, _hoisted_29)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        id: _ctx.currentField.attribute + '-business_id',
        type: "text",
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["w-full form-control form-input form-input-bordered", _ctx.errorClasses]),
        placeholder: _ctx.__('business_id'),
        "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
          return $data.formData.business_id = $event;
        })
      }, null, 10 /* CLASS, PROPS */, _hoisted_31), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.business_id]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
        "for": _ctx.currentField.attribute + '-tax_id'
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('tax_id')), 9 /* TEXT, PROPS */, _hoisted_34)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        id: _ctx.currentField.attribute + '-tax_id',
        type: "text",
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["w-full form-control form-input form-input-bordered", _ctx.errorClasses]),
        placeholder: _ctx.__('tax_id'),
        "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
          return $data.formData.tax_id = $event;
        })
      }, null, 10 /* CLASS, PROPS */, _hoisted_36), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.tax_id]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
        "for": _ctx.currentField.attribute + '-vat_id'
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('vat_id')), 9 /* TEXT, PROPS */, _hoisted_39)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        id: _ctx.currentField.attribute + '-vat_id',
        type: "text",
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["w-full form-control form-input form-input-bordered", _ctx.errorClasses]),
        placeholder: _ctx.__('vat_id'),
        "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
          return $data.formData.vat_id = $event;
        })
      }, null, 10 /* CLASS, PROPS */, _hoisted_41), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.vat_id]])])])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $options.showCompany]])])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["field", "errors", "show-help-text", "full-width-content"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexField.vue?vue&type=template&id=9e63f81a":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexField.vue?vue&type=template&id=9e63f81a ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  key: 0,
  "class": "list"
};
var _hoisted_2 = {
  "class": "item"
};
var _hoisted_3 = {
  key: 0
};
var _hoisted_4 = {
  key: 1
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_7 = {
  key: 2,
  "class": "mt-2"
};
var _hoisted_8 = {
  key: 0
};
var _hoisted_9 = {
  key: 1
};
var _hoisted_10 = {
  key: 2
};
var _hoisted_11 = {
  key: 1
};
var _hoisted_12 = {
  key: 0
};
var _hoisted_13 = {
  key: 1
};
var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_16 = {
  key: 2,
  "class": "mt-2"
};
var _hoisted_17 = {
  key: 0
};
var _hoisted_18 = {
  key: 1
};
var _hoisted_19 = {
  key: 2
};
var _hoisted_20 = {
  key: 2
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $data.list ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.address, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [$data.address.company === '1' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.address.company_name), 1 /* TEXT */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.first_name) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.last_name), 1 /* TEXT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.street), 1 /* TEXT */), _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.zip_code) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.city), 1 /* TEXT */), _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.country(item.country)) + " ", 1 /* TEXT */), item.company === '1' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [item.business_id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('business_id')) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.business_id), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), item.tax_id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('tax_id')) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.tax_id), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), item.vat_id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('vat_id')) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.vat_id), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
  }), 256 /* UNKEYED_FRAGMENT */))])) : $data.address ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, [$data.address.company === '1' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.address.company_name), 1 /* TEXT */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.address.first_name) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.address.last_name), 1 /* TEXT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.address.street), 1 /* TEXT */), _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.address.zip_code) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.address.city), 1 /* TEXT */), _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.country($data.address.country)) + " ", 1 /* TEXT */), $data.address.company === '1' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_16, [$data.address.business_id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('business_id')) + ": " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.address.business_id), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.address.tax_id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('tax_id')) + ": " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.address.tax_id), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.address.vat_id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('vat_id')) + ": " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.address.vat_id), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_20, "–"));
}

/***/ }),

/***/ "./resources/js/field.js":
/*!*******************************!*\
  !*** ./resources/js/field.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fawmi_vue_google_maps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fawmi/vue-google-maps */ "./node_modules/@fawmi/vue-google-maps/src/main.js");
/* harmony import */ var _components_IndexField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/IndexField */ "./resources/js/components/IndexField.vue");
/* harmony import */ var _components_DetailField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/DetailField */ "./resources/js/components/DetailField.vue");
/* harmony import */ var _components_FormField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/FormField */ "./resources/js/components/FormField.vue");




Nova.booting(function (app, store) {
  app.use(_fawmi_vue_google_maps__WEBPACK_IMPORTED_MODULE_0__["default"], {
    load: {
      key: Nova.appConfig.google_maps_api_key,
      libraries: 'places'
    }
  });
  app.component('index-address', _components_IndexField__WEBPACK_IMPORTED_MODULE_1__["default"]);
  app.component('detail-address', _components_DetailField__WEBPACK_IMPORTED_MODULE_2__["default"]);
  app.component('form-address', _components_FormField__WEBPACK_IMPORTED_MODULE_3__["default"]);
});

/***/ }),

/***/ "./resources/js/google-maps.js":
/*!*************************************!*\
  !*** ./resources/js/google-maps.js ***!
  \*************************************/
/***/ ((module) => {

function getAddressFromPlace(place) {
  var parameters = {
    street_number: ['street_number'],
    zipCode: ['postal_code'],
    street: ['street_address', 'route'],
    region: ['administrative_area_level_1', 'administrative_area_level_2', 'administrative_area_level_3', 'administrative_area_level_4', 'administrative_area_level_5'],
    city: ['locality', 'sublocality', 'sublocality_level_1', 'sublocality_level_2', 'sublocality_level_3', 'sublocality_level_4'],
    country: ['country']
  };
  var address = {
    street_number: '',
    zipCode: '',
    street: '',
    region: '',
    city: '',
    country: ''
  };
  place.address_components.forEach(function (item) {
    for (var parameter in parameters) {
      if (parameters[parameter].indexOf(item.types[0]) !== -1) {
        if (parameter === 'country') {
          address[parameter] = item.short_name;
        } else {
          address[parameter] = item.long_name;
        }
      }
    }
  });
  address.street += ' ' + address.street_number;
  delete address.street_number;
  return address;
}
module.exports = {
  getAddressFromPlace: getAddressFromPlace
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@fawmi/vue-google-maps/src/components/map.vue?vue&type=style&index=0&id=0c1aca79&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@fawmi/vue-google-maps/src/components/map.vue?vue&type=style&index=0&id=0c1aca79&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.vue-map {\n  width: 100%;\n  height: 100%;\n  min-height: 2rem;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DetailField.vue?vue&type=style&index=0&id=0224618e&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DetailField.vue?vue&type=style&index=0&id=0224618e&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.item {\n        margin-top: 10px;\n}\n.item:first-child {\n        margin-top: 0;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/fast-deep-equal/index.js":
/*!***********************************************!*\
  !*** ./node_modules/fast-deep-equal/index.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


// do not edit .js files directly - edit src/index.jst



module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ }),

/***/ "./resources/css/field.css":
/*!*********************************!*\
  !*** ./resources/css/field.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@fawmi/vue-google-maps/src/components/map.vue?vue&type=style&index=0&id=0c1aca79&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@fawmi/vue-google-maps/src/components/map.vue?vue&type=style&index=0&id=0c1aca79&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_9_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_map_vue_vue_type_style_index_0_id_0c1aca79_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../vue-loader/dist/stylePostLoader.js!../../../../postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./map.vue?vue&type=style&index=0&id=0c1aca79&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@fawmi/vue-google-maps/src/components/map.vue?vue&type=style&index=0&id=0c1aca79&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_map_vue_vue_type_style_index_0_id_0c1aca79_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_map_vue_vue_type_style_index_0_id_0c1aca79_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DetailField.vue?vue&type=style&index=0&id=0224618e&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DetailField.vue?vue&type=style&index=0&id=0224618e&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DetailField_vue_vue_type_style_index_0_id_0224618e_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DetailField.vue?vue&type=style&index=0&id=0224618e&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DetailField.vue?vue&type=style&index=0&id=0224618e&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DetailField_vue_vue_type_style_index_0_id_0224618e_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DetailField_vue_vue_type_style_index_0_id_0224618e_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./node_modules/@fawmi/vue-google-maps/src/components/autocomplete.vue":
/*!*****************************************************************************!*\
  !*** ./node_modules/@fawmi/vue-google-maps/src/components/autocomplete.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _autocomplete_vue_vue_type_template_id_5b7498ca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autocomplete.vue?vue&type=template&id=5b7498ca */ "./node_modules/@fawmi/vue-google-maps/src/components/autocomplete.vue?vue&type=template&id=5b7498ca");
/* harmony import */ var _autocomplete_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./autocomplete.vue?vue&type=script&lang=js */ "./node_modules/@fawmi/vue-google-maps/src/components/autocomplete.vue?vue&type=script&lang=js");
/* harmony import */ var _Volumes_Data_Laravel_autopreliaciny_vendor_wamesk_laravel_nova_address_field_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Volumes_Data_Laravel_autopreliaciny_vendor_wamesk_laravel_nova_address_field_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_autocomplete_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_autocomplete_vue_vue_type_template_id_5b7498ca__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"node_modules/@fawmi/vue-google-maps/src/components/autocomplete.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@fawmi/vue-google-maps/src/components/autocomplete.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@fawmi/vue-google-maps/src/components/autocomplete.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_bindProps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/bindProps.js */ "./node_modules/@fawmi/vue-google-maps/src/utils/bindProps.js");
/* harmony import */ var _utils_simulateArrowDown_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/simulateArrowDown.js */ "./node_modules/@fawmi/vue-google-maps/src/utils/simulateArrowDown.js");
/* harmony import */ var _build_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./build-component */ "./node_modules/@fawmi/vue-google-maps/src/components/build-component.js");





const mappedProps = {
  bounds: {
    type: Object,
  },
  componentRestrictions: {
    type: Object,
    // Do not bind -- must check for undefined
    // in the property
    noBind: true,
  },
  types: {
    type: Array,
    default: function () {
      return []
    },
  },
}

const props = {
  selectFirstOnEnter: {
    required: false,
    type: Boolean,
    default: false,
  },
  options: {
    type: Object,
  },
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mounted() {
    this.$gmapApiPromiseLazy().then(() => {
      if (this.selectFirstOnEnter) {
        (0,_utils_simulateArrowDown_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.$refs.input)
      }

      if (typeof google.maps.places.Autocomplete !== 'function') {
        throw new Error(
          "google.maps.places.Autocomplete is undefined. Did you add 'places' to libraries when loading Google Maps?"
        )
      }

      /* eslint-disable no-unused-vars */
      const finalOptions = {
        ...(0,_utils_bindProps_js__WEBPACK_IMPORTED_MODULE_0__.getPropsValues)(this, mappedProps),
        ...this.options,
      }

      this.$autocomplete = new google.maps.places.Autocomplete(this.$refs.input, finalOptions)
      ;(0,_utils_bindProps_js__WEBPACK_IMPORTED_MODULE_0__.bindProps)(this, this.$autocomplete, mappedProps)

      this.$watch('componentRestrictions', (v) => {
        if (v !== undefined) {
          this.$autocomplete.setComponentRestrictions(v)
        }
      })

      // Not using `bindEvents` because we also want
      // to return the result of `getPlace()`
      this.$autocomplete.addListener('place_changed', () => {
        this.$emit('place_changed', this.$autocomplete.getPlace())
      })
    })
  },
  props: {
    ...(0,_build_component__WEBPACK_IMPORTED_MODULE_2__.mappedPropsToVueProps)(mappedProps),
    ...props,
  },
});


/***/ }),

/***/ "./node_modules/@fawmi/vue-google-maps/src/components/cluster.vue":
/*!************************************************************************!*\
  !*** ./node_modules/@fawmi/vue-google-maps/src/components/cluster.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cluster_vue_vue_type_template_id_b97a24d2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cluster.vue?vue&type=template&id=b97a24d2 */ "./node_modules/@fawmi/vue-google-maps/src/components/cluster.vue?vue&type=template&id=b97a24d2");
/* harmony import */ var _cluster_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cluster.vue?vue&type=script&lang=js */ "./node_modules/@fawmi/vue-google-maps/src/components/cluster.vue?vue&type=script&lang=js");
/* harmony import */ var _Volumes_Data_Laravel_autopreliaciny_vendor_wamesk_laravel_nova_address_field_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Volumes_Data_Laravel_autopreliaciny_vendor_wamesk_laravel_nova_address_field_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_cluster_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_cluster_vue_vue_type_template_id_b97a24d2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"node_modules/@fawmi/vue-google-maps/src/components/cluster.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@fawmi/vue-google-maps/src/components/cluster.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@fawmi/vue-google-maps/src/components/cluster.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _googlemaps_markerclusterer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @googlemaps/markerclusterer */ "./node_modules/@googlemaps/markerclusterer/dist/index.esm.js");
/* harmony import */ var _build_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build-component.js */ "./node_modules/@fawmi/vue-google-maps/src/components/build-component.js");




const props = {
  maxZoom: {
    type: Number,
    twoWay: false,
  },
  batchSizeIE: {
    type: Number,
    twoWay: false,
  },
  calculator: {
    type: Function,
    twoWay: false,
  },
  enableRetinaIcons: {
    type: Boolean,
    twoWay: false,
  },
  gridSize: {
    type: Number,
    twoWay: false,
  },
  ignoreHidden: {
    type: Boolean,
    twoWay: false,
  },
  imageExtension: {
    type: String,
    twoWay: false,
  },
  imagePath: {
    type: String,
    twoWay: false,
  },
  imageSizes: {
    type: Array,
    twoWay: false,
  },
  minimumClusterSize: {
    type: Number,
    twoWay: false,
  },
  styles: {
    type: Array,
    twoWay: false,
  },
  zoomOnClick: {
    type: Boolean,
    twoWay: false,
  },
}

const events = [
  'click',
  'rightclick',
  'dblclick',
  'drag',
  'dragstart',
  'dragend',
  'mouseup',
  'mousedown',
  'mouseover',
  'mouseout',
]

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_build_component_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
  mappedProps: props,
  events,
  name: 'cluster',
  ctr: () => {
    if (typeof _googlemaps_markerclusterer__WEBPACK_IMPORTED_MODULE_0__.MarkerClusterer === 'undefined') {
      const errorMessage = 'MarkerClusterer is not installed!';
      console.error(errorMessage);
      throw new Error(errorMessage)
    }
    return _googlemaps_markerclusterer__WEBPACK_IMPORTED_MODULE_0__.MarkerClusterer
  },
  ctrArgs: ({ map, ...otherOptions }) => [map, [], otherOptions],
  afterCreate(inst) {
    const reinsertMarkers = () => {
      const oldMarkers = inst.getMarkers()
      inst.clearMarkers()
      inst.addMarkers(oldMarkers)
    }
    for (let prop in props) {
      if (props[prop].twoWay) {
        this.$on(prop.toLowerCase() + '_changed', reinsertMarkers)
      }
    }
  },
  updated() {
    if (this.$clusterObject) {
      this.$clusterObject.repaint()
    }
  },
  beforeUnmount() {
    /* Performance optimization when destroying a large number of markers */
    if (this.$children && this.$children.length) {
      this.$children.forEach((marker) => {
        if (marker.$clusterObject === this.$clusterObject) {
          marker.$clusterObject = null
        }
      })
    }


    if (this.$clusterObject) {
      this.$clusterObject.clearMarkers()
    }
  },
}));


/***/ }),

/***/ "./node_modules/@fawmi/vue-google-maps/src/components/infoWindow.vue":
/*!***************************************************************************!*\
  !*** ./node_modules/@fawmi/vue-google-maps/src/components/infoWindow.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _infoWindow_vue_vue_type_template_id_6c9aa5b1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./infoWindow.vue?vue&type=template&id=6c9aa5b1 */ "./node_modules/@fawmi/vue-google-maps/src/components/infoWindow.vue?vue&type=template&id=6c9aa5b1");
/* harmony import */ var _infoWindow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./infoWindow.vue?vue&type=script&lang=js */ "./node_modules/@fawmi/vue-google-maps/src/components/infoWindow.vue?vue&type=script&lang=js");
/* harmony import */ var _Volumes_Data_Laravel_autopreliaciny_vendor_wamesk_laravel_nova_address_field_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Volumes_Data_Laravel_autopreliaciny_vendor_wamesk_laravel_nova_address_field_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_infoWindow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_infoWindow_vue_vue_type_template_id_6c9aa5b1__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"node_modules/@fawmi/vue-google-maps/src/components/infoWindow.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@fawmi/vue-google-maps/src/components/infoWindow.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@fawmi/vue-google-maps/src/components/infoWindow.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _build_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./build-component.js */ "./node_modules/@fawmi/vue-google-maps/src/components/build-component.js");



const props = {
  options: {
    type: Object,
    required: false,
    default() {
      return {}
    },
  },
  position: {
    type: Object,
    twoWay: true,
  },
  zIndex: {
    type: Number,
    twoWay: true,
  },
}

const events = ['domready', 'click', 'closeclick', 'content_changed']

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_build_component_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
  mappedProps: props,
  events,
  name: 'infoWindow',
  ctr: () => google.maps.InfoWindow,
  props: {
    opened: {
      type: Boolean,
      default: true,
    },
  },

  inject: {
    $markerPromise: {
      default: null,
    },
  },

  mounted() {
    const el = this.$refs.infoWindow
    el.parentNode.removeChild(el)
  },

  beforeCreate(options) {
    options.content = this.$refs.infoWindow

    if (this.$markerPromise) {
      delete options.position
      return this.$markerPromise.then((mo) => {
        this.$markerObject = mo
        return mo
      })
    }
  },
  emits: ['closeclick'],
  methods: {
    _openInfoWindow() {
      this.$infoWindowObject.close()
      if (this.opened) {
        this.$infoWindowObject.open(this.$map, this.$markerObject)
      } else {
        this.$emit('closeclick')
      }
    },
  },

  afterCreate() {
    this._openInfoWindow()
    this.$watch('opened', () => {
      this._openInfoWindow()
    })
  },
}));


/***/ }),

/***/ "./node_modules/@fawmi/vue-google-maps/src/components/map.vue":
/*!********************************************************************!*\
  !*** ./node_modules/@fawmi/vue-google-maps/src/components/map.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _map_vue_vue_type_template_id_0c1aca79__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.vue?vue&type=template&id=0c1aca79 */ "./node_modules/@fawmi/vue-google-maps/src/components/map.vue?vue&type=template&id=0c1aca79");
/* harmony import */ var _map_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.vue?vue&type=script&lang=js */ "./node_modules/@fawmi/vue-google-maps/src/components/map.vue?vue&type=script&lang=js");
/* harmony import */ var _map_vue_vue_type_style_index_0_id_0c1aca79_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map.vue?vue&type=style&index=0&id=0c1aca79&lang=css */ "./node_modules/@fawmi/vue-google-maps/src/components/map.vue?vue&type=style&index=0&id=0c1aca79&lang=css");
/* harmony import */ var _Volumes_Data_Laravel_autopreliaciny_vendor_wamesk_laravel_nova_address_field_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Volumes_Data_Laravel_autopreliaciny_vendor_wamesk_laravel_nova_address_field_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_map_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_map_vue_vue_type_template_id_0c1aca79__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"node_modules/@fawmi/vue-google-maps/src/components/map.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@fawmi/vue-google-maps/src/components/map.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@fawmi/vue-google-maps/src/components/map.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_bindEvents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/bindEvents.js */ "./node_modules/@fawmi/vue-google-maps/src/utils/bindEvents.js");
/* harmony import */ var _utils_bindProps_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/bindProps.js */ "./node_modules/@fawmi/vue-google-maps/src/utils/bindProps.js");
/* harmony import */ var _utils_mountableMixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/mountableMixin.js */ "./node_modules/@fawmi/vue-google-maps/src/utils/mountableMixin.js");
/* harmony import */ var _utils_TwoWayBindingWrapper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/TwoWayBindingWrapper.js */ "./node_modules/@fawmi/vue-google-maps/src/utils/TwoWayBindingWrapper.js");
/* harmony import */ var _utils_WatchPrimitiveProperties_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/WatchPrimitiveProperties.js */ "./node_modules/@fawmi/vue-google-maps/src/utils/WatchPrimitiveProperties.js");
/* harmony import */ var _build_component_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./build-component.js */ "./node_modules/@fawmi/vue-google-maps/src/components/build-component.js");









const props = {
  center: {
    required: true,
    twoWay: true,
    type: Object,
    noBind: true,
  },
  zoom: {
    required: false,
    twoWay: true,
    type: Number,
    noBind: true,
  },
  heading: {
    type: Number,
    twoWay: true,
  },
  mapTypeId: {
    twoWay: true,
    type: String,
  },
  tilt: {
    twoWay: true,
    type: Number,
  },
  options: {
    type: Object,
    default() {
      return {}
    },
  },
}

const events = [
  'bounds_changed',
  'click',
  'dblclick',
  'drag',
  'dragend',
  'dragstart',
  'idle',
  'mousemove',
  'mouseout',
  'mouseover',
  'resize',
  'rightclick',
  'tilesloaded',
]

// Plain Google Maps methods exposed here for convenience
const linkedMethods = ['panBy', 'panTo', 'panToBounds', 'fitBounds'].reduce((all, methodName) => {
  all[methodName] = function () {
    if (this.$mapObject) {
      this.$mapObject[methodName].apply(this.$mapObject, arguments)
    }
  }
  return all
}, {})

// Other convenience methods exposed by Vue Google Maps
const customMethods = {
  resize() {
    if (this.$mapObject) {
      google.maps.event.trigger(this.$mapObject, 'resize')
    }
  },
  resizePreserveCenter() {
    if (!this.$mapObject) {
      return
    }

    const oldCenter = this.$mapObject.getCenter()
    google.maps.event.trigger(this.$mapObject, 'resize')
    this.$mapObject.setCenter(oldCenter)
  },

  /// Override mountableMixin::_resizeCallback
  /// because resizePreserveCenter is usually the
  /// expected behaviour
  _resizeCallback() {
    this.resizePreserveCenter()
  },
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_utils_mountableMixin_js__WEBPACK_IMPORTED_MODULE_2__["default"]],
  props: (0,_build_component_js__WEBPACK_IMPORTED_MODULE_5__.mappedPropsToVueProps)({...props, ...events.reduce((obj, eventName) => ({...obj, [`on${eventName.charAt(0).toUpperCase()}${eventName.slice(1)}`.replace(/[-_]+(.)?/g, (_, c) => c ? c.toUpperCase() : '')]: Function}), {}) } ),
  inheritAttrs: false,

  provide() {
    this.$mapPromise = new Promise((resolve, reject) => {
      this.$mapPromiseDeferred = { resolve, reject }
    })
    return {
      $mapPromise: this.$mapPromise,
    }
  },
  emits: ['center_changed', 'zoom_changed', 'bounds_changed'],
  computed: {
    finalLat() {
      return this.center && typeof this.center.lat === 'function'
        ? this.center.lat()
        : this.center.lat
    },
    finalLng() {
      return this.center && typeof this.center.lng === 'function'
        ? this.center.lng()
        : this.center.lng
    },
    finalLatLng() {
      return { lat: this.finalLat, lng: this.finalLng }
    },
  },

  watch: {
    zoom(zoom) {
      if (this.$mapObject) {
        this.$mapObject.setZoom(zoom)
      }
    },
  },

  mounted() {
    return this.$gmapApiPromiseLazy()
      .then(() => {
        // getting the DOM element where to create the map
        const element = this.$refs['vue-map']

        // creating the map
        const options = {
          ...this.options,
          ...(0,_utils_bindProps_js__WEBPACK_IMPORTED_MODULE_1__.getPropsValues)(this, props),
        }
        delete options.options
        this.$mapObject = new google.maps.Map(element, options)

        // binding properties (two and one way)
        ;(0,_utils_bindProps_js__WEBPACK_IMPORTED_MODULE_1__.bindProps)(this, this.$mapObject, props)
        // binding events
        ;(0,_utils_bindEvents_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, this.$mapObject, events)

        // manually trigger center and zoom
        ;(0,_utils_TwoWayBindingWrapper_js__WEBPACK_IMPORTED_MODULE_3__["default"])((increment, decrement, shouldUpdate) => {
          this.$mapObject.addListener('center_changed', () => {
            if (shouldUpdate()) {
              this.$emit('center_changed', this.$mapObject.getCenter())
            }
            decrement()
          })

          const updateCenter = () => {
            increment()
            this.$mapObject.setCenter(this.finalLatLng)
          }

          ;(0,_utils_WatchPrimitiveProperties_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, ['finalLat', 'finalLng'], updateCenter)
        })
        this.$mapObject.addListener('zoom_changed', () => {
          this.$emit('zoom_changed', this.$mapObject.getZoom())
        })
        this.$mapObject.addListener('bounds_changed', () => {
          this.$emit('bounds_changed', this.$mapObject.getBounds())
        })

        this.$mapPromiseDeferred.resolve(this.$mapObject)

        return this.$mapObject
      })
      .catch((error) => {
        throw error
      })
  },
  methods: {
    ...customMethods,
    ...linkedMethods,
  },
});


/***/ }),

/***/ "./node_modules/@fawmi/vue-google-maps/src/components/marker.vue":
/*!***********************************************************************!*\
  !*** ./node_modules/@fawmi/vue-google-maps/src/components/marker.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _marker_vue_vue_type_template_id_21eae1a6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./marker.vue?vue&type=template&id=21eae1a6 */ "./node_modules/@fawmi/vue-google-maps/src/components/marker.vue?vue&type=template&id=21eae1a6");
/* harmony import */ var _marker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./marker.vue?vue&type=script&lang=js */ "./node_modules/@fawmi/vue-google-maps/src/components/marker.vue?vue&type=script&lang=js");
/* harmony import */ var _Volumes_Data_Laravel_autopreliaciny_vendor_wamesk_laravel_nova_address_field_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Volumes_Data_Laravel_autopreliaciny_vendor_wamesk_laravel_nova_address_field_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_marker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_marker_vue_vue_type_template_id_21eae1a6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"node_modules/@fawmi/vue-google-maps/src/components/marker.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@fawmi/vue-google-maps/src/components/marker.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@fawmi/vue-google-maps/src/components/marker.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _build_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./build-component.js */ "./node_modules/@fawmi/vue-google-maps/src/components/build-component.js");




const props = {
  animation: {
    twoWay: true,
    type: Number,
  },
  attribution: {
    type: Object,
  },
  clickable: {
    type: Boolean,
    twoWay: true,
    default: true,
  },
  cursor: {
    type: String,
    twoWay: true,
  },
  draggable: {
    type: Boolean,
    twoWay: true,
    default: false,
  },
  icon: {
    twoWay: true,
  },
  label: {},
  opacity: {
    type: Number,
    default: 1,
  },
  options: {
    type: Object,
  },
  place: {
    type: Object,
  },
  position: {
    type: Object,
    twoWay: true,
  },
  shape: {
    type: Object,
    twoWay: true,
  },
  title: {
    type: String,
    twoWay: true,
  },
  zIndex: {
    type: Number,
    twoWay: true,
  },
  visible: {
    twoWay: true,
    default: true,
  },
}

const events = [
  'click',
  'rightclick',
  'dblclick',
  'drag',
  'dragstart',
  'dragend',
  'mouseup',
  'mousedown',
  'mouseover',
  'mouseout',
]

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_build_component_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
  mappedProps: props,
  events,
  name: 'marker',
  ctr: () => google.maps.Marker,

  inject: {
    $clusterPromise: {
      default: null,
    },
  },
  emits: events,
  unmounted() {
    if (!this.$markerObject) {
      return
    }

    if (this.$clusterObject) {
      // Repaint will be performed in `updated()` of cluster
      this.$clusterObject.removeMarker(this.$markerObject, true)
    } else {
      this.$markerObject.setMap(null)
    }
  },

  beforeCreate(options) {
    if (this.$clusterPromise) {
      options.map = null
    }

    return this.$clusterPromise
  },

  afterCreate(inst) {
    events.forEach((event)=> {
      inst.addListener(event, (payload)=> {
        this.$emit(event, payload)
      });
    })
    if (this.$clusterPromise) {
      this.$clusterPromise.then((co) => {
        this.$clusterObject = co
        co.addMarker(inst)
      })
    }
  },
}));


/***/ }),

/***/ "./resources/js/components/DetailField.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/DetailField.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DetailField_vue_vue_type_template_id_0224618e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetailField.vue?vue&type=template&id=0224618e */ "./resources/js/components/DetailField.vue?vue&type=template&id=0224618e");
/* harmony import */ var _DetailField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailField.vue?vue&type=script&lang=js */ "./resources/js/components/DetailField.vue?vue&type=script&lang=js");
/* harmony import */ var _DetailField_vue_vue_type_style_index_0_id_0224618e_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailField.vue?vue&type=style&index=0&id=0224618e&lang=css */ "./resources/js/components/DetailField.vue?vue&type=style&index=0&id=0224618e&lang=css");
/* harmony import */ var _Volumes_Data_Laravel_autopreliaciny_vendor_wamesk_laravel_nova_address_field_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Volumes_Data_Laravel_autopreliaciny_vendor_wamesk_laravel_nova_address_field_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_DetailField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DetailField_vue_vue_type_template_id_0224618e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/DetailField.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/FormField.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/FormField.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FormField_vue_vue_type_template_id_c023248a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormField.vue?vue&type=template&id=c023248a */ "./resources/js/components/FormField.vue?vue&type=template&id=c023248a");
/* harmony import */ var _FormField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormField.vue?vue&type=script&lang=js */ "./resources/js/components/FormField.vue?vue&type=script&lang=js");
/* harmony import */ var _Volumes_Data_Laravel_autopreliaciny_vendor_wamesk_laravel_nova_address_field_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Volumes_Data_Laravel_autopreliaciny_vendor_wamesk_laravel_nova_address_field_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_FormField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_FormField_vue_vue_type_template_id_c023248a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/FormField.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/IndexField.vue":
/*!************************************************!*\
  !*** ./resources/js/components/IndexField.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IndexField_vue_vue_type_template_id_9e63f81a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexField.vue?vue&type=template&id=9e63f81a */ "./resources/js/components/IndexField.vue?vue&type=template&id=9e63f81a");
/* harmony import */ var _IndexField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexField.vue?vue&type=script&lang=js */ "./resources/js/components/IndexField.vue?vue&type=script&lang=js");
/* harmony import */ var _Volumes_Data_Laravel_autopreliaciny_vendor_wamesk_laravel_nova_address_field_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Volumes_Data_Laravel_autopreliaciny_vendor_wamesk_laravel_nova_address_field_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_IndexField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_IndexField_vue_vue_type_template_id_9e63f81a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/IndexField.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/DetailField.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/components/DetailField.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DetailField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DetailField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DetailField.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DetailField.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/FormField.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/components/FormField.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FormField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FormField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FormField.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FormField.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/IndexField.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/components/IndexField.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IndexField.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexField.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/DetailField.vue?vue&type=template&id=0224618e":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/DetailField.vue?vue&type=template&id=0224618e ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DetailField_vue_vue_type_template_id_0224618e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DetailField_vue_vue_type_template_id_0224618e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DetailField.vue?vue&type=template&id=0224618e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DetailField.vue?vue&type=template&id=0224618e");


/***/ }),

/***/ "./resources/js/components/FormField.vue?vue&type=template&id=c023248a":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/FormField.vue?vue&type=template&id=c023248a ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FormField_vue_vue_type_template_id_c023248a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FormField_vue_vue_type_template_id_c023248a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FormField.vue?vue&type=template&id=c023248a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FormField.vue?vue&type=template&id=c023248a");


/***/ }),

/***/ "./resources/js/components/IndexField.vue?vue&type=template&id=9e63f81a":
/*!******************************************************************************!*\
  !*** ./resources/js/components/IndexField.vue?vue&type=template&id=9e63f81a ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexField_vue_vue_type_template_id_9e63f81a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexField_vue_vue_type_template_id_9e63f81a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IndexField.vue?vue&type=template&id=9e63f81a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/IndexField.vue?vue&type=template&id=9e63f81a");


/***/ }),

/***/ "./node_modules/@fawmi/vue-google-maps/src/components/map.vue?vue&type=style&index=0&id=0c1aca79&lang=css":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@fawmi/vue-google-maps/src/components/map.vue?vue&type=style&index=0&id=0c1aca79&lang=css ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_cjs_js_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_map_vue_vue_type_style_index_0_id_0c1aca79_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../style-loader/dist/cjs.js!../../../../css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../vue-loader/dist/stylePostLoader.js!../../../../postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./map.vue?vue&type=style&index=0&id=0c1aca79&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@fawmi/vue-google-maps/src/components/map.vue?vue&type=style&index=0&id=0c1aca79&lang=css");


/***/ }),

/***/ "./resources/js/components/DetailField.vue?vue&type=style&index=0&id=0224618e&lang=css":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/DetailField.vue?vue&type=style&index=0&id=0224618e&lang=css ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DetailField_vue_vue_type_style_index_0_id_0224618e_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DetailField.vue?vue&type=style&index=0&id=0224618e&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DetailField.vue?vue&type=style&index=0&id=0224618e&lang=css");


/***/ }),

/***/ "./node_modules/@fawmi/vue-google-maps/src/components/autocomplete.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@fawmi/vue-google-maps/src/components/autocomplete.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _vue_loader_dist_index_js_ruleSet_0_use_0_autocomplete_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _vue_loader_dist_index_js_ruleSet_0_use_0_autocomplete_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./autocomplete.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@fawmi/vue-google-maps/src/components/autocomplete.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./node_modules/@fawmi/vue-google-maps/src/components/cluster.vue?vue&type=script&lang=js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@fawmi/vue-google-maps/src/components/cluster.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _vue_loader_dist_index_js_ruleSet_0_use_0_cluster_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _vue_loader_dist_index_js_ruleSet_0_use_0_cluster_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./cluster.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@fawmi/vue-google-maps/src/components/cluster.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./node_modules/@fawmi/vue-google-maps/src/components/infoWindow.vue?vue&type=script&lang=js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@fawmi/vue-google-maps/src/components/infoWindow.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _vue_loader_dist_index_js_ruleSet_0_use_0_infoWindow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _vue_loader_dist_index_js_ruleSet_0_use_0_infoWindow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./infoWindow.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@fawmi/vue-google-maps/src/components/infoWindow.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./node_modules/@fawmi/vue-google-maps/src/components/map.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@fawmi/vue-google-maps/src/components/map.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _vue_loader_dist_index_js_ruleSet_0_use_0_map_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _vue_loader_dist_index_js_ruleSet_0_use_0_map_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./map.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@fawmi/vue-google-maps/src/components/map.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./node_modules/@fawmi/vue-google-maps/src/components/marker.vue?vue&type=script&lang=js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@fawmi/vue-google-maps/src/components/marker.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _vue_loader_dist_index_js_ruleSet_0_use_0_marker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _vue_loader_dist_index_js_ruleSet_0_use_0_marker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./marker.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@fawmi/vue-google-maps/src/components/marker.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./node_modules/@fawmi/vue-google-maps/src/components/autocomplete.vue?vue&type=template&id=5b7498ca":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@fawmi/vue-google-maps/src/components/autocomplete.vue?vue&type=template&id=5b7498ca ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_vue_loader_dist_index_js_ruleSet_0_use_0_autocomplete_vue_vue_type_template_id_5b7498ca__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_vue_loader_dist_index_js_ruleSet_0_use_0_autocomplete_vue_vue_type_template_id_5b7498ca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./autocomplete.vue?vue&type=template&id=5b7498ca */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@fawmi/vue-google-maps/src/components/autocomplete.vue?vue&type=template&id=5b7498ca");


/***/ }),

/***/ "./node_modules/@fawmi/vue-google-maps/src/components/cluster.vue?vue&type=template&id=b97a24d2":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@fawmi/vue-google-maps/src/components/cluster.vue?vue&type=template&id=b97a24d2 ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_vue_loader_dist_index_js_ruleSet_0_use_0_cluster_vue_vue_type_template_id_b97a24d2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_vue_loader_dist_index_js_ruleSet_0_use_0_cluster_vue_vue_type_template_id_b97a24d2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./cluster.vue?vue&type=template&id=b97a24d2 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@fawmi/vue-google-maps/src/components/cluster.vue?vue&type=template&id=b97a24d2");


/***/ }),

/***/ "./node_modules/@fawmi/vue-google-maps/src/components/infoWindow.vue?vue&type=template&id=6c9aa5b1":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@fawmi/vue-google-maps/src/components/infoWindow.vue?vue&type=template&id=6c9aa5b1 ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_vue_loader_dist_index_js_ruleSet_0_use_0_infoWindow_vue_vue_type_template_id_6c9aa5b1__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_vue_loader_dist_index_js_ruleSet_0_use_0_infoWindow_vue_vue_type_template_id_6c9aa5b1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./infoWindow.vue?vue&type=template&id=6c9aa5b1 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@fawmi/vue-google-maps/src/components/infoWindow.vue?vue&type=template&id=6c9aa5b1");


/***/ }),

/***/ "./node_modules/@fawmi/vue-google-maps/src/components/map.vue?vue&type=template&id=0c1aca79":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@fawmi/vue-google-maps/src/components/map.vue?vue&type=template&id=0c1aca79 ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_vue_loader_dist_index_js_ruleSet_0_use_0_map_vue_vue_type_template_id_0c1aca79__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_vue_loader_dist_index_js_ruleSet_0_use_0_map_vue_vue_type_template_id_0c1aca79__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./map.vue?vue&type=template&id=0c1aca79 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@fawmi/vue-google-maps/src/components/map.vue?vue&type=template&id=0c1aca79");


/***/ }),

/***/ "./node_modules/@fawmi/vue-google-maps/src/components/marker.vue?vue&type=template&id=21eae1a6":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@fawmi/vue-google-maps/src/components/marker.vue?vue&type=template&id=21eae1a6 ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_vue_loader_dist_index_js_ruleSet_0_use_0_marker_vue_vue_type_template_id_21eae1a6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_vue_loader_dist_index_js_ruleSet_0_use_0_marker_vue_vue_type_template_id_21eae1a6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./marker.vue?vue&type=template&id=21eae1a6 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@fawmi/vue-google-maps/src/components/marker.vue?vue&type=template&id=21eae1a6");


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@fawmi/vue-google-maps/src/components/autocomplete.vue?vue&type=template&id=5b7498ca":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@fawmi/vue-google-maps/src/components/autocomplete.vue?vue&type=template&id=5b7498ca ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({ ref: "input" }, _ctx.$attrs, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toHandlers)(_ctx.$attrs, true)), null, 16 /* FULL_PROPS */))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@fawmi/vue-google-maps/src/components/cluster.vue?vue&type=template&id=b97a24d2":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@fawmi/vue-google-maps/src/components/cluster.vue?vue&type=template&id=b97a24d2 ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@fawmi/vue-google-maps/src/components/infoWindow.vue?vue&type=template&id=6c9aa5b1":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@fawmi/vue-google-maps/src/components/infoWindow.vue?vue&type=template&id=6c9aa5b1 ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { ref: "infoWindow" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")
  ], 512 /* NEED_PATCH */))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@fawmi/vue-google-maps/src/components/map.vue?vue&type=template&id=0c1aca79":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@fawmi/vue-google-maps/src/components/map.vue?vue&type=template&id=0c1aca79 ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { class: "vue-map-hidden" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["vue-map-container", _ctx.$attrs.class])
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      ref: "vue-map",
      class: "vue-map",
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(_ctx.$attrs.style ? _ctx.$attrs.style : '')
    }, null, 4 /* STYLE */),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")
    ]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "visible")
  ], 2 /* CLASS */))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@fawmi/vue-google-maps/src/components/marker.vue?vue&type=template&id=21eae1a6":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/@fawmi/vue-google-maps/src/components/marker.vue?vue&type=template&id=21eae1a6 ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    onClick: _cache[0] || (_cache[0] = ()=> {console.log('sdfsd')})
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")
  ]))
}

/***/ }),

/***/ "laravel-nova":
/*!******************************!*\
  !*** external "LaravelNova" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = LaravelNova;

/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = Vue;

/***/ }),

/***/ "./node_modules/kdbush/index.js":
/*!**************************************!*\
  !*** ./node_modules/kdbush/index.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ KDBush)
/* harmony export */ });

const ARRAY_TYPES = [
    Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array,
    Int32Array, Uint32Array, Float32Array, Float64Array
];

/** @typedef {Int8ArrayConstructor | Uint8ArrayConstructor | Uint8ClampedArrayConstructor | Int16ArrayConstructor | Uint16ArrayConstructor | Int32ArrayConstructor | Uint32ArrayConstructor | Float32ArrayConstructor | Float64ArrayConstructor} TypedArrayConstructor */

const VERSION = 1; // serialized format version
const HEADER_SIZE = 8;

class KDBush {

    /**
     * Creates an index from raw `ArrayBuffer` data.
     * @param {ArrayBuffer} data
     */
    static from(data) {
        if (!(data instanceof ArrayBuffer)) {
            throw new Error('Data must be an instance of ArrayBuffer.');
        }
        const [magic, versionAndType] = new Uint8Array(data, 0, 2);
        if (magic !== 0xdb) {
            throw new Error('Data does not appear to be in a KDBush format.');
        }
        const version = versionAndType >> 4;
        if (version !== VERSION) {
            throw new Error(`Got v${version} data when expected v${VERSION}.`);
        }
        const ArrayType = ARRAY_TYPES[versionAndType & 0x0f];
        if (!ArrayType) {
            throw new Error('Unrecognized array type.');
        }
        const [nodeSize] = new Uint16Array(data, 2, 1);
        const [numItems] = new Uint32Array(data, 4, 1);

        return new KDBush(numItems, nodeSize, ArrayType, data);
    }

    /**
     * Creates an index that will hold a given number of items.
     * @param {number} numItems
     * @param {number} [nodeSize=64] Size of the KD-tree node (64 by default).
     * @param {TypedArrayConstructor} [ArrayType=Float64Array] The array type used for coordinates storage (`Float64Array` by default).
     * @param {ArrayBuffer} [data] (For internal use only)
     */
    constructor(numItems, nodeSize = 64, ArrayType = Float64Array, data) {
        if (isNaN(numItems) || numItems < 0) throw new Error(`Unpexpected numItems value: ${numItems}.`);

        this.numItems = +numItems;
        this.nodeSize = Math.min(Math.max(+nodeSize, 2), 65535);
        this.ArrayType = ArrayType;
        this.IndexArrayType = numItems < 65536 ? Uint16Array : Uint32Array;

        const arrayTypeIndex = ARRAY_TYPES.indexOf(this.ArrayType);
        const coordsByteSize = numItems * 2 * this.ArrayType.BYTES_PER_ELEMENT;
        const idsByteSize = numItems * this.IndexArrayType.BYTES_PER_ELEMENT;
        const padCoords = (8 - idsByteSize % 8) % 8;

        if (arrayTypeIndex < 0) {
            throw new Error(`Unexpected typed array class: ${ArrayType}.`);
        }

        if (data && (data instanceof ArrayBuffer)) { // reconstruct an index from a buffer
            this.data = data;
            this.ids = new this.IndexArrayType(this.data, HEADER_SIZE, numItems);
            this.coords = new this.ArrayType(this.data, HEADER_SIZE + idsByteSize + padCoords, numItems * 2);
            this._pos = numItems * 2;
            this._finished = true;
        } else { // initialize a new index
            this.data = new ArrayBuffer(HEADER_SIZE + coordsByteSize + idsByteSize + padCoords);
            this.ids = new this.IndexArrayType(this.data, HEADER_SIZE, numItems);
            this.coords = new this.ArrayType(this.data, HEADER_SIZE + idsByteSize + padCoords, numItems * 2);
            this._pos = 0;
            this._finished = false;

            // set header
            new Uint8Array(this.data, 0, 2).set([0xdb, (VERSION << 4) + arrayTypeIndex]);
            new Uint16Array(this.data, 2, 1)[0] = nodeSize;
            new Uint32Array(this.data, 4, 1)[0] = numItems;
        }
    }

    /**
     * Add a point to the index.
     * @param {number} x
     * @param {number} y
     * @returns {number} An incremental index associated with the added item (starting from `0`).
     */
    add(x, y) {
        const index = this._pos >> 1;
        this.ids[index] = index;
        this.coords[this._pos++] = x;
        this.coords[this._pos++] = y;
        return index;
    }

    /**
     * Perform indexing of the added points.
     */
    finish() {
        const numAdded = this._pos >> 1;
        if (numAdded !== this.numItems) {
            throw new Error(`Added ${numAdded} items when expected ${this.numItems}.`);
        }
        // kd-sort both arrays for efficient search
        sort(this.ids, this.coords, this.nodeSize, 0, this.numItems - 1, 0);

        this._finished = true;
        return this;
    }

    /**
     * Search the index for items within a given bounding box.
     * @param {number} minX
     * @param {number} minY
     * @param {number} maxX
     * @param {number} maxY
     * @returns {number[]} An array of indices correponding to the found items.
     */
    range(minX, minY, maxX, maxY) {
        if (!this._finished) throw new Error('Data not yet indexed - call index.finish().');

        const {ids, coords, nodeSize} = this;
        const stack = [0, ids.length - 1, 0];
        const result = [];

        // recursively search for items in range in the kd-sorted arrays
        while (stack.length) {
            const axis = stack.pop() || 0;
            const right = stack.pop() || 0;
            const left = stack.pop() || 0;

            // if we reached "tree node", search linearly
            if (right - left <= nodeSize) {
                for (let i = left; i <= right; i++) {
                    const x = coords[2 * i];
                    const y = coords[2 * i + 1];
                    if (x >= minX && x <= maxX && y >= minY && y <= maxY) result.push(ids[i]);
                }
                continue;
            }

            // otherwise find the middle index
            const m = (left + right) >> 1;

            // include the middle item if it's in range
            const x = coords[2 * m];
            const y = coords[2 * m + 1];
            if (x >= minX && x <= maxX && y >= minY && y <= maxY) result.push(ids[m]);

            // queue search in halves that intersect the query
            if (axis === 0 ? minX <= x : minY <= y) {
                stack.push(left);
                stack.push(m - 1);
                stack.push(1 - axis);
            }
            if (axis === 0 ? maxX >= x : maxY >= y) {
                stack.push(m + 1);
                stack.push(right);
                stack.push(1 - axis);
            }
        }

        return result;
    }

    /**
     * Search the index for items within a given radius.
     * @param {number} qx
     * @param {number} qy
     * @param {number} r Query radius.
     * @returns {number[]} An array of indices correponding to the found items.
     */
    within(qx, qy, r) {
        if (!this._finished) throw new Error('Data not yet indexed - call index.finish().');

        const {ids, coords, nodeSize} = this;
        const stack = [0, ids.length - 1, 0];
        const result = [];
        const r2 = r * r;

        // recursively search for items within radius in the kd-sorted arrays
        while (stack.length) {
            const axis = stack.pop() || 0;
            const right = stack.pop() || 0;
            const left = stack.pop() || 0;

            // if we reached "tree node", search linearly
            if (right - left <= nodeSize) {
                for (let i = left; i <= right; i++) {
                    if (sqDist(coords[2 * i], coords[2 * i + 1], qx, qy) <= r2) result.push(ids[i]);
                }
                continue;
            }

            // otherwise find the middle index
            const m = (left + right) >> 1;

            // include the middle item if it's in range
            const x = coords[2 * m];
            const y = coords[2 * m + 1];
            if (sqDist(x, y, qx, qy) <= r2) result.push(ids[m]);

            // queue search in halves that intersect the query
            if (axis === 0 ? qx - r <= x : qy - r <= y) {
                stack.push(left);
                stack.push(m - 1);
                stack.push(1 - axis);
            }
            if (axis === 0 ? qx + r >= x : qy + r >= y) {
                stack.push(m + 1);
                stack.push(right);
                stack.push(1 - axis);
            }
        }

        return result;
    }
}

/**
 * @param {Uint16Array | Uint32Array} ids
 * @param {InstanceType<TypedArrayConstructor>} coords
 * @param {number} nodeSize
 * @param {number} left
 * @param {number} right
 * @param {number} axis
 */
function sort(ids, coords, nodeSize, left, right, axis) {
    if (right - left <= nodeSize) return;

    const m = (left + right) >> 1; // middle index

    // sort ids and coords around the middle index so that the halves lie
    // either left/right or top/bottom correspondingly (taking turns)
    select(ids, coords, m, left, right, axis);

    // recursively kd-sort first half and second half on the opposite axis
    sort(ids, coords, nodeSize, left, m - 1, 1 - axis);
    sort(ids, coords, nodeSize, m + 1, right, 1 - axis);
}

/**
 * Custom Floyd-Rivest selection algorithm: sort ids and coords so that
 * [left..k-1] items are smaller than k-th item (on either x or y axis)
 * @param {Uint16Array | Uint32Array} ids
 * @param {InstanceType<TypedArrayConstructor>} coords
 * @param {number} k
 * @param {number} left
 * @param {number} right
 * @param {number} axis
 */
function select(ids, coords, k, left, right, axis) {

    while (right > left) {
        if (right - left > 600) {
            const n = right - left + 1;
            const m = k - left + 1;
            const z = Math.log(n);
            const s = 0.5 * Math.exp(2 * z / 3);
            const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
            const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
            const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
            select(ids, coords, k, newLeft, newRight, axis);
        }

        const t = coords[2 * k + axis];
        let i = left;
        let j = right;

        swapItem(ids, coords, left, k);
        if (coords[2 * right + axis] > t) swapItem(ids, coords, left, right);

        while (i < j) {
            swapItem(ids, coords, i, j);
            i++;
            j--;
            while (coords[2 * i + axis] < t) i++;
            while (coords[2 * j + axis] > t) j--;
        }

        if (coords[2 * left + axis] === t) swapItem(ids, coords, left, j);
        else {
            j++;
            swapItem(ids, coords, j, right);
        }

        if (j <= k) left = j + 1;
        if (k <= j) right = j - 1;
    }
}

/**
 * @param {Uint16Array | Uint32Array} ids
 * @param {InstanceType<TypedArrayConstructor>} coords
 * @param {number} i
 * @param {number} j
 */
function swapItem(ids, coords, i, j) {
    swap(ids, i, j);
    swap(coords, 2 * i, 2 * j);
    swap(coords, 2 * i + 1, 2 * j + 1);
}

/**
 * @param {InstanceType<TypedArrayConstructor>} arr
 * @param {number} i
 * @param {number} j
 */
function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

/**
 * @param {number} ax
 * @param {number} ay
 * @param {number} bx
 * @param {number} by
 */
function sqDist(ax, ay, bx, by) {
    const dx = ax - bx;
    const dy = ay - by;
    return dx * dx + dy * dy;
}


/***/ }),

/***/ "./node_modules/supercluster/index.js":
/*!********************************************!*\
  !*** ./node_modules/supercluster/index.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Supercluster)
/* harmony export */ });
/* harmony import */ var kdbush__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kdbush */ "./node_modules/kdbush/index.js");



const defaultOptions = {
    minZoom: 0,   // min zoom to generate clusters on
    maxZoom: 16,  // max zoom level to cluster the points on
    minPoints: 2, // minimum points to form a cluster
    radius: 40,   // cluster radius in pixels
    extent: 512,  // tile extent (radius is calculated relative to it)
    nodeSize: 64, // size of the KD-tree leaf node, affects performance
    log: false,   // whether to log timing info

    // whether to generate numeric ids for input features (in vector tiles)
    generateId: false,

    // a reduce function for calculating custom cluster properties
    reduce: null, // (accumulated, props) => { accumulated.sum += props.sum; }

    // properties to use for individual points when running the reducer
    map: props => props // props => ({sum: props.my_value})
};

const fround = Math.fround || (tmp => ((x) => { tmp[0] = +x; return tmp[0]; }))(new Float32Array(1));

const OFFSET_ZOOM = 2;
const OFFSET_ID = 3;
const OFFSET_PARENT = 4;
const OFFSET_NUM = 5;
const OFFSET_PROP = 6;

class Supercluster {
    constructor(options) {
        this.options = Object.assign(Object.create(defaultOptions), options);
        this.trees = new Array(this.options.maxZoom + 1);
        this.stride = this.options.reduce ? 7 : 6;
        this.clusterProps = [];
    }

    load(points) {
        const {log, minZoom, maxZoom} = this.options;

        if (log) console.time('total time');

        const timerId = `prepare ${  points.length  } points`;
        if (log) console.time(timerId);

        this.points = points;

        // generate a cluster object for each point and index input points into a KD-tree
        const data = [];

        for (let i = 0; i < points.length; i++) {
            const p = points[i];
            if (!p.geometry) continue;

            const [lng, lat] = p.geometry.coordinates;
            const x = fround(lngX(lng));
            const y = fround(latY(lat));
            // store internal point/cluster data in flat numeric arrays for performance
            data.push(
                x, y, // projected point coordinates
                Infinity, // the last zoom the point was processed at
                i, // index of the source feature in the original input array
                -1, // parent cluster id
                1 // number of points in a cluster
            );
            if (this.options.reduce) data.push(0); // noop
        }
        let tree = this.trees[maxZoom + 1] = this._createTree(data);

        if (log) console.timeEnd(timerId);

        // cluster points on max zoom, then cluster the results on previous zoom, etc.;
        // results in a cluster hierarchy across zoom levels
        for (let z = maxZoom; z >= minZoom; z--) {
            const now = +Date.now();

            // create a new set of clusters for the zoom and index them with a KD-tree
            tree = this.trees[z] = this._createTree(this._cluster(tree, z));

            if (log) console.log('z%d: %d clusters in %dms', z, tree.numItems, +Date.now() - now);
        }

        if (log) console.timeEnd('total time');

        return this;
    }

    getClusters(bbox, zoom) {
        let minLng = ((bbox[0] + 180) % 360 + 360) % 360 - 180;
        const minLat = Math.max(-90, Math.min(90, bbox[1]));
        let maxLng = bbox[2] === 180 ? 180 : ((bbox[2] + 180) % 360 + 360) % 360 - 180;
        const maxLat = Math.max(-90, Math.min(90, bbox[3]));

        if (bbox[2] - bbox[0] >= 360) {
            minLng = -180;
            maxLng = 180;
        } else if (minLng > maxLng) {
            const easternHem = this.getClusters([minLng, minLat, 180, maxLat], zoom);
            const westernHem = this.getClusters([-180, minLat, maxLng, maxLat], zoom);
            return easternHem.concat(westernHem);
        }

        const tree = this.trees[this._limitZoom(zoom)];
        const ids = tree.range(lngX(minLng), latY(maxLat), lngX(maxLng), latY(minLat));
        const data = tree.data;
        const clusters = [];
        for (const id of ids) {
            const k = this.stride * id;
            clusters.push(data[k + OFFSET_NUM] > 1 ? getClusterJSON(data, k, this.clusterProps) : this.points[data[k + OFFSET_ID]]);
        }
        return clusters;
    }

    getChildren(clusterId) {
        const originId = this._getOriginId(clusterId);
        const originZoom = this._getOriginZoom(clusterId);
        const errorMsg = 'No cluster with the specified id.';

        const tree = this.trees[originZoom];
        if (!tree) throw new Error(errorMsg);

        const data = tree.data;
        if (originId * this.stride >= data.length) throw new Error(errorMsg);

        const r = this.options.radius / (this.options.extent * Math.pow(2, originZoom - 1));
        const x = data[originId * this.stride];
        const y = data[originId * this.stride + 1];
        const ids = tree.within(x, y, r);
        const children = [];
        for (const id of ids) {
            const k = id * this.stride;
            if (data[k + OFFSET_PARENT] === clusterId) {
                children.push(data[k + OFFSET_NUM] > 1 ? getClusterJSON(data, k, this.clusterProps) : this.points[data[k + OFFSET_ID]]);
            }
        }

        if (children.length === 0) throw new Error(errorMsg);

        return children;
    }

    getLeaves(clusterId, limit, offset) {
        limit = limit || 10;
        offset = offset || 0;

        const leaves = [];
        this._appendLeaves(leaves, clusterId, limit, offset, 0);

        return leaves;
    }

    getTile(z, x, y) {
        const tree = this.trees[this._limitZoom(z)];
        const z2 = Math.pow(2, z);
        const {extent, radius} = this.options;
        const p = radius / extent;
        const top = (y - p) / z2;
        const bottom = (y + 1 + p) / z2;

        const tile = {
            features: []
        };

        this._addTileFeatures(
            tree.range((x - p) / z2, top, (x + 1 + p) / z2, bottom),
            tree.data, x, y, z2, tile);

        if (x === 0) {
            this._addTileFeatures(
                tree.range(1 - p / z2, top, 1, bottom),
                tree.data, z2, y, z2, tile);
        }
        if (x === z2 - 1) {
            this._addTileFeatures(
                tree.range(0, top, p / z2, bottom),
                tree.data, -1, y, z2, tile);
        }

        return tile.features.length ? tile : null;
    }

    getClusterExpansionZoom(clusterId) {
        let expansionZoom = this._getOriginZoom(clusterId) - 1;
        while (expansionZoom <= this.options.maxZoom) {
            const children = this.getChildren(clusterId);
            expansionZoom++;
            if (children.length !== 1) break;
            clusterId = children[0].properties.cluster_id;
        }
        return expansionZoom;
    }

    _appendLeaves(result, clusterId, limit, offset, skipped) {
        const children = this.getChildren(clusterId);

        for (const child of children) {
            const props = child.properties;

            if (props && props.cluster) {
                if (skipped + props.point_count <= offset) {
                    // skip the whole cluster
                    skipped += props.point_count;
                } else {
                    // enter the cluster
                    skipped = this._appendLeaves(result, props.cluster_id, limit, offset, skipped);
                    // exit the cluster
                }
            } else if (skipped < offset) {
                // skip a single point
                skipped++;
            } else {
                // add a single point
                result.push(child);
            }
            if (result.length === limit) break;
        }

        return skipped;
    }

    _createTree(data) {
        const tree = new kdbush__WEBPACK_IMPORTED_MODULE_0__["default"](data.length / this.stride | 0, this.options.nodeSize, Float32Array);
        for (let i = 0; i < data.length; i += this.stride) tree.add(data[i], data[i + 1]);
        tree.finish();
        tree.data = data;
        return tree;
    }

    _addTileFeatures(ids, data, x, y, z2, tile) {
        for (const i of ids) {
            const k = i * this.stride;
            const isCluster = data[k + OFFSET_NUM] > 1;

            let tags, px, py;
            if (isCluster) {
                tags = getClusterProperties(data, k, this.clusterProps);
                px = data[k];
                py = data[k + 1];
            } else {
                const p = this.points[data[k + OFFSET_ID]];
                tags = p.properties;
                const [lng, lat] = p.geometry.coordinates;
                px = lngX(lng);
                py = latY(lat);
            }

            const f = {
                type: 1,
                geometry: [[
                    Math.round(this.options.extent * (px * z2 - x)),
                    Math.round(this.options.extent * (py * z2 - y))
                ]],
                tags
            };

            // assign id
            let id;
            if (isCluster || this.options.generateId) {
                // optionally generate id for points
                id = data[k + OFFSET_ID];
            } else {
                // keep id if already assigned
                id = this.points[data[k + OFFSET_ID]].id;
            }

            if (id !== undefined) f.id = id;

            tile.features.push(f);
        }
    }

    _limitZoom(z) {
        return Math.max(this.options.minZoom, Math.min(Math.floor(+z), this.options.maxZoom + 1));
    }

    _cluster(tree, zoom) {
        const {radius, extent, reduce, minPoints} = this.options;
        const r = radius / (extent * Math.pow(2, zoom));
        const data = tree.data;
        const nextData = [];
        const stride = this.stride;

        // loop through each point
        for (let i = 0; i < data.length; i += stride) {
            // if we've already visited the point at this zoom level, skip it
            if (data[i + OFFSET_ZOOM] <= zoom) continue;
            data[i + OFFSET_ZOOM] = zoom;

            // find all nearby points
            const x = data[i];
            const y = data[i + 1];
            const neighborIds = tree.within(data[i], data[i + 1], r);

            const numPointsOrigin = data[i + OFFSET_NUM];
            let numPoints = numPointsOrigin;

            // count the number of points in a potential cluster
            for (const neighborId of neighborIds) {
                const k = neighborId * stride;
                // filter out neighbors that are already processed
                if (data[k + OFFSET_ZOOM] > zoom) numPoints += data[k + OFFSET_NUM];
            }

            // if there were neighbors to merge, and there are enough points to form a cluster
            if (numPoints > numPointsOrigin && numPoints >= minPoints) {
                let wx = x * numPointsOrigin;
                let wy = y * numPointsOrigin;

                let clusterProperties;
                let clusterPropIndex = -1;

                // encode both zoom and point index on which the cluster originated -- offset by total length of features
                const id = ((i / stride | 0) << 5) + (zoom + 1) + this.points.length;

                for (const neighborId of neighborIds) {
                    const k = neighborId * stride;

                    if (data[k + OFFSET_ZOOM] <= zoom) continue;
                    data[k + OFFSET_ZOOM] = zoom; // save the zoom (so it doesn't get processed twice)

                    const numPoints2 = data[k + OFFSET_NUM];
                    wx += data[k] * numPoints2; // accumulate coordinates for calculating weighted center
                    wy += data[k + 1] * numPoints2;

                    data[k + OFFSET_PARENT] = id;

                    if (reduce) {
                        if (!clusterProperties) {
                            clusterProperties = this._map(data, i, true);
                            clusterPropIndex = this.clusterProps.length;
                            this.clusterProps.push(clusterProperties);
                        }
                        reduce(clusterProperties, this._map(data, k));
                    }
                }

                data[i + OFFSET_PARENT] = id;
                nextData.push(wx / numPoints, wy / numPoints, Infinity, id, -1, numPoints);
                if (reduce) nextData.push(clusterPropIndex);

            } else { // left points as unclustered
                for (let j = 0; j < stride; j++) nextData.push(data[i + j]);

                if (numPoints > 1) {
                    for (const neighborId of neighborIds) {
                        const k = neighborId * stride;
                        if (data[k + OFFSET_ZOOM] <= zoom) continue;
                        data[k + OFFSET_ZOOM] = zoom;
                        for (let j = 0; j < stride; j++) nextData.push(data[k + j]);
                    }
                }
            }
        }

        return nextData;
    }

    // get index of the point from which the cluster originated
    _getOriginId(clusterId) {
        return (clusterId - this.points.length) >> 5;
    }

    // get zoom of the point from which the cluster originated
    _getOriginZoom(clusterId) {
        return (clusterId - this.points.length) % 32;
    }

    _map(data, i, clone) {
        if (data[i + OFFSET_NUM] > 1) {
            const props = this.clusterProps[data[i + OFFSET_PROP]];
            return clone ? Object.assign({}, props) : props;
        }
        const original = this.points[data[i + OFFSET_ID]].properties;
        const result = this.options.map(original);
        return clone && result === original ? Object.assign({}, result) : result;
    }
}

function getClusterJSON(data, i, clusterProps) {
    return {
        type: 'Feature',
        id: data[i + OFFSET_ID],
        properties: getClusterProperties(data, i, clusterProps),
        geometry: {
            type: 'Point',
            coordinates: [xLng(data[i]), yLat(data[i + 1])]
        }
    };
}

function getClusterProperties(data, i, clusterProps) {
    const count = data[i + OFFSET_NUM];
    const abbrev =
        count >= 10000 ? `${Math.round(count / 1000)  }k` :
        count >= 1000 ? `${Math.round(count / 100) / 10  }k` : count;
    const propIndex = data[i + OFFSET_PROP];
    const properties = propIndex === -1 ? {} : Object.assign({}, clusterProps[propIndex]);
    return Object.assign(properties, {
        cluster: true,
        cluster_id: data[i + OFFSET_ID],
        point_count: count,
        point_count_abbreviated: abbrev
    });
}

// longitude/latitude to spherical mercator in [0..1] range
function lngX(lng) {
    return lng / 360 + 0.5;
}
function latY(lat) {
    const sin = Math.sin(lat * Math.PI / 180);
    const y = (0.5 - 0.25 * Math.log((1 + sin) / (1 - sin)) / Math.PI);
    return y < 0 ? 0 : y > 1 ? 1 : y;
}

// spherical mercator to longitude/latitude
function xLng(x) {
    return (x - 0.5) * 360;
}
function yLat(y) {
    const y2 = (180 - y * 360) * Math.PI / 180;
    return 360 * Math.atan(Math.exp(y2)) / Math.PI - 90;
}


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/field": 0,
/******/ 			"css/field": 0
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkwamesk_laravel_nova_address_field"] = self["webpackChunkwamesk_laravel_nova_address_field"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/field"], () => (__webpack_require__("./resources/js/field.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/field"], () => (__webpack_require__("./resources/css/field.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;