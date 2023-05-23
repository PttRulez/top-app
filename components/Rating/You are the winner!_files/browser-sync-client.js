window.___browserSync___ = {};
___browserSync___.socketConfig = {'reconnectionAttempts': 50, 'path': '/browser-sync/socket.io'};
___browserSync___.socketUrl = '' + location.host + '/browser-sync';
___browserSync___.options = {
  'logLevel': 'info',
  'plugins': [],
  'port': 3000,
  'snippetOptions': {'async': true, 'whitelist': [], 'blacklist': [], 'rule': {'match': {}}},
  'reloadDebounce': 500,
  'mode': 'server',
  'scriptPaths': {
    'path': '/browser-sync/browser-sync-client.js',
    'versioned': '/browser-sync/browser-sync-client.js?v=2.29.1'
  },
  'server': {'baseDir': ['./dist'], 'directory': true, 'serveStaticOptions': {'index': 'index.html'}},
  'logFileChanges': true,
  'reloadThrottle': 0,
  'clientEvents': ['scroll', 'scroll:element', 'input:text', 'input:toggles', 'form:submit', 'form:reset', 'click'],
  'urls': {'local': 'http://localhost:3000', 'external': 'http://192.168.1.7:3000'},
  'hostnameSuffix': false,
  'scrollElements': [],
  'scheme': 'http',
  'startPath': null,
  'single': false,
  'host': null,
  'codeSync': true,
  'watchEvents': ['change'],
  'browser': 'default',
  'notify': true,
  'open': 'local',
  'reloadDelay': 0,
  'minify': true,
  'rewriteRules': [],
  'injectFileTypes': ['css', 'png', 'jpg', 'jpeg', 'svg', 'gif', 'webp', 'map'],
  'cors': false,
  'proxy': false,
  'tagNames': {
    'jpg': 'img',
    'css': 'link',
    'svg': 'img',
    'gif': 'img',
    'jpeg': 'img',
    'js': 'script',
    'png': 'img',
    'scss': 'link',
    'less': 'link'
  },
  'scrollRestoreTechnique': 'window.name',
  'watch': false,
  'watchOptions': {'ignoreInitial': true, 'cwd': '/home/petya/code/projects/faphouse/email-templates'},
  'cwd': '/home/petya/code/projects/faphouse/email-templates',
  'logConnections': false,
  'ghostMode': {
    'clicks': true,
    'scroll': true,
    'location': true,
    'forms': {'submit': true, 'inputs': true, 'toggles': true}
  },
  'middleware': [{'route': '', 'id': 'Browsersync Server Directory Middleware'}, {
    'route': '',
    'id': 'Browsersync Server ServeStatic Middleware - 0'
  }],
  'ignore': [],
  'injectChanges': true,
  'excludedFileTypes': ['js', 'css', 'pdf', 'map', 'svg', 'ico', 'woff', 'json', 'eot', 'ttf', 'png', 'jpg', 'jpeg', 'webp', 'gif', 'mp4', 'mp3', '3gp', 'ogg', 'ogv', 'webm', 'm4a', 'flv', 'wmv', 'avi', 'swf', 'scss'],
  'online': true,
  'socket': {
    'socketIoOptions': {'log': false},
    'socketIoClientConfig': {'reconnectionAttempts': 50},
    'path': '/browser-sync/socket.io',
    'clientPath': '/browser-sync',
    'namespace': '/browser-sync',
    'clients': {'heartbeatTimeout': 5000}
  },
  'ui': {'port': 3001},
  'logPrefix': 'Browsersync',
  'scrollThrottle': 0,
  'reloadOnRestart': false,
  'localOnly': false,
  'files': {'core': {'globs': [], 'objs': []}},
  'version': '2.29.1',
  'logSnippet': true,
  'injectNotification': false,
  'snippet': '<script id="__bs_script__">//<![CDATA[\n  (function() {\n    try {\n      var script = document.createElement(\'script\');\n      if (\'async\') {\n        script.async = true;\n      }\n      script.src = \'/browser-sync/browser-sync-client.js?v=2.29.1\'.replace("HOST", location.hostname);\n      if (document.body) {\n        document.body.appendChild(script);\n      }\n    } catch (e) {\n      console.error("Browsersync: could not append script tag", e);\n    }\n  })()\n//]]></script>\n',
  'timestamps': true,
  'serveStatic': [],
  'scrollElementMapping': [],
  'scrollProportionally': true,
  'xip': false
};
if (location.protocol == 'https:' && /^http:/.test(___browserSync___.socketUrl)) {
  ___browserSync___.socketUrl = ___browserSync___.socketUrl.replace(/^http:/, 'https:');
}

