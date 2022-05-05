exports.ids = [6,1];
exports.modules = {

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(45);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("06c1aa53", content, true, context)
};

/***/ }),

/***/ 43:
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contracts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"SALES"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"DESC"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"},"arguments":[],"directives":[]},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ERC721Contract"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"stats"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalSales"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"average"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"ceiling"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"floor"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"volume"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"valueCount"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"symbol"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"unsafeOpenseaImageUrl"},"arguments":[],"directives":[]}]}}]}}]}}]}}]}}],"loc":{"start":0,"end":599}};
    doc.loc.source = {"body":"{\n    contracts(orderBy: SALES, orderDirection: DESC) {\n        edges {\n            node {\n                address\n                ... on ERC721Contract {\n                    name\n                    stats {\n                        totalSales\n                        average\n                        ceiling\n                        floor\n                        volume\n                    }\n                    attributes {\n                        valueCount\n                    }\n                    symbol\n                    unsafeOpenseaImageUrl\n                }\n            }\n        }\n    }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }
    
    module.exports = doc;
    


/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_6af01140_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_6af01140_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_6af01140_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_6af01140_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_6af01140_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".table-header[data-v-6af01140]{background-color:#1d2732;justify-content:space-between;color:#616c7f;text-transform:uppercase;font-size:14px}.table-header .table-cell[data-v-6af01140]{padding:12px 20px;font-size:12px;letter-spacing:-.1px}.table-row[data-v-6af01140]{border-bottom:1px solid #1d2732}.table-cell[data-v-6af01140]{padding:12px 20px;min-width:120px;line-height:normal}.table-cell.primary[data-v-6af01140]{display:inline-flex;min-width:256px;align-items:center}.table-cell.primary img[data-v-6af01140]{height:32px;border-radius:32px}.table tbody[data-v-6af01140]{background-color:#141c25}.table-value-icon[data-v-6af01140]{font-size:14px;line-height:1;margin-right:2px}.down[data-v-6af01140]{color:#f45b69}.up[data-v-6af01140]{color:#78ffd6}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dashboard.vue?vue&type=template&id=6af01140&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_vm._ssrNode("<div class=\"container\" data-v-6af01140>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-6af01140><div class=\"col-12\" data-v-6af01140><h1 class=\"title mb-2\" data-v-6af01140>Trending NFT Collections by <span class=\"blue\" data-v-6af01140>Sales</span></h1> <h2 class=\"subtitle\" data-v-6af01140>See what's selling. Prices updated in real time.</h2></div></div> "),_vm._ssrNode("<div class=\"row pb-0\" data-v-6af01140>","</div>",[_vm._ssrNode("<div class=\"col-12 col-md-4\" data-v-6af01140>","</div>",[_c('NuxtLink',{staticClass:"btn pill active",attrs:{"to":"/"}},[_vm._v("Home page")]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"btn pill",attrs:{"to":"/discover"}},[_vm._v("Home page")])],2),_vm._ssrNode(" <div class=\"col-12 col-md-8 text-right\" data-v-6af01140><div class=\"date-filters\" data-v-6af01140><span class=\"material-icons icon blue mr-2\" data-v-6af01140>\n                           whatshot\n                       </span> <button class=\"dashboard-filter-btn\" data-v-6af01140>7d</button> <button class=\"dashboard-filter-btn\" data-v-6af01140>15d</button> <button class=\"dashboard-filter-btn\" data-v-6af01140>30d</button></div></div>")],2),_vm._ssrNode(" <table class=\"table\" data-v-6af01140><tr class=\"table-header\" data-v-6af01140><td class=\"table-cell primary\" data-v-6af01140>Collection</td> <td class=\"table-cell\" data-v-6af01140>Sales floor</td> <td class=\"table-cell\" data-v-6af01140>Sales</td> <td class=\"table-cell\" data-v-6af01140>Aerage</td> <td class=\"table-cell\" data-v-6af01140>Volumne</td> <td class=\"table-cell\" data-v-6af01140>MKT CAP</td> <td class=\"table-cell\" data-v-6af01140>7D VOL</td></tr> <tbody data-v-6af01140>"+((_vm.collections.length > 0)?((_vm._ssrList((_vm.collections),function(collection,index){return ("<tr class=\"table-row\" data-v-6af01140><td class=\"table-cell primary\" data-v-6af01140><img"+(_vm._ssrAttr("src",collection.node.unsafeOpenseaImageUrl))+" alt data-v-6af01140> <div class=\"d-flex align-items-start flex-column ml-3\" data-v-6af01140><p class=\"mb-1 text bold white\" data-v-6af01140>"+_vm._ssrEscape(_vm._s(collection.node.name))+"</p> <small class=\"text-label mb-0\" data-v-6af01140>\n                               Circulating supply: <b data-v-6af01140>"+_vm._ssrEscape(_vm._s(_vm.sumAttributesArray(collection.node.attributes)))+"</b></small></div></td> <td class=\"table-cell\" data-v-6af01140><p class=\"text bold white mb-1\" data-v-6af01140>"+_vm._ssrEscape(_vm._s(collection.node.stats.floor.toFixed(2)))+"</p> <small class=\"text-label up d-flex align-items-center\" data-v-6af01140><span class=\"material-icons table-value-icon \" data-v-6af01140>\n                               north_east\n                           </span>\n                           0.48%\n                       </small></td> <td class=\"table-cell\" data-v-6af01140><p class=\"text bold white mb-1\" data-v-6af01140>"+_vm._ssrEscape(_vm._s(collection.node.stats.totalSales.toFixed(2)))+"</p> <small class=\"text-label up d-flex align-items-center\" data-v-6af01140><span class=\"material-icons table-value-icon \" data-v-6af01140>\n                               north_east\n                           </span>\n                           \n                           0.48%\n                       </small></td> <td class=\"table-cell\" data-v-6af01140><p class=\"text bold white mb-1\" data-v-6af01140>"+_vm._ssrEscape(_vm._s(collection.node.stats.average.toFixed(2)))+"</p> <small class=\"text-label down d-flex align-items-center\" data-v-6af01140><span class=\"material-icons table-value-icon \" data-v-6af01140>\n                               south_east\n                           </span>\n                           0.48%\n                       </small></td> <td class=\"table-cell\" data-v-6af01140><p class=\"text bold white mb-1\" data-v-6af01140>"+_vm._ssrEscape(_vm._s(collection.node.stats.volume.toFixed(2)))+"</p> <small class=\"text-label down d-flex align-items-center\" data-v-6af01140><span class=\"material-icons table-value-icon \" data-v-6af01140>\n                               south_east\n                           </span>\n                           0.48%\n                       </small></td> <td class=\"table-cell\" data-v-6af01140><p class=\"text bold white mb-1\" data-v-6af01140>"+_vm._ssrEscape(_vm._s((collection.node.stats.floor * collection.node.stats.totalSales).toFixed(2)))+"</p> <small class=\"text-label down d-flex align-items-center\" data-v-6af01140><span class=\"material-icons table-value-icon \" data-v-6af01140>\n                               south_east\n                           </span>\n                           0.48%\n                       </small></td> <td class=\"table-cell\" data-v-6af01140><div class=\"graph\" data-v-6af01140></div></td></tr>")}))):"<!---->")+"</tbody></table>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/dashboard.vue?vue&type=template&id=6af01140&scoped=true&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./graphql/Trending.gql
var Trending = __webpack_require__(43);
var Trending_default = /*#__PURE__*/__webpack_require__.n(Trending);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dashboard.vue?vue&type=script&lang=ts&


/* harmony default export */ var dashboardvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  data() {
    return {
      collections: []
    };
  },

  apollo: {
    collections: {
      query: Trending_default.a,
      update: data => data.contracts.edges,
      prefetch: true
    }
  },
  methods: {
    sumAttributesArray(arr) {
      let total_count = 0;
      arr.map(item => total_count += item.valueCount);
      return total_count;
    }

  }
}));
// CONCATENATED MODULE: ./components/dashboard.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_dashboardvue_type_script_lang_ts_ = (dashboardvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/dashboard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(44)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_dashboardvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6af01140",
  "e9230c14"
  
)

/* harmony default export */ var dashboard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=1fc6ac1a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('dashboard')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=1fc6ac1a&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./components/dashboard.vue + 4 modules
var dashboard = __webpack_require__(46);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=ts&


/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  name: 'IndexPage',
  components: {
    Dashboard: dashboard["default"]
  }
}));
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=ts&
 /* harmony default export */ var pagesvue_type_script_lang_ts_ = (lib_vue_loader_options_pagesvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6079b47c"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Dashboard: __webpack_require__(46).default})


/***/ })

};;
//# sourceMappingURL=index.js.map