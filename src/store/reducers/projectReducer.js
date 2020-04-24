const initState = {
    projects: [
        {id: '1', title: 'ยังไม่รู้จะใส่อะไรดี', content: 'blah blah blah'},
        {id: '2', title: 'ช่วยคิดทีตะ!!!', content: 'blah blah blah'},
        {id: '3', title: 'คิดไม่ออก', content: 'blah blah blah'}
        ]
    }

    const projectReducer = (state = initState, action) => {
        switch (action.type) {
            case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
            case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
            default:
            return state;
        }
    }
    
    export default projectReducer