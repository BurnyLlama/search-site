import panels from "./panels.js"
import search from "./search.js"
import settings from "./settings.js"

settings.loadSettings()

search.init()
panels.init()
settings.init()