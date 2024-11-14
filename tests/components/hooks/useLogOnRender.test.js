import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useLogOnRender } from "../../../src/components/hooks/useLogOnRender";

describe("Testing Custom hooks", ()=> {
    it("Testing useLogOnRender",() => {
        const {result} = renderHook(useLogOnRender)
        expect(result.current).toMatch(/Rendered/i)
    })
})