/* @ds-bundle: {"format":4,"namespace":"AquorDesignSystem_fb15e1","components":[{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Dialog","sourcePath":"components/overlay/Dialog.jsx"},{"name":"Tabs","sourcePath":"components/overlay/Tabs.jsx"}],"sourceHashes":{"components/commerce/ProductCard.jsx":"63bd9c2325f0","components/core/Button.jsx":"55a61dbe073b","components/core/Card.jsx":"5192faa3f762","components/core/IconButton.jsx":"2d41e2773237","components/feedback/Badge.jsx":"983e954d3d71","components/feedback/Tag.jsx":"32d9f0ce3ebd","components/feedback/Toast.jsx":"141b4c1ab11f","components/feedback/Tooltip.jsx":"e720628aadd2","components/forms/Checkbox.jsx":"020d6d189ba4","components/forms/Input.jsx":"131b98ec3c7f","components/forms/Radio.jsx":"b3bff013e766","components/forms/Select.jsx":"5aab091565bd","components/forms/Switch.jsx":"88233d06eee9","components/overlay/Dialog.jsx":"837b5c74ef76","components/overlay/Tabs.jsx":"9f10b4a7b20b","ui_kits/shop/Footer.jsx":"c86a21957c8a","ui_kits/shop/Header.jsx":"812358ecd3db","ui_kits/shop/HomePage.jsx":"478fd77c4e0c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AquorDesignSystem_fb15e1 = window.AquorDesignSystem_fb15e1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/commerce/ProductCard.jsx
try { (() => {
/** Product card — recreates Aquor's documented spec:
 * image swaps to lifestyle photo on hover (desktop only), name in H4/#252D37,
 * price in P1/#62686F, optional overlay badge (Out of Stock / New). */
function ProductCard({
  image,
  hoverImage,
  name,
  price,
  badge,
  badgeVariant = 'new',
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  const showHoverImg = hover && hoverImage;
  const badgeColors = {
    danger: 'var(--status-danger)',
    new: 'var(--status-new)'
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: 'var(--font-body)',
      cursor: 'pointer',
      width: 260
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '1/1',
      borderRadius: 'var(--radius-md)',
      background: 'var(--neutral-100)',
      overflow: 'hidden'
    }
  }, badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 10,
      left: 10,
      zIndex: 2,
      background: badgeColors[badgeVariant] || badgeColors.new,
      color: '#fff',
      fontSize: 'var(--text-s5-size)',
      fontWeight: 'var(--text-s5-weight)',
      letterSpacing: 'var(--text-s5-tracking)',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-md)',
      padding: '8px'
    }
  }, badge), /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      padding: 20,
      opacity: showHoverImg ? 0 : 1,
      transition: 'opacity var(--duration-base) var(--ease-standard)'
    }
  }), hoverImage && /*#__PURE__*/React.createElement("img", {
    src: hoverImage,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: showHoverImg ? 1 : 0,
      transition: 'opacity var(--duration-base) var(--ease-standard)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-h4-size)',
      fontWeight: 'var(--text-h4-weight)',
      color: 'var(--water-ink)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-p1-size)',
      color: 'var(--neutral-600)',
      marginTop: 2
    }
  }, price)));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const sizeStyles = {
  sm: {
    padding: '8px 16px',
    fontSize: 14
  },
  md: {
    padding: '12px 24px',
    fontSize: 16
  },
  lg: {
    padding: '16px 32px',
    fontSize: 18
  }
};
const variantStyles = {
  primary: {
    background: 'var(--water-blue)',
    color: '#fff',
    border: '1px solid var(--water-blue)'
  },
  dark: {
    background: 'var(--water-ink)',
    color: '#fff',
    border: '1px solid var(--water-ink)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--water-ink)',
    border: '1px solid var(--neutral-300)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--water-blue)',
    border: '1px solid transparent'
  },
  garden: {
    background: 'var(--garden-green)',
    color: '#fff',
    border: '1px solid var(--garden-green)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  icon = null,
  onClick,
  type = 'button',
  style = {}
}) {
  const v = variantStyles[variant] || variantStyles.primary;
  const s = sizeStyles[size] || sizeStyles.md;
  const [hover, setHover] = React.useState(false);
  const hoverBg = {
    primary: '#0073A3',
    dark: '#171d24',
    secondary: 'var(--neutral-100)',
    ghost: 'var(--neutral-100)',
    garden: '#1a2c1c'
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)',
      ...v,
      ...s,
      background: !disabled && hover && hoverBg[variant] ? hoverBg[variant] : v.background,
      ...style
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  padding = 20,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-card)',
      border: '1px solid var(--neutral-100)',
      padding,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