!function () {
  var t = {
    4247: function (t, e) {
      'use strict';

      function n(t) {
        return n = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
          return typeof t;
        } : function (t) {
          return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
        }, n(t);
      }

      function r() {
        return window;
      }

      function o() {
        return document;
      }

      function i(t, e) {
        var n, r, o = e.documentElement, i = e.body;
        return void 0 !== t.pageYOffset ? (n = t.pageXOffset, r = t.pageYOffset) : (n = o.scrollLeft || i.scrollLeft || 0, r = o.scrollTop || i.scrollTop || 0), {
          x: n,
          y: r
        };
      }

      function s(t) {
        var e = t.documentElement, n = t.body;
        return {x: n.scrollHeight - e.clientWidth, y: n.scrollHeight - e.clientHeight};
      }

      function c(t, e) {
        var n = o().getElementsByTagName(t);
        return Array.prototype.indexOf.call(n, e);
      }

      function a(t, e) {
        return u(s(e), t).y;
      }

      function u(t, e) {
        return {x: e.x / t.x || 0, y: e.y / t.y};
      }

      Object.defineProperty(e, '__esModule', {value: !0}), e.getScrollPercentage = e.getScrollTopPercentage = e.getScrollPositionForElement = e.getScrollPosition = e.getByPath = e.isUndefined = e.getLocation = e.isOldIe = e.forEach = e.reloadBrowser = e.setScroll = e.getBody = e.getSingleElement = e.getElementData = e.forceChange = e.getElementIndex = e.restoreScrollPosition = e.saveScrollPosition = e.getDocumentScrollSpace = e.getBrowserScrollPosition = e.getDocument = e.getWindow = void 0, e.getWindow = r, e.getDocument = o, e.getBrowserScrollPosition = i, e.getDocumentScrollSpace = s, e.saveScrollPosition = function (t, e) {
        var n = i(t, e);
        e.cookie = 'bs_scroll_pos=' + [n.x, n.y].join(',');
      }, e.restoreScrollPosition = function () {
        var t = o().cookie.replace(/(?:(?:^|.*;\s*)bs_scroll_pos\s*\=\s*([^;]*).*$)|^.*$/, '$1').split(',');
        r().scrollTo(Number(t[0]), Number(t[1]));
      }, e.getElementIndex = c, e.forceChange = function (t) {
        t.blur(), t.focus();
      }, e.getElementData = function (t) {
        var e = t.tagName;
        return {tagName: e, index: c(e, t)};
      }, e.getSingleElement = function (t, e) {
        return o().getElementsByTagName(t)[e];
      }, e.getBody = function () {
        return o().getElementsByTagName('body')[0];
      }, e.setScroll = function (t) {
        r().scrollTo(t.x, t.y);
      }, e.reloadBrowser = function () {
        r().location.reload();
      }, e.forEach = function (t, e) {
        for (var n = 0, r = t.length; n < r; n += 1) e(t[n], n, t);
      }, e.isOldIe = function () {
        return void 0 !== r().attachEvent;
      }, e.getLocation = function (t) {
        var e = o().createElement('a');
        return e.href = t, '' === e.host && (e.href = e.href), e;
      }, e.isUndefined = function (t) {
        return void 0 === t;
      }, e.getByPath = function (t, e) {
        for (var r = 0, o = e.split('.'), i = o.length; r < i; r++) {
          if (!t || 'object' !== n(t)) return !1;
          t = t[o[r]];
        }
        return void 0 !== t && t;
      }, e.getScrollPosition = function (t, e) {
        var n = i(t, e);
        return {raw: n, proportional: a(n, e)};
      }, e.getScrollPositionForElement = function (t) {
        var e = {x: t.scrollLeft, y: t.scrollTop};
        return {raw: e, proportional: u({x: t.scrollWidth, y: t.scrollHeight}, e).y};
      }, e.getScrollTopPercentage = a, e.getScrollPercentage = u;
    }, 7965: function (t, e, n) {
      'use strict';
      var r;
      Object.defineProperty(e, '__esModule', {value: !0}), e.domHandlers$ = e.Events = void 0;
      var o, i = n(5286), s = n(2934), c = n(3222), a = n(3354), u = n(4231), l = n(1343);
      !function (t) {
        t.PropSet = '@@BSDOM.Events.PropSet', t.StyleSet = '@@BSDOM.Events.StyleSet', t.LinkReplace = '@@BSDOM.Events.LinkReplace', t.SetScroll = '@@BSDOM.Events.SetScroll', t.SetWindowName = '@@BSDOM.Events.SetWindowName';
      }(o = e.Events || (e.Events = {})), e.domHandlers$ = new i.BehaviorSubject(((r = {})[o.PropSet] = s.propSetDomEffect, r[o.StyleSet] = c.styleSetDomEffect, r[o.LinkReplace] = a.linkReplaceDomEffect, r[o.SetScroll] = u.setScrollDomEffect, r[o.SetWindowName] = l.setWindowNameDomEffect, r));
    }, 3354: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.linkReplace = e.linkReplaceDomEffect = void 0;
      var r = n(2817), o = n(7971), i = n(8055), s = n(4038), c = r.__importStar(n(3333)), a = n(8726), u = n(7965);
      e.linkReplaceDomEffect = function (t, e) {
        return t.pipe((0, s.withLatestFrom)(e.option$.pipe((0, a.pluck)('injectNotification'))), (0, i.filter)((function (t) {
          return t[1];
        })), (0, o.map)((function (t) {
          var e = t[0], n = t[1], r = '[LinkReplace] '.concat(e.basename);
          return 'overlay' === n ? c.overlayInfo(r) : c.consoleInfo(r);
        })));
      }, e.linkReplace = function (t) {
        return [u.Events.LinkReplace, t];
      };
    }, 2934: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.propSet = e.propSetDomEffect = void 0;
      var r = n(2817), o = n(7971), i = n(7470), s = n(7965), c = r.__importStar(n(3333));
      e.propSetDomEffect = function (t) {
        return t.pipe((0, i.tap)((function (t) {
          var e = t.target, n = t.prop, r = t.value;
          e[n] = r;
        })), (0, o.map)((function (t) {
          return c.consoleInfo('[PropSet]', t.target, ''.concat(t.prop, ' = ').concat(t.pathname));
        })));
      }, e.propSet = function (t) {
        return [s.Events.PropSet, t];
      };
    }, 4231: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.setScrollDomEffect = e.setScroll = void 0;
      var r = n(1551), o = n(4038), i = n(7470), s = n(7965);
      e.setScroll = function (t, e) {
        return [s.Events.SetScroll, {x: t, y: e}];
      }, e.setScrollDomEffect = function (t, e) {
        return t.pipe((0, o.withLatestFrom)(e.window$), (0, i.tap)((function (t) {
          var e = t[0];
          return t[1].scrollTo(e.x, e.y);
        })), (0, r.ignoreElements)());
      };
    }, 1343: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.setWindowName = e.setWindowNameDomEffect = void 0;
      var r = n(1551), o = n(4038), i = n(7470), s = n(7965);
      e.setWindowNameDomEffect = function (t, e) {
        return t.pipe((0, o.withLatestFrom)(e.window$), (0, i.tap)((function (t) {
          var e = t[0];
          return t[1].name = e;
        })), (0, r.ignoreElements)());
      }, e.setWindowName = function (t) {
        return [s.Events.SetWindowName, t];
      };
    }, 3222: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.styleSet = e.styleSetDomEffect = void 0;
      var r = n(2817), o = n(7971), i = n(7965), s = n(7470), c = r.__importStar(n(3333));
      e.styleSetDomEffect = function (t) {
        return t.pipe((0, s.tap)((function (t) {
          var e = t.style, n = t.styleName, r = t.newValue;
          e[n] = r;
        })), (0, o.map)((function (t) {
          return c.consoleInfo('[StyleSet] '.concat(t.styleName, ' = ').concat(t.pathName));
        })));
      }, e.styleSet = function (t) {
        return [i.Events.StyleSet, t];
      };
    }, 6310: function (t, e, n) {
      'use strict';
      var r;
      Object.defineProperty(e, '__esModule', {value: !0}), e.effectOutputHandlers$ = e.EffectNames = void 0;
      var o, i = n(5286), s = n(13), c = n(2977), a = n(2152), u = n(3008), l = n(2753), p = n(3763), f = n(948),
        h = n(1023);
      !function (t) {
        t.FileReload = '@@FileReload', t.PreBrowserReload = '@@PreBrowserReload', t.BrowserReload = '@@BrowserReload', t.BrowserSetLocation = '@@BrowserSetLocation', t.BrowserSetScroll = '@@BrowserSetScroll', t.SetOptions = '@@SetOptions', t.SimulateClick = '@@SimulateClick', t.SetElementValue = '@@SetElementValue', t.SetElementToggleValue = '@@SetElementToggleValue';
      }(o = e.EffectNames || (e.EffectNames = {})), e.effectOutputHandlers$ = new i.BehaviorSubject(((r = {})[o.SetOptions] = s.setOptionsEffect, r[o.FileReload] = c.fileReloadEffect, r[o.BrowserReload] = h.browserReloadEffect, r[o.BrowserSetLocation] = a.browserSetLocationEffect, r[o.SimulateClick] = u.simulateClickEffect, r[o.SetElementValue] = l.setElementValueEffect, r[o.SetElementToggleValue] = p.setElementToggleValueEffect, r[o.BrowserSetScroll] = f.setScrollEffect, r));
    }, 1023: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.browserReloadEffect = e.preBrowserReload = e.browserReload = void 0;
      var r = n(6310), o = n(7470), i = n(4038);
      e.browserReload = function () {
        return [r.EffectNames.BrowserReload];
      }, e.preBrowserReload = function () {
        return [r.EffectNames.PreBrowserReload];
      }, e.browserReloadEffect = function (t, e) {
        return t.pipe((0, i.withLatestFrom)(e.window$), (0, o.tap)((function (t) {
          return t[1].location.reload();
        })));
      };
    }, 2152: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.browserSetLocation = e.browserSetLocationEffect = void 0;
      var r = n(1551), o = n(7470), i = n(4038), s = n(6310);
      e.browserSetLocationEffect = function (t, e) {
        return t.pipe((0, i.withLatestFrom)(e.window$), (0, o.tap)((function (t) {
          var e = t[0], n = t[1];
          return e.path ? n.location = n.location.protocol + '//' + n.location.host + e.path : e.url ? n.location = e.url : void 0;
        })), (0, r.ignoreElements)());
      }, e.browserSetLocation = function (t) {
        return [s.EffectNames.BrowserSetLocation, t];
      };
    }, 2977: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.fileReloadEffect = e.fileReload = void 0;
      var r = n(6310), o = n(1090), i = n(4038), s = n(8463);
      e.fileReload = function (t) {
        return [r.EffectNames.FileReload, t];
      }, e.fileReloadEffect = function (t, e) {
        return t.pipe((0, i.withLatestFrom)(e.option$, e.document$, e.navigator$), (0, s.mergeMap)((function (t) {
          var e = t[0], n = t[1], r = t[2], i = t[3];
          return (0, o.reload)(r, i)(e, {tagNames: n.tagNames, liveCSS: !0, liveImg: !0});
        })));
      };
    }, 3763: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.setElementToggleValue = e.setElementToggleValueEffect = void 0;
      var r = n(7470), o = n(4038), i = n(6310);
      e.setElementToggleValueEffect = function (t, e) {
        return t.pipe((0, o.withLatestFrom)(e.document$), (0, r.tap)((function (t) {
          var e = t[0], n = t[1].getElementsByTagName(e.tagName)[e.index];
          n && ('radio' === e.type && (n.checked = !0), 'checkbox' === e.type && (n.checked = e.checked), 'SELECT' === e.tagName && (n.value = e.value));
        })));
      }, e.setElementToggleValue = function (t) {
        return [i.EffectNames.SetElementToggleValue, t];
      };
    }, 2753: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.setElementValue = e.setElementValueEffect = void 0;
      var r = n(7470), o = n(4038), i = n(6310);
      e.setElementValueEffect = function (t, e) {
        return t.pipe((0, o.withLatestFrom)(e.document$), (0, r.tap)((function (t) {
          var e = t[0], n = t[1].getElementsByTagName(e.tagName)[e.index];
          n && (n.value = e.value);
        })));
      }, e.setElementValue = function (t) {
        return [i.EffectNames.SetElementValue, t];
      };
    }, 13: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.setOptions = e.setOptionsEffect = void 0;
      var r = n(1551), o = n(7470), i = n(6310);
      e.setOptionsEffect = function (t, e) {
        return t.pipe((0, o.tap)((function (t) {
          return e.option$.next(t);
        })), (0, r.ignoreElements)());
      }, e.setOptions = function (t) {
        return [i.EffectNames.SetOptions, t];
      };
    }, 948: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.setScrollEffect = void 0;
      var r = n(8726), o = n(1551), i = n(3461), s = n(4707), c = n(4247), a = n(7470), u = n(4038), l = n(7971);

      function p(t, e, n) {
        return e && t.scrollTo ? t.scrollTo(0, t.scrollHeight * n.position.proportional) : t.scrollTo(0, n.position.raw.y);
      }

      e.setScrollEffect = function (t, e) {
        var n = t.pipe((0, u.withLatestFrom)(e.window$, e.document$, e.option$.pipe((0, r.pluck)('scrollProportionally')))),
          f = (0, i.partition)((function (t) {
            return 'document' === t[0].tagName;
          }))(n), h = f[0], d = f[1], y = (0, i.partition)((function (t) {
            return t[0].mappingIndex > -1;
          }))(d), v = y[0], b = y[1];
        return (0, s.merge)(h.pipe((0, a.tap)((function (t) {
          var e = t[0], n = t[1], r = t[2], o = t[3], i = (0, c.getDocumentScrollSpace)(r);
          return o ? n.scrollTo(0, i.y * e.position.proportional) : n.scrollTo(0, e.position.raw.y);
        }))), b.pipe((0, a.tap)((function (t) {
          var e = t[0], n = (t[1], t[2]), r = t[3], o = n.getElementsByTagName(e.tagName);
          if (o && o.length) {
            var i = o[e.index];
            if (i) return p(i, r, e);
          }
        }))), v.pipe((0, u.withLatestFrom)(e.option$.pipe((0, r.pluck)('scrollElementMapping'))), (0, l.map)((function (t) {
          var e = t[0], n = t[1], r = e[0];
          return [e, n.filter((function (t, e) {
            return e !== r.mappingIndex;
          }))];
        })), (0, a.tap)((function (t) {
          var e = t[0], n = t[1], r = e[0], o = (e[1], e[2]), i = e[3];
          n.map((function (t) {
            return o.querySelector(t);
          })).forEach((function (t) {
            p(t, i, r);
          }));
        })))).pipe((0, o.ignoreElements)());
      };
    }, 3008: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.simulateClick = e.simulateClickEffect = void 0;
      var r = n(1551), o = n(7470), i = n(4038), s = n(6310);
      e.simulateClickEffect = function (t, e) {
        return t.pipe((0, i.withLatestFrom)(e.window$, e.document$), (0, o.tap)((function (t) {
          var e = t[0], n = t[1], r = t[2], o = r.getElementsByTagName(e.tagName)[e.index];
          o && (r.createEvent ? n.setTimeout((function () {
            var t = r.createEvent('MouseEvents');
            t.initEvent('click', !0, !0), o.dispatchEvent(t);
          }), 0) : n.setTimeout((function () {
            if (r.createEventObject) {
              var t = r.createEventObject();
              t.cancelBubble = !0, o.fireEvent('onclick', t);
            }
          }), 0));
        })), (0, r.ignoreElements)());
      }, e.simulateClick = function (t) {
        return [s.EffectNames.SimulateClick, t];
      };
    }, 9681: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.initListeners = void 0;
      var r = n(4707), o = n(7302), i = n(3012), s = n(6083), c = n(3858);
      e.initListeners = function (t, e, n, a) {
        return (0, r.merge)((0, s.getScrollStream)(t, e, n, a), (0, i.getClickStream)(e, n, a), (0, o.getFormInputStream)(e, n, a), (0, c.getFormTogglesStream)(e, n, a));
      };
    }, 3012: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.getClickStream = void 0;
      var r = n(2817), o = n(59), i = n(9149), s = n(4247), c = r.__importStar(n(1244)), a = n(4038), u = n(8055),
        l = n(7971), p = n(8726), f = n(4770), h = n(5457), d = n(6909), y = n(7446), v = n(650);
      e.getClickStream = function (t, e, n) {
        var r = (0, o.createTimedBooleanSwitch)(e.pipe((0, u.filter)((function (t) {
          return t[0] === i.IncomingSocketNames.Click;
        }))));
        return n.pipe((0, f.skip)(1), (0, p.pluck)('ghostMode', 'clicks'), (0, h.distinctUntilChanged)(), (0, d.switchMap)((function (e) {
          return e ? (0, y.fromEvent)(t, 'click', !0).pipe((0, l.map)((function (t) {
            return t.target;
          })), (0, u.filter)((function (e) {
            if ('LABEL' === e.tagName) {
              var n = e.getAttribute('for');
              if (n && t.getElementById(n)) return !1;
            }
            return !0;
          })), (0, a.withLatestFrom)(r), (0, u.filter)((function (t) {
            return t[1];
          })), (0, l.map)((function (t) {
            var e = t[0];
            return c.outgoing((0, s.getElementData)(e));
          }))) : (0, v.empty)();
        })));
      };
    }, 7302: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.getFormInputStream = void 0;
      var r = n(2817), o = n(9149), i = n(4247), s = n(59), c = r.__importStar(n(2543)), a = n(8055), u = n(4038),
        l = n(7971), p = n(8726), f = n(4770), h = n(5457), d = n(6909), y = n(650), v = n(7446);
      e.getFormInputStream = function (t, e, n) {
        var r = (0, s.createTimedBooleanSwitch)(e.pipe((0, a.filter)((function (t) {
          return t[0] === o.IncomingSocketNames.Keyup;
        }))));
        return n.pipe((0, f.skip)(1), (0, p.pluck)('ghostMode', 'forms', 'inputs'), (0, h.distinctUntilChanged)(), (0, d.switchMap)((function (e) {
          return e ? (0, v.fromEvent)(t.body, 'keyup', !0).pipe((0, l.map)((function (t) {
            return t.target || t.srcElement;
          })), (0, a.filter)((function (t) {
            return 'INPUT' === t.tagName || 'TEXTAREA' === t.tagName;
          })), (0, u.withLatestFrom)(r), (0, a.filter)((function (t) {
            return t[1];
          })), (0, l.map)((function (t) {
            var e = t[0], n = (0, i.getElementData)(e), r = e.value;
            return c.outgoing(n, r);
          }))) : (0, y.empty)();
        })));
      };
    }, 3858: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.getFormTogglesStream = void 0;
      var r = n(2817), o = n(9149), i = n(4247), s = n(59), c = r.__importStar(n(667)), a = n(8055), u = n(4770),
        l = n(8726), p = n(5457), f = n(4038), h = n(7971), d = n(6909), y = n(650), v = n(7446);
      e.getFormTogglesStream = function (t, e, n) {
        var r = (0, s.createTimedBooleanSwitch)(e.pipe((0, a.filter)((function (t) {
          return t[0] === o.IncomingSocketNames.InputToggle;
        }))));
        return n.pipe((0, u.skip)(1), (0, l.pluck)('ghostMode', 'forms', 'toggles'), (0, p.distinctUntilChanged)(), (0, d.switchMap)((function (e) {
          return e ? (0, v.fromEvent)(t, 'change', !0).pipe((0, h.map)((function (t) {
            return t.target || t.srcElement;
          })), (0, a.filter)((function (t) {
            return 'SELECT' === t.tagName;
          })), (0, f.withLatestFrom)(r), (0, a.filter)((function (t) {
            return t[1];
          })), (0, h.map)((function (t) {
            var e = t[0], n = (t[1], (0, i.getElementData)(e));
            return c.outgoing(n, {type: e.type, checked: e.checked, value: e.value});
          }))) : (0, y.empty)();
        })));
      };
    }, 6083: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.getScrollStream = void 0;
      var r = n(2817), o = n(59), i = n(9149), s = n(4247), c = r.__importStar(n(5731)), a = n(8055), u = n(7971),
        l = n(4038), p = n(8726), f = n(5457), h = n(6909), d = n(650), y = n(4770), v = n(7446);
      e.getScrollStream = function (t, e, n, r) {
        var b = (0, o.createTimedBooleanSwitch)(n.pipe((0, a.filter)((function (t) {
          return t[0] === i.IncomingSocketNames.Scroll;
        })))), m = r.pipe((0, p.pluck)('scrollElementMapping'), (0, u.map)((function (t) {
          return t.map((function (t) {
            return e.querySelector(t);
          }));
        })));
        return r.pipe((0, y.skip)(1), (0, p.pluck)('ghostMode', 'scroll'), (0, f.distinctUntilChanged)(), (0, h.switchMap)((function (n) {
          return n ? (0, v.fromEvent)(e, 'scroll', !0).pipe((0, u.map)((function (t) {
            return t.target;
          })), (0, l.withLatestFrom)(b, m), (0, a.filter)((function (t) {
            var e = t[1];
            return Boolean(e);
          })), (0, u.map)((function (n) {
            var r = n[0], o = (n[1], n[2]);
            if (r === e) return c.outgoing((0, s.getScrollPosition)(t, e), 'document', 0);
            var i = e.getElementsByTagName(r.tagName), a = Array.prototype.indexOf.call(i || [], r);
            return c.outgoing((0, s.getScrollPositionForElement)(r), r.tagName, a, o.indexOf(r));
          }))) : (0, d.empty)();
        })));
      };
    }, 3333: function (t, e, n) {
      'use strict';
      var r;
      Object.defineProperty(e, '__esModule', {value: !0}), e.logHandler$ = e.overlayInfo = e.consoleDebug = e.consoleInfo = e.Overlay = e.LogNames = e.initLogger = void 0;
      var o, i, s = n(5286), c = n(81), a = n(6647), u = n(2826), l = n(8055), p = n(7470), f = n(4038), h = n(6909),
        d = n(8726);
      e.initLogger = function (t) {
        var e = new u.Nanologger(t.logPrefix || '', {colors: {magenta: '#0F2634'}});
        return (0, a.of)(e);
      }, function (t) {
        t.Log = '@@Log', t.Info = '@@Log.info', t.Debug = '@@Log.debug';
      }(o = e.LogNames || (e.LogNames = {})), function (t) {
        t.Info = '@@Overlay.info';
      }(i = e.Overlay || (e.Overlay = {})), e.consoleInfo = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return [o.Log, [o.Info, t]];
      }, e.consoleDebug = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return [o.Log, [o.Debug, t]];
      }, e.overlayInfo = function (t, e) {
        return void 0 === e && (e = 2e3), [i.Info, [t, e]];
      }, e.logHandler$ = new s.BehaviorSubject(((r = {})[o.Log] = function (t, e) {
        return t.pipe((0, f.withLatestFrom)(e.logInstance$, e.option$.pipe((0, d.pluck)('injectNotification'))), (0, l.filter)((function (t) {
          return 'console' === t[2];
        })), (0, p.tap)((function (t) {
          var e = t[0], n = t[1];
          switch (e[0]) {
            case o.Info:
              return n.info.apply(n, e[1]);
            case o.Debug:
              return n.debug.apply(n, e[1]);
          }
        })));
      }, r[i.Info] = function (t, e) {
        return t.pipe((0, f.withLatestFrom)(e.option$, e.notifyElement$, e.document$), (0, l.filter)((function (t) {
          var e = t[1];
          return Boolean(e.notify);
        })), (0, p.tap)((function (t) {
          var e = t[0], n = (t[1], t[2]), r = t[3];
          n.innerHTML = e[0], n.style.display = 'block', r.body.appendChild(n);
        })), (0, h.switchMap)((function (t) {
          var e = t[0], n = (t[1], t[2]), r = t[3];
          return (0, c.timer)(e[1] || 2e3).pipe((0, p.tap)((function () {
            n.style.display = 'none', n.parentNode && r.body.removeChild(n);
          })));
        })));
      }, r));
    }, 9559: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.incomingBrowserLocation = void 0;
      var r = n(8726), o = n(8055), i = n(7971), s = n(4038), c = n(2152);
      e.incomingBrowserLocation = function (t, e) {
        return t.pipe((0, s.withLatestFrom)(e.option$.pipe((0, r.pluck)('ghostMode', 'location'))), (0, o.filter)((function (t) {
          return !0 === t[1];
        })), (0, i.map)((function (t) {
          var e = t[0];
          return (0, c.browserSetLocation)(e);
        })));
      };
    }, 4101: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.incomingBrowserNotify = void 0;
      var r = n(2817), o = n(7971), i = r.__importStar(n(3333));
      e.incomingBrowserNotify = function (t) {
        return t.pipe((0, o.map)((function (t) {
          return i.overlayInfo(t.message, t.timeout);
        })));
      };
    }, 7180: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.reloadBrowserSafe = e.incomingBrowserReload = void 0;
      var r = n(8055), o = n(4038), i = n(8463), s = n(2027), c = n(6647), a = n(1023), u = n(3071), l = n(1623);

      function p() {
        return (0, s.concat)((0, c.of)((0, a.preBrowserReload)()), (0, c.of)((0, a.browserReload)()).pipe((0, u.subscribeOn)(l.async)));
      }

      e.incomingBrowserReload = function (t, e) {
        return t.pipe((0, o.withLatestFrom)(e.option$), (0, r.filter)((function (t) {
          return t[0], t[1].codeSync;
        })), (0, i.mergeMap)(p));
      }, e.reloadBrowserSafe = p;
    }, 1244: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.incomingHandler$ = e.outgoing = void 0;
      var r = n(9149), o = n(8726), i = n(8055), s = n(7971), c = n(4038), a = n(3008);
      e.outgoing = function (t) {
        return [r.OutgoingSocketEvents.Click, t];
      }, e.incomingHandler$ = function (t, e) {
        return t.pipe((0, c.withLatestFrom)(e.option$.pipe((0, o.pluck)('ghostMode', 'clicks')), e.window$.pipe((0, o.pluck)('location', 'pathname'))), (0, i.filter)((function (t) {
          var e = t[0], n = t[1], r = t[2];
          return n && e.pathname === r;
        })), (0, s.map)((function (t) {
          var e = t[0];
          return (0, a.simulateClick)(e);
        })));
      };
    }, 987: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.incomingConnection = void 0;
      var r = n(2817), o = n(8726), i = n(6647), s = r.__importStar(n(3333)), c = n(4038), a = n(8463), u = n(13);
      e.incomingConnection = function (t, e) {
        return t.pipe((0, c.withLatestFrom)(e.option$.pipe((0, o.pluck)('logPrefix'))), (0, a.mergeMap)((function (t) {
          var e = t[0], n = t[1], r = n ? ''.concat(n, ': ') : '';
          return (0, i.of)((0, u.setOptions)(e), s.overlayInfo(''.concat(r, 'connected')));
        })));
      };
    }, 9259: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.incomingDisconnect = void 0;
      var r = n(1551), o = n(7470);
      e.incomingDisconnect = function (t) {
        return t.pipe((0, o.tap)((function (t) {
          return console.log(t);
        })), (0, r.ignoreElements)());
      };
    }, 2045: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.incomingFileReload = void 0;
      var r = n(8055), o = n(650), i = n(59), s = n(6647), c = n(4038), a = n(8463), u = n(2977), l = n(7180);
      e.incomingFileReload = function (t, e) {
        return t.pipe((0, c.withLatestFrom)(e.option$), (0, r.filter)((function (t) {
          return t[0], t[1].codeSync;
        })), (0, a.mergeMap)((function (t) {
          var e = t[0], n = t[1];
          return e.url || !n.injectChanges ? (0, l.reloadBrowserSafe)() : e.basename && e.ext && (0, i.isBlacklisted)(e) ? (0, o.empty)() : (0, s.of)((0, u.fileReload)(e));
        })));
      };
    }, 667: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.incomingInputsToggles = e.outgoing = void 0;
      var r = n(2817), o = n(9149), i = n(8726), s = n(8055), c = n(7971), a = n(4038), u = n(3763);
      e.outgoing = function (t, e) {
        return [o.OutgoingSocketEvents.InputToggle, r.__assign(r.__assign({}, t), e)];
      }, e.incomingInputsToggles = function (t, e) {
        return t.pipe((0, a.withLatestFrom)(e.option$.pipe((0, i.pluck)('ghostMode', 'forms', 'toggles')), e.window$.pipe((0, i.pluck)('location', 'pathname'))), (0, s.filter)((function (t) {
          return !0 === t[1];
        })), (0, c.map)((function (t) {
          var e = t[0];
          return (0, u.setElementToggleValue)(e);
        })));
      };
    }, 2543: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.incomingKeyupHandler = e.outgoing = void 0;
      var r = n(2817), o = n(9149), i = n(8726), s = n(8055), c = n(7971), a = n(4038), u = n(2753);
      e.outgoing = function (t, e) {
        return [o.OutgoingSocketEvents.Keyup, r.__assign(r.__assign({}, t), {value: e})];
      }, e.incomingKeyupHandler = function (t, e) {
        return t.pipe((0, a.withLatestFrom)(e.option$.pipe((0, i.pluck)('ghostMode', 'forms', 'inputs')), e.window$.pipe((0, i.pluck)('location', 'pathname'))), (0, s.filter)((function (t) {
          var e = t[0], n = t[1], r = t[2];
          return n && e.pathname === r;
        })), (0, c.map)((function (t) {
          var e = t[0];
          return (0, u.setElementValue)(e);
        })));
      };
    }, 903: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.incomingOptionsSet = void 0;
      var r = n(7971), o = n(13);
      e.incomingOptionsSet = function (t) {
        return t.pipe((0, r.map)((function (t) {
          return (0, o.setOptions)(t.options);
        })));
      };
    }, 5731: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.incomingScrollHandler = e.outgoing = void 0;
      var r = n(9149), o = n(8726), i = n(8055), s = n(7971), c = n(4038), a = n(6310);
      e.outgoing = function (t, e, n, o) {
        return void 0 === o && (o = -1), [r.OutgoingSocketEvents.Scroll, {
          position: t,
          tagName: e,
          index: n,
          mappingIndex: o
        }];
      }, e.incomingScrollHandler = function (t, e) {
        return t.pipe((0, c.withLatestFrom)(e.option$.pipe((0, o.pluck)('ghostMode', 'scroll')), e.window$.pipe((0, o.pluck)('location', 'pathname'))), (0, i.filter)((function (t) {
          var e = t[0], n = t[1], r = t[2];
          return n && e.pathname === r;
        })), (0, s.map)((function (t) {
          var e = t[0];
          return [a.EffectNames.BrowserSetScroll, e];
        })));
      };
    }, 1666: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.initNotify = void 0;
      var r = n(5286), o = {
        display: 'none',
        padding: '15px',
        fontFamily: 'sans-serif',
        position: 'fixed',
        fontSize: '0.9em',
        zIndex: 9999,
        right: 0,
        top: 0,
        borderBottomLeftRadius: '5px',
        backgroundColor: '#1B2032',
        margin: 0,
        color: 'white',
        textAlign: 'center',
        pointerEvents: 'none'
      };
      e.initNotify = function (t) {
        var e, n = o;
        if (t.notify.styles) if ('[object Array]' === Object.prototype.toString.call(t.notify.styles)) n = t.notify.styles.join(';'); else for (var i in t.notify.styles) t.notify.styles.hasOwnProperty(i) && (n[i] = t.notify.styles[i]);
        if ((e = document.createElement('DIV')).id = '__bs_notify__', 'string' == typeof n) e.style.cssText = n; else for (var s in n) e.style[s] = n[s];
        return new r.BehaviorSubject(e);
      };
    }, 8070: function (t, e, n) {
      'use strict';
      var r;
      Object.defineProperty(e, '__esModule', {value: !0}), e.scrollRestoreHandlers$ = e.initWindowName = e.regex = e.SUFFIX = e.PREFIX = void 0;
      var o = n(2817), i = n(4247), s = n(6310), c = n(5286), a = n(650), u = n(6647), l = o.__importStar(n(3333)),
        p = n(4038), f = n(7971), h = n(1343), d = n(4231);
      e.PREFIX = '<<BS_START>>', e.SUFFIX = '<<BS_START>>', e.regex = new RegExp(e.PREFIX + '(.+?)' + e.SUFFIX, 'g'), e.initWindowName = function (t) {
        var n = function () {
          try {
            return function (t) {
              for (var n, r; n = e.regex.exec(t);) r = n[1];
              if (r) return JSON.parse(r);
            }(t.name);
          } catch (t) {
            return {};
          }
        }();
        if (t.name = t.name.replace(e.regex, ''), n && n.bs && n.bs.hardReload && n.bs.scroll) {
          var r = n.bs.scroll, o = r.x, i = r.y;
          return (0, u.of)((0, d.setScroll)(o, i), l.consoleDebug('[ScrollRestore] x = '.concat(o, ' y = ').concat(i)));
        }
        return (0, a.empty)();
      }, e.scrollRestoreHandlers$ = new c.BehaviorSubject(((r = {})[s.EffectNames.PreBrowserReload] = function (t, n) {
        return t.pipe((0, p.withLatestFrom)(n.window$, n.document$), (0, f.map)((function (t) {
          var n = t[1], r = t[2];
          return [n.name, e.PREFIX, JSON.stringify({
            bs: {
              hardReload: !0,
              scroll: (0, i.getBrowserScrollPosition)(n, r)
            }
          }), e.SUFFIX].join('');
        })), (0, f.map)((function (t) {
          return (0, h.setWindowName)(t);
        })));
      }, r));
    }, 9149: function (t, e, n) {
      'use strict';
      var r;
      Object.defineProperty(e, '__esModule', {value: !0}), e.socketHandlers$ = e.OutgoingSocketEvents = e.IncomingSocketNames = void 0;
      var o, i, s = n(2817), c = n(5286), a = n(4038), u = n(1551), l = n(7470), p = n(8726), f = n(5731), h = n(1244),
        d = n(2543), y = n(4101), v = n(9559), b = n(7180), m = n(2045), g = n(987), _ = n(9259), w = n(667),
        S = n(903);

      function O(t) {
        return function (e, n) {
          return e.pipe((0, a.withLatestFrom)(n.io$, n.window$.pipe((0, p.pluck)('location', 'pathname'))), (0, l.tap)((function (e) {
            var n = e[0], r = e[1], o = e[2];
            return r.emit(t, s.__assign(s.__assign({}, n), {pathname: o}));
          })), (0, u.ignoreElements)());
        };
      }

      !function (t) {
        t.Connection = 'connection', t.Disconnect = 'disconnect', t.FileReload = 'file:reload', t.BrowserReload = 'browser:reload', t.BrowserLocation = 'browser:location', t.BrowserNotify = 'browser:notify', t.Scroll = 'scroll', t.Click = 'click', t.Keyup = 'input:text', t.InputToggle = 'input:toggles', t.OptionsSet = 'options:set';
      }(o = e.IncomingSocketNames || (e.IncomingSocketNames = {})), function (t) {
        t.Scroll = '@@outgoing/scroll', t.Click = '@@outgoing/click', t.Keyup = '@@outgoing/keyup', t.InputToggle = '@@outgoing/Toggle';
      }(i = e.OutgoingSocketEvents || (e.OutgoingSocketEvents = {})), e.socketHandlers$ = new c.BehaviorSubject(((r = {})[o.Connection] = g.incomingConnection, r[o.Disconnect] = _.incomingDisconnect, r[o.FileReload] = m.incomingFileReload, r[o.BrowserReload] = b.incomingBrowserReload, r[o.BrowserLocation] = v.incomingBrowserLocation, r[o.BrowserNotify] = y.incomingBrowserNotify, r[o.Scroll] = f.incomingScrollHandler, r[o.Click] = h.incomingHandler$, r[o.Keyup] = d.incomingKeyupHandler, r[o.InputToggle] = w.incomingInputsToggles, r[o.OptionsSet] = S.incomingOptionsSet, r[i.Scroll] = O(o.Scroll), r[i.Click] = O(o.Click), r[i.Keyup] = O(o.Keyup), r[i.InputToggle] = O(o.InputToggle), r));
    }, 9512: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.initSocket = e.initOptions = e.initNavigator = e.initDocument = e.initWindow = void 0;
      var r = n(2817).__importDefault(n(7778)), o = n(8952), i = n(5286), s = n(6647), c = n(3604);
      e.initWindow = function () {
        return (0, s.of)(window);
      }, e.initDocument = function () {
        return (0, s.of)(document);
      }, e.initNavigator = function () {
        return (0, s.of)(navigator);
      }, e.initOptions = function () {
        return new i.BehaviorSubject(window.___browserSync___.options);
      }, e.initSocket = function () {
        var t = window.___browserSync___.socketConfig, e = window.___browserSync___.socketUrl, n = (0, r.default)(e, t),
          s = o.Observable.create((function (t) {
            n.onAny((function () {
              for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
              t.next(e);
            }));
          })).pipe((0, c.share)()), a = new i.BehaviorSubject(n);
        return window.___browserSync___.socket = n, {socket$: s, io$: a};
      };
    }, 59: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.normalisePath = e.array = e.createTimedBooleanSwitch = e.isBlacklisted = e.updateSearch = e.getLocation = e.pathsMatch = e.numberOfMatchingSegments = e.pickBestMatch = e.pathFromUrl = e.splitUrl = e.each = void 0;
      var r = n(2027), o = n(81), i = n(6647), s = n(6909), c = n(3127), a = n(9669);
      e.each = function (t) {
        return [].slice.call(t || []);
      }, e.splitUrl = function (t) {
        var e, n, r;
        return (n = t.indexOf('#')) >= 0 ? (e = t.slice(n), t = t.slice(0, n)) : e = '', (n = t.indexOf('?')) >= 0 ? (r = t.slice(n), t = t.slice(0, n)) : r = '', {
          url: t,
          params: r,
          hash: e
        };
      }, e.pathFromUrl = function (t) {
        var n;
        return n = 0 === (t = (0, e.splitUrl)(t).url).indexOf('file://') ? t.replace(new RegExp('^file://(localhost)?'), '') : t.replace(new RegExp('^([^:]+:)?//([^:/]+)(:\\d*)?/'), '/'), decodeURIComponent(n);
      }, e.pickBestMatch = function (t, n, r) {
        var o, i = {score: 0, object: null};
        return n.forEach((function (n) {
          (o = (0, e.numberOfMatchingSegments)(t, r(n))) > i.score && (i = {object: n, score: o});
        })), i.score > 0 ? i : null;
      }, e.numberOfMatchingSegments = function (t, e) {
        if ((t = l(t)) === (e = l(e))) return 1e4;
        for (var n = t.split('/').reverse(), r = e.split('/').reverse(), o = Math.min(n.length, r.length), i = 0; i < o && n[i] === r[i];) ++i;
        return i;
      }, e.pathsMatch = function (t, n) {
        return (0, e.numberOfMatchingSegments)(t, n) > 0;
      }, e.getLocation = function (t) {
        var e = document.createElement('a');
        return e.href = t, '' === e.host && (e.href = e.href), e;
      }, e.updateSearch = function (t, e, n) {
        return '' === t ? '?' + n : '?' + t.slice(1).split('&').map((function (t) {
          return t.split('=');
        })).filter((function (t) {
          return t[0] !== e;
        })).map((function (t) {
          return [t[0], t[1]].join('=');
        })).concat(n).join('&');
      };
      var u = [function (t) {
        return 'map' === t.ext;
      }];

      function l(t) {
        return t.replace(/^\/+/, '').replace(/\\/g, '/').toLowerCase();
      }

      e.isBlacklisted = function (t) {
        return u.some((function (e) {
          return e(t);
        }));
      }, e.createTimedBooleanSwitch = function (t, e) {
        return void 0 === e && (e = 1e3), t.pipe((0, s.switchMap)((function () {
          return (0, r.concat)((0, i.of)(!1), (0, o.timer)(e).pipe((0, a.mapTo)(!0)));
        })), (0, c.startWith)(!0));
      }, e.array = function (t) {
        return [].slice.call(t);
      }, e.normalisePath = l;
    }, 1090: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.reload = void 0;
      var r, o = n(59), i = n(650), s = n(8952), c = n(4707), a = n(81), u = n(3317), l = n(8055), p = n(7971),
        f = n(8463), h = n(7470), d = n(9669), y = n(2934), v = n(3222), b = n(3354), m = n(5654),
        g = [{selector: 'background', styleNames: ['backgroundImage']}, {
          selector: 'border',
          styleNames: ['borderImage', 'webkitBorderImage', 'MozBorderImage']
        }], _ = {link: 'href', img: 'src', script: 'src'};
      e.reload = function (t, e) {
        return function (r, o) {
          var s = r.path;
          if (o.liveCSS && s.match(/\.css$/i)) return E(s, t, e);
          if (o.liveImg && s.match(/\.(jpe?g|png|gif)$/i)) return n(s, t);
          for (var c = function (t, e, n) {
            var r = e.tagNames[t];
            return {attr: _[r], tagName: r, elems: n.getElementsByTagName(r)};
          }(r.ext, o, t), a = function (t, e, n) {
            if ('*' === e[0]) return t;
            for (var r = [], o = new RegExp('(^|/)' + e), i = 0, s = t.length; i < s; i += 1) o.test(t[i][n]) && r.push(t[i]);
            return r;
          }(c.elems, r.basename, c.attr), u = 0, l = a.length; u < l; u += 1) w(a[u], c, o, t, e);
          return (0, i.empty)();
        };

        function n(t, e) {
          var n = j(Date.now());
          return (0, c.merge)((0, u.from)([].slice.call(e.images)).pipe((0, l.filter)((function (e) {
            return (0, o.pathsMatch)(t, (0, o.pathFromUrl)(e.src));
          })), (0, p.map)((function (t) {
            var e = {target: t, prop: 'src', value: O(t.src, n), pathname: (0, o.getLocation)(t.src).pathname};
            return (0, y.propSet)(e);
          }))), (0, u.from)(g).pipe((0, f.mergeMap)((function (r) {
            var i = r.selector, s = r.styleNames;
            return (0, u.from)(e.querySelectorAll('[style*='.concat(i, ']'))).pipe((0, f.mergeMap)((function (e) {
              return function (t, e, n, r) {
                return (0, u.from)(e).pipe((0, l.filter)((function (e) {
                  return 'string' == typeof t[e];
                })), (0, p.map)((function (e) {
                  var i, s = t[e], c = s.replace(new RegExp('\\burl\\s*\\(([^)]*)\\)'), (function (t, e) {
                    var s = e;
                    return '"' === e[0] && '"' === e[e.length - 1] && (s = e.slice(1, -1)), i = (0, o.getLocation)(s).pathname, (0, o.pathsMatch)(n, (0, o.pathFromUrl)(s)) ? 'url('.concat(O(s, r), ')') : t;
                  }));
                  return [t, e, s, c, i];
                })), (0, l.filter)((function (t) {
                  t[0], t[1];
                  var e = t[2];
                  return t[3] !== e;
                })), (0, p.map)((function (t) {
                  var e = t[0], n = t[1], r = t[2], o = t[3], i = t[4];
                  return (0, v.styleSet)({style: e, styleName: n, value: r, newValue: o, pathName: i});
                })));
              }(e.style, s, t, n);
            })));
          }))));
        }

        function w(t, e, i, s, c) {
          var a = e.attr, u = t[a], l = (new Date).getTime(), p = 'browsersync-legacy', f = p + '=' + l,
            h = (0, o.getLocation)(u), d = (0, o.updateSearch)(h.search, p, f);
          switch (e.tagName) {
            case'link':
              E(u, s, c);
              break;
            case'img':
              n(u, s);
              break;
            default:
              !1 === i.timestamps ? t[a] = h.href : t[a] = h.href.split('?')[0] + d, setTimeout((function () {
                r ? (r.style.display = 'none', r.style.display = 'block') : (r = s.createElement('DIV'), s.body.appendChild(r));
              }), 200);
          }
          return {elem: t, timeStamp: l};
        }

        function S(t, e, n) {
          var r;
          if (t.__LiveReload_pendingRemoval) return (0, i.empty)();
          t.__LiveReload_pendingRemoval = !0, 'STYLE' === t.tagName ? ((r = e.createElement('link')).rel = 'stylesheet', r.media = t.media, r.disabled = t.disabled) : r = t.cloneNode(!1);
          var c = t.href, u = O(x(t));
          r.href = u;
          var l, p = (0, o.getLocation)(u).pathname, y = p.split('/').slice(-1)[0], v = t.parentNode;
          return v.lastChild === t ? v.appendChild(r) : v.insertBefore(r, t.nextSibling), l = /AppleWebKit/.test(n.userAgent) ? 5 : 200, s.Observable.create((function (t) {
            r.onload = function () {
              t.next(!0), t.complete();
            };
          })).pipe((0, f.mergeMap)((function () {
            return (0, a.timer)(l).pipe((0, h.tap)((function () {
              t && !t.parentNode || (t.parentNode.removeChild(t), r.onreadystatechange = null);
            })), (0, d.mapTo)((0, b.linkReplace)({target: r, nextHref: u, prevHref: c, pathname: p, basename: y})));
          })));
        }

        function O(t, e) {
          var n, r, i;
          void 0 === e && (e = j(Date.now())), t = (n = (0, o.splitUrl)(t)).url, r = n.hash;
          var s = (i = n.params).replace(/(\?|&)browsersync=(\d+)/, (function (t, n) {
            return ''.concat(n).concat(e);
          }));
          return s === i && (s = 0 === i.length ? '?'.concat(e) : ''.concat(i, '&').concat(e)), t + s + r;
        }

        function E(t, e, n) {
          var r = (0, o.array)(e.getElementsByTagName('link')).filter((function (t) {
            return t.rel.match(/^stylesheet$/i) && !t.__LiveReload_pendingRemoval;
          })), s = (0, o.array)(e.getElementsByTagName('style')).filter((function (t) {
            return Boolean(t.sheet);
          })).reduce((function (t, e) {
            return t.concat(k(e, e.sheet));
          }), []), c = r.reduce((function (t, e) {
            return t.concat(k(e, e.sheet));
          }), []), l = r.concat(s, c), p = (0, o.pickBestMatch)(t, l, (function (t) {
            return (0, o.pathFromUrl)(x(t));
          }));
          if (p) return p.object && p.object.rule ? function (t, e) {
            var n = t.rule, r = t.index, o = t.link, i = n.parentStyleSheet, s = O(n.href),
              c = n.media.length ? [].join.call(n.media, ', ') : '',
              u = '@import url("'.concat(s, '") ').concat(c, ';');
            n.__LiveReload_newHref = s;
            var l = e.createElement('link');
            return l.rel = 'stylesheet', l.href = s, l.__LiveReload_pendingRemoval = !0, o.parentNode && o.parentNode.insertBefore(l, o), (0, a.timer)(200).pipe((0, h.tap)((function () {
              l.parentNode && l.parentNode.removeChild(l), n.__LiveReload_newHref === s && (i.insertRule(u, r), i.deleteRule(r + 1), (n = i.cssRules[r]).__LiveReload_newHref = s);
            })), (0, f.mergeMap)((function () {
              return (0, a.timer)(200).pipe((0, h.tap)((function () {
                if (n.__LiveReload_newHref === s) return i.insertRule(u, r), i.deleteRule(r + 1);
              })));
            })));
          }(p.object, e) : S(p.object, e, n);
          if (r.length) {
            var d = t.split('.'), y = d[0];
            if (d.slice(1), '*' === y) return (0, u.from)(r.map((function (t) {
              return S(t, e, n);
            }))).pipe((0, m.mergeAll)());
          }
          return (0, i.empty)();
        }

        function k(t, e) {
          var n = [];
          return function t(e, o) {
            if (o && o.length) for (var i = 0; i < o.length; i++) {
              var s = o[i];
              switch (s.type) {
                case CSSRule.CHARSET_RULE:
                  break;
                case CSSRule.IMPORT_RULE:
                  n.push({link: e, rule: s, index: i, href: s.href}), t(e, r(s.styleSheet));
              }
            }
          }(t, r(e)), n;

          function r(t) {
            var e;
            try {
              e = null != t ? t.cssRules : void 0;
            } catch (t) {
            }
            return e;
          }
        }

        function x(t) {
          return t.href || t.getAttribute('data-href');
        }

        function j(t) {
          return 'browsersync='.concat(t);
        }
      };
    }, 2826: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.Nanologger = void 0;
      var r = n(2817), o = {trace: '🔍', debug: '🐛', info: '✨', warn: '⚠️', error: '🚨', fatal: '💀'},
        i = {trace: 10, debug: 20, info: 30, warn: 40, error: 50, fatal: 60}, s = {
          foreground: '#d3c0c8',
          background: '#2d2d2d',
          black: '#2d2d2d',
          red: '#f2777a',
          green: '#99cc99',
          yellow: '#ffcc66',
          blue: '#6699cc',
          magenta: '#cc99cc',
          cyan: '#66cccc',
          white: '#d3d0c8',
          brightBlack: '#747369'
        }, c = function () {
          function t(t, e) {
            this.name = t, this.opts = e, this._name = t || '', this._colors = r.__assign(r.__assign({}, s), e.colors || {});
            try {
              this.logLevel = window.localStorage.getItem('logLevel') || 'info';
            } catch (t) {
              this.logLevel = 'info';
            }
            this._logLevel = i[this.logLevel];
          }

          return t.prototype.trace = function () {
            for (var t = ['trace'], e = 0, n = arguments.length; e < n; e++) t.push(arguments[e]);
            this._print.apply(this, t);
          }, t.prototype.debug = function () {
            for (var t = ['debug'], e = 0, n = arguments.length; e < n; e++) t.push(arguments[e]);
            this._print.apply(this, t);
          }, t.prototype.info = function () {
            for (var t = ['info'], e = 0, n = arguments.length; e < n; e++) t.push(arguments[e]);
            this._print.apply(this, t);
          }, t.prototype.warn = function () {
            for (var t = ['warn'], e = 0, n = arguments.length; e < n; e++) t.push(arguments[e]);
            this._print.apply(this, t);
          }, t.prototype.error = function () {
            for (var t = ['error'], e = 0, n = arguments.length; e < n; e++) t.push(arguments[e]);
            this._print.apply(this, t);
          }, t.prototype.fatal = function () {
            for (var t = ['fatal'], e = 0, n = arguments.length; e < n; e++) t.push(arguments[e]);
            this._print.apply(this, t);
          }, t.prototype._print = function (t) {
            if (!(i[t] < this._logLevel)) {
              var e = o[t], n = this._name || 'unknown',
                r = 'error' === t || t.fatal ? this._colors.red : 'warn' === t ? this._colors.yellow : this._colors.green,
                s = [], c = [null], u = e + ' %c%s';
              c.push(a(this._colors.magenta), n);
              for (var l = 1, p = arguments.length; l < p; l++) {
                var f = arguments[l];
                'string' == typeof f ? 1 === l ? (u += ' %c%s', c.push(a(r)), c.push(f)) : /ms$/.test(f) ? (u += ' %c%s', c.push(a(this._colors.brightBlack)), c.push(f)) : (u += ' %c%s', c.push(a(this._colors.white)), c.push(f)) : 'number' == typeof f ? (u += ' %c%d', c.push(a(this._colors.magenta)), c.push(f)) : s.push(f);
              }
              c[0] = u, s.forEach((function (t) {
                c.push(t);
              })), Function.prototype.apply.apply(console.log, [console, c]);
            }
          }, t;
        }();

      function a(t) {
        return 'color: ' + t + ';';
      }

      e.Nanologger = c;
    }, 2817: function (t, e) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.__classPrivateFieldIn = e.__classPrivateFieldSet = e.__classPrivateFieldGet = e.__importDefault = e.__importStar = e.__makeTemplateObject = e.__asyncValues = e.__asyncDelegator = e.__asyncGenerator = e.__await = e.__spreadArray = e.__spreadArrays = e.__spread = e.__read = e.__values = e.__exportStar = e.__createBinding = e.__generator = e.__awaiter = e.__metadata = e.__param = e.__decorate = e.__rest = e.__assign = e.__extends = void 0;
      var n = function (t, e) {
        return n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        }, n(t, e);
      };

      function r(t) {
        var e = 'function' == typeof Symbol && Symbol.iterator, n = e && t[e], r = 0;
        if (n) return n.call(t);
        if (t && 'number' == typeof t.length) return {
          next: function () {
            return t && r >= t.length && (t = void 0), {value: t && t[r++], done: !t};
          }
        };
        throw new TypeError(e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
      }

      function o(t, e) {
        var n = 'function' == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t), s = [];
        try {
          for (; (void 0 === e || e-- > 0) && !(r = i.next()).done;) s.push(r.value);
        } catch (t) {
          o = {error: t};
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return s;
      }

      function i(t) {
        return this instanceof i ? (this.v = t, this) : new i(t);
      }

      e.__extends = function (t, e) {
        if ('function' != typeof e && null !== e) throw new TypeError('Class extends value ' + String(e) + ' is not a constructor or null');

        function r() {
          this.constructor = t;
        }

        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
      }, e.__assign = function () {
        return e.__assign = Object.assign || function (t) {
          for (var e, n = 1, r = arguments.length; n < r; n++) for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
          return t;
        }, e.__assign.apply(this, arguments);
      }, e.__rest = function (t, e) {
        var n = {};
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
        if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(t); o < r.length; o++) e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]]);
        }
        return n;
      }, e.__decorate = function (t, e, n, r) {
        var o, i = arguments.length, s = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, r); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (s = (i < 3 ? o(s) : i > 3 ? o(e, n, s) : o(e, n)) || s);
        return i > 3 && s && Object.defineProperty(e, n, s), s;
      }, e.__param = function (t, e) {
        return function (n, r) {
          e(n, r, t);
        };
      }, e.__metadata = function (t, e) {
        if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata) return Reflect.metadata(t, e);
      }, e.__awaiter = function (t, e, n, r) {
        return new (n || (n = Promise))((function (o, i) {
          function s(t) {
            try {
              a(r.next(t));
            } catch (t) {
              i(t);
            }
          }

          function c(t) {
            try {
              a(r.throw(t));
            } catch (t) {
              i(t);
            }
          }

          function a(t) {
            var e;
            t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function (t) {
              t(e);
            }))).then(s, c);
          }

          a((r = r.apply(t, e || [])).next());
        }));
      }, e.__generator = function (t, e) {
        var n, r, o, i, s = {
          label: 0, sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1];
          }, trys: [], ops: []
        };
        return i = {
          next: c(0),
          throw: c(1),
          return: c(2)
        }, 'function' == typeof Symbol && (i[Symbol.iterator] = function () {
          return this;
        }), i;

        function c(c) {
          return function (a) {
            return function (c) {
              if (n) throw new TypeError('Generator is already executing.');
              for (; i && (i = 0, c[0] && (s = 0)), s;) try {
                if (n = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
                switch (r = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                  case 0:
                  case 1:
                    o = c;
                    break;
                  case 4:
                    return s.label++, {value: c[1], done: !1};
                  case 5:
                    s.label++, r = c[1], c = [0];
                    continue;
                  case 7:
                    c = s.ops.pop(), s.trys.pop();
                    continue;
                  default:
                    if (!((o = (o = s.trys).length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                      s = 0;
                      continue;
                    }
                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                      s.label = c[1];
                      break;
                    }
                    if (6 === c[0] && s.label < o[1]) {
                      s.label = o[1], o = c;
                      break;
                    }
                    if (o && s.label < o[2]) {
                      s.label = o[2], s.ops.push(c);
                      break;
                    }
                    o[2] && s.ops.pop(), s.trys.pop();
                    continue;
                }
                c = e.call(t, s);
              } catch (t) {
                c = [6, t], r = 0;
              } finally {
                n = o = 0;
              }
              if (5 & c[0]) throw c[1];
              return {value: c[0] ? c[1] : void 0, done: !0};
            }([c, a]);
          };
        }
      }, e.__createBinding = Object.create ? function (t, e, n, r) {
        void 0 === r && (r = n);
        var o = Object.getOwnPropertyDescriptor(e, n);
        o && !('get' in o ? !e.__esModule : o.writable || o.configurable) || (o = {
          enumerable: !0, get: function () {
            return e[n];
          }
        }), Object.defineProperty(t, r, o);
      } : function (t, e, n, r) {
        void 0 === r && (r = n), t[r] = e[n];
      }, e.__exportStar = function (t, n) {
        for (var r in t) 'default' === r || Object.prototype.hasOwnProperty.call(n, r) || (0, e.__createBinding)(n, t, r);
      }, e.__values = r, e.__read = o, e.__spread = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(o(arguments[e]));
        return t;
      }, e.__spreadArrays = function () {
        for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
        var r = Array(t), o = 0;
        for (e = 0; e < n; e++) for (var i = arguments[e], s = 0, c = i.length; s < c; s++, o++) r[o] = i[s];
        return r;
      }, e.__spreadArray = function (t, e, n) {
        if (n || 2 === arguments.length) for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
        return t.concat(r || Array.prototype.slice.call(e));
      }, e.__await = i, e.__asyncGenerator = function (t, e, n) {
        if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
        var r, o = n.apply(t, e || []), s = [];
        return r = {}, c('next'), c('throw'), c('return'), r[Symbol.asyncIterator] = function () {
          return this;
        }, r;

        function c(t) {
          o[t] && (r[t] = function (e) {
            return new Promise((function (n, r) {
              s.push([t, e, n, r]) > 1 || a(t, e);
            }));
          });
        }

        function a(t, e) {
          try {
            (n = o[t](e)).value instanceof i ? Promise.resolve(n.value.v).then(u, l) : p(s[0][2], n);
          } catch (t) {
            p(s[0][3], t);
          }
          var n;
        }

        function u(t) {
          a('next', t);
        }

        function l(t) {
          a('throw', t);
        }

        function p(t, e) {
          t(e), s.shift(), s.length && a(s[0][0], s[0][1]);
        }
      }, e.__asyncDelegator = function (t) {
        var e, n;
        return e = {}, r('next'), r('throw', (function (t) {
          throw t;
        })), r('return'), e[Symbol.iterator] = function () {
          return this;
        }, e;

        function r(r, o) {
          e[r] = t[r] ? function (e) {
            return (n = !n) ? {value: i(t[r](e)), done: 'return' === r} : o ? o(e) : e;
          } : o;
        }
      }, e.__asyncValues = function (t) {
        if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
        var e, n = t[Symbol.asyncIterator];
        return n ? n.call(t) : (t = r(t), e = {}, o('next'), o('throw'), o('return'), e[Symbol.asyncIterator] = function () {
          return this;
        }, e);

        function o(n) {
          e[n] = t[n] && function (e) {
            return new Promise((function (r, o) {
              !function (t, e, n, r) {
                Promise.resolve(r).then((function (e) {
                  t({value: e, done: n});
                }), e);
              }(r, o, (e = t[n](e)).done, e.value);
            }));
          };
        }
      }, e.__makeTemplateObject = function (t, e) {
        return Object.defineProperty ? Object.defineProperty(t, 'raw', {value: e}) : t.raw = e, t;
      };
      var s = Object.create ? function (t, e) {
        Object.defineProperty(t, 'default', {enumerable: !0, value: e});
      } : function (t, e) {
        t.default = e;
      };
      e.__importStar = function (t) {
        if (t && t.__esModule) return t;
        var n = {};
        if (null != t) for (var r in t) 'default' !== r && Object.prototype.hasOwnProperty.call(t, r) && (0, e.__createBinding)(n, t, r);
        return s(n, t), n;
      }, e.__importDefault = function (t) {
        return t && t.__esModule ? t : {default: t};
      }, e.__classPrivateFieldGet = function (t, e, n, r) {
        if ('a' === n && !r) throw new TypeError('Private accessor was defined without a getter');
        if ('function' == typeof e ? t !== e || !r : !e.has(t)) throw new TypeError('Cannot read private member from an object whose class did not declare it');
        return 'm' === n ? r : 'a' === n ? r.call(t) : r ? r.value : e.get(t);
      }, e.__classPrivateFieldSet = function (t, e, n, r, o) {
        if ('m' === r) throw new TypeError('Private method is not writable');
        if ('a' === r && !o) throw new TypeError('Private accessor was defined without a setter');
        if ('function' == typeof e ? t !== e || !o : !e.has(t)) throw new TypeError('Cannot write private member to an object whose class did not declare it');
        return 'a' === r ? o.call(t, n) : o ? o.value = n : e.set(t, n), n;
      }, e.__classPrivateFieldIn = function (t, e) {
        if (null === e || 'object' != typeof e && 'function' != typeof e) throw new TypeError('Cannot use \'in\' operator on non-object');
        return 'function' == typeof t ? e === t : t.has(e);
      };
    }, 1777: function (t, e, n) {
      n(6228);
      var r = n(5086);
      t.exports = r.Object.assign;
    }, 2113: function (t, e, n) {
      var r = n(6826), o = n(4857), i = TypeError;
      t.exports = function (t) {
        if (r(t)) return t;
        throw i(o(t) + ' is not a function');
      };
    }, 6687: function (t, e, n) {
      var r = n(3122), o = String, i = TypeError;
      t.exports = function (t) {
        if (r(t)) return t;
        throw i(o(t) + ' is not an object');
      };
    }, 1560: function (t, e, n) {
      var r = n(4185), o = n(5258), i = n(3816), s = function (t) {
        return function (e, n, s) {
          var c, a = r(e), u = i(a), l = o(s, u);
          if (t && n != n) {
            for (; u > l;) if ((c = a[l++]) != c) return !0;
          } else for (; u > l; l++) if ((t || l in a) && a[l] === n) return t || l || 0;
          return !t && -1;
        };
      };
      t.exports = {includes: s(!0), indexOf: s(!1)};
    }, 2889: function (t, e, n) {
      var r = n(7176), o = r({}.toString), i = r(''.slice);
      t.exports = function (t) {
        return i(o(t), 8, -1);
      };
    }, 6938: function (t, e, n) {
      var r = n(6026), o = n(8227), i = n(5945), s = n(5767);
      t.exports = function (t, e, n) {
        for (var c = o(e), a = s.f, u = i.f, l = 0; l < c.length; l++) {
          var p = c[l];
          r(t, p) || n && r(n, p) || a(t, p, u(e, p));
        }
      };
    }, 1425: function (t, e, n) {
      var r = n(2870), o = n(5767), i = n(2745);
      t.exports = r ? function (t, e, n) {
        return o.f(t, e, i(1, n));
      } : function (t, e, n) {
        return t[e] = n, t;
      };
    }, 2745: function (t) {
      t.exports = function (t, e) {
        return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e};
      };
    }, 911: function (t, e, n) {
      var r = n(6826), o = n(5767), i = n(1020), s = n(1466);
      t.exports = function (t, e, n, c) {
        c || (c = {});
        var a = c.enumerable, u = void 0 !== c.name ? c.name : e;
        if (r(n) && i(n, u, c), c.global) a ? t[e] = n : s(e, n); else {
          try {
            c.unsafe ? t[e] && (a = !0) : delete t[e];
          } catch (t) {
          }
          a ? t[e] = n : o.f(t, e, {
            value: n,
            enumerable: !1,
            configurable: !c.nonConfigurable,
            writable: !c.nonWritable
          });
        }
        return t;
      };
    }, 1466: function (t, e, n) {
      var r = n(4827), o = Object.defineProperty;
      t.exports = function (t, e) {
        try {
          o(r, t, {value: e, configurable: !0, writable: !0});
        } catch (n) {
          r[t] = e;
        }
        return e;
      };
    }, 2870: function (t, e, n) {
      var r = n(6819);
      t.exports = !r((function () {
        return 7 != Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          }
        })[1];
      }));
    }, 6762: function (t) {
      var e = 'object' == typeof document && document.all, n = void 0 === e && void 0 !== e;
      t.exports = {all: e, IS_HTMLDDA: n};
    }, 3511: function (t, e, n) {
      var r = n(4827), o = n(3122), i = r.document, s = o(i) && o(i.createElement);
      t.exports = function (t) {
        return s ? i.createElement(t) : {};
      };
    }, 8672: function (t) {
      t.exports = 'undefined' != typeof navigator && String(navigator.userAgent) || '';
    }, 5686: function (t, e, n) {
      var r, o, i = n(4827), s = n(8672), c = i.process, a = i.Deno, u = c && c.versions || a && a.version,
        l = u && u.v8;
      l && (o = (r = l.split('.'))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])), !o && s && (!(r = s.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = s.match(/Chrome\/(\d+)/)) && (o = +r[1]), t.exports = o;
    }, 2844: function (t) {
      t.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];
    }, 9539: function (t, e, n) {
      var r = n(4827), o = n(5945).f, i = n(1425), s = n(911), c = n(1466), a = n(6938), u = n(866);
      t.exports = function (t, e) {
        var n, l, p, f, h, d = t.target, y = t.global, v = t.stat;
        if (n = y ? r : v ? r[d] || c(d, {}) : (r[d] || {}).prototype) for (l in e) {
          if (f = e[l], p = t.dontCallGetSet ? (h = o(n, l)) && h.value : n[l], !u(y ? l : d + (v ? '.' : '#') + l, t.forced) && void 0 !== p) {
            if (typeof f == typeof p) continue;
            a(f, p);
          }
          (t.sham || p && p.sham) && i(f, 'sham', !0), s(n, l, f, t);
        }
      };
    }, 6819: function (t) {
      t.exports = function (t) {
        try {
          return !!t();
        } catch (t) {
          return !0;
        }
      };
    }, 4672: function (t, e, n) {
      var r = n(6819);
      t.exports = !r((function () {
        var t = function () {
        }.bind();
        return 'function' != typeof t || t.hasOwnProperty('prototype');
      }));
    }, 4003: function (t, e, n) {
      var r = n(4672), o = Function.prototype.call;
      t.exports = r ? o.bind(o) : function () {
        return o.apply(o, arguments);
      };
    }, 8777: function (t, e, n) {
      var r = n(2870), o = n(6026), i = Function.prototype, s = r && Object.getOwnPropertyDescriptor, c = o(i, 'name'),
        a = c && 'something' === function () {
        }.name, u = c && (!r || r && s(i, 'name').configurable);
      t.exports = {EXISTS: c, PROPER: a, CONFIGURABLE: u};
    }, 7176: function (t, e, n) {
      var r = n(4672), o = Function.prototype, i = o.call, s = r && o.bind.bind(i, i);
      t.exports = r ? s : function (t) {
        return function () {
          return i.apply(t, arguments);
        };
      };
    }, 5058: function (t, e, n) {
      var r = n(4827), o = n(6826), i = function (t) {
        return o(t) ? t : void 0;
      };
      t.exports = function (t, e) {
        return arguments.length < 2 ? i(r[t]) : r[t] && r[t][e];
      };
    }, 3197: function (t, e, n) {
      var r = n(2113), o = n(1334);
      t.exports = function (t, e) {
        var n = t[e];
        return o(n) ? void 0 : r(n);
      };
    }, 4827: function (t, e, n) {
      var r = function (t) {
        return t && t.Math == Math && t;
      };
      t.exports = r('object' == typeof globalThis && globalThis) || r('object' == typeof window && window) || r('object' == typeof self && self) || r('object' == typeof n.g && n.g) || function () {
        return this;
      }() || Function('return this')();
    }, 6026: function (t, e, n) {
      var r = n(7176), o = n(5148), i = r({}.hasOwnProperty);
      t.exports = Object.hasOwn || function (t, e) {
        return i(o(t), e);
      };
    }, 4149: function (t) {
      t.exports = {};
    }, 8062: function (t, e, n) {
      var r = n(2870), o = n(6819), i = n(3511);
      t.exports = !r && !o((function () {
        return 7 != Object.defineProperty(i('div'), 'a', {
          get: function () {
            return 7;
          }
        }).a;
      }));
    }, 9872: function (t, e, n) {
      var r = n(7176), o = n(6819), i = n(2889), s = Object, c = r(''.split);
      t.exports = o((function () {
        return !s('z').propertyIsEnumerable(0);
      })) ? function (t) {
        return 'String' == i(t) ? c(t, '') : s(t);
      } : s;
    }, 8050: function (t, e, n) {
      var r = n(7176), o = n(6826), i = n(1950), s = r(Function.toString);
      o(i.inspectSource) || (i.inspectSource = function (t) {
        return s(t);
      }), t.exports = i.inspectSource;
    }, 9394: function (t, e, n) {
      var r, o, i, s = n(9366), c = n(4827), a = n(3122), u = n(1425), l = n(6026), p = n(1950), f = n(6361),
        h = n(4149), d = 'Object already initialized', y = c.TypeError, v = c.WeakMap;
      if (s || p.state) {
        var b = p.state || (p.state = new v);
        b.get = b.get, b.has = b.has, b.set = b.set, r = function (t, e) {
          if (b.has(t)) throw y(d);
          return e.facade = t, b.set(t, e), e;
        }, o = function (t) {
          return b.get(t) || {};
        }, i = function (t) {
          return b.has(t);
        };
      } else {
        var m = f('state');
        h[m] = !0, r = function (t, e) {
          if (l(t, m)) throw y(d);
          return e.facade = t, u(t, m, e), e;
        }, o = function (t) {
          return l(t, m) ? t[m] : {};
        }, i = function (t) {
          return l(t, m);
        };
      }
      t.exports = {
        set: r, get: o, has: i, enforce: function (t) {
          return i(t) ? o(t) : r(t, {});
        }, getterFor: function (t) {
          return function (e) {
            var n;
            if (!a(e) || (n = o(e)).type !== t) throw y('Incompatible receiver, ' + t + ' required');
            return n;
          };
        }
      };
    }, 6826: function (t, e, n) {
      var r = n(6762), o = r.all;
      t.exports = r.IS_HTMLDDA ? function (t) {
        return 'function' == typeof t || t === o;
      } : function (t) {
        return 'function' == typeof t;
      };
    }, 866: function (t, e, n) {
      var r = n(6819), o = n(6826), i = /#|\.prototype\./, s = function (t, e) {
        var n = a[c(t)];
        return n == l || n != u && (o(e) ? r(e) : !!e);
      }, c = s.normalize = function (t) {
        return String(t).replace(i, '.').toLowerCase();
      }, a = s.data = {}, u = s.NATIVE = 'N', l = s.POLYFILL = 'P';
      t.exports = s;
    }, 1334: function (t) {
      t.exports = function (t) {
        return null == t;
      };
    }, 3122: function (t, e, n) {
      var r = n(6826), o = n(6762), i = o.all;
      t.exports = o.IS_HTMLDDA ? function (t) {
        return 'object' == typeof t ? null !== t : r(t) || t === i;
      } : function (t) {
        return 'object' == typeof t ? null !== t : r(t);
      };
    }, 1432: function (t) {
      t.exports = !1;
    }, 7387: function (t, e, n) {
      var r = n(5058), o = n(6826), i = n(9045), s = n(9781), c = Object;
      t.exports = s ? function (t) {
        return 'symbol' == typeof t;
      } : function (t) {
        var e = r('Symbol');
        return o(e) && i(e.prototype, c(t));
      };
    }, 3816: function (t, e, n) {
      var r = n(9877);
      t.exports = function (t) {
        return r(t.length);
      };
    }, 1020: function (t, e, n) {
      var r = n(7176), o = n(6819), i = n(6826), s = n(6026), c = n(2870), a = n(8777).CONFIGURABLE, u = n(8050),
        l = n(9394), p = l.enforce, f = l.get, h = String, d = Object.defineProperty, y = r(''.slice),
        v = r(''.replace), b = r([].join), m = c && !o((function () {
          return 8 !== d((function () {
          }), 'length', {value: 8}).length;
        })), g = String(String).split('String'), _ = t.exports = function (t, e, n) {
          'Symbol(' === y(h(e), 0, 7) && (e = '[' + v(h(e), /^Symbol\(([^)]*)\)/, '$1') + ']'), n && n.getter && (e = 'get ' + e), n && n.setter && (e = 'set ' + e), (!s(t, 'name') || a && t.name !== e) && (c ? d(t, 'name', {
            value: e,
            configurable: !0
          }) : t.name = e), m && n && s(n, 'arity') && t.length !== n.arity && d(t, 'length', {value: n.arity});
          try {
            n && s(n, 'constructor') && n.constructor ? c && d(t, 'prototype', {writable: !1}) : t.prototype && (t.prototype = void 0);
          } catch (t) {
          }
          var r = p(t);
          return s(r, 'source') || (r.source = b(g, 'string' == typeof e ? e : '')), t;
        };
      Function.prototype.toString = _((function () {
        return i(this) && f(this).source || u(this);
      }), 'toString');
    }, 2639: function (t) {
      var e = Math.ceil, n = Math.floor;
      t.exports = Math.trunc || function (t) {
        var r = +t;
        return (r > 0 ? n : e)(r);
      };
    }, 8362: function (t, e, n) {
      'use strict';
      var r = n(2870), o = n(7176), i = n(4003), s = n(6819), c = n(2343), a = n(720), u = n(9758), l = n(5148),
        p = n(9872), f = Object.assign, h = Object.defineProperty, d = o([].concat);
      t.exports = !f || s((function () {
        if (r && 1 !== f({b: 1}, f(h({}, 'a', {
          enumerable: !0, get: function () {
            h(this, 'b', {value: 3, enumerable: !1});
          }
        }), {b: 2})).b) return !0;
        var t = {}, e = {}, n = Symbol(), o = 'abcdefghijklmnopqrst';
        return t[n] = 7, o.split('').forEach((function (t) {
          e[t] = t;
        })), 7 != f({}, t)[n] || c(f({}, e)).join('') != o;
      })) ? function (t, e) {
        for (var n = l(t), o = arguments.length, s = 1, f = a.f, h = u.f; o > s;) for (var y, v = p(arguments[s++]), b = f ? d(c(v), f(v)) : c(v), m = b.length, g = 0; m > g;) y = b[g++], r && !i(h, v, y) || (n[y] = v[y]);
        return n;
      } : f;
    }, 5767: function (t, e, n) {
      var r = n(2870), o = n(8062), i = n(1741), s = n(6687), c = n(6308), a = TypeError, u = Object.defineProperty,
        l = Object.getOwnPropertyDescriptor, p = 'enumerable', f = 'configurable', h = 'writable';
      e.f = r ? i ? function (t, e, n) {
        if (s(t), e = c(e), s(n), 'function' == typeof t && 'prototype' === e && 'value' in n && h in n && !n[h]) {
          var r = l(t, e);
          r && r[h] && (t[e] = n.value, n = {
            configurable: f in n ? n[f] : r[f],
            enumerable: p in n ? n[p] : r[p],
            writable: !1
          });
        }
        return u(t, e, n);
      } : u : function (t, e, n) {
        if (s(t), e = c(e), s(n), o) try {
          return u(t, e, n);
        } catch (t) {
        }
        if ('get' in n || 'set' in n) throw a('Accessors not supported');
        return 'value' in n && (t[e] = n.value), t;
      };
    }, 5945: function (t, e, n) {
      var r = n(2870), o = n(4003), i = n(9758), s = n(2745), c = n(4185), a = n(6308), u = n(6026), l = n(8062),
        p = Object.getOwnPropertyDescriptor;
      e.f = r ? p : function (t, e) {
        if (t = c(t), e = a(e), l) try {
          return p(t, e);
        } catch (t) {
        }
        if (u(t, e)) return s(!o(i.f, t, e), t[e]);
      };
    }, 6962: function (t, e, n) {
      var r = n(8764), o = n(2844).concat('length', 'prototype');
      e.f = Object.getOwnPropertyNames || function (t) {
        return r(t, o);
      };
    }, 720: function (t, e) {
      e.f = Object.getOwnPropertySymbols;
    }, 9045: function (t, e, n) {
      var r = n(7176);
      t.exports = r({}.isPrototypeOf);
    }, 8764: function (t, e, n) {
      var r = n(7176), o = n(6026), i = n(4185), s = n(1560).indexOf, c = n(4149), a = r([].push);
      t.exports = function (t, e) {
        var n, r = i(t), u = 0, l = [];
        for (n in r) !o(c, n) && o(r, n) && a(l, n);
        for (; e.length > u;) o(r, n = e[u++]) && (~s(l, n) || a(l, n));
        return l;
      };
    }, 2343: function (t, e, n) {
      var r = n(8764), o = n(2844);
      t.exports = Object.keys || function (t) {
        return r(t, o);
      };
    }, 9758: function (t, e) {
      'use strict';
      var n = {}.propertyIsEnumerable, r = Object.getOwnPropertyDescriptor, o = r && !n.call({1: 2}, 1);
      e.f = o ? function (t) {
        var e = r(this, t);
        return !!e && e.enumerable;
      } : n;
    }, 7752: function (t, e, n) {
      var r = n(4003), o = n(6826), i = n(3122), s = TypeError;
      t.exports = function (t, e) {
        var n, c;
        if ('string' === e && o(n = t.toString) && !i(c = r(n, t))) return c;
        if (o(n = t.valueOf) && !i(c = r(n, t))) return c;
        if ('string' !== e && o(n = t.toString) && !i(c = r(n, t))) return c;
        throw s('Can\'t convert object to primitive value');
      };
    }, 8227: function (t, e, n) {
      var r = n(5058), o = n(7176), i = n(6962), s = n(720), c = n(6687), a = o([].concat);
      t.exports = r('Reflect', 'ownKeys') || function (t) {
        var e = i.f(c(t)), n = s.f;
        return n ? a(e, n(t)) : e;
      };
    }, 5086: function (t, e, n) {
      var r = n(4827);
      t.exports = r;
    }, 4345: function (t, e, n) {
      var r = n(1334), o = TypeError;
      t.exports = function (t) {
        if (r(t)) throw o('Can\'t call method on ' + t);
        return t;
      };
    }, 6361: function (t, e, n) {
      var r = n(710), o = n(759), i = r('keys');
      t.exports = function (t) {
        return i[t] || (i[t] = o(t));
      };
    }, 1950: function (t, e, n) {
      var r = n(4827), o = n(1466), i = '__core-js_shared__', s = r[i] || o(i, {});
      t.exports = s;
    }, 710: function (t, e, n) {
      var r = n(1432), o = n(1950);
      (t.exports = function (t, e) {
        return o[t] || (o[t] = void 0 !== e ? e : {});
      })('versions', []).push({
        version: '3.29.1',
        mode: r ? 'pure' : 'global',
        copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
        license: 'https://github.com/zloirock/core-js/blob/v3.29.1/LICENSE',
        source: 'https://github.com/zloirock/core-js'
      });
    }, 4071: function (t, e, n) {
      var r = n(5686), o = n(6819);
      t.exports = !!Object.getOwnPropertySymbols && !o((function () {
        var t = Symbol();
        return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && r && r < 41;
      }));
    }, 5258: function (t, e, n) {
      var r = n(5995), o = Math.max, i = Math.min;
      t.exports = function (t, e) {
        var n = r(t);
        return n < 0 ? o(n + e, 0) : i(n, e);
      };
    }, 4185: function (t, e, n) {
      var r = n(9872), o = n(4345);
      t.exports = function (t) {
        return r(o(t));
      };
    }, 5995: function (t, e, n) {
      var r = n(2639);
      t.exports = function (t) {
        var e = +t;
        return e != e || 0 === e ? 0 : r(e);
      };
    }, 9877: function (t, e, n) {
      var r = n(5995), o = Math.min;
      t.exports = function (t) {
        return t > 0 ? o(r(t), 9007199254740991) : 0;
      };
    }, 5148: function (t, e, n) {
      var r = n(4345), o = Object;
      t.exports = function (t) {
        return o(r(t));
      };
    }, 7664: function (t, e, n) {
      var r = n(4003), o = n(3122), i = n(7387), s = n(3197), c = n(7752), a = n(2167), u = TypeError,
        l = a('toPrimitive');
      t.exports = function (t, e) {
        if (!o(t) || i(t)) return t;
        var n, a = s(t, l);
        if (a) {
          if (void 0 === e && (e = 'default'), n = r(a, t, e), !o(n) || i(n)) return n;
          throw u('Can\'t convert object to primitive value');
        }
        return void 0 === e && (e = 'number'), c(t, e);
      };
    }, 6308: function (t, e, n) {
      var r = n(7664), o = n(7387);
      t.exports = function (t) {
        var e = r(t, 'string');
        return o(e) ? e : e + '';
      };
    }, 4857: function (t) {
      var e = String;
      t.exports = function (t) {
        try {
          return e(t);
        } catch (t) {
          return 'Object';
        }
      };
    }, 759: function (t, e, n) {
      var r = n(7176), o = 0, i = Math.random(), s = r(1..toString);
      t.exports = function (t) {
        return 'Symbol(' + (void 0 === t ? '' : t) + ')_' + s(++o + i, 36);
      };
    }, 9781: function (t, e, n) {
      var r = n(4071);
      t.exports = r && !Symbol.sham && 'symbol' == typeof Symbol.iterator;
    }, 1741: function (t, e, n) {
      var r = n(2870), o = n(6819);
      t.exports = r && o((function () {
        return 42 != Object.defineProperty((function () {
        }), 'prototype', {value: 42, writable: !1}).prototype;
      }));
    }, 9366: function (t, e, n) {
      var r = n(4827), o = n(6826), i = r.WeakMap;
      t.exports = o(i) && /native code/.test(String(i));
    }, 2167: function (t, e, n) {
      var r = n(4827), o = n(710), i = n(6026), s = n(759), c = n(4071), a = n(9781), u = r.Symbol, l = o('wks'),
        p = a ? u.for || u : u && u.withoutSetter || s;
      t.exports = function (t) {
        return i(l, t) || (l[t] = c && i(u, t) ? u[t] : p('Symbol.' + t)), l[t];
      };
    }, 6228: function (t, e, n) {
      var r = n(9539), o = n(8362);
      r({target: 'Object', stat: !0, arity: 2, forced: Object.assign !== o}, {assign: o});
    }, 4342: function (t, e, n) {
      var r;
      e.formatArgs = function (e) {
        if (e[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + e[0] + (this.useColors ? '%c ' : ' ') + '+' + t.exports.humanize(this.diff), this.useColors) {
          var n = 'color: ' + this.color;
          e.splice(1, 0, n, 'color: inherit');
          var r = 0, o = 0;
          e[0].replace(/%[a-zA-Z%]/g, (function (t) {
            '%%' !== t && (r++, '%c' === t && (o = r));
          })), e.splice(o, 0, n);
        }
      }, e.save = function (t) {
        try {
          t ? e.storage.setItem('debug', t) : e.storage.removeItem('debug');
        } catch (t) {
        }
      }, e.load = function () {
        var t;
        try {
          t = e.storage.getItem('debug');
        } catch (t) {
        }
        return !t && 'undefined' != typeof process && 'env' in process && (t = process.env.DEBUG), t;
      }, e.useColors = function () {
        return !('undefined' == typeof window || !window.process || 'renderer' !== window.process.type && !window.process.__nwjs) || ('undefined' == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ('undefined' != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || 'undefined' != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || 'undefined' != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || 'undefined' != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
      }, e.storage = function () {
        try {
          return localStorage;
        } catch (t) {
        }
      }(), e.destroy = (r = !1, function () {
        r || (r = !0, console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'));
      }), e.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'], e.log = console.debug || console.log || function () {
      }, t.exports = n(714)(e), t.exports.formatters.j = function (t) {
        try {
          return JSON.stringify(t);
        } catch (t) {
          return '[UnexpectedJSONParseError]: ' + t.message;
        }
      };
    }, 714: function (t, e, n) {
      var r = n(2817);
      t.exports = function (t) {
        function e(t) {
          var n, r, i, s = null;

          function c() {
            for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
            if (c.enabled) {
              var o = c, i = Number(new Date), s = i - (n || i);
              o.diff = s, o.prev = n, o.curr = i, n = i, t[0] = e.coerce(t[0]), 'string' != typeof t[0] && t.unshift('%O');
              var a = 0;
              t[0] = t[0].replace(/%([a-zA-Z%])/g, (function (n, r) {
                if ('%%' === n) return '%';
                a++;
                var i = e.formatters[r];
                if ('function' == typeof i) {
                  var s = t[a];
                  n = i.call(o, s), t.splice(a, 1), a--;
                }
                return n;
              })), e.formatArgs.call(o, t), (o.log || e.log).apply(o, t);
            }
          }

          return c.namespace = t, c.useColors = e.useColors(), c.color = e.selectColor(t), c.extend = o, c.destroy = e.destroy, Object.defineProperty(c, 'enabled', {
            enumerable: !0,
            configurable: !1,
            get: function () {
              return null !== s ? s : (r !== e.namespaces && (r = e.namespaces, i = e.enabled(t)), i);
            },
            set: function (t) {
              s = t;
            }
          }), 'function' == typeof e.init && e.init(c), c;
        }

        function o(t, n) {
          var r = e(this.namespace + (void 0 === n ? ':' : n) + t);
          return r.log = this.log, r;
        }

        function i(t) {
          return t.toString().substring(2, t.toString().length - 2).replace(/\.\*\?$/, '*');
        }

        return e.debug = e, e.default = e, e.coerce = function (t) {
          return t instanceof Error ? t.stack || t.message : t;
        }, e.disable = function () {
          var t = r.__spreadArray(r.__spreadArray([], e.names.map(i), !0), e.skips.map(i).map((function (t) {
            return '-' + t;
          })), !0).join(',');
          return e.enable(''), t;
        }, e.enable = function (t) {
          var n;
          e.save(t), e.namespaces = t, e.names = [], e.skips = [];
          var r = ('string' == typeof t ? t : '').split(/[\s,]+/), o = r.length;
          for (n = 0; n < o; n++) r[n] && ('-' === (t = r[n].replace(/\*/g, '.*?'))[0] ? e.skips.push(new RegExp('^' + t.slice(1) + '$')) : e.names.push(new RegExp('^' + t + '$')));
        }, e.enabled = function (t) {
          if ('*' === t[t.length - 1]) return !0;
          var n, r;
          for (n = 0, r = e.skips.length; n < r; n++) if (e.skips[n].test(t)) return !1;
          for (n = 0, r = e.names.length; n < r; n++) if (e.names[n].test(t)) return !0;
          return !1;
        }, e.humanize = n(965), e.destroy = function () {
          console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
        }, Object.keys(t).forEach((function (n) {
          e[n] = t[n];
        })), e.names = [], e.skips = [], e.formatters = {}, e.selectColor = function (t) {
          for (var n = 0, r = 0; r < t.length; r++) n = (n << 5) - n + t.charCodeAt(r), n |= 0;
          return e.colors[Math.abs(n) % e.colors.length];
        }, e.enable(e.load()), e;
      };
    }, 1203: function () {
      var t, e;
      t = function (t) {
        return t = +t, isNaN(t) || t == 1 / 0 || t == -1 / 0 ? 0 : t;
      }, e = function (t) {
        t = t || document.getElementsByTagName('BODY')[0];
        var e = window.getComputedStyle(t), n = window.getComputedStyle(t.parent), r = e.overflowX, o = e.overflowY,
          i = n.overflowX, s = n.overflowY;
        return ('table-column' == e.display || 'table-column-group' == e.display) && 'visible' != i && 'clip' != i && 'visible' != s && 'clip' != s && 'visible' != r && 'clip' != r && 'visible' != o && 'clip' != o;
      }, Element.prototype.scroll || (Element.prototype.scroll = function () {
        var n, r, o = arguments.length, i = this.ownerDocument, s = i.defaultView, c = 'BackCompat' == i.compatMode,
          a = document.getElementsByTagName('BODY')[0], u = {};
        if (i == window.document && s && 0 !== o) {
          if (1 === o) {
            var l = arguments[0];
            if ('object' != typeof l) throw'Failed to execute \'scrollBy\' on \'Element\': parameter 1 (\'options\') is not an object.';
            'left' in l && (u.left = t(l.left)), 'top' in l && (u.top = t(l.top)), n = 'left' in u ? u.left : this.scrollLeft, r = 'top' in u ? u.top : this.scrollTop;
          } else u.left = n = t(arguments[0]), u.top = r = t(arguments[1]);
          if (this != document.documentElement) this != a || !c || e(a) ? (this.scrollLeft = n, this.scrollTop = r) : s.scroll(u.left, u.top); else {
            if (c) return;
            s.scroll('scrollX' in s ? s.scrollX : 'pageXOffset' in s ? s.pageXOffset : this.scrollLeft, r);
          }
        }
      }), Element.prototype.scrollTo || (Element.prototype.scrollTo = Element.prototype.scroll), Element.prototype.scrollBy || (Element.prototype.scrollBy = function () {
        var e = arguments.length, n = {};
        if (0 !== e) {
          if (1 === e) {
            var r = arguments[0];
            if ('object' != typeof r) throw'Failed to execute \'scrollBy\' on \'Element\': parameter 1 (\'options\') is not an object.';
            'left' in r && (n.left = t(r.left)), 'top' in r && (n.top = t(r.top));
          } else n.left = t(arguments[0]), n.top = t(arguments[1]);
          n.left = 'left' in n ? n.left + this.scrollLeft : this.scrollLeft, n.top = 'top' in n ? n.top + this.scrollTop : this.scrollTop, this.scroll(n);
        }
      });
    }, 965: function (t) {
      var e = 1e3, n = 60 * e, r = 60 * n, o = 24 * r;

      function i(t, e, n, r) {
        var o = e >= 1.5 * n;
        return Math.round(t / n) + ' ' + r + (o ? 's' : '');
      }

      t.exports = function (t, s) {
        s = s || {};
        var c, a, u = typeof t;
        if ('string' === u && t.length > 0) return function (t) {
          if (!((t = String(t)).length > 100)) {
            var i = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);
            if (i) {
              var s = parseFloat(i[1]);
              switch ((i[2] || 'ms').toLowerCase()) {
                case'years':
                case'year':
                case'yrs':
                case'yr':
                case'y':
                  return 315576e5 * s;
                case'weeks':
                case'week':
                case'w':
                  return 6048e5 * s;
                case'days':
                case'day':
                case'd':
                  return s * o;
                case'hours':
                case'hour':
                case'hrs':
                case'hr':
                case'h':
                  return s * r;
                case'minutes':
                case'minute':
                case'mins':
                case'min':
                case'm':
                  return s * n;
                case'seconds':
                case'second':
                case'secs':
                case'sec':
                case's':
                  return s * e;
                case'milliseconds':
                case'millisecond':
                case'msecs':
                case'msec':
                case'ms':
                  return s;
                default:
                  return;
              }
            }
          }
        }(t);
        if ('number' === u && isFinite(t)) return s.long ? (c = t, (a = Math.abs(c)) >= o ? i(c, a, o, 'day') : a >= r ? i(c, a, r, 'hour') : a >= n ? i(c, a, n, 'minute') : a >= e ? i(c, a, e, 'second') : c + ' ms') : function (t) {
          var i = Math.abs(t);
          return i >= o ? Math.round(t / o) + 'd' : i >= r ? Math.round(t / r) + 'h' : i >= n ? Math.round(t / n) + 'm' : i >= e ? Math.round(t / e) + 's' : t + 'ms';
        }(t);
        throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(t));
      };
    }, 5286: function (t, e, n) {
      'use strict';
      var r = this && this.__extends || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

        function r() {
          this.constructor = t;
        }

        t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
      }, o = n(3563), i = n(9377), s = function (t) {
        function e(e) {
          t.call(this), this._value = e;
        }

        return r(e, t), Object.defineProperty(e.prototype, 'value', {
          get: function () {
            return this.getValue();
          }, enumerable: !0, configurable: !0
        }), e.prototype._subscribe = function (e) {
          var n = t.prototype._subscribe.call(this, e);
          return n && !n.closed && e.next(this._value), n;
        }, e.prototype.getValue = function () {
          if (this.hasError) throw this.thrownError;
          if (this.closed) throw new i.ObjectUnsubscribedError;
          return this._value;
        }, e.prototype.next = function (e) {
          t.prototype.next.call(this, this._value = e);
        }, e;
      }(o.Subject);
      e.BehaviorSubject = s;
    }, 1385: function (t, e, n) {
      'use strict';
      var r = this && this.__extends || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

        function r() {
          this.constructor = t;
        }

        t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
      }, o = function (t) {
        function e(e, n, r) {
          t.call(this), this.parent = e, this.outerValue = n, this.outerIndex = r, this.index = 0;
        }

        return r(e, t), e.prototype._next = function (t) {
          this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this);
        }, e.prototype._error = function (t) {
          this.parent.notifyError(t, this), this.unsubscribe();
        }, e.prototype._complete = function () {
          this.parent.notifyComplete(this), this.unsubscribe();
        }, e;
      }(n(8846).Subscriber);
      e.InnerSubscriber = o;
    }, 2080: function (t, e, n) {
      'use strict';
      var r = n(8952), o = function () {
        function t(t, e, n) {
          this.kind = t, this.value = e, this.error = n, this.hasValue = 'N' === t;
        }

        return t.prototype.observe = function (t) {
          switch (this.kind) {
            case'N':
              return t.next && t.next(this.value);
            case'E':
              return t.error && t.error(this.error);
            case'C':
              return t.complete && t.complete();
          }
        }, t.prototype.do = function (t, e, n) {
          switch (this.kind) {
            case'N':
              return t && t(this.value);
            case'E':
              return e && e(this.error);
            case'C':
              return n && n();
          }
        }, t.prototype.accept = function (t, e, n) {
          return t && 'function' == typeof t.next ? this.observe(t) : this.do(t, e, n);
        }, t.prototype.toObservable = function () {
          switch (this.kind) {
            case'N':
              return r.Observable.of(this.value);
            case'E':
              return r.Observable.throw(this.error);
            case'C':
              return r.Observable.empty();
          }
          throw new Error('unexpected notification kind value');
        }, t.createNext = function (e) {
          return void 0 !== e ? new t('N', e) : t.undefinedValueNotification;
        }, t.createError = function (e) {
          return new t('E', void 0, e);
        }, t.createComplete = function () {
          return t.completeNotification;
        }, t.completeNotification = new t('C'), t.undefinedValueNotification = new t('N', void 0), t;
      }();
      e.Notification = o;
    }, 8952: function (t, e, n) {
      'use strict';
      var r = n(926), o = n(531), i = n(3118), s = n(2957), c = function () {
        function t(t) {
          this._isScalar = !1, t && (this._subscribe = t);
        }

        return t.prototype.lift = function (e) {
          var n = new t;
          return n.source = this, n.operator = e, n;
        }, t.prototype.subscribe = function (t, e, n) {
          var r = this.operator, i = o.toSubscriber(t, e, n);
          if (r ? r.call(i, this.source) : i.add(this.source || !i.syncErrorThrowable ? this._subscribe(i) : this._trySubscribe(i)), i.syncErrorThrowable && (i.syncErrorThrowable = !1, i.syncErrorThrown)) throw i.syncErrorValue;
          return i;
        }, t.prototype._trySubscribe = function (t) {
          try {
            return this._subscribe(t);
          } catch (e) {
            t.syncErrorThrown = !0, t.syncErrorValue = e, t.error(e);
          }
        }, t.prototype.forEach = function (t, e) {
          var n = this;
          if (e || (r.root.Rx && r.root.Rx.config && r.root.Rx.config.Promise ? e = r.root.Rx.config.Promise : r.root.Promise && (e = r.root.Promise)), !e) throw new Error('no Promise impl found');
          return new e((function (e, r) {
            var o;
            o = n.subscribe((function (e) {
              if (o) try {
                t(e);
              } catch (t) {
                r(t), o.unsubscribe();
              } else t(e);
            }), r, e);
          }));
        }, t.prototype._subscribe = function (t) {
          return this.source.subscribe(t);
        }, t.prototype[i.observable] = function () {
          return this;
        }, t.prototype.pipe = function () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e - 0] = arguments[e];
          return 0 === t.length ? this : s.pipeFromArray(t)(this);
        }, t.prototype.toPromise = function (t) {
          var e = this;
          if (t || (r.root.Rx && r.root.Rx.config && r.root.Rx.config.Promise ? t = r.root.Rx.config.Promise : r.root.Promise && (t = r.root.Promise)), !t) throw new Error('no Promise impl found');
          return new t((function (t, n) {
            var r;
            e.subscribe((function (t) {
              return r = t;
            }), (function (t) {
              return n(t);
            }), (function () {
              return t(r);
            }));
          }));
        }, t.create = function (e) {
          return new t(e);
        }, t;
      }();
      e.Observable = c;
    }, 1640: function (t, e) {
      'use strict';
      e.empty = {
        closed: !0, next: function (t) {
        }, error: function (t) {
          throw t;
        }, complete: function () {
        }
      };
    }, 4191: function (t, e, n) {
      'use strict';
      var r = this && this.__extends || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

        function r() {
          this.constructor = t;
        }

        t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
      }, o = function (t) {
        function e() {
          t.apply(this, arguments);
        }

        return r(e, t), e.prototype.notifyNext = function (t, e, n, r, o) {
          this.destination.next(e);
        }, e.prototype.notifyError = function (t, e) {
          this.destination.error(t);
        }, e.prototype.notifyComplete = function (t) {
          this.destination.complete();
        }, e;
      }(n(8846).Subscriber);
      e.OuterSubscriber = o;
    }, 1202: function (t, e) {
      'use strict';
      var n = function () {
        function t(e, n) {
          void 0 === n && (n = t.now), this.SchedulerAction = e, this.now = n;
        }

        return t.prototype.schedule = function (t, e, n) {
          return void 0 === e && (e = 0), new this.SchedulerAction(this, t).schedule(n, e);
        }, t.now = Date.now ? Date.now : function () {
          return +new Date;
        }, t;
      }();
      e.Scheduler = n;
    }, 3563: function (t, e, n) {
      'use strict';
      var r = this && this.__extends || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

        function r() {
          this.constructor = t;
        }

        t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
      }, o = n(8952), i = n(8846), s = n(9227), c = n(9377), a = n(4865), u = n(6774), l = function (t) {
        function e(e) {
          t.call(this, e), this.destination = e;
        }

        return r(e, t), e;
      }(i.Subscriber);
      e.SubjectSubscriber = l;
      var p = function (t) {
        function e() {
          t.call(this), this.observers = [], this.closed = !1, this.isStopped = !1, this.hasError = !1, this.thrownError = null;
        }

        return r(e, t), e.prototype[u.rxSubscriber] = function () {
          return new l(this);
        }, e.prototype.lift = function (t) {
          var e = new f(this, this);
          return e.operator = t, e;
        }, e.prototype.next = function (t) {
          if (this.closed) throw new c.ObjectUnsubscribedError;
          if (!this.isStopped) for (var e = this.observers, n = e.length, r = e.slice(), o = 0; o < n; o++) r[o].next(t);
        }, e.prototype.error = function (t) {
          if (this.closed) throw new c.ObjectUnsubscribedError;
          this.hasError = !0, this.thrownError = t, this.isStopped = !0;
          for (var e = this.observers, n = e.length, r = e.slice(), o = 0; o < n; o++) r[o].error(t);
          this.observers.length = 0;
        }, e.prototype.complete = function () {
          if (this.closed) throw new c.ObjectUnsubscribedError;
          this.isStopped = !0;
          for (var t = this.observers, e = t.length, n = t.slice(), r = 0; r < e; r++) n[r].complete();
          this.observers.length = 0;
        }, e.prototype.unsubscribe = function () {
          this.isStopped = !0, this.closed = !0, this.observers = null;
        }, e.prototype._trySubscribe = function (e) {
          if (this.closed) throw new c.ObjectUnsubscribedError;
          return t.prototype._trySubscribe.call(this, e);
        }, e.prototype._subscribe = function (t) {
          if (this.closed) throw new c.ObjectUnsubscribedError;
          return this.hasError ? (t.error(this.thrownError), s.Subscription.EMPTY) : this.isStopped ? (t.complete(), s.Subscription.EMPTY) : (this.observers.push(t), new a.SubjectSubscription(this, t));
        }, e.prototype.asObservable = function () {
          var t = new o.Observable;
          return t.source = this, t;
        }, e.create = function (t, e) {
          return new f(t, e);
        }, e;
      }(o.Observable);
      e.Subject = p;
      var f = function (t) {
        function e(e, n) {
          t.call(this), this.destination = e, this.source = n;
        }

        return r(e, t), e.prototype.next = function (t) {
          var e = this.destination;
          e && e.next && e.next(t);
        }, e.prototype.error = function (t) {
          var e = this.destination;
          e && e.error && this.destination.error(t);
        }, e.prototype.complete = function () {
          var t = this.destination;
          t && t.complete && this.destination.complete();
        }, e.prototype._subscribe = function (t) {
          return this.source ? this.source.subscribe(t) : s.Subscription.EMPTY;
        }, e;
      }(p);
      e.AnonymousSubject = f;
    }, 4865: function (t, e, n) {
      'use strict';
      var r = this && this.__extends || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

        function r() {
          this.constructor = t;
        }

        t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
      }, o = function (t) {
        function e(e, n) {
          t.call(this), this.subject = e, this.subscriber = n, this.closed = !1;
        }

        return r(e, t), e.prototype.unsubscribe = function () {
          if (!this.closed) {
            this.closed = !0;
            var t = this.subject, e = t.observers;
            if (this.subject = null, e && 0 !== e.length && !t.isStopped && !t.closed) {
              var n = e.indexOf(this.subscriber);
              -1 !== n && e.splice(n, 1);
            }
          }
        }, e;
      }(n(9227).Subscription);
      e.SubjectSubscription = o;
    }, 8846: function (t, e, n) {
      'use strict';
      var r = this && this.__extends || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

        function r() {
          this.constructor = t;
        }

        t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
      }, o = n(148), i = n(9227), s = n(1640), c = n(6774), a = function (t) {
        function e(e, n, r) {
          switch (t.call(this), this.syncErrorValue = null, this.syncErrorThrown = !1, this.syncErrorThrowable = !1, this.isStopped = !1, arguments.length) {
            case 0:
              this.destination = s.empty;
              break;
            case 1:
              if (!e) {
                this.destination = s.empty;
                break;
              }
              if ('object' == typeof e) {
                if (l(e)) {
                  var o = e[c.rxSubscriber]();
                  this.syncErrorThrowable = o.syncErrorThrowable, this.destination = o, o.add(this);
                } else this.syncErrorThrowable = !0, this.destination = new u(this, e);
                break;
              }
            default:
              this.syncErrorThrowable = !0, this.destination = new u(this, e, n, r);
          }
        }

        return r(e, t), e.prototype[c.rxSubscriber] = function () {
          return this;
        }, e.create = function (t, n, r) {
          var o = new e(t, n, r);
          return o.syncErrorThrowable = !1, o;
        }, e.prototype.next = function (t) {
          this.isStopped || this._next(t);
        }, e.prototype.error = function (t) {
          this.isStopped || (this.isStopped = !0, this._error(t));
        }, e.prototype.complete = function () {
          this.isStopped || (this.isStopped = !0, this._complete());
        }, e.prototype.unsubscribe = function () {
          this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this));
        }, e.prototype._next = function (t) {
          this.destination.next(t);
        }, e.prototype._error = function (t) {
          this.destination.error(t), this.unsubscribe();
        }, e.prototype._complete = function () {
          this.destination.complete(), this.unsubscribe();
        }, e.prototype._unsubscribeAndRecycle = function () {
          var t = this._parent, e = this._parents;
          return this._parent = null, this._parents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parent = t, this._parents = e, this;
        }, e;
      }(i.Subscription);
      e.Subscriber = a;
      var u = function (t) {
        function e(e, n, r, i) {
          var c;
          t.call(this), this._parentSubscriber = e;
          var a = this;
          o.isFunction(n) ? c = n : n && (c = n.next, r = n.error, i = n.complete, n !== s.empty && (a = Object.create(n), o.isFunction(a.unsubscribe) && this.add(a.unsubscribe.bind(a)), a.unsubscribe = this.unsubscribe.bind(this))), this._context = a, this._next = c, this._error = r, this._complete = i;
        }

        return r(e, t), e.prototype.next = function (t) {
          if (!this.isStopped && this._next) {
            var e = this._parentSubscriber;
            e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t);
          }
        }, e.prototype.error = function (t) {
          if (!this.isStopped) {
            var e = this._parentSubscriber;
            if (this._error) e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe()); else {
              if (!e.syncErrorThrowable) throw this.unsubscribe(), t;
              e.syncErrorValue = t, e.syncErrorThrown = !0, this.unsubscribe();
            }
          }
        }, e.prototype.complete = function () {
          var t = this;
          if (!this.isStopped) {
            var e = this._parentSubscriber;
            if (this._complete) {
              var n = function () {
                return t._complete.call(t._context);
              };
              e.syncErrorThrowable ? (this.__tryOrSetError(e, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe());
            } else this.unsubscribe();
          }
        }, e.prototype.__tryOrUnsub = function (t, e) {
          try {
            t.call(this._context, e);
          } catch (t) {
            throw this.unsubscribe(), t;
          }
        }, e.prototype.__tryOrSetError = function (t, e, n) {
          try {
            e.call(this._context, n);
          } catch (e) {
            return t.syncErrorValue = e, t.syncErrorThrown = !0, !0;
          }
          return !1;
        }, e.prototype._unsubscribe = function () {
          var t = this._parentSubscriber;
          this._context = null, this._parentSubscriber = null, t.unsubscribe();
        }, e;
      }(a);

      function l(t) {
        return t instanceof a || 'syncErrorThrowable' in t && t[c.rxSubscriber];
      }
    }, 9227: function (t, e, n) {
      'use strict';
      var r = n(7504), o = n(1169), i = n(148), s = n(6657), c = n(5566), a = n(3132), u = function () {
        function t(t) {
          this.closed = !1, this._parent = null, this._parents = null, this._subscriptions = null, t && (this._unsubscribe = t);
        }

        var e;
        return t.prototype.unsubscribe = function () {
          var t, e = !1;
          if (!this.closed) {
            var n = this, u = n._parent, p = n._parents, f = n._unsubscribe, h = n._subscriptions;
            this.closed = !0, this._parent = null, this._parents = null, this._subscriptions = null;
            for (var d = -1, y = p ? p.length : 0; u;) u.remove(this), u = ++d < y && p[d] || null;
            if (i.isFunction(f) && s.tryCatch(f).call(this) === c.errorObject && (e = !0, t = t || (c.errorObject.e instanceof a.UnsubscriptionError ? l(c.errorObject.e.errors) : [c.errorObject.e])), r.isArray(h)) for (d = -1, y = h.length; ++d < y;) {
              var v = h[d];
              if (o.isObject(v) && s.tryCatch(v.unsubscribe).call(v) === c.errorObject) {
                e = !0, t = t || [];
                var b = c.errorObject.e;
                b instanceof a.UnsubscriptionError ? t = t.concat(l(b.errors)) : t.push(b);
              }
            }
            if (e) throw new a.UnsubscriptionError(t);
          }
        }, t.prototype.add = function (e) {
          if (!e || e === t.EMPTY) return t.EMPTY;
          if (e === this) return this;
          var n = e;
          switch (typeof e) {
            case'function':
              n = new t(e);
            case'object':
              if (n.closed || 'function' != typeof n.unsubscribe) return n;
              if (this.closed) return n.unsubscribe(), n;
              if ('function' != typeof n._addParent) {
                var r = n;
                (n = new t)._subscriptions = [r];
              }
              break;
            default:
              throw new Error('unrecognized teardown ' + e + ' added to Subscription.');
          }
          return (this._subscriptions || (this._subscriptions = [])).push(n), n._addParent(this), n;
        }, t.prototype.remove = function (t) {
          var e = this._subscriptions;
          if (e) {
            var n = e.indexOf(t);
            -1 !== n && e.splice(n, 1);
          }
        }, t.prototype._addParent = function (t) {
          var e = this._parent, n = this._parents;
          e && e !== t ? n ? -1 === n.indexOf(t) && n.push(t) : this._parents = [t] : this._parent = t;
        }, t.EMPTY = ((e = new t).closed = !0, e), t;
      }();

      function l(t) {
        return t.reduce((function (t, e) {
          return t.concat(e instanceof a.UnsubscriptionError ? e.errors : e);
        }), []);
      }

      e.Subscription = u;
    }, 4523: function (t, e, n) {
      'use strict';
      var r = this && this.__extends || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

        function r() {
          this.constructor = t;
        }

        t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
      }, o = n(8952), i = n(6303), s = n(484), c = function (t) {
        function e(e, n) {
          t.call(this), this.arrayLike = e, this.scheduler = n, n || 1 !== e.length || (this._isScalar = !0, this.value = e[0]);
        }

        return r(e, t), e.create = function (t, n) {
          var r = t.length;
          return 0 === r ? new s.EmptyObservable : 1 === r ? new i.ScalarObservable(t[0], n) : new e(t, n);
        }, e.dispatch = function (t) {
          var e = t.arrayLike, n = t.index, r = t.length, o = t.subscriber;
          o.closed || (n >= r ? o.complete() : (o.next(e[n]), t.index = n + 1, this.schedule(t)));
        }, e.prototype._subscribe = function (t) {
          var n = this.arrayLike, r = this.scheduler, o = n.length;
          if (r) return r.schedule(e.dispatch, 0, {arrayLike: n, index: 0, length: o, subscriber: t});
          for (var i = 0; i < o && !t.closed; i++) t.next(n[i]);
          t.complete();
        }, e;
      }(o.Observable);
      e.ArrayLikeObservable = c;
    }, 1079: function (t, e, n) {
      'use strict';
      var r = this && this.__extends || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

        function r() {
          this.constructor = t;
        }

        t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
      }, o = n(8952), i = n(6303), s = n(484), c = n(71), a = function (t) {
        function e(e, n) {
          t.call(this), this.array = e, this.scheduler = n, n || 1 !== e.length || (this._isScalar = !0, this.value = e[0]);
        }

        return r(e, t), e.create = function (t, n) {
          return new e(t, n);
        }, e.of = function () {
          for (var t = [], n = 0; n < arguments.length; n++) t[n - 0] = arguments[n];
          var r = t[t.length - 1];
          c.isScheduler(r) ? t.pop() : r = null;
          var o = t.length;
          return o > 1 ? new e(t, r) : 1 === o ? new i.ScalarObservable(t[0], r) : new s.EmptyObservable(r);
        }, e.dispatch = function (t) {
          var e = t.array, n = t.index, r = t.count, o = t.subscriber;
          n >= r ? o.complete() : (o.next(e[n]), o.closed || (t.index = n + 1, this.schedule(t)));
        }, e.prototype._subscribe = function (t) {
          var n = this.array, r = n.length, o = this.scheduler;
          if (o) return o.schedule(e.dispatch, 0, {array: n, index: 0, count: r, subscriber: t});
          for (var i = 0; i < r && !t.closed; i++) t.next(n[i]);
          t.complete();
        }, e;
      }(o.Observable);
      e.ArrayObservable = a;
    }, 112: function (t, e, n) {
      'use strict';
      var r = this && this.__extends || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

        function r() {
          this.constructor = t;
        }

        t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
      }, o = n(3563), i = n(8952), s = n(8846), c = n(9227), a = n(7275), u = function (t) {
        function e(e, n) {
          t.call(this), this.source = e, this.subjectFactory = n, this._refCount = 0, this._isComplete = !1;
        }

        return r(e, t), e.prototype._subscribe = function (t) {
          return this.getSubject().subscribe(t);
        }, e.prototype.getSubject = function () {
          var t = this._subject;
          return t && !t.isStopped || (this._subject = this.subjectFactory()), this._subject;
        }, e.prototype.connect = function () {
          var t = this._connection;
          return t || (this._isComplete = !1, (t = this._connection = new c.Subscription).add(this.source.subscribe(new p(this.getSubject(), this))), t.closed ? (this._connection = null, t = c.Subscription.EMPTY) : this._connection = t), t;
        }, e.prototype.refCount = function () {
          return a.refCount()(this);
        }, e;
      }(i.Observable);
      e.ConnectableObservable = u;
      var l = u.prototype;
      e.connectableObservableDescriptor = {
        operator: {value: null},
        _refCount: {value: 0, writable: !0},
        _subject: {value: null, writable: !0},
        _connection: {value: null, writable: !0},
        _subscribe: {value: l._subscribe},
        _isComplete: {value: l._isComplete, writable: !0},
        getSubject: {value: l.getSubject},
        connect: {value: l.connect},
        refCount: {value: l.refCount}
      };
      var p = function (t) {
        function e(e, n) {
          t.call(this, e), this.connectable = n;
        }

        return r(e, t), e.prototype._error = function (e) {
          this._unsubscribe(), t.prototype._error.call(this, e);
        }, e.prototype._complete = function () {
          this.connectable._isComplete = !0, this._unsubscribe(), t.prototype._complete.call(this);
        }, e.prototype._unsubscribe = function () {
          var t = this.connectable;
          if (t) {
            this.connectable = null;
            var e = t._connection;
            t._refCount = 0, t._subject = null, t._connection = null, e && e.unsubscribe();
          }
        }, e;
      }(o.SubjectSubscriber);
      !function (t) {
        function e(e, n) {
          t.call(this, e), this.connectable = n;
        }

        r(e, t), e.prototype._unsubscribe = function () {
          var t = this.connectable;
          if (t) {
            this.connectable = null;
            var e = t._refCount;
            if (e <= 0) this.connection = null; else if (t._refCount = e - 1, e > 1) this.connection = null; else {
              var n = this.connection, r = t._connection;
              this.connection = null, !r || n && r !== n || r.unsubscribe();
            }
          } else this.connection = null;
        };
      }(s.Subscriber);
    }, 484: function (t, e, n) {
      'use strict';
      var r = this && this.__extends || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

        function r() {
          this.constructor = t;
        }

        t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
      }, o = function (t) {
        function e(e) {
          t.call(this), this.scheduler = e;
        }

        return r(e, t), e.create = function (t) {
          return new e(t);
        }, e.dispatch = function (t) {
          t.subscriber.complete();
        }, e.prototype._subscribe = function (t) {
          var n = this.scheduler;
          if (n) return n.schedule(e.dispatch, 0, {subscriber: t});
          t.complete();
        }, e;
      }(n(8952).Observable);
      e.EmptyObservable = o;
    }, 3948: function (t, e, n) {
      'use strict';
      var r = this && this.__extends || function (t, e) {
          for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

          function r() {
            this.constructor = t;
          }

          t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
        }, o = n(8952), i = n(6657), s = n(148), c = n(5566), a = n(9227), u = Object.prototype.toString,
        l = function (t) {
          function e(e, n, r, o) {
            t.call(this), this.sourceObj = e, this.eventName = n, this.selector = r, this.options = o;
          }

          return r(e, t), e.create = function (t, n, r, o) {
            return s.isFunction(r) && (o = r, r = void 0), new e(t, n, o, r);
          }, e.setupSubscription = function (t, n, r, o, i) {
            var s;
            if (function (t) {
              return !!t && '[object NodeList]' === u.call(t);
            }(t) || function (t) {
              return !!t && '[object HTMLCollection]' === u.call(t);
            }(t)) for (var c = 0, l = t.length; c < l; c++) e.setupSubscription(t[c], n, r, o, i); else if (function (t) {
              return !!t && 'function' == typeof t.addEventListener && 'function' == typeof t.removeEventListener;
            }(t)) {
              var p = t;
              t.addEventListener(n, r, i), s = function () {
                return p.removeEventListener(n, r, i);
              };
            } else if (function (t) {
              return !!t && 'function' == typeof t.on && 'function' == typeof t.off;
            }(t)) {
              var f = t;
              t.on(n, r), s = function () {
                return f.off(n, r);
              };
            } else {
              if (!function (t) {
                return !!t && 'function' == typeof t.addListener && 'function' == typeof t.removeListener;
              }(t)) throw new TypeError('Invalid event target');
              var h = t;
              t.addListener(n, r), s = function () {
                return h.removeListener(n, r);
              };
            }
            o.add(new a.Subscription(s));
          }, e.prototype._subscribe = function (t) {
            var n = this.sourceObj, r = this.eventName, o = this.options, s = this.selector, a = s ? function () {
              for (var e = [], n = 0; n < arguments.length; n++) e[n - 0] = arguments[n];
              var r = i.tryCatch(s).apply(void 0, e);
              r === c.errorObject ? t.error(c.errorObject.e) : t.next(r);
            } : function (e) {
              return t.next(e);
            };
            e.setupSubscription(n, r, a, t, o);
          }, e;
        }(o.Observable);
      e.FromEventObservable = l;
    }, 9379: function (t, e, n) {
      'use strict';
      var r = this && this.__extends || function (t, e) {
          for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

          function r() {
            this.constructor = t;
          }

          t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
        }, o = n(7504), i = n(2482), s = n(8712), c = n(1617), a = n(6853), u = n(1079), l = n(4523), p = n(5427),
        f = n(8952), h = n(2037), d = n(3118), y = function (t) {
          function e(e, n) {
            t.call(this, null), this.ish = e, this.scheduler = n;
          }

          return r(e, t), e.create = function (t, n) {
            if (null != t) {
              if ('function' == typeof t[d.observable]) return t instanceof f.Observable && !n ? t : new e(t, n);
              if (o.isArray(t)) return new u.ArrayObservable(t, n);
              if (s.isPromise(t)) return new c.PromiseObservable(t, n);
              if ('function' == typeof t[p.iterator] || 'string' == typeof t) return new a.IteratorObservable(t, n);
              if (i.isArrayLike(t)) return new l.ArrayLikeObservable(t, n);
            }
            throw new TypeError((null !== t && typeof t || t) + ' is not observable');
          }, e.prototype._subscribe = function (t) {
            var e = this.ish, n = this.scheduler;
            return null == n ? e[d.observable]().subscribe(t) : e[d.observable]().subscribe(new h.ObserveOnSubscriber(t, n, 0));
          }, e;
        }(f.Observable);
      e.FromObservable = y;
    }, 6853: function (t, e, n) {
      'use strict';
      var r = this && this.__extends || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

        function r() {
          this.constructor = t;
        }

        t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
      }, o = n(926), i = n(8952), s = n(5427), c = function (t) {
        function e(e, n) {
          if (t.call(this), this.scheduler = n, null == e) throw new Error('iterator cannot be null.');
          this.iterator = function (t) {
            var e = t[s.iterator];
            if (!e && 'string' == typeof t) return new a(t);
            if (!e && void 0 !== t.length) return new u(t);
            if (!e) throw new TypeError('object is not iterable');
            return t[s.iterator]();
          }(e);
        }

        return r(e, t), e.create = function (t, n) {
          return new e(t, n);
        }, e.dispatch = function (t) {
          var e = t.index, n = t.hasError, r = t.iterator, o = t.subscriber;
          if (n) o.error(t.error); else {
            var i = r.next();
            i.done ? o.complete() : (o.next(i.value), t.index = e + 1, o.closed ? 'function' == typeof r.return && r.return() : this.schedule(t));
          }
        }, e.prototype._subscribe = function (t) {
          var n = this.iterator, r = this.scheduler;
          if (r) return r.schedule(e.dispatch, 0, {index: 0, iterator: n, subscriber: t});
          for (; ;) {
            var o = n.next();
            if (o.done) {
              t.complete();
              break;
            }
            if (t.next(o.value), t.closed) {
              'function' == typeof n.return && n.return();
              break;
            }
          }
        }, e;
      }(i.Observable);
      e.IteratorObservable = c;
      var a = function () {
        function t(t, e, n) {
          void 0 === e && (e = 0), void 0 === n && (n = t.length), this.str = t, this.idx = e, this.len = n;
        }

        return t.prototype[s.iterator] = function () {
          return this;
        }, t.prototype.next = function () {
          return this.idx < this.len ? {done: !1, value: this.str.charAt(this.idx++)} : {done: !0, value: void 0};
        }, t;
      }(), u = function () {
        function t(t, e, n) {
          void 0 === e && (e = 0), void 0 === n && (n = function (t) {
            var e, n = +t.length;
            return isNaN(n) ? 0 : 0 !== n && ('number' == typeof (e = n) && o.root.isFinite(e)) ? (n = function (t) {
              var e = +t;
              return 0 === e || isNaN(e) ? e : e < 0 ? -1 : 1;
            }(n) * Math.floor(Math.abs(n)), n <= 0 ? 0 : n > l ? l : n) : n;
          }(t)), this.arr = t, this.idx = e, this.len = n;
        }

        return t.prototype[s.iterator] = function () {
          return this;
        }, t.prototype.next = function () {
          return this.idx < this.len ? {done: !1, value: this.arr[this.idx++]} : {done: !0, value: void 0};
        }, t;
      }(), l = Math.pow(2, 53) - 1;
    }, 1617: function (t, e, n) {
      'use strict';
      var r = this && this.__extends || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

        function r() {
          this.constructor = t;
        }

        t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
      }, o = n(926), i = function (t) {
        function e(e, n) {
          t.call(this), this.promise = e, this.scheduler = n;
        }

        return r(e, t), e.create = function (t, n) {
          return new e(t, n);
        }, e.prototype._subscribe = function (t) {
          var e = this, n = this.promise, r = this.scheduler;
          if (null == r) this._isScalar ? t.closed || (t.next(this.value), t.complete()) : n.then((function (n) {
            e.value = n, e._isScalar = !0, t.closed || (t.next(n), t.complete());
          }), (function (e) {
            t.closed || t.error(e);
          })).then(null, (function (t) {
            o.root.setTimeout((function () {
              throw t;
            }));
          })); else if (this._isScalar) {
            if (!t.closed) return r.schedule(s, 0, {value: this.value, subscriber: t});
          } else n.then((function (n) {
            e.value = n, e._isScalar = !0, t.closed || t.add(r.schedule(s, 0, {value: n, subscriber: t}));
          }), (function (e) {
            t.closed || t.add(r.schedule(c, 0, {err: e, subscriber: t}));
          })).then(null, (function (t) {
            o.root.setTimeout((function () {
              throw t;
            }));
          }));
        }, e;
      }(n(8952).Observable);

      function s(t) {
        var e = t.value, n = t.subscriber;
        n.closed || (n.next(e), n.complete());
      }

      function c(t) {
        var e = t.err, n = t.subscriber;
        n.closed || n.error(e);
      }

      e.PromiseObservable = i;
    }, 6303: function (t, e, n) {
      'use strict';
      var r = this && this.__extends || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

        function r() {
          this.constructor = t;
        }

        t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
      }, o = function (t) {
        function e(e, n) {
          t.call(this), this.value = e, this.scheduler = n, this._isScalar = !0, n && (this._isScalar = !1);
        }

        return r(e, t), e.create = function (t, n) {
          return new e(t, n);
        }, e.dispatch = function (t) {
          var e = t.done, n = t.value, r = t.subscriber;
          e ? r.complete() : (r.next(n), r.closed || (t.done = !0, this.schedule(t)));
        }, e.prototype._subscribe = function (t) {
          var n = this.value, r = this.scheduler;
          if (r) return r.schedule(e.dispatch, 0, {done: !1, value: n, subscriber: t});
          t.next(n), t.closed || t.complete();
        }, e;
      }(n(8952).Observable);
      e.ScalarObservable = o;
    }, 3607: function (t, e, n) {
      'use strict';
      var r = this && this.__extends || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

        function r() {
          this.constructor = t;
        }

        t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
      }, o = n(8952), i = n(8315), s = n(8882), c = function (t) {
        function e(e, n, r) {
          void 0 === n && (n = 0), void 0 === r && (r = i.asap), t.call(this), this.source = e, this.delayTime = n, this.scheduler = r, (!s.isNumeric(n) || n < 0) && (this.delayTime = 0), r && 'function' == typeof r.schedule || (this.scheduler = i.asap);
        }

        return r(e, t), e.create = function (t, n, r) {
          return void 0 === n && (n = 0), void 0 === r && (r = i.asap), new e(t, n, r);
        }, e.dispatch = function (t) {
          var e = t.source, n = t.subscriber;
          return this.add(e.subscribe(n));
        }, e.prototype._subscribe = function (t) {
          var n = this.delayTime, r = this.source;
          return this.scheduler.schedule(e.dispatch, n, {source: r, subscriber: t});
        }, e;
      }(o.Observable);
      e.SubscribeOnObservable = c;
    }, 3841: function (t, e, n) {
      'use strict';
      var r = this && this.__extends || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

        function r() {
          this.constructor = t;
        }

        t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
      }, o = n(8882), i = n(8952), s = n(1623), c = n(71), a = n(787), u = function (t) {
        function e(e, n, r) {
          void 0 === e && (e = 0), t.call(this), this.period = -1, this.dueTime = 0, o.isNumeric(n) ? this.period = Number(n) < 1 ? 1 : Number(n) : c.isScheduler(n) && (r = n), c.isScheduler(r) || (r = s.async), this.scheduler = r, this.dueTime = a.isDate(e) ? +e - this.scheduler.now() : e;
        }

        return r(e, t), e.create = function (t, n, r) {
          return void 0 === t && (t = 0), new e(t, n, r);
        }, e.dispatch = function (t) {
          var e = t.index, n = t.period, r = t.subscriber;
          if (r.next(e), !r.closed) {
            if (-1 === n) return r.complete();
            t.index = e + 1, this.schedule(t, n);
          }
        }, e.prototype._subscribe = function (t) {
          var n = this, r = n.period, o = n.dueTime;
          return n.scheduler.schedule(e.dispatch, o, {index: 0, period: r, subscriber: t});
        }, e;
      }(i.Observable);
      e.TimerObservable = u;
    }, 2027: function (t, e, n) {
      'use strict';
      var r = n(71), o = n(6647), i = n(3317), s = n(6034);
      e.concat = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e - 0] = arguments[e];
        return 1 === t.length || 2 === t.length && r.isScheduler(t[1]) ? i.from(t[0]) : s.concatAll()(o.of.apply(void 0, t));
      };
    }, 650: function (t, e, n) {
      'use strict';
      var r = n(484);
      e.empty = r.EmptyObservable.create;
    }, 3317: function (t, e, n) {
      'use strict';
      var r = n(9379);
      e.from = r.FromObservable.create;
    }, 7446: function (t, e, n) {
      'use strict';
      var r = n(3948);
      e.fromEvent = r.FromEventObservable.create;
    }, 4707: function (t, e, n) {
      'use strict';
      var r = n(8952), o = n(1079), i = n(71), s = n(5654);
      e.merge = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e - 0] = arguments[e];
        var n = Number.POSITIVE_INFINITY, c = null, a = t[t.length - 1];
        return i.isScheduler(a) ? (c = t.pop(), t.length > 1 && 'number' == typeof t[t.length - 1] && (n = t.pop())) : 'number' == typeof a && (n = t.pop()), null === c && 1 === t.length && t[0] instanceof r.Observable ? t[0] : s.mergeAll(n)(new o.ArrayObservable(t, c));
      };
    }, 6647: function (t, e, n) {
      'use strict';
      var r = n(1079);
      e.of = r.ArrayObservable.of;
    }, 81: function (t, e, n) {
      'use strict';
      var r = n(3841);
      e.timer = r.TimerObservable.create;
    }, 107: function (t, e, n) {
      'use strict';
      var r = n(2842);
      e.zip = r.zipStatic;
    }, 6034: function (t, e, n) {
      'use strict';
      var r = n(5654);
      e.concatAll = function () {
        return r.mergeAll(1);
      };
    }, 5457: function (t, e, n) {
      'use strict';
      var r = this && this.__extends || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

        function r() {
          this.constructor = t;
        }

        t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
      }, o = n(8846), i = n(6657), s = n(5566);
      e.distinctUntilChanged = function (t, e) {
        return function (n) {
          return n.lift(new c(t, e));
        };
      };
      var c = function () {
        function t(t, e) {
          this.compare = t, this.keySelector = e;
        }

        return t.prototype.call = function (t, e) {
          return e.subscribe(new a(t, this.compare, this.keySelector));
        }, t;
      }(), a = function (t) {
        function e(e, n, r) {
          t.call(this, e), this.keySelector = r, this.hasKey = !1, 'function' == typeof n && (this.compare = n);
        }

        return r(e, t), e.prototype.compare = function (t, e) {
          return t === e;
        }, e.prototype._next = function (t) {
          var e = t;
          if (this.keySelector && (e = i.tryCatch(this.keySelector)(t)) === s.errorObject) return this.destination.error(s.errorObject.e);
          var n = !1;
          if (this.hasKey) {
            if ((n = i.tryCatch(this.compare)(this.key, e)) === s.errorObject) return this.destination.error(s.errorObject.e);
          } else this.hasKey = !0;
          !1 === Boolean(n) && (this.key = e, this.destination.next(t));
        }, e;
      }(o.Subscriber);
    }, 8055: function (t, e, n) {
      'use strict';
      var r = this && this.__extends || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

        function r() {
          this.constructor = t;
        }

        t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
      }, o = n(8846);
      e.filter = function (t, e) {
        return function (n) {
          return n.lift(new i(t, e));
        };
      };
      var i = function () {
        function t(t, e) {
          this.predicate = t, this.thisArg = e;
        }

        return t.prototype.call = function (t, e) {
          return e.subscribe(new s(t, this.predicate, this.thisArg));
        }, t;
      }(), s = function (t) {
        function e(e, n, r) {
          t.call(this, e), this.predicate = n, this.thisArg = r, this.count = 0;
        }

        return r(e, t), e.prototype._next = function (t) {
          var e;
          try {
            e = this.predicate.call(this.thisArg, t, this.count++);
          } catch (t) {
            return void this.destination.error(t);
          }
          e && this.destination.next(t);
        }, e;
      }(o.Subscriber);
    }, 1115: function (t, e, n) {
      'use strict';
      var r = this && this.__extends || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

        function r() {
          this.constructor = t;
        }

        t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
      }, o = n(8846), i = n(9227), s = n(8952), c = n(3563), a = n(8306), u = n(7988);
      e.groupBy = function (t, e, n, r) {
        return function (o) {
          return o.lift(new l(t, e, n, r));
        };
      };
      var l = function () {
        function t(t, e, n, r) {
          this.keySelector = t, this.elementSelector = e, this.durationSelector = n, this.subjectSelector = r;
        }

        return t.prototype.call = function (t, e) {
          return e.subscribe(new p(t, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
        }, t;
      }(), p = function (t) {
        function e(e, n, r, o, i) {
          t.call(this, e), this.keySelector = n, this.elementSelector = r, this.durationSelector = o, this.subjectSelector = i, this.groups = null, this.attemptedToUnsubscribe = !1, this.count = 0;
        }

        return r(e, t), e.prototype._next = function (t) {
          var e;
          try {
            e = this.keySelector(t);
          } catch (t) {
            return void this.error(t);
          }
          this._group(t, e);
        }, e.prototype._group = function (t, e) {
          var n = this.groups;
          n || (n = this.groups = 'string' == typeof e ? new u.FastMap : new a.Map);
          var r, o = n.get(e);
          if (this.elementSelector) try {
            r = this.elementSelector(t);
          } catch (t) {
            this.error(t);
          } else r = t;
          if (!o) {
            o = this.subjectSelector ? this.subjectSelector() : new c.Subject, n.set(e, o);
            var i = new h(e, o, this);
            if (this.destination.next(i), this.durationSelector) {
              var s = void 0;
              try {
                s = this.durationSelector(new h(e, o));
              } catch (t) {
                return void this.error(t);
              }
              this.add(s.subscribe(new f(e, o, this)));
            }
          }
          o.closed || o.next(r);
        }, e.prototype._error = function (t) {
          var e = this.groups;
          e && (e.forEach((function (e, n) {
            e.error(t);
          })), e.clear()), this.destination.error(t);
        }, e.prototype._complete = function () {
          var t = this.groups;
          t && (t.forEach((function (t, e) {
            t.complete();
          })), t.clear()), this.destination.complete();
        }, e.prototype.removeGroup = function (t) {
          this.groups.delete(t);
        }, e.prototype.unsubscribe = function () {
          this.closed || (this.attemptedToUnsubscribe = !0, 0 === this.count && t.prototype.unsubscribe.call(this));
        }, e;
      }(o.Subscriber), f = function (t) {
        function e(e, n, r) {
          t.call(this, n), this.key = e, this.group = n, this.parent = r;
        }

        return r(e, t), e.prototype._next = function (t) {
          this.complete();
        }, e.prototype._unsubscribe = function () {
          var t = this.parent, e = this.key;
          this.key = this.parent = null, t && t.removeGroup(e);
        }, e;
      }(o.Subscriber), h = function (t) {
        function e(e, n, r) {
          t.call(this), this.key = e, this.groupSubject = n, this.refCountSubscription = r;
        }

        return r(e, t), e.prototype._subscribe = function (t) {
          var e = new i.Subscription, n = this.refCountSubscription, r = this.groupSubject;
          return n && !n.closed && e.add(new d(n)), e.add(r.subscribe(t)), e;
        }, e;
      }(s.Observable);
      e.GroupedObservable = h;
      var d = function (t) {
        function e(e) {
          t.call(this), this.parent = e, e.count++;
        }

        return r(e, t), e.prototype.unsubscribe = function () {
          var e = this.parent;
          e.closed || this.closed || (t.prototype.unsubscribe.call(this), e.count -= 1, 0 === e.count && e.attemptedToUnsubscribe && e.unsubscribe());
        }, e;
      }(i.Subscription);
    }, 1551: function (t, e, n) {
      'use strict';
      var r = this && this.__extends || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

        function r() {
          this.constructor = t;
        }

        t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
      }, o = n(8846), i = n(253);
      e.ignoreElements = function () {
        return function (t) {
          return t.lift(new s);
        };
      };
      var s = function () {
        function t() {
        }

        return t.prototype.call = function (t, e) {
          return e.subscribe(new c(t));
        }, t;
      }(), c = function (t) {
        function e() {
          t.apply(this, arguments);
        }

        return r(e, t), e.prototype._next = function (t) {
          i.noop();
        }, e;
      }(o.Subscriber);
    }, 7971: function (t, e, n) {
      'use strict';
      var r = this && this.__extends || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

        function r() {
          this.constructor = t;
        }

        t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
      }, o = n(8846);
      e.map = function (t, e) {
        return function (n) {
          if ('function' != typeof t) throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
          return n.lift(new i(t, e));
        };
      };
      var i = function () {
        function t(t, e) {
          this.project = t, this.thisArg = e;
        }

        return t.prototype.call = function (t, e) {
          return e.subscribe(new s(t, this.project, this.thisArg));
        }, t;
      }();
      e.MapOperator = i;
      var s = function (t) {
        function e(e, n, r) {
          t.call(this, e), this.project = n, this.count = 0, this.thisArg = r || this;
        }

        return r(e, t), e.prototype._next = function (t) {
          var e;
          try {
            e = this.project.call(this.thisArg, t, this.count++);
          } catch (t) {
            return void this.destination.error(t);
          }
          this.destination.next(e);
        }, e;
      }(o.Subscriber);
    }, 9669: function (t, e, n) {
      'use strict';
      var r = this && this.__extends || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

        function r() {
          this.constructor = t;
        }

        t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
      }, o = n(8846);
      e.mapTo = function (t) {
        return function (e) {
          return e.lift(new i(t));
        };
      };
      var i = function () {
        function t(t) {
          this.value = t;
        }

        return t.prototype.call = function (t, e) {
          return e.subscribe(new s(t, this.value));
        }, t;
      }(), s = function (t) {
        function e(e, n) {
          t.call(this, e), this.value = n;
        }

        return r(e, t), e.prototype._next = function (t) {
          this.destination.next(this.value);
        }, e;
      }(o.Subscriber);
    }, 5654: function (t, e, n) {
      'use strict';
      var r = n(8463), o = n(6934);
      e.mergeAll = function (t) {
        return void 0 === t && (t = Number.POSITIVE_INFINITY), r.mergeMap(o.identity, null, t);
      };
    }, 8463: function (t, e, n) {
      'use strict';
      var r = this && this.__extends || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

        function r() {
          this.constructor = t;
        }

        t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
      }, o = n(7513), i = n(4191);
      e.mergeMap = function (t, e, n) {
        return void 0 === n && (n = Number.POSITIVE_INFINITY), function (r) {
          return 'number' == typeof e && (n = e, e = null), r.lift(new s(t, e, n));
        };
      };
      var s = function () {
        function t(t, e, n) {
          void 0 === n && (n = Number.POSITIVE_INFINITY), this.project = t, this.resultSelector = e, this.concurrent = n;
        }

        return t.prototype.call = function (t, e) {
          return e.subscribe(new c(t, this.project, this.resultSelector, this.concurrent));
        }, t;
      }();
      e.MergeMapOperator = s;
      var c = function (t) {
        function e(e, n, r, o) {
          void 0 === o && (o = Number.POSITIVE_INFINITY), t.call(this, e), this.project = n, this.resultSelector = r, this.concurrent = o, this.hasCompleted = !1, this.buffer = [], this.active = 0, this.index = 0;
        }

        return r(e, t), e.prototype._next = function (t) {
          this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t);
        }, e.prototype._tryNext = function (t) {
          var e, n = this.index++;
          try {
            e = this.project(t, n);
          } catch (t) {
            return void this.destination.error(t);
          }
          this.active++, this._innerSub(e, t, n);
        }, e.prototype._innerSub = function (t, e, n) {
          this.add(o.subscribeToResult(this, t, e, n));
        }, e.prototype._complete = function () {
          this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete();
        }, e.prototype.notifyNext = function (t, e, n, r, o) {
          this.resultSelector ? this._notifyResultSelector(t, e, n, r) : this.destination.next(e);
        }, e.prototype._notifyResultSelector = function (t, e, n, r) {
          var o;
          try {
            o = this.resultSelector(t, e, n, r);
          } catch (t) {
            return void this.destination.error(t);
          }
          this.destination.next(o);
        }, e.prototype.notifyComplete = function (t) {
          var e = this.buffer;
          this.remove(t), this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete();
        }, e;
      }(i.OuterSubscriber);
      e.MergeMapSubscriber = c;
    }, 6147: function (t, e, n) {
      'use strict';
      var r = n(112);
      e.multicast = function (t, e) {
        return function (n) {
          var i;
          if (i = 'function' == typeof t ? t : function () {
            return t;
          }, 'function' == typeof e) return n.lift(new o(i, e));
          var s = Object.create(n, r.connectableObservableDescriptor);
          return s.source = n, s.subjectFactory = i, s;
        };
      };
      var o = function () {
        function t(t, e) {
          this.subjectFactory = t, this.selector = e;
        }

        return t.prototype.call = function (t, e) {
          var n = this.selector, r = this.subjectFactory(), o = n(r).subscribe(t);
          return o.add(e.subscribe(r)), o;
        }, t;
      }();
      e.MulticastOperator = o;
    }, 2037: function (t, e, n) {
      'use strict';
      var r = this && this.__extends || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

        function r() {
          this.constructor = t;
        }

        t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
      }, o = n(8846), i = n(2080);
      e.observeOn = function (t, e) {
        return void 0 === e && (e = 0), function (n) {
          return n.lift(new s(t, e));
        };
      };
      var s = function () {
        function t(t, e) {
          void 0 === e && (e = 0), this.scheduler = t, this.delay = e;
        }

        return t.prototype.call = function (t, e) {
          return e.subscribe(new c(t, this.scheduler, this.delay));
        }, t;
      }();
      e.ObserveOnOperator = s;
      var c = function (t) {
        function e(e, n, r) {
          void 0 === r && (r = 0), t.call(this, e), this.scheduler = n, this.delay = r;
        }

        return r(e, t), e.dispatch = function (t) {
          var e = t.notification, n = t.destination;
          e.observe(n), this.unsubscribe();
        }, e.prototype.scheduleMessage = function (t) {
          this.add(this.scheduler.schedule(e.dispatch, this.delay, new a(t, this.destination)));
        }, e.prototype._next = function (t) {
          this.scheduleMessage(i.Notification.createNext(t));
        }, e.prototype._error = function (t) {
          this.scheduleMessage(i.Notification.createError(t));
        }, e.prototype._complete = function () {
          this.scheduleMessage(i.Notification.createComplete());
        }, e;
      }(o.Subscriber);
      e.ObserveOnSubscriber = c;
      var a = function (t, e) {
        this.notification = t, this.destination = e;
      };
      e.ObserveOnMessage = a;
    }, 3461: function (t, e, n) {
      'use strict';
      var r = n(5831), o = n(8055);
      e.partition = function (t, e) {
        return function (n) {
          return [o.filter(t, e)(n), o.filter(r.not(t, e))(n)];
        };
      };
    }, 8726: function (t, e, n) {
      'use strict';
      var r = n(7971);
      e.pluck = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e - 0] = arguments[e];
        var n = t.length;
        if (0 === n) throw new Error('list of properties cannot be empty.');
        return function (e) {
          return r.map(function (t, e) {
            return function (n) {
              for (var r = n, o = 0; o < e; o++) {
                var i = r[t[o]];
                if (void 0 === i) return;
                r = i;
              }
              return r;
            };
          }(t, n))(e);
        };
      };
    }, 7275: function (t, e, n) {
      'use strict';
      var r = this && this.__extends || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

        function r() {
          this.constructor = t;
        }

        t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
      }, o = n(8846);
      e.refCount = function () {
        return function (t) {
          return t.lift(new i(t));
        };
      };
      var i = function () {
        function t(t) {
          this.connectable = t;
        }

        return t.prototype.call = function (t, e) {
          var n = this.connectable;
          n._refCount++;
          var r = new s(t, n), o = e.subscribe(r);
          return r.closed || (r.connection = n.connect()), o;
        }, t;
      }(), s = function (t) {
        function e(e, n) {
          t.call(this, e), this.connectable = n;
        }

        return r(e, t), e.prototype._unsubscribe = function () {
          var t = this.connectable;
          if (t) {
            this.connectable = null;
            var e = t._refCount;
            if (e <= 0) this.connection = null; else if (t._refCount = e - 1, e > 1) this.connection = null; else {
              var n = this.connection, r = t._connection;
              this.connection = null, !r || n && r !== n || r.unsubscribe();
            }
          } else this.connection = null;
        }, e;
      }(o.Subscriber);
    }, 3604: function (t, e, n) {
      'use strict';
      var r = n(6147), o = n(7275), i = n(3563);

      function s() {
        return new i.Subject;
      }

      e.share = function () {
        return function (t) {
          return o.refCount()(r.multicast(s)(t));
        };
      };
    }, 4770: function (t, e, n) {
      'use strict';
      var r = this && this.__extends || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

        function r() {
          this.constructor = t;
        }

        t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
      }, o = n(8846);
      e.skip = function (t) {
        return function (e) {
          return e.lift(new i(t));
        };
      };
      var i = function () {
        function t(t) {
          this.total = t;
        }

        return t.prototype.call = function (t, e) {
          return e.subscribe(new s(t, this.total));
        }, t;
      }(), s = function (t) {
        function e(e, n) {
          t.call(this, e), this.total = n, this.count = 0;
        }

        return r(e, t), e.prototype._next = function (t) {
          ++this.count > this.total && this.destination.next(t);
        }, e;
      }(o.Subscriber);
    }, 3127: function (t, e, n) {
      'use strict';
      var r = n(1079), o = n(6303), i = n(484), s = n(2027), c = n(71);
      e.startWith = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e - 0] = arguments[e];
        return function (e) {
          var n = t[t.length - 1];
          c.isScheduler(n) ? t.pop() : n = null;
          var a = t.length;
          return 1 === a ? s.concat(new o.ScalarObservable(t[0], n), e) : a > 1 ? s.concat(new r.ArrayObservable(t, n), e) : s.concat(new i.EmptyObservable(n), e);
        };
      };
    }, 3071: function (t, e, n) {
      'use strict';
      var r = n(3607);
      e.subscribeOn = function (t, e) {
        return void 0 === e && (e = 0), function (n) {
          return n.lift(new o(t, e));
        };
      };
      var o = function () {
        function t(t, e) {
          this.scheduler = t, this.delay = e;
        }

        return t.prototype.call = function (t, e) {
          return new r.SubscribeOnObservable(e, this.delay, this.scheduler).subscribe(t);
        }, t;
      }();
    }, 6909: function (t, e, n) {
      'use strict';
      var r = this && this.__extends || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

        function r() {
          this.constructor = t;
        }

        t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
      }, o = n(4191), i = n(7513);
      e.switchMap = function (t, e) {
        return function (n) {
          return n.lift(new s(t, e));
        };
      };
      var s = function () {
        function t(t, e) {
          this.project = t, this.resultSelector = e;
        }

        return t.prototype.call = function (t, e) {
          return e.subscribe(new c(t, this.project, this.resultSelector));
        }, t;
      }(), c = function (t) {
        function e(e, n, r) {
          t.call(this, e), this.project = n, this.resultSelector = r, this.index = 0;
        }

        return r(e, t), e.prototype._next = function (t) {
          var e, n = this.index++;
          try {
            e = this.project(t, n);
          } catch (t) {
            return void this.destination.error(t);
          }
          this._innerSub(e, t, n);
        }, e.prototype._innerSub = function (t, e, n) {
          var r = this.innerSubscription;
          r && r.unsubscribe(), this.add(this.innerSubscription = i.subscribeToResult(this, t, e, n));
        }, e.prototype._complete = function () {
          var e = this.innerSubscription;
          e && !e.closed || t.prototype._complete.call(this);
        }, e.prototype._unsubscribe = function () {
          this.innerSubscription = null;
        }, e.prototype.notifyComplete = function (e) {
          this.remove(e), this.innerSubscription = null, this.isStopped && t.prototype._complete.call(this);
        }, e.prototype.notifyNext = function (t, e, n, r, o) {
          this.resultSelector ? this._tryNotifyNext(t, e, n, r) : this.destination.next(e);
        }, e.prototype._tryNotifyNext = function (t, e, n, r) {
          var o;
          try {
            o = this.resultSelector(t, e, n, r);
          } catch (t) {
            return void this.destination.error(t);
          }
          this.destination.next(o);
        }, e;
      }(o.OuterSubscriber);
    }, 7470: function (t, e, n) {
      'use strict';
      var r = this && this.__extends || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

        function r() {
          this.constructor = t;
        }

        t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
      }, o = n(8846);
      e.tap = function (t, e, n) {
        return function (r) {
          return r.lift(new i(t, e, n));
        };
      };
      var i = function () {
        function t(t, e, n) {
          this.nextOrObserver = t, this.error = e, this.complete = n;
        }

        return t.prototype.call = function (t, e) {
          return e.subscribe(new s(t, this.nextOrObserver, this.error, this.complete));
        }, t;
      }(), s = function (t) {
        function e(e, n, r, i) {
          t.call(this, e);
          var s = new o.Subscriber(n, r, i);
          s.syncErrorThrowable = !0, this.add(s), this.safeSubscriber = s;
        }

        return r(e, t), e.prototype._next = function (t) {
          var e = this.safeSubscriber;
          e.next(t), e.syncErrorThrown ? this.destination.error(e.syncErrorValue) : this.destination.next(t);
        }, e.prototype._error = function (t) {
          var e = this.safeSubscriber;
          e.error(t), e.syncErrorThrown ? this.destination.error(e.syncErrorValue) : this.destination.error(t);
        }, e.prototype._complete = function () {
          var t = this.safeSubscriber;
          t.complete(), t.syncErrorThrown ? this.destination.error(t.syncErrorValue) : this.destination.complete();
        }, e;
      }(o.Subscriber);
    }, 4038: function (t, e, n) {
      'use strict';
      var r = this && this.__extends || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

        function r() {
          this.constructor = t;
        }

        t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
      }, o = n(4191), i = n(7513);
      e.withLatestFrom = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e - 0] = arguments[e];
        return function (e) {
          var n;
          'function' == typeof t[t.length - 1] && (n = t.pop());
          var r = t;
          return e.lift(new s(r, n));
        };
      };
      var s = function () {
        function t(t, e) {
          this.observables = t, this.project = e;
        }

        return t.prototype.call = function (t, e) {
          return e.subscribe(new c(t, this.observables, this.project));
        }, t;
      }(), c = function (t) {
        function e(e, n, r) {
          t.call(this, e), this.observables = n, this.project = r, this.toRespond = [];
          var o = n.length;
          this.values = new Array(o);
          for (var s = 0; s < o; s++) this.toRespond.push(s);
          for (s = 0; s < o; s++) {
            var c = n[s];
            this.add(i.subscribeToResult(this, c, c, s));
          }
        }

        return r(e, t), e.prototype.notifyNext = function (t, e, n, r, o) {
          this.values[n] = e;
          var i = this.toRespond;
          if (i.length > 0) {
            var s = i.indexOf(n);
            -1 !== s && i.splice(s, 1);
          }
        }, e.prototype.notifyComplete = function () {
        }, e.prototype._next = function (t) {
          if (0 === this.toRespond.length) {
            var e = [t].concat(this.values);
            this.project ? this._tryProject(e) : this.destination.next(e);
          }
        }, e.prototype._tryProject = function (t) {
          var e;
          try {
            e = this.project.apply(this, t);
          } catch (t) {
            return void this.destination.error(t);
          }
          this.destination.next(e);
        }, e;
      }(o.OuterSubscriber);
    }, 2842: function (t, e, n) {
      'use strict';
      var r = this && this.__extends || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

        function r() {
          this.constructor = t;
        }

        t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
      }, o = n(1079), i = n(7504), s = n(8846), c = n(4191), a = n(7513), u = n(5427);

      function l() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e - 0] = arguments[e];
        var n = t[t.length - 1];
        return 'function' == typeof n && t.pop(), new o.ArrayObservable(t).lift(new p(n));
      }

      e.zip = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e - 0] = arguments[e];
        return function (e) {
          return e.lift.call(l.apply(void 0, [e].concat(t)));
        };
      }, e.zipStatic = l;
      var p = function () {
        function t(t) {
          this.project = t;
        }

        return t.prototype.call = function (t, e) {
          return e.subscribe(new f(t, this.project));
        }, t;
      }();
      e.ZipOperator = p;
      var f = function (t) {
        function e(e, n, r) {
          void 0 === r && (r = Object.create(null)), t.call(this, e), this.iterators = [], this.active = 0, this.project = 'function' == typeof n ? n : null, this.values = r;
        }

        return r(e, t), e.prototype._next = function (t) {
          var e = this.iterators;
          i.isArray(t) ? e.push(new d(t)) : 'function' == typeof t[u.iterator] ? e.push(new h(t[u.iterator]())) : e.push(new y(this.destination, this, t));
        }, e.prototype._complete = function () {
          var t = this.iterators, e = t.length;
          if (0 !== e) {
            this.active = e;
            for (var n = 0; n < e; n++) {
              var r = t[n];
              r.stillUnsubscribed ? this.add(r.subscribe(r, n)) : this.active--;
            }
          } else this.destination.complete();
        }, e.prototype.notifyInactive = function () {
          this.active--, 0 === this.active && this.destination.complete();
        }, e.prototype.checkIterators = function () {
          for (var t = this.iterators, e = t.length, n = this.destination, r = 0; r < e; r++) if ('function' == typeof (s = t[r]).hasValue && !s.hasValue()) return;
          var o = !1, i = [];
          for (r = 0; r < e; r++) {
            var s, c = (s = t[r]).next();
            if (s.hasCompleted() && (o = !0), c.done) return void n.complete();
            i.push(c.value);
          }
          this.project ? this._tryProject(i) : n.next(i), o && n.complete();
        }, e.prototype._tryProject = function (t) {
          var e;
          try {
            e = this.project.apply(this, t);
          } catch (t) {
            return void this.destination.error(t);
          }
          this.destination.next(e);
        }, e;
      }(s.Subscriber);
      e.ZipSubscriber = f;
      var h = function () {
        function t(t) {
          this.iterator = t, this.nextResult = t.next();
        }

        return t.prototype.hasValue = function () {
          return !0;
        }, t.prototype.next = function () {
          var t = this.nextResult;
          return this.nextResult = this.iterator.next(), t;
        }, t.prototype.hasCompleted = function () {
          var t = this.nextResult;
          return t && t.done;
        }, t;
      }(), d = function () {
        function t(t) {
          this.array = t, this.index = 0, this.length = 0, this.length = t.length;
        }

        return t.prototype[u.iterator] = function () {
          return this;
        }, t.prototype.next = function (t) {
          var e = this.index++, n = this.array;
          return e < this.length ? {value: n[e], done: !1} : {value: null, done: !0};
        }, t.prototype.hasValue = function () {
          return this.array.length > this.index;
        }, t.prototype.hasCompleted = function () {
          return this.array.length === this.index;
        }, t;
      }(), y = function (t) {
        function e(e, n, r) {
          t.call(this, e), this.parent = n, this.observable = r, this.stillUnsubscribed = !0, this.buffer = [], this.isComplete = !1;
        }

        return r(e, t), e.prototype[u.iterator] = function () {
          return this;
        }, e.prototype.next = function () {
          var t = this.buffer;
          return 0 === t.length && this.isComplete ? {value: null, done: !0} : {value: t.shift(), done: !1};
        }, e.prototype.hasValue = function () {
          return this.buffer.length > 0;
        }, e.prototype.hasCompleted = function () {
          return 0 === this.buffer.length && this.isComplete;
        }, e.prototype.notifyComplete = function () {
          this.buffer.length > 0 ? (this.isComplete = !0, this.parent.notifyInactive()) : this.destination.complete();
        }, e.prototype.notifyNext = function (t, e, n, r, o) {
          this.buffer.push(e), this.parent.checkIterators();
        }, e.prototype.subscribe = function (t, e) {
          return a.subscribeToResult(this, this.observable, this, e);
        }, e;
      }(c.OuterSubscriber);
    }, 4469: function (t, e, n) {
      'use strict';
      var r = this && this.__extends || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

        function r() {
          this.constructor = t;
        }

        t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
      }, o = function (t) {
        function e(e, n) {
          t.call(this);
        }

        return r(e, t), e.prototype.schedule = function (t, e) {
          return void 0 === e && (e = 0), this;
        }, e;
      }(n(9227).Subscription);
      e.Action = o;
    }, 7415: function (t, e, n) {
      'use strict';
      var r = this && this.__extends || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

        function r() {
          this.constructor = t;
        }

        t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
      }, o = n(7605), i = function (t) {
        function e(e, n) {
          t.call(this, e, n), this.scheduler = e, this.work = n;
        }

        return r(e, t), e.prototype.requestAsyncId = function (e, n, r) {
          return void 0 === r && (r = 0), null !== r && r > 0 ? t.prototype.requestAsyncId.call(this, e, n, r) : (e.actions.push(this), e.scheduled || (e.scheduled = o.Immediate.setImmediate(e.flush.bind(e, null))));
        }, e.prototype.recycleAsyncId = function (e, n, r) {
          if (void 0 === r && (r = 0), null !== r && r > 0 || null === r && this.delay > 0) return t.prototype.recycleAsyncId.call(this, e, n, r);
          0 === e.actions.length && (o.Immediate.clearImmediate(n), e.scheduled = void 0);
        }, e;
      }(n(143).AsyncAction);
      e.AsapAction = i;
    }, 6502: function (t, e, n) {
      'use strict';
      var r = this && this.__extends || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

        function r() {
          this.constructor = t;
        }

        t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
      }, o = function (t) {
        function e() {
          t.apply(this, arguments);
        }

        return r(e, t), e.prototype.flush = function (t) {
          this.active = !0, this.scheduled = void 0;
          var e, n = this.actions, r = -1, o = n.length;
          t = t || n.shift();
          do {
            if (e = t.execute(t.state, t.delay)) break;
          } while (++r < o && (t = n.shift()));
          if (this.active = !1, e) {
            for (; ++r < o && (t = n.shift());) t.unsubscribe();
            throw e;
          }
        }, e;
      }(n(5385).AsyncScheduler);
      e.AsapScheduler = o;
    }, 143: function (t, e, n) {
      'use strict';
      var r = this && this.__extends || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

        function r() {
          this.constructor = t;
        }

        t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
      }, o = n(926), i = function (t) {
        function e(e, n) {
          t.call(this, e, n), this.scheduler = e, this.pending = !1, this.work = n;
        }

        return r(e, t), e.prototype.schedule = function (t, e) {
          if (void 0 === e && (e = 0), this.closed) return this;
          this.state = t, this.pending = !0;
          var n = this.id, r = this.scheduler;
          return null != n && (this.id = this.recycleAsyncId(r, n, e)), this.delay = e, this.id = this.id || this.requestAsyncId(r, this.id, e), this;
        }, e.prototype.requestAsyncId = function (t, e, n) {
          return void 0 === n && (n = 0), o.root.setInterval(t.flush.bind(t, this), n);
        }, e.prototype.recycleAsyncId = function (t, e, n) {
          if (void 0 === n && (n = 0), null !== n && this.delay === n && !1 === this.pending) return e;
          o.root.clearInterval(e);
        }, e.prototype.execute = function (t, e) {
          if (this.closed) return new Error('executing a cancelled action');
          this.pending = !1;
          var n = this._execute(t, e);
          if (n) return n;
          !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
        }, e.prototype._execute = function (t, e) {
          var n = !1, r = void 0;
          try {
            this.work(t);
          } catch (t) {
            n = !0, r = !!t && t || new Error(t);
          }
          if (n) return this.unsubscribe(), r;
        }, e.prototype._unsubscribe = function () {
          var t = this.id, e = this.scheduler, n = e.actions, r = n.indexOf(this);
          this.work = null, this.state = null, this.pending = !1, this.scheduler = null, -1 !== r && n.splice(r, 1), null != t && (this.id = this.recycleAsyncId(e, t, null)), this.delay = null;
        }, e;
      }(n(4469).Action);
      e.AsyncAction = i;
    }, 5385: function (t, e, n) {
      'use strict';
      var r = this && this.__extends || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

        function r() {
          this.constructor = t;
        }

        t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
      }, o = function (t) {
        function e() {
          t.apply(this, arguments), this.actions = [], this.active = !1, this.scheduled = void 0;
        }

        return r(e, t), e.prototype.flush = function (t) {
          var e = this.actions;
          if (this.active) e.push(t); else {
            var n;
            this.active = !0;
            do {
              if (n = t.execute(t.state, t.delay)) break;
            } while (t = e.shift());
            if (this.active = !1, n) {
              for (; t = e.shift();) t.unsubscribe();
              throw n;
            }
          }
        }, e;
      }(n(1202).Scheduler);
      e.AsyncScheduler = o;
    }, 8315: function (t, e, n) {
      'use strict';
      var r = n(7415), o = n(6502);
      e.asap = new o.AsapScheduler(r.AsapAction);
    }, 1623: function (t, e, n) {
      'use strict';
      var r = n(143), o = n(5385);
      e.async = new o.AsyncScheduler(r.AsyncAction);
    }, 5427: function (t, e, n) {
      'use strict';
      var r = n(926);

      function o(t) {
        var e = t.Symbol;
        if ('function' == typeof e) return e.iterator || (e.iterator = e('iterator polyfill')), e.iterator;
        var n = t.Set;
        if (n && 'function' == typeof (new n)['@@iterator']) return '@@iterator';
        var r = t.Map;
        if (r) for (var o = Object.getOwnPropertyNames(r.prototype), i = 0; i < o.length; ++i) {
          var s = o[i];
          if ('entries' !== s && 'size' !== s && r.prototype[s] === r.prototype.entries) return s;
        }
        return '@@iterator';
      }

      e.symbolIteratorPonyfill = o, e.iterator = o(r.root), e.$$iterator = e.iterator;
    }, 3118: function (t, e, n) {
      'use strict';
      var r = n(926);

      function o(t) {
        var e, n = t.Symbol;
        return 'function' == typeof n ? n.observable ? e = n.observable : (e = n('observable'), n.observable = e) : e = '@@observable', e;
      }

      e.getSymbolObservable = o, e.observable = o(r.root), e.$$observable = e.observable;
    }, 6774: function (t, e, n) {
      'use strict';
      var r = n(926).root.Symbol;
      e.rxSubscriber = 'function' == typeof r && 'function' == typeof r.for ? r.for('rxSubscriber') : '@@rxSubscriber', e.$$rxSubscriber = e.rxSubscriber;
    }, 7988: function (t, e) {
      'use strict';
      var n = function () {
        function t() {
          this.values = {};
        }

        return t.prototype.delete = function (t) {
          return this.values[t] = null, !0;
        }, t.prototype.set = function (t, e) {
          return this.values[t] = e, this;
        }, t.prototype.get = function (t) {
          return this.values[t];
        }, t.prototype.forEach = function (t, e) {
          var n = this.values;
          for (var r in n) n.hasOwnProperty(r) && null !== n[r] && t.call(e, n[r], r);
        }, t.prototype.clear = function () {
          this.values = {};
        }, t;
      }();
      e.FastMap = n;
    }, 7605: function (t, e, n) {
      'use strict';
      var r = n(926), o = function () {
        function t(t) {
          if (this.root = t, t.setImmediate && 'function' == typeof t.setImmediate) this.setImmediate = t.setImmediate.bind(t), this.clearImmediate = t.clearImmediate.bind(t); else {
            this.nextHandle = 1, this.tasksByHandle = {}, this.currentlyRunningATask = !1, this.canUseProcessNextTick() ? this.setImmediate = this.createProcessNextTickSetImmediate() : this.canUsePostMessage() ? this.setImmediate = this.createPostMessageSetImmediate() : this.canUseMessageChannel() ? this.setImmediate = this.createMessageChannelSetImmediate() : this.canUseReadyStateChange() ? this.setImmediate = this.createReadyStateChangeSetImmediate() : this.setImmediate = this.createSetTimeoutSetImmediate();
            var e = function t(e) {
              delete t.instance.tasksByHandle[e];
            };
            e.instance = this, this.clearImmediate = e;
          }
        }

        return t.prototype.identify = function (t) {
          return this.root.Object.prototype.toString.call(t);
        }, t.prototype.canUseProcessNextTick = function () {
          return '[object process]' === this.identify(this.root.process);
        }, t.prototype.canUseMessageChannel = function () {
          return Boolean(this.root.MessageChannel);
        }, t.prototype.canUseReadyStateChange = function () {
          var t = this.root.document;
          return Boolean(t && 'onreadystatechange' in t.createElement('script'));
        }, t.prototype.canUsePostMessage = function () {
          var t = this.root;
          if (t.postMessage && !t.importScripts) {
            var e = !0, n = t.onmessage;
            return t.onmessage = function () {
              e = !1;
            }, t.postMessage('', '*'), t.onmessage = n, e;
          }
          return !1;
        }, t.prototype.partiallyApplied = function (t) {
          for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
          var r = function t() {
            var e = t.handler, n = t.args;
            'function' == typeof e ? e.apply(void 0, n) : new Function('' + e)();
          };
          return r.handler = t, r.args = e, r;
        }, t.prototype.addFromSetImmediateArguments = function (t) {
          return this.tasksByHandle[this.nextHandle] = this.partiallyApplied.apply(void 0, t), this.nextHandle++;
        }, t.prototype.createProcessNextTickSetImmediate = function () {
          var t = function t() {
            var e = t.instance, n = e.addFromSetImmediateArguments(arguments);
            return e.root.process.nextTick(e.partiallyApplied(e.runIfPresent, n)), n;
          };
          return t.instance = this, t;
        }, t.prototype.createPostMessageSetImmediate = function () {
          var t = this.root, e = 'setImmediate$' + t.Math.random() + '$', n = function n(r) {
            var o = n.instance;
            r.source === t && 'string' == typeof r.data && 0 === r.data.indexOf(e) && o.runIfPresent(+r.data.slice(e.length));
          };
          n.instance = this, t.addEventListener('message', n, !1);
          var r = function t() {
            var e = t.messagePrefix, n = t.instance, r = n.addFromSetImmediateArguments(arguments);
            return n.root.postMessage(e + r, '*'), r;
          };
          return r.instance = this, r.messagePrefix = e, r;
        }, t.prototype.runIfPresent = function (t) {
          if (this.currentlyRunningATask) this.root.setTimeout(this.partiallyApplied(this.runIfPresent, t), 0); else {
            var e = this.tasksByHandle[t];
            if (e) {
              this.currentlyRunningATask = !0;
              try {
                e();
              } finally {
                this.clearImmediate(t), this.currentlyRunningATask = !1;
              }
            }
          }
        }, t.prototype.createMessageChannelSetImmediate = function () {
          var t = this, e = new this.root.MessageChannel;
          e.port1.onmessage = function (e) {
            var n = e.data;
            t.runIfPresent(n);
          };
          var n = function t() {
            var e = t.channel, n = t.instance.addFromSetImmediateArguments(arguments);
            return e.port2.postMessage(n), n;
          };
          return n.channel = e, n.instance = this, n;
        }, t.prototype.createReadyStateChangeSetImmediate = function () {
          var t = function t() {
            var e = t.instance, n = e.root.document, r = n.documentElement,
              o = e.addFromSetImmediateArguments(arguments), i = n.createElement('script');
            return i.onreadystatechange = function () {
              e.runIfPresent(o), i.onreadystatechange = null, r.removeChild(i), i = null;
            }, r.appendChild(i), o;
          };
          return t.instance = this, t;
        }, t.prototype.createSetTimeoutSetImmediate = function () {
          var t = function t() {
            var e = t.instance, n = e.addFromSetImmediateArguments(arguments);
            return e.root.setTimeout(e.partiallyApplied(e.runIfPresent, n), 0), n;
          };
          return t.instance = this, t;
        }, t;
      }();
      e.ImmediateDefinition = o, e.Immediate = new o(r.root);
    }, 8306: function (t, e, n) {
      'use strict';
      var r = n(926), o = n(5925);
      e.Map = r.root.Map || o.MapPolyfill;
    }, 5925: function (t, e) {
      'use strict';
      var n = function () {
        function t() {
          this.size = 0, this._values = [], this._keys = [];
        }

        return t.prototype.get = function (t) {
          var e = this._keys.indexOf(t);
          return -1 === e ? void 0 : this._values[e];
        }, t.prototype.set = function (t, e) {
          var n = this._keys.indexOf(t);
          return -1 === n ? (this._keys.push(t), this._values.push(e), this.size++) : this._values[n] = e, this;
        }, t.prototype.delete = function (t) {
          var e = this._keys.indexOf(t);
          return -1 !== e && (this._values.splice(e, 1), this._keys.splice(e, 1), this.size--, !0);
        }, t.prototype.clear = function () {
          this._keys.length = 0, this._values.length = 0, this.size = 0;
        }, t.prototype.forEach = function (t, e) {
          for (var n = 0; n < this.size; n++) t.call(e, this._values[n], this._keys[n]);
        }, t;
      }();
      e.MapPolyfill = n;
    }, 9377: function (t, e) {
      'use strict';
      var n = this && this.__extends || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

        function r() {
          this.constructor = t;
        }

        t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
      }, r = function (t) {
        function e() {
          var e = t.call(this, 'object unsubscribed');
          this.name = e.name = 'ObjectUnsubscribedError', this.stack = e.stack, this.message = e.message;
        }

        return n(e, t), e;
      }(Error);
      e.ObjectUnsubscribedError = r;
    }, 3132: function (t, e) {
      'use strict';
      var n = this && this.__extends || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

        function r() {
          this.constructor = t;
        }

        t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
      }, r = function (t) {
        function e(e) {
          t.call(this), this.errors = e;
          var n = Error.call(this, e ? e.length + ' errors occurred during unsubscription:\n  ' + e.map((function (t, e) {
            return e + 1 + ') ' + t.toString();
          })).join('\n  ') : '');
          this.name = n.name = 'UnsubscriptionError', this.stack = n.stack, this.message = n.message;
        }

        return n(e, t), e;
      }(Error);
      e.UnsubscriptionError = r;
    }, 5566: function (t, e) {
      'use strict';
      e.errorObject = {e: {}};
    }, 6934: function (t, e) {
      'use strict';
      e.identity = function (t) {
        return t;
      };
    }, 7504: function (t, e) {
      'use strict';
      e.isArray = Array.isArray || function (t) {
        return t && 'number' == typeof t.length;
      };
    }, 2482: function (t, e) {
      'use strict';
      e.isArrayLike = function (t) {
        return t && 'number' == typeof t.length;
      };
    }, 787: function (t, e) {
      'use strict';
      e.isDate = function (t) {
        return t instanceof Date && !isNaN(+t);
      };
    }, 148: function (t, e) {
      'use strict';
      e.isFunction = function (t) {
        return 'function' == typeof t;
      };
    }, 8882: function (t, e, n) {
      'use strict';
      var r = n(7504);
      e.isNumeric = function (t) {
        return !r.isArray(t) && t - parseFloat(t) + 1 >= 0;
      };
    }, 1169: function (t, e) {
      'use strict';
      e.isObject = function (t) {
        return null != t && 'object' == typeof t;
      };
    }, 8712: function (t, e) {
      'use strict';
      e.isPromise = function (t) {
        return t && 'function' != typeof t.subscribe && 'function' == typeof t.then;
      };
    }, 71: function (t, e) {
      'use strict';
      e.isScheduler = function (t) {
        return t && 'function' == typeof t.schedule;
      };
    }, 253: function (t, e) {
      'use strict';
      e.noop = function () {
      };
    }, 5831: function (t, e) {
      'use strict';
      e.not = function (t, e) {
        function n() {
          return !n.pred.apply(n.thisArg, arguments);
        }

        return n.pred = t, n.thisArg = e, n;
      };
    }, 2957: function (t, e, n) {
      'use strict';
      var r = n(253);

      function o(t) {
        return t ? 1 === t.length ? t[0] : function (e) {
          return t.reduce((function (t, e) {
            return e(t);
          }), e);
        } : r.noop;
      }

      e.pipe = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e - 0] = arguments[e];
        return o(t);
      }, e.pipeFromArray = o;
    }, 926: function (t, e, n) {
      'use strict';
      var r = 'undefined' != typeof window && window,
        o = 'undefined' != typeof self && 'undefined' != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
        i = void 0 !== n.g && n.g, s = r || i || o;
      e.root = s, function () {
        if (!s) throw new Error('RxJS could not find any global context (window, self, global)');
      }();
    }, 7513: function (t, e, n) {
      'use strict';
      var r = n(926), o = n(2482), i = n(8712), s = n(1169), c = n(8952), a = n(5427), u = n(1385), l = n(3118);
      e.subscribeToResult = function (t, e, n, p) {
        var f = new u.InnerSubscriber(t, n, p);
        if (f.closed) return null;
        if (e instanceof c.Observable) return e._isScalar ? (f.next(e.value), f.complete(), null) : (f.syncErrorThrowable = !0, e.subscribe(f));
        if (o.isArrayLike(e)) {
          for (var h = 0, d = e.length; h < d && !f.closed; h++) f.next(e[h]);
          f.closed || f.complete();
        } else {
          if (i.isPromise(e)) return e.then((function (t) {
            f.closed || (f.next(t), f.complete());
          }), (function (t) {
            return f.error(t);
          })).then(null, (function (t) {
            r.root.setTimeout((function () {
              throw t;
            }));
          })), f;
          if (e && 'function' == typeof e[a.iterator]) for (var y = e[a.iterator](); ;) {
            var v = y.next();
            if (v.done) {
              f.complete();
              break;
            }
            if (f.next(v.value), f.closed) break;
          } else if (e && 'function' == typeof e[l.observable]) {
            var b = e[l.observable]();
            if ('function' == typeof b.subscribe) return b.subscribe(new u.InnerSubscriber(t, n, p));
            f.error(new TypeError('Provided object does not correctly implement Symbol.observable'));
          } else {
            var m = 'You provided ' + (s.isObject(e) ? 'an invalid object' : '\'' + e + '\'') + ' where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.';
            f.error(new TypeError(m));
          }
        }
        return null;
      };
    }, 531: function (t, e, n) {
      'use strict';
      var r = n(8846), o = n(6774), i = n(1640);
      e.toSubscriber = function (t, e, n) {
        if (t) {
          if (t instanceof r.Subscriber) return t;
          if (t[o.rxSubscriber]) return t[o.rxSubscriber]();
        }
        return t || e || n ? new r.Subscriber(t, e, n) : new r.Subscriber(i.empty);
      };
    }, 6657: function (t, e, n) {
      'use strict';
      var r, o = n(5566);

      function i() {
        try {
          return r.apply(this, arguments);
        } catch (t) {
          return o.errorObject.e = t, o.errorObject;
        }
      }

      e.tryCatch = function (t) {
        return r = t, i;
      };
    }, 6443: function (t, e) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.hasCORS = void 0;
      var n = !1;
      try {
        n = 'undefined' != typeof XMLHttpRequest && 'withCredentials' in new XMLHttpRequest;
      } catch (t) {
      }
      e.hasCORS = n;
    }, 6021: function (t, e) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.decode = e.encode = void 0, e.encode = function (t) {
        var e = '';
        for (var n in t) t.hasOwnProperty(n) && (e.length && (e += '&'), e += encodeURIComponent(n) + '=' + encodeURIComponent(t[n]));
        return e;
      }, e.decode = function (t) {
        for (var e = {}, n = t.split('&'), r = 0, o = n.length; r < o; r++) {
          var i = n[r].split('=');
          e[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
        }
        return e;
      };
    }, 7259: function (t, e) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.parse = void 0;
      var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        r = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];
      e.parse = function (t) {
        var e, o, i = t, s = t.indexOf('['), c = t.indexOf(']');
        -1 != s && -1 != c && (t = t.substring(0, s) + t.substring(s, c).replace(/:/g, ';') + t.substring(c, t.length));
        for (var a, u, l = n.exec(t || ''), p = {}, f = 14; f--;) p[r[f]] = l[f] || '';
        return -1 != s && -1 != c && (p.source = i, p.host = p.host.substring(1, p.host.length - 1).replace(/;/g, ':'), p.authority = p.authority.replace('[', '').replace(']', '').replace(/;/g, ':'), p.ipv6uri = !0), p.pathNames = (e = p.path, o = e.replace(/\/{2,9}/g, '/').split('/'), '/' != e.slice(0, 1) && 0 !== e.length || o.splice(0, 1), '/' == e.slice(-1) && o.splice(o.length - 1, 1), o), p.queryKey = (a = p.query, u = {}, a.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, (function (t, e, n) {
          e && (u[e] = n);
        })), u), p;
      };
    }, 8870: function (t, e) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.yeast = e.decode = e.encode = void 0;
      var n, r = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''), o = 64, i = {}, s = 0,
        c = 0;

      function a(t) {
        var e = '';
        do {
          e = r[t % o] + e, t = Math.floor(t / o);
        } while (t > 0);
        return e;
      }

      for (e.encode = a, e.decode = function (t) {
        var e = 0;
        for (c = 0; c < t.length; c++) e = e * o + i[t.charAt(c)];
        return e;
      }, e.yeast = function () {
        var t = a(+new Date);
        return t !== n ? (s = 0, n = t) : t + '.' + a(s++);
      }; c < o; c++) i[r[c]] = c;
    }, 6574: function (t, e) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.globalThisShim = void 0, e.globalThisShim = 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : Function('return this')();
    }, 3006: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.nextTick = e.parse = e.installTimerFunctions = e.transports = e.Transport = e.protocol = e.Socket = void 0;
      var r = n(2270);
      Object.defineProperty(e, 'Socket', {
        enumerable: !0, get: function () {
          return r.Socket;
        }
      }), e.protocol = r.Socket.protocol;
      var o = n(6954);
      Object.defineProperty(e, 'Transport', {
        enumerable: !0, get: function () {
          return o.Transport;
        }
      });
      var i = n(715);
      Object.defineProperty(e, 'transports', {
        enumerable: !0, get: function () {
          return i.transports;
        }
      });
      var s = n(7708);
      Object.defineProperty(e, 'installTimerFunctions', {
        enumerable: !0, get: function () {
          return s.installTimerFunctions;
        }
      });
      var c = n(7259);
      Object.defineProperty(e, 'parse', {
        enumerable: !0, get: function () {
          return c.parse;
        }
      });
      var a = n(1431);
      Object.defineProperty(e, 'nextTick', {
        enumerable: !0, get: function () {
          return a.nextTick;
        }
      });
    }, 2270: function (t, e, n) {
      'use strict';
      var r = n(2817), o = this && this.__importDefault || function (t) {
        return t && t.__esModule ? t : {default: t};
      };
      Object.defineProperty(e, '__esModule', {value: !0}), e.Socket = void 0;
      var i = n(715), s = n(7708), c = n(6021), a = n(7259), u = o(n(4342)), l = n(5260), p = n(8933),
        f = (0, u.default)('engine.io-client:socket'), h = function (t) {
          function e(e, n) {
            void 0 === n && (n = {});
            var r = t.call(this) || this;
            return e && 'object' == typeof e && (n = e, e = null), e ? (e = (0, a.parse)(e), n.hostname = e.host, n.secure = 'https' === e.protocol || 'wss' === e.protocol, n.port = e.port, e.query && (n.query = e.query)) : n.host && (n.hostname = (0, a.parse)(n.host).host), (0, s.installTimerFunctions)(r, n), r.secure = null != n.secure ? n.secure : 'undefined' != typeof location && 'https:' === location.protocol, n.hostname && !n.port && (n.port = r.secure ? '443' : '80'), r.hostname = n.hostname || ('undefined' != typeof location ? location.hostname : 'localhost'), r.port = n.port || ('undefined' != typeof location && location.port ? location.port : r.secure ? '443' : '80'), r.transports = n.transports || ['polling', 'websocket'], r.readyState = '', r.writeBuffer = [], r.prevBufferLen = 0, r.opts = Object.assign({
              path: '/engine.io',
              agent: !1,
              withCredentials: !1,
              upgrade: !0,
              timestampParam: 't',
              rememberUpgrade: !1,
              rejectUnauthorized: !0,
              perMessageDeflate: {threshold: 1024},
              transportOptions: {},
              closeOnBeforeunload: !0
            }, n), r.opts.path = r.opts.path.replace(/\/$/, '') + '/', 'string' == typeof r.opts.query && (r.opts.query = (0, c.decode)(r.opts.query)), r.id = null, r.upgrades = null, r.pingInterval = null, r.pingTimeout = null, r.pingTimeoutTimer = null, 'function' == typeof addEventListener && (r.opts.closeOnBeforeunload && (r.beforeunloadEventListener = function () {
              r.transport && (r.transport.removeAllListeners(), r.transport.close());
            }, addEventListener('beforeunload', r.beforeunloadEventListener, !1)), 'localhost' !== r.hostname && (r.offlineEventListener = function () {
              r.onClose('transport close', {description: 'network connection lost'});
            }, addEventListener('offline', r.offlineEventListener, !1))), r.open(), r;
          }

          return r.__extends(e, t), e.prototype.createTransport = function (t) {
            f('creating transport "%s"', t);
            var e = Object.assign({}, this.opts.query);
            e.EIO = p.protocol, e.transport = t, this.id && (e.sid = this.id);
            var n = Object.assign({}, this.opts.transportOptions[t], this.opts, {
              query: e,
              socket: this,
              hostname: this.hostname,
              secure: this.secure,
              port: this.port
            });
            return f('options: %j', n), new i.transports[t](n);
          }, e.prototype.open = function () {
            var t, n = this;
            if (this.opts.rememberUpgrade && e.priorWebsocketSuccess && -1 !== this.transports.indexOf('websocket')) t = 'websocket'; else {
              if (0 === this.transports.length) return void this.setTimeoutFn((function () {
                n.emitReserved('error', 'No transports available');
              }), 0);
              t = this.transports[0];
            }
            this.readyState = 'opening';
            try {
              t = this.createTransport(t);
            } catch (t) {
              return f('error while creating transport: %s', t), this.transports.shift(), void this.open();
            }
            t.open(), this.setTransport(t);
          }, e.prototype.setTransport = function (t) {
            var e = this;
            f('setting transport %s', t.name), this.transport && (f('clearing existing transport %s', this.transport.name), this.transport.removeAllListeners()), this.transport = t, t.on('drain', this.onDrain.bind(this)).on('packet', this.onPacket.bind(this)).on('error', this.onError.bind(this)).on('close', (function (t) {
              return e.onClose('transport close', t);
            }));
          }, e.prototype.probe = function (t) {
            var n = this;
            f('probing transport "%s"', t);
            var r = this.createTransport(t), o = !1;
            e.priorWebsocketSuccess = !1;
            var i = function () {
              o || (f('probe transport "%s" opened', t), r.send([{
                type: 'ping',
                data: 'probe'
              }]), r.once('packet', (function (i) {
                if (!o) if ('pong' === i.type && 'probe' === i.data) {
                  if (f('probe transport "%s" pong', t), n.upgrading = !0, n.emitReserved('upgrading', r), !r) return;
                  e.priorWebsocketSuccess = 'websocket' === r.name, f('pausing current transport "%s"', n.transport.name), n.transport.pause((function () {
                    o || 'closed' !== n.readyState && (f('changing transport and sending upgrade packet'), p(), n.setTransport(r), r.send([{type: 'upgrade'}]), n.emitReserved('upgrade', r), r = null, n.upgrading = !1, n.flush());
                  }));
                } else {
                  f('probe transport "%s" failed', t);
                  var s = new Error('probe error');
                  s.transport = r.name, n.emitReserved('upgradeError', s);
                }
              })));
            };

            function s() {
              o || (o = !0, p(), r.close(), r = null);
            }

            var c = function (e) {
              var o = new Error('probe error: ' + e);
              o.transport = r.name, s(), f('probe transport "%s" failed because of error: %s', t, e), n.emitReserved('upgradeError', o);
            };

            function a() {
              c('transport closed');
            }

            function u() {
              c('socket closed');
            }

            function l(t) {
              r && t.name !== r.name && (f('"%s" works - aborting "%s"', t.name, r.name), s());
            }

            var p = function () {
              r.removeListener('open', i), r.removeListener('error', c), r.removeListener('close', a), n.off('close', u), n.off('upgrading', l);
            };
            r.once('open', i), r.once('error', c), r.once('close', a), this.once('close', u), this.once('upgrading', l), r.open();
          }, e.prototype.onOpen = function () {
            if (f('socket open'), this.readyState = 'open', e.priorWebsocketSuccess = 'websocket' === this.transport.name, this.emitReserved('open'), this.flush(), 'open' === this.readyState && this.opts.upgrade && this.transport.pause) {
              f('starting upgrade probes');
              for (var t = 0, n = this.upgrades.length; t < n; t++) this.probe(this.upgrades[t]);
            }
          }, e.prototype.onPacket = function (t) {
            if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) switch (f('socket receive: type "%s", data "%s"', t.type, t.data), this.emitReserved('packet', t), this.emitReserved('heartbeat'), t.type) {
              case'open':
                this.onHandshake(JSON.parse(t.data));
                break;
              case'ping':
                this.resetPingTimeout(), this.sendPacket('pong'), this.emitReserved('ping'), this.emitReserved('pong');
                break;
              case'error':
                var e = new Error('server error');
                e.code = t.data, this.onError(e);
                break;
              case'message':
                this.emitReserved('data', t.data), this.emitReserved('message', t.data);
            } else f('packet received with socket readyState "%s"', this.readyState);
          }, e.prototype.onHandshake = function (t) {
            this.emitReserved('handshake', t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.maxPayload = t.maxPayload, this.onOpen(), 'closed' !== this.readyState && this.resetPingTimeout();
          }, e.prototype.resetPingTimeout = function () {
            var t = this;
            this.clearTimeoutFn(this.pingTimeoutTimer), this.pingTimeoutTimer = this.setTimeoutFn((function () {
              t.onClose('ping timeout');
            }), this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref();
          }, e.prototype.onDrain = function () {
            this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emitReserved('drain') : this.flush();
          }, e.prototype.flush = function () {
            if ('closed' !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
              var t = this.getWritablePackets();
              f('flushing %d packets in socket', t.length), this.transport.send(t), this.prevBufferLen = t.length, this.emitReserved('flush');
            }
          }, e.prototype.getWritablePackets = function () {
            if (!(this.maxPayload && 'polling' === this.transport.name && this.writeBuffer.length > 1)) return this.writeBuffer;
            for (var t = 1, e = 0; e < this.writeBuffer.length; e++) {
              var n = this.writeBuffer[e].data;
              if (n && (t += (0, s.byteLength)(n)), e > 0 && t > this.maxPayload) return f('only send %d out of %d packets', e, this.writeBuffer.length), this.writeBuffer.slice(0, e);
              t += 2;
            }
            return f('payload size is %d (max: %d)', t, this.maxPayload), this.writeBuffer;
          }, e.prototype.write = function (t, e, n) {
            return this.sendPacket('message', t, e, n), this;
          }, e.prototype.send = function (t, e, n) {
            return this.sendPacket('message', t, e, n), this;
          }, e.prototype.sendPacket = function (t, e, n, r) {
            if ('function' == typeof e && (r = e, e = void 0), 'function' == typeof n && (r = n, n = null), 'closing' !== this.readyState && 'closed' !== this.readyState) {
              (n = n || {}).compress = !1 !== n.compress;
              var o = {type: t, data: e, options: n};
              this.emitReserved('packetCreate', o), this.writeBuffer.push(o), r && this.once('flush', r), this.flush();
            }
          }, e.prototype.close = function () {
            var t = this, e = function () {
              t.onClose('forced close'), f('socket closing - telling transport to close'), t.transport.close();
            }, n = function () {
              t.off('upgrade', n), t.off('upgradeError', n), e();
            }, r = function () {
              t.once('upgrade', n), t.once('upgradeError', n);
            };
            return 'opening' !== this.readyState && 'open' !== this.readyState || (this.readyState = 'closing', this.writeBuffer.length ? this.once('drain', (function () {
              t.upgrading ? r() : e();
            })) : this.upgrading ? r() : e()), this;
          }, e.prototype.onError = function (t) {
            f('socket error %j', t), e.priorWebsocketSuccess = !1, this.emitReserved('error', t), this.onClose('transport error', t);
          }, e.prototype.onClose = function (t, e) {
            'opening' !== this.readyState && 'open' !== this.readyState && 'closing' !== this.readyState || (f('socket close with reason: "%s"', t), this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners('close'), this.transport.close(), this.transport.removeAllListeners(), 'function' == typeof removeEventListener && (removeEventListener('beforeunload', this.beforeunloadEventListener, !1), removeEventListener('offline', this.offlineEventListener, !1)), this.readyState = 'closed', this.id = null, this.emitReserved('close', t, e), this.writeBuffer = [], this.prevBufferLen = 0);
          }, e.prototype.filterUpgrades = function (t) {
            for (var e = [], n = 0, r = t.length; n < r; n++) ~this.transports.indexOf(t[n]) && e.push(t[n]);
            return e;
          }, e;
        }(l.Emitter);
      e.Socket = h, h.protocol = p.protocol;
    }, 6954: function (t, e, n) {
      'use strict';
      var r = n(2817), o = this && this.__importDefault || function (t) {
        return t && t.__esModule ? t : {default: t};
      };
      Object.defineProperty(e, '__esModule', {value: !0}), e.Transport = void 0;
      var i = n(8933), s = n(5260), c = n(7708), a = (0, o(n(4342)).default)('engine.io-client:transport'),
        u = function (t) {
          function e(e, n, r) {
            var o = t.call(this, e) || this;
            return o.description = n, o.context = r, o.type = 'TransportError', o;
          }

          return r.__extends(e, t), e;
        }(Error), l = function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return n.writable = !1, (0, c.installTimerFunctions)(n, e), n.opts = e, n.query = e.query, n.readyState = '', n.socket = e.socket, n;
          }

          return r.__extends(e, t), e.prototype.onError = function (e, n, r) {
            return t.prototype.emitReserved.call(this, 'error', new u(e, n, r)), this;
          }, e.prototype.open = function () {
            return 'closed' !== this.readyState && '' !== this.readyState || (this.readyState = 'opening', this.doOpen()), this;
          }, e.prototype.close = function () {
            return 'opening' !== this.readyState && 'open' !== this.readyState || (this.doClose(), this.onClose()), this;
          }, e.prototype.send = function (t) {
            'open' === this.readyState ? this.write(t) : a('transport is not open, discarding packets');
          }, e.prototype.onOpen = function () {
            this.readyState = 'open', this.writable = !0, t.prototype.emitReserved.call(this, 'open');
          }, e.prototype.onData = function (t) {
            var e = (0, i.decodePacket)(t, this.socket.binaryType);
            this.onPacket(e);
          }, e.prototype.onPacket = function (e) {
            t.prototype.emitReserved.call(this, 'packet', e);
          }, e.prototype.onClose = function (e) {
            this.readyState = 'closed', t.prototype.emitReserved.call(this, 'close', e);
          }, e;
        }(s.Emitter);
      e.Transport = l;
    }, 715: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.transports = void 0;
      var r = n(5018), o = n(7555);
      e.transports = {websocket: o.WS, polling: r.Polling};
    }, 5018: function (t, e, n) {
      'use strict';
      var r = n(2817), o = this && this.__importDefault || function (t) {
        return t && t.__esModule ? t : {default: t};
      };
      Object.defineProperty(e, '__esModule', {value: !0}), e.Request = e.Polling = void 0;
      var i = n(6954), s = o(n(4342)), c = n(8870), a = n(6021), u = n(8933), l = n(4893), p = n(5260), f = n(7708),
        h = n(6574), d = (0, s.default)('engine.io-client:polling');

      function y() {
      }

      var v = null != new l.XHR({xdomain: !1}).responseType, b = function (t) {
        function e(e) {
          var n = t.call(this, e) || this;
          if (n.polling = !1, 'undefined' != typeof location) {
            var r = 'https:' === location.protocol, o = location.port;
            o || (o = r ? '443' : '80'), n.xd = 'undefined' != typeof location && e.hostname !== location.hostname || o !== e.port, n.xs = e.secure !== r;
          }
          var i = e && e.forceBase64;
          return n.supportsBinary = v && !i, n;
        }

        return r.__extends(e, t), Object.defineProperty(e.prototype, 'name', {
          get: function () {
            return 'polling';
          }, enumerable: !1, configurable: !0
        }), e.prototype.doOpen = function () {
          this.poll();
        }, e.prototype.pause = function (t) {
          var e = this;
          this.readyState = 'pausing';
          var n = function () {
            d('paused'), e.readyState = 'paused', t();
          };
          if (this.polling || !this.writable) {
            var r = 0;
            this.polling && (d('we are currently polling - waiting to pause'), r++, this.once('pollComplete', (function () {
              d('pre-pause polling complete'), --r || n();
            }))), this.writable || (d('we are currently writing - waiting to pause'), r++, this.once('drain', (function () {
              d('pre-pause writing complete'), --r || n();
            })));
          } else n();
        }, e.prototype.poll = function () {
          d('polling'), this.polling = !0, this.doPoll(), this.emitReserved('poll');
        }, e.prototype.onData = function (t) {
          var e = this;
          d('polling got data %s', t), (0, u.decodePayload)(t, this.socket.binaryType).forEach((function (t) {
            if ('opening' === e.readyState && 'open' === t.type && e.onOpen(), 'close' === t.type) return e.onClose({description: 'transport closed by the server'}), !1;
            e.onPacket(t);
          })), 'closed' !== this.readyState && (this.polling = !1, this.emitReserved('pollComplete'), 'open' === this.readyState ? this.poll() : d('ignoring poll - transport state "%s"', this.readyState));
        }, e.prototype.doClose = function () {
          var t = this, e = function () {
            d('writing close packet'), t.write([{type: 'close'}]);
          };
          'open' === this.readyState ? (d('transport open - closing'), e()) : (d('transport not open - deferring close'), this.once('open', e));
        }, e.prototype.write = function (t) {
          var e = this;
          this.writable = !1, (0, u.encodePayload)(t, (function (t) {
            e.doWrite(t, (function () {
              e.writable = !0, e.emitReserved('drain');
            }));
          }));
        }, e.prototype.uri = function () {
          var t = this.query || {}, e = this.opts.secure ? 'https' : 'http', n = '';
          !1 !== this.opts.timestampRequests && (t[this.opts.timestampParam] = (0, c.yeast)()), this.supportsBinary || t.sid || (t.b64 = 1), this.opts.port && ('https' === e && 443 !== Number(this.opts.port) || 'http' === e && 80 !== Number(this.opts.port)) && (n = ':' + this.opts.port);
          var r = (0, a.encode)(t);
          return e + '://' + (-1 !== this.opts.hostname.indexOf(':') ? '[' + this.opts.hostname + ']' : this.opts.hostname) + n + this.opts.path + (r.length ? '?' + r : '');
        }, e.prototype.request = function (t) {
          return void 0 === t && (t = {}), Object.assign(t, {
            xd: this.xd,
            xs: this.xs
          }, this.opts), new m(this.uri(), t);
        }, e.prototype.doWrite = function (t, e) {
          var n = this, r = this.request({method: 'POST', data: t});
          r.on('success', e), r.on('error', (function (t, e) {
            n.onError('xhr post error', t, e);
          }));
        }, e.prototype.doPoll = function () {
          var t = this;
          d('xhr poll');
          var e = this.request();
          e.on('data', this.onData.bind(this)), e.on('error', (function (e, n) {
            t.onError('xhr poll error', e, n);
          })), this.pollXhr = e;
        }, e;
      }(i.Transport);
      e.Polling = b;
      var m = function (t) {
        function e(e, n) {
          var r = t.call(this) || this;
          return (0, f.installTimerFunctions)(r, n), r.opts = n, r.method = n.method || 'GET', r.uri = e, r.async = !1 !== n.async, r.data = void 0 !== n.data ? n.data : null, r.create(), r;
        }

        return r.__extends(e, t), e.prototype.create = function () {
          var t = this,
            n = (0, f.pick)(this.opts, 'agent', 'pfx', 'key', 'passphrase', 'cert', 'ca', 'ciphers', 'rejectUnauthorized', 'autoUnref');
          n.xdomain = !!this.opts.xd, n.xscheme = !!this.opts.xs;
          var r = this.xhr = new l.XHR(n);
          try {
            d('xhr open %s: %s', this.method, this.uri), r.open(this.method, this.uri, this.async);
            try {
              if (this.opts.extraHeaders) for (var o in r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0), this.opts.extraHeaders) this.opts.extraHeaders.hasOwnProperty(o) && r.setRequestHeader(o, this.opts.extraHeaders[o]);
            } catch (t) {
            }
            if ('POST' === this.method) try {
              r.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
            } catch (t) {
            }
            try {
              r.setRequestHeader('Accept', '*/*');
            } catch (t) {
            }
            'withCredentials' in r && (r.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (r.timeout = this.opts.requestTimeout), r.onreadystatechange = function () {
              4 === r.readyState && (200 === r.status || 1223 === r.status ? t.onLoad() : t.setTimeoutFn((function () {
                t.onError('number' == typeof r.status ? r.status : 0);
              }), 0));
            }, d('xhr data %s', this.data), r.send(this.data);
          } catch (e) {
            return void this.setTimeoutFn((function () {
              t.onError(e);
            }), 0);
          }
          'undefined' != typeof document && (this.index = e.requestsCount++, e.requests[this.index] = this);
        }, e.prototype.onError = function (t) {
          this.emitReserved('error', t, this.xhr), this.cleanup(!0);
        }, e.prototype.cleanup = function (t) {
          if (void 0 !== this.xhr && null !== this.xhr) {
            if (this.xhr.onreadystatechange = y, t) try {
              this.xhr.abort();
            } catch (t) {
            }
            'undefined' != typeof document && delete e.requests[this.index], this.xhr = null;
          }
        }, e.prototype.onLoad = function () {
          var t = this.xhr.responseText;
          null !== t && (this.emitReserved('data', t), this.emitReserved('success'), this.cleanup());
        }, e.prototype.abort = function () {
          this.cleanup();
        }, e;
      }(p.Emitter);
      if (e.Request = m, m.requestsCount = 0, m.requests = {}, 'undefined' != typeof document) if ('function' == typeof attachEvent) attachEvent('onunload', _); else if ('function' == typeof addEventListener) {
        var g = 'onpagehide' in h.globalThisShim ? 'pagehide' : 'unload';
        addEventListener(g, _, !1);
      }

      function _() {
        for (var t in m.requests) m.requests.hasOwnProperty(t) && m.requests[t].abort();
      }
    }, 1431: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.defaultBinaryType = e.usingBrowserWebSocket = e.WebSocket = e.nextTick = void 0;
      var r = n(6574);
      e.nextTick = 'function' == typeof Promise && 'function' == typeof Promise.resolve ? function (t) {
        return Promise.resolve().then(t);
      } : function (t, e) {
        return e(t, 0);
      }, e.WebSocket = r.globalThisShim.WebSocket || r.globalThisShim.MozWebSocket, e.usingBrowserWebSocket = !0, e.defaultBinaryType = 'arraybuffer';
    }, 7555: function (t, e, n) {
      'use strict';
      var r = n(2817), o = this && this.__importDefault || function (t) {
        return t && t.__esModule ? t : {default: t};
      };
      Object.defineProperty(e, '__esModule', {value: !0}), e.WS = void 0;
      var i = n(6954), s = n(6021), c = n(8870), a = n(7708), u = n(1431), l = o(n(4342)), p = n(8933),
        f = (0, l.default)('engine.io-client:websocket'),
        h = 'undefined' != typeof navigator && 'string' == typeof navigator.product && 'reactnative' === navigator.product.toLowerCase(),
        d = function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return n.supportsBinary = !e.forceBase64, n;
          }

          return r.__extends(e, t), Object.defineProperty(e.prototype, 'name', {
            get: function () {
              return 'websocket';
            }, enumerable: !1, configurable: !0
          }), e.prototype.doOpen = function () {
            if (this.check()) {
              var t = this.uri(), e = this.opts.protocols,
                n = h ? {} : (0, a.pick)(this.opts, 'agent', 'perMessageDeflate', 'pfx', 'key', 'passphrase', 'cert', 'ca', 'ciphers', 'rejectUnauthorized', 'localAddress', 'protocolVersion', 'origin', 'maxPayload', 'family', 'checkServerIdentity');
              this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
              try {
                this.ws = u.usingBrowserWebSocket && !h ? e ? new u.WebSocket(t, e) : new u.WebSocket(t) : new u.WebSocket(t, e, n);
              } catch (t) {
                return this.emitReserved('error', t);
              }
              this.ws.binaryType = this.socket.binaryType || u.defaultBinaryType, this.addEventListeners();
            }
          }, e.prototype.addEventListeners = function () {
            var t = this;
            this.ws.onopen = function () {
              t.opts.autoUnref && t.ws._socket.unref(), t.onOpen();
            }, this.ws.onclose = function (e) {
              return t.onClose({description: 'websocket connection closed', context: e});
            }, this.ws.onmessage = function (e) {
              return t.onData(e.data);
            }, this.ws.onerror = function (e) {
              return t.onError('websocket error', e);
            };
          }, e.prototype.write = function (t) {
            var e = this;
            this.writable = !1;
            for (var n = function (n) {
              var o = t[n], i = n === t.length - 1;
              (0, p.encodePacket)(o, r.supportsBinary, (function (t) {
                var n = {};
                u.usingBrowserWebSocket || (o.options && (n.compress = o.options.compress), e.opts.perMessageDeflate && ('string' == typeof t ? Buffer.byteLength(t) : t.length) < e.opts.perMessageDeflate.threshold && (n.compress = !1));
                try {
                  u.usingBrowserWebSocket ? e.ws.send(t) : e.ws.send(t, n);
                } catch (t) {
                  f('websocket closed before onclose event');
                }
                i && (0, u.nextTick)((function () {
                  e.writable = !0, e.emitReserved('drain');
                }), e.setTimeoutFn);
              }));
            }, r = this, o = 0; o < t.length; o++) n(o);
          }, e.prototype.doClose = function () {
            void 0 !== this.ws && (this.ws.close(), this.ws = null);
          }, e.prototype.uri = function () {
            var t = this.query || {}, e = this.opts.secure ? 'wss' : 'ws', n = '';
            this.opts.port && ('wss' === e && 443 !== Number(this.opts.port) || 'ws' === e && 80 !== Number(this.opts.port)) && (n = ':' + this.opts.port), this.opts.timestampRequests && (t[this.opts.timestampParam] = (0, c.yeast)()), this.supportsBinary || (t.b64 = 1);
            var r = (0, s.encode)(t);
            return e + '://' + (-1 !== this.opts.hostname.indexOf(':') ? '[' + this.opts.hostname + ']' : this.opts.hostname) + n + this.opts.path + (r.length ? '?' + r : '');
          }, e.prototype.check = function () {
            return !!u.WebSocket;
          }, e;
        }(i.Transport);
      e.WS = d;
    }, 4893: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.XHR = void 0;
      var r = n(6443), o = n(6574);
      e.XHR = function (t) {
        var e = t.xdomain;
        try {
          if ('undefined' != typeof XMLHttpRequest && (!e || r.hasCORS)) return new XMLHttpRequest;
        } catch (t) {
        }
        if (!e) try {
          return new (o.globalThisShim[['Active'].concat('Object').join('X')])('Microsoft.XMLHTTP');
        } catch (t) {
        }
      };
    }, 7708: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.byteLength = e.installTimerFunctions = e.pick = void 0;
      var r = n(6574);
      e.pick = function (t) {
        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        return e.reduce((function (e, n) {
          return t.hasOwnProperty(n) && (e[n] = t[n]), e;
        }), {});
      };
      var o = setTimeout, i = clearTimeout;
      e.installTimerFunctions = function (t, e) {
        e.useNativeTimers ? (t.setTimeoutFn = o.bind(r.globalThisShim), t.clearTimeoutFn = i.bind(r.globalThisShim)) : (t.setTimeoutFn = setTimeout.bind(r.globalThisShim), t.clearTimeoutFn = clearTimeout.bind(r.globalThisShim));
      };
      e.byteLength = function (t) {
        return 'string' == typeof t ? function (t) {
          for (var e = 0, n = 0, r = 0, o = t.length; r < o; r++) (e = t.charCodeAt(r)) < 128 ? n += 1 : e < 2048 ? n += 2 : e < 55296 || e >= 57344 ? n += 3 : (r++, n += 4);
          return n;
        }(t) : Math.ceil(1.33 * (t.byteLength || t.size));
      };
    }, 7883: function (t, e) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.ERROR_PACKET = e.PACKET_TYPES_REVERSE = e.PACKET_TYPES = void 0;
      var n = Object.create(null);
      e.PACKET_TYPES = n, n.open = '0', n.close = '1', n.ping = '2', n.pong = '3', n.message = '4', n.upgrade = '5', n.noop = '6';
      var r = Object.create(null);
      e.PACKET_TYPES_REVERSE = r, Object.keys(n).forEach((function (t) {
        r[n[t]] = t;
      })), e.ERROR_PACKET = {type: 'error', data: 'parser error'};
    }, 5482: function (t, e) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.decode = e.encode = void 0;
      for (var n = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', r = 'undefined' == typeof Uint8Array ? [] : new Uint8Array(256), o = 0; o < n.length; o++) r[n.charCodeAt(o)] = o;
      e.encode = function (t) {
        var e, r = new Uint8Array(t), o = r.length, i = '';
        for (e = 0; e < o; e += 3) i += n[r[e] >> 2], i += n[(3 & r[e]) << 4 | r[e + 1] >> 4], i += n[(15 & r[e + 1]) << 2 | r[e + 2] >> 6], i += n[63 & r[e + 2]];
        return o % 3 == 2 ? i = i.substring(0, i.length - 1) + '=' : o % 3 == 1 && (i = i.substring(0, i.length - 2) + '=='), i;
      }, e.decode = function (t) {
        var e, n, o, i, s, c = .75 * t.length, a = t.length, u = 0;
        '=' === t[t.length - 1] && (c--, '=' === t[t.length - 2] && c--);
        var l = new ArrayBuffer(c), p = new Uint8Array(l);
        for (e = 0; e < a; e += 4) n = r[t.charCodeAt(e)], o = r[t.charCodeAt(e + 1)], i = r[t.charCodeAt(e + 2)], s = r[t.charCodeAt(e + 3)], p[u++] = n << 2 | o >> 4, p[u++] = (15 & o) << 4 | i >> 2, p[u++] = (3 & i) << 6 | 63 & s;
        return l;
      };
    }, 3504: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0});
      var r = n(7883), o = n(5482), i = 'function' == typeof ArrayBuffer, s = function (t, e) {
        if (i) {
          var n = (0, o.decode)(t);
          return c(n, e);
        }
        return {base64: !0, data: t};
      }, c = function (t, e) {
        return 'blob' === e && t instanceof ArrayBuffer ? new Blob([t]) : t;
      };
      e.default = function (t, e) {
        if ('string' != typeof t) return {type: 'message', data: c(t, e)};
        var n = t.charAt(0);
        return 'b' === n ? {
          type: 'message',
          data: s(t.substring(1), e)
        } : r.PACKET_TYPES_REVERSE[n] ? t.length > 1 ? {
          type: r.PACKET_TYPES_REVERSE[n],
          data: t.substring(1)
        } : {type: r.PACKET_TYPES_REVERSE[n]} : r.ERROR_PACKET;
      };
    }, 7: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0});
      var r = n(7883),
        o = 'function' == typeof Blob || 'undefined' != typeof Blob && '[object BlobConstructor]' === Object.prototype.toString.call(Blob),
        i = 'function' == typeof ArrayBuffer, s = function (t, e) {
          var n = new FileReader;
          return n.onload = function () {
            var t = n.result.split(',')[1];
            e('b' + t);
          }, n.readAsDataURL(t);
        };
      e.default = function (t, e, n) {
        var c, a = t.type, u = t.data;
        return o && u instanceof Blob ? e ? n(u) : s(u, n) : i && (u instanceof ArrayBuffer || (c = u, 'function' == typeof ArrayBuffer.isView ? ArrayBuffer.isView(c) : c && c.buffer instanceof ArrayBuffer)) ? e ? n(u) : s(new Blob([u]), n) : n(r.PACKET_TYPES[a] + (u || ''));
      };
    }, 8933: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.decodePayload = e.decodePacket = e.encodePayload = e.encodePacket = e.protocol = void 0;
      var r = n(7);
      e.encodePacket = r.default;
      var o = n(3504);
      e.decodePacket = o.default;
      var i = String.fromCharCode(30);
      e.encodePayload = function (t, e) {
        var n = t.length, o = new Array(n), s = 0;
        t.forEach((function (t, c) {
          (0, r.default)(t, !1, (function (t) {
            o[c] = t, ++s === n && e(o.join(i));
          }));
        }));
      }, e.decodePayload = function (t, e) {
        for (var n = t.split(i), r = [], s = 0; s < n.length; s++) {
          var c = (0, o.default)(n[s], e);
          if (r.push(c), 'error' === c.type) break;
        }
        return r;
      }, e.protocol = 4;
    }, 3770: function (t, e) {
      'use strict';

      function n(t) {
        t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;
      }

      Object.defineProperty(e, '__esModule', {value: !0}), e.Backoff = void 0, e.Backoff = n, n.prototype.duration = function () {
        var t = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
          var e = Math.random(), n = Math.floor(e * this.jitter * t);
          t = 0 == (1 & Math.floor(10 * e)) ? t - n : t + n;
        }
        return 0 | Math.min(t, this.max);
      }, n.prototype.reset = function () {
        this.attempts = 0;
      }, n.prototype.setMin = function (t) {
        this.ms = t;
      }, n.prototype.setMax = function (t) {
        this.max = t;
      }, n.prototype.setJitter = function (t) {
        this.jitter = t;
      };
    }, 7778: function (t, e, n) {
      'use strict';
      var r = this && this.__importDefault || function (t) {
        return t && t.__esModule ? t : {default: t};
      };
      Object.defineProperty(e, '__esModule', {value: !0}), e.default = e.connect = e.io = e.Socket = e.Manager = e.protocol = void 0;
      var o = n(8491), i = n(8554);
      Object.defineProperty(e, 'Manager', {
        enumerable: !0, get: function () {
          return i.Manager;
        }
      });
      var s = n(4765);
      Object.defineProperty(e, 'Socket', {
        enumerable: !0, get: function () {
          return s.Socket;
        }
      });
      var c = r(n(4342)).default('socket.io-client'), a = {};

      function u(t, e) {
        'object' == typeof t && (e = t, t = void 0), e = e || {};
        var n, r = o.url(t, e.path || '/socket.io'), s = r.source, u = r.id, l = r.path, p = a[u] && l in a[u].nsps;
        return e.forceNew || e['force new connection'] || !1 === e.multiplex || p ? (c('ignoring socket cache for %s', s), n = new i.Manager(s, e)) : (a[u] || (c('new io instance for %s', s), a[u] = new i.Manager(s, e)), n = a[u]), r.query && !e.query && (e.query = r.queryKey), n.socket(r.path, e);
      }

      e.io = u, e.connect = u, e.default = u, Object.assign(u, {
        Manager: i.Manager,
        Socket: s.Socket,
        io: u,
        connect: u
      });
      var l = n(4073);
      Object.defineProperty(e, 'protocol', {
        enumerable: !0, get: function () {
          return l.protocol;
        }
      }), t.exports = u;
    }, 8554: function (t, e, n) {
      'use strict';
      var r = n(2817), o = this && this.__createBinding || (Object.create ? function (t, e, n, r) {
        void 0 === r && (r = n), Object.defineProperty(t, r, {
          enumerable: !0, get: function () {
            return e[n];
          }
        });
      } : function (t, e, n, r) {
        void 0 === r && (r = n), t[r] = e[n];
      }), i = this && this.__setModuleDefault || (Object.create ? function (t, e) {
        Object.defineProperty(t, 'default', {enumerable: !0, value: e});
      } : function (t, e) {
        t.default = e;
      }), s = this && this.__importStar || function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var n in t) 'default' !== n && Object.prototype.hasOwnProperty.call(t, n) && o(e, t, n);
        return i(e, t), e;
      }, c = this && this.__importDefault || function (t) {
        return t && t.__esModule ? t : {default: t};
      };
      Object.defineProperty(e, '__esModule', {value: !0}), e.Manager = void 0;
      var a = n(3006), u = n(4765), l = s(n(4073)), p = n(6880), f = n(3770), h = n(5260),
        d = c(n(4342)).default('socket.io-client:manager'), y = function (t) {
          function e(e, n) {
            var r, o = this;
            (o = t.call(this) || this).nsps = {}, o.subs = [], e && 'object' == typeof e && (n = e, e = void 0), (n = n || {}).path = n.path || '/socket.io', o.opts = n, a.installTimerFunctions(o, n), o.reconnection(!1 !== n.reconnection), o.reconnectionAttempts(n.reconnectionAttempts || 1 / 0), o.reconnectionDelay(n.reconnectionDelay || 1e3), o.reconnectionDelayMax(n.reconnectionDelayMax || 5e3), o.randomizationFactor(null !== (r = n.randomizationFactor) && void 0 !== r ? r : .5), o.backoff = new f.Backoff({
              min: o.reconnectionDelay(),
              max: o.reconnectionDelayMax(),
              jitter: o.randomizationFactor()
            }), o.timeout(null == n.timeout ? 2e4 : n.timeout), o._readyState = 'closed', o.uri = e;
            var i = n.parser || l;
            return o.encoder = new i.Encoder, o.decoder = new i.Decoder, o._autoConnect = !1 !== n.autoConnect, o._autoConnect && o.open(), o;
          }

          return r.__extends(e, t), e.prototype.reconnection = function (t) {
            return arguments.length ? (this._reconnection = !!t, this) : this._reconnection;
          }, e.prototype.reconnectionAttempts = function (t) {
            return void 0 === t ? this._reconnectionAttempts : (this._reconnectionAttempts = t, this);
          }, e.prototype.reconnectionDelay = function (t) {
            var e;
            return void 0 === t ? this._reconnectionDelay : (this._reconnectionDelay = t, null === (e = this.backoff) || void 0 === e || e.setMin(t), this);
          }, e.prototype.randomizationFactor = function (t) {
            var e;
            return void 0 === t ? this._randomizationFactor : (this._randomizationFactor = t, null === (e = this.backoff) || void 0 === e || e.setJitter(t), this);
          }, e.prototype.reconnectionDelayMax = function (t) {
            var e;
            return void 0 === t ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t, null === (e = this.backoff) || void 0 === e || e.setMax(t), this);
          }, e.prototype.timeout = function (t) {
            return arguments.length ? (this._timeout = t, this) : this._timeout;
          }, e.prototype.maybeReconnectOnOpen = function () {
            !this._reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();
          }, e.prototype.open = function (t) {
            var e = this;
            if (d('readyState %s', this._readyState), ~this._readyState.indexOf('open')) return this;
            d('opening %s', this.uri), this.engine = new a.Socket(this.uri, this.opts);
            var n = this.engine, r = this;
            this._readyState = 'opening', this.skipReconnect = !1;
            var o = p.on(n, 'open', (function () {
              r.onopen(), t && t();
            })), i = p.on(n, 'error', (function (n) {
              d('error'), r.cleanup(), r._readyState = 'closed', e.emitReserved('error', n), t ? t(n) : r.maybeReconnectOnOpen();
            }));
            if (!1 !== this._timeout) {
              var s = this._timeout;
              d('connect attempt will timeout after %d', s), 0 === s && o();
              var c = this.setTimeoutFn((function () {
                d('connect attempt timed out after %d', s), o(), n.close(), n.emit('error', new Error('timeout'));
              }), s);
              this.opts.autoUnref && c.unref(), this.subs.push((function () {
                clearTimeout(c);
              }));
            }
            return this.subs.push(o), this.subs.push(i), this;
          }, e.prototype.connect = function (t) {
            return this.open(t);
          }, e.prototype.onopen = function () {
            d('open'), this.cleanup(), this._readyState = 'open', this.emitReserved('open');
            var t = this.engine;
            this.subs.push(p.on(t, 'ping', this.onping.bind(this)), p.on(t, 'data', this.ondata.bind(this)), p.on(t, 'error', this.onerror.bind(this)), p.on(t, 'close', this.onclose.bind(this)), p.on(this.decoder, 'decoded', this.ondecoded.bind(this)));
          }, e.prototype.onping = function () {
            this.emitReserved('ping');
          }, e.prototype.ondata = function (t) {
            try {
              this.decoder.add(t);
            } catch (t) {
              this.onclose('parse error', t);
            }
          }, e.prototype.ondecoded = function (t) {
            var e = this;
            a.nextTick((function () {
              e.emitReserved('packet', t);
            }), this.setTimeoutFn);
          }, e.prototype.onerror = function (t) {
            d('error', t), this.emitReserved('error', t);
          }, e.prototype.socket = function (t, e) {
            var n = this.nsps[t];
            return n || (n = new u.Socket(this, t, e), this.nsps[t] = n), n;
          }, e.prototype._destroy = function (t) {
            for (var e = 0, n = Object.keys(this.nsps); e < n.length; e++) {
              var r = n[e];
              if (this.nsps[r].active) return void d('socket %s is still active, skipping close', r);
            }
            this._close();
          }, e.prototype._packet = function (t) {
            d('writing packet %j', t);
            for (var e = this.encoder.encode(t), n = 0; n < e.length; n++) this.engine.write(e[n], t.options);
          }, e.prototype.cleanup = function () {
            d('cleanup'), this.subs.forEach((function (t) {
              return t();
            })), this.subs.length = 0, this.decoder.destroy();
          }, e.prototype._close = function () {
            d('disconnect'), this.skipReconnect = !0, this._reconnecting = !1, this.onclose('forced close'), this.engine && this.engine.close();
          }, e.prototype.disconnect = function () {
            return this._close();
          }, e.prototype.onclose = function (t, e) {
            d('closed due to %s', t), this.cleanup(), this.backoff.reset(), this._readyState = 'closed', this.emitReserved('close', t, e), this._reconnection && !this.skipReconnect && this.reconnect();
          }, e.prototype.reconnect = function () {
            var t = this;
            if (this._reconnecting || this.skipReconnect) return this;
            var e = this;
            if (this.backoff.attempts >= this._reconnectionAttempts) d('reconnect failed'), this.backoff.reset(), this.emitReserved('reconnect_failed'), this._reconnecting = !1; else {
              var n = this.backoff.duration();
              d('will wait %dms before reconnect attempt', n), this._reconnecting = !0;
              var r = this.setTimeoutFn((function () {
                e.skipReconnect || (d('attempting reconnect'), t.emitReserved('reconnect_attempt', e.backoff.attempts), e.skipReconnect || e.open((function (n) {
                  n ? (d('reconnect attempt error'), e._reconnecting = !1, e.reconnect(), t.emitReserved('reconnect_error', n)) : (d('reconnect success'), e.onreconnect());
                })));
              }), n);
              this.opts.autoUnref && r.unref(), this.subs.push((function () {
                clearTimeout(r);
              }));
            }
          }, e.prototype.onreconnect = function () {
            var t = this.backoff.attempts;
            this._reconnecting = !1, this.backoff.reset(), this.emitReserved('reconnect', t);
          }, e;
        }(h.Emitter);
      e.Manager = y;
    }, 6880: function (t, e) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.on = void 0, e.on = function (t, e, n) {
        return t.on(e, n), function () {
          t.off(e, n);
        };
      };
    }, 4765: function (t, e, n) {
      'use strict';
      var r = n(2817), o = this && this.__importDefault || function (t) {
        return t && t.__esModule ? t : {default: t};
      };
      Object.defineProperty(e, '__esModule', {value: !0}), e.Socket = void 0;
      var i = n(4073), s = n(6880), c = n(5260), a = o(n(4342)).default('socket.io-client:socket'), u = Object.freeze({
        connect: 1,
        connect_error: 1,
        disconnect: 1,
        disconnecting: 1,
        newListener: 1,
        removeListener: 1
      }), l = function (t) {
        function e(e, n, r) {
          var o = t.call(this) || this;
          return o.connected = !1, o.receiveBuffer = [], o.sendBuffer = [], o.ids = 0, o.acks = {}, o.flags = {}, o.io = e, o.nsp = n, r && r.auth && (o.auth = r.auth), o.io._autoConnect && o.open(), o;
        }

        return r.__extends(e, t), Object.defineProperty(e.prototype, 'disconnected', {
          get: function () {
            return !this.connected;
          }, enumerable: !1, configurable: !0
        }), e.prototype.subEvents = function () {
          if (!this.subs) {
            var t = this.io;
            this.subs = [s.on(t, 'open', this.onopen.bind(this)), s.on(t, 'packet', this.onpacket.bind(this)), s.on(t, 'error', this.onerror.bind(this)), s.on(t, 'close', this.onclose.bind(this))];
          }
        }, Object.defineProperty(e.prototype, 'active', {
          get: function () {
            return !!this.subs;
          }, enumerable: !1, configurable: !0
        }), e.prototype.connect = function () {
          return this.connected || (this.subEvents(), this.io._reconnecting || this.io.open(), 'open' === this.io._readyState && this.onopen()), this;
        }, e.prototype.open = function () {
          return this.connect();
        }, e.prototype.send = function () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
          return t.unshift('message'), this.emit.apply(this, t), this;
        }, e.prototype.emit = function (t) {
          for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
          if (u.hasOwnProperty(t)) throw new Error('"' + t.toString() + '" is a reserved event name');
          e.unshift(t);
          var r = {type: i.PacketType.EVENT, data: e, options: {}};
          if (r.options.compress = !1 !== this.flags.compress, 'function' == typeof e[e.length - 1]) {
            var o = this.ids++;
            a('emitting packet with ack id %d', o);
            var s = e.pop();
            this._registerAckCallback(o, s), r.id = o;
          }
          var c = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
          return !this.flags.volatile || c && this.connected ? this.connected ? (this.notifyOutgoingListeners(r), this.packet(r)) : this.sendBuffer.push(r) : a('discard packet as the transport is not currently writable'), this.flags = {}, this;
        }, e.prototype._registerAckCallback = function (t, e) {
          var n = this, o = this.flags.timeout;
          if (void 0 !== o) {
            var i = this.io.setTimeoutFn((function () {
              delete n.acks[t];
              for (var r = 0; r < n.sendBuffer.length; r++) n.sendBuffer[r].id === t && (a('removing packet with ack id %d from the buffer', t), n.sendBuffer.splice(r, 1));
              a('event with ack id %d has timed out after %d ms', t, o), e.call(n, new Error('operation has timed out'));
            }), o);
            this.acks[t] = function () {
              for (var t = [], o = 0; o < arguments.length; o++) t[o] = arguments[o];
              n.io.clearTimeoutFn(i), e.apply(n, r.__spreadArray([null], t, !0));
            };
          } else this.acks[t] = e;
        }, e.prototype.packet = function (t) {
          t.nsp = this.nsp, this.io._packet(t);
        }, e.prototype.onopen = function () {
          var t = this;
          a('transport is open - connecting'), 'function' == typeof this.auth ? this.auth((function (e) {
            t.packet({type: i.PacketType.CONNECT, data: e});
          })) : this.packet({type: i.PacketType.CONNECT, data: this.auth});
        }, e.prototype.onerror = function (t) {
          this.connected || this.emitReserved('connect_error', t);
        }, e.prototype.onclose = function (t, e) {
          a('close (%s)', t), this.connected = !1, delete this.id, this.emitReserved('disconnect', t, e);
        }, e.prototype.onpacket = function (t) {
          if (t.nsp === this.nsp) switch (t.type) {
            case i.PacketType.CONNECT:
              if (t.data && t.data.sid) {
                var e = t.data.sid;
                this.onconnect(e);
              } else this.emitReserved('connect_error', new Error('It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)'));
              break;
            case i.PacketType.EVENT:
            case i.PacketType.BINARY_EVENT:
              this.onevent(t);
              break;
            case i.PacketType.ACK:
            case i.PacketType.BINARY_ACK:
              this.onack(t);
              break;
            case i.PacketType.DISCONNECT:
              this.ondisconnect();
              break;
            case i.PacketType.CONNECT_ERROR:
              this.destroy();
              var n = new Error(t.data.message);
              n.data = t.data.data, this.emitReserved('connect_error', n);
          }
        }, e.prototype.onevent = function (t) {
          var e = t.data || [];
          a('emitting event %j', e), null != t.id && (a('attaching ack callback to event'), e.push(this.ack(t.id))), this.connected ? this.emitEvent(e) : this.receiveBuffer.push(Object.freeze(e));
        }, e.prototype.emitEvent = function (e) {
          if (this._anyListeners && this._anyListeners.length) for (var n = 0, r = this._anyListeners.slice(); n < r.length; n++) r[n].apply(this, e);
          t.prototype.emit.apply(this, e);
        }, e.prototype.ack = function (t) {
          var e = this, n = !1;
          return function () {
            for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
            n || (n = !0, a('sending ack %j', r), e.packet({type: i.PacketType.ACK, id: t, data: r}));
          };
        }, e.prototype.onack = function (t) {
          var e = this.acks[t.id];
          'function' == typeof e ? (a('calling ack %s with %j', t.id, t.data), e.apply(this, t.data), delete this.acks[t.id]) : a('bad ack %s', t.id);
        }, e.prototype.onconnect = function (t) {
          a('socket connected with id %s', t), this.id = t, this.connected = !0, this.emitBuffered(), this.emitReserved('connect');
        }, e.prototype.emitBuffered = function () {
          var t = this;
          this.receiveBuffer.forEach((function (e) {
            return t.emitEvent(e);
          })), this.receiveBuffer = [], this.sendBuffer.forEach((function (e) {
            t.notifyOutgoingListeners(e), t.packet(e);
          })), this.sendBuffer = [];
        }, e.prototype.ondisconnect = function () {
          a('server disconnect (%s)', this.nsp), this.destroy(), this.onclose('io server disconnect');
        }, e.prototype.destroy = function () {
          this.subs && (this.subs.forEach((function (t) {
            return t();
          })), this.subs = void 0), this.io._destroy(this);
        }, e.prototype.disconnect = function () {
          return this.connected && (a('performing disconnect (%s)', this.nsp), this.packet({type: i.PacketType.DISCONNECT})), this.destroy(), this.connected && this.onclose('io client disconnect'), this;
        }, e.prototype.close = function () {
          return this.disconnect();
        }, e.prototype.compress = function (t) {
          return this.flags.compress = t, this;
        }, Object.defineProperty(e.prototype, 'volatile', {
          get: function () {
            return this.flags.volatile = !0, this;
          }, enumerable: !1, configurable: !0
        }), e.prototype.timeout = function (t) {
          return this.flags.timeout = t, this;
        }, e.prototype.onAny = function (t) {
          return this._anyListeners = this._anyListeners || [], this._anyListeners.push(t), this;
        }, e.prototype.prependAny = function (t) {
          return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(t), this;
        }, e.prototype.offAny = function (t) {
          if (!this._anyListeners) return this;
          if (t) {
            for (var e = this._anyListeners, n = 0; n < e.length; n++) if (t === e[n]) return e.splice(n, 1), this;
          } else this._anyListeners = [];
          return this;
        }, e.prototype.listenersAny = function () {
          return this._anyListeners || [];
        }, e.prototype.onAnyOutgoing = function (t) {
          return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(t), this;
        }, e.prototype.prependAnyOutgoing = function (t) {
          return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(t), this;
        }, e.prototype.offAnyOutgoing = function (t) {
          if (!this._anyOutgoingListeners) return this;
          if (t) {
            for (var e = this._anyOutgoingListeners, n = 0; n < e.length; n++) if (t === e[n]) return e.splice(n, 1), this;
          } else this._anyOutgoingListeners = [];
          return this;
        }, e.prototype.listenersAnyOutgoing = function () {
          return this._anyOutgoingListeners || [];
        }, e.prototype.notifyOutgoingListeners = function (t) {
          if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) for (var e = 0, n = this._anyOutgoingListeners.slice(); e < n.length; e++) n[e].apply(this, t.data);
        }, e;
      }(c.Emitter);
      e.Socket = l;
    }, 8491: function (t, e, n) {
      'use strict';
      var r = this && this.__importDefault || function (t) {
        return t && t.__esModule ? t : {default: t};
      };
      Object.defineProperty(e, '__esModule', {value: !0}), e.url = void 0;
      var o = n(3006), i = r(n(4342)).default('socket.io-client:url');
      e.url = function (t, e, n) {
        void 0 === e && (e = '');
        var r = t;
        n = n || 'undefined' != typeof location && location, null == t && (t = n.protocol + '//' + n.host), 'string' == typeof t && ('/' === t.charAt(0) && (t = '/' === t.charAt(1) ? n.protocol + t : n.host + t), /^(https?|wss?):\/\//.test(t) || (i('protocol-less url %s', t), t = void 0 !== n ? n.protocol + '//' + t : 'https://' + t), i('parse %s', t), r = o.parse(t)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = '80' : /^(http|ws)s$/.test(r.protocol) && (r.port = '443')), r.path = r.path || '/';
        var s = -1 !== r.host.indexOf(':') ? '[' + r.host + ']' : r.host;
        return r.id = r.protocol + '://' + s + ':' + r.port + e, r.href = r.protocol + '://' + s + (n && n.port === r.port ? '' : ':' + r.port), r;
      };
    }, 396: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.reconstructPacket = e.deconstructPacket = void 0;
      var r = n(7910);

      function o(t, e) {
        if (!t) return t;
        if (r.isBinary(t)) {
          var n = {_placeholder: !0, num: e.length};
          return e.push(t), n;
        }
        if (Array.isArray(t)) {
          for (var i = new Array(t.length), s = 0; s < t.length; s++) i[s] = o(t[s], e);
          return i;
        }
        if ('object' == typeof t && !(t instanceof Date)) {
          for (var c in i = {}, t) Object.prototype.hasOwnProperty.call(t, c) && (i[c] = o(t[c], e));
          return i;
        }
        return t;
      }

      function i(t, e) {
        if (!t) return t;
        if (t && !0 === t._placeholder) {
          if ('number' == typeof t.num && t.num >= 0 && t.num < e.length) return e[t.num];
          throw new Error('illegal attachments');
        }
        if (Array.isArray(t)) for (var n = 0; n < t.length; n++) t[n] = i(t[n], e); else if ('object' == typeof t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (t[r] = i(t[r], e));
        return t;
      }

      e.deconstructPacket = function (t) {
        var e = [], n = t.data, r = t;
        return r.data = o(n, e), r.attachments = e.length, {packet: r, buffers: e};
      }, e.reconstructPacket = function (t, e) {
        return t.data = i(t.data, e), t.attachments = void 0, t;
      };
    }, 4073: function (t, e, n) {
      'use strict';
      var r = n(2817);
      Object.defineProperty(e, '__esModule', {value: !0}), e.Decoder = e.Encoder = e.PacketType = e.protocol = void 0;
      var o, i = n(5260), s = n(396), c = n(7910), a = n(4342).default('socket.io-parser');
      e.protocol = 5, function (t) {
        t[t.CONNECT = 0] = 'CONNECT', t[t.DISCONNECT = 1] = 'DISCONNECT', t[t.EVENT = 2] = 'EVENT', t[t.ACK = 3] = 'ACK', t[t.CONNECT_ERROR = 4] = 'CONNECT_ERROR', t[t.BINARY_EVENT = 5] = 'BINARY_EVENT', t[t.BINARY_ACK = 6] = 'BINARY_ACK';
      }(o = e.PacketType || (e.PacketType = {}));
      var u = function () {
        function t(t) {
          this.replacer = t;
        }

        return t.prototype.encode = function (t) {
          return a('encoding packet %j', t), t.type !== o.EVENT && t.type !== o.ACK || !c.hasBinary(t) ? [this.encodeAsString(t)] : (t.type = t.type === o.EVENT ? o.BINARY_EVENT : o.BINARY_ACK, this.encodeAsBinary(t));
        }, t.prototype.encodeAsString = function (t) {
          var e = '' + t.type;
          return t.type !== o.BINARY_EVENT && t.type !== o.BINARY_ACK || (e += t.attachments + '-'), t.nsp && '/' !== t.nsp && (e += t.nsp + ','), null != t.id && (e += t.id), null != t.data && (e += JSON.stringify(t.data, this.replacer)), a('encoded %j as %s', t, e), e;
        }, t.prototype.encodeAsBinary = function (t) {
          var e = s.deconstructPacket(t), n = this.encodeAsString(e.packet), r = e.buffers;
          return r.unshift(n), r;
        }, t;
      }();
      e.Encoder = u;
      var l = function (t) {
        function e(e) {
          var n = t.call(this) || this;
          return n.reviver = e, n;
        }

        return r.__extends(e, t), e.prototype.add = function (e) {
          var n;
          if ('string' == typeof e) {
            if (this.reconstructor) throw new Error('got plaintext data when reconstructing a packet');
            (n = this.decodeString(e)).type === o.BINARY_EVENT || n.type === o.BINARY_ACK ? (this.reconstructor = new p(n), 0 === n.attachments && t.prototype.emitReserved.call(this, 'decoded', n)) : t.prototype.emitReserved.call(this, 'decoded', n);
          } else {
            if (!c.isBinary(e) && !e.base64) throw new Error('Unknown type: ' + e);
            if (!this.reconstructor) throw new Error('got binary data when not reconstructing a packet');
            (n = this.reconstructor.takeBinaryData(e)) && (this.reconstructor = null, t.prototype.emitReserved.call(this, 'decoded', n));
          }
        }, e.prototype.decodeString = function (t) {
          var n = 0, r = {type: Number(t.charAt(0))};
          if (void 0 === o[r.type]) throw new Error('unknown packet type ' + r.type);
          if (r.type === o.BINARY_EVENT || r.type === o.BINARY_ACK) {
            for (var i = n + 1; "-" !== t.charAt(++n) && n != t.length;) ;
            var s = t.substring(i, n);
            if (s != Number(s) || '-' !== t.charAt(n)) throw new Error('Illegal attachments');
            r.attachments = Number(s);
          }
          if ('/' === t.charAt(n + 1)) {
            for (i = n + 1; ++n && "," !== (u = t.charAt(n)) && n !== t.length;) ;
            r.nsp = t.substring(i, n);
          } else r.nsp = '/';
          var c = t.charAt(n + 1);
          if ('' !== c && Number(c) == c) {
            for (i = n + 1; ++n;) {
              var u;
              if (null == (u = t.charAt(n)) || Number(u) != u) {
                --n;
                break;
              }
              if (n === t.length) break;
            }
            r.id = Number(t.substring(i, n + 1));
          }
          if (t.charAt(++n)) {
            var l = this.tryParse(t.substr(n));
            if (!e.isPayloadValid(r.type, l)) throw new Error('invalid payload');
            r.data = l;
          }
          return a('decoded %s as %j', t, r), r;
        }, e.prototype.tryParse = function (t) {
          try {
            return JSON.parse(t, this.reviver);
          } catch (t) {
            return !1;
          }
        }, e.isPayloadValid = function (t, e) {
          switch (t) {
            case o.CONNECT:
              return 'object' == typeof e;
            case o.DISCONNECT:
              return void 0 === e;
            case o.CONNECT_ERROR:
              return 'string' == typeof e || 'object' == typeof e;
            case o.EVENT:
            case o.BINARY_EVENT:
              return Array.isArray(e) && e.length > 0;
            case o.ACK:
            case o.BINARY_ACK:
              return Array.isArray(e);
          }
        }, e.prototype.destroy = function () {
          this.reconstructor && this.reconstructor.finishedReconstruction();
        }, e;
      }(i.Emitter);
      e.Decoder = l;
      var p = function () {
        function t(t) {
          this.packet = t, this.buffers = [], this.reconPack = t;
        }

        return t.prototype.takeBinaryData = function (t) {
          if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
            var e = s.reconstructPacket(this.reconPack, this.buffers);
            return this.finishedReconstruction(), e;
          }
          return null;
        }, t.prototype.finishedReconstruction = function () {
          this.reconPack = null, this.buffers = [];
        }, t;
      }();
    }, 7910: function (t, e) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), e.hasBinary = e.isBinary = void 0;
      var n = 'function' == typeof ArrayBuffer, r = function (t) {
          return 'function' == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer;
        }, o = Object.prototype.toString,
        i = 'function' == typeof Blob || 'undefined' != typeof Blob && '[object BlobConstructor]' === o.call(Blob),
        s = 'function' == typeof File || 'undefined' != typeof File && '[object FileConstructor]' === o.call(File);

      function c(t) {
        return n && (t instanceof ArrayBuffer || r(t)) || i && t instanceof Blob || s && t instanceof File;
      }

      e.isBinary = c, e.hasBinary = function t(e, n) {
        if (!e || 'object' != typeof e) return !1;
        if (Array.isArray(e)) {
          for (var r = 0, o = e.length; r < o; r++) if (t(e[r])) return !0;
          return !1;
        }
        if (c(e)) return !0;
        if (e.toJSON && 'function' == typeof e.toJSON && 1 === arguments.length) return t(e.toJSON(), !0);
        for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i) && t(e[i])) return !0;
        return !1;
      };
    }, 5260: function (t, e, n) {
      'use strict';

      function r(t) {
        if (t) return function (t) {
          for (var e in r.prototype) t[e] = r.prototype[e];
          return t;
        }(t);
      }

      n.r(e), n.d(e, {
        Emitter: function () {
          return r;
        }
      }), r.prototype.on = r.prototype.addEventListener = function (t, e) {
        return this._callbacks = this._callbacks || {}, (this._callbacks['$' + t] = this._callbacks['$' + t] || []).push(e), this;
      }, r.prototype.once = function (t, e) {
        function n() {
          this.off(t, n), e.apply(this, arguments);
        }

        return n.fn = e, this.on(t, n), this;
      }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function (t, e) {
        if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
        var n, r = this._callbacks['$' + t];
        if (!r) return this;
        if (1 == arguments.length) return delete this._callbacks['$' + t], this;
        for (var o = 0; o < r.length; o++) if ((n = r[o]) === e || n.fn === e) {
          r.splice(o, 1);
          break;
        }
        return 0 === r.length && delete this._callbacks['$' + t], this;
      }, r.prototype.emit = function (t) {
        this._callbacks = this._callbacks || {};
        for (var e = new Array(arguments.length - 1), n = this._callbacks['$' + t], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        if (n) {
          r = 0;
          for (var o = (n = n.slice(0)).length; r < o; ++r) n[r].apply(this, e);
        }
        return this;
      }, r.prototype.emitReserved = r.prototype.emit, r.prototype.listeners = function (t) {
        return this._callbacks = this._callbacks || {}, this._callbacks['$' + t] || [];
      }, r.prototype.hasListeners = function (t) {
        return !!this.listeners(t).length;
      };
    }
  }, e = {};

  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var i = e[r] = {exports: {}};
    return t[r].call(i.exports, i, i.exports, n), i.exports;
  }

  n.d = function (t, e) {
    for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {enumerable: !0, get: e[r]});
  }, n.g = function () {
    if ('object' == typeof globalThis) return globalThis;
    try {
      return this || new Function('return this')();
    } catch (t) {
      if ('object' == typeof window) return window;
    }
  }(), n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, n.r = function (t) {
    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: 'Module'}), Object.defineProperty(t, '__esModule', {value: !0});
  }, function () {
    'use strict';
    var t = n(2817);
    n(1777), n(1203);
    var e = n(107), r = n(9512), o = n(1666), i = n(7965), s = n(9149), c = n(4707), a = n(3333), u = n(6310),
      l = n(8070), p = n(9681), f = n(1115), h = n(4038), d = n(8463), y = n(3604), v = n(8055), b = n(8726),
      m = n(6647), g = (0, r.initWindow)(), _ = (0, r.initDocument)(), w = (0, l.initWindowName)(window),
      S = (0, r.initSocket)(), O = S.socket$, E = S.io$, k = (0, r.initOptions)(), x = (0, m.of)(navigator),
      j = (0, o.initNotify)(k.getValue()), P = (0, a.initLogger)(k.getValue()),
      C = (0, p.initListeners)(window, document, O, k), T = {
        window$: g,
        document$: _,
        socket$: O,
        option$: k,
        navigator$: x,
        notifyElement$: j,
        logInstance$: P,
        io$: E,
        outgoing$: C
      };

    function R(t, e) {
      return function (t, n) {
        return n.pipe((0, f.groupBy)((function (t) {
          return t[0];
        })), (0, h.withLatestFrom)(t), (0, v.filter)((function (t) {
          var e = t[0];
          return 'function' == typeof t[1][e.key];
        })), (0, d.mergeMap)((function (t) {
          var n = t[0];
          return t[1][n.key](n.pipe((0, b.pluck)(String(1))), e);
        })), (0, y.share)());
      };
    }

    var N = (0, e.zip)(u.effectOutputHandlers$, l.scrollRestoreHandlers$, (function () {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        return e.reduce((function (e, n) {
          return t.__assign(t.__assign({}, e), n);
        }), {});
      })), A = R(0, T)(s.socketHandlers$, (0, c.merge)(T.socket$, C)), M = R(0, T)(N, A),
      F = R(0, T)(i.domHandlers$, (0, c.merge)(M, w)), B = (0, c.merge)(A, M, F);
    R(0, T)(a.logHandler$, B).subscribe();
  }();
}();
'use strict';

