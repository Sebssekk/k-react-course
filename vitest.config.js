import { defineConfig } from "vite";

export default defineConfig({
    test:{
        environment: 'jsdom',
        coverage: {
            enabled: true,
            reporter: ['html'],
           // thresholds: {
           // // TO CHANGE THE PERCENTAGE FOR 
           // // A COVERAGE TEST TO BE PASSED    
           // }
        }
    }
})