(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [708],
  {
    67891: function (e, t) {
      var o, n, s;
      (n = [t]),
        void 0 ===
          (s =
            'function' ==
            typeof (o = function (e) {
              'use strict';
              function t(e) {
                if (Array.isArray(e)) {
                  for (var t = 0, o = Array(e.length); t < e.length; t++)
                    o[t] = e[t];
                  return o;
                }
                return Array.from(e);
              }
              Object.defineProperty(e, '__esModule', { value: !0 });
              var o = !1;
              if ('undefined' != typeof window) {
                var n = {
                  get passive() {
                    o = !0;
                  },
                };
                window.addEventListener('testPassive', null, n),
                  window.removeEventListener('testPassive', null, n);
              }
              var s =
                  'undefined' != typeof window &&
                  window.navigator &&
                  window.navigator.platform &&
                  /iP(ad|hone|od)/.test(window.navigator.platform),
                r = [],
                i = !1,
                a = -1,
                c = void 0,
                l = void 0,
                u = function (e) {
                  return r.some(function (t) {
                    return !(
                      !t.options.allowTouchMove || !t.options.allowTouchMove(e)
                    );
                  });
                },
                h = function (e) {
                  var t = e || window.event;
                  return (
                    !!u(t.target) ||
                    1 < t.touches.length ||
                    (t.preventDefault && t.preventDefault(), !1)
                  );
                },
                d = function () {
                  setTimeout(function () {
                    void 0 !== l &&
                      ((document.body.style.paddingRight = l), (l = void 0)),
                      void 0 !== c &&
                        ((document.body.style.overflow = c), (c = void 0));
                  });
                };
              (e.disableBodyScroll = function (e, n) {
                if (s) {
                  if (!e)
                    return void console.error(
                      'disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.'
                    );
                  if (
                    e &&
                    !r.some(function (t) {
                      return t.targetElement === e;
                    })
                  ) {
                    var d = { targetElement: e, options: n || {} };
                    (r = [].concat(t(r), [d])),
                      (e.ontouchstart = function (e) {
                        1 === e.targetTouches.length &&
                          (a = e.targetTouches[0].clientY);
                      }),
                      (e.ontouchmove = function (t) {
                        var o, n, s, r;
                        1 === t.targetTouches.length &&
                          ((n = e),
                          (r = (o = t).targetTouches[0].clientY - a),
                          !u(o.target) &&
                            ((n && 0 === n.scrollTop && 0 < r) ||
                            ((s = n) &&
                              s.scrollHeight - s.scrollTop <= s.clientHeight &&
                              r < 0)
                              ? h(o)
                              : o.stopPropagation()));
                      }),
                      i ||
                        (document.addEventListener(
                          'touchmove',
                          h,
                          o ? { passive: !1 } : void 0
                        ),
                        (i = !0));
                  }
                } else {
                  (m = n),
                    setTimeout(function () {
                      if (void 0 === l) {
                        var e = !!m && !0 === m.reserveScrollBarGap,
                          t =
                            window.innerWidth -
                            document.documentElement.clientWidth;
                        e &&
                          0 < t &&
                          ((l = document.body.style.paddingRight),
                          (document.body.style.paddingRight = t + 'px'));
                      }
                      void 0 === c &&
                        ((c = document.body.style.overflow),
                        (document.body.style.overflow = 'hidden'));
                    });
                  var p = { targetElement: e, options: n || {} };
                  r = [].concat(t(r), [p]);
                }
                var m;
              }),
                (e.clearAllBodyScrollLocks = function () {
                  s
                    ? (r.forEach(function (e) {
                        (e.targetElement.ontouchstart = null),
                          (e.targetElement.ontouchmove = null);
                      }),
                      i &&
                        (document.removeEventListener(
                          'touchmove',
                          h,
                          o ? { passive: !1 } : void 0
                        ),
                        (i = !1)),
                      (r = []),
                      (a = -1))
                    : (d(), (r = []));
                }),
                (e.enableBodyScroll = function (e) {
                  if (s) {
                    if (!e)
                      return void console.error(
                        'enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.'
                      );
                    (e.ontouchstart = null),
                      (e.ontouchmove = null),
                      (r = r.filter(function (t) {
                        return t.targetElement !== e;
                      })),
                      i &&
                        0 === r.length &&
                        (document.removeEventListener(
                          'touchmove',
                          h,
                          o ? { passive: !1 } : void 0
                        ),
                        (i = !1));
                  } else
                    1 === r.length && r[0].targetElement === e
                      ? (d(), (r = []))
                      : (r = r.filter(function (t) {
                          return t.targetElement !== e;
                        }));
                });
            })
              ? o.apply(t, n)
              : o) || (e.exports = s);
    },
    58644: (e) => {
      e.exports = {
        wrapper: 'wrapper-2eXD4rIf',
        input: 'input-2eXD4rIf',
        box: 'box-2eXD4rIf',
        icon: 'icon-2eXD4rIf',
        noOutline: 'noOutline-2eXD4rIf',
        'intent-danger': 'intent-danger-2eXD4rIf',
        check: 'check-2eXD4rIf',
        dot: 'dot-2eXD4rIf',
      };
    },
    3819: (e) => {
      e.exports = {
        container: 'container-TZggBcGZ',
        sectionTitle: 'sectionTitle-TZggBcGZ',
        separator: 'separator-TZggBcGZ',
        customButton: 'customButton-TZggBcGZ',
      };
    },
    14398: (e) => {
      e.exports = {
        container: 'container-1r82-bI2',
        form: 'form-1r82-bI2',
        swatch: 'swatch-1r82-bI2',
        inputWrap: 'inputWrap-1r82-bI2',
        inputHash: 'inputHash-1r82-bI2',
        input: 'input-1r82-bI2',
        buttonWrap: 'buttonWrap-1r82-bI2',
        hueSaturationWrap: 'hueSaturationWrap-1r82-bI2',
        saturation: 'saturation-1r82-bI2',
        hue: 'hue-1r82-bI2',
      };
    },
    70351: (e) => {
      e.exports = {
        hue: 'hue-1Mi0KyO-',
        pointer: 'pointer-1Mi0KyO-',
        pointerContainer: 'pointerContainer-1Mi0KyO-',
      };
    },
    14132: (e) => {
      e.exports = {
        opacity: 'opacity-2UqCUhku',
        opacitySlider: 'opacitySlider-2UqCUhku',
        opacitySliderGradient: 'opacitySliderGradient-2UqCUhku',
        pointer: 'pointer-2UqCUhku',
        dragged: 'dragged-2UqCUhku',
        opacityPointerWrap: 'opacityPointerWrap-2UqCUhku',
        opacityInputWrap: 'opacityInputWrap-2UqCUhku',
        opacityInput: 'opacityInput-2UqCUhku',
        opacityInputPercent: 'opacityInputPercent-2UqCUhku',
      };
    },
    58733: (e) => {
      e.exports = {
        saturation: 'saturation-2uNV-KY0',
        pointer: 'pointer-2uNV-KY0',
      };
    },
    61242: (e) => {
      e.exports = {
        swatches: 'swatches-vBKBthtD',
        swatch: 'swatch-vBKBthtD',
        hover: 'hover-vBKBthtD',
        empty: 'empty-vBKBthtD',
        white: 'white-vBKBthtD',
        selected: 'selected-vBKBthtD',
        contextItem: 'contextItem-vBKBthtD',
      };
    },
    66549: (e) => {
      e.exports = {
        'tablet-small-breakpoint': 'screen and (max-width: 428px)',
        item: 'item-2IihgTnv',
        hovered: 'hovered-2IihgTnv',
        isDisabled: 'isDisabled-2IihgTnv',
        isActive: 'isActive-2IihgTnv',
        shortcut: 'shortcut-2IihgTnv',
        toolbox: 'toolbox-2IihgTnv',
        withIcon: 'withIcon-2IihgTnv',
        icon: 'icon-2IihgTnv',
        labelRow: 'labelRow-2IihgTnv',
        label: 'label-2IihgTnv',
        showOnHover: 'showOnHover-2IihgTnv',
      };
    },
    53400: (e, t, o) => {
      'use strict';
      o.d(t, { CheckboxInput: () => l });
      var n = o(67294),
        s = o(94184),
        r = o(49775),
        i = o(44805),
        a = o(58644),
        c = o.n(a);
      function l(e) {
        const t = s(c().box, c()['intent-' + e.intent], {
            [c().check]: !Boolean(e.indeterminate),
            [c().dot]: Boolean(e.indeterminate),
            [c().noOutline]: -1 === e.tabIndex,
          }),
          o = s(c().wrapper, e.className);
        return n.createElement(
          'span',
          { className: o, title: e.title },
          n.createElement('input', {
            id: e.id,
            tabIndex: e.tabIndex,
            className: c().input,
            type: 'checkbox',
            name: e.name,
            checked: e.checked,
            disabled: e.disabled,
            value: e.value,
            autoFocus: e.autoFocus,
            role: e.role,
            onChange: function () {
              e.onChange && e.onChange(e.value);
            },
            ref: e.reference,
          }),
          n.createElement(
            'span',
            { className: t },
            n.createElement(r.Icon, { icon: i, className: c().icon })
          )
        );
      }
    },
    43001: (e, t, o) => {
      'use strict';
      o.d(t, { ColorPicker: () => O });
      var n = o(67294),
        s = o(94184),
        r = o.n(s),
        i = o(79881),
        a = o(14563),
        c = o(16282),
        l = o(43367),
        u = o(76420),
        h = o(95860);
      const d = n.createContext(void 0);
      var p = o(35671),
        m = o(23353),
        v = o(61242);
      function g(e) {
        const { index: t, color: o, selected: r, onSelect: a } = e,
          [g, f] = (0, n.useState)(!1),
          C = (0, n.useContext)(d),
          _ = (0, n.useRef)(null),
          b = Boolean(C) && !l.CheckMobile.any();
        return n.createElement(
          n.Fragment,
          null,
          n.createElement('div', {
            ref: _,
            style: o ? { color: o } : void 0,
            className: s(
              v.swatch,
              g && v.hover,
              r && v.selected,
              !o && v.empty,
              String(o).toLowerCase() === p.white && v.white
            ),
            onClick: function () {
              a(o);
            },
            onContextMenu: b ? E : void 0,
          }),
          b &&
            n.createElement(
              u.PopupMenu,
              {
                isOpened: g,
                onClose: E,
                position: function () {
                  const e = (0, c.ensureNotNull)(
                    _.current
                  ).getBoundingClientRect();
                  return { x: e.left, y: e.top + e.height + 4 };
                },
                onClickOutside: E,
              },
              n.createElement(h.PopupMenuItem, {
                className: v.contextItem,
                label: (0, i.t)('Remove color'),
                icon: m,
                onClick: function () {
                  E(), (0, c.ensureDefined)(C)(t);
                },
                dontClosePopup: !0,
              })
            )
        );
        function E() {
          f(!g);
        }
      }
      class f extends n.PureComponent {
        constructor() {
          super(...arguments),
            (this._onSelect = (e) => {
              const { onSelect: t } = this.props;
              t && t(e);
            });
        }
        render() {
          const { colors: e, color: t, children: o } = this.props;
          if (!e) return null;
          const s = t ? (0, a.parseRgb)(String(t)) : void 0;
          return n.createElement(
            'div',
            { className: v.swatches },
            e.map((e, t) =>
              n.createElement(g, {
                key: String(e) + t,
                index: t,
                color: e,
                selected:
                  s && (0, a.areEqualRgb)(s, (0, a.parseRgb)(String(e))),
                onSelect: this._onSelect,
              })
            ),
            o
          );
        }
      }
      var C = o(97852),
        _ = o(80511);
      function b(e) {
        const t = 'Invalid RGB color: ' + e;
        if (null === e) throw new Error(t);
        const o = e.match(/^#?([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i);
        if (null === o) throw new Error(t);
        const [, n, s, r] = o;
        if (!n || !s || !r) throw new Error(t);
        const i = parseInt(n, 16) / 255,
          a = parseInt(s, 16) / 255,
          c = parseInt(r, 16) / 255,
          l = Math.max(i, a, c),
          u = Math.min(i, a, c);
        let h;
        const d = l,
          p = l - u,
          m = 0 === l ? 0 : p / l;
        if (l === u) h = 0;
        else {
          switch (l) {
            case i:
              h = (a - c) / p + (a < c ? 6 : 0);
              break;
            case a:
              h = (c - i) / p + 2;
              break;
            case c:
              h = (i - a) / p + 4;
              break;
            default:
              h = 0;
          }
          h /= 6;
        }
        return { h, s: m, v: d };
      }
      var E = o(58848),
        w = o(58733);
      class y extends n.PureComponent {
        constructor() {
          super(...arguments),
            (this._container = null),
            (this._refContainer = (e) => {
              this._container = e;
            }),
            (this._handlePosition = (e) => {
              const {
                hsv: { h: t },
                onChange: o,
              } = this.props;
              if (!o) return;
              const n = (0, c.ensureNotNull)(
                  this._container
                ).getBoundingClientRect(),
                s = e.clientX - n.left,
                r = e.clientY - n.top;
              let i = s / n.width;
              i < 0 ? (i = 0) : i > 1 && (i = 1);
              let a = 1 - r / n.height;
              a < 0 ? (a = 0) : a > 1 && (a = 1), o({ h: t, s: i, v: a });
            }),
            (this._mouseDown = (e) => {
              window.addEventListener('mouseup', this._mouseUp),
                window.addEventListener('mousemove', this._mouseMove);
            }),
            (this._mouseUp = (e) => {
              window.removeEventListener('mousemove', this._mouseMove),
                window.removeEventListener('mouseup', this._mouseUp),
                this._handlePosition(e);
            }),
            (this._mouseMove = (0, E.default)(this._handlePosition, 100)),
            (this._handleTouch = (e) => {
              this._handlePosition(e.nativeEvent.touches[0]);
            });
        }
        render() {
          const {
              className: e,
              hsv: { h: t, s: o, v: s },
            } = this.props,
            i = `hsl(${360 * t}, 100%, 50%)`;
          return n.createElement(
            'div',
            {
              className: r()(w.saturation, e),
              style: { backgroundColor: i },
              ref: this._refContainer,
              onMouseDown: this._mouseDown,
              onTouchStart: this._handleTouch,
              onTouchMove: this._handleTouch,
            },
            n.createElement('div', {
              className: w.pointer,
              style: { left: 100 * o + '%', top: 100 * (1 - s) + '%' },
            })
          );
        }
      }
      var k = o(70351);
      class S extends n.PureComponent {
        constructor() {
          super(...arguments),
            (this._container = null),
            (this._refContainer = (e) => {
              this._container = e;
            }),
            (this._handlePosition = (e) => {
              const {
                hsv: { s: t, v: o },
                onChange: n,
              } = this.props;
              if (!n) return;
              const s = (0, c.ensureNotNull)(
                this._container
              ).getBoundingClientRect();
              let r = (e.clientY - s.top) / s.height;
              r < 0 ? (r = 0) : r > 1 && (r = 1), n({ h: r, s: t, v: o });
            }),
            (this._mouseDown = (e) => {
              window.addEventListener('mouseup', this._mouseUp),
                window.addEventListener('mousemove', this._mouseMove);
            }),
            (this._mouseUp = (e) => {
              window.removeEventListener('mousemove', this._mouseMove),
                window.removeEventListener('mouseup', this._mouseUp),
                this._handlePosition(e);
            }),
            (this._mouseMove = (0, E.default)(this._handlePosition, 100)),
            (this._handleTouch = (e) => {
              this._handlePosition(e.nativeEvent.touches[0]);
            });
        }
        render() {
          const {
            className: e,
            hsv: { h: t },
          } = this.props;
          return n.createElement(
            'div',
            { className: r()(k.hue, e) },
            n.createElement(
              'div',
              {
                className: k.pointerContainer,
                ref: this._refContainer,
                onMouseDown: this._mouseDown,
                onTouchStart: this._handleTouch,
                onTouchMove: this._handleTouch,
              },
              n.createElement('div', {
                className: k.pointer,
                style: { top: 100 * t + '%' },
              })
            )
          );
        }
      }
      var N = o(14398);
      const I = (0, i.t)('Add', { context: 'Color Picker' });
      class P extends n.PureComponent {
        constructor(e) {
          super(e),
            (this._handleHSV = (e) => {
              const t =
                (function (e) {
                  const { h: t, s: o, v: n } = e;
                  let s, r, i;
                  const a = Math.floor(6 * t),
                    c = 6 * t - a,
                    l = n * (1 - o),
                    u = n * (1 - c * o),
                    h = n * (1 - (1 - c) * o);
                  switch (a % 6) {
                    case 0:
                      (s = n), (r = h), (i = l);
                      break;
                    case 1:
                      (s = u), (r = n), (i = l);
                      break;
                    case 2:
                      (s = l), (r = n), (i = h);
                      break;
                    case 3:
                      (s = l), (r = u), (i = n);
                      break;
                    case 4:
                      (s = h), (r = l), (i = n);
                      break;
                    case 5:
                      (s = n), (r = l), (i = u);
                      break;
                    default:
                      (s = 0), (r = 0), (i = 0);
                  }
                  return (
                    '#' +
                    [255 * s, 255 * r, 255 * i]
                      .map((e) =>
                        ('0' + Math.round(e).toString(16)).replace(
                          /.+?([a-f0-9]{2})$/i,
                          '$1'
                        )
                      )
                      .join('')
                  );
                })(e) || '#000000';
              this.setState({
                color: t,
                inputColor: t.replace(/^#/, ''),
                hsv: e,
              }),
                this.props.onSelect(t);
            }),
            (this._handleInput = (e) => {
              const t = e.currentTarget.value;
              try {
                const e = b(t),
                  o = '#' + t;
                this.setState({ color: o, inputColor: t, hsv: e }),
                  this.props.onSelect(o);
              } catch (e) {
                this.setState({ inputColor: t });
              }
            }),
            (this._handleAddColor = () => this.props.onAdd(this.state.color));
          const t = e.color || '#000000';
          this.state = { color: t, inputColor: t.replace(/^#/, ''), hsv: b(t) };
        }
        render() {
          const { color: e, hsv: t, inputColor: o } = this.state;
          return n.createElement(
            'div',
            { className: N.container },
            n.createElement(
              'div',
              { className: N.form },
              n.createElement('div', {
                className: N.swatch,
                style: { backgroundColor: e },
              }),
              n.createElement(
                'div',
                { className: N.inputWrap },
                n.createElement('span', { className: N.inputHash }, '#'),
                n.createElement('input', {
                  type: 'text',
                  className: N.input,
                  value: o,
                  onChange: this._handleInput,
                })
              ),
              n.createElement(
                'div',
                { className: N.buttonWrap },
                n.createElement(
                  _.Button,
                  { size: 's', onClick: this._handleAddColor },
                  I
                )
              )
            ),
            n.createElement(
              'div',
              { className: N.hueSaturationWrap },
              n.createElement(y, {
                className: N.saturation,
                hsv: t,
                onChange: this._handleHSV,
              }),
              n.createElement(S, {
                className: N.hue,
                hsv: t,
                onChange: this._handleHSV,
              })
            )
          );
        }
      }
      var T = o(3819);
      const x = (0, i.t)('Add custom color', { context: 'Color Picker' }),
        M = (0, i.t)('Opacity', { context: 'Color Picker' });
      class O extends n.PureComponent {
        constructor(e) {
          super(e),
            (this._handleAddColor = (e) => {
              this.setState({ isCustom: !1 }), this._onToggleCustom(!1);
              const { onAddColor: t } = this.props;
              t && t(e);
            }),
            (this._handleSelectColor = (e) => {
              const { onColorChange: t } = this.props,
                { isCustom: o } = this.state;
              t && t(e, o);
            }),
            (this._handleCustomClick = () => {
              this.setState({ isCustom: !0 }), this._onToggleCustom(!0);
            }),
            (this._handleOpacity = (e) => {
              const { onOpacityChange: t } = this.props;
              t && t(e);
            }),
            (this.state = { isCustom: !1 });
        }
        componentDidUpdate(e, t) {
          e.selectOpacity !== this.props.selectOpacity &&
            this.props.menu &&
            this.props.menu.update();
        }
        render() {
          const {
              color: e,
              opacity: t,
              selectCustom: o,
              selectOpacity: s,
              customColors: i,
              onRemoveCustomColor: a,
            } = this.props,
            { isCustom: c } = this.state,
            l = 'number' == typeof t ? t : 1;
          return c
            ? n.createElement(P, {
                color: e,
                onSelect: this._handleSelectColor,
                onAdd: this._handleAddColor,
              })
            : n.createElement(
                'div',
                { className: T.container },
                n.createElement(f, {
                  colors: p.basic,
                  color: e,
                  onSelect: this._handleSelectColor,
                }),
                n.createElement(f, {
                  colors: p.extended,
                  color: e,
                  onSelect: this._handleSelectColor,
                }),
                n.createElement('div', { className: T.separator }),
                n.createElement(
                  d.Provider,
                  { value: a },
                  n.createElement(
                    f,
                    { colors: i, color: e, onSelect: this._handleSelectColor },
                    o &&
                      n.createElement('div', {
                        className: r()(T.customButton, 'apply-common-tooltip'),
                        onClick: this._handleCustomClick,
                        title: x,
                      })
                  )
                ),
                s &&
                  n.createElement(
                    n.Fragment,
                    null,
                    n.createElement('div', { className: T.sectionTitle }, M),
                    n.createElement(C.Opacity, {
                      color: e,
                      opacity: l,
                      onChange: this._handleOpacity,
                    })
                  )
              );
        }
        _onToggleCustom(e) {
          const { onToggleCustom: t } = this.props;
          t && t(e);
        }
      }
    },
    97852: (e, t, o) => {
      'use strict';
      o.d(t, { Opacity: () => c });
      var n = o(67294),
        s = o(94184),
        r = o(16282),
        i = o(57968),
        a = o(14132);
      class c extends n.PureComponent {
        constructor(e) {
          super(e),
            (this._container = null),
            (this._pointer = null),
            (this._raf = null),
            (this._refContainer = (e) => {
              this._container = e;
            }),
            (this._refPointer = (e) => {
              this._pointer = e;
            }),
            (this._handlePosition = (e) => {
              null === this._raf &&
                (this._raf = requestAnimationFrame(() => {
                  const t = (0, r.ensureNotNull)(this._container),
                    o = (0, r.ensureNotNull)(this._pointer),
                    n = t.getBoundingClientRect(),
                    s = o.offsetWidth,
                    a = e.clientX - s / 2 - n.left,
                    c = (0, i.clamp)(a / (n.width - s), 0, 1);
                  this.setState({
                    inputOpacity: Math.round(100 * c).toString(),
                  }),
                    this.props.onChange(c),
                    (this._raf = null);
                }));
            }),
            (this._onSliderClick = (e) => {
              this._handlePosition(e.nativeEvent), this._dragSubscribe();
            }),
            (this._mouseUp = (e) => {
              this.setState({ isPointerDragged: !1 }),
                this._dragUnsubscribe(),
                this._handlePosition(e);
            }),
            (this._mouseMove = (e) => {
              this.setState({ isPointerDragged: !0 }), this._handlePosition(e);
            }),
            (this._onTouchStart = (e) => {
              this._handlePosition(e.nativeEvent.touches[0]);
            }),
            (this._handleTouch = (e) => {
              this.setState({ isPointerDragged: !0 }),
                this._handlePosition(e.nativeEvent.touches[0]);
            }),
            (this._handleTouchEnd = () => {
              this.setState({ isPointerDragged: !1 });
            }),
            (this._handleInput = (e) => {
              const t = e.currentTarget.value,
                o = Number(t) / 100;
              this.setState({ inputOpacity: t }),
                Number.isNaN(o) || o > 1 || this.props.onChange(o);
            }),
            (this.state = {
              inputOpacity: Math.round(100 * e.opacity).toString(),
              isPointerDragged: !1,
            });
        }
        componentWillUnmount() {
          null !== this._raf &&
            (cancelAnimationFrame(this._raf), (this._raf = null)),
            this._dragUnsubscribe();
        }
        render() {
          const { color: e, opacity: t, hideInput: o } = this.props,
            { inputOpacity: r, isPointerDragged: i } = this.state,
            c = { color: e || void 0 };
          return n.createElement(
            'div',
            { className: a.opacity },
            n.createElement(
              'div',
              {
                className: a.opacitySlider,
                style: c,
                ref: this._refContainer,
                onMouseDown: this._onSliderClick,
                onTouchStart: this._onTouchStart,
                onTouchMove: this._handleTouch,
                onTouchEnd: this._handleTouchEnd,
              },
              n.createElement('div', {
                className: a.opacitySliderGradient,
                style: {
                  backgroundImage: `linear-gradient(90deg, transparent, ${e})`,
                },
              }),
              n.createElement(
                'div',
                { className: a.opacityPointerWrap },
                n.createElement('div', {
                  className: s(a.pointer, i && a.dragged),
                  style: { left: 100 * t + '%' },
                  ref: this._refPointer,
                })
              )
            ),
            !o &&
              n.createElement(
                'div',
                { className: a.opacityInputWrap },
                n.createElement('input', {
                  type: 'text',
                  className: a.opacityInput,
                  value: r,
                  onChange: this._handleInput,
                }),
                n.createElement(
                  'span',
                  { className: a.opacityInputPercent },
                  '%'
                )
              )
          );
        }
        _dragSubscribe() {
          const e = (0, r.ensureNotNull)(this._container).ownerDocument;
          e &&
            (e.addEventListener('mouseup', this._mouseUp),
            e.addEventListener('mousemove', this._mouseMove));
        }
        _dragUnsubscribe() {
          const e = (0, r.ensureNotNull)(this._container).ownerDocument;
          e &&
            (e.removeEventListener('mousemove', this._mouseMove),
            e.removeEventListener('mouseup', this._mouseUp));
        }
      }
    },
    35671: (e, t, o) => {
      'use strict';
      o.d(t, { white: () => s, basic: () => a, extended: () => l });
      var n = o(53312);
      const s = n.colorsPalette['color-white'],
        r = [
          'ripe-red',
          'tan-orange',
          'banana-yellow',
          'iguana-green',
          'minty-green',
          'sky-blue',
          'tv-blue',
          'deep-blue',
          'grapes-purple',
          'berry-pink',
        ],
        i = [200, 300, 400, 500, 600, 700, 800, 900].map(
          (e) => 'color-cold-gray-' + e
        );
      i.unshift('color-white'),
        i.push('color-black'),
        r.forEach((e) => {
          i.push(`color-${e}-500`);
        });
      const a = i.map((e) => n.colorsPalette[e]),
        c = [];
      [100, 200, 300, 400, 700, 900].forEach((e) => {
        r.forEach((t) => {
          c.push(`color-${t}-${e}`);
        });
      });
      const l = c.map((e) => n.colorsPalette[e]);
    },
    6347: (e, t, o) => {
      'use strict';
      o.d(t, { useCustomColors: () => c });
      var n = o(67294),
        s = o(64222),
        r = o(18437);
      function i(e, t) {
        (0, n.useEffect)(
          () => (
            r.subscribe(e, t, null),
            () => {
              r.unsubscribe(e, t, null);
            }
          ),
          [e, t]
        );
      }
      var a = o(14563);
      function c() {
        const [e, t] = (0, n.useState)(
          (0, s.getJSON)('pickerCustomColors', [])
        );
        i('add_new_custom_color', (o) => t(l(o, e))),
          i('remove_custom_color', (o) => t(u(o, e)));
        const o = (0, n.useCallback)(
            (t) => {
              const o = t ? (0, a.parseRgb)(t) : null;
              e.some(
                (e) =>
                  null !== e &&
                  null !== o &&
                  (0, a.areEqualRgb)((0, a.parseRgb)(e), o)
              ) ||
                (r.emit('add_new_custom_color', t),
                (0, s.setJSON)('pickerCustomColors', l(t, e)));
            },
            [e]
          ),
          c = (0, n.useCallback)(
            (t) => {
              (t >= 0 || t < e.length) &&
                (r.emit('remove_custom_color', t),
                (0, s.setJSON)('pickerCustomColors', u(t, e)));
            },
            [e]
          );
        return [e, o, c];
      }
      function l(e, t) {
        const o = t.slice();
        return o.push(e), o.length > 29 && o.shift(), o;
      }
      function u(e, t) {
        return t.filter((t, o) => e !== o);
      }
    },
    95860: (e, t, o) => {
      'use strict';
      o.d(t, {
        DEFAULT_POPUP_MENU_ITEM_THEME: () => l,
        PopupMenuItem: () => d,
      });
      var n = o(67294),
        s = o(94184),
        r = o(79424),
        i = o(87438),
        a = o(74818),
        c = o(66549);
      const l = c;
      function u(e) {
        const { reference: t, ...o } = e,
          s = { ...o, ref: t };
        return n.createElement(e.href ? 'a' : 'div', s);
      }
      function h(e) {
        e.stopPropagation();
      }
      function d(e) {
        const {
            id: t,
            role: o,
            'aria-selected': l,
            className: d,
            title: p,
            labelRowClassName: m,
            labelClassName: v,
            shortcut: g,
            forceShowShortcuts: f,
            icon: C,
            isActive: _,
            isDisabled: b,
            isHovered: E,
            appearAsDisabled: w,
            label: y,
            link: k,
            showToolboxOnHover: S,
            target: N,
            rel: I,
            toolbox: P,
            reference: T,
            onMouseOut: x,
            onMouseOver: M,
            suppressToolboxClick: O = !0,
            theme: D = c,
          } = e,
          B = (0, a.filterDataProps)(e),
          U = (0, n.useRef)(null);
        return n.createElement(
          u,
          {
            ...B,
            id: t,
            role: o,
            'aria-selected': l,
            className: s(d, D.item, C && D.withIcon, {
              [D.isActive]: _,
              [D.isDisabled]: b || w,
              [D.hovered]: E,
            }),
            title: p,
            href: k,
            target: N,
            rel: I,
            reference: function (e) {
              (U.current = e), 'function' == typeof T && T(e);
              'object' == typeof T && (T.current = e);
            },
            onClick: function (t) {
              const {
                dontClosePopup: o,
                onClick: n,
                onClickArg: s,
                trackEventObject: a,
              } = e;
              if (b) return;
              a && (0, i.trackEvent)(a.category, a.event, a.label);
              n && n(s, t);
              o || (0, r.globalCloseMenu)();
            },
            onContextMenu: function (t) {
              const { trackEventObject: o, trackRightClick: n } = e;
              o &&
                n &&
                (0, i.trackEvent)(o.category, o.event, o.label + '_rightClick');
            },
            onMouseUp: function (t) {
              const { trackEventObject: o, trackMouseWheelClick: n } = e;
              if (1 === t.button && k && o) {
                let e = o.label;
                n && (e += '_mouseWheelClick'),
                  (0, i.trackEvent)(o.category, o.event, e);
              }
            },
            onMouseOver: M,
            onMouseOut: x,
          },
          void 0 !== C &&
            n.createElement('div', {
              className: D.icon,
              dangerouslySetInnerHTML: { __html: C },
            }),
          n.createElement(
            'div',
            { className: s(D.labelRow, m) },
            n.createElement('div', { className: s(D.label, v) }, y)
          ),
          (void 0 !== g || f) &&
            n.createElement(
              'div',
              { className: D.shortcut },
              (A = g) && A.split('+').join(' + ')
            ),
          void 0 !== P &&
            n.createElement(
              'div',
              {
                onClick: O ? h : void 0,
                className: s(D.toolbox, { [D.showOnHover]: S }),
              },
              P
            )
        );
        var A;
      }
    },
    76420: (e, t, o) => {
      'use strict';
      o.d(t, { PopupMenu: () => l });
      var n = o(67294),
        s = o(73935),
        r = o(4735),
        i = o(90901),
        a = o(94884),
        c = o(47165);
      function l(e) {
        const {
            controller: t,
            children: o,
            isOpened: l,
            closeOnClickOutside: u = !0,
            doNotCloseOn: h,
            onClickOutside: d,
            onClose: p,
            ...m
          } = e,
          v = (0, n.useContext)(a.CloseDelegateContext),
          g = (0, c.useOutsideEvent)({
            handler: function (e) {
              d && d(e);
              if (!u) return;
              if (h && e.target instanceof Node) {
                const t = s.findDOMNode(h);
                if (t instanceof Node && t.contains(e.target)) return;
              }
              p();
            },
            mouseDown: !0,
            touchStart: !0,
          });
        return l
          ? n.createElement(
              r.Portal,
              {
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                pointerEvents: 'none',
              },
              n.createElement(
                'span',
                { ref: g, style: { pointerEvents: 'auto' } },
                n.createElement(
                  i.Menu,
                  {
                    ...m,
                    onClose: p,
                    onScroll: function (t) {
                      const { onScroll: o } = e;
                      o && o(t);
                    },
                    customCloseDelegate: v,
                    ref: t,
                  },
                  o
                )
              )
            )
          : null;
      }
    },
    44805: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 9" width="11" height="9" fill="none"><path stroke-width="2" d="M0.999878 4L3.99988 7L9.99988 1"/></svg>';
    },
  },
]);
