import type * as React from 'react';

/** Colour tokens a Shape may be filled with. */
export type ShapeColor = 'red' | 'yellow' | 'blue' | 'ink' | 'orange' | 'teal' | 'pink' | 'surface' | 'on-red' | 'on-yellow' | 'on-blue';
/** The primaries, each bound to its shape: red square, yellow triangle, blue circle. */
export type Primary = 'red' | 'yellow' | 'blue';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary: red fill, once per view. secondary: ink outline. quiet: underlined text. Default primary. */
  variant?: 'primary' | 'secondary' | 'quiet';
  size?: 'md' | 'sm';
}
export declare function Button(props: ButtonProps): React.ReactElement;

export interface TagProps {
  /** A primary adds its shape glyph; neutral is an outline. Default neutral. */
  tone?: Primary | 'neutral';
  children?: React.ReactNode;
  className?: string;
}
export declare function Tag(props: TagProps): React.ReactElement;

export interface CardProps {
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  /** A shape bled off the top-right corner. */
  mark?: 'circle' | 'square' | 'triangle' | 'half' | 'quarter';
  markColor?: ShapeColor;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}
export declare function Card(props: CardProps): React.ReactElement;

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
  hint?: React.ReactNode;
  /** Replaces the hint and marks the field invalid. */
  error?: React.ReactNode;
}
export declare function TextField(props: TextFieldProps): React.ReactElement;

export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: React.ReactNode;
  disabled?: boolean;
  className?: string;
}
export declare function Switch(props: SwitchProps): React.ReactElement;

export interface TabItem { id: string; label: React.ReactNode; content?: React.ReactNode }
export interface TabsProps {
  items: TabItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (id: string) => void;
  /** Accessible name for the tab list. */
  label?: string;
  id?: string;
  className?: string;
}
export declare function Tabs(props: TabsProps): React.ReactElement;

export interface MeterProps {
  label: string;
  value: number;
  max?: number;
  /** Default blue. */
  tone?: Primary;
  format?: (value: number, max: number) => string;
  className?: string;
}
export declare function Meter(props: MeterProps): React.ReactElement;

export interface ShapeProps {
  kind?: 'circle' | 'square' | 'triangle' | 'half' | 'quarter';
  color?: ShapeColor;
  /** Width in px. A half-disc is half as tall. Default 48. */
  size?: number;
  /** Gives the shape an accessible name; without it the shape is decorative. */
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Shape(props: ShapeProps): React.ReactElement;

declare global {
  interface Window {
    Bauhaus: {
      Button: typeof Button; Tag: typeof Tag; Card: typeof Card; TextField: typeof TextField;
      Switch: typeof Switch; Tabs: typeof Tabs; Meter: typeof Meter; Shape: typeof Shape;
    };
  }
}
