/**
 * OK Welcome to the game.
 * To celebrate our independence day, lets having fun with some game
 *
 * This is a basic CTF game which is you need to get
 * some flag that hidden in this code. If you see some common "cipher"
 * pattern here, you will know which cipher was used here :))
 *
 * Something you need to do is only "realize" what cipher was used here
 * and what "key" to unlock the flag.
 * Basically the key was placed anywhere, so use your imagination.
 *
 * Try to execute `verify(someKey)` if you have known the right "key".
 *
 * You will got some GOPAY balance if you successfully get the flag,
 * good luck and having fun!
 *
 * Pro Tips: Use your browser devtool :))
 *
 * ––evilfactorylabs
 */

var f4r1zkus4y4ng_0x1468 = [
  'aW5kZXhPZg==',
  'SjB3UUt6SFl2VzNXWlFKNGNGVVUzZFNJSlVKU0lKU1k4RjM=',
  'cmVwbGFjZQ==',
  'YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWjAxMjM0NTY3ODk=',
  'RkdISUpLTE1OT1BRUlNUVVZXWFlaMDEyMzQ1Njc4OWFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6QUJDREU='
]
;(function(_0x565cba, _0x3fd632) {
  var _0x1f6032 = function(_0x4b611b) {
    while (--_0x4b611b) {
      _0x565cba['push'](_0x565cba['shift']())
    }
  }
  _0x1f6032(++_0x3fd632)
})(f4r1zkus4y4ng_0x1468, 0x1dd)
var f4r1zkus4y4ng_0x26b7 = function(_0x48e466, _0x5120e8) {
  _0x48e466 = _0x48e466 - 0x0
  var _0x3817a9 = f4r1zkus4y4ng_0x1468[_0x48e466]
  if (f4r1zkus4y4ng_0x26b7['GzHJMV'] === undefined) {
    ;(function() {
      var _0x39ce84
      try {
        var _0x29e1cc = Function(
          'return\x20(function()\x20' +
            '{}.constructor(\x22return\x20this\x22)(\x20)' +
            ');'
        )
        _0x39ce84 = _0x29e1cc()
      } catch (_0x348a1d) {
        _0x39ce84 = window
      }
      var _0x581608 =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
      _0x39ce84['atob'] ||
        (_0x39ce84['atob'] = function(_0x9aac70) {
          var _0x3066f = String(_0x9aac70)['replace'](/=+$/, '')
          for (
            var _0x5b17be = 0x0,
              _0x4434e5,
              _0x45a0d7,
              _0x5e6a28 = 0x0,
              _0x2ccbad = '';
            (_0x45a0d7 = _0x3066f['charAt'](_0x5e6a28++));
            ~_0x45a0d7 &&
            ((_0x4434e5 =
              _0x5b17be % 0x4 ? _0x4434e5 * 0x40 + _0x45a0d7 : _0x45a0d7),
            _0x5b17be++ % 0x4)
              ? (_0x2ccbad += String['fromCharCode'](
                  0xff & (_0x4434e5 >> ((-0x2 * _0x5b17be) & 0x6))
                ))
              : 0x0
          ) {
            _0x45a0d7 = _0x581608['indexOf'](_0x45a0d7)
          }
          return _0x2ccbad
        })
    })()
    f4r1zkus4y4ng_0x26b7['PMfFfW'] = function(_0x1209fc) {
      var _0x416082 = atob(_0x1209fc)
      var _0x440761 = []
      for (
        var _0x3bdcd1 = 0x0, _0x486d03 = _0x416082['length'];
        _0x3bdcd1 < _0x486d03;
        _0x3bdcd1++
      ) {
        _0x440761 +=
          '%' +
          ('00' + _0x416082['charCodeAt'](_0x3bdcd1)['toString'](0x10))[
            'slice'
          ](-0x2)
      }
      return decodeURIComponent(_0x440761)
    }
    f4r1zkus4y4ng_0x26b7['ejPTAy'] = {}
    f4r1zkus4y4ng_0x26b7['GzHJMV'] = !![]
  }
  var _0x3324ba = f4r1zkus4y4ng_0x26b7['ejPTAy'][_0x48e466]
  if (_0x3324ba === undefined) {
    _0x3817a9 = f4r1zkus4y4ng_0x26b7['PMfFfW'](_0x3817a9)
    f4r1zkus4y4ng_0x26b7['ejPTAy'][_0x48e466] = _0x3817a9
  } else {
    _0x3817a9 = _0x3324ba
  }
  return _0x3817a9
}

const x = 'JUNQUFYWTQN'
const r = /[A-Za-z0-9]/g
const f = _0x5eca44 =>
  _0x5eca44[f4r1zkus4y4ng_0x26b7('0x0')](r, _0x42f4cc =>
    f4r1zkus4y4ng_0x26b7('0x1')['charAt'](
      f4r1zkus4y4ng_0x26b7('0x2')[f4r1zkus4y4ng_0x26b7('0x3')](_0x42f4cc)
    )
  )

const verify = _0x4ed11a =>
  console['log'](
    _0x4ed11a === f(x)
      ? f(f4r1zkus4y4ng_0x26b7('0x4'))
      : f('XFQFMnNQFMPFS7TGFgFLNrFPFPFPF')
  )
