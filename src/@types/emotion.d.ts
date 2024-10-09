/// <reference types="@emotion/react/types/css-prop" />
import '@emotion/react';
import type { Theme as UITheme } from '@mui/material/styles';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface Theme extends UITheme {}
}
