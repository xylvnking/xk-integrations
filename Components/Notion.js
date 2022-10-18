import React, {useEffect} from 'react'

export default function Notion() {
    useEffect(() => {
        // console.log('ye')

        // fetch('/api/notion/payload')
        fetch('/api/notion/yeah/ok')
        // fetch('/api/ok')
        .then((res) => res.json())
        .then((x) => {
            console.log('got it')
    
          console.log(x)
        })

        fetch('/api/yeah')
    }, [])
  return (
    <div>Notion</div>
  )
}
