/* =============================================
   PIXELART - Core Application
   ============================================= */

;(() => {
  'use strict'

  // ============================
  // CONSTANTS
  // ============================

  const FONTS = {
    pixel:        { family: "'Press Start 2P', monospace",      label: 'Press Start 2P', pixel: true },
    pixel2:       { family: "'VT323', monospace",               label: 'VT323',          pixel: true },
    pixel3:       { family: "'Silkscreen', monospace",          label: 'Silkscreen',     pixel: true },
    elegant:      { family: "'Playfair Display', serif",        label: 'Playfair Display' },
    serif:        { family: "'Cormorant Garamond', serif",     label: 'Cormorant Garamond' },
    script:       { family: "'Great Vibes', cursive",           label: 'Great Vibes' },
    cursive:      { family: "'Dancing Script', cursive",        label: 'Dancing Script' },
    handwritten:  { family: "'Pacifico', cursive",              label: 'Pacifico' },
    handwritten2: { family: "'Caveat', cursive",                label: 'Caveat' },
    modern:       { family: "'Montserrat', sans-serif",         label: 'Montserrat' },
    modern2:      { family: "'Poppins', sans-serif",            label: 'Poppins' },
    classic:      { family: "'Merriweather', serif",            label: 'Merriweather' },
    sans:         { family: "'Raleway', sans-serif",            label: 'Raleway' },
    light:        { family: "'Inter', sans-serif",              label: 'Inter' },
    slab:         { family: "'Roboto Slab', serif",             label: 'Roboto Slab' }
  }

  const DECOS = {
    none:       { pixel: '', smooth: '' },
    hearts:     { pixel: 'radial-gradient(circle at 20% 20%, rgba(255,0,0,.35) 4px, transparent 4px),radial-gradient(circle at 80% 25%, rgba(255,0,0,.25) 3px, transparent 3px),radial-gradient(circle at 30% 75%, rgba(255,0,0,.3) 5px, transparent 5px),radial-gradient(circle at 70% 70%, rgba(255,0,0,.25) 4px, transparent 4px)',
                  smooth: '<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:64px;opacity:.1;gap:12px;flex-wrap:wrap;padding:12px;color:rgba(255,0,0,.3)">\u2665 \u2665 \u2665</div>' },
    stars:      { pixel: 'radial-gradient(circle at 15% 25%, rgba(255,215,0,.35) 3px, transparent 3px),radial-gradient(circle at 85% 35%, rgba(255,215,0,.25) 3px, transparent 3px),radial-gradient(circle at 40% 75%, rgba(255,215,0,.3) 4px, transparent 4px),radial-gradient(circle at 60% 15%, rgba(255,215,0,.25) 3px, transparent 3px)',
                  smooth: '<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:40px;opacity:.1;gap:16px;flex-wrap:wrap;padding:12px;color:rgba(255,215,0,.3)">* * *</div>' },
    flowers:    { pixel: 'radial-gradient(circle at 20% 30%, rgba(255,105,180,.3) 4px, transparent 4px),radial-gradient(circle at 75% 50%, rgba(255,105,180,.2) 3px, transparent 3px),radial-gradient(circle at 50% 80%, rgba(255,105,180,.25) 4px, transparent 4px),radial-gradient(circle at 90% 20%, rgba(255,105,180,.2) 3px, transparent 3px)',
                  smooth: '<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:36px;opacity:.1;gap:10px;flex-wrap:wrap;padding:12px;color:rgba(255,105,180,.3)">* * *</div>' },
    dots:       { pixel: 'radial-gradient(circle at 20% 25%, rgba(255,255,255,.15) 2px, transparent 2px),radial-gradient(circle at 80% 35%, rgba(255,255,255,.12) 2px, transparent 2px),radial-gradient(circle at 50% 70%, rgba(255,255,255,.15) 2px, transparent 2px),radial-gradient(circle at 30% 80%, rgba(255,255,255,.12) 2px, transparent 2px),radial-gradient(circle at 70% 15%, rgba(255,255,255,.12) 2px, transparent 2px)',
                  smooth: '' },
    geometric:  { pixel: 'linear-gradient(45deg, transparent 33%, rgba(255,107,157,.2) 33%, rgba(255,107,157,.2) 66%, transparent 66%),linear-gradient(-45deg, transparent 33%, rgba(102,240,255,.2) 33%, rgba(102,240,255,.2) 66%, transparent 66%)',
                  smooth: '' },
    waves:      { pixel: 'repeating-linear-gradient(90deg, transparent, transparent 6px, rgba(255,215,0,.1) 6px, rgba(255,215,0,.1) 8px)',
                  smooth: '' },
    confetti:   { pixel: 'linear-gradient(45deg, rgba(255,64,96,.25) 25%, transparent 25%),linear-gradient(-45deg, rgba(255,215,0,.25) 25%, transparent 25%),linear-gradient(135deg, rgba(102,240,255,.25) 25%, transparent 25%),linear-gradient(-135deg, rgba(179,102,255,.25) 25%, transparent 25%)',
                  smooth: '' }
  }

  const BORDERS = {
    none:   { w: 0, style: 'none' },
    thin:   { w: 2, style: 'solid' },
    medium: { w: 4, style: 'solid' },
    thick:  { w: 8, style: 'solid' },
    double: { w: 4, style: 'double' },
    dashed: { w: 3, style: 'dashed' }
  }

  const TEMPLATES = {
    classic:     { bg: '#ff6b9d', text: '#fff', accent: '#ffd700', border: '#fff' },
    love:        { bg: '#ff1744', text: '#fff', accent: '#ffd700', border: '#fff' },
    birthday:    { bg: '#ff9100', text: '#1a1a2e', accent: '#ff1744', border: '#1a1a2e' },
    friendship:  { bg: '#00e676', text: '#fff', accent: '#ffd700', border: '#fff' },
    apology:     { bg: '#7c4dff', text: '#fff', accent: '#ffd700', border: '#fff' },
    elegant:     { bg: '#1a1a2e', text: '#e8e0f0', accent: '#ffd700', border: '#ffd700' },
    vintage:     { bg: '#8d6e63', text: '#efebe9', accent: '#ffd700', border: '#efebe9' },
    modern:      { bg: '#1a1a2e', text: '#fff', accent: '#ff6b9d', border: '#ff6b9d' }
  }

  // ============================
  // STATE
  // ============================

  const state = {
    template: 'classic',
    font: 'pixel',
    deco: 'hearts',
    border: 'medium',
    to: 'Para ti',
    msg: 'Escribe tu mensaje aqu\u00ed...',
    from: 'Con cari\u00f1o',
    bg: '#ff6b9d',
    text: '#ffffff',
    accent: '#ffd700',
    borderColor: '#ffffff',
    grad: false,
    gradColor: '#c44dff',
    gradDir: 'to bottom',
    fontSize: 20,
    align: 'center',
    letterSpacing: '0',
    visual: { bg: 'pixel', text: 'pixel', deco: 'pixel', border: 'pixel' }
  }

  // ============================
  // DRAWING STATE
  // ============================

  const draw = {
    strokes: [],
    current: [],
    isDown: false,
    active: false,
    color: '#ff6b9d',
    size: 4
  }

  // ============================
  // DOM REFS
  // ============================

  const $ = id => document.getElementById(id)
  const dom = {}

  function cacheDom() {
    dom.stage = $('stage')
    dom.frame = $('frame')
    dom.card = $('card')
    dom.cardBg = $('cardBg')
    dom.cardPattern = $('cardPattern')
    dom.cardDeco = $('cardDeco')
    dom.cardCanvas = $('cardCanvas')
    dom.cardHeading = $('cardHeading')
    dom.cardTo = $('cardTo')
    dom.cardMsg = $('cardMsg')
    dom.cardFrom = $('cardFrom')
    dom.cardRule1 = $('cardRule1')
    dom.cardRule2 = $('cardRule2')

    dom.inputTo = $('inputTo')
    dom.inputMsg = $('inputMsg')
    dom.inputFrom = $('inputFrom')
    dom.colorBg = $('colorBg')
    dom.colorText = $('colorText')
    dom.colorAccent = $('colorAccent')
    dom.colorBorder = $('colorBorder')
    dom.useGradient = $('useGradient')
    dom.colorGrad = $('colorGrad')
    dom.gradDir = $('gradDir')
    dom.fontSize = $('fontSize')
    dom.align = $('textAlign')
    dom.letterSpacing = $('letterSpacing')
    dom.sizeLabel = $('sizeLabel')
    dom.previewFont = $('previewFont')
    dom.previewSize = $('previewSize')

    dom.btnShare = $('btnShare')
    dom.btnSave = $('btnSave')
    dom.btnExport = $('btnExport')
    dom.shareLink = $('shareLink')
    dom.modal = $('modal')
    dom.modalPreview = $('modalPreview')
    dom.modalPreviewText = $('modalPreviewText')

    dom.drawToggle = $('drawToggle')
    dom.drawHint = $('drawHint')
    dom.drawColor = $('drawColor')
    dom.drawSize = $('drawSize')
    dom.undoBtn = $('undoBtn')
    dom.clearBtn = $('clearBtn')
    dom.emojiBtn = $('emojiBtn')
    dom.emojiPicker = $('emojiPicker')
  }

  // ============================
  // RENDER
  // ============================

  const render = {
    all(applyTemplateColors) {
      this.template(applyTemplateColors)
      this.colors()
      this.text()
      this.font()
      this.border()
      this.deco()
      this.frame()
      this.meta()
    },

    template(applyColors) {
      dom.card.className = 'card'
      const t = state.template
      dom.card.classList.add('t--' + t)

      const active = TEMPLATES[t]
      if (active && applyColors) {
        dom.colorBg.value = active.bg
        dom.colorText.value = active.text
        dom.colorAccent.value = active.accent
        dom.colorBorder.value = active.border
        state.bg = active.bg
        state.text = active.text
        state.accent = active.accent
        state.borderColor = active.border
      }

      // Template radio
      document.querySelectorAll('.t-opt').forEach(el => {
        const isActive = el.dataset.template === t
        el.classList.toggle('active', isActive)
        el.setAttribute('aria-checked', isActive)
      })
    },

    colors() {
      let bg = state.bg
      if (state.grad) {
        bg = `linear-gradient(${state.gradDir}, ${state.bg}, ${state.gradColor})`
      }
      dom.cardBg.style.background = bg

      dom.cardPattern.style.background = 'none'
      if (state.visual.bg === 'pixel') {
        dom.cardPattern.style.background =
          'repeating-linear-gradient(0deg, transparent, transparent 6px, rgba(0,0,0,.04) 6px, rgba(0,0,0,.04) 8px)'
        dom.cardPattern.style.imageRendering = 'pixelated'
      }

      dom.cardTo.style.color = state.accent
      dom.cardMsg.style.color = state.text
      dom.cardFrom.style.color = state.accent
      dom.cardRule1.style.background = state.accent
      dom.cardRule2.style.background = state.accent
      dom.cardHeading.style.borderColor = state.accent
      dom.cardHeading.style.color = state.accent

      // Gradient controls
      dom.colorGrad.disabled = !state.grad
      dom.gradDir.disabled = !state.grad
    },

    text() {
      dom.cardTo.textContent = state.to
      dom.cardMsg.textContent = state.msg
      dom.cardFrom.textContent = state.from

      dom.cardMsg.style.textAlign = state.align
      dom.cardMsg.style.letterSpacing = state.letterSpacing + 'px'

      dom.inputTo.value = state.to
      dom.inputMsg.value = state.msg
      dom.inputFrom.value = state.from
    },

    font() {
      const info = FONTS[state.font] || FONTS.pixel
      const isPixel = info.pixel || state.visual.text === 'pixel'

      let msgSize = state.fontSize
      let toSize = state.fontSize + 2
      let fromSize = state.fontSize

      if (isPixel) {
        msgSize = Math.min(state.fontSize - 2, 26)
        toSize = Math.min(state.fontSize - 4, 14)
        fromSize = Math.min(state.fontSize - 2, 14)
        msgSize = Math.max(msgSize, 9)
        toSize = Math.max(toSize, 9)
        fromSize = Math.max(fromSize, 9)
        dom.cardMsg.style.imageRendering = 'pixelated'
      } else {
        dom.cardMsg.style.imageRendering = 'auto'
      }

      const els = [dom.cardTo, dom.cardMsg, dom.cardFrom, dom.cardHeading]
      els.forEach(el => { el.style.fontFamily = info.family })

      dom.cardMsg.style.fontSize = msgSize + 'px'
      dom.cardTo.style.fontSize = toSize + 'px'
      dom.cardFrom.style.fontSize = fromSize + 'px'
      dom.cardHeading.style.fontSize = Math.min(msgSize + 10, 32) + 'px'
      dom.cardHeading.style.width = Math.min(msgSize + 24, 56) + 'px'
      dom.cardHeading.style.height = Math.min(msgSize + 24, 56) + 'px'

      dom.sizeLabel.textContent = state.fontSize + 'px'

      // Font radio
      document.querySelectorAll('.f-opt').forEach(el => {
        const isActive = el.dataset.font === state.font
        el.classList.toggle('active', isActive)
        el.setAttribute('aria-checked', isActive)
      })
    },

    border() {
      const cfg = BORDERS[state.border] || BORDERS.medium
      const style = state.visual.border

      if (cfg.w === 0) {
        dom.card.style.border = 'none'
        return
      }

      const isPixel = style === 'pixel'
      dom.card.style.border = `${cfg.w}px ${cfg.style} ${state.borderColor}`
      dom.card.style.borderRadius = isPixel ? '0' : '10px'
      dom.card.style.imageRendering = isPixel ? 'pixelated' : 'auto'

      // Border radio
      document.querySelectorAll('.b-opt').forEach(el => {
        const isActive = el.dataset.border === state.border
        el.classList.toggle('active', isActive)
        el.setAttribute('aria-checked', isActive)
      })
    },

    deco() {
      const cfg = DECOS[state.deco] || DECOS.none
      const el = dom.cardDeco
      el.className = 'card__deco'

      if (state.deco === 'none') {
        el.style.background = 'none'
        el.innerHTML = ''
        return
      }

      if (state.visual.deco === 'smooth' && cfg.smooth) {
        el.style.background = 'none'
        el.innerHTML = cfg.smooth
      } else {
        el.innerHTML = ''
        el.style.background = cfg.pixel || 'none'
        if (state.deco === 'confetti' || state.deco === 'geometric') {
          el.style.backgroundSize = state.deco === 'confetti' ? '16px 16px' : '10px 10px'
        }
        el.style.imageRendering = 'pixelated'
      }

      // Deco radio
      document.querySelectorAll('.d-opt').forEach(el => {
        const isActive = el.dataset.deco === state.deco
        el.classList.toggle('active', isActive)
        el.setAttribute('aria-checked', isActive)
      })
    },

    frame() {
      dom.frame.className = 'preview__frame'
      dom.frame.classList.add('is-' + state.visual.border)
    },

    meta() {
      const info = FONTS[state.font] || FONTS.pixel
      dom.previewFont.textContent = info.label
      dom.previewSize.textContent = state.fontSize + 'px'
    },

    toggles() {
      Object.keys(state.visual).forEach(key => {
        const toggle = document.querySelector(`.toggle[data-target="${key}"]`)
        if (!toggle) return
        toggle.querySelectorAll('.toggle__opt').forEach(opt => {
          const active = opt.dataset.value === state.visual[key]
          opt.classList.toggle('active', active)
          opt.setAttribute('aria-checked', active)
        })
      })
    }
  }

  // ============================
  // ACTIONS
  // ============================

  const actions = {
    selectTemplate(tmpl) {
      state.template = tmpl
      render.all(true)
    },

    selectFont(font) {
      state.font = font
      render.font()
      render.meta()
    },

    selectDeco(deco) {
      state.deco = deco
      render.deco()
    },

    selectBorder(border) {
      state.border = border
      render.border()
    },

    toggleVisual(target, value) {
      state.visual[target] = value
      render.all()
    },

    readText() {
      state.to = dom.inputTo.value || 'Para ti'
      state.msg = dom.inputMsg.value || '...'
      state.from = dom.inputFrom.value || 'Con cari\u00f1o'
      render.text()
    },

    readFields() {
      state.bg = dom.colorBg.value
      state.text = dom.colorText.value
      state.accent = dom.colorAccent.value
      state.borderColor = dom.colorBorder.value
      state.grad = dom.useGradient.checked
      state.gradColor = dom.colorGrad.value
      state.gradDir = dom.gradDir.value
      state.fontSize = parseInt(dom.fontSize.value)
      state.align = dom.align.value
      state.letterSpacing = dom.letterSpacing.value
      render.all()
    }
  }

  // ============================
  // SHARE
  // ============================

  function compress(obj) {
    return LZString.compressToEncodedURIComponent(JSON.stringify(obj))
  }
  function decompress(str) {
    return JSON.parse(LZString.decompressFromEncodedURIComponent(str))
  }

  function generateLink() {
    // Strip defaults to shorten URL
    const d = {}
    if (state.template !== 'classic') d.t = state.template
    if (state.font !== 'pixel') d.f = state.font
    if (state.deco !== 'none') d.d = state.deco
    if (state.border !== 'medium') d.b = state.border
    d.r = state.to
    d.m = state.msg
    d.s = state.from
    d.bg = state.bg
    d.tx = state.text
    d.ac = state.accent
    if (state.borderColor !== '#ffffff') d.bc = state.borderColor
    if (state.grad) { d.ge = true; d.gc = state.gradColor; d.gd = state.gradDir }
    if (state.fontSize !== 20) d.fs = state.fontSize
    if (state.align !== 'center') d.al = state.align
    if (state.letterSpacing !== '0') d.ls = state.letterSpacing
    if (state.visual.bg !== 'pixel') d.vb = state.visual.bg
    if (state.visual.text !== 'pixel') d.vt = state.visual.text
    if (state.visual.deco !== 'pixel') d.vd = state.visual.deco
    if (state.visual.border !== 'pixel') d.vbo = state.visual.border

    // Drawing strokes (strip color/size from points, keep per-stroke)
    const sw = strokeData()
    if (sw.length) {
      d.sk = sw.map(s => ({
        c: s[0].c,
        w: s[0].w,
        p: s.map(pt => [Math.round(pt.x * 1000), Math.round(pt.y * 1000)])
      }))
    }

    try {
      const enc = compress(d)
      const url = window.location.origin +
        window.location.pathname.replace(/\/?$/, '/') +
        '?card=' + enc

      dom.shareLink.value = url
      dom.modal.classList.add('show')
      dom.modal.setAttribute('aria-hidden', 'false')

      const info = FONTS[state.font] || FONTS.pixel
      dom.modalPreviewText.textContent = state.msg.substring(0, 45) +
        (state.msg.length > 45 ? '...' : '')
      dom.modalPreviewText.style.fontFamily = info.family

      saveHistory(d)
      notify('Enlace generado con \u00e9xito')
    } catch (e) {
      notify('Error al generar el enlace')
    }
  }

  function closeModal() {
    dom.modal.classList.remove('show')
    dom.modal.setAttribute('aria-hidden', 'true')
  }

  function copyLink() {
    dom.shareLink.select()
    dom.shareLink.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(dom.shareLink.value)
      .then(() => notify('Enlace copiado al portapapeles'))
      .catch(() => { document.execCommand('copy'); notify('Enlace copiado') })
  }

  // ============================
  // PERSISTENCE
  // ============================

  function saveDraft() {
    const data = {
      t: state.template, f: state.font, d: state.deco, b: state.border,
      r: state.to, m: state.msg, s: state.from,
      bg: state.bg, tx: state.text, ac: state.accent, bc: state.borderColor,
      ge: state.grad, gc: state.gradColor, gd: state.gradDir,
      fs: state.fontSize, al: state.align, ls: state.letterSpacing,
      vb: state.visual.bg, vt: state.visual.text,
      vd: state.visual.deco, vbo: state.visual.border,
      ts: Date.now()
    }
    // Save drawing strokes
    const sw = strokeData()
    if (sw.length) {
      data.sk = sw.map(s => ({
        c: s[0].c, w: s[0].w,
        p: s.map(pt => [Math.round(pt.x * 1000), Math.round(pt.y * 1000)])
      }))
    }
    const drafts = JSON.parse(localStorage.getItem('pix_drafts') || '[]')
    drafts.unshift(data)
    if (drafts.length > 10) drafts.pop()
    localStorage.setItem('pix_drafts', JSON.stringify(drafts))
    notify('Borrador guardado')
  }

  function saveHistory(data) {
    const h = JSON.parse(localStorage.getItem('pix_history') || '[]')
    data.sharedAt = Date.now()
    h.unshift(data)
    if (h.length > 20) h.pop()
    localStorage.setItem('pix_history', JSON.stringify(h))
  }

  function loadFromURL() {
    const p = new URLSearchParams(window.location.search)
    const raw = p.get('card')
    if (!raw) return

    try {
      const d = decompress(raw)
      state.template = d.t || 'classic'
      state.font = d.f || 'pixel'
      state.deco = d.d || 'none'
      state.border = d.b || 'medium'
      state.to = d.r || 'Para ti'
      state.msg = d.m || '...'
      state.from = d.s || 'Con cari\u00f1o'
      state.bg = d.bg || '#ff6b9d'
      state.text = d.tx || '#fff'
      state.accent = d.ac || '#ffd700'
      state.borderColor = d.bc || '#fff'
      state.grad = d.ge || false
      state.gradColor = d.gc || '#c44dff'
      state.gradDir = d.gd || 'to bottom'
      state.fontSize = d.fs || 20
      state.align = d.al || 'center'
      state.letterSpacing = d.ls || '0'
      if (d.vb) state.visual.bg = d.vb
      if (d.vt) state.visual.text = d.vt
      if (d.vd) state.visual.deco = d.vd
      if (d.vbo) state.visual.border = d.vbo

      // Load drawing strokes
      if (d.sk && d.sk.length) {
        loadStrokes(d.sk.map(s => s.p.map((pt, i) => ({
          x: pt[0] / 1000,
          y: pt[1] / 1000,
          c: i === 0 ? s.c : undefined,
          w: i === 0 ? s.w : undefined
        }))))
      }

      syncDOM()
      render.all()
      render.toggles()

      // Render saved strokes on canvas
      requestAnimationFrame(() => {
        if (dom.cardCanvas) {
          setupCanvas()
        }
      })

      // Modo vista: oculta todo menos la carta
      document.body.classList.add('view-mode')
      document.title = 'Una carta para ti \u2661 PixelArt'

      // Mostrar solo la carta en el centro
      const sections = document.querySelectorAll('.section')
      sections.forEach(s => s.classList.remove('active'))
      document.getElementById('creator')?.classList.add('active')

      // Ajustar scroll
      window.scrollTo(0, 0)
      document.body.style.overflow = 'hidden'
    } catch (e) {
      console.warn('Error loading card')
    }
  }

  function syncDOM() {
    dom.inputTo.value = state.to
    dom.inputMsg.value = state.msg
    dom.inputFrom.value = state.from
    dom.colorBg.value = state.bg
    dom.colorText.value = state.text
    dom.colorAccent.value = state.accent
    dom.colorBorder.value = state.borderColor
    dom.useGradient.checked = state.grad
    dom.colorGrad.value = state.gradColor
    dom.gradDir.value = state.gradDir
    dom.fontSize.value = state.fontSize
    dom.align.value = state.align
    dom.letterSpacing.value = state.letterSpacing
  }

  // ============================
  // EXPORT
  // ============================

  function exportImage() {
    const btn = dom.btnExport
    const orig = btn.innerHTML
    btn.innerHTML = '<span class="spinner"></span>Exportando...'
    btn.disabled = true

    requestAnimationFrame(() => {
      const rect = dom.card.getBoundingClientRect()
      const scale = 2
      const canvas = document.createElement('canvas')
      canvas.width = rect.width * scale
      canvas.height = rect.height * scale
      const ctx = canvas.getContext('2d')

      // Background
      let bgColor = state.bg
      if (state.grad) {
        const grad = ctx.createLinearGradient(
          0, 0,
          state.gradDir.includes('right') ? canvas.width : 0,
          state.gradDir.includes('bottom') ? canvas.height : 0
        )
        grad.addColorStop(0, state.bg)
        grad.addColorStop(1, state.gradColor)
        ctx.fillStyle = grad
      } else {
        ctx.fillStyle = state.bg
      }
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Pattern
      if (state.visual.bg === 'pixel') {
        ctx.fillStyle = 'rgba(0,0,0,.04)'
        for (let y = 0; y < canvas.height; y += 12 * scale) {
          ctx.fillRect(0, y, canvas.width, 2 * scale)
        }
      }

      // Heading circle
      const hSize = Math.min(parseInt(state.fontSize) + 20, 50) * scale
      const hY = canvas.height * 0.22
      ctx.beginPath()
      ctx.arc(canvas.width / 2, hY, hSize / 2, 0, Math.PI * 2)
      ctx.strokeStyle = state.accent
      ctx.lineWidth = 2 * scale
      ctx.globalAlpha = 0.6
      ctx.stroke()
      ctx.globalAlpha = 1
      ctx.font = `bold ${20 * scale}px serif`
      ctx.fillStyle = state.accent
      ctx.textAlign = 'center'
      ctx.fillText('\u2661', canvas.width / 2, hY + 7 * scale)

      // To
      ctx.textAlign = state.align === 'left' ? 'left' : state.align === 'right' ? 'right' : 'center'
      const cx = state.align === 'center' ? canvas.width / 2 : state.align === 'left' ? 40 * scale : canvas.width - 40 * scale

      ctx.font = `bold ${16 * scale}px sans-serif`
      ctx.fillStyle = state.accent
      ctx.fillText(state.to, cx, canvas.height * 0.33)

      // Divider
      ctx.strokeStyle = state.accent
      ctx.globalAlpha = 0.35
      ctx.lineWidth = 2 * scale
      ctx.beginPath()
      const dw = 50 * scale
      ctx.moveTo(cx - dw, canvas.height * 0.38)
      ctx.lineTo(cx + dw, canvas.height * 0.38)
      ctx.stroke()
      ctx.globalAlpha = 1

      // Message
      const info = FONTS[state.font] || FONTS.pixel
      const isPx = info.pixel || state.visual.text === 'pixel'
      const fs = isPx ? Math.min(state.fontSize - 2, 26) : state.fontSize
      ctx.font = (fs * scale) + 'px ' + info.family.replace(/'/g, '')
      ctx.fillStyle = state.text
      ctx.letterSpacing = (parseInt(state.letterSpacing) * scale) + 'px'

      const maxW = canvas.width * 0.72
      const lh = (isPx ? fs + 4 : fs + 6) * scale
      wrapText(ctx, state.msg, cx, canvas.height * 0.46, maxW, lh)

      // Divider 2
      ctx.strokeStyle = state.accent
      ctx.globalAlpha = 0.35
      ctx.lineWidth = 2 * scale
      ctx.beginPath()
      ctx.moveTo(cx - dw, canvas.height * 0.72)
      ctx.lineTo(cx + dw, canvas.height * 0.72)
      ctx.stroke()
      ctx.globalAlpha = 1

      // From
      ctx.font = `italic ${14 * scale}px Georgia`
      ctx.fillStyle = state.accent
      ctx.fillText(state.from, cx, canvas.height * 0.80)

      // Border
      const bc = BORDERS[state.border] || BORDERS.medium
      if (bc.w > 0) {
        ctx.strokeStyle = state.borderColor
        ctx.lineWidth = bc.w * scale
        ctx.setLineDash([])
        if (bc.style === 'dashed') ctx.setLineDash([10 * scale, 6 * scale])
        else if (bc.style === 'double') {
          ctx.lineWidth = bc.w * scale * 0.5
          ctx.strokeRect(bc.w * scale / 2, bc.w * scale / 2,
            canvas.width - bc.w * scale, canvas.height - bc.w * scale)
          ctx.strokeRect(bc.w * scale * 1.5, bc.w * scale * 1.5,
            canvas.width - bc.w * scale * 3, canvas.height - bc.w * scale * 3)
          ctx.setLineDash([])

          // Drawing strokes
          drawStrokesOnCtx(ctx, canvas.width, canvas.height)

          btn.innerHTML = orig
          btn.disabled = false
          downloadCanvas(canvas)
          return
        }
        ctx.strokeRect(bc.w * scale / 2, bc.w * scale / 2,
          canvas.width - bc.w * scale, canvas.height - bc.w * scale)
      }

      // Drawing strokes
      drawStrokesOnCtx(ctx, canvas.width, canvas.height)

      btn.innerHTML = orig
      btn.disabled = false
      downloadCanvas(canvas)
    })
  }

  function downloadCanvas(canvas) {
    const link = document.createElement('a')
    link.download = 'pixelart-carta.png'
    link.href = canvas.toDataURL('image/png')
    link.click()
    notify('Imagen descargada')
  }

  function wrapText(ctx, text, x, y, maxW, lh) {
    const words = text.split(' ')
    let line = ''
    let ly = y
    for (let n = 0; n < words.length; n++) {
      const test = line + words[n] + ' '
      if (ctx.measureText(test).width > maxW && n > 0) {
        ctx.fillText(line, x, ly)
        line = words[n] + ' '
        ly += lh
      } else {
        line = test
      }
    }
    ctx.fillText(line, x, ly)
  }

  // ============================
  // DRAWING ENGINE
  // ============================

  let drawCtx = null

  function setupCanvas() {
    const canvas = dom.cardCanvas
    const rect = dom.card.getBoundingClientRect()
    if (rect.width === 0 || rect.height === 0) return
    canvas.width = rect.width
    canvas.height = rect.height
    canvas.style.width = rect.width + 'px'
    canvas.style.height = rect.height + 'px'
    drawCtx = canvas.getContext('2d')
    drawCtx.lineCap = 'round'
    drawCtx.lineJoin = 'round'
    redrawCanvas()
  }

  function redrawCanvas() {
    if (!drawCtx) return
    const c = dom.cardCanvas
    drawCtx.clearRect(0, 0, c.width, c.height)
    draw.strokes.forEach(s => drawStroke(s))
  }

  function drawStroke(s) {
    if (!drawCtx || s.length < 2) return
    const c = dom.cardCanvas
    drawCtx.beginPath()
    drawCtx.strokeStyle = s[0].c
    drawCtx.lineWidth = s[0].w
    drawCtx.moveTo(s[0].x * c.width, s[0].y * c.height)
    for (let i = 1; i < s.length; i++) {
      drawCtx.lineTo(s[i].x * c.width, s[i].y * c.height)
    }
    drawCtx.stroke()
  }

  function getCanvasPos(e) {
    const rect = dom.cardCanvas.getBoundingClientRect()
    const pt = e.touches ? e.touches[0] : e
    return {
      x: (pt.clientX - rect.left) / rect.width,
      y: (pt.clientY - rect.top) / rect.height
    }
  }

  function onPointerDown(e) {
    if (!draw.active) return
    e.preventDefault()
    const pos = getCanvasPos(e)
    draw.isDown = true
    draw.current = [{ x: pos.x, y: pos.y, c: draw.color, w: draw.size }]
  }

  function onPointerMove(e) {
    if (!draw.isDown) return
    e.preventDefault()
    const pos = getCanvasPos(e)
    draw.current.push({ x: pos.x, y: pos.y })
    if (!drawCtx) return
    const c = dom.cardCanvas
    drawCtx.clearRect(0, 0, c.width, c.height)
    redrawCanvas()
    drawStroke(draw.current)
  }

  function onPointerUp(e) {
    if (!draw.isDown) return
    draw.isDown = false
    if (draw.current.length >= 2) {
      draw.strokes.push(draw.current)
    }
    draw.current = []
  }

  function setupDrawEvents() {
    const el = dom.cardCanvas
    el.addEventListener('pointerdown', onPointerDown)
    el.addEventListener('pointermove', onPointerMove)
    el.addEventListener('pointerup', onPointerUp)
    el.addEventListener('pointerleave', onPointerUp)
    el.addEventListener('pointercancel', onPointerUp)
  }

  function toggleDraw() {
    draw.active = !draw.active
    dom.drawToggle.classList.toggle('active', draw.active)
    dom.drawToggle.parentElement.classList.toggle('is-active', draw.active)
    dom.frame.classList.toggle('is-draw', draw.active)
    dom.drawToggle.textContent = draw.active ? 'Dibujando' : 'Dibujar'
    if (draw.active) {
      requestAnimationFrame(setupCanvas)
    }
  }

  function undoStroke() {
    draw.strokes.pop()
    redrawCanvas()
  }

  function clearStrokes() {
    draw.strokes = []
    redrawCanvas()
  }

  function drawStrokesOnCtx(ctx, w, h) {
    draw.strokes.forEach(s => {
      if (s.length < 2) return
      ctx.beginPath()
      ctx.strokeStyle = s[0].c
      ctx.lineWidth = s[0].w
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      ctx.moveTo(s[0].x * w, s[0].y * h)
      for (let i = 1; i < s.length; i++) {
        ctx.lineTo(s[i].x * w, s[i].y * h)
      }
      ctx.stroke()
    })
  }

  function strokeData() {
    return draw.strokes
  }

  function loadStrokes(data) {
    draw.strokes = data || []
  }

  // ============================
  // EMOJI PICKER
  // ============================

  function toggleEmojiPicker() {
    const picker = dom.emojiPicker
    const show = picker.classList.contains('show')
    if (show) {
      picker.classList.remove('show')
      picker.setAttribute('aria-hidden', 'true')
    } else {
      picker.classList.add('show')
      picker.setAttribute('aria-hidden', 'false')
      positionEmojiPicker()
    }
  }

  function positionEmojiPicker() {
    const btn = dom.emojiBtn
    const rect = btn.getBoundingClientRect()
    const picker = dom.emojiPicker
    picker.style.left = Math.min(rect.left, window.innerWidth - 290) + 'px'
    picker.style.top = (rect.top - 170) + 'px'
    picker.style.transform = 'none'
  }

  function insertEmoji(emoji) {
    const ta = dom.inputMsg
    const start = ta.selectionStart
    const end = ta.selectionEnd
    const val = ta.value
    ta.value = val.substring(0, start) + emoji + val.substring(end)
    ta.selectionStart = ta.selectionEnd = start + emoji.length
    ta.focus()
    ta.dispatchEvent(new Event('input', { bubbles: true }))
    dom.emojiPicker.classList.remove('show')
    dom.emojiPicker.setAttribute('aria-hidden', 'true')
  }

  function closeEmojiPicker(e) {
    const picker = dom.emojiPicker
    if (!picker.classList.contains('show')) return
    if (e.target === dom.emojiBtn || picker.contains(e.target)) return
    picker.classList.remove('show')
    picker.setAttribute('aria-hidden', 'true')
  }

  // ============================
  // NAVIGATION
  // ============================

  function navigate(sectionId) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'))
    document.querySelectorAll('.nav__link').forEach(l => {
      const isActive = l.dataset.section === sectionId
      l.classList.toggle('active', isActive)
      l.setAttribute('aria-selected', isActive)
    })
    const sec = document.getElementById(sectionId)
    if (sec) sec.classList.add('active')
    window.scrollTo({ top: 0, behavior: 'smooth' })

    // Re-setup canvas when entering creator
    if (sectionId === 'creator' && dom.cardCanvas && dom.card.offsetWidth > 0) {
      requestAnimationFrame(setupCanvas)
    }
  }

  // ============================
  // NOTIFICATION
  // ============================

  function notify(msg) {
    const old = document.querySelector('.notif')
    if (old) old.remove()
    const n = document.createElement('div')
    n.className = 'notif'
    n.textContent = msg
    document.body.appendChild(n)
    setTimeout(() => {
      n.style.opacity = '0'
      n.style.transition = 'opacity .3s'
      setTimeout(() => n.remove(), 300)
    }, 2600)
  }

  // ============================
  // EVENTS
  // ============================

  function bindEvents() {
    // Navigation
    document.querySelectorAll('.nav__link').forEach(btn => {
      btn.addEventListener('click', () => navigate(btn.dataset.section))
    })

    // Template
    document.querySelectorAll('.t-opt').forEach(el => {
      el.addEventListener('click', () => actions.selectTemplate(el.dataset.template))
    })

    // Font
    document.querySelectorAll('.f-opt').forEach(el => {
      el.addEventListener('click', () => actions.selectFont(el.dataset.font))
    })

    // Deco
    document.querySelectorAll('.d-opt').forEach(el => {
      el.addEventListener('click', () => actions.selectDeco(el.dataset.deco))
    })

    // Border
    document.querySelectorAll('.b-opt').forEach(el => {
      el.addEventListener('click', () => actions.selectBorder(el.dataset.border))
    })

    // Toggles
    document.querySelectorAll('.toggle__opt').forEach(el => {
      el.addEventListener('click', () => {
        const toggle = el.closest('.toggle')
        const target = toggle.dataset.target
        actions.toggleVisual(target, el.dataset.value)
      })
    })

    // Inputs
    const inputs = [dom.inputTo, dom.inputMsg, dom.inputFrom]
    const triggers = [
      dom.colorBg, dom.colorText, dom.colorAccent, dom.colorBorder,
      dom.useGradient, dom.colorGrad, dom.gradDir,
      dom.fontSize, dom.align, dom.letterSpacing
    ]
    inputs.forEach(el => el.addEventListener('input', actions.readText))
    triggers.forEach(el => el.addEventListener('input', actions.readFields))
    // Color inputs also on change (more reliable on mobile)
    [dom.colorBg, dom.colorText, dom.colorAccent, dom.colorBorder, dom.colorGrad]
      .forEach(el => el.addEventListener('change', actions.readFields))

    // Drawing
    dom.drawToggle.addEventListener('click', toggleDraw)
    dom.undoBtn.addEventListener('click', undoStroke)
    dom.clearBtn.addEventListener('click', clearStrokes)
    dom.drawColor.addEventListener('input', () => { draw.color = dom.drawColor.value })
    dom.drawSize.addEventListener('change', () => { draw.size = parseInt(dom.drawSize.value) })

    // Emoji
    dom.emojiBtn.addEventListener('click', toggleEmojiPicker)
    dom.emojiPicker.querySelectorAll('.emoji-picker__item').forEach(btn => {
      btn.addEventListener('click', () => insertEmoji(btn.dataset.emoji))
    })
    document.addEventListener('click', closeEmojiPicker)

    // Buttons
    dom.btnShare.addEventListener('click', generateLink)
    dom.btnSave.addEventListener('click', saveDraft)
    dom.btnExport.addEventListener('click', exportImage)

    // Modal close on backdrop
    dom.modal.addEventListener('click', e => {
      if (e.target === dom.modal || e.target.classList.contains('modal__backdrop')) {
        closeModal()
      }
    })

    // Keyboard
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeModal()
    })
  }

  // ============================
  // INIT
  // ============================

  function init() {
    cacheDom()
    bindEvents()
    render.all()
    render.toggles()
    setupDrawEvents()

    // Load card from URL (if any) — this sets up canvas if needed
    loadFromURL()

    // Resize handler
    let resizeTimer
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        if (dom.cardCanvas && draw.active) setupCanvas()
      }, 200)
    })

    // Expose to global for inline handlers
    window.App = {
      navigate,
      closeModal,
      copyLink
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
  } else {
    init()
  }

})()
