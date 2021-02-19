import panels from "./panels.js"
import search from "./search.js"
import settings from "./settings.js"
import easterEggGame from "./game.js"

settings.loadSettings()

search.init()
panels.init()
settings.init()
easterEggGame.init()