import test from "node:test";
import assert from "node:assert/strict";

import { getValue, setValue } from "./index.js";

test("set and get a value", (t) => {
  setValue(1234);
  assert.strictEqual(getValue(), 1234);
});
