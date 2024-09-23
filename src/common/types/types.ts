import type { VNode } from 'vue'
import type { ButtonProps } from 'primevue/button';
import type { ImageProps } from "primevue/image"
export type Size = SizeObj | number
export type SizeObj = { width: any, height?: any }

export type AppIconProps = {
  icon: number | string
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

