var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _a;
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { styled } from '../../../stitches.config';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import Box from '../Box';
import Status from '../Status';
var StyledAvatar = styled(AvatarPrimitive.Root, {
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    overflow: 'hidden',
    userSelect: 'none',
    boxSizing: 'border-box',
    display: 'flex',
    flexShrink: 0,
    position: 'relative',
    border: 'none',
    fontFamily: 'inherit',
    lineHeight: '1',
    margin: '0',
    outline: 'none',
    padding: '0',
    fontWeight: '500',
    color: '$hiContrast',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        borderRadius: 'inherit',
        boxShadow: 'inset 0px 0px 1px rgba(0, 0, 0, 0.12)',
    },
    variants: {
        size: {
            '1': {
                width: '$3',
                height: '$3',
            },
            '2': {
                width: '$5',
                height: '$5',
            },
            '3': {
                width: '$6',
                height: '$6',
            },
            '4': {
                width: '$7',
                height: '$7',
            },
            '5': {
                width: '$8',
                height: '$8',
            },
            '6': {
                width: '$9',
                height: '$9',
            },
        },
        variant: {
            hiContrast: {
                backgroundColor: '$hiContrast',
                color: '$loContrast',
            },
            gray: {
                backgroundColor: '$slate5',
            },
            tomato: {
                backgroundColor: '$tomato5',
            },
            red: {
                backgroundColor: '$red5',
            },
            crimson: {
                backgroundColor: '$crimson5',
            },
            pink: {
                backgroundColor: '$pink5',
            },
            plum: {
                backgroundColor: '$plum5',
            },
            purple: {
                backgroundColor: '$purple5',
            },
            violet: {
                backgroundColor: '$violet5',
            },
            indigo: {
                backgroundColor: '$indigo5',
            },
            blue: {
                backgroundColor: '$blue5',
            },
            cyan: {
                backgroundColor: '$cyan5',
            },
            teal: {
                backgroundColor: '$teal5',
            },
            green: {
                backgroundColor: '$green5',
            },
            grass: {
                backgroundColor: '$grass5',
            },
            brown: {
                backgroundColor: '$brown5',
            },
            bronze: {
                backgroundColor: '$bronze5',
            },
            gold: {
                backgroundColor: '$gold5',
            },
            sky: {
                backgroundColor: '$sky5',
            },
            mint: {
                backgroundColor: '$mint5',
            },
            lime: {
                backgroundColor: '$lime5',
            },
            yellow: {
                backgroundColor: '$yellow5',
            },
            amber: {
                backgroundColor: '$amber5',
            },
            orange: {
                backgroundColor: '$orange5',
            },
        },
        shape: {
            square: {
                borderRadius: '$2',
            },
            circle: {
                borderRadius: '50%',
            },
        },
        inactive: {
            true: {
                opacity: '.3',
            },
        },
        interactive: {
            true: {
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    bottom: '0',
                    left: '0',
                    backgroundColor: 'rgba(0,0,0,.08)',
                    opacity: '0',
                    pointerEvents: 'none',
                    transition: 'opacity 25ms linear',
                },
                '@hover': {
                    '&:hover': {
                        '&::after': {
                            opacity: '1',
                        },
                    },
                },
                '&[data-state="open"]': {
                    '&::after': {
                        backgroundColor: 'rgba(0,0,0,.12)',
                        opacity: '1',
                    },
                },
            },
        },
    },
    defaultVariants: {
        size: '2',
        variant: 'gray',
        shape: 'circle',
    },
});
var StyledAvatarImage = styled(AvatarPrimitive.Image, {
    display: 'flex',
    objectFit: 'cover',
    boxSizing: 'border-box',
    height: '100%',
    verticalAlign: 'middle',
    width: '100%',
});
var StyledAvatarFallback = styled(AvatarPrimitive.Fallback, {
    textTransform: 'uppercase',
    variants: {
        size: {
            '1': {
                fontSize: '10px',
                lineHeight: '15px',
            },
            '2': {
                fontSize: '$3',
            },
            '3': {
                fontSize: '$6',
            },
            '4': {
                fontSize: '$7',
            },
            '5': {
                fontSize: '$8',
            },
            '6': {
                fontSize: '$9',
            },
        },
    },
    defaultVariants: {
        size: '2',
    },
});
export var AvatarNestedItem = styled('div', {
    boxShadow: '0 0 0 2px $colors$loContrast',
    borderRadius: '50%',
});
export var AvatarGroup = styled('div', (_a = {
        display: 'flex',
        flexDirection: 'row-reverse'
    },
    _a["& ".concat(AvatarNestedItem, ":nth-child(n+2)")] = {
        marginRight: '-$1',
    },
    _a));
// eslint-disable-next-line react/display-name
var Avatar = React.forwardRef(function (_a, forwardedRef) {
    var alt = _a.alt, src = _a.src, fallback = _a.fallback, size = _a.size, variant = _a.variant, shape = _a.shape, css = _a.css, status = _a.status, props = __rest(_a, ["alt", "src", "fallback", "size", "variant", "shape", "css", "status"]);
    return (_jsxs(Box, __assign({ css: __assign(__assign({}, css), { position: 'relative', height: 'fit-content', width: 'fit-content' }) }, { children: [_jsxs(StyledAvatar, __assign({}, props, { ref: forwardedRef, size: size, variant: variant, shape: shape }, { children: [_jsx(StyledAvatarImage, { alt: alt, src: src }), _jsx(StyledAvatarFallback, __assign({ size: size }, { children: fallback }))] })), status && (_jsx(Box, __assign({ css: {
                    position: 'absolute',
                    bottom: '0',
                    right: '0',
                    boxShadow: '0 0 0 3px $colors$loContrast',
                    borderRadius: '$round',
                    mr: '-3px',
                    mb: '-3px',
                } }, { children: _jsx(Status, { size: size && size > 2 ? '2' : '1', variant: status }) })))] })));
});
export default Avatar;