const sizeMap = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
  children,
  variant = 'secondary',
  size = 'md',
  disabled = false,
  onClick,
  'aria-label': ariaLabel
}) {
  const dim = sizeMap[size] || sizeMap.md;
  const [hover, setHover] = React.useState(false);
  const styles = {
    primary: {
      background: hover ? '#0073A3' : 'var(--water-blue)',
      color: '#fff',
      border: '1px solid transparent'
    },
    secondary: {
      background: hover ? 'var(--neutral-100)' : 'transparent',
      color: 'var(--water-ink)',
      border: '1px solid var(--neutral-300)'
    },
    ghost: {
      background: hover ? 'var(--neutral-100)' : 'transparent',
      color: 'var(--water-ink)',
      border: '1px solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": ariaLabel,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dim,
      height: dim,
      borderRadius: 'var(--radius-md)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--duration-fast) var(--ease-standard)',
      ...styles[variant]
    }
  }, children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
const variants = {
  danger: {
    background: 'var(--status-danger)',
    color: '#fff'
  },
  // Out of Stock
  new: {
    background: 'var(--status-new)',
    color: '#fff'
  },
  // New / announcement
  success: {
    background: 'var(--status-success)',
    color: '#fff'
  },
  neutral: {
    background: 'var(--neutral-600)',
    color: '#fff'
  }
};

/** Product-image overlay badge — matches Aquor's exact spec:
 * S5 text style, #FFFFFF text, 6px corner radius, 8px padding. */
function Badge({
  children,
  variant = 'neutral'
}) {
  const v = variants[variant] || variants.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-s5-size)',
      fontWeight: 'var(--text-s5-weight)',
      letterSpacing: 'var(--text-s5-tracking)',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-md)',
      padding: '8px',
      lineHeight: 1,
      ...v
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
const variants = {
  water: {
    background: 'rgba(0,140,199,0.10)',
    color: 'var(--water-blue)',
    border: '1px solid rgba(0,140,199,0.25)'
  },
  garden: {
    background: 'var(--garden-sage)',
    color: 'var(--garden-green)',
    border: '1px solid rgba(36,59,38,0.15)'
  },
  neutral: {
    background: 'var(--neutral-100)',
    color: 'var(--text-secondary)',
    border: '1px solid var(--neutral-300)'
  }
};
function Tag({
  children,
  variant = 'neutral',
  onRemove
}) {
  const v = variants[variant] || variants.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 500,
      borderRadius: 'var(--radius-pill)',
      padding: '6px 12px',
      ...v
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: onRemove,
    style: {
      cursor: 'pointer',
      opacity: 0.6
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const variants = {
  info: {
    background: 'var(--water-ink)',
    accent: 'var(--water-blue)'
  },
  success: {
    background: 'var(--water-ink)',
    accent: 'var(--status-success)'
  },
  error: {
    background: 'var(--water-ink)',
    accent: 'var(--status-danger)'
  }
};
function Toast({
  title,
  description,
  variant = 'info',
  onClose
}) {
  const v = variants[variant] || variants.info;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      background: v.background,
      color: '#fff',
      fontFamily: 'var(--font-body)',
      padding: '14px 16px',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-raised)',
      borderLeft: `3px solid ${v.accent}`,
      maxWidth: 340
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      marginBottom: description ? 4 : 0
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      opacity: 0.8
    }
  }, description)), onClose && /*#__PURE__*/React.createElement("span", {
    onClick: onClose,
    style: {
      cursor: 'pointer',
      opacity: 0.6,
      fontSize: 16,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  children,
  label,
  side = 'top'
}) {
  const [show, setShow] = React.useState(false);
  const posStyles = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: 8
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: 8
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-block'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      ...posStyles[side],
      whiteSpace: 'nowrap',
      background: 'var(--water-ink)',
      color: '#fff',
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-raised)',
      zIndex: 10
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange,
  disabled = false
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-body)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-sm)',
      border: `1.5px solid ${checked ? 'var(--water-blue)' : 'var(--neutral-300)'}`,
      background: checked ? 'var(--water-blue)' : '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--duration-fast) var(--ease-standard)',
      flexShrink: 0
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff',
      fontSize: 13,
      lineHeight: 1
    }
  }, "\u2713")), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  error,
  disabled = false,
  type = 'text',
  value,
  onChange,
  size = 'md'
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    disabled: disabled,
    value: value,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      padding: size === 'sm' ? '8px 12px' : '12px 14px',
      borderRadius: 'var(--radius-md)',
      border: `1px solid ${error ? 'var(--status-danger)' : focused ? 'var(--water-blue)' : 'var(--neutral-300)'}`,
      outline: 'none',
      boxShadow: focused ? 'var(--focus-ring)' : 'none',
      background: disabled ? 'var(--neutral-100)' : '#fff',
      color: 'var(--text-primary)',
      transition: 'border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)'
    }
  }), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--status-danger)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked,
  onChange,
  disabled = false
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-body)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(),
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      border: `1.5px solid ${checked ? 'var(--water-blue)' : 'var(--neutral-300)'}`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--water-blue)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  disabled = false
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    disabled: disabled,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      padding: '12px 14px',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--neutral-300)',
      background: disabled ? 'var(--neutral-100)' : '#fff',
      color: 'var(--text-primary)',
      outline: 'none'
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  disabled = false,
  label
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-body)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 40,
      height: 24,
      borderRadius: 'var(--radius-pill)',
      padding: 2,
      background: checked ? 'var(--water-blue)' : 'var(--neutral-300)',
      transition: 'background var(--duration-fast) var(--ease-standard)',
      display: 'flex',
      alignItems: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: '#fff',
      transform: checked ? 'translateX(16px)' : 'translateX(0)',
      transition: 'transform var(--duration-fast) var(--ease-standard)',
      boxShadow: '0 1px 2px rgba(0,0,0,0.2)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  title,
  children
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(37,45,55,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-raised)',
      padding: 28,
      minWidth: 320,
      maxWidth: 480,
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    onClick: onClose,
    style: {
      cursor: 'pointer',
      fontSize: 20,
      color: 'var(--neutral-600)'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-primary)',
      fontSize: 15,
      lineHeight: 1.5
    }
  }, children)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  active,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      borderBottom: '1px solid var(--neutral-300)',
      fontFamily: 'var(--font-body)'
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.value,
    onClick: () => onChange && onChange(t.value),
    style: {
      padding: '12px 0',
      cursor: 'pointer',
      fontSize: 15,
      fontWeight: active === t.value ? 600 : 400,
      color: active === t.value ? 'var(--water-ink)' : 'var(--neutral-600)',
      borderBottom: `2px solid ${active === t.value ? 'var(--water-blue)' : 'transparent'}`,
      transition: 'color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)'
    }
  }, t.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/shop/Footer.jsx
