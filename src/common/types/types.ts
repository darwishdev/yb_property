import type { VNode } from 'vue'
import type { ButtonProps } from 'primevue/button';
import type { ImageProps } from "primevue/image"
import { SUPPORTED_LOCALES_TYPE } from '../i18n/i18n';
export type Size = SizeObj | number
export type SizeObj = { width: any, height?: any }

export type AppIconProps = {
  icon: number | string
  click?: (e: Event) => void
  size?: 'small' | 'medium' | 'large'
  iconType?: 'primevue' | 'svg'
  color?: string
}
export type AppDialogProps = {
  header?: string,
  description?: string,
  actions?: ButtonProps[]
}

export type AppIconSlots = {
  top(): VNode;
}

export type AppImageProps = {
  src: string
  imageProps?: ImageProps
  size?: Size
}

export type LocaleType = { dir: 'ltr' | 'rtl', locale: SUPPORTED_LOCALES_TYPE }
