(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [2391],
  {
    80152: (e) => {
      e.exports = {
        button: 'button-14c_DKWJ',
        disabled: 'disabled-14c_DKWJ',
        hidden: 'hidden-14c_DKWJ',
        icon: 'icon-14c_DKWJ',
        dropped: 'dropped-14c_DKWJ',
      };
    },
    31722: (e) => {
      e.exports = {
        button: 'button-1WqyvKNY',
        'button-children': 'button-children-1WqyvKNY',
        hiddenArrow: 'hiddenArrow-1WqyvKNY',
        invisibleFocusHandler: 'invisibleFocusHandler-1WqyvKNY',
      };
    },
    31199: (e) => {
      e.exports = { placeholder: 'placeholder-1J6emFeA' };
    },
    41615: (e, t, n) => {
      'use strict';
      n.d(t, { createDomId: () => a, joinDomIds: () => c });
      const l = /\s/g;
      function o(e) {
        return 'string' == typeof e;
      }
      function r(e) {
        switch (typeof e) {
          case 'string':
            return e;
          case 'number':
          case 'bigint':
            return e.toString(10);
          case 'boolean':
          case 'symbol':
            return e.toString();
          default:
            return null;
        }
      }
      function i(e) {
        return e.trim().length > 0;
      }
      function s(e) {
        return e.replace(l, '-');
      }
      function a(...e) {
        const t = e.map(r).filter(o).filter(i).map(s);
        return (t.length > 0 && t[0].startsWith('id_') ? t : ['id', ...t]).join(
          '_'
        );
      }
      function c(...e) {
        return e.map(r).filter(o).filter(i).join(' ');
      }
    },
    5862: (e, t, n) => {
      'use strict';
      n.d(t, {
        useKeyboardToggle: () => r,
        useKeyboardClose: () => i,
        useKeyboardOpen: () => s,
      });
      var l = n(67294),
        o = n(42998);
      function r(e) {
        return (0, l.useCallback)(
          (t) => {
            switch (t) {
              case 13:
              case 32:
                return e(), !0;
              default:
                return !1;
            }
          },
          [e]
        );
      }
      function i(e, t) {
        return (0, l.useCallback)(
          (n) => {
            if (!e) return !1;
            switch (n) {
              case 9:
              case o.Modifiers.Shift + 9:
              case 27:
                return t(), !0;
              default:
                return !1;
            }
          },
          [e, t]
        );
      }
      function s(e, t) {
        return (0, l.useCallback)(
          (n) => {
            if (e) return !1;
            switch (n) {
              case 40:
              case 38:
                return t(), !0;
              default:
                return !1;
            }
          },
          [e, t]
        );
      }
    },
    98981: (e, t, n) => {
      'use strict';
      n.d(t, { DisclosureMenuView: () => v });
      var l = n(67294),
        o = n(94184),
        r = n.n(o),
        i = n(16282),
        s = n(66364),
        a = n(11888),
        c = n(92136),
        u = n(49775),
        d = n(20914),
        h = n(80152);
      function f(e) {
        const { isDropped: t } = e;
        return l.createElement(u.Icon, {
          className: r()(h.icon, t && h.dropped),
          icon: d,
        });
      }
      function p(e) {
        const { className: t, disabled: n, isDropped: o } = e;
        return l.createElement(
          'span',
          { className: r()(h.button, n && h.disabled, t) },
          l.createElement(f, { isDropped: o })
        );
      }
      var b = n(76420),
        m = n(31722);
      const v = l.forwardRef((e, t) => {
        const {
            listboxId: n,
            className: o,
            listboxClassName: u,
            listboxTabIndex: d,
            hideArrowButton: h,
            matchButtonAndListboxWidths: f,
            disabled: v,
            isOpened: g,
            scrollWrapReference: C,
            listboxReference: S,
            size: w = 'medium',
            onClose: y,
            onOpen: k,
            onListboxFocus: _,
            onListboxBlur: E,
            onListboxKeyDown: x,
            buttonChildren: N,
            children: M,
            caretClassName: R,
            listboxAria: z,
            ...D
          } = e,
          B = (0, l.useRef)(null),
          F = (0, l.useCallback)(() => {
            const e = (0, i.ensureNotNull)(B.current).getBoundingClientRect(),
              t = { x: e.left, y: e.top + e.height };
            return f && (t.overrideWidth = e.width), t;
          }, []),
          I =
            !h &&
            l.createElement(
              c.EndSlot,
              null,
              l.createElement(p, { isDropped: g, disabled: v, className: R })
            );
        return l.createElement(
          l.Fragment,
          null,
          l.createElement(a.ControlSkeleton, {
            ...D,
            'data-role': 'listbox',
            'aria-expanded': g,
            'aria-owns': g ? n : void 0,
            'aria-controls': g ? n : void 0,
            'aria-disabled': v,
            disabled: v,
            className: r()(m.button, o),
            size: w,
            ref: (0, s.useMergedRefs)([B, t]),
            middleSlot: l.createElement(
              c.MiddleSlot,
              null,
              l.createElement(
                'span',
                { className: r()(m['button-children'], h && m.hiddenArrow) },
                N
              )
            ),
            endSlot: I,
          }),
          l.createElement(
            b.PopupMenu,
            {
              ...z,
              id: n,
              className: u,
              tabIndex: d,
              isOpened: g,
              position: F,
              onClose: y,
              onOpen: k,
              doNotCloseOn: B.current,
              reference: S,
              scrollWrapReference: C,
              onFocus: _,
              onBlur: E,
              onKeyDown: x,
            },
            M
          )
        );
      });
      v.displayName = 'DisclosureMenuView';
    },
    22904: (e, t, n) => {
      'use strict';
      n.d(t, { useDisclosureMenuControl: () => a });
      var l = n(67294),
        o = n(16282),
        r = n(15965),
        i = n(66213),
        s = n(15738);
      function a(e) {
        const {
            disabled: t,
            intent: n,
            highlight: a,
            onFocus: c,
            onBlur: u,
            onClick: d,
          } = e,
          [h, f] = (0, l.useState)(!1),
          [p, b] = (0, r.useFocus)(),
          m = p || h,
          v = null != a ? a : m,
          g = null != n ? n : m ? 'primary' : 'default',
          C = (0, l.useRef)(null),
          S = (0, l.useCallback)(
            () => (0, o.ensureNotNull)(C.current).focus(),
            [C]
          ),
          w = (0, l.useRef)(null),
          y = (0, l.useCallback)(
            () => (0, o.ensureNotNull)(w.current).focus(),
            [w]
          ),
          k = (0, l.useCallback)(() => f(!0), [f]),
          _ = (0, l.useCallback)(() => {
            f(!1);
            const { activeElement: e } = document;
            (e && (0, s.isTextEditingField)(e)) || S();
          }, [f, S]),
          E = (0, l.useCallback)(() => {
            h ? _() : k();
          }, [h, _, k]),
          x = t ? [] : [c, b.onFocus],
          N = t ? [] : [u, b.onBlur],
          M = t ? [] : [d, E],
          R = (0, i.createSafeMulticastEventHandler)(...x),
          z = (0, i.createSafeMulticastEventHandler)(...N),
          D = (0, i.createSafeMulticastEventHandler)(...M);
        return {
          isOpened: h,
          isFocused: m,
          highlight: v,
          intent: g,
          open: k,
          onOpen: y,
          close: _,
          toggle: E,
          buttonFocusBindings: { onFocus: R, onBlur: z },
          onButtonClick: D,
          buttonRef: C,
          listboxRef: w,
        };
      }
    },
    45221: (e, t, n) => {
      'use strict';
      n.d(t, { Select: () => _ });
      var l = n(67294),
        o = n(16282),
        r = n(41615),
        i = n(8596);
      const s = { duration: 200 },
        a = {
          vertical: {
            scrollSize: 'scrollHeight',
            clientSize: 'clientHeight',
            start: 'top',
            end: 'bottom',
            size: 'height',
          },
          horizontal: {
            scrollSize: 'scrollWidth',
            clientSize: 'clientWidth',
            start: 'left',
            end: 'right',
            size: 'width',
          },
        };
      function c(e, t) {
        const n = a[e];
        return t[n.scrollSize] > t[n.clientSize];
      }
      function u(e, t, n, l, o, r) {
        const s = (function (e, t, n) {
          const l = a[e];
          return {
            start: 0,
            middle:
              -1 * (Math.floor(n[l.size] / 2) - Math.floor(t[l.size] / 2)),
            end: -1 * (n[l.size] - t[l.size]),
          };
        })(e, l, o);
        let c = 0;
        if (
          (function (e, t, n) {
            const l = a[e];
            return (
              t[l.start] < n[l.start] - n[l.size] / 2 ||
              t[l.end] > n[l.end] + n[l.size] / 2
            );
          })(e, l, o)
        )
          c = s.middle;
        else {
          const t = (function (e) {
            const { start: t, middle: n, end: l } = e,
              o = new Map([
                [Math.abs(t), { key: 'start', value: Math.sign(t) }],
                [Math.abs(n), { key: 'middle', value: Math.sign(n) }],
                [Math.abs(l), { key: 'end', value: Math.sign(l) }],
              ]),
              r = Math.min(...o.keys());
            return o.get(r);
          })(
            (function (e, t, n) {
              const l = a[e],
                o = t[l.start] + Math.floor(t[l.size] / 2),
                r = n[l.start] + Math.floor(n[l.size] / 2);
              return {
                start: t[l.start] - n[l.start],
                middle: o - r,
                end: t[l.end] - n[l.end],
              };
            })(e, l, o)
          );
          c = void 0 !== t ? s[t.key] : 0;
        }
        return (function (e) {
          const {
            additionalScroll: t = 0,
            duration: n = i.dur,
            func: l = i.easingFunc.easeInOutCubic,
            onScrollEnd: o,
            target: r,
            wrap: s,
            direction: a = 'vertical',
          } = e;
          let { targetRect: c, wrapRect: u } = e;
          (c = null != c ? c : r.getBoundingClientRect()),
            (u = null != u ? u : s.getBoundingClientRect());
          const d = ('vertical' === a ? c.top - u.top : c.left - u.left) + t,
            h = 'vertical' === a ? 'scrollTop' : 'scrollLeft',
            f = s ? s[h] : 0;
          let p,
            b = 0;
          return (
            (b = window.requestAnimationFrame(function e(t) {
              let r;
              if ((p ? (r = t - p) : ((r = 0), (p = t)), r >= n))
                return (s[h] = f + d), void (o && o());
              const i = f + d * l(r / n);
              (s[h] = Math.floor(i)), (b = window.requestAnimationFrame(e));
            })),
            function () {
              window.cancelAnimationFrame(b), o && o();
            }
          );
        })({
          ...r,
          target: t,
          targetRect: l,
          wrap: n,
          wrapRect: o,
          additionalScroll: c,
          direction: e,
        });
      }
      class d {
        constructor(e = null) {
          (this._container = null),
            (this._lastScrolledElement = null),
            (this._stopVerticalScroll = null),
            (this._stopHorizontalScroll = null),
            (this._container = e);
        }
        scrollTo(e, t = s) {
          if (
            null !== this._container &&
            null !== e &&
            !(function (e, t) {
              const n = e.getBoundingClientRect(),
                l = t.getBoundingClientRect();
              return (
                n.top >= l.top &&
                n.bottom <= l.bottom &&
                n.left >= l.left &&
                n.right <= l.right
              );
            })(e, this._container)
          ) {
            const n = e.getBoundingClientRect(),
              l = this._container.getBoundingClientRect();
            this.stopScroll(),
              c('vertical', this._container) &&
                (this._stopVerticalScroll = u(
                  'vertical',
                  e,
                  this._container,
                  n,
                  l,
                  this._modifyOptions('vertical', t)
                )),
              c('horizontal', this._container) &&
                (this._stopHorizontalScroll = u(
                  'horizontal',
                  e,
                  this._container,
                  n,
                  l,
                  this._modifyOptions('horizontal', t)
                ));
          }
          this._lastScrolledElement = e;
        }
        scrollToLastElement(e) {
          this.scrollTo(this._lastScrolledElement, e);
        }
        stopScroll() {
          null !== this._stopVerticalScroll && this._stopVerticalScroll(),
            null !== this._stopHorizontalScroll && this._stopHorizontalScroll();
        }
        setContainer(e) {
          var t;
          (this._container = e),
            (null === (t = this._container) || void 0 === t
              ? void 0
              : t.contains(this._lastScrolledElement)) ||
              (this._lastScrolledElement = null);
        }
        destroy() {
          this.stopScroll(),
            (this._container = null),
            (this._lastScrolledElement = null);
        }
        _handleScrollEnd(e) {
          'vertical' === e
            ? (this._stopVerticalScroll = null)
            : (this._stopHorizontalScroll = null);
        }
        _modifyOptions(e, t) {
          return Object.assign({}, t, {
            onScrollEnd: () => {
              this._handleScrollEnd(e),
                void 0 !== t.onScrollEnd && t.onScrollEnd();
            },
          });
        }
      }
      var h = n(66364),
        f = n(95860),
        p = n(99479),
        b = n(58848);
      var m = n(98981),
        v = n(5862),
        g = n(22904),
        C = n(42998),
        S = n(31199);
      function w(e) {
        return !e.readonly;
      }
      function y(e, t) {
        var n;
        return null !== (n = null == t ? void 0 : t.id) && void 0 !== n
          ? n
          : (0, r.createDomId)(e, 'item', null == t ? void 0 : t.value);
      }
      function k(e) {
        var t, n;
        const { selectedItem: o, placeholder: r } = e;
        if (!o) return l.createElement('span', { className: S.placeholder }, r);
        const i =
          null !==
            (n =
              null !== (t = o.selectedContent) && void 0 !== t
                ? t
                : o.content) && void 0 !== n
            ? n
            : o.value;
        return l.createElement('span', null, i);
      }
      const _ = l.forwardRef((e, t) => {
        const {
          id: n,
          menuClassName: i,
          menuItemClassName: s,
          tabIndex: a = 0,
          disabled: c,
          highlight: u,
          intent: S,
          hideArrowButton: _,
          placeholder: E,
          addPlaceholderToItems: x = !0,
          value: N,
          'aria-labelledby': M,
          onFocus: R,
          onBlur: z,
          onClick: D,
          onChange: B,
          ...F
        } = e;
        let { items: I } = e;
        if (E && x) {
          I = [
            {
              value: void 0,
              content: E,
              id: (0, r.createDomId)(n, 'placeholder'),
            },
            ...I,
          ];
        }
        const {
            isOpened: W,
            isFocused: K,
            highlight: O,
            intent: A,
            open: T,
            onOpen: H,
            close: L,
            toggle: V,
            buttonFocusBindings: q,
            onButtonClick: J,
            buttonRef: j,
            listboxRef: P,
          } = (0, g.useDisclosureMenuControl)({
            disabled: c,
            intent: S,
            highlight: u,
            onFocus: R,
            onBlur: z,
            onClick: D,
          }),
          Y = (function (e) {
            const t = (0, l.useRef)(null);
            return (
              (0, l.useEffect)(
                () => (
                  (t.current = new d(e)),
                  () => (0, o.ensureNotNull)(t.current).destroy()
                ),
                []
              ),
              t
            );
          })(),
          G = (0, l.useRef)(null),
          Q = (0, l.useRef)(new WeakMap()),
          U = I.filter(w),
          X = U.find((e) => e.value === N);
        (0, l.useEffect)(() => ae(), [X, ae]);
        const Z = (0, r.joinDomIds)(M, n),
          $ = Z.length > 0 ? Z : void 0,
          ee = (0, r.createDomId)(n, 'listbox'),
          te = (0, l.useMemo)(
            () => ({
              role: 'listbox',
              'aria-labelledby': M,
              'aria-activedescendant': y(n, X),
            }),
            [M, X]
          ),
          ne = (function (e, t, n) {
            const o = (0, l.useCallback)(() => {
                const l = e.findIndex((e) => e.value === t);
                l !== e.length - 1 && n && n(e[l + 1].value);
              }, [e, t, n]),
              r = (0, l.useCallback)(() => {
                const l = e.findIndex((e) => e.value === t);
                if (0 === l) return;
                n && n(e[l > 0 ? l - 1 : 0].value);
              }, [e, t, n]),
              i = (0, l.useCallback)(() => {
                n && n(e[0].value);
              }, [n, e]),
              s = (0, l.useCallback)(() => {
                n && n(e[e.length - 1].value);
              }, [n, e]);
            return (0, l.useCallback)(
              (e) => {
                switch (e) {
                  case 40:
                    return o(), !0;
                  case 38:
                    return r(), !0;
                  case 34:
                    return s(), !0;
                  case 33:
                    return i(), !0;
                  default:
                    return !1;
                }
              },
              [o, r, i, s]
            );
          })(U, N, B),
          le = (0, v.useKeyboardToggle)(V),
          oe = (0, v.useKeyboardClose)(W, L),
          re = (0, v.useKeyboardOpen)(W, T),
          ie = (function (e) {
            const t = (0, l.useRef)(''),
              n = (0, l.useMemo)(
                () =>
                  (0, p.default)(() => {
                    t.current = '';
                  }, 500),
                []
              ),
              o = (0, l.useMemo)(() => (0, b.default)(e, 200), [e]);
            return (0, l.useCallback)(
              (e) => {
                e.key.length > 0 &&
                  e.key.length < 3 &&
                  ((t.current += e.key), o(t.current, e), n());
              },
              [n, o]
            );
          })((e, t) => {
            const n = (function (e, t) {
              return e.find((e) => {
                var n;
                const l = t.toLowerCase();
                return (
                  !e.readonly &&
                  !e.readonly &&
                  (('string' == typeof e.content &&
                    e.content.toLowerCase().startsWith(l)) ||
                    String(null !== (n = e.value) && void 0 !== n ? n : '')
                      .toLowerCase()
                      .startsWith(l))
                );
              });
            })(U, e);
            void 0 !== n && B && (t.stopPropagation(), W || T(), B(n.value));
          });
        return l.createElement(
          m.DisclosureMenuView,
          {
            ...F,
            ...q,
            id: n,
            role: 'button',
            tabIndex: c ? -1 : a,
            'aria-haspopup': 'listbox',
            'aria-labelledby': $,
            disabled: c,
            hideArrowButton: _,
            isFocused: K,
            isOpened: W,
            highlight: O,
            intent: A,
            ref: (0, h.useMergedRefs)([j, t]),
            onClick: J,
            onOpen: function () {
              ae({ duration: 0 }), H();
            },
            onClose: L,
            onKeyDown: function (e) {
              const t = (0, C.hashFromEvent)(e);
              if (le(t) || oe(t) || re(t)) return void e.preventDefault();
              ie(e);
            },
            listboxId: ee,
            listboxTabIndex: -1,
            listboxClassName: i,
            listboxAria: te,
            listboxReference: P,
            scrollWrapReference: function (e) {
              (G.current = e), (0, o.ensureNotNull)(Y.current).setContainer(e);
            },
            onListboxKeyDown: function (e) {
              const t = (0, C.hashFromEvent)(e);
              if (ne(t) || le(t) || oe(t)) return void e.preventDefault();
              ie(e);
            },
            buttonChildren: l.createElement(k, {
              selectedItem: X,
              placeholder: E,
            }),
          },
          I.map((e, t) => {
            var o;
            if (e.readonly)
              return l.createElement(
                l.Fragment,
                { key: 'readonly_item_' + t },
                e.content
              );
            const r = y(n, e);
            return l.createElement(f.PopupMenuItem, {
              key: r,
              id: r,
              className: s,
              role: 'option',
              'aria-selected': N === e.value,
              isActive: N === e.value,
              label: null !== (o = e.content) && void 0 !== o ? o : e.value,
              onClick: se,
              onClickArg: e.value,
              isDisabled: e.disabled,
              reference: (t) =>
                (function (e, t) {
                  Q.current.set(e, t);
                })(e, t),
            });
          })
        );
        function se(e) {
          B && B(e);
        }
        function ae(e) {
          if (W && void 0 !== X) {
            const t = Q.current.get(X);
            null != t && (0, o.ensureNotNull)(Y.current).scrollTo(t, e);
          }
        }
      });
      _.displayName = 'Select';
    },
    73991: (e, t, n) => {
      'use strict';
      n.d(t, { TouchScrollContainer: () => s });
      var l = n(67294),
        o = n(67891),
        r = n(16282),
        i = n(43367);
      function s(e) {
        const { reference: t, children: n, ...r } = e,
          s = (0, l.useRef)(null),
          c = (0, l.useCallback)(
            (e) => {
              t && (t.current = e),
                i.CheckMobile.iOS() &&
                  (null !== s.current && (0, o.enableBodyScroll)(s.current),
                  (s.current = e),
                  null !== s.current &&
                    (0, o.disableBodyScroll)(s.current, {
                      allowTouchMove: a(s),
                    }));
            },
            [t]
          );
        return l.createElement('div', { ref: c, ...r }, n);
      }
      function a(e) {
        return (t) => {
          const n = (0, r.ensureNotNull)(e.current),
            l = document.activeElement;
          return (
            !n.contains(t) || (null !== l && n.contains(l) && l.contains(t))
          );
        };
      }
    },
    20914: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 7" width="11" height="7" fill="none"><path stroke="currentColor" stroke-width="1.3" d="M.5 1.5l5 4 5-4"/></svg>';
    },
  },
]);
