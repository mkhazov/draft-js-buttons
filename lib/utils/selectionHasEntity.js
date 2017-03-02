'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = selectionHasEntity;

var _getEntityKeyForSelection = require('draft-js/lib/getEntityKeyForSelection');

var _getEntityKeyForSelection2 = _interopRequireDefault(_getEntityKeyForSelection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function selectionHasEntity(editorState) {
  var contentState = editorState.getCurrentContent();
  var targetSelection = editorState.getSelection();

  var entityKey = (0, _getEntityKeyForSelection2.default)(contentState, targetSelection);

  return !!entityKey;
};