(function (window, document, bs, undefined) {

  var socket = bs.socket;

  var uiOptions = {
    bs: {}
  };

  socket.on('ui:connection', function (options) {

    uiOptions = options;

    bs.socket.emit('ui:history:connected', {
      href: window.location.href
    });
  });

  socket.on('ui:element:remove', function (data) {
    if (data.id) {
      var elem = document.getElementById(data.id);
      if (elem) {
        removeElement(elem);
      }
    }
  });

  socket.on('highlight', function () {
    var id = '__browser-sync-highlight__';
    var elem = document.getElementById(id);
    if (elem) {
      return removeElement(elem);
    }
    (function (e) {
      e.style.position = 'fixed';
      e.style.zIndex = '1000';
      e.style.width = '100%';
      e.style.height = '100%';
      e.style.borderWidth = '5px';
      e.style.borderColor = 'red';
      e.style.borderStyle = 'solid';
      e.style.top = '0';
      e.style.left = '0';
      e.setAttribute('id', id);
      document.getElementsByTagName('body')[0].appendChild(e);
    })(document.createElement('div'));
  });

  socket.on('ui:element:add', function (data) {

    var elem = document.getElementById(data.id);

    if (!elem) {
      if (data.type === 'css') {
        return addCss(data);
      }
      if (data.type === 'js') {
        return addJs(data);
      }
      if (data.type === 'dom') {
        return addDomNode(data);
      }
    }
  });

  bs.addDomNode = addDomNode;
  bs.addJs = addJs;
  bs.addCss = addJs;

  function addJs(data) {
    (function (e) {
      e.setAttribute('src', getAbsoluteUrl(data.src));
      e.setAttribute('id', data.id);
      document.getElementsByTagName('body')[0].appendChild(e);
    })(document.createElement('script'));
  }

  function addCss(data) {
    (function (e) {
      e.setAttribute('rel', 'stylesheet');
      e.setAttribute('type', 'text/css');
      e.setAttribute('id', data.id);
      e.setAttribute('media', 'all');
      e.setAttribute('href', getAbsoluteUrl(data.src));
      document.getElementsByTagName('head')[0].appendChild(e);
    })(document.createElement('link'));
  }

  function addDomNode(data) {
    var elem = document.createElement(data.tagName);
    for (var attr in data.attrs) {
      elem.setAttribute(attr, data.attrs[attr]);
    }
    if (data.placement) {
      document.getElementsByTagName(data.placement)[0].appendChild(elem);
    } else {
      document.getElementsByTagName('body')[0].appendChild(elem);
    }
    return elem;
  }

  function removeElement(element) {
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }

  function getAbsoluteUrl(path) {
    if (path.match(/^h/)) {
      return path;
    }
    return [window.location.protocol, '//', getHost(), path].join('');
  }

  function getHost() {
    return uiOptions.bs.mode === 'snippet' ? window.location.hostname + ':' + uiOptions.bs.port : window.location.host;
  }

})(window, document, ___browserSync___);
