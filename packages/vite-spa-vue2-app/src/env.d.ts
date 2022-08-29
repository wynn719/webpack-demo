/// <reference types="vite/client" />

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

import { ComponentRenderProxy } from '@vue/composition-api';
import { VNode } from 'vue';

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface ElementClass extends ComponentRenderProxy {}
    interface ElementAttributesProperty {
      $props: any; // specify the property name to use
    }
    type LibraryManagedAttributes = { [name: string]: any };

    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}