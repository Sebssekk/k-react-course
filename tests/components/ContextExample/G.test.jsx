import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { G } from "../../../src/components/ContextExample/G";
import React from "react";
import "@testing-library/jest-dom/vitest"
import { CountContext } from "../../../src/components/ContextExample/Root";

describe("Provider example in test", ()=> {
    it("Rendering G Component without the full tree",()=> {
        render(<G/>, {
            wrapper: ({children}) => 
                        <CountContext.Provider value={{state: {},dispatch: ()=>{}}}>
                            {children}
                        </CountContext.Provider>,

        })
        const heading = screen.getByRole('heading')
        expect(heading).toHaveTextContent('G')
    })
})