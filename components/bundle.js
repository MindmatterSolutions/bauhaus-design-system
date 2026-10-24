/* @ds-bundle: {"format":4,"namespace":"Bauhaus","components":[{"name":"Button"},{"name":"Tag"},{"name":"Card"},{"name":"TextField"},{"name":"Switch"},{"name":"Tabs"},{"name":"Meter"},{"name":"Shape"}]} */
(function () {
  var R = window.React;
  var h = R.createElement;
  var COLORS = ['red', 'yellow', 'blue', 'ink', 'orange', 'teal', 'pink', 'surface', 'on-red', 'on-yellow', 'on-blue'];
  var TONE_SHAPE = { red: 'square', yellow: 'triangle', blue: 'circle' };

  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(' '); }
  function omit(obj, keys) {
    var out = {};
    for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && keys.indexOf(k) < 0) out[k] = obj[k];
    return out;
  }
  function useStableId(given) {
    var reactId = R.useId();
    return given || ('bh' + reactId).replace(/[^A-Za-z0-9_-]/g, '');
  }

  function Shape(p) {
    var kind = p.kind || 'circle';
    var color = COLORS.indexOf(p.color) >= 0 ? p.color : 'ink';
    var size = p.size || 48;
    var box = '0 0 100 100', hgt = size, inner;
    if (kind === 'square') inner = h('rect', { x: 0, y: 0, width: 100, height: 100 });
    else if (kind === 'triangle') inner = h('polygon', { points: '50,0 100,100 0,100' });
    else if (kind === 'half') { box = '0 0 100 50'; hgt = size / 2; inner = h('path', { d: 'M0 50 A50 50 0 0 1 100 50 Z' }); }
    else if (kind === 'quarter') inner = h('path', { d: 'M100 100 L0 100 A100 100 0 0 1 100 0 Z' });
    else inner = h('circle', { cx: 50, cy: 50, r: 50 });
    return h('svg', {
      className: cx('bh-shape', p.className),
      viewBox: box, width: size, height: hgt,
      role: p.title ? 'img' : undefined,
      'aria-hidden': p.title ? undefined : 'true',
      style: Object.assign({ fill: 'var(--' + color + ')' }, p.style)
    }, p.title ? h('title', null, p.title) : null, inner);
  }

  function Button(p) {
    var variant = p.variant || 'primary';
    var rest = omit(p, ['variant', 'size', 'className', 'children']);
    return h('button', Object.assign({ type: 'button' }, rest, {
      className: cx('bh-btn', 'bh-btn-' + variant, p.size === 'sm' && 'bh-btn-sm', p.className)
    }), p.children);
  }

  function Tag(p) {
    var tone = p.tone || 'neutral';
    var shape = TONE_SHAPE[tone];
    return h('span', { className: cx('bh-tag', 'bh-tag-' + tone, p.className) },
      shape ? h(Shape, { kind: shape, color: 'on-' + tone, size: 10 }) : null,
      p.children);
  }

  function Card(p) {
    var markColor = p.markColor || 'red';
    var markKind = p.mark || null;
    return h('section', { className: cx('bh-card', markKind && 'bh-card-marked', p.className) },
      markKind ? h('span', { className: 'bh-card-mark' }, h(Shape, { kind: markKind, color: markColor, size: 64 })) : null,
      (p.eyebrow || p.title) ? h('header', { className: 'bh-card-head' },
        p.eyebrow ? h('p', { className: 'bh-card-eyebrow' }, p.eyebrow) : null,
        p.title ? h('h3', { className: 'bh-card-title' }, p.title) : null) : null,
      p.children ? h('div', { className: 'bh-card-body' }, p.children) : null,
      p.footer ? h('footer', { className: 'bh-card-foot' }, p.footer) : null);
  }

  function TextField(p) {
    var id = useStableId(p.id);
    var msgId = id + '-msg';
    var rest = omit(p, ['label', 'hint', 'error', 'id', 'className']);
    var msg = p.error || p.hint;
    return h('div', { className: cx('bh-field', p.error && 'bh-field-invalid', p.className) },
      h('label', { className: 'bh-field-label', htmlFor: id }, p.label),
      h('input', Object.assign({ className: 'bh-input', id: id }, rest, {
        'aria-invalid': p.error ? 'true' : undefined,
        'aria-describedby': msg ? msgId : undefined
      })),
      msg ? h('p', { id: msgId, className: cx('bh-field-msg', p.error && 'bh-field-error') },
        p.error ? h(Shape, { kind: 'square', color: 'red', size: 8 }) : null,
        msg) : null);
  }

  function Switch(p) {
    var controlled = typeof p.checked === 'boolean';
    var st = R.useState(!!p.defaultChecked);
    var on = controlled ? p.checked : st[0];
    function toggle() {
      if (p.disabled) return;
      if (!controlled) st[1](!on);
      if (p.onChange) p.onChange(!on);
    }
    return h('button', {
      type: 'button', role: 'switch', 'aria-checked': on ? 'true' : 'false',
      disabled: p.disabled, onClick: toggle, className: cx('bh-switch', p.className)
    },
      h('span', { className: 'bh-switch-track', 'aria-hidden': 'true' }, h('span', { className: 'bh-switch-knob' })),
      p.label ? h('span', { className: 'bh-switch-label' }, p.label) : null);
  }

  function Tabs(p) {
    var items = p.items || [];
    var controlled = p.value != null;
    var st = R.useState(p.defaultValue || (items[0] && items[0].id));
    var active = controlled ? p.value : st[0];
    var base = useStableId(p.id);
    var refs = R.useRef({});
    function select(id, focus) {
      if (!controlled) st[1](id);
      if (p.onChange) p.onChange(id);
      if (focus && refs.current[id]) refs.current[id].focus();
    }
    function onKey(e) {
      var i = items.findIndex(function (t) { return t.id === active; });
      var n = null;
      if (e.key === 'ArrowRight') n = (i + 1) % items.length;
      else if (e.key === 'ArrowLeft') n = (i - 1 + items.length) % items.length;
      else if (e.key === 'Home') n = 0;
      else if (e.key === 'End') n = items.length - 1;
      if (n != null) { e.preventDefault(); select(items[n].id, true); }
    }
    var current = items.find(function (t) { return t.id === active; });
    return h('div', { className: cx('bh-tabs', p.className) },
      h('div', { role: 'tablist', className: 'bh-tabs-list', 'aria-label': p.label, onKeyDown: onKey },
        items.map(function (t) {
          var sel = t.id === active;
          return h('button', {
            key: t.id, type: 'button', role: 'tab', id: base + '-tab-' + t.id,
            'aria-selected': sel ? 'true' : 'false', 'aria-controls': base + '-panel',
            tabIndex: sel ? 0 : -1, className: 'bh-tab',
            ref: function (el) { refs.current[t.id] = el; },
            onClick: function () { select(t.id, false); }
          }, t.label);
        })),
      current ? h('div', { role: 'tabpanel', id: base + '-panel', 'aria-labelledby': base + '-tab-' + current.id, className: 'bh-tab-panel', tabIndex: 0 }, current.content) : null);
  }

  function Meter(p) {
    var max = p.max || 100;
    var value = Math.max(0, Math.min(p.value || 0, max));
    var tone = TONE_SHAPE[p.tone] ? p.tone : 'blue';
    var pct = (value / max) * 100;
    var text = p.format ? p.format(value, max) : Math.round(pct) + '%';
    return h('div', { className: cx('bh-meter', p.className) },
      h('div', { className: 'bh-meter-head' },
        h('span', { className: 'bh-meter-label' }, h(Shape, { kind: TONE_SHAPE[tone], color: tone, size: 10 }), p.label),
        h('span', { className: 'bh-meter-value' }, text)),
      h('div', {
        className: 'bh-meter-track', role: 'meter', 'aria-label': p.label,
        'aria-valuenow': value, 'aria-valuemin': 0, 'aria-valuemax': max, 'aria-valuetext': text
      }, h('div', { className: 'bh-meter-fill bh-meter-' + tone, style: { width: pct + '%' } })));
  }

  var api = { Button: Button, Tag: Tag, Card: Card, TextField: TextField, Switch: Switch, Tabs: Tabs, Meter: Meter, Shape: Shape };
  window.Bauhaus = Object.assign(window.Bauhaus || {}, api);
})();
