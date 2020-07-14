import React from 'react'
import { useDispatch } from "react-redux";


import { deleteTweet } from '../store/actions/tweetAction'

function TweetBox(props) {
    const { tweet } = props
    const dispatch = useDispatch()

    const onDeletePost = (id) => {
        dispatch(deleteTweet(id))
    }

    const onHandleLike = (tweet) => {
        // console.log(tweet.Likes)
        const userid = localStorage.getItem('UserId')
        let checkLike = true
        // console.log(userid)
        tweet.Likes.forEach(el => {
            if (el.UserId === Number(userid)) {
                console.log("unlike", el)
                checkLike = !checkLike
            }
        })
        if (checkLike) {
            console.log("like")
        }
    }



    return (
        <>
            <div className="row">
                <div className="col-1">
                    <img style={{ "width": "50px", "height": "50px" }} className="rounded" src={tweet.User.image_url} alt="" />
                </div>
                <div className="col-10">
                    <div className="float-left ml-3">
                        <span className="user-name mr-1">{tweet.User.username}</span> <span className="text-muted">{tweet.User.email}</span>
                        <p className="font-weight-light">{tweet.tweet}
                        </p>

                        <div className="comment-bar">
                            <span className="mr-5">
                                <i onClick={() => onHandleLike(tweet)} className="fa fa-heart"></i> </span>
                            <span className="mr-5 "><i onClick={() => console.log("Comment")} className="fa fa-comment"></i> </span>
                            <span className="mr-5 "><i onClick={() => console.log("Share")} className="fa fa-retweet"></i> </span>
                        </div>
                    </div>

                </div>
                <div className="col-1">
                    {/* <button onClick={() => onDeletePost(tweet.id)} type="button" className="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button> */}
                    <div className="btn-group">

                        <button type="button" className="btn btn-outline-info btn-sm dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <div className="dropdown-menu">
                            <a onClick={() => onDeletePost(tweet.id)} className="dropdown-item" href="true">Delete</a>
                            <a className="dropdown-item" href="true">Edit</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TweetBox