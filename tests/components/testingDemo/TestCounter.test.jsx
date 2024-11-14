import { describe, expect, it } from "vitest";
import React from "react";
import "@testing-library/jest-dom/vitest"
import { cleanup, logRoles, render, screen } from "@testing-library/react";
import { TestCounter } from "../../../src/components/testingDemo/TestCounter";
import user from "@testing-library/user-event"

describe("Testing User interactions", ()=>{
    it("Testing clicking +1/-1 updating the UI", async () => {
        user.setup()
        render(<TestCounter/>)
        const incrementBtn = screen.getByRole('button',{name: "+1"})
        const decrementBtn = screen.getByRole('button',{name: "-1"})

        const header = screen.getByRole('heading', {level: 1})
        
        await user.click(incrementBtn)
        expect(header).toHaveTextContent(/: 1/i)

        await user.dblClick(decrementBtn)
        expect(header).toHaveTextContent(/: -1/i)

    })

    it("Testing updating Count Message update UI", async () => {
        user.setup()
        // ALREADY MOUNTED IN THE DOM
        //const view = render(<TestCounter/>)
        const header = screen.getByRole('heading', {level: 1})
        const updateBtn = screen.getByRole('button',{name: /update/i})
        const messageInput = screen.getByRole('textbox')
        const testMsg = "Test Message"
        
        await user.type(messageInput,testMsg)
        expect(messageInput).toHaveValue(testMsg)

        await user.click(updateBtn)
        expect(header).toHaveTextContent(new RegExp(String.raw`${testMsg} :.*`,'i'))

    })
})