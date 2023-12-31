/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { VDataTable } from 'vuetify/labs/VDataTable'
import * as components from 'vuetify/components'
import * as labsComponents from 'vuetify/labs/components'

import {

  VDataTableServer,
  VDataTableVirtual,
} from "vuetify/labs/VDataTable";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {
    VDataTable,
    ...components,
    ...labsComponents,

    VDataTableServer,
    VDataTableVirtual,
  },

  VBtn: {
    color: 'primary',
    variant: 'outlined',
    rounded: true,
  },

  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
        },
      },
    },
  },



})
