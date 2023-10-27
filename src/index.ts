// src/index.ts
import { App } from 'vue'

import * as components from './components'

const BeeUILibrary = {
    install(app: App) {
        // Auto import all components
        for (const componentKey in components) {
            app.use((components as any)[componentKey])
        }
    }
}

export default BeeUILibrary

// export all components as vue plugin
export * from './components'
