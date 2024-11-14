import React from "react";
import { logRoles, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import '@testing-library/jest-dom/vitest'
import { LazyButton } from "../../../src/components/testingDemo/LazyButton";


describe("Testing lazy",()=> {
    it("Lazy login",async () => {
        const view = render(<LazyButton/>)

        screen.debug()
        console.log("\n#####################################\n")
        logRoles(view.container)

        const welcomButton = await screen.findByRole('button', {
            name: /welcome.*/i
        },
        {
            timeout: 2000,
        })
        expect(welcomButton).toBeInTheDocument()
    })
})