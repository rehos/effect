import * as HttpApiError from "@effect/platform/HttpApiError"
import { describe, it } from "@effect/vitest"
import * as Schema from "effect/Schema"
import { deepStrictEqual } from "effect/test/util"

describe("HttpApiError", () => {
  describe("Issue schema", () => {
    it("path should handle symbol, string, and number", () => {
      const encodeSync = Schema.encodeSync(HttpApiError.Issue)
      const decodeSync = Schema.decodeSync(HttpApiError.Issue)
      const expectRoundtrip = (issue: typeof HttpApiError.Issue.Type) => {
        deepStrictEqual(decodeSync(encodeSync(issue)), issue)
      }

      expectRoundtrip({
        _tag: "Pointer",
        path: ["path", 1, Symbol.for("symbol")],
        message: "message"
      })
    })
  })
})
