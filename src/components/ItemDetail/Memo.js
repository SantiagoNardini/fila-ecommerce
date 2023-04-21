import { memo } from 'react'


const Memo = memo(() => {

    for (let i = 1; i <= 1000; i++) {
        console.log("Me rendericé " + i)
    }

    return (
        <div>
            
        </div>
    )
})

export default Memo