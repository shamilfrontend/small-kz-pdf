import { createApp } from 'vue'
import PdfViewer from 'vue-pdf-search-viewer'

import AppComponent from './App.vue'

const app = createApp(AppComponent)
app.use(PdfViewer)

app.mount('#app')
