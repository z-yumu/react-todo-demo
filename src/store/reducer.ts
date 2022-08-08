const defaultState = {
    msg: 'z-yumu',
}

interface IAction {
    type: string
    value: string
}

//eslint-disable-next-line
export default function (state = defaultState, action: IAction) {
    const newState = { ...state }
    switch (action.type) {
        case 'changeMsgFn':
            newState.msg = action.value
            break
    }
    return newState
}
