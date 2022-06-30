export const getSearchedUser = (users,searchText) =>{
    return users.filter(user => user.username.toLowerCase().includes(searchText.toLowerCase()))
}