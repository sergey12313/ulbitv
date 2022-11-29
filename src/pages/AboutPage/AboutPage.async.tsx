import React from "react";

const wait = (t: number)=> new Promise((resolve)=> {
    setTimeout(resolve, t)
})

export const AboutPageAsync = React.lazy(async ()=> {
   await wait(5000)
   return  import('./AboutPage')
}



)