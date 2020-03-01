"use strict";
exports.__esModule = true;
var react_1 = require("react");
var constants_1 = require("../../utils/constants");
var Box_1 = require("../Box");
var Button_1 = require("../Button");
var Text_1 = require("../Text");
var Control = function (_a) {
    var rows = _a.rows, cols = _a.cols, onReset = _a.onReset, onChangeRow = _a.onChangeRow, onChangeCol = _a.onChangeCol;
    return (<Box_1["default"] inlineSize="100%" justifyContent="space-between">
    <Button_1["default"] onClick={onReset}>
      <Text_1["default"] fontSize={16} textTransform="capitalize">
        new game
      </Text_1["default"]>
    </Button_1["default"]>
    <Box_1["default"]>
      <Box_1["default"] marginInlineEnd="s5" flexDirection="column">
        <Text_1["default"] textTransform="uppercase" fontSize={13} color="primary">
          rows
        </Text_1["default"]>
        <Box_1["default"] padding="s2">
          <Button_1["default"] mini onClick={function () { return onChangeRow(-1); }} disable={rows === constants_1.MIN_SCALE}>
            -
          </Button_1["default"]>
          <Box_1["default"] marginInline="s2">
            <Text_1["default"] fontSize={16} color="primary">
              {rows}
            </Text_1["default"]>
          </Box_1["default"]>
          <Button_1["default"] mini onClick={function () { return onChangeRow(1); }} disable={rows === constants_1.MAX_SCALE}>
            +
          </Button_1["default"]>
        </Box_1["default"]>
      </Box_1["default"]>
      <Box_1["default"] flexDirection="column">
        <Text_1["default"] textTransform="uppercase" fontSize={13} color="primary">
          cols
        </Text_1["default"]>
        <Box_1["default"] padding="s2">
          <Button_1["default"] mini onClick={function () { return onChangeCol(-1); }} disable={cols === constants_1.MIN_SCALE}>
            -
          </Button_1["default"]>
          <Box_1["default"] marginInline="s2">
            <Text_1["default"] fontSize={16} color="primary">
              {cols}
            </Text_1["default"]>
          </Box_1["default"]>
          <Button_1["default"] mini onClick={function () { return onChangeCol(1); }} disable={cols === constants_1.MAX_SCALE}>
            +
          </Button_1["default"]>
        </Box_1["default"]>
      </Box_1["default"]>
    </Box_1["default"]>
  </Box_1["default"]>);
};
exports["default"] = react_1["default"].memo(Control);
