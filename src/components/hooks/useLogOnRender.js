import { useEffect } from "react"

export const useLogOnRender = (componentName) => {
  useEffect(() => {
    console.log(`**** Component ${componentName} Mounted ****`)
  },[])
  console.log(`[*] --- Component ${componentName} Rendered --- [*]`)
}
