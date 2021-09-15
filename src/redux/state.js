let store = {
    _state: {
        profilePage: {
            postsData: [
                {
                    id: '1',
                    message: 'My first post',
                    likesCount: 2
                },
                {
                    id: '2',
                    message: 'Hey, how are you?',
                    likesCount: 6
                }
            ],
            newPostText: 'test text'
        },
        dialogsPage: {
            dialogDataObjs: [
                {
                    id: '1',
                    name: 'Maria',
                    isActive: true
                },
                {
                    id: '2',
                    name: 'Nika',
                    isActive: false
                },
                {
                    id: '3',
                    name: 'Ana',
                    isActive: false
                }
            ],
            messagesData: [
                {
                    id: '1',
                    message: 'Hi'
                },
                {
                    id: '2',
                    message: 'What\'s up?'
                },
                {
                    id: '3',
                    message: 'Love you'
                },
                {
                    id: '4',
                    message: 'Kiss'
                }
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state _callSubscriber function');
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };

        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {

        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;

window.store = store;