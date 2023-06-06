import { UserAction } from "../appState/user"

export const befor = (userCurrent: UserAction)=> {
   return window.addEventListener('beforeunload', (event)=>{
        let userOut: Array<UserAction> = JSON.parse(localStorage.getItem('user') ?? '[]') as any
        userOut.forEach((x) => {
            if (x.id === userCurrent.id) {
                x.isUserCurrent = true
                return
            }
            x.isUserCurrent = false
        })
        localStorage.removeItem('user')
        localStorage.setItem('user', JSON.stringify(userOut))
    })
} 
export const limitString = (string: string, numberLimit: number):string => {
    if (string.length > numberLimit) {
        return `${string.slice(numberLimit)}...`
    }
    return string
}