export const getSortedPost = (posts,sortBy) =>{
    let sortedPosts = [...posts];
    switch(sortBy){
        case "Trending":{
            return sortedPosts.sort((a,b) => b.likes.likeCount - a.likes.likeCount);
        }
        case "Latest_First":{
            return sortedPosts.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
        }
        case "Oldest_First":{
            return sortedPosts.sort((a,b) => new Date(a.createdAt) - new Date(b.createdAt))
        }
        default : {
            return sortedPosts
        }
    }
}