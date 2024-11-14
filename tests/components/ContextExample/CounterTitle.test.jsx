import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CounterTitle } from "../../../src/components/ContextExample/CounterTitle";
import React from "react";
// To use jsdom check methods
import '@testing-library/jest-dom/vitest'


describe("Counter Title Tests", () => {
    it("Rendering Test with props", () => {
        render(<CounterTitle text="Test Counter" count={0}/>)
        
        // Will caych any h1, h2, .....
        const titleHeading = screen.getByRole('heading')
        screen.debug()
        expect(titleHeading).toBeInTheDocument()
        expect(titleHeading).toHaveTextContent('Test Counter : 0')
    })
})
