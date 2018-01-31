const mars = {}

{
  let UPDATE_WAIT = 33
  const canvas = document.createElement('canvas')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  document.body.appendChild(canvas)
  document.body.style.overflow = 'hidden'

  mars.ctx = canvas.getContext('2d')

  mars.update = () => { }
  mars.draw = () => { }
  mars.load = () => { }

  window.onload = () => {
    mars.load()

    let currentTime = 0
    function main (timestamp) {
      let frameTime = timestamp - currentTime

      if (frameTime >= UPDATE_WAIT) {
        currentTime = timestamp
        let accumulator = frameTime

        while (accumulator >= UPDATE_WAIT) {
          mars.update()
          accumulator -= UPDATE_WAIT
        }

        mars.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
        mars.draw()
      }
      window.requestAnimationFrame(main)
    }
    window.requestAnimationFrame(main)
  }

  const keyCodes = {
    8: 'backspace',
    9: 'tab',
    13: 'enter',
    16: 'shift',
    17: 'ctrl',
    18: 'alt',
    19: 'pause/break',
    20: 'caps lock',
    27: 'escape',
    33: 'page up',
    34: 'page down',
    35: 'end',
    36: 'home',
    37: 'left arrow',
    38: 'up arrow',
    39: 'right arrow',
    40: 'down arrow',
    45: 'insert',
    46: 'delete',
    48: '0',
    49: '1',
    50: '2',
    51: '3',
    52: '4',
    53: '5',
    54: '6',
    55: '7',
    56: '8',
    57: '9',
    65: 'a',
    66: 'b',
    67: 'c',
    68: 'd',
    69: 'e',
    70: 'f',
    71: 'g',
    72: 'h',
    73: 'i',
    74: 'j',
    75: 'k',
    76: 'l',
    77: 'm',
    78: 'n',
    79: 'o',
    80: 'p',
    81: 'q',
    82: 'r',
    83: 's',
    84: 't',
    85: 'u',
    86: 'v',
    87: 'w',
    88: 'x',
    89: 'y',
    90: 'z',
    91: 'left window key',
    92: 'right window key',
    93: 'select key',
    96: 'numpad 0',
    97: 'numpad 1',
    98: 'numpad 2',
    99: 'numpad 3',
    100: 'numpad 4',
    101: 'numpad 5',
    102: 'numpad 6',
    103: 'numpad 7',
    104: 'numpad 8',
    105: 'numpad 9',
    106: 'multiply',
    107: 'add',
    109: 'subtract',
    110: 'decimal point',
    111: 'divide',
    112: 'f1',
    113: 'f2',
    114: 'f3',
    115: 'f4',
    116: 'f5',
    117: 'f6',
    118: 'f7',
    119: 'f8',
    120: 'f9',
    121: 'f10',
    122: 'f11',
    123: 'f12',
    144: 'num lock',
    145: 'scroll lock',
    186: 'semi-colon',
    187: 'equal sign',
    188: 'comma',
    189: 'dash',
    190: 'period',
    191: 'forward slash',
    192: 'grave accent',
    219: 'open bracket',
    220: 'back slash',
    221: 'close braket',
    222: 'single quote',
    242: 'hiragana/katakana',
    243: 'half-width/full-width',
    244: 'kanji',
    255: 'toggle touchpad',
  }
  mars.keys = {}
  document.addEventListener('keydown', event => {
    mars.keys[keyCodes[event.keyCode]] = true
  })

  document.addEventListener('keyup', event => {
    mars.keys[keyCodes[event.keyCode]] = undefined
  })

  const mouseButtons = {
    0: 'left',
    1: 'middle',
    2: 'right',
  }
  mars.buttons = {}
  document.addEventListener('mousedown', event => {
    mars.buttons[mouseButtons[event.button]] = true
  })
  document.addEventListener('mouseup', event => {
    mars.buttons = {}
  })
  document.addEventListener('mouseout', event => {
    mars.buttons = {}
  })

  mars.mouseCoordinates = [0, 0]
  document.addEventListener('mousemove', event => {
    mars.mouseCoordinates = [event.pageX, event.pageY]
  })

  mars.collided = (coords1, size1, coords2, size2) => {
    return coords1[0] < coords2[0] + size2[0] &&
           coords2[0] < coords1[0] + size1[0] &&
           coords1[1] < coords2[1] + size2[1] &&
           coords2[1] < coords1[1] + size1[1]
  }

  mars.randRange = (low, high) => {
    return Math.floor(Math.random() * (high - low)) + low
  }
}