try { (() => {
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--water-ink)',
      color: '#fff',
      fontFamily: 'var(--font-body)',
      marginTop: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '56px 32px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/aquor-secondary-white.png",
    alt: "Aquor",
    style: {
      height: 28,
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'rgba(255,255,255,0.65)',
      maxWidth: 280,
      lineHeight: 1.6
    }
  }, "Patented quick-connect water access for homeowners, adventurers, and professionals. Based in Port Townsend, WA.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      marginBottom: 16,
      opacity: 0.6
    }
  }, "Shop"), ['Wall Hydrants', 'Garden Line', 'Accessories', 'Bundles'].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      fontSize: 14,
      marginBottom: 10,
      color: 'rgba(255,255,255,0.85)'
    }
  }, t))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      marginBottom: 16,
      opacity: 0.6
    }
  }, "Support"), ['Installation Guides', 'Warranty', 'Contact Us', 'FAQs'].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      fontSize: 14,
      marginBottom: 10,
      color: 'rgba(255,255,255,0.85)'
    }
  }, t))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      marginBottom: 16,
      opacity: 0.6
    }
  }, "Company"), ['Our Story', 'Where to Buy', 'Professionals', 'Press'].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      fontSize: 14,
      marginBottom: 10,
      color: 'rgba(255,255,255,0.85)'
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.12)',
      padding: '20px 32px',
      fontSize: 12,
      color: 'rgba(255,255,255,0.5)',
      textAlign: 'center'
    }
  }, "\xA9 2026 Aquor Water Systems. Patented quick-connect technology."));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/shop/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/shop/Header.jsx
try { (() => {
function Header({
  cartCount,
  onCartClick
}) {
  const [scrolled, setScrolled] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: '#fff',
      borderBottom: '1px solid var(--neutral-100)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '16px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/aquor-logo-primary.png",
    alt: "Aquor",
    style: {
      height: 32
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 32,
      fontSize: 15,
      fontWeight: 500,
      color: 'var(--water-ink)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Wall Hydrants"), /*#__PURE__*/React.createElement("span", null, "Garden Line"), /*#__PURE__*/React.createElement("span", null, "Accessories"), /*#__PURE__*/React.createElement("span", null, "Where to Buy"), /*#__PURE__*/React.createElement("span", null, "Support")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(window.AquorDesignSystem_fb15e1.IconButton, {
    "aria-label": "search",
    variant: "ghost"
  }, "\uD83D\uDD0D"), /*#__PURE__*/React.createElement(window.AquorDesignSystem_fb15e1.IconButton, {
    "aria-label": "cart",
    variant: "secondary",
    onClick: onCartClick
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative'
    }
  }, "\uD83D\uDED2", cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -8,
      right: -10,
      background: 'var(--water-blue)',
      color: '#fff',
      fontSize: 10,
      fontWeight: 700,
      borderRadius: '50%',
      width: 16,
      height: 16,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, cartCount))))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/shop/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/shop/HomePage.jsx
try { (() => {
function HomePage() {
  const DS = window.AquorDesignSystem_fb15e1;
  const {
    ProductCard,
    Button,
    Tag,
    Badge,
    Dialog,
    Toast
  } = DS;
  const [filter, setFilter] = React.useState('all');
  const [cart, setCart] = React.useState(0);
  const [toast, setToast] = React.useState(null);
  const [showCart, setShowCart] = React.useState(false);
  const products = [{
    name: 'House Hydrant V1+',
    price: 'Starting at $89.99',
    cat: 'wall',
    badge: 'New',
    badgeVariant: 'new'
  }, {
    name: 'Wall Hydrant V1',
    price: 'Starting at $74.99',
    cat: 'wall'
  }, {
    name: 'Garden Hydrant V1+',
    price: 'Starting at $84.99',
    cat: 'garden'
  }, {
    name: 'Hose Reel Mount',
    price: 'Starting at $39.99',
    cat: 'accessory'
  }, {
    name: 'Quick-Connect Nozzle',
    price: 'Starting at $24.99',
    cat: 'accessory'
  }, {
    name: 'Boat Hydrant V1',
    price: 'Starting at $69.99',
    cat: 'wall',
    badge: 'Out of Stock',
    badgeVariant: 'danger'
  }];
  const visible = filter === 'all' ? products : products.filter(p => p.cat === filter);
  function addToCart(name) {
    setCart(c => c + 1);
    setToast(name);
    setTimeout(() => setToast(null), 2600);
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement(window.Header, {
    cartCount: cart,
    onCartClick: () => setShowCart(true)
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: 480,
      overflow: 'hidden',
      background: `linear-gradient(180deg, rgba(37,45,55,0.55), rgba(37,45,55,0.55)), url('../../assets/imagery/lifestyle-photo-guide.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 32px',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 520,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-s1-size)',
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: '#7fd4f5',
      marginBottom: 16
    }
  }, "Patented Since 1999"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      marginBottom: 20
    }
  }, "Effortless outdoor water access."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,0.85)',
      marginBottom: 28
    }
  }, "Durable, quick-connect hydrants engineered for homeowners, adventurers, and professionals alike."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Shop Hydrants"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    style: {
      background: 'rgba(255,255,255,0.1)',
      color: '#fff',
      borderColor: 'rgba(255,255,255,0.4)'
    }
  }, "How It Works"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '48px 32px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      marginBottom: 8
    }
  }, "Shop the Ecosystem"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--neutral-600)',
      margin: 0
    }
  }, "Every product built around one universal quick-connect valve."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 36
    }
  }, [['all', 'All'], ['wall', 'Wall Hydrants'], ['garden', 'Garden Line'], ['accessory', 'Accessories']].map(([v, l]) => /*#__PURE__*/React.createElement("span", {
    key: v,
    onClick: () => setFilter(v),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    variant: filter === v ? 'water' : 'neutral'
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 32,
      marginBottom: 60
    }
  }, visible.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.name
  }, /*#__PURE__*/React.createElement(ProductCard, {
    image: "../../assets/logos/aquor-logomark-blue.png",
    hoverImage: "../../assets/imagery/lifestyle-photo-guide.png",
    name: p.name,
    price: p.price,
    badge: p.badge,
    badgeVariant: p.badgeVariant,
    onClick: () => {},
    style: {
      width: '100%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: p.badgeVariant === 'danger' ? 'secondary' : 'dark',
    size: "sm",
    disabled: p.badgeVariant === 'danger',
    onClick: () => addToCart(p.name)
  }, p.badgeVariant === 'danger' ? 'Notify Me' : 'Add to Cart')))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-garden)',
      padding: '56px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 32,
      textAlign: 'center'
    }
  }, [['Durable', 'Marine-grade engineering since 1999'], ['Effortless', 'One quick-connect valve, every product'], ['Reliable', 'Backed by years of testing'], ['Versatile', 'One system, endless outdoor uses']].map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--garden-green)',
      marginBottom: 8
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--neutral-600)'
    }
  }, d))))), /*#__PURE__*/React.createElement(window.Footer, null), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 24,
      right: 24,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    title: "Added to cart",
    description: toast,
    variant: "success",
    onClose: () => setToast(null)
  })), /*#__PURE__*/React.createElement(Dialog, {
    open: showCart,
    onClose: () => setShowCart(false),
    title: `Cart (${cart})`
  }, cart === 0 ? 'Your cart is empty.' : `${cart} item(s) in your cart. Checkout not wired up in this prototype.`));
}
window.HomePage = HomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/shop/HomePage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